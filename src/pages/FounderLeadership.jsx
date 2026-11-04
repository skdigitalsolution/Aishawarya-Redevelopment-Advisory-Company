import { content as c } from '../data/content';
import PageHero from '../components/common/PageHero';
import FounderSection from '../sections/FounderSection';
import CTAButton from '../components/common/CTAButton';
import Icon from '../components/ui/Icon';
/** Detailed profile based on the supplied director introduction. */
export default function FounderLeadership() {
  return (
    <>
      <PageHero
        title="Founder & Leadership"
        label={c.founder.role}
        description={`${c.founder.name} — leadership focused on clear advice and responsible redevelopment.`}
      />
      <FounderSection />
      <section className="section-wrap">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl">Advisory specializations</h2>
            <ul className="mt-6 space-y-4">
              {c.founder.specializations.map((text) => (
                <li key={text} className="flex items-start gap-3 border-b border-navy/10 pb-4 text-sm leading-6">
                  <Icon name="ShieldCheck" className="size-5 shrink-0 text-gold" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl">A vision for informed decisions</h2>
            <p className="mt-5 text-sm leading-7 text-navy/70">{c.founder.vision}</p>
            <h3 className="mt-8 text-2xl">Leadership philosophy</h3>
            <p className="mt-4 text-sm leading-7 text-navy/70">{c.founder.philosophy}</p>
            <div className="mt-8">
              <CTAButton to="/contact-us">{c.ui.consult}</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
