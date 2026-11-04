import { ArrowRight, FileText, Star } from 'lucide-react';
import { siteData as d } from '../../data/siteData';
import Button from '../ui/Button';
import StatCounter from '../ui/StatCounter';
/** Navy-and-gold waterfront hero matching the supplied design; no props. */
export default function Hero() {
  return (
    <section className="relative mb-10 border-b border-gold/50 bg-navy-dark text-white">
      <div
        className="absolute inset-0 bg-[url('/assets/mumbai-skyline.jpeg')] bg-[length:auto_185%] bg-[position:70%_100%] bg-no-repeat"
        role="img"
        aria-label={d.hero.imageAlt}
      />
      <div className="absolute inset-0 bg-linear-to-r from-navy-dark/85 via-navy-dark/30 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 pt-12 pb-24 sm:px-8 lg:pt-14 lg:pb-24">
        <div className="max-w-xl">
          <p className="mb-4 text-[10px] leading-relaxed font-semibold tracking-[0.13em] text-white sm:text-xs">{d.hero.label}</p>
          <h1 className="font-heading text-4xl leading-[1.02] font-bold sm:text-5xl lg:text-6xl">
            {d.hero.title}
            <span className="block text-gold-light">{d.hero.highlight}</span>
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/95 sm:text-base">{d.hero.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/projects">
              {d.ui.explore}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button href="/contact" variant="outline">
              {d.ui.proposal}
              <FileText className="size-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
        <div className="absolute top-6 right-8 hidden w-36 rounded-full border-x-4 border-gold-light p-4 text-center lg:block">
          <p className="text-xs leading-relaxed font-semibold">{d.hero.badge}</p>
          <span className="mt-2 flex justify-center gap-1 text-gold-light">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} className="size-3 fill-current" aria-hidden="true" />
            ))}
          </span>
        </div>
      </div>
      <div className="relative mx-auto -mt-9 -mb-9 max-w-5xl px-4">
        <div className="grid grid-cols-2 rounded-2xl border border-white/70 bg-navy/65 shadow-xl backdrop-blur-xl md:grid-cols-4 md:divide-x md:divide-white/30">
          {d.stats.map((stat) => (
            <StatCounter key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
