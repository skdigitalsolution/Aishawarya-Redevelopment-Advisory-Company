import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { navigation } from '../../data/navigation';
import { content as c } from '../../data/content';
/** @param {{onClose: Function}} props Expandable, touch-friendly mobile navigation. */
export default function MobileMenu({ onClose }) {
  const [expanded, setExpanded] = useState(null);
  const { pathname } = useLocation();
  return (
    <nav
      id="mobile-navigation"
      aria-label="Mobile navigation"
      className="max-h-[calc(100dvh-6rem)] overflow-y-auto border-t border-white/10 bg-navy-dark px-5 pt-3 pb-6 xl:hidden"
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
                className={`flex min-h-12 w-full items-center justify-between gap-3 rounded-lg px-3 text-left text-sm transition-colors ${expanded === i ? 'bg-gold-light font-semibold text-navy-dark' : 'text-white hover:bg-gold-light hover:text-navy-dark'}`}
              >
                {item.label}
                <ChevronDown className={`size-4 ${expanded === i ? 'rotate-180 text-navy-dark' : 'text-current'}`} />
              </button>
              {expanded === i && (
                <div id={`mobile-group-${i}`} className="mb-3 rounded-b-lg border border-gold bg-gold-light p-2">
                  {item.items.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={onClose}
                      className={`block rounded-lg px-3 py-3 text-sm text-navy-dark transition-colors hover:bg-gold focus:bg-gold ${pathname === link.to.split(/[?#]/)[0] ? 'bg-gold/40 font-semibold' : 'font-medium'}`}
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
              className={`block py-4 text-sm ${pathname === item.to ? 'text-gold-light' : 'text-white'}`}
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

