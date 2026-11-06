import { services } from '../data/services';
import SectionHeading from '../components/ui/SectionHeading';
import FadeIn from '../components/ui/FadeIn';
import CTAButton from '../components/common/CTAButton';
import ExecutionSupport from './ExecutionSupport';
import ServiceGlassCard from '../components/common/ServiceGlassCard';
import { serviceCardImages } from '../data/serviceCardImages';
const featured = ['service-1', 'service-2', 'service-3', 'service-4', 'service-5', 'service-6', 'service-7', 'service-8'];
export default function ExpertiseSection() {
  return (
    <>
      <section className="section-wrap !py-9">
        <SectionHeading label="Our Redevelopment Services" title="End-to-End Real Estate Advisory Services" />
        <p className="-mt-3 mb-6 text-center text-xs leading-6 text-navy/75">A comprehensive portfolio of 20 professional services for housing societies, landowners and real estate stakeholders.</p>
        <div className="expertise-service-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((id, i) => {
            const service = services.find((item) => item.id === id);
            return <FadeIn key={id} delay={(i % 4) * 0.04}>
              <ServiceGlassCard service={service} image={serviceCardImages[id]} />
            </FadeIn>;
          })}
        </div>
        <div className="mt-6 text-center"><CTAButton to="/services">Explore All 20 Services</CTAButton></div>
      </section>
      <ExecutionSupport />
    </>
  );
}
