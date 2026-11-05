import { Link } from 'react-router-dom';
import { content as c } from '../../data/content';
/** @param {{title: string, description?: string, label?: string}} props Page introduction. */
export default function PageHero({ title, description, label = c.company.shortName }) {
  return (
    <header className="relative overflow-hidden border-b border-gold/35 bg-navy-dark px-5 py-14 text-white sm:px-8 lg:py-20">
      <img src={`${import.meta.env.BASE_URL}assets/home-hero.png`} alt="" aria-hidden="true" width="1920" height="819" loading="eager" className="pointer-events-none absolute inset-0 size-full object-cover object-right opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-navy-dark via-navy-dark/80 to-navy-dark/15" />
      <div className="pointer-events-none absolute -top-32 -right-20 size-96 rounded-full border border-gold/15" />
      <div className="relative mx-auto max-w-7xl">
        <p className="mb-7 flex flex-wrap gap-2 text-xs text-white/65">
          <Link className="hover:text-gold-light" to="/">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span>{title}</span>
        </p>
        <p className="mb-3 text-[10px] font-semibold tracking-[0.25em] text-gold-light uppercase">{label}</p>
        <h1 className="max-w-4xl text-4xl leading-tight font-semibold sm:text-5xl">{title}</h1>
        {description && <p className="mt-5 max-w-3xl text-sm leading-7 text-white/75 sm:text-base">{description}</p>}
      </div>
    </header>
  );
}
