import { useEffect, useRef, useState } from 'react';
/** Animate target once visible. Respects reduced motion and cleans up animation frames. */
export function useCountUp(target, duration = 1400) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  useEffect(() => {
    let frame;
    let observer;
    const node = ref.current;
    setValue(0);
    if (!node) return;
    const start = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setValue(target);
        return;
      }
      const began = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - began) / Math.max(duration, 1), 1);
        setValue(Math.round(target * (1 - (1 - progress) ** 3)));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };
    if (!('IntersectionObserver' in window)) start();
    else {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            observer.disconnect();
            start();
          }
        },
        { threshold: 0.25 },
      );
      observer.observe(node);
    }
    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, duration]);
  return { ref, value };
}
