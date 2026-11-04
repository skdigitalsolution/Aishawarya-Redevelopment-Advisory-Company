import PageHero from '../components/common/PageHero';
import CTAButton from '../components/common/CTAButton';
import { content as c } from '../data/content';
/** Accessible fallback for unknown paths and missing resources. */
export default function NotFound() {
  return (
    <>
      <PageHero title={c.ui.notFound} label="404" description="The address may have changed. Choose a page below to continue." />
      <div className="section-wrap flex flex-wrap gap-4">
        <CTAButton to="/">{c.ui.backHome}</CTAButton>
        <CTAButton to="/services" secondary>
          {c.ui.services}
        </CTAButton>
      </div>
    </>
  );
}
