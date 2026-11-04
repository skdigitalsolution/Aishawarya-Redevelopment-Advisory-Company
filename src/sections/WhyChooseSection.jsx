import { content as c } from '../data/content';
import SectionHeading from '../components/ui/SectionHeading';
import FeatureCard from '../components/ui/FeatureCard';
/** Anchored value section with no performance guarantees. */
export default function WhyChooseSection() {
  return (
    <section id="why-aishwarya" tabIndex={-1} className="section-wrap">
      <SectionHeading label={c.labels.why} title={c.home.whyTitle} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {c.why.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </div>
    </section>
  );
}
