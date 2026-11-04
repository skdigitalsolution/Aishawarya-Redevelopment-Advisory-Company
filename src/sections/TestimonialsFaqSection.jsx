import { MessageSquareQuote } from 'lucide-react';
import { content as c } from '../data/content';
import { projectData as p } from '../data/projects';
import { faqs } from '../data/faqs';
import Accordion from '../components/common/Accordion';
import SectionHeading from '../components/ui/SectionHeading';
import TestimonialCard from '../components/ui/TestimonialCard';
/** Separate client-feedback and FAQ subsections; only approved testimonials render. */
export default function TestimonialsFaqSection() {
  return (
    <section className="border-y border-gold/20 bg-white/65">
      <div className="section-wrap">
        <SectionHeading label={c.labels.faqs} title={c.home.faqTitle} />
        <div className="grid items-start gap-8 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <h3 className="mb-5 text-2xl">Client testimonials</h3>
            {p.testimonials.length ? (
              p.testimonials.map((item) => <TestimonialCard key={item.name} testimonial={item} />)
            ) : (
              <div className="rounded-2xl border border-navy/10 bg-marble p-7">
                <MessageSquareQuote className="mb-5 size-8 text-gold" />
                <h4 className="text-xl">{p.testimonialTitle}</h4>
                <p className="mt-4 text-sm leading-7 text-navy/65">{p.testimonialDescription}</p>
              </div>
            )}
          </div>
          <div id="faqs" tabIndex={-1}>
            <h3 className="mb-5 text-2xl">Frequently asked questions</h3>
            <Accordion items={faqs} />
          </div>
        </div>
      </div>
    </section>
  );
}
