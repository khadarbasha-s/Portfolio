import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiCpuChip, HiCommandLine, HiShieldCheck,
  HiCodeBracket, HiCircleStack, HiCloud, HiArrowPath,
} from 'react-icons/hi2';
import {
  SiPython, SiJavascript, SiTypescript,
  SiPostgresql, SiFastapi, SiDjango, SiNodedotjs,
  SiExpress, SiOpenai, SiDocker, SiGit, SiSqlite,
} from 'react-icons/si';
import { skills } from '../data';

const CATEGORY_ICONS = [HiCpuChip, HiCommandLine, HiShieldCheck, HiCodeBracket, HiCircleStack, HiCloud];

const LEVEL = {
  Advanced:     'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800',
  Experienced:  'bg-blue-100  text-blue-700  dark:bg-blue-900/30  dark:text-blue-400  border border-blue-200  dark:border-blue-800',
  Intermediate: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800',
};

const ICON_MAP = {
  'Python':                    { Icon: SiPython,     color: '#3776AB' },
  'JavaScript':                { Icon: SiJavascript, color: '#F7DF1E' },
  'TypeScript':                { Icon: SiTypescript, color: '#3178C6' },
  'Java':                      { Icon: HiCodeBracket, color: '#ED8B00' },
  'PostgreSQL':                { Icon: SiPostgresql, color: '#336791' },
  'SQLite':                    { Icon: SiSqlite,     color: '#003B57' },
  'Drizzle ORM':               { Icon: HiCircleStack,color: '#C5F74F' },
  'Pinecone':                  { Icon: HiCircleStack,color: '#30D5C8' },
  'ChromaDB / FAISS':          { Icon: HiCircleStack,color: '#6366F1' },
  'FastAPI':                   { Icon: SiFastapi,    color: '#009688' },
  'Django REST Framework':     { Icon: SiDjango,     color: '#0C4B33' },
  'Node.js':                   { Icon: SiNodedotjs,  color: '#339933' },
  'Express.js':                { Icon: SiExpress,    color: '#888888' },
  'REST API Design':           { Icon: HiArrowPath,  color: '#2563EB' },
  'WebSockets':                { Icon: HiArrowPath,  color: '#8B5CF6' },
  'Microservice Architecture': { Icon: HiCodeBracket,color: '#6366F1' },
  'LangChain':                 { Icon: HiCpuChip,    color: '#1C3C3C' },
  'LangGraph':                 { Icon: HiCpuChip,    color: '#2563EB' },
  'CrewAI':                    { Icon: HiCpuChip,    color: '#FF4B4B' },
  'AutoGen':                   { Icon: HiCpuChip,    color: '#0284C7' },
  'Multi-Agent Workflows':     { Icon: HiCpuChip,    color: '#8B5CF6' },
  'Tool & Function Calling':   { Icon: HiCodeBracket,color: '#06B6D4' },
  'Prompt Engineering':        { Icon: HiCommandLine,color: '#F59E0B' },
  'Structured Outputs':        { Icon: HiCodeBracket,color: '#10B981' },
  'OpenAI GPT-4o':             { Icon: SiOpenai,     color: '#412991' },
  'Anthropic Claude':          { Icon: HiCpuChip,    color: '#D97706' },
  'Gemini':                    { Icon: HiCpuChip,    color: '#4285F4' },
  'Llama':                     { Icon: HiCpuChip,    color: '#0467DF' },
  'Semantic Chunking':         { Icon: HiCodeBracket,color: '#8B5CF6' },
  'Hybrid Search':             { Icon: HiCodeBracket,color: '#EC4899' },
  'Embeddings & Re-ranking':   { Icon: HiCodeBracket,color: '#06B6D4' },
  'Streaming':                 { Icon: HiArrowPath,  color: '#10B981' },
  'RAGAS':                     { Icon: HiShieldCheck,color: '#EF4444' },
  'LangSmith':                 { Icon: HiShieldCheck,color: '#1C3C3C' },
  'Langfuse':                  { Icon: HiShieldCheck,color: '#7C3AED' },
  'Guardrails':                { Icon: HiShieldCheck,color: '#10B981' },
  'PII Handling':              { Icon: HiShieldCheck,color: '#F59E0B' },
  'Agent Trace Debugging':     { Icon: HiCodeBracket,color: '#3B82F6' },
  'Hallucination Reduction':   { Icon: HiShieldCheck,color: '#EF4444' },
  'Failure-Mode Analysis':     { Icon: HiShieldCheck,color: '#8B5CF6' },
  'AWS (EC2, RDS, S3, Lambda)':{ Icon: HiCloud,      color: '#FF9900' },
  'Docker':                    { Icon: SiDocker,     color: '#2496ED' },
  'GitHub Actions / CI/CD':    { Icon: HiArrowPath,  color: '#2088FF' },
  'Git':                       { Icon: SiGit,        color: '#F05032' },
  'Model Deployment':          { Icon: HiCloud,      color: '#6366F1' },
  'Observability':             { Icon: HiShieldCheck,color: '#F59E0B' },
  'Agile / Scrum':             { Icon: HiArrowPath,  color: '#0052CC' },
  'Linux':                     { Icon: HiCodeBracket,color: '#FCC624' },
};

const DEFAULT_ICON = { Icon: HiCodeBracket, color: '#2563EB' };

/* Stagger variants — parent staggers children, children fade+slide in */
const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
  exit:   { opacity: 0, y: -10, transition: { duration: 0.25 } },
};

const cardVariants = {
  hidden:   { opacity: 0, y: 18, scale: 0.93 },
  visible:  { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.38, ease: 'easeOut' } },
};

export default function Skills() {
  const [active, setActive] = useState(0);

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-label">Technical Skills</span>
          <h2 className="section-title">What I Work With</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-xl mx-auto">
            6 skill domains spanning the full AI product stack — from LLM orchestration to production deployment.
          </p>
        </motion.div>

        {/* Tab bar — single row, horizontally scrollable */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-10"
        >
          <div className="flex overflow-x-auto lg:overflow-visible lg:flex-wrap lg:justify-center gap-2 pb-2 scrollbar-hide snap-x lg:snap-none">
            {skills.map((cat, i) => {
              const Icon = CATEGORY_ICONS[i];
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex-shrink-0 snap-start ${
                    active === i
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'bg-white dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-600/40 hover:text-blue-600'
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  {cat.category}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Category label */}
        <motion.div
          key={`label-${active}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-7"
        >
          <h3 className="font-heading text-xl font-semibold text-slate-900 dark:text-white">
            {skills[active].category}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            {skills[active].items.length} skills
          </p>
        </motion.div>

        {/* Skills grid — staggered entrance */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-4xl mx-auto"
          >
            {skills[active].items.map((skill) => {
              const { Icon, color } = ICON_MAP[skill.name] ?? DEFAULT_ICON;
              return (
                <motion.div
                  key={skill.name}
                  variants={cardVariants}
                  className="card p-4 hover:border-blue-600/40 hover:shadow-sm transition-all duration-200 cursor-default"
                >
                  <div className="flex items-start gap-3 mb-2.5">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: color + '20' }}
                    >
                      <Icon className="w-4 h-4" style={{ color }} />
                    </div>
                    <p className="font-medium text-slate-900 dark:text-white text-sm leading-snug pt-1">
                      {skill.name}
                    </p>
                  </div>
                  <span className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium ${LEVEL[skill.level]}`}>
                    {skill.level}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Level legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-5 mt-10"
        >
          {Object.entries(LEVEL).map(([label, cls]) => (
            <div key={label} className="flex items-center gap-1.5">
              <span className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium ${cls}`}>{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
