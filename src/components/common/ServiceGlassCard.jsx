import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Icon from '../ui/Icon';
import { profileImage } from '../../data/profileImages';
/** Image-led advisory card with lightly frosted artwork and a clear text panel. */
export default function ServiceGlassCard({ service, image }) {
  return (
    <Link to={`/services#${service.id}`} className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gold/25 bg-white shadow-[0_8px_24px_rgba(7,20,47,0.07)] transition duration-300 hover:-translate-y-1.5 hover:border-gold/65 hover:shadow-[0_18px_36px_rgba(7,20,47,0.14)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold motion-reduce:transform-none">
      <div className="relative aspect-[16/9] overflow-hidden bg-marble">
        <img src={profileImage(image)} alt="" aria-hidden="true" loading="lazy" decoding="async" width="900" height="600" className="size-full scale-[1.03] object-cover object-center blur-[1px] transition duration-500 group-hover:scale-[1.08] group-hover:blur-none motion-reduce:transform-none" />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-navy/30 via-transparent to-white/10" />
        <span className="absolute bottom-3 left-4 flex size-11 items-center justify-center rounded-xl border border-white/85 bg-white/70 shadow-sm backdrop-blur-md"><Icon name={service.icon} className="size-6 text-[#936410]" /></span>
        <span className="absolute right-3 bottom-3 flex size-8 items-center justify-center rounded-full border border-white/60 bg-white/40 text-navy backdrop-blur-md transition duration-300 group-hover:bg-gold-light"><ArrowUpRight className="size-4" aria-hidden="true" /></span>
      </div>
      <div className="relative flex flex-1 flex-col border-t border-gold/15 bg-linear-to-b from-white to-marble/40 p-5">
        <h3 className="font-sans text-lg leading-snug font-semibold text-navy-dark">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/80">{service.description}</p>
        <span className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#866019]">Explore service <span className="h-px w-7 bg-gold/60 transition-all duration-300 group-hover:w-12 motion-reduce:transition-none" aria-hidden="true" /></span>
      </div>
    </Link>
  );
}
