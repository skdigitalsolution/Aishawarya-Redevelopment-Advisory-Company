import { useEffect, useId, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play, ArrowUpRight } from 'lucide-react';
import { profileImage } from '../../data/profileImages';

/** Activity-led image carousel; pauses for hover, focus, hidden tabs and reduced motion. */
export default function ImageSlider({ slides, label = 'How we help your society', compact = false }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(() => typeof document === 'undefined' || !document.hidden);
  const [inView, setInView] = useState(false);
  const section = useRef(null);
  const reduced = useReducedMotion();
  const start = useRef(null);
  const id = useId();
  const move = (delta) => setActive((i) => (i + delta + slides.length) % slides.length);
  useEffect(() => {
    if (!section.current) return;
    if (!('IntersectionObserver' in window)) { setInView(true); return; }
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.1 });
    observer.observe(section.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!inView || slides.length < 2) return;
    const next = new Image();
    next.src = profileImage(slides[(active + 1) % slides.length].image);
    const previous = new Image();
    previous.src = profileImage(slides[(active - 1 + slides.length) % slides.length].image);
  }, [active, slides, inView]);
  useEffect(() => {
    const update = () => setVisible(!document.hidden);
    document.addEventListener('visibilitychange', update);
    return () => document.removeEventListener('visibilitychange', update);
  }, []);
  useEffect(() => {
    if (paused || hovered || focused || !visible || !inView || reduced || slides.length < 2) return;
    const timer = setTimeout(() => setActive((i) => (i + 1) % slides.length), 6000);
    return () => clearTimeout(timer);
  }, [active, paused, hovered, focused, visible, inView, reduced, slides.length]);
  if (!slides.length) return null;
  const slide = slides[active];
  return (
    <section ref={section} aria-roledescription="carousel" aria-label={label} className="overflow-hidden rounded-2xl border border-gold/30 bg-white shadow-card"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)} onBlurCapture={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false); }}
      onKeyDown={(e) => { if (e.key === 'ArrowLeft') { e.preventDefault(); move(-1); } if (e.key === 'ArrowRight') { e.preventDefault(); move(1); } }}>
      <div className={`grid ${compact ? 'lg:grid-cols-[1.1fr_1fr]' : 'md:grid-cols-[1.3fr_1fr]'}`}>
        <div className="relative touch-pan-y overflow-hidden bg-marble"
          onTouchStart={(e) => { start.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }; }}
          onTouchEnd={(e) => { if (!start.current) return; const dx = e.changedTouches[0].clientX - start.current.x; const dy = e.changedTouches[0].clientY - start.current.y; if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) move(dx < 0 ? 1 : -1); start.current = null; }}>
          <div className="aspect-[16/10] sm:aspect-[16/9]" />
          <AnimatePresence initial={false}>
            <motion.img key={slide.image} src={profileImage(slide.image)} alt={slide.alt} width="960" height="600" loading="lazy" decoding="async"
              initial={{ opacity: 0, scale: reduced ? 1 : 1.025 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ opacity: { duration: reduced ? 0 : 0.5 }, scale: { duration: 5.5 } }} className="absolute inset-0 size-full object-cover" />
          </AnimatePresence>
          <span className="absolute bottom-3 left-3 rounded-full bg-navy/85 px-3 py-1 text-[10px] text-white">Company-profile illustration</span>
        </div>
        <div id={id} className="image-slider-copy flex flex-col justify-center p-6 sm:p-8" aria-live={paused || focused || reduced ? 'polite' : 'off'} aria-atomic="true">
          <p className="mb-3 text-[10px] font-semibold tracking-[0.2em] text-[#866019] uppercase">{label} · {active + 1} / {slides.length}</p>
          <h2 className="text-2xl leading-tight font-semibold sm:text-3xl">{slide.title}</h2>
          <p className="mt-4 text-sm leading-7 text-navy/75">{slide.text}</p>
          {slide.to && <Link to={slide.to} className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold">Learn more <ArrowUpRight className="size-4 text-gold" aria-hidden="true" /></Link>}
        </div>
      </div>
      {slides.length > 1 && <div className="image-slider-controls flex flex-wrap items-center justify-between gap-3 border-t border-navy/10 px-4 py-3">
        <div className="flex gap-1"><button type="button" aria-label="Previous slide" aria-controls={id} onClick={() => move(-1)} className="flex size-11 items-center justify-center rounded-full border border-navy/15 hover:bg-gold-light/25"><ChevronLeft className="size-5" /></button><button type="button" aria-label="Next slide" aria-controls={id} onClick={() => move(1)} className="flex size-11 items-center justify-center rounded-full border border-navy/15 hover:bg-gold-light/25"><ChevronRight className="size-5" /></button></div>
        <div className="image-slider-dots flex flex-wrap justify-center">{slides.map((item, i) => <button key={item.title} type="button" aria-label={`Show slide ${i + 1}: ${item.title}`} aria-current={i === active ? 'true' : undefined} onClick={() => setActive(i)} className="flex size-8 items-center justify-center"><span className={`h-2 rounded-full transition-all ${i === active ? 'w-5 bg-gold' : 'w-2 bg-navy/20'}`} /></button>)}</div>
        <button type="button" aria-label={paused ? 'Resume automatic slides' : 'Pause automatic slides'} aria-pressed={paused || Boolean(reduced)} disabled={Boolean(reduced)} onClick={() => setPaused(!paused)} className="flex size-11 items-center justify-center rounded-full border border-navy/15 disabled:opacity-50">{paused || reduced ? <Play className="size-4" /> : <Pause className="size-4" />}</button>
      </div>}
    </section>
  );
}
