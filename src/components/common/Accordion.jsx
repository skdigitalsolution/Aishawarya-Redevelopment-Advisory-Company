import { useId, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
/** @param {{items: Array<{id: string, question: string, answer: string}>}} props Keyboard accessible FAQ disclosures. */
export default function Accordion({ items }) {
  const [active, setActive] = useState(null);
  const id = useId();
  const reduced = useReducedMotion();
  return (
    <div className="divide-y divide-navy/10 rounded-2xl border border-navy/10 bg-white px-5 sm:px-7">
      {items.map((item, i) => {
        const open = active === i;
        return (
          <div key={item.id}>
            <h3 className="font-sans">
              <button
                type="button"
                id={`${id}-button-${i}`}
                aria-expanded={open}
                aria-controls={`${id}-panel-${i}`}
                onClick={() => setActive(open ? null : i)}
                className="flex min-h-16 w-full items-center justify-between gap-5 py-5 text-left text-sm leading-relaxed font-semibold"
              >
                {item.question}
                {open ? <Minus className="size-4 shrink-0 text-gold" /> : <Plus className="size-4 shrink-0 text-gold" />}
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  key={item.id}
                  id={`${id}-panel-${i}`}
                  role="region"
                  aria-labelledby={`${id}-button-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: reduced ? 0 : 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-sm leading-7 text-navy/70">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
