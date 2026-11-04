import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { content as c } from '../data/content';
import SectionHeading from '../components/ui/SectionHeading';
import FadeIn from '../components/ui/FadeIn';
import Icon from '../components/ui/Icon';
import CTAButton from '../components/common/CTAButton';
/** Eight linked expertise categories lead to detailed service pages. */
export default function ExpertiseSection() {
  return (
    <section className="section-wrap">
      <SectionHeading label={c.labels.expertise} title={c.home.expertiseTitle} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {c.expertise.map((item, i) => (
          <FadeIn key={item.title} delay={(i % 4) * 0.04}>
            <Link
              to={item.to}
              className="group flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-gold/60 motion-reduce:transform-none"
            >
              <Icon name={item.icon} />
              <h3 className="mt-5 font-sans text-sm font-semibold">{item.title}</h3>
              <p className="mt-3 flex-1 text-xs leading-6 text-navy/65">{item.description}</p>
              <ArrowUpRight className="mt-5 size-4 text-gold" aria-hidden="true" />
            </Link>
          </FadeIn>
        ))}
      </div>
      <div className="mt-8 text-center">
        <CTAButton to="/services">{c.ui.allServices}</CTAButton>
      </div>
    </section>
  );
}
