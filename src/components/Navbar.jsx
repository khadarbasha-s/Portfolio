import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { HiSun, HiMoon, HiBars3, HiXMark } from 'react-icons/hi2';

const NAV_LINKS = [
  { id: 'about',         label: 'About' },
  { id: 'skills',        label: 'Skills' },
  { id: 'experience',    label: 'Experience' },
  { id: 'projects',      label: 'Projects' },
  { id: 'case-studies',  label: 'Case Studies' },
  { id: 'certifications',label: 'Certifications' },
  { id: 'contact',       label: 'Contact' },
];

export default function Navbar() {
  const { isDark, toggle } = useTheme();
  const [scrolled, setScrolled]   = useState(false);
  const [active, setActive]       = useState('');
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const current = NAV_LINKS.find(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const { top, bottom } = el.getBoundingClientRect();
        return top <= 120 && bottom >= 120;
      });
      if (current) setActive(current.id);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-lg shadow-lg shadow-slate-900/5 dark:shadow-slate-900/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-heading font-bold text-sm shadow-md shadow-blue-600/30 group-hover:shadow-blue-600/50 transition-shadow">
              KB
            </div>
            <span className="font-heading font-semibold text-slate-900 dark:text-white hidden sm:block">
              Khadar Basha
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === id
                    ? 'text-blue-600 bg-blue-600/10'
                    : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 hover:bg-blue-600/5'
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isDark
                ? <HiSun  className="w-5 h-5" />
                : <HiMoon className="w-5 h-5" />
              }
            </button>
            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {menuOpen
                ? <HiXMark className="w-5 h-5" />
                : <HiBars3 className="w-5 h-5" />
              }
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-3 border-t border-slate-200 dark:border-slate-800">
            {NAV_LINKS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-2.5 text-sm font-medium rounded-lg mx-2 transition-colors ${
                  active === id
                    ? 'text-blue-600 bg-blue-600/10'
                    : 'text-slate-600 dark:text-slate-300 hover:text-blue-600'
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
