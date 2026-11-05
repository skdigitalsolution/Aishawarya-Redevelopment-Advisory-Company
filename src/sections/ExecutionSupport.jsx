import { HardHat, Coins, ShieldCheck, KeyRound } from 'lucide-react';
const items = [
  [HardHat, 'Construction Coordination', 'On-site and vendor coordination'],
  [Coins, 'Cost Monitoring', 'BOQ, cost control and variance tracking'],
  [ShieldCheck, 'Quality Auditing', 'Coordinate quality and safety reviews'],
  [KeyRound, 'Handover Support', 'Inspection, documentation and transition'],
];
export default function ExecutionSupport() {
  return (
    <section className="relative isolate overflow-hidden border-y border-gold/60 bg-navy text-white">
      <img src={`${import.meta.env.BASE_URL}images/transformation.webp`} alt="" aria-hidden="true" width="1024" height="1024" loading="lazy" className="absolute inset-0 -z-20 size-full object-cover object-center opacity-25" />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-navy/60 to-navy-dark/95" />
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-5 py-6 sm:px-8 lg:grid-cols-[0.9fr_1.4fr]">
        <div><p className="text-[10px] font-semibold tracking-[0.2em] text-gold-light uppercase">Construction & Execution Support</p><h2 className="mt-3 text-2xl leading-tight font-semibold">From Planning to Handover –<br />Execution with Confidence</h2></div>
        <div className="grid grid-cols-2 gap-y-6 rounded-xl border border-white/40 bg-white/10 py-5 backdrop-blur-sm sm:grid-cols-4">
          {items.map(([Icon, title, description]) => <div key={title} className="border-r border-white/20 px-3 text-center last:border-0"><Icon className="mx-auto size-8 text-gold-light" strokeWidth={1.5} aria-hidden="true" /><h3 className="mt-2 font-sans text-xs leading-tight font-semibold">{title}</h3><p className="mt-2 text-[10px] leading-snug text-white/80">{description}</p></div>)}
        </div>
      </div>
    </section>
  );
}
