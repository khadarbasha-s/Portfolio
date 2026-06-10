import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import {
  SiPython, SiOpenai, SiDocker, SiPostgresql,
  SiTypescript, SiNodedotjs, SiExpress, SiDjango,
} from 'react-icons/si';
import { projects } from '../data';

/* Decorative tech icons shown at low opacity in each card's gradient header */
const HEADER_ICONS = {
  1: [SiPython, SiOpenai, SiPostgresql, SiDocker],
  2: [SiTypescript, SiNodedotjs, SiExpress, SiPostgresql],
  3: [SiPython, SiDjango, SiDocker],
};

/* 3-D tilt wrapper using Framer Motion values — no conflict with whileInView */
function TiltCard({ children, className }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-7, 7]);

  const rotateXSpring = useSpring(rotateX, { stiffness: 280, damping: 28 });
  const rotateYSpring = useSpring(rotateY, { stiffness: 280, damping: 28 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width  - 0.5);
    y.set((e.clientY - rect.top)  / rect.height - 0.5);
  };

  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      className={className}
      style={{ rotateX: rotateXSpring, rotateY: rotateYSpring, transformPerspective: 900 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-label">Featured Work</span>
          <h2 className="section-title">Projects</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-xl mx-auto">
            Three production-grade AI products built and shipped — each with measurable business impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <TiltCard className="card flex flex-col overflow-hidden hover:shadow-xl hover:shadow-slate-900/10 dark:hover:shadow-slate-900/40 h-full transition-shadow duration-300">

                {/* Gradient header with decorative tech icons */}
                <div className={`bg-gradient-to-br ${p.gradient} p-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10" />

                  {/* Decorative floating tech icons */}
                  <div className="absolute top-3 right-3 flex gap-2.5">
                    {(HEADER_ICONS[p.id] ?? []).map((Icon, j) => (
                      <Icon
                        key={j}
                        className="w-6 h-6 text-white opacity-[0.18]"
                        style={{ transform: `rotate(${j % 2 === 0 ? '-8deg' : '6deg'})` }}
                      />
                    ))}
                  </div>

                  <div className="relative">
                    <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${p.badgeColor} mb-3`}>
                      {p.badge}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-white leading-snug mb-1">
                      {p.name}
                    </h3>
                    <p className="text-white/70 text-sm font-medium">{p.subtitle}</p>
                    <p className="text-white/50 text-xs mt-1">{p.period}</p>
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-5">

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tech.slice(0, 5).map(t => (
                      <span
                        key={t}
                        className="px-2 py-0.5 bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 text-xs rounded-md font-medium"
                      >
                        {t}
                      </span>
                    ))}
                    {p.tech.length > 5 && (
                      <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-700/60 text-slate-500 dark:text-slate-400 text-xs rounded-md">
                        +{p.tech.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-5 flex-1">
                    {p.bullets.map((b, j) => (
                      <li key={j} className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex gap-2">
                        <span className="text-blue-600 flex-shrink-0 mt-1">→</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-5 p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-100 dark:border-slate-700/50">
                    {p.metrics.map((m, j) => (
                      <div key={j} className="text-center">
                        <p className="font-heading font-bold text-blue-600 text-base">{m.value}</p>
                        <p className="text-slate-500 dark:text-slate-400 text-xs leading-snug mt-0.5">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex gap-2">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:shadow-md hover:shadow-blue-600/25"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="inline-flex items-center justify-center px-3 py-2.5 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-600/40 hover:text-blue-600 rounded-xl transition-all duration-200"
                    >
                      <FiGithub className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
