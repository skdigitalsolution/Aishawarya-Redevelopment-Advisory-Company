import Icon from './Icon';
/** @param {{service: object}} props Advisory card with artwork from the supplied reference. */
export default function ServiceCard({ service }) {
  return (
    <article className="relative isolate h-full overflow-hidden rounded-2xl border border-navy/15 bg-white p-5 shadow-card transition hover:-translate-y-1 hover:shadow-xl motion-reduce:transform-none">
      <div
        aria-hidden="true"
        className={`absolute inset-0 -z-10 bg-[url('/assets/reference.png')] bg-[length:420%_auto] opacity-35 ${service.artClass}`}
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-white via-white/95 to-white/10" />
      <Icon name={service.icon} />
      <h3 className="mt-3 max-w-48 font-sans text-sm leading-snug font-bold">{service.title}</h3>
      <p className="mt-2 max-w-52 text-xs leading-relaxed">{service.description}</p>
    </article>
  );
}
