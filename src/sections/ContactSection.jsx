import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { content as c } from '../data/content';
import ContactForm from '../components/forms/ContactForm';
/** Split consultation section with verified business contacts and validated form. */
export default function ContactSection() {
  return (
    <section className="consultation-scene relative isolate overflow-hidden border-y border-gold/60 bg-navy text-white">
      <img src={`${import.meta.env.BASE_URL}images/skyline.webp`} alt="" aria-hidden="true" width="1536" height="1024" loading="lazy" className="consultation-scene__image absolute inset-0 -z-20 size-full object-cover" />
      <div className="consultation-scene__lighting pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto grid max-w-7xl items-center gap-7 px-5 py-5 sm:px-8 lg:grid-cols-[0.9fr_1.3fr] lg:gap-9">
        <div className="consultation-scene__copy lg:pl-24">
          <p className="mb-2 inline-block border-b border-gold/60 text-xs font-semibold tracking-widest text-gold-light">Get in Touch</p>
          <h2 className="max-w-sm text-3xl leading-tight font-semibold sm:text-4xl">Book a Free<br />Consultation</h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/90">{c.contact.description}</p>
          <div className="mt-5 space-y-3 text-xs">
            <p className="flex gap-3">
              <MapPin className="size-5 shrink-0 text-gold-light" />
              {c.contact.office}
            </p>
            <a href={c.contact.phoneHref} className="flex items-center gap-3">
              <Phone className="size-5 shrink-0 text-gold-light" />
              {c.contact.phone}
            </a>
            <a href={`mailto:${c.contact.email}`} className="flex gap-3">
              <Mail className="size-5 shrink-0 text-gold-light" />
              <span className="break-all">{c.contact.email}</span>
            </a>
            <a href={c.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              <MessageCircle className="size-5 text-gold-light" />
              {c.ui.whatsapp}
            </a>
          </div>
          <p className="mt-5 max-w-sm border-t border-white/25 pt-3 text-[10px] leading-5 text-white/80">
            An initial conversation helps define the documents and specialist inputs needed for your property. Project advice follows a
            review of the relevant facts.
          </p>
        </div>
        <div className="min-w-0 text-navy">
          <ContactForm compact />
        </div>
      </div>
    </section>
  );
}
