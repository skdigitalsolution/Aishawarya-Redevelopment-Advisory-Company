import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { content as c } from '../data/content';
import SectionHeading from '../components/ui/SectionHeading';
import ContactForm from '../components/forms/ContactForm';
/** Split consultation section with verified business contacts and validated form. */
export default function ContactSection() {
  return (
    <section className="border-b border-gold/50 bg-linear-to-br from-navy-dark to-navy text-white">
      <div className="section-wrap grid items-start gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <SectionHeading label={c.labels.contact} title={c.contact.title} subtitle={c.contact.description} light align="left" />
          <div className="mt-8 space-y-6 text-sm">
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
          <p className="mt-10 max-w-sm border-t border-white/15 pt-6 text-xs leading-6 text-white/65">
            An initial conversation helps define the documents and specialist inputs needed for your property. Project advice follows a
            review of the relevant facts.
          </p>
        </div>
        <div className="min-w-0 text-navy">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
