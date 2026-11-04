import { content as c } from '../data/content';
import SectionHeading from '../components/ui/SectionHeading';
import FadeIn from '../components/ui/FadeIn';
import StatCounter from '../components/ui/StatCounter';
import CTAButton from '../components/common/CTAButton';
/** Editorial founder profile with client-attributed experience metrics. */
export default function FounderSection() {
  return (
    <section className="border-y border-gold/20 bg-white/75">
      <div className="section-wrap">
        <FadeIn className="grid items-center gap-9 md:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <figure className="mx-auto w-full max-w-sm">
            <img
              src={c.founder.image}
              alt={c.founder.alt}
              width="516"
              height="564"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-t-[5rem] rounded-b-2xl border border-gold/40 bg-white object-cover object-top shadow-card"
            />
            <figcaption className="mt-4 text-center text-xs text-navy/60">{c.founder.role}</figcaption>
          </figure>
          <div>
            <SectionHeading label={c.labels.founder} title={c.home.founderTitle} align="left" />
            <h3 className="text-2xl font-semibold">{c.founder.name}</h3>
            <p className="mt-4 text-sm leading-7 text-navy/75">{c.founder.intro}</p>
            <p className="mt-4 text-sm leading-7 text-navy/65">{c.founder.experience}</p>
            <p className="mt-4 text-sm leading-7 text-navy/65">{c.founder.philosophy}</p>
            <div className="mt-6">
              <CTAButton to="/founder-leadership" secondary>
                {c.ui.founder}
              </CTAButton>
            </div>
          </div>
        </FadeIn>
        <div className="mt-12 grid grid-cols-2 divide-x divide-white/20 rounded-2xl bg-navy px-2 text-white lg:grid-cols-4">
          {c.stats
            .filter((s) => s.verified)
            .map((stat) => (
              <StatCounter key={stat.label} stat={stat} />
            ))}
        </div>
        <p className="mt-3 text-center text-[10px] text-navy/50">{c.footer.statsNote}</p>
      </div>
    </section>
  );
}
