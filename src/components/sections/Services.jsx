import { useState } from 'react';
import { siteData as d } from '../../data/siteData';
import SectionHeading from '../ui/SectionHeading';
import ServiceCard from '../ui/ServiceCard';
/** @param {{all?: boolean}} props Show all services initially on the dedicated page. */
export default function Services({ all = false }) {
  const [expanded, setExpanded] = useState(all);
  return (
    <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
      <SectionHeading {...d.services} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {d.services.items.slice(0, expanded ? 20 : 8).map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <div className="mt-5 text-center">
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          className="rounded-lg border border-gold/60 bg-white/80 px-5 py-2 text-xs font-semibold text-navy hover:bg-gold-light/20"
        >
          {expanded ? d.ui.viewLess : d.ui.viewAll}
        </button>
      </div>
    </section>
  );
}
