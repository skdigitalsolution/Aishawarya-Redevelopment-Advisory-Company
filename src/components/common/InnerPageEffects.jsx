import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import './innerPageEffects.css';
/** Scoped inner-page reveals; no observers or styles apply to the homepage. */
export default function InnerPageEffects({ children }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    const root = ref.current;
    if (!root || reduced || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) {
        entry.target.classList.add('inner-reveal-visible');
        observer.unobserve(entry.target);
      }
    }, { threshold: 0, rootMargin: '0px 0px -24px 0px' });
    const nodes = root.querySelectorAll('section:not([aria-roledescription]), article, figure');
    for (const node of nodes) {
      if (node.closest('.inner-page-cover')) continue;
      node.classList.add('inner-reveal');
      observer.observe(node);
    }
    return () => { observer.disconnect(); for (const node of nodes) node.classList.remove('inner-reveal', 'inner-reveal-visible'); };
  }, [reduced]);
  return <div ref={ref} className="inner-page-effects">{children}</div>;
}
