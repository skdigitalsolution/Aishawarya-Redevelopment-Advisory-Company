import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { content as c } from '../../data/content';
import BrandLogo from './BrandLogo';
/** Brand footer with verified contact details and real destination links. */
export default function Footer() {
  return (
    <footer className="border-t border-gold/50 bg-navy-dark px-5 pt-12 pb-6 text-white sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-9 md:grid-cols-2 xl:grid-cols-[1.4fr_0.8fr_1fr_1.3fr]">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <BrandLogo footer />
            <span className="max-w-52 font-heading text-lg text-gold-light">{c.company.name}</span>
          </Link>
          <p className="mt-4 max-w-sm text-xs leading-6 text-white/65">{c.footer.description}</p>
          <p className="mt-3 text-[10px] leading-5 text-gold-light/80">{c.company.tagline}</p>
        </div>
        <div>
          <h2 className="mb-4 font-sans text-sm font-semibold text-gold-light">{c.footer.linksTitle}</h2>
          {[
            ['About Us', '/about-us'],
            ['Founder & Leadership', '/founder-leadership'],
            ['Projects & Case Studies', '/projects'],
            ['Knowledge Centre', '/knowledge-centre'],
          ].map(([label, to]) => (
            <Link key={to} to={to} className="block py-2 text-xs text-white/75 hover:text-gold-light">
              {label}
            </Link>
          ))}
        </div>
        <div>
          <h2 className="mb-4 font-sans text-sm font-semibold text-gold-light">{c.footer.servicesTitle}</h2>
          {[
            ['Society Redevelopment', '/society-redevelopment'],
            ['Self-Redevelopment', '/self-redevelopment'],
            ['Land Banking & Advisory', '/land-banking'],
            ['All 20 Services', '/services'],
          ].map(([label, to]) => (
            <Link key={to} to={to} className="block py-2 text-xs text-white/75 hover:text-gold-light">
              {label}
            </Link>
          ))}
        </div>
        <div className="min-w-0">
          <h2 className="mb-4 font-sans text-sm font-semibold text-gold-light">{c.footer.contactTitle}</h2>
          <p className="flex gap-2 py-2 text-xs text-white/75">
            <MapPin className="size-4 shrink-0 text-gold-light" />
            {c.contact.office}
          </p>
          <a href={c.contact.phoneHref} className="flex gap-2 py-2 text-xs">
            <Phone className="size-4 shrink-0 text-gold-light" />
            {c.contact.phone}
          </a>
          <a href={`mailto:${c.contact.email}`} className="flex gap-2 py-2 text-xs">
            <Mail className="size-4 shrink-0 text-gold-light" />
            <span className="break-all">{c.contact.email}</span>
          </a>
          <a href={c.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="flex gap-2 py-2 text-xs">
            <MessageCircle className="size-4 text-gold-light" />
            {c.ui.whatsapp}
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/15 pt-6">
        <p className="max-w-4xl text-[10px] leading-5 text-white/55">{c.footer.note}</p>
        <div className="mt-5 flex flex-col justify-between gap-4 text-[10px] text-white/60 sm:flex-row">
          <p>{c.footer.copyright}</p>
          <div className="flex flex-wrap gap-5">
            <Link to="/privacy">{c.ui.privacy}</Link>
            <Link to="/terms">{c.ui.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
