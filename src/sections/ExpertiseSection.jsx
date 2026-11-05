import { Link } from 'react-router-dom';
import { services } from '../data/services';
import SectionHeading from '../components/ui/SectionHeading';
import FadeIn from '../components/ui/FadeIn';
import Icon from '../components/ui/Icon';
import CTAButton from '../components/common/CTAButton';
import ExecutionSupport from './ExecutionSupport';
const featured = ['service-1', 'service-2', 'service-3', 'service-4', 'service-5', 'service-6', 'service-7', 'service-8'];
export default function ExpertiseSection() {
  return (
    <>
      <section className="section-wrap !py-9">
        <SectionHeading label="Our Redevelopment Services" title="End-to-End Real Estate Advisory Services" />
        <p className="-mt-3 mb-6 text-center text-xs leading-6 text-navy/75">A comprehensive portfolio of 20 professional services for housing societies, landowners and real estate stakeholders.</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((id, i) => {
            const service = services.find((item) => item.id === id);
            return <FadeIn key={id} delay={(i % 4) * 0.04}>
              <Link to={`/services#${id}`} className="group relative isolate flex h-full min-h-44 flex-col overflow-hidden rounded-xl border border-navy/15 bg-white p-4 shadow-card transition hover:-translate-y-1 hover:border-gold motion-reduce:transform-none">
                <img src={`${import.meta.env.BASE_URL}assets/${i % 2 ? 'architecture.webp' : 'home-hero.png'}`} alt="" aria-hidden="true" loading="lazy" width="516" height="564" className="absolute inset-0 -z-20 size-full object-cover object-right transition duration-500 group-hover:scale-105 motion-reduce:transform-none" />
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,white_28%,rgba(255,255,255,0.94)_48%,rgba(255,255,255,0.25)_100%)]" />
                <Icon name={service.icon} className="size-8 text-[#9a6b16]" />
                <h3 className="mt-3 max-w-[85%] font-sans text-sm leading-tight font-bold">{service.title}</h3>
                <p className="mt-2 max-w-[90%] text-[11px] leading-[1.5] text-navy/85">{service.description}</p>
              </Link>
            </FadeIn>;
          })}
        </div>
        <div className="mt-6 text-center"><CTAButton to="/services">Explore All 20 Services</CTAButton></div>
      </section>
      <ExecutionSupport />
    </>
  );
}
