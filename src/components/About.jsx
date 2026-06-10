import { motion } from 'framer-motion';
import { HiBriefcase, HiAcademicCap, HiStar, HiCpuChip, HiWrenchScrewdriver, HiChartBar } from 'react-icons/hi2';
import { about } from '../data';

const HIGHLIGHTS = [
  { Icon: HiCpuChip,           label: 'AI Systems Builder',  desc: 'Autonomous agents & multi-agent workflows' },
  { Icon: HiWrenchScrewdriver, label: 'Production-Grade',    desc: 'REST APIs, Docker, AWS, CI/CD pipelines' },
  { Icon: HiChartBar,          label: 'Results-Oriented',    desc: '35% hallucination reduction in production' },
];

const fadeIn = (dir = 0, delay = 0) => ({
  initial: { opacity: 0, x: dir, y: dir === 0 ? 24 : 0 },
  whileInView: { opacity: 1, x: 0, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div {...fadeIn(0, 0)} className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Building AI Systems That Matter</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left: Highlights + Bio + Core tech */}
          <motion.div {...fadeIn(-30, 0.1)}>

            {/* Icon highlights */}
            <div className="grid grid-cols-3 gap-3 mb-7">
              {HIGHLIGHTS.map(({ Icon, label, desc }) => (
                <div
                  key={label}
                  className="card p-4 text-center hover:border-blue-600/40 hover:shadow-sm transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center mx-auto mb-2">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="font-semibold text-slate-900 dark:text-white text-xs leading-snug mb-1">{label}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-snug hidden sm:block">{desc}</p>
                </div>
              ))}
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-5">
              {about.bio}
            </p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
              I specialize in the full spectrum of AI product development — from prompt engineering and RAG
              architecture to production deployment on AWS, evaluation frameworks with RAGAS and LangSmith,
              and Responsible AI practices that hold up under adversarial conditions.
            </p>

            {/* Core tech */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
                Core Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {about.coreTech.map(t => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-blue-600/8 dark:bg-blue-600/10 text-blue-700 dark:text-blue-400 text-sm rounded-full font-medium border border-blue-600/15"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Cards */}
          <motion.div {...fadeIn(30, 0.2)} className="flex flex-col gap-4">

            {/* Experience card */}
            <div className="card p-6 hover:border-blue-600/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                  <HiBriefcase className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                    Work Experience
                  </p>
                  <p className="font-heading text-3xl font-bold text-blue-600">{about.experience}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">{about.role}</p>
                </div>
              </div>
            </div>

            {/* Education card */}
            <div className="card p-6 hover:border-cyan-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                  <HiAcademicCap className="w-6 h-6 text-cyan-500" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                    Education
                  </p>
                  <p className="font-semibold text-slate-900 dark:text-white">{about.education}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">{about.institutionShort}</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold text-sm mt-1">
                    CGPA: {about.cgpa}
                  </p>
                </div>
              </div>
            </div>

            {/* Achievement gradient card */}
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-6 text-white shadow-lg shadow-blue-600/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                  <HiStar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-xs uppercase tracking-wider mb-1">Academic Achievement</p>
                  <p className="font-heading text-4xl font-bold">{about.cgpa}</p>
                  <p className="text-white/70 text-sm mt-0.5">
                    B.Tech CSE · Graduated {about.graduationYear}
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
