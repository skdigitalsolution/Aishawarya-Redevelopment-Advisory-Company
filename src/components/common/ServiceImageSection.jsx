import { Link } from 'react-router-dom';
import FadeIn from '../ui/FadeIn';
import { profileImage } from '../../data/profileImages';
/** Image and plain-English service explanation; illustrations never imply project ownership. */
export default function ServiceImageSection({ item, reverse = false }) {
  return (
    <section id={item.id} className="scroll-mt-28 border-b border-navy/10 py-9 last:border-0">
      {item.aliases?.map((alias) => <span key={alias} id={alias} className="block scroll-mt-28" />)}
      <FadeIn className="grid items-center gap-7 md:grid-cols-2 lg:gap-12">
        <figure className={reverse ? 'md:order-2' : ''}>
          <img src={profileImage(item.image)} alt={item.alt || `Company-profile illustration of ${item.title.toLowerCase()}`} width="960" height="640" loading="lazy" decoding="async" className="max-h-[410px] w-full rounded-2xl border border-gold/25 object-cover shadow-card" />
          <figcaption className="mt-2 text-[10px] text-navy/55">Illustration from the supplied company profile.</figcaption>
        </figure>
        <div>
          {item.category && <p className="mb-3 text-[10px] font-semibold tracking-widest text-[#866019] uppercase">{item.category}</p>}
          <h2 className="text-2xl font-semibold sm:text-3xl">{item.title}</h2>
          <p className="mt-4 text-sm leading-7 text-navy/75">{item.description}</p>
          <h3 className="mt-4 font-sans text-sm font-semibold">What the service includes</h3>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-navy/75">{item.details.map((text) => <li key={text} className="flex gap-2"><span aria-hidden="true" className="text-gold">•</span>{text}</li>)}</ul>
          <p className="mt-4 text-sm leading-7 text-navy/75"><strong className="text-navy">How we help: </strong>{item.help}</p>
          <p className="mt-2 text-sm leading-7 text-navy/75"><strong className="text-navy">Why it matters: </strong>{item.why}</p>
          {item.related?.length > 0 && <div className="mt-4 flex flex-wrap gap-2">{item.related.map((related) => <Link key={related.id} to={`/services#${related.id}`} className="rounded-full border border-gold/30 bg-white px-3 py-2 text-xs hover:bg-gold-light/20">{related.label}</Link>)}</div>}
          <Link to="/contact-us" className="mt-5 inline-flex min-h-11 items-center rounded-lg border border-navy/20 bg-white px-4 text-xs font-semibold hover:border-gold">Discuss this service →</Link>
        </div>
      </FadeIn>
    </section>
  );
}
