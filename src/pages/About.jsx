import { content as c } from '../data/content';
import PageHero from '../components/common/PageHero';
import CompanyIntroSection from '../sections/CompanyIntroSection';
import CTAButton from '../components/common/CTAButton';
import FadeIn from '../components/ui/FadeIn';
/** Company background, philosophy and anchored vision, mission and values. */
export default function About() {
  return (
    <>
      <PageHero
        title="About Us"
        label={c.labels.company}
        description="Professional redevelopment advice, grounded in clear information and collective decisions."
      />
      <CompanyIntroSection />
      <section className="section-wrap border-t border-navy/10">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl">Our background</h2>
            <p className="mt-5 text-sm leading-7 text-navy/70">{c.company.background}</p>
          </div>
          <div>
            <h2 className="text-3xl">Our professional philosophy</h2>
            <p className="mt-5 text-sm leading-7 text-navy/70">{c.company.philosophy}</p>
          </div>
        </div>
      </section>
      <section id="vision-mission" tabIndex={-1} className="section-wrap pt-0">
        <h2 className="mb-8 text-3xl">Vision, Mission & Values</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {c.values.map((item) => (
            <FadeIn key={item.title} className="rounded-2xl border border-gold/25 bg-white p-7 shadow-card">
              <h3 className="text-2xl">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-navy/65">{item.body}</p>
            </FadeIn>
          ))}
        </div>
        <div className="mt-9">
          <CTAButton to="/founder-leadership">{c.ui.founder}</CTAButton>
        </div>
      </section>
    </>
  );
}
