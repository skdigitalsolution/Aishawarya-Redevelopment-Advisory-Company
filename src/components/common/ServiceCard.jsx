import Icon from '../ui/Icon';
/** @param {{service: object, details?: boolean}} props Real advisory service with optional scope detail. */
export default function ServiceCard({ service, details = false }) {
  return (
    <article className="group h-full rounded-2xl border border-navy/10 bg-white/95 p-6 shadow-card transition hover:-translate-y-1 hover:border-gold/60 motion-reduce:transform-none">
      <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-gold-light/15">
        <Icon name={service.icon} className="size-7 text-gold" />
      </div>
      <h3 className="font-sans text-base leading-snug font-semibold">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-navy/65">{service.description}</p>
      {details && (
        <ul className="mt-4 space-y-2 border-t border-navy/5 pt-4 text-xs leading-6 text-navy/60">
          {service.details.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-gold" aria-hidden="true">
                •
              </span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
