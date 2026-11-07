import { motion, useReducedMotion } from 'framer-motion';
import { content as c } from '../data/content';
import TypingText, { typingDuration } from '../components/common/TypingText';
import './client-standard-hero.css';
const firstLine = 'Your Development Partner:';
const secondLine = "Building Mumbai's Future Together";
/** Client-approved static skyline with only the requested text and corner emblem. */
export default function HeroSection() {
  const reduced = useReducedMotion();
  return (
    <section className="approved-home-hero client-standard-hero relative isolate overflow-hidden">
      <img src={`${import.meta.env.BASE_URL}assets/hero-client-standard.png`} alt="" aria-hidden="true" width="1672" height="941" fetchPriority="high" decoding="async" className="client-standard-hero__background" />
      <motion.div className="client-standard-hero__logo" initial={reduced ? false : { opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1, y: reduced ? 0 : [0, -5, 0] }} transition={reduced ? { duration: 0 } : { opacity: { duration: 0.65 }, scale: { duration: 0.65 }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}>
        <img src={`${import.meta.env.BASE_URL}assets/hero-client-logo.png`} alt={`${c.company.name} emblem`} width="1600" height="1600" />
      </motion.div>
      <div className="client-standard-hero__copy">
        <h1>
          <span className="block"><TypingText text={firstLine} characterDelay={0.075} delay={0.2} /></span>
          <span className="block"><TypingText text={secondLine} characterDelay={0.075} delay={0.35 + typingDuration(firstLine, 0.075)} /></span>
        </h1>
      </div>
    </section>
  );
}
