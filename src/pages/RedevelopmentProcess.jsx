import PageHero from '../components/common/PageHero';
import ProcessJourney from '../components/common/ProcessJourney';
import AssessmentSection from '../sections/AssessmentSection';
/** Detailed eight-stage redevelopment journey with expandable stage information. */
export default function RedevelopmentProcess() {
  return (
    <>
      <PageHero
        title="Redevelopment Process"
        description="Explore eight stages, from the first member discussion to documented handover. Select a stage to review its purpose and next steps."
      />
      <section className="section-wrap">
        <ProcessJourney detailed />
        <p className="mt-8 text-xs leading-6 text-navy/60">
          Stages may overlap or require additional work depending on the property, ownership and applicable approvals. The project team
          should define the appropriate sequence.
        </p>
      </section>
      <AssessmentSection />
    </>
  );
}
