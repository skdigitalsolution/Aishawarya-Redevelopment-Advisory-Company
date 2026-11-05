import { Link } from 'react-router-dom';
import Icon from '../ui/Icon';
import { profileImage } from '../../data/profileImages';
/** Frosted service card with a subject-matched decorative illustration. */
export default function ServiceGlassCard({ service, image }) {
  return (
    <Link to={`/services#${service.id}`} className="group relative isolate flex h-full min-h-48 overflow-hidden rounded-xl border border-gold/25 bg-marble p-2 shadow-[0_8px_24px_rgba(7,20,47,0.09)] transition duration-300 hover:-translate-y-1 hover:border-gold/70 hover:shadow-[0_14px_30px_rgba(7,20,47,0.15)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold motion-reduce:transform-none">
      <img src={profileImage(image)} alt="" aria-hidden="true" loading="lazy" decoding="async" width="900" height="600" className="absolute inset-0 -z-20 size-full object-cover object-center transition duration-500 group-hover:scale-105 motion-reduce:transform-none" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(110deg,rgba(255,255,255,0.80),rgba(255,255,255,0.20))]" />
      <div className="relative flex w-full flex-col rounded-lg border border-white/85 bg-[linear-gradient(115deg,rgba(255,255,255,0.85)_15%,rgba(255,255,255,0.62)_65%,rgba(255,255,255,0.35))] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-[2px] transition-colors duration-300 group-hover:border-white group-hover:bg-white/60">
        <span className="flex size-10 items-center justify-center rounded-xl border border-white/90 bg-white/65 shadow-sm"><Icon name={service.icon} className="size-7 text-[#936410]" /></span>
        <h3 className="mt-3 font-sans text-sm leading-tight font-bold text-navy-dark">{service.title}</h3>
        <p className="mt-2 text-[11px] leading-[1.5] text-navy-dark/90">{service.description}</p>
      </div>
    </Link>
  );
}
