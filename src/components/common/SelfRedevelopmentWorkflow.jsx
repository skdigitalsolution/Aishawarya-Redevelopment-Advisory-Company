import { useRef, useState } from 'react';
import WorkflowPreview, { WorkflowMobileSteps } from './WorkflowPreview';
/** The supplied workflow artwork is shown uncropped so labels remain legible. */
export default function SelfRedevelopmentWorkflow() {
  const [preview, setPreview] = useState(false);
  const link = useRef(null);
  const src = `${import.meta.env.BASE_URL}assets/self-redevelopment-workflow.png`;
  const close = () => { setPreview(false); requestAnimationFrame(() => link.current?.focus({ preventScroll: true })); };
  return <><figure className="mx-auto w-full overflow-hidden rounded-2xl border border-gold/30 bg-white p-2 shadow-card sm:p-4">
    <a ref={link} onClick={(event) => { if (window.matchMedia('(max-width: 1023px)').matches) { event.preventDefault(); setPreview(true); } }} href={`${import.meta.env.BASE_URL}assets/self-redevelopment-workflow.png`} target="_blank" rel="noopener noreferrer" aria-label="Open the full self-redevelopment workflow illustration" className="block rounded-xl focus-visible:outline-2 focus-visible:outline-gold">
      <img src={`${import.meta.env.BASE_URL}assets/self-redevelopment-workflow.png`} alt="Client-provided self-redevelopment workflow: title records, architect and PMC, feasibility, design, tendering, finance, contractor appointment, permissions, construction monitoring and possession" width="1672" height="941" loading="lazy" decoding="async" style={{ scale: 1 }} className="block h-auto w-full rounded-xl object-contain" />
    </a>
    <figcaption className="px-2 pt-3 pb-1 text-xs leading-6 text-navy/65">Client-supplied workflow illustration. Open the image to read all labels. Timings are indicative; the actual schedule depends on member decisions, title, plot details and applicable approvals.</figcaption>
    <WorkflowMobileSteps />
  </figure>{preview && <WorkflowPreview src={src} onClose={close} />}</>;
}
