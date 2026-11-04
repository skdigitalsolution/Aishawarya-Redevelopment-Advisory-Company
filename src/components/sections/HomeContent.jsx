import { siteData as d } from '../../data/siteData';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';
import FeatureCard from '../ui/FeatureCard';
import ProcessStep from '../ui/ProcessStep';
import TestimonialCard from '../ui/TestimonialCard';
import StatCounter from '../ui/StatCounter';
import Button from '../ui/Button';
/** Reference-order project and trust sections, built from reusable foundation cards. */
export default function HomeContent() {
  return (
    <>
      {['residential', 'commercial'].map((key) => (
        <section key={key} className="mx-auto max-w-7xl px-5 py-7 sm:px-8">
          <SectionHeading label={d[key].label} title={d[key].title} />
          <div className="grid gap-5 md:grid-cols-3">
            {d[key].items.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      ))}
      <section className="my-3 border-y border-gold/50 bg-navy py-5 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading label={d.statsLabel} light />
          <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-white/30">
            {d.stats.map((stat) => (
              <StatCounter key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        <SectionHeading label={d.why.label} title={d.why.title} />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {d.why.items.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        <SectionHeading label={d.process.label} title={d.process.title} />
        <ol className="grid gap-x-2 gap-y-10 pt-5 sm:grid-cols-2 lg:grid-cols-8">
          {d.process.items.map((step) => (
            <ProcessStep key={step.number} step={step} />
          ))}
        </ol>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        <SectionHeading label={d.testimonials.label} title={d.testimonials.title} />
        <div className="grid gap-5 md:grid-cols-3">
          {d.testimonials.items.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </section>
      <section className="mt-4 border-y border-gold/50 bg-navy px-5 py-10 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2">
          <div>
            <SectionHeading label={d.contact.label} title={d.contact.title} subtitle={d.contact.description} light align="left" />
            <p className="text-sm">{d.contact.office}</p>
            <a href={d.contact.phoneHref} className="mt-3 block text-gold-light">
              {d.contact.phone}
            </a>
          </div>
          <div className="rounded-2xl border border-white/70 bg-white/95 p-8 text-navy shadow-xl">
            <h3 className="mb-4 text-2xl font-bold">{d.contact.formTitle}</h3>
            <p className="mb-5 text-sm leading-relaxed">{d.pages.contactIntro}</p>
            <a href={`mailto:${d.contact.email}`} className="mb-6 block break-all text-sm underline">
              {d.contact.email}
            </a>
            <Button href="/contact">{d.ui.book}</Button>
          </div>
        </div>
      </section>
    </>
  );
}
