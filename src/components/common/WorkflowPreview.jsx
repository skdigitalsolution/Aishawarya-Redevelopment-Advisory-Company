import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import './workflow-preview.css';
const steps = ['Conveyance & Endorsement on Property Card', 'Architect – PMC Appointment', 'Feasibility Study', 'Design Development and IOD', 'Estimation and Tendering', 'Project Finance', 'Contractor Appointment', 'Vacating the Premise and Fulfilling CC', 'Construction Monitoring', 'Approvals and NOC like CC, Further CC, Occupancy Certificate', 'Possession'];
export function WorkflowMobileSteps() {
  return <details className="workflow-mobile-steps"><summary>Read the workflow steps</summary><ol>{steps.map((step,i) => <li key={step}><span aria-hidden="true">{String(i+1).padStart(2,'0')}</span>{step}</li>)}</ol></details>;
}
/** Full-screen mobile/tablet diagram viewer with native modal focus and pan/zoom. */
export default function WorkflowPreview({ src, onClose }) {
  const dialog = useRef(null);
  const [zoom, setZoom] = useState(1);
  useEffect(() => {
    const el = dialog.current;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    el.showModal();
    return () => { el.close(); document.body.style.overflow = previous; };
  }, []);
  return createPortal(<dialog ref={dialog} aria-label="Self-redevelopment workflow image preview" className="workflow-preview" onCancel={(e) => { e.preventDefault(); onClose(); }}>
    <div className="workflow-preview-toolbar"><p>Self-redevelopment workflow</p><button type="button" onClick={onClose} aria-label="Close image preview" autoFocus><X aria-hidden="true" /></button></div>
    <div className="workflow-preview-controls"><button type="button" onClick={() => setZoom(z => Math.max(1,z-.5))} disabled={zoom===1} aria-label="Zoom out"><ZoomOut aria-hidden="true" /></button><span aria-live="polite">{Math.round(zoom*100)}%</span><button type="button" onClick={() => setZoom(z => Math.min(4,z+.5))} disabled={zoom===4} aria-label="Zoom in"><ZoomIn aria-hidden="true" /></button><button type="button" onClick={() => setZoom(1)} aria-label="Reset image zoom"><RotateCcw aria-hidden="true" /></button></div>
    <div className="workflow-preview-scroll"><img src={src} alt="Full self-redevelopment workflow illustration with its original labels and timeline" width="1672" height="941" style={{ width: `${zoom*100}%` }} /></div>
  </dialog>,document.body);
}
