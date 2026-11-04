/** @param {{label: string, title?: string, subtitle?: string, light?: boolean, align?: string}} props Section title and decorative rules. */
export default function SectionHeading({ label, title, subtitle, light = false, align = 'center' }) {
  return (
    <header className={`mb-5 ${align === 'left' ? 'text-left' : 'text-center'}`}>
      <div className={`mb-3 flex items-center gap-3 ${align === 'left' ? '' : 'justify-center'}`}>
        <span className="h-px w-10 bg-gold/60" aria-hidden="true" />
        <p className="text-[10px] font-semibold tracking-[0.22em] text-gold uppercase">{label}</p>
        <span className="h-px w-10 bg-gold/60" aria-hidden="true" />
      </div>
      {title && (
        <h2 className={`text-2xl leading-tight font-bold sm:text-3xl lg:text-3xl ${light ? 'text-white' : 'text-navy-dark'}`}>{title}</h2>
      )}
      {subtitle && <p className={`mt-3 text-sm leading-relaxed ${light ? 'text-white/80' : 'text-navy/80'}`}>{subtitle}</p>}
    </header>
  );
}
