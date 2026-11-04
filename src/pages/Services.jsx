import { useState } from 'react';
import { content as c } from '../data/content';
import { services } from '../data/services';
import PageHero from '../components/common/PageHero';
import ServiceCard from '../components/common/ServiceCard';
import CTAButton from '../components/common/CTAButton';
const categories = [...new Set(services.map((s) => s.category))];
const slug = (value) =>
  value
    .toLowerCase()
    .replace(/ & /g, '-')
    .replace(/[^a-z0-9]+/g, '-');
/** All 20 brochure services, organized into the six requested advisory categories. */
export default function Services() {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <PageHero
        title="Our Services"
        description="20 professional advisory services, coordinated around your property and your objectives."
      />
      <div className="section-wrap">
        <nav aria-label="Service categories" className="mb-10 flex flex-wrap gap-2">
          {categories.map((category) => (
            <a
              key={category}
              href={`#${slug(category)}`}
              className="rounded-full border border-navy/15 bg-white px-4 py-3 text-xs transition hover:border-gold"
            >
              {category}
            </a>
          ))}
        </nav>
        {categories.map((category) => (
          <section key={category} id={slug(category)} tabIndex={-1} className="mb-12">
            <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">{category}</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services
                .filter((s) => s.category === category)
                .map((service) => (
                  <ServiceCard key={service.id} service={service} details={expanded} />
                ))}
            </div>
          </section>
        ))}
        <div className="flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-gold/30 bg-white p-6">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            className="min-h-12 rounded-lg border border-navy/20 px-5 text-sm font-semibold"
          >
            {expanded ? 'Hide service scope details' : 'Show scope details for all 20 services'}
          </button>
          <CTAButton to="/contact-us">{c.ui.consult}</CTAButton>
        </div>
      </div>
    </>
  );
}
