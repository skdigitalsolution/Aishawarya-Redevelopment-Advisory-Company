import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { content as c } from '../../data/content';
import { navigation } from '../../data/navigation';
import NavDropdown from './NavDropdown';
import MobileMenu from './MobileMenu';
/** Sticky navigation with shared desktop/mobile route data. No props. */
export default function Navbar() {
  const [open, setOpen] = useState(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef(null);
  const toggle = useRef(null);
  const location = useLocation();
  useEffect(() => {
    setOpen(null);
    setMobile(false);
  }, [location.key]);
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 12);
    scroll();
    window.addEventListener('scroll', scroll, { passive: true });
    return () => window.removeEventListener('scroll', scroll);
  }, []);
  useEffect(() => {
    const outside = (e) => {
      if (!ref.current?.contains(e.target)) {
        setOpen(null);
        setMobile(false);
      }
    };
    const key = (e) => {
      if (e.key === 'Escape') {
        setOpen(null);
        if (mobile) {
          setMobile(false);
          toggle.current?.focus();
        }
      }
    };
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', key);
    return () => {
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('keydown', key);
    };
  }, [mobile]);
  return (
    <header
      ref={ref}
      className={`sticky top-0 z-50 border-b border-gold/50 bg-navy-dark/98 text-white backdrop-blur-lg transition-shadow ${scrolled ? 'shadow-lg' : ''}`}
    >
      <a className="sr-only focus:not-sr-only focus:absolute focus:z-60 focus:bg-white focus:p-4 focus:text-navy" href="#main">
        {c.ui.skip}
      </a>
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-4 px-4 sm:px-8">
        <Link to="/" aria-label={c.company.name} className="flex min-w-0 items-center gap-3">
          <img
            src={c.company.logo}
            alt={c.company.logoAlt}
            width="52"
            height="52"
            className="size-12 shrink-0 -rotate-90 rounded-full bg-white object-contain"
          />
          <span className="block">
            <span className="block font-heading text-lg tracking-wide text-gold-light sm:text-xl">{c.company.shortName}</span>
            <span className="block max-w-44 text-[9px] leading-relaxed text-gold-light/85 sm:max-w-52 sm:text-[10px]">
              {c.company.descriptor}
            </span>
          </span>
        </Link>
        <nav aria-label="Main navigation" className="ml-auto hidden items-center gap-4 xl:flex">
          {navigation.map((item, i) =>
            item.items ? (
              <NavDropdown key={item.label} item={item} open={open === i} onOpen={() => setOpen(i)} onClose={() => setOpen(null)} />
            ) : (
              <Link
                key={item.label}
                to={item.to}
                aria-current={location.pathname === item.to ? 'page' : undefined}
                className={`nav-link py-4 text-[11px] font-medium ${location.pathname === item.to ? 'text-gold-light' : 'text-white/85'}`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <Link
          to="/contact-us"
          className="ml-auto hidden shrink-0 items-center gap-2 rounded-lg bg-linear-to-b from-gold-light to-gold px-4 py-3 text-[11px] font-semibold text-navy-dark transition hover:brightness-110 sm:inline-flex xl:ml-1"
        >
          {c.ui.consult}
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
        <button
          ref={toggle}
          type="button"
          aria-expanded={mobile}
          aria-controls="mobile-navigation"
          aria-label={mobile ? c.ui.closeMenu : c.ui.menu}
          onClick={() => setMobile(!mobile)}
          className="ml-auto rounded-lg p-3 text-gold-light sm:ml-0 xl:hidden"
        >
          {mobile ? <X /> : <Menu />}
        </button>
      </div>
      {mobile && <MobileMenu onClose={() => setMobile(false)} />}
    </header>
  );
}
