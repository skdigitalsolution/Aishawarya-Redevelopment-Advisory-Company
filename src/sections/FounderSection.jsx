import { Link } from 'react-router-dom';
import { Building2, Handshake, Coins, HardHat, Trophy, Users, Award } from 'lucide-react';
import { content as c } from '../data/content';
import FadeIn from '../components/ui/FadeIn';
const pillars = [[Building2, 'Society Redevelopment'], [Handshake, 'Advisory & Strategy'], [Coins, 'Investment Structuring'], [HardHat, 'Execution & Handover']];
export default function FounderSection() {
  return (
    <section className="company-leadership border-b border-gold/20">
      <FadeIn className="mx-auto grid max-w-7xl gap-8 px-5 py-9 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-10 lg:py-10">
        <div>
          <p className="company-leadership__label">About Our Company</p>
          <h2 className="mt-2 max-w-xl text-[1.8rem] leading-[1.12] font-bold tracking-tight sm:text-[2.15rem]"><Link to="/about-us">{c.company.name}</Link></h2>
          <p className="mt-4 max-w-xl text-[13px] leading-[1.65] text-navy/85">{c.company.intro}</p>
          <div className="mt-6 grid grid-cols-4 divide-x divide-gold/30">
            {pillars.map(([Icon, label]) => <div key={label} className="px-2 text-center"><Icon className="mx-auto mb-2 size-8 text-[#a57925]" strokeWidth={1.4} aria-hidden="true" /><p className="mx-auto max-w-24 text-[10px] leading-tight font-semibold sm:text-xs">{label}</p></div>)}
          </div>
        </div>
        <div className="min-w-0">
          <div className="grid items-start gap-5 sm:grid-cols-[0.9fr_1.1fr]">
            <Link to="/founder-leadership" aria-label="Meet Mr. Sachin Murudkar" className="mx-auto block w-full max-w-[235px] overflow-hidden rounded-2xl border border-gold/60 bg-white pt-3 shadow-card sm:max-w-none">
              <img src={c.founder.image} alt={c.founder.alt} width="516" height="564" loading="lazy" className="block aspect-[0.9] w-full object-cover object-top" />
            </Link>
            <div className="pt-1">
              <p className="company-leadership__label !text-[10px]">Our Leadership</p>
              <h3 className="mt-2 text-[1.35rem] leading-tight font-bold"><Link to="/founder-leadership">{c.founder.name}</Link></h3>
              <p className="mt-1 inline-block border-b border-gold/50 pb-1 text-xs font-semibold">{c.founder.role}</p>
              <p className="mt-3 text-xs leading-[1.6] text-navy/85">{c.founder.intro}</p>
              <p className="mt-2 text-xs leading-[1.6] text-navy/85">{c.founder.philosophy}</p>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-3 divide-x divide-gold/30 rounded-xl border border-navy/10 bg-white/80 px-1 py-3 shadow-sm">
            {[[Trophy, '10+', 'Years Leadership'], [Users, '100+', 'Societies Advised'], [Award, 'End-to-End', 'Advisory Focus']].map(([Icon, value, label]) => <div key={label} className="flex items-center justify-center gap-2 px-2"><Icon className="hidden size-7 shrink-0 text-[#a57925] sm:block" strokeWidth={1.4} aria-hidden="true" /><div><p className="text-sm leading-tight font-bold">{value}</p><p className="mt-1 text-[9px] leading-tight">{label}</p></div></div>)}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
