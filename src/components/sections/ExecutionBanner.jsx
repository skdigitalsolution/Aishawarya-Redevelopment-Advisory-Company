import { siteData as d } from '../../data/siteData';
import FeatureCard from '../ui/FeatureCard';
/** Construction support banner; no props. */
export default function ExecutionBanner() {
  return (
    <section className="my-4 border-y border-gold/60 bg-linear-to-r from-navy-dark via-navy to-navy-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-6 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-3 text-[10px] tracking-[0.2em] text-gold-light">{d.execution.label}</p>
          <h2 className="text-2xl leading-tight font-bold lg:text-3xl">{d.execution.title}</h2>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {d.execution.items.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} glass />
          ))}
        </div>
      </div>
    </section>
  );
}
