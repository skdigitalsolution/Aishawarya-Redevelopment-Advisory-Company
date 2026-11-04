import { useEffect, useState } from 'react';
/** Track section IDs at the sticky navigation offset; IDs must be a stable array. */
export function useScrollSpy(ids, offset = 100) {
  const [activeId, setActiveId] = useState(ids[0] ?? '');
  useEffect(() => {
    let frame;
    const update = () => {
      const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
      const current = sections.filter((node) => node.getBoundingClientRect().top <= offset + 1).at(-1);
      if (current) setActiveId(current.id);
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2 && sections.length)
        setActiveId(sections.at(-1).id);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ids, offset]);
  return activeId;
}
