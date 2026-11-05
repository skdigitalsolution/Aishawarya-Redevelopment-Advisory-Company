import { useId, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from '../ui/TestimonialCard';
/** Renders only real, approved feedback passed by the caller. */
export default function TestimonialCarousel({ testimonials }) {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const id = useId();
  if (!testimonials.length) return null;
  const move = (delta) => setActive((i) => (i + delta + testimonials.length) % testimonials.length);
  return <div aria-roledescription="carousel" aria-label="Approved client feedback">
    <div id={id} aria-live="polite"><AnimatePresence mode="wait" initial={false}><motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : 0.2 }}><TestimonialCard testimonial={testimonials[active]} /></motion.div></AnimatePresence></div>
    {testimonials.length > 1 && <div className="mt-4 flex items-center justify-between"><button type="button" aria-label="Previous testimonial" aria-controls={id} onClick={() => move(-1)} className="flex size-11 items-center justify-center rounded-full border border-gold/30"><ChevronLeft className="size-5" /></button><div className="flex flex-wrap">{testimonials.map((item,i) => <button type="button" key={`${item.name}-${i}`} aria-label={`Show testimonial ${i+1}`} aria-current={i === active ? 'true' : undefined} onClick={() => setActive(i)} className="flex size-8 items-center justify-center"><span className={`size-2 rounded-full ${i === active ? 'bg-gold' : 'bg-navy/20'}`} /></button>)}</div><button type="button" aria-label="Next testimonial" aria-controls={id} onClick={() => move(1)} className="flex size-11 items-center justify-center rounded-full border border-gold/30"><ChevronRight className="size-5" /></button></div>}
  </div>;
}
