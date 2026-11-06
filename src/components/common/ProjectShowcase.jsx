import { projectData as p } from '../../data/projects';
/** Clear empty state with a labeled conceptual illustration; no invented project identities. */
export default function ProjectShowcase({ category = 'All' }) {
  const filtered = category !== 'All';
  return (
    <div className="grid overflow-hidden rounded-2xl border border-gold/30 bg-white shadow-card md:grid-cols-2">
      <figure className="group overflow-hidden bg-navy-dark">
        <img
          src={p.image}
          alt={p.imageLabel}
          width="1400"
          height="933"
          loading="lazy"
          className="aspect-[3/2] h-full min-h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03] motion-reduce:transform-none"
        />
      </figure>
      <div className="flex flex-col justify-center p-6 sm:p-10">
        <p className="mb-4 text-[10px] font-semibold tracking-widest text-gold uppercase">Publication in preparation</p>
        <h3 className="text-2xl font-semibold">{filtered ? `${category} case studies are awaiting publication` : p.title}</h3>
        <p className="mt-4 text-sm leading-7 text-navy/65">{filtered
          ? `No verified ${category.toLowerCase()} project records have been published yet. Project names, locations, our advisory role, status and original photographs will appear here after the details and publication permissions are confirmed.`
          : p.description}</p>
        <p className="mt-6 rounded-lg bg-marble p-3 text-[11px] leading-6 text-navy/60">{p.imageLabel}</p>
      </div>
    </div>
  );
}
