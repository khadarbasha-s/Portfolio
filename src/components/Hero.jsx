import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiLinkedin, FiGithub, FiMail, FiDownload, FiArrowRight, FiPhone } from 'react-icons/fi';
import { personal } from '../data';

const ROLES = ['LLM & RAG Specialist', 'AI Agent Engineer', 'Full Stack Developer', 'AI Product Developer'];

function useTypewriter(words, typeSpeed = 80, deleteSpeed = 38, pause = 2400) {
  const [idx, setIdx]     = useState(0);
  const [chars, setChars] = useState(words[0].length);
  const [phase, setPhase] = useState('pausing');

  useEffect(() => {
    const word = words[idx];
    let t;
    if (phase === 'pausing') {
      t = setTimeout(() => setPhase('deleting'), pause);
    } else if (phase === 'deleting') {
      if (chars > 0) {
        t = setTimeout(() => setChars(c => c - 1), deleteSpeed);
      } else {
        setIdx(i => (i + 1) % words.length);
        setPhase('typing');
      }
    } else {
      if (chars < word.length) {
        t = setTimeout(() => setChars(c => c + 1), typeSpeed);
      } else {
        t = setTimeout(() => setPhase('pausing'), 300);
      }
    }
    return () => clearTimeout(t);
  }, [chars, idx, pause, phase, typeSpeed, deleteSpeed, words]);

  return words[idx].slice(0, chars);
}

/* Parse "35%" → { num: 35, suffix: '%' }, "10K+" → { num: 10, suffix: 'K+' } */
function parseStat(str) {
  if (str.endsWith('K+')) return { num: parseInt(str, 10), suffix: 'K+' };
  if (str.endsWith('%'))  return { num: parseInt(str, 10), suffix: '%'  };
  if (str.endsWith('+'))  return { num: parseInt(str, 10), suffix: '+'  };
  return { num: parseInt(str, 10), suffix: '' };
}

function StatCounter({ value, label }) {
  const { num, suffix } = parseStat(value);
  const ref  = useRef(null);
  const [count, setCount] = useState(0);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const isHighlight = label === 'Hallucination Reduction';

  useEffect(() => {
    if (!inView) return;
    const duration = 1300;
    const startTime = performance.now();
    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * num));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(num);
    };
    requestAnimationFrame(tick);
  }, [inView, num]);

  return (
    <div
      ref={ref}
      className={`bg-white/[0.04] border rounded-xl p-3.5 text-center transition-colors hover:border-blue-600/40 ${
        isHighlight ? 'border-amber-500/25' : 'border-white/[0.08]'
      }`}
    >
      <p className={`text-2xl font-bold font-heading ${isHighlight ? 'text-amber-400' : 'text-white'}`}>
        {count}{suffix}
      </p>
      <p className="text-xs text-slate-500 mt-0.5 leading-snug">{label}</p>
    </div>
  );
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

export default function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)',
          backgroundSize: '3.5rem 3.5rem',
        }}
      />

      {/* Ambient glows — slowly drifting */}
      <motion.div
        animate={{ x: [0, 55, -25, 0], y: [0, -35, 30, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -45, 35, 0], y: [0, 28, -22, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Content ── */}
          <div className="order-2 lg:order-1">

            {/* Status badge */}
            <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-7">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse-slow" />
              Open to new opportunities
            </motion.div>

            {/* Name */}
            <motion.h1 {...fadeUp(0.2)} className="font-heading text-5xl sm:text-6xl font-bold text-white leading-tight mb-3">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Khadar Basha
              </span>
            </motion.h1>

            {/* Title row with typewriter */}
            <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-5 min-h-[2rem]">
              <span className="font-heading text-xl font-semibold text-slate-200">AI Product Developer</span>
              <span className="text-slate-600">·</span>
              <span className="font-heading text-xl font-medium text-cyan-400">
                {role}
                <span className="inline-block w-0.5 h-5 bg-cyan-400 ml-0.5 align-middle animate-pulse" />
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p {...fadeUp(0.35)} className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
              {personal.tagline}
            </motion.p>

            {/* Stats with count-up */}
            <motion.div
              {...fadeUp(0.4)}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-9"
            >
              {personal.stats.map((s, i) => (
                <StatCounter key={i} value={s.value} label={s.label} />
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...fadeUp(0.45)} className="flex flex-wrap gap-3 mb-8">
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5"
              >
                <FiDownload className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.06] hover:bg-white/[0.10] border border-white/10 text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                View Projects
                <FiArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div {...fadeUp(0.5)} className="flex items-center gap-2">
              {[
                { href: personal.linkedin, Icon: FiLinkedin, label: 'LinkedIn', color: 'hover:text-blue-400 hover:border-blue-400/40' },
                { href: personal.github,   Icon: FiGithub,   label: 'GitHub',   color: 'hover:text-white hover:border-white/40' },
                { href: `mailto:${personal.email}`, Icon: FiMail, label: 'Email', color: 'hover:text-cyan-400 hover:border-cyan-400/40' },
                { href: `tel:${personal.phone}`, Icon: FiPhone, label: 'Phone',  color: 'hover:text-green-400 hover:border-green-400/40' },
              ].map(({ href, Icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-400 transition-all duration-200 ${color}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="order-1 lg:order-2 flex flex-col items-center gap-4"
          >
            <div className="relative">
              {/* Gradient border ring */}
              <div className="absolute -inset-[3px] rounded-3xl bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-600 opacity-70 blur-[1px]" />
              <img
                src={`${import.meta.env.BASE_URL}khadar_image.jpg`}
                alt="Khadar Basha"
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl object-cover object-top"
              />
            </div>

            {/* Chips — clean row below photo, no overlap */}
            <div className="flex gap-3 flex-wrap justify-center">
              <span className="bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-lg shadow-blue-600/30 animate-float">
                AI Product Developer
              </span>
              <span className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-lg shadow-cyan-500/30 animate-float" style={{ animationDelay: '3s' }}>
                LLM & RAG Expert
              </span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/10 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2.5 bg-white/30 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
