/** @param {{children: React.ReactNode, href?: string, variant?: 'gold'|'outline', className?: string}} props Native button or anchor. */
export default function Button({ children, href, variant = 'gold', className = '', ...props }) {
  const Tag = href ? 'a' : 'button';
  const variants = {
    gold: 'border-gold-light bg-linear-to-b from-gold-light to-gold text-navy-dark shadow-lg',
    outline: 'border-white/75 bg-navy/35 text-white backdrop-blur-sm',
  };
  return (
    <Tag
      {...props}
      {...(href ? { href } : { type: props.type ?? 'button' })}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border px-5 py-3 text-sm font-semibold transition hover:brightness-110 disabled:cursor-wait disabled:opacity-60 ${variants[variant]} ${className}`}
    >
      {children}
    </Tag>
  );
}
