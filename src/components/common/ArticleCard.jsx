import { Link } from 'react-router-dom';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { content as c } from '../../data/content';
/** @param {{article: object}} props Educational resource card. */
export default function ArticleCard({ article }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-card transition hover:border-gold/60">
      <BookOpen className="mb-7 size-7 text-gold" aria-hidden="true" />
      <h2 className="text-2xl">
        <Link to={`/knowledge-centre/${article.slug}`}>{article.title}</Link>
      </h2>
      <p className="mt-3 flex-1 text-sm leading-7 text-navy/65">{article.summary}</p>
      <Link to={`/knowledge-centre/${article.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
        {c.ui.more}
        <ArrowUpRight className="size-4 text-gold" aria-hidden="true" />
      </Link>
    </article>
  );
}
