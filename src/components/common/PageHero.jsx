import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { content as c } from '../../data/content';
import { getPageCover } from '../../data/pageCovers';
/** Bright full-height inner-page cover; homepage hero is a separate component. */
export default function PageHero({ title, description, label = c.company.shortName }) {
  const { pathname } = useLocation();
  const cover = getPageCover(pathname);
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const src = `${import.meta.env.BASE_URL}${cover.image.slice(1)}`;
  return (
    <header ref={ref} className="inner-page-cover relative isolate flex min-h-[calc(100svh-6rem)] items-center justify-center overflow-hidden border-b border-gold/35 bg-marble px-5 py-14 text-center text-navy sm:px-8 lg:py-16">
      <motion.div className="pointer-events-none absolute -inset-14 -z-20" style={{ y: reduced ? 0 : y }}>
        <motion.img key={src} src={src} alt="" aria-hidden="true" width="1400" height="900" loading="eager" fetchPriority="high" initial={reduced ? false : { scale: 1.04 }} animate={{ scale: 1 }} transition={{ duration: 1.2, ease: 'easeOut' }} className="size-full object-cover brightness-110" style={{ objectPosition: cover.position }} />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,253,247,0.80)_0%,rgba(255,253,247,0.6)_50%,rgba(255,253,247,0.20)_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(255,253,247,0.65),transparent_35%,rgba(255,253,247,0.25))]" />
      <motion.div initial={reduced ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: reduced ? 0 : 0.1 }} className="relative mx-auto w-full max-w-4xl">
        <p className="mb-6 flex flex-wrap justify-center gap-2 text-xs font-medium text-navy/80"><Link className="transition-colors hover:text-[#866019]" to="/">Home</Link><span aria-hidden="true">/</span><span>{title}</span></p>
        <div className="rounded-3xl border border-white/75 bg-white/75 px-5 py-9 shadow-[0_12px_45px_rgba(7,20,47,0.07)] backdrop-blur-[3px] sm:px-9 sm:py-12">
          <p className="mb-4 text-[10px] font-semibold tracking-[0.25em] text-[#866019] uppercase">{label}</p>
          <h1 className="mx-auto max-w-3xl text-4xl leading-[1.1] font-semibold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">{title}</h1>
          <motion.div initial={reduced ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className="mx-auto mt-6 h-px w-20 bg-gold" aria-hidden="true" />
          {description && <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-navy/85 sm:text-base sm:leading-8">{description}</p>}
        </div>
      </motion.div>
      <p className="absolute right-4 bottom-4 rounded-full border border-white/50 bg-white/80 px-3 py-1 text-[9px] text-navy/65">Company-profile illustration</p>
    </header>
  );
}
