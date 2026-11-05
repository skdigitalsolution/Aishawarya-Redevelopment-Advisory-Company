import { content as c } from '../data/content';
import SectionHeading from '../components/ui/SectionHeading';
import FeatureCard from '../components/ui/FeatureCard';
import { profileImage } from '../data/profileImages';
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
      <figure className="mt-7 grid overflow-hidden rounded-2xl border border-gold/25 bg-white sm:grid-cols-[0.8fr_1.2fr]">
        <img src={profileImage('committee-consultation')} alt="Company-profile illustration of advisers answering society committee questions" width="900" height="600" loading="lazy" className="h-full max-h-64 w-full object-cover" />
        <figcaption className="self-center p-6"><h3 className="text-2xl">Clear answers at each stage</h3><p className="mt-3 text-sm leading-7 text-navy/75">Members should understand the options, the documents still needed and who is responsible for the next action.</p><p className="mt-2 text-[10px] text-navy/50">Illustration from the company profile.</p></figcaption>
      </figure>
    </section>
  );
}
