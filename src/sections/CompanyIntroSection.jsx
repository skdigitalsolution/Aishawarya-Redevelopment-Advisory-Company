import { content as c } from '../data/content';
import SectionHeading from '../components/ui/SectionHeading';
import FadeIn from '../components/ui/FadeIn';
import CTAButton from '../components/common/CTAButton';
import { profileImage } from '../data/profileImages';
/** Two-column company introduction using client-provided architecture. */
export default function CompanyIntroSection() {
  return (
    <section className="section-wrap">
      <FadeIn className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading label={c.labels.company} title={c.home.introTitle} align="left" />
          <p className="text-sm leading-7 text-navy/75">{c.company.intro}</p>
          <p className="mt-4 text-sm leading-7 text-navy/65">{c.company.philosophy}</p>
          <div className="mt-7">
            <CTAButton to="/about-us" secondary>
              {c.ui.about}
            </CTAButton>
          </div>
        </div>
        <figure className="overflow-hidden rounded-2xl border border-gold/30 bg-white p-2 shadow-card">
          <img
            src={profileImage('advisory-planning')}
            alt="Professional consultation illustration from the supplied company profile"
            width="1024"
            height="1024"
            loading="lazy"
            className="aspect-[6/5] w-full rounded-xl object-cover"
          />
          <figcaption className="px-3 pt-3 pb-2 text-[10px] text-navy/55">
            Company-profile illustration. Advisory services for societies and property owners.
          </figcaption>
        </figure>
      </FadeIn>
    </section>
  );
}
