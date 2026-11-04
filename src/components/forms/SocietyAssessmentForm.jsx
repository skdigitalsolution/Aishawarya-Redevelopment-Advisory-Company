import EnquiryForm from './EnquiryForm';
import { assessmentFields } from '../../data/assessmentFields';
import { content as c } from '../../data/content';
/** Readiness questionnaire, always prepared as a visitor-controlled handoff. */
export default function SocietyAssessmentForm() {
  return <EnquiryForm fields={assessmentFields} title={c.ui.readiness} assessment />;
}
