import { content as c } from '../data/content';
import SectionHeading from '../components/ui/SectionHeading';
import ProcessJourney from '../components/common/ProcessJourney';
import CTAButton from '../components/common/CTAButton';
/** Interactive overview of the eight redevelopment stages. */
export default function ProcessSection() {
  return (
    <section className="border-y border-gold/20 bg-white/60">
      <div className="section-wrap">
        <SectionHeading label={c.labels.process} title={c.home.processTitle} />
        <ProcessJourney />
        <div className="mt-8 text-center">
          <CTAButton to="/redevelopment-process" secondary>
            {c.ui.process}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
