import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { navigation } from '../../data/navigation';
import { content as c } from '../../data/content';
/** @param {{onClose: Function}} props Expandable, touch-friendly mobile navigation. */
export default function MobileMenu({ onClose }) {
  const [expanded, setExpanded] = useState(null);
  const { pathname } = useLocation();
  useEffect(() => {
    const oldOverflow = document.body.style.overflow;
    const oldPadding = document.body.style.paddingRight;
    const gap = window.innerWidth - document.documentElement.clientWidth;
    if (gap > 0) document.body.style.paddingRight = `${(parseFloat(getComputedStyle(document.body).paddingRight) || 0) + gap}px`;
    document.body.style.overflow = 'hidden';
    const background = [document.querySelector('main'), document.querySelector('footer')].filter(Boolean);
    const oldInert = background.map((node) => node.inert);
    background.forEach((node) => { node.inert = true; });
    return () => {
      document.body.style.overflow = oldOverflow;
      document.body.style.paddingRight = oldPadding;
      background.forEach((node, i) => { node.inert = oldInert[i]; });
    };
  }, []);
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1280px)');
    const closeOnDesktop = () => { if (desktop.matches) onClose(); };
    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, [onClose]);
  return (
    <nav
      id="mobile-navigation"
      aria-label="Mobile navigation"
      className="max-h-[calc(100dvh-6rem)] overflow-y-auto border-t border-gold/20 bg-white px-5 pt-3 pb-6 xl:hidden"
    >
      {navigation.map((item, i) => (
        <div key={item.label}>
          {item.items ? (
            <>
              <button
                type="button"
                aria-expanded={expanded === i}
                aria-controls={`mobile-group-${i}`}
                onClick={() => setExpanded(expanded === i ? null : i)}
                className={`flex min-h-12 w-full items-center justify-between gap-3 rounded-lg px-3 text-left text-sm transition-colors ${expanded === i ? 'bg-slate-700 font-semibold text-gold-light' : 'text-navy hover:bg-gold-light hover:text-navy-dark'}`}
              >
                {item.label}
                <ChevronDown className={`size-4 ${expanded === i ? 'rotate-180 text-gold-light' : 'text-current'}`} />
              </button>
              {expanded === i && (
                <div id={`mobile-group-${i}`} className="mb-3 rounded-b-lg border border-gold bg-slate-700 p-2">
                  {item.items.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={onClose}
                      aria-current={pathname === link.to.split(/[?#]/)[0] ? 'page' : undefined}
                      className={`block rounded-lg px-3 py-3 text-sm text-white transition-colors hover:bg-gold hover:text-navy-dark focus:bg-gold focus:text-navy-dark ${pathname === link.to.split(/[?#]/)[0] ? 'bg-slate-600 font-semibold text-gold-light' : 'font-medium'}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            <Link
              to={item.to}
              onClick={onClose}
              aria-current={pathname === item.to ? 'page' : undefined}
              className={`block py-4 text-sm ${pathname === item.to ? 'text-[#866019]' : 'text-navy'}`}
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
      <Link
        to="/contact-us"
        onClick={onClose}
        className="mt-4 block rounded-lg bg-gold-light px-5 py-4 text-center text-sm font-semibold text-navy"
      >
        {c.ui.consult}
      </Link>
    </nav>
  );
}

