import { useId, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { process } from '../../data/process';
import Icon from '../ui/Icon';
import { profileImage, processImages, processActivities } from '../../data/profileImages';
/** @param {{detailed?: boolean}} props Eight-stage interactive journey. */
export default function ProcessJourney({ detailed = false }) {
  const [active, setActive] = useState(0);
  const id = useId();
  const reduced = useReducedMotion();
  return (
    <ol className={`grid gap-3 ${detailed ? 'lg:grid-cols-2' : 'md:grid-cols-2 xl:grid-cols-4'}`}>
      {process.map((step, i) => {
        const open = active === i;
        return (
          <li
            key={step.number}
            className={`self-start rounded-2xl border bg-white transition ${open ? 'border-gold shadow-card' : 'border-navy/10'}`}
          >
            <h3 className="font-sans">
              <button
                id={`${id}-step-${i}`}
                type="button"
                onClick={() => setActive(open ? null : i)}
                aria-expanded={open}
                aria-controls={`${id}-detail-${i}`}
                className="flex min-h-24 w-full items-center gap-3 p-5 text-left"
              >
                <span
                  className={`flex size-10 shrink-0 items-center justify-center rounded-full text-xs font-bold ${open ? 'bg-gold-light text-navy' : 'bg-marble text-navy/60'}`}
                >
                  {step.number}
                </span>
                <span className="flex-1 text-sm font-semibold">{step.title}</span>
                <ChevronDown className={`size-4 shrink-0 text-gold transition ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={`${id}-detail-${i}`}
                  role="region"
                  aria-labelledby={`${id}-step-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: reduced ? 0 : 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-navy/5 px-5 pt-4 pb-6">
                    {detailed && <figure className="mb-4"><img src={profileImage(processImages[i])} alt={`Company-profile illustration for ${step.title.toLowerCase()}`} width="900" height="560" loading="lazy" className="aspect-[16/9] w-full rounded-xl object-cover" /><figcaption className="mt-1 text-[10px] text-navy/50">Illustration from the company profile.</figcaption></figure>}
                    <Icon name={step.icon} className="mb-3 size-6 text-gold" />
                    <p className="text-sm leading-6">{step.description}</p>
                    <p className="mt-3 text-xs leading-6 text-navy/65">{step.detail}</p>
                    {detailed && <><h4 className="mt-4 font-sans text-sm font-semibold">Important activities</h4><ul className="mt-2 space-y-2 text-xs leading-6 text-navy/75">{processActivities[i].map((text) => <li key={text}>• {text}</li>)}</ul><p className="mt-4 text-xs leading-6"><strong>How Aishwarya helps: </strong>We organize the information, coordinate the appointed professionals and help the society follow up on the next steps.</p></>}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ol>
  );
}
