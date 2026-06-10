import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi2';
import { testimonials } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-label">What People Say</span>
          <h2 className="section-title">Testimonials</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-lg mx-auto">
            What colleagues say about working with me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card p-7 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <HiStar key={j} className="w-4 h-4 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 italic">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700/50">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold font-heading flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">{t.name}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
