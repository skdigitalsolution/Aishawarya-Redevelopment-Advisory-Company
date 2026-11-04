import { content as c } from '../data/content';
import SectionHeading from '../components/ui/SectionHeading';
import SocietyAssessmentForm from '../components/forms/SocietyAssessmentForm';
/** Functional assessment form, with a stable navigation anchor. */
export default function AssessmentSection() {
  return (
    <section id="society-assessment" tabIndex={-1} className="section-wrap">
      <div className="grid items-start gap-9 lg:grid-cols-[.7fr_1.3fr]">
        <div className="lg:sticky lg:top-28">
          <SectionHeading label={c.labels.assessment} title={c.home.assessmentTitle} align="left" />
          <p className="text-sm leading-7 text-navy/65">{c.form.assessmentIntro}</p>
          <ul className="mt-6 space-y-3 border-l border-gold/40 pl-5 text-xs leading-6 text-navy/65">
            <li>Organize your society and property records.</li>
            <li>Identify unanswered ownership and structural questions.</li>
            <li>Discuss a suitable scope for professional feasibility review.</li>
          </ul>
        </div>
        <SocietyAssessmentForm />
      </div>
    </section>
  );
}
