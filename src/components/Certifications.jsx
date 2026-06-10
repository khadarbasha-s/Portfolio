import { motion } from 'framer-motion';
import { HiBadgeCheck } from 'react-icons/hi';
import { FiExternalLink } from 'react-icons/fi';
import { certifications } from '../data';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-label">Credentials</span>
          <h2 className="section-title">Certifications</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card p-6 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Issuer avatar */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 font-heading font-bold text-white text-sm shadow-md"
                style={{ backgroundColor: cert.color }}
              >
                {cert.abbr}
              </div>

              <h3 className="font-semibold text-slate-900 dark:text-white text-sm leading-snug mb-2 flex-1">
                {cert.name}
              </h3>
              <p className="text-blue-600 text-xs font-medium mb-1">{cert.issuer}</p>
              <p className="text-slate-400 text-xs">{cert.date}</p>

              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1 text-xs text-green-600 dark:text-green-400 font-medium">
                  <HiBadgeCheck className="w-3.5 h-3.5" />
                  Verified
                </span>

                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    <FiExternalLink className="w-3 h-3" />
                    View
                  </a>
                ) : (
                  <span className="text-xs text-slate-300 dark:text-slate-600 italic">
                    Link soon
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
