import { useState } from 'react';
import { Search } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import ArticleCard from '../components/common/ArticleCard';
import Accordion from '../components/common/Accordion';
import SectionHeading from '../components/ui/SectionHeading';
import { articles } from '../data/articles';
import { faqs } from '../data/faqs';
import { content as c } from '../data/content';
/** Searchable educational library with working individual article routes and FAQs. */
export default function KnowledgeCentre() {
  const [query, setQuery] = useState('');
  const matches = articles.filter((a) => `${a.title} ${a.summary}`.toLowerCase().includes(query.toLowerCase()));
  return (
    <>
      <PageHero
        title="Knowledge Centre"
        description="Clear starting points for informed redevelopment conversations. Educational guides link to official resources where relevant."
      />
      <section className="section-wrap">
        <label htmlFor="resource-search" className="mb-3 block text-sm font-semibold">
          {c.ui.search}
        </label>
        <div className="relative mb-8 max-w-xl">
          <Search className="absolute top-4 left-4 size-5 text-gold" aria-hidden="true" />
          <input
            id="resource-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="min-h-13 w-full rounded-xl border border-navy/20 bg-white py-3 pr-4 pl-12 text-sm"
          />
        </div>
        <p role="status" className="mb-5 text-xs text-navy/60">
          {matches.length} {matches.length === 1 ? 'guide' : 'guides'} available
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {matches.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
        {!matches.length && (
          <p className="rounded-xl border border-navy/10 bg-white p-8 text-sm">
            No matching guides. Try another topic or clear the search.
          </p>
        )}
      </section>
      <section id="faqs" tabIndex={-1} className="section-wrap pt-0">
        <SectionHeading label={c.labels.faqs} title="Redevelopment FAQs" />
        <Accordion items={faqs} />
      </section>
    </>
  );
}
