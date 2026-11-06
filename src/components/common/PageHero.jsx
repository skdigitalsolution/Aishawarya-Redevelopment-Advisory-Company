import { Link, useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { content as c } from '../../data/content';
import { getPageCover } from '../../data/pageCovers';
import './banner-glass.css';
import TypingText, { typingDuration } from './TypingText';
/** Bright full-height inner-page cover; homepage hero is a separate component. */
export default function PageHero({ title, description, label = c.company.shortName }) {
  const { pathname } = useLocation();
  const cover = getPageCover(pathname);
  const descriptionDelay = 0.15 + typingDuration(title, 0.05);
  const reduced = useReducedMotion();
  const src = `${import.meta.env.BASE_URL}${cover.image.slice(1)}`;
  return (
    <header className="inner-page-cover relative isolate flex min-h-[calc(100svh-6rem)] items-center justify-center overflow-hidden border-b border-gold/35 bg-marble px-5 py-14 text-center text-navy sm:px-8 lg:py-16">
      <motion.div className="inner-banner-depth pointer-events-none absolute inset-0 -z-20">
        <motion.img key={src} src={src} alt="" aria-hidden="true" width="1400" height="900" loading="eager" fetchPriority="high"
          initial={reduced ? false : { scale: 1 }}
          animate={reduced ? { scale: 1 } : { scale: [1, 1.035, 1] }}
          transition={reduced ? { duration: 0 } : { duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="inner-banner-motion size-full object-cover" style={{ objectPosition: 'center top', transformOrigin: 'center top' }} />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,253,247,0.12)_0%,transparent_85%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(7,20,47,0.12),transparent_35%,rgba(255,253,247,0.08))]" />
      <motion.div initial={reduced ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: reduced ? 0 : 0.1 }} className="relative mx-auto w-full max-w-4xl">
        <p className="mb-6 flex flex-wrap justify-center gap-2 text-xs font-medium text-navy/80 banner-glass-breadcrumb"><Link className="transition-colors hover:text-[#866019]" to="/">Home</Link><span aria-hidden="true">/</span><span>{title}</span></p>
        <div className="banner-glass rounded-3xl border border-white/50 px-5 py-9 sm:px-9 sm:py-12">
          <p className="mb-4 text-[10px] font-semibold tracking-[0.25em] text-[#866019] uppercase"><TypingText text={label} characterDelay={0.018} /></p>
          <h1 className="mx-auto max-w-3xl text-4xl leading-[1.1] font-semibold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"><TypingText text={title} delay={0.15} characterDelay={0.05} /></h1>
          <motion.div initial={reduced ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className="mx-auto mt-6 h-px w-20 bg-gold" aria-hidden="true" />
          {description && <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-navy/85 sm:text-base sm:leading-8"><TypingText text={description} delay={descriptionDelay} characterDelay={0.012} /></p>}
        </div>
      </motion.div>
      <p className="absolute right-4 bottom-4 rounded-full border border-white/50 bg-white/80 px-3 py-1 text-[9px] text-navy/65">Company-profile illustration</p>
    </header>
  );
}
