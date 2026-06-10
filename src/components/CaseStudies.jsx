import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown, HiLightBulb, HiCog6Tooth, HiArrowPath, HiChartBar } from 'react-icons/hi2';
import { caseStudies } from '../data';

const SUBSECTIONS = [
  { key: 'challenge',     label: 'Challenge',    Icon: HiLightBulb,  color: 'text-amber-500' },
  { key: 'approach',      label: 'Approach',     Icon: HiCog6Tooth,  color: 'text-blue-500' },
  { key: 'architecture',  label: 'Architecture', Icon: HiArrowPath,  color: 'text-purple-500' },
  { key: 'results',       label: 'Results',      Icon: HiChartBar,   color: 'text-green-500' },
];

export default function CaseStudies() {
  const [open, setOpen] = useState(0);

  return (
    <section id="case-studies" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-label">Deep Dives</span>
          <h2 className="section-title">Case Studies</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-xl mx-auto">
            Architecture decisions, engineering trade-offs, and measurable outcomes from production AI systems.
          </p>
        </motion.div>

        <div className="space-y-4">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card overflow-hidden"
            >
              {/* Accordion trigger */}
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-heading font-bold text-blue-600 text-sm">0{cs.id}</span>
                  </div>
                  <div className="text-left">
                    <h3 className="font-heading font-semibold text-slate-900 dark:text-white text-base leading-snug">
                      {cs.title}
                    </h3>
                    <p className="text-blue-600 text-sm font-medium mt-0.5">{cs.subtitle}</p>
                  </div>
                </div>
                <HiChevronDown
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 ml-4 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Accordion content */}
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-slate-100 dark:border-slate-700/50 pt-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Challenge */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <HiLightBulb className="w-4 h-4 text-amber-500" />
                            <h4 className="font-semibold text-sm text-slate-900 dark:text-white uppercase tracking-wide">Challenge</h4>
                          </div>
                          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            {cs.challenge}
                          </p>
                        </div>

                        {/* Approach */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <HiCog6Tooth className="w-4 h-4 text-blue-500" />
                            <h4 className="font-semibold text-sm text-slate-900 dark:text-white uppercase tracking-wide">Approach</h4>
                          </div>
                          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            {cs.approach}
                          </p>
                        </div>

                        {/* Architecture */}
                        <div className="space-y-3 md:col-span-2">
                          <div className="flex items-center gap-2">
                            <HiArrowPath className="w-4 h-4 text-purple-500" />
                            <h4 className="font-semibold text-sm text-slate-900 dark:text-white uppercase tracking-wide">System Architecture</h4>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {cs.architecture.map((a, j) => (
                              <motion.div
                                key={a.step}
                                initial={{ opacity: 0, x: -14 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: j * 0.1, duration: 0.35, ease: 'easeOut' }}
                                className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-blue-600/10 dark:border-blue-500/15 hover:border-blue-600/30 transition-colors"
                              >
                                <span className="font-heading font-bold text-blue-600 text-xs flex-shrink-0 mt-0.5 w-5 text-center">
                                  {a.step}
                                </span>
                                <div>
                                  <p className="font-semibold text-slate-900 dark:text-white text-xs">{a.label}</p>
                                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-snug mt-0.5">
                                    {a.detail}
                                  </p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Results */}
                        <div className="space-y-3 md:col-span-2">
                          <div className="flex items-center gap-2">
                            <HiChartBar className="w-4 h-4 text-green-500" />
                            <h4 className="font-semibold text-sm text-slate-900 dark:text-white uppercase tracking-wide">Results & Impact</h4>
                          </div>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {cs.results.map((r, j) => (
                              <li
                                key={j}
                                className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300"
                              >
                                <span className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center text-xs flex-shrink-0 mt-0.5 font-bold">
                                  ✓
                                </span>
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech stack */}
                        <div className="md:col-span-2">
                          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-700/50">
                            {cs.tech.map(t => (
                              <span
                                key={t}
                                className="px-2.5 py-1 bg-blue-600/8 dark:bg-blue-600/10 text-blue-700 dark:text-blue-400 text-xs rounded-lg font-medium border border-blue-600/15"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
