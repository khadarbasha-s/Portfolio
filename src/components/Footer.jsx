import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import { personal } from '../data';

const NAV_LINKS = [
  { href: '#about',          label: 'About' },
  { href: '#skills',         label: 'Skills' },
  { href: '#experience',     label: 'Experience' },
  { href: '#projects',       label: 'Projects' },
  { href: '#case-studies',   label: 'Case Studies' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact',        label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-heading font-bold text-sm">
                KB
              </div>
              <span className="font-heading font-semibold text-white">Khadar Basha</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              AI Product Developer building production-grade LLM systems and autonomous AI agents.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Quick Links
            </p>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2">
              {NAV_LINKS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-slate-400 hover:text-blue-400 text-sm transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Connect
            </p>
            <div className="flex gap-3">
              {[
                { href: personal.linkedin, Icon: FiLinkedin, label: 'LinkedIn' },
                { href: personal.github,   Icon: FiGithub,   label: 'GitHub' },
                { href: `mailto:${personal.email}`, Icon: FiMail, label: 'Email' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 text-slate-400 flex items-center justify-center hover:text-blue-400 hover:border-blue-400/40 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-slate-500 text-sm mt-4">{personal.location}</p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm">
            © 2026 Khadar Basha. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-slate-600">
            <span>Built with React · Tailwind CSS · Framer Motion</span>
            <span className="text-slate-700">·</span>
            <span>Last updated Jun 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
