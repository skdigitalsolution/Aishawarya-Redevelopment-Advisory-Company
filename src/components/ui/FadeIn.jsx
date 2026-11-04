import { motion, useReducedMotion } from 'framer-motion';
/** @param {{children: React.ReactNode, className?: string, delay?: number}} props Reveal once when entering the viewport. */
export default function FadeIn({ children, className = '', delay = 0 }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}
