import { content as c } from '../../data/content';
import PageHero from './PageHero';
import CTAButton from './CTAButton';
import Icon from '../ui/Icon';
import FadeIn from '../ui/FadeIn';
import SelfRedevelopmentWorkflow from './SelfRedevelopmentWorkflow';
/** @param {{topic: object}} props Shared layout for distinct detailed advisory pages. */
export default function TopicPage({ topic }) {
  return (
    <>
      <PageHero title={topic.title} description={topic.subtitle} />
      <section className={`section-wrap grid items-center gap-9 ${topic.workflow ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
        <div>
          <h2 className="text-3xl">{topic.subtitle}</h2>
          <p className="mt-5 text-sm leading-7 text-navy/70">{topic.intro}</p>
        </div>
        {topic.workflow ? <SelfRedevelopmentWorkflow /> : <figure>
          <img
            src={topic.image}
            alt={`Company-profile illustration for ${topic.title.toLowerCase()}`}
            width="1024"
            height="1024"
            loading="lazy"
            className="aspect-[3/2] w-full rounded-2xl border border-gold/25 object-cover shadow-card"
          />
          <figcaption className="mt-2 text-[10px] text-navy/50">Conceptual imagery supplied in the company profile.</figcaption>
        </figure>}
      </section>
      <section className="section-wrap pt-0">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topic.items.map((item) => (
            <FadeIn key={item.title} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-card">
              <Icon name={item.icon} />
              <h2 className="mt-5 font-sans text-base font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-navy/65">{item.description}</p>
            </FadeIn>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <CTAButton to="/contact-us">{c.ui.consult}</CTAButton>
          <CTAButton to="/services" secondary>
            {c.ui.allServices}
          </CTAButton>
        </div>
      </section>
    </>
  );
}
