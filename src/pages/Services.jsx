import { advisoryGuides } from '../data/advisoryGuides';
import PageHero from '../components/common/PageHero';
import ServiceImageSection from '../components/common/ServiceImageSection';
import CTAButton from '../components/common/CTAButton';
import { advisoryServices } from '../data/advisoryServices';
export default function Services() {
  const categories = [...new Set(advisoryServices.map((item) => item.category))];
  return <>
    <PageHero title="Our Services" description="20 areas of redevelopment and property advice, from the first society meeting to the final handover." />
    <div className="section-wrap !pt-9">
      <p className="mb-6 max-w-3xl text-sm leading-7 text-navy/75">We help societies, owners and investors organize records, compare options and coordinate the right professionals. Legal opinions, engineering certificates, lending decisions and government approvals remain with the responsible professionals and authorities.</p>
      <nav aria-label="Find an advisory service" className="mb-9 rounded-2xl border border-gold/25 bg-white p-5">
        <h2 className="mb-4 text-xl font-semibold">Find the help you need</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{categories.map((category) => <div key={category} id={category.toLowerCase().replace(/ & /g, '-').replace(/[^a-z0-9]+/g, '-')}><h3 className="mb-2 font-sans text-xs font-semibold text-[#866019]">{category}</h3><ul className="space-y-1">{advisoryServices.filter((item) => item.category === category).map((item) => <li key={item.id}><a href={`#${item.id}`} className="inline-block py-1 text-xs leading-5 hover:underline">{item.title}</a></li>)}</ul></div>)}</div>
      </nav>
      <h2 className="mb-5 text-3xl">Our 20 professional service areas</h2>
      {advisoryServices.map((item, i) => <ServiceImageSection key={item.id} item={item} reverse={i % 2 === 1} />)}
      <h2 className="mt-12 text-3xl">Practical guides for society committees</h2>
      {advisoryGuides.map((item, i) => <ServiceImageSection key={item.id} item={item} reverse={i % 2 === 1} />)}
      <div className="mt-8 rounded-2xl border border-gold/30 bg-white p-6"><h2 className="mb-4 text-2xl">Not sure where to start?</h2><p className="mb-5 text-sm leading-7 text-navy/75">Tell us about the property and the decision you need to make. We can discuss the records and professional inputs needed for an initial review.</p><CTAButton to="/contact-us">Book a Consultation</CTAButton></div>
    </div>
  </>;
}
