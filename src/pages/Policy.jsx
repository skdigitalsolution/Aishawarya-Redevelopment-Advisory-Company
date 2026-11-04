import { useLocation } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import { content as c } from '../data/content';
/** Plain-language site and enquiry information without fabricated legal policies. */
export default function Policy() {
  const privacy = useLocation().pathname === '/privacy';
  return (
    <>
      <PageHero title={privacy ? c.ui.privacy : c.ui.terms} />
      <article className="section-wrap max-w-4xl space-y-7 text-sm leading-8 text-navy/75">
        {privacy ? (
          <>
            <p>
              Form details are held in the current browser page and are not stored by this website. With the default handoff, nothing is
              sent until you open and send the draft in your email or WhatsApp app. Those services apply their own privacy terms.
            </p>
            <p>
              If an EmailJS service is configured, submitting the consultation form sends the entered details through EmailJS to the
              company’s configured mailbox. The society assessment always uses the visitor-controlled handoff.
            </p>
            <p>
              Contact the company to discuss an enquiry, request correction of details already sent, or ask how its team handles
              correspondence. Do not enter confidential documents in these forms. This site loads typography from Google Fonts; standard
              connection metadata may be shared with that provider.
            </p>
          </>
        ) : (
          <>
            <p>
              The website describes advisory and coordination services and provides general educational information. It does not establish
              legal entitlement, property title, project eligibility, guaranteed returns, additional area or approval.
            </p>
            <p>
              A consultation enquiry does not create a professional engagement. Scope, fees, responsibilities and specialist advice should
              be agreed directly with the company. Conceptual architectural illustrations do not represent completed company developments.
            </p>
          </>
        )}
        <p>
          <a href={`mailto:${c.contact.email}`} className="break-all underline decoration-gold underline-offset-4">
            {c.contact.email}
          </a>
        </p>
      </article>
    </>
  );
}
