import { siteData as d } from '../../data/siteData';
import SectionHeading from '../ui/SectionHeading';
import Icon from '../ui/Icon';
/** Company overview with supplied founder photograph. No props. */
export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-5 pt-12 pb-8 sm:px-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <SectionHeading label={d.about.label} title={d.about.title} align="left" />
          <p className="text-sm leading-relaxed">{d.about.description}</p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:divide-x sm:divide-gold/35">
            {d.about.pillars.map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-2 px-2 text-center">
                <Icon name={item.icon} />
                <p className="text-xs font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="grid items-start gap-5 sm:grid-cols-[40%_1fr]">
            <img
              src={d.images.founder}
              alt={d.about.leadership.imageAlt}
              loading="lazy"
              className="mx-auto h-60 w-52 rounded-2xl border border-gold/60 object-cover object-top shadow-card sm:h-64 sm:w-full"
            />
            <div>
              <p className="mb-2 text-xs font-semibold tracking-[0.18em] text-gold">{d.about.leadership.label}</p>
              <h3 className="text-2xl font-bold">{d.about.leadership.name}</h3>
              <p className="mt-2 border-b border-gold/60 pb-2 text-sm font-bold">{d.about.leadership.role}</p>
              <p className="mt-3 text-xs leading-relaxed">{d.about.leadership.bio}</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 divide-x divide-gold/30 rounded-xl border border-navy/10 bg-white/80 py-3 shadow-card">
            {d.about.stats.map((stat) => (
              <div key={stat.label} className="px-3">
                <p className="text-sm font-bold">{stat.value}</p>
                <p className="mt-1 text-[10px]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
