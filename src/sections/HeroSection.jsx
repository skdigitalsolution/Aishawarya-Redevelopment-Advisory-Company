import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, ShieldCheck, Users } from 'lucide-react';
import { content as c } from '../data/content';
import CTAButton from '../components/common/CTAButton';
/** Cinematic homepage hero with reduced-motion-aware text reveal and CSS parallax. */
export default function HeroSection() {
  const reduce = useReducedMotion();
  return (
    <section className="relative isolate overflow-hidden border-b border-gold/50 bg-navy-dark text-white">
      <div
        role="img"
        aria-label="Illustrative Mumbai waterfront and residential architecture at dusk"
        className="absolute inset-0 -z-20 bg-[url('/assets/mumbai-skyline.jpeg')] bg-[length:auto_185%] bg-[position:72%_100%] bg-no-repeat lg:bg-fixed motion-reduce:bg-scroll"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-navy-dark/95 via-navy-dark/70 to-navy-dark/10" />
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduce ? 0 : 0.65 }}
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"
      >
        <p className="mb-6 max-w-xl text-[10px] leading-6 font-semibold tracking-[0.18em] text-gold-light sm:text-xs">{c.home.heroLabel}</p>
        <h1 className="max-w-2xl text-4xl leading-[1.08] font-semibold sm:text-6xl lg:text-7xl">
          {c.home.headline} <span className="block text-gold-light">{c.home.highlight}</span>
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-7 text-white/85 sm:text-base">{c.home.subheadline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CTAButton to="/services">{c.ui.services}</CTAButton>
          <CTAButton to="/contact-us" secondary light>
            {c.ui.consult}
          </CTAButton>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/15 pt-6 text-xs text-white/80">
          <span className="flex items-center gap-2">
            <MapPin className="size-4 text-gold-light" />
            Mumbai-based advisory
          </span>
          <span className="flex items-center gap-2">
            <Users className="size-4 text-gold-light" />
            Society-centric approach
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-gold-light" />
            Professional coordination
          </span>
        </div>
      </motion.div>
    </section>
  );
}
