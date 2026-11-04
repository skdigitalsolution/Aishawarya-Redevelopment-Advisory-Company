import Icon from './Icon';
/** @param {{feature: {icon: string, title: string, description: string}, glass?: boolean}} props Benefit or execution feature. */
export default function FeatureCard({ feature, glass = false }) {
  return (
    <article
      className={`h-full rounded-2xl border p-5 text-center ${glass ? 'border-white/30 bg-white/10 text-white shadow-lg backdrop-blur-md' : 'border-gold/30 bg-white text-navy shadow-card'}`}
    >
      <div className="flex justify-center">
        <Icon name={feature.icon} />
      </div>
      <h3 className="mt-3 font-sans text-sm leading-snug font-bold">{feature.title}</h3>
      <p className="mt-2 text-xs leading-relaxed">{feature.description}</p>
    </article>
  );
}
