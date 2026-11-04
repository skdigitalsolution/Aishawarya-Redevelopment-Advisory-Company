import { useEffect, useId, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
/** @param {{item: object, open: boolean, onOpen: Function, onClose: Function}} props Desktop disclosure navigation. */
export default function NavDropdown({ item, open, onOpen, onClose }) {
  const pinned = useRef(false);
  useEffect(() => {
    if (!open) pinned.current = false;
  }, [open]);
  const id = useId();
  const group = useRef(null);
  const button = useRef(null);
  const location = useLocation();
  const reduced = useReducedMotion();
  const active = item.items.some(
    (link) =>
      link.to.split(/[?#]/)[0] === location.pathname && (!link.to.includes('#') || link.to.split('#')[1] === location.hash.slice(1)),
  );
  return (
    <div
      ref={group}
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={() => {
        if (!group.current?.contains(document.activeElement)) onClose();
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) onClose();
      }}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          onClose();
          button.current?.focus();
        }
      }}
    >
      <button
        ref={button}
        id={`${id}-trigger`}
        type="button"
        aria-expanded={open}
        aria-controls={`${id}-links`}
        onClick={() => {
          if (open && pinned.current) {
            pinned.current = false;
            onClose();
          } else {
            pinned.current = true;
            onOpen();
          }
        }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            onOpen();
            requestAnimationFrame(() => group.current?.querySelector('a')?.focus());
          }
        }}
        className={`nav-link flex min-h-12 items-center gap-1 rounded-lg px-2 text-[11px] font-medium transition-colors ${open ? 'bg-gold-light text-navy-dark' : active ? 'text-gold-light hover:bg-gold-light hover:text-navy-dark' : 'text-white/85 hover:bg-gold-light hover:text-navy-dark'}`}
      >
        {item.label}
        <ChevronDown className={`size-3 transition ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id={`${id}-links`}
            aria-labelledby={`${id}-trigger`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: reduced ? 0 : 0.15 }}
            className="absolute top-full left-0 z-50 w-64 rounded-xl border border-gold bg-gold-light p-2 text-navy-dark shadow-xl"
          >
            {item.items.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={onClose}
                aria-current={location.pathname === link.to ? 'page' : undefined}
                className={`block rounded-lg px-4 py-3 text-xs leading-relaxed text-navy-dark transition-colors hover:bg-gold focus:bg-gold ${location.pathname === link.to ? 'bg-gold/40 font-semibold' : 'font-medium'}`}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
