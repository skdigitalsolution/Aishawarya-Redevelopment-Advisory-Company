import { motion, useReducedMotion } from 'framer-motion';
import { Building2, FileText, Layers3, MapPin, ShieldCheck, Users } from 'lucide-react';
import { content as c } from '../data/content';
import CTAButton from '../components/common/CTAButton';

const statIcons = {
  Building2,
  Users,
  FileText,
  Layers3,
};

/** Hero section styled to mirror the provided bespoke redevelopment website mock. */
export default function HeroSection() {
  const reduce = useReducedMotion();
  const metrics = [
    { value: '10+', label: 'Years Experience' },
    { value: '100+', label: 'Societies Advised' },
    { value: '200+', label: 'Title & Due Diligence Cases' },
    { value: '500+', label: 'CTS Plot Workflows' },
  ];

  return (
    <section className="approved-home-hero relative isolate overflow-hidden border-b border-gold/30 bg-marble text-navy">
      <div
        role="img"
        aria-label="Illustrative Mumbai waterfront and residential architecture at dusk"
        className="absolute inset-0 -z-20 bg-[url('/assets/home-hero.png')] bg-cover bg-[position:65%_center] bg-no-repeat lg:bg-center"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,253,247,0.98)_0%,rgba(255,253,247,0.94)_32%,rgba(255,253,247,0.70)_52%,rgba(255,253,247,0.08)_78%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(255,253,247,0.97)_0%,transparent_32%)]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-6 pt-3 sm:px-8 lg:pb-8 lg:pt-5">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.65 }}
          className="flex flex-col items-start gap-8 pb-6 pt-0 lg:flex-row lg:items-start lg:justify-between"
        >
          <div className="max-w-[660px] rounded-2xl bg-white/90 p-5 sm:p-6 lg:bg-transparent lg:p-0">
            <p className="mb-5 max-w-xl text-[11px] leading-6 font-semibold tracking-[0.16em] text-[#866019] sm:text-xs">
              {c.home.heroLabel}
            </p>
            <h1 className="max-w-[660px] text-[2.6rem] leading-[1.08] font-semibold tracking-[-0.035em] sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]">
              {c.home.headline} <span className="block text-[#946818]">{c.home.highlight}</span>
            </h1>
            <p className="mt-6 max-w-[580px] text-sm leading-7 text-navy/80 sm:text-base lg:text-[1.05rem]">
              {c.home.subheadline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton to="/services">{c.ui.services}</CTAButton>
              <CTAButton to="/contact-us" secondary>
                {c.ui.consult}
              </CTAButton>
            </div>
          </div>

          <div className="hidden shrink-0 self-start lg:flex lg:justify-end lg:pt-2">
            <div className="rounded-full border border-gold-light/80 bg-white/90 p-2 shadow-[0_0_35px_rgba(240,207,122,0.18)] backdrop-blur-sm">
              <div className="flex size-32 items-center justify-center rounded-full border border-gold-light/80 bg-white/95 text-center text-[#866019] shadow-inner shadow-gold-light/10 sm:size-36">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#866019]">Society</div>
                  <div className="mt-1 text-[12px] font-semibold uppercase leading-tight tracking-[0.12em] text-[#866019]">Redevelopment</div>
                  <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#866019]">Specialists</div>
                  <div className="mt-2 flex justify-center gap-1 text-[10px] text-[#866019]">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-2 flex flex-wrap gap-x-7 gap-y-3 border-t border-gold/30 bg-white/85 px-4 py-5 text-xs text-navy/80 lg:bg-transparent lg:px-0">
          <span className="flex items-center gap-2">
            <MapPin className="size-4 text-[#866019]" />
            Mumbai-based advisory
          </span>
          <span className="flex items-center gap-2">
            <Users className="size-4 text-[#866019]" />
            Society-centric approach
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-[#866019]" />
            Professional coordination
          </span>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-4 sm:px-8">
        <div className="grid overflow-hidden rounded-xl border border-gold/30 bg-white/95 shadow-card sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map(({ value, label }, index) => {
            const Icon = statIcons[Object.keys(statIcons)[index]] ?? Building2;
            return (
              <div
                key={label}
                className="flex items-center gap-4 border-b border-gold/20 px-5 py-5 text-navy sm:border-r sm:border-b-0 last:border-r-0"
              >
                <span className="flex size-12 items-center justify-center rounded-full border border-gold-light/60 bg-gold-light/10 text-[#866019]">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <div className="text-3xl font-bold tracking-[-0.06em] text-[#866019]">{value}</div>
                  <div className="mt-1 text-xs leading-5 text-navy/75">{label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
