import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
/** Scroll and focus after navigation, including cross-route anchor targets. */
export default function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    let frame;
    let attempts = 0;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const position = () => {
      const target = location.hash ? document.getElementById(decodeURIComponent(location.hash.slice(1))) : document.getElementById('main');
      if (!target && attempts++ < 90) {
        frame = requestAnimationFrame(position);
        return;
      }
      if (location.hash && target) {
        target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
        target.focus({ preventScroll: true });
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
        target?.focus({ preventScroll: true });
      }
    };
    frame = requestAnimationFrame(position);
    return () => cancelAnimationFrame(frame);
  }, [location.key, location.hash]);
  return null;
}
