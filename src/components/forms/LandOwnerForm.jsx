import EnquiryForm from './EnquiryForm';
import { landFields } from '../../data/landBanking';
export default function LandOwnerForm() {
  return <EnquiryForm fields={landFields} title="Landowner and Agent Enquiry" />;
}
