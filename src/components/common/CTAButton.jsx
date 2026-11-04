import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
/** @param {{to?: string, href?: string, children: React.ReactNode, light?: boolean, secondary?: boolean}} props Accessible CTA. */
export default function CTAButton({ to, href, children, light = false, secondary = false, ...props }) {
  const classes = `group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border px-5 py-3 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold motion-reduce:transform-none ${secondary ? (light ? 'border-white/50 bg-white/5 text-white hover:bg-white/10' : 'border-navy/20 bg-white text-navy hover:border-gold') : 'border-gold-light/80 bg-linear-to-b from-gold-light to-gold text-navy-dark shadow-sm hover:brightness-105'}`;
  const body = (
    <>
      {children}
      <ArrowUpRight aria-hidden="true" className="size-4 shrink-0 transition group-hover:translate-x-0.5 motion-reduce:transform-none" />
    </>
  );
  return to ? (
    <Link to={to} className={classes} {...props}>
      {body}
    </Link>
  ) : (
    <a href={href} className={classes} {...props}>
      {body}
    </a>
  );
}
