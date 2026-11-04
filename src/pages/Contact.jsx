import PageHero from '../components/common/PageHero';
import ContactSection from '../sections/ContactSection';
/** Consultation page using only the confirmed area-level office location and business contacts. */
export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Speak with our Goregaon, Mumbai team about society redevelopment, self-redevelopment or land advisory."
      />
      <ContactSection />
    </>
  );
}
