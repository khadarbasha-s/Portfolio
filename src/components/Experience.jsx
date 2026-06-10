import { motion } from 'framer-motion';
import { HiMapPin, HiCalendar, HiCheckCircle } from 'react-icons/hi2';
import { experience } from '../data';

export default function Experience() {
  const job = experience[0];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-label">Where I've Worked</span>
          <h2 className="section-title">Professional Experience</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative pl-0 md:pl-8"
          >
            {/* Timeline line */}
            <div className="hidden md:block absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-blue-600 via-blue-600/40 to-transparent" />
            {/* Timeline dot */}
            <div className="hidden md:flex absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-blue-600 ring-4 ring-blue-600/20" />

            {/* Card */}
            <div className="card p-8 hover:border-blue-600/30 transition-colors">

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6 pb-6 border-b border-slate-100 dark:border-slate-700/50">
                <div className="flex items-start gap-4">
                  {/* Company logo badge */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 border border-blue-600/25 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className="font-heading font-bold text-blue-600 text-sm">RT</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-1">
                      {job.role}
                    </h3>
                    <p className="text-blue-600 font-semibold text-base">{job.company}</p>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <span className="inline-flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm">
                        <HiMapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm">
                        <HiCalendar className="w-4 h-4" />
                        {job.period}
                      </span>
                    </div>
                  </div>
                </div>
                <span className="shrink-0 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold border border-green-200 dark:border-green-800">
                  {job.type}
                </span>
              </div>

              {/* Bullets */}
              <ul className="space-y-4 mb-7">
                {job.bullets.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <HiCheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">{b}</p>
                  </motion.li>
                ))}
              </ul>

              {/* Tech tags */}
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2.5">
                  Technologies Used
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 text-xs rounded-lg font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
