import { useParams } from 'react-router-dom';
import { articles } from '../data/articles';
import { content as c } from '../data/content';
import PageHero from '../components/common/PageHero';
import CTAButton from '../components/common/CTAButton';
import NotFound from './NotFound';
/** Educational article with official source attribution and a case-specific advice boundary. */
export default function Article() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);
  if (!article) return <NotFound />;
  return (
    <>
      <PageHero title={article.title} label={c.labels.knowledge} description={article.summary} />
      <article className="section-wrap max-w-4xl">
        <p className="mb-7 text-xs text-navy/50">Educational overview · Reviewed {article.reviewed}</p>
        <img
          src={article.image}
          alt="Illustrative architecture from the supplied company profile"
          width="1024"
          height="1024"
          loading="lazy"
          className="mb-10 aspect-[2/1] w-full rounded-2xl object-cover"
        />
        {article.sections.map((section) => (
          <section key={section.title} className="mb-9">
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            <p className="mt-4 text-sm leading-8 text-navy/75">{section.body}</p>
          </section>
        ))}
        <aside className="my-9 rounded-xl border border-gold/30 bg-white p-6">
          <h2 className="mb-3 font-sans text-sm font-semibold">Official resource</h2>
          <a
            href={article.source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-navy underline decoration-gold underline-offset-4"
          >
            {article.source.title}
          </a>
          <p className="mt-4 text-xs leading-6 text-navy/60">
            General educational information, not a property-specific legal, technical or financial opinion. Check current official rules and
            obtain qualified advice before making commitments.
          </p>
        </aside>
        <div className="flex flex-wrap gap-3">
          <CTAButton to="/knowledge-centre" secondary>
            {c.ui.back}
          </CTAButton>
          <CTAButton to="/contact-us">{c.ui.consult}</CTAButton>
        </div>
      </article>
    </>
  );
}
