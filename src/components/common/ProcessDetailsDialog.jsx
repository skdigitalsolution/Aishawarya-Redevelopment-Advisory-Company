import { useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';
import { profileImage, processImages, processActivities } from '../../data/profileImages';
import Icon from '../ui/Icon';
import './process-dialog.css';
/** Native modal gives keyboard trapping, background inertness and Escape support. */
export default function ProcessDetailsDialog({ step, index, color, onClose }) {
  const dialog = useRef(null);
  const id = useId();
  const reduced = useReducedMotion();
  useEffect(() => {
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    const previousPadding = document.body.style.paddingRight;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    const padding = parseFloat(getComputedStyle(document.body).paddingRight) || 0;
    document.body.style.overflow = 'hidden';
    if (scrollbar > 0) document.body.style.paddingRight = `${padding + scrollbar}px`;
    element.showModal();
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPadding;
    };
  }, []);
  return createPortal(
    <dialog ref={dialog} aria-labelledby={`${id}-title`} aria-describedby={`${id}-description`} className="process-dialog" onCancel={(event) => { event.preventDefault(); onClose(); }} onClick={(event) => {
      if (event.target !== event.currentTarget) return;
      const box = event.currentTarget.getBoundingClientRect();
      if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) onClose();
    }}>
      <motion.div initial={reduced ? false : { opacity: 0, y: 12, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: reduced ? 0 : 0.2 }}>
        <div className="sticky top-0 z-10 flex items-start gap-4 border-b bg-white px-5 py-4 sm:px-7" style={{ borderColor: `${color}40` }}>
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border text-sm font-semibold" style={{ color, borderColor: `${color}60`, backgroundColor: `${color}10` }}>{step.number}</span>
          <div className="min-w-0 flex-1"><p className="mb-1 text-xs font-medium" style={{ color }}>Redevelopment Journey</p><h2 id={`${id}-title`} className="text-2xl leading-tight font-semibold sm:text-3xl">{step.title}</h2></div>
          <button type="button" autoFocus onClick={onClose} aria-label="Close step details" className="flex size-11 shrink-0 items-center justify-center rounded-full border border-navy/15 bg-white text-navy transition hover:bg-marble"><X className="size-5" aria-hidden="true" /></button>
        </div>
        <div className="px-5 py-6 sm:px-7">
          <figure><img src={profileImage(processImages[index])} alt={`Company-profile illustration for ${step.title.toLowerCase()}`} width="900" height="560" className="aspect-[16/9] max-h-64 w-full rounded-xl object-cover" /><figcaption className="mt-2 text-xs text-navy/55">Illustration from the supplied company profile.</figcaption></figure>
          <div className="mt-5 flex items-start gap-3"><Icon name={step.icon} className="mt-1 size-6 shrink-0" /><p id={`${id}-description`} className="text-base leading-7 font-medium">{step.description}</p></div>
          <p className="mt-4 text-base leading-7 text-navy/75">{step.detail}</p>
          <h3 className="mt-6 font-sans text-lg font-semibold">Important activities</h3>
          <ul className="mt-3 space-y-3 text-sm leading-6 text-navy/80">{processActivities[index].map((text) => <li key={text} className="flex gap-3"><span style={{ color }} aria-hidden="true">•</span>{text}</li>)}</ul>
          <div className="mt-6 rounded-xl border bg-marble/60 p-4" style={{ borderColor: `${color}40` }}><h3 className="font-sans text-sm font-semibold">How Aishwarya helps</h3><p className="mt-2 text-sm leading-7 text-navy/75">We organize the information, coordinate the appointed professionals and help the society follow up on the next steps.</p></div>
        </div>
      </motion.div>
    </dialog>, document.body,
  );
}
