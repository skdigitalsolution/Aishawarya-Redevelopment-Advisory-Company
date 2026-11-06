import { useId, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { process } from '../../data/process';
import ProcessDetailsDialog from './ProcessDetailsDialog';
const colors = ['#ad7c20', '#3777a9', '#6e58a5', '#328276', '#a66335', '#985d85', '#547c39', '#4d669a'];
/** Eight compact colour-bordered buttons; full step information opens in a modal. */
export default function ProcessJourney({ detailed = false }) {
  const [active, setActive] = useState(null);
  const triggers = useRef([]);
  const id = useId();
  const close = () => {
    const trigger = triggers.current[active];
    setActive(null);
    requestAnimationFrame(() => trigger?.focus({ preventScroll: true }));
  };
  return <>
    <ol className={`grid auto-rows-fr gap-4 ${detailed ? 'sm:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2 xl:grid-cols-4'}`}>
      {process.map((step, i) => <li key={step.number}>
        <button ref={(element) => { triggers.current[i] = element; }} id={`${id}-step-${i}`} type="button" aria-haspopup="dialog" onClick={() => setActive(i)} className="group flex h-full min-h-28 w-full items-center gap-3 rounded-xl border-2 bg-white px-4 py-5 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-card focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:transform-none" style={{ borderColor: `${colors[i]}95`, outlineColor: colors[i] }}>
          <span className="flex size-10 shrink-0 items-center justify-center rounded-lg text-xs font-semibold" style={{ color: colors[i], backgroundColor: `${colors[i]}12` }}>{step.number}</span>
          <span className="min-w-0 flex-1 text-sm leading-6 font-semibold">{step.title}</span>
          <ArrowUpRight className="size-4 shrink-0 transition group-hover:translate-x-0.5 motion-reduce:transform-none" style={{ color: colors[i] }} aria-hidden="true" />
        </button>
      </li>)}
    </ol>
    {active !== null && <ProcessDetailsDialog step={process[active]} index={active} color={colors[active]} onClose={close} />}
  </>;
}
