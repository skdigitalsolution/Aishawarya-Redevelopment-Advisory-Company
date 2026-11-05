import { useId, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { LoaderCircle, Mail, MessageCircle, Send } from 'lucide-react';
import { content as c } from '../../data/content';
import { createDraft, createHandoff, validateFields } from './formUtils';
import FormField from './FormField';
/** @param {{fields: object[], title: string, assessment?: boolean}} props Validated enquiry with real send or explicit handoff. */
export default function EnquiryForm({ fields, title, assessment = false, compact = false }) {
  const id = useId();
  const form = useRef(null);
  const busy = useRef(false);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [state, setState] = useState('idle');
  const [draft, setDraft] = useState(null);
  const service = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const configured = Boolean(!assessment && service && template && key);
  const change = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((v) => ({ ...v, [name]: undefined }));
    setState('idle');
    setDraft(null);
  };
  const submit = async (e) => {
    e.preventDefault();
    if (busy.current) return;
    const found = validateFields(fields, values);
    setErrors(found);
    if (Object.keys(found).length) {
      setState('invalid');
      form.current?.elements.namedItem(Object.keys(found)[0])?.focus();
      return;
    }
    busy.current = true;
    setState('loading');
    const message = createDraft(title, fields, values);
    try {
      if (configured) {
        await emailjs.send(
          service,
          template,
          {
            ...values,
            from_name: values.fullName,
            reply_to: values.email,
            phone: values.mobile,
            subject: title,
            message,
            to_email: c.contact.email,
          },
          { publicKey: key },
        );
        setState('sent');
      } else {
        await Promise.resolve();
        setDraft(createHandoff(title, message));
        setState('ready');
      }
    } catch {
      setState('error');
    } finally {
      busy.current = false;
    }
  };
  return (
    <form
      ref={form}
      onSubmit={submit}
      noValidate
      aria-label={title}
      className={compact ? 'consultation-glass rounded-2xl border border-white/80 bg-white/85 p-5 shadow-card backdrop-blur-md sm:p-6' : 'rounded-2xl border border-navy/10 bg-white p-5 shadow-card sm:p-8'}
    >
      <h3 className="mb-3 text-2xl font-semibold">{title}</h3>
      {assessment && <p className="mb-4 text-xs leading-6 text-navy/65">{c.form.notAdvice}</p>}
      {!configured && <p className={compact ? 'mb-3 text-[10px] leading-4 text-navy/70' : 'mb-6 rounded-lg bg-marble p-3 text-xs leading-6 text-navy/70'}>{compact ? 'Prepare your enquiry, then choose email or WhatsApp to send it.' : c.form.intro}</p>}
      <div className={`grid sm:grid-cols-2 ${compact ? 'gap-3' : 'gap-5'}`}>
        {fields.map((field) => (
          <FormField
            key={field.name}
            field={field}
            prefix={id}
            value={values[field.name] ?? ''}
            error={errors[field.name]}
            onChange={change}
            compact={compact}
          />
        ))}
      </div>
      <p className={`${compact ? 'mt-3' : 'mt-5'} text-[10px] leading-5 text-navy/55`}>{c.form.privacy}</p>
      <button
        type="submit"
        disabled={state === 'loading' || state === 'sent'}
        className="mt-5 flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-gold-light bg-linear-to-b from-gold-light to-gold px-5 py-3 text-sm font-semibold text-navy-dark transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state === 'loading' ? (
          <LoaderCircle className="size-4 animate-spin motion-reduce:animate-none" />
        ) : (
          <Send className="size-4" aria-hidden="true" />
        )}
        {state === 'loading' ? (configured ? c.ui.sending : c.ui.prepare) : assessment ? c.ui.readiness : c.ui.submit}
      </button>
      <div
        role={['invalid', 'error'].includes(state) ? 'alert' : 'status'}
        aria-live="polite"
        className={`mt-4 text-xs leading-6 ${['invalid', 'error'].includes(state) ? 'text-red-700' : 'text-navy/75'}`}
      >
        {state === 'invalid' && c.form.invalid}
        {state === 'error' && c.form.failed}
        {state === 'sent' && c.form.sent}
        {state === 'ready' && c.form.ready}
      </div>
      {draft && (
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={draft.email}
            className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-navy/20 px-4 py-3 text-xs font-semibold"
          >
            <Mail className="size-4" aria-hidden="true" />
            {c.form.email}
          </a>
          <a
            href={draft.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-green-800 px-4 py-3 text-xs font-semibold text-white"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            {c.form.whatsapp}
          </a>
        </div>
      )}
    </form>
  );
}
