import { Quote, Star, UserRound } from 'lucide-react';

/** @param {{testimonial: {name: string, role: string, quote: string}}} props Client quotation. */
export default function TestimonialCard({ testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-gold/25 bg-white p-6 shadow-card">
      <div className="mb-4 flex items-center justify-between">
        <Quote className="size-7 text-gold" aria-hidden="true" />
        {Number.isInteger(testimonial.rating) && testimonial.rating >= 1 && testimonial.rating <= 5 && <span className="flex gap-0.5" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
          {Array.from({ length: testimonial.rating }, (_, i) => (
            <Star key={i} className="size-4 fill-gold text-gold" aria-hidden="true" />
          ))}
        </span>}
      </div>
      <blockquote className="flex-1 text-sm leading-relaxed">{testimonial.quote}</blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold-light/40">
          <UserRound className="size-6 text-gold" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-bold">{testimonial.name}</p>
          <p className="mt-1 text-xs leading-relaxed text-navy/75">{testimonial.role}{testimonial.society ? ` · ${testimonial.society}` : ''}</p>
        </div>
      </figcaption>
    </figure>
  );
}
