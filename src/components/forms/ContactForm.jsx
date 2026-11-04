import EnquiryForm from './EnquiryForm';
import { contactFields } from '../../data/formFields';
import { content as c } from '../../data/content';
/** Consultation form with configured EmailJS send or clearly labeled handoff. */
export default function ContactForm() {
  return <EnquiryForm fields={contactFields} title={c.contact.formTitle} />;
}
