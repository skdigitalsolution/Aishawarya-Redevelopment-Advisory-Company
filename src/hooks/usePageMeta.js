import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seo } from '../data/seo';
import { articles } from '../data/articles';
import { content as c } from '../data/content';
const siteOrigin = 'https://aishwarya-redevelopment-advisory-mumbai.skdigital6666.chatgpt.site';
/** Apply page-specific search and sharing metadata without another runtime dependency. */
export function usePageMeta() {
  const { pathname } = useLocation();
  useEffect(() => {
    const article = articles.find((a) => pathname === `/knowledge-centre/${a.slug}`);
    const [title, description] = article
      ? [article.title, article.summary]
      : (seo[pathname] ?? ['Page Not Found', 'The requested page could not be found.']);
    document.title = `${title} | ${c.company.name}`;
    for (const [name, value, property] of [
      ['description', description, false],
      ['og:title', document.title, true],
      ['og:description', description, true],
      ['og:type', article ? 'article' : 'website', true],
      ['og:url', `${siteOrigin}${pathname}`, true],
      ['og:image', `${siteOrigin}/assets/architecture.webp`, true],
      ['twitter:card', 'summary', false],
    ]) {
      let meta = document.querySelector(`meta[${property ? 'property' : 'name'}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(property ? 'property' : 'name', name);
        document.head.append(meta);
      }
      meta.content = value;
    }
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.append(canonical);
    }
    canonical.href = `${siteOrigin}${pathname}`;
  }, [pathname]);
}
