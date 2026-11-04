/** @param {{step: {number: string, title: string, description: string}}} props One semantic timeline item; parent supplies list. */
export default function ProcessStep({ step }) {
  return (
    <li className="relative min-w-0 rounded-2xl border border-gold/25 bg-white px-4 pt-10 pb-5 text-center shadow-card">
      <span className="absolute -top-4 left-1/2 flex size-9 -translate-x-1/2 items-center justify-center rounded-full border border-gold bg-linear-to-b from-gold-light to-gold text-xs font-bold shadow-sm">
        {step.number}
      </span>
      <h3 className="font-sans text-sm font-bold">{step.title}</h3>
      <p className="mt-2 text-xs leading-relaxed text-navy/80">{step.description}</p>
    </li>
  );
}
