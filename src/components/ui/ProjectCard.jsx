import { MapPin } from 'lucide-react';
import { siteData as d } from '../../data/siteData';
/** @param {{project: object}} props Project card preserving the reference's illustrative artwork. */
export default function ProjectCard({ project }) {
  return (
    <article className="h-full overflow-hidden rounded-xl border border-navy/20 bg-white/90 shadow-card">
      <div
        role="img"
        aria-label={d.ui.artAlt}
        className={`aspect-[2.28/1] border-b border-navy/10 bg-[url('/assets/reference.png')] bg-[length:330%_auto] bg-no-repeat ${project.artClass}`}
      />
      <div className="px-5 py-3">
        <h3 className="font-sans text-sm font-bold">{project.title}</h3>
        <p className="mt-2 flex items-start gap-1 text-xs">
          <MapPin className="size-4 shrink-0 text-gold" aria-hidden="true" />
          {project.location}
        </p>
        <p className="mt-2 text-[11px] leading-relaxed">{project.meta}</p>
      </div>
    </article>
  );
}
