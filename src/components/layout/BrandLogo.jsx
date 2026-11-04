import { content as c } from '../../data/content';

/** @param {{footer?: boolean}} props Original company emblem with a consistent gold frame. */
export default function BrandLogo({ footer = false }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-gold-light bg-white shadow-[0_0_0_3px_rgba(212,165,55,0.12)] ${footer ? 'size-24 sm:size-28' : 'size-16 sm:size-18'}`}
    >
      <img
        src={c.company.logo}
        alt={c.company.logoAlt}
        width="128"
        height="128"
        loading={footer ? 'lazy' : 'eager'}
        className="size-full scale-[1.12] -rotate-90 object-contain"
      />
    </span>
  );
}
