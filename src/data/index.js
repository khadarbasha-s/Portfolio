export const personal = {
  name: 'Khadar Basha',
  title: 'AI Product Developer',
  subtitle: 'LLM & RAG Specialist',
  tagline:
    'Building production-grade AI systems — autonomous agents, RAG pipelines, and LLM-powered products that deliver measurable business impact.',
  email: 'khadar7938@gmail.com',
  phone: '+91-7093365129',
  linkedin: 'https://www.linkedin.com/in/khadarbasha-s/',
  github: 'https://github.com/khadarbasha-s',
  // Place Khadar_CV.pdf in /public and update this path
  resume: '/Khadar_CV.pdf',
  location: 'Bengaluru, India',
  stats: [
    { value: '2+',   label: 'Years Experience' },
    { value: '3+',   label: 'Products Shipped' },
    { value: '35%',  label: 'Hallucination Reduction' },
    { value: '10K+', label: 'Documents Processed' },
  ],
  availability: [
    'Full-Time AI Engineer Roles',
    'Full Stack Development',
    'AI Product Consulting',
    'Freelance Projects',
  ],
};

export const about = {
  bio: 'AI Product Developer with hands-on experience designing, building, and evaluating autonomous AI agents and production-grade LLM systems. Strong in backend engineering, AI automation, and systems integration with modular service separation. Proficient in Python, JavaScript/TypeScript, and SQL (PostgreSQL, SQLite). Applied Responsible AI practices including PII handling, guardrails, and safety filters in live, non-mocked environments.',
  experience: '2+ Years',
  role: 'AI Product Developer',
  education: 'B.Tech in Computer Science & Engineering',
  institution: 'Bharath Institute of Higher Education and Research',
  institutionShort: 'Bharath Institute, Chennai',
  cgpa: '8.7 / 10',
  graduationYear: '2024',
  coreTech: [
    'Python', 'LangChain', 'LangGraph', 'OpenAI', 'FastAPI',
    'Django REST', 'PostgreSQL', 'TypeScript', 'Node.js', 'AWS', 'Docker', 'React',
  ],
};

export const skills = [
  {
    category: 'AI Agents & Automation',
    items: [
      { name: 'LangChain',                level: 'Advanced' },
      { name: 'LangGraph',                level: 'Advanced' },
      { name: 'CrewAI',                   level: 'Experienced' },
      { name: 'AutoGen',                  level: 'Experienced' },
      { name: 'Multi-Agent Workflows',    level: 'Advanced' },
      { name: 'Tool & Function Calling',  level: 'Advanced' },
      { name: 'Prompt Engineering',       level: 'Advanced' },
      { name: 'Structured Outputs',       level: 'Advanced' },
    ],
  },
  {
    category: 'LLMs & RAG',
    items: [
      { name: 'OpenAI GPT-4o',          level: 'Advanced' },
      { name: 'Anthropic Claude',        level: 'Experienced' },
      { name: 'Gemini',                  level: 'Experienced' },
      { name: 'Llama',                   level: 'Experienced' },
      { name: 'Semantic Chunking',       level: 'Advanced' },
      { name: 'Hybrid Search',           level: 'Advanced' },
      { name: 'Embeddings & Re-ranking', level: 'Advanced' },
      { name: 'Streaming',               level: 'Experienced' },
    ],
  },
  {
    category: 'Evaluation, Safety & Responsible AI',
    items: [
      { name: 'RAGAS',                  level: 'Experienced' },
      { name: 'LangSmith',              level: 'Experienced' },
      { name: 'Langfuse',               level: 'Experienced' },
      { name: 'Guardrails',             level: 'Advanced' },
      { name: 'PII Handling',           level: 'Experienced' },
      { name: 'Agent Trace Debugging',  level: 'Advanced' },
      { name: 'Hallucination Reduction',level: 'Advanced' },
      { name: 'Failure-Mode Analysis',  level: 'Advanced' },
    ],
  },
  {
    category: 'Backend & Systems',
    items: [
      { name: 'Python',                   level: 'Advanced' },
      { name: 'FastAPI',                  level: 'Experienced' },
      { name: 'Django REST Framework',    level: 'Experienced' },
      { name: 'Node.js',                  level: 'Experienced' },
      { name: 'Express.js',               level: 'Experienced' },
      { name: 'REST API Design',          level: 'Advanced' },
      { name: 'WebSockets',               level: 'Intermediate' },
      { name: 'Microservice Architecture',level: 'Experienced' },
    ],
  },
  {
    category: 'Languages & Databases',
    items: [
      { name: 'JavaScript',       level: 'Experienced' },
      { name: 'TypeScript',       level: 'Experienced' },
      { name: 'Java',             level: 'Intermediate' },
      { name: 'PostgreSQL',       level: 'Experienced' },
      { name: 'SQLite',           level: 'Experienced' },
      { name: 'Drizzle ORM',      level: 'Experienced' },
      { name: 'Pinecone',         level: 'Experienced' },
      { name: 'ChromaDB / FAISS', level: 'Experienced' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { name: 'AWS (EC2, RDS, S3, Lambda)', level: 'Experienced' },
      { name: 'Docker',                      level: 'Experienced' },
      { name: 'GitHub Actions / CI/CD',      level: 'Experienced' },
      { name: 'Git',                         level: 'Advanced' },
      { name: 'Model Deployment',            level: 'Experienced' },
      { name: 'Observability',               level: 'Experienced' },
      { name: 'Agile / Scrum',               level: 'Experienced' },
      { name: 'Linux',                       level: 'Intermediate' },
    ],
  },
];

export const experience = [
  {
    role: 'AI Product Developer',
    company: 'Rooman Technologies',
    location: 'Bengaluru, India',
    period: 'Jul 2024 – Present',
    type: 'Full-time',
    bullets: [
      'Designed autonomous multi-agent workflows (validator, summarizer, scorer) using LangChain and CrewAI for multi-turn interactions and tool orchestration in live, non-mocked environments.',
      'Built production-grade software with modular separation: distinct services for data parsing, logic processing, evaluation, and reporting with clean REST contracts.',
      'Authored evaluation rubrics with objective pass/fail criteria (precision, recall, hallucination rate); debugged agent traces to isolate failure patterns and edge cases, reducing hallucination rate by 35%.',
      'Stress-tested systems against tool misuse, malformed inputs, and adversarial prompts; applied Responsible AI guardrails including PII handling, safety filters, and structured-output enforcement.',
      'Developed REST APIs (FastAPI, Django REST Framework) connecting LLM services to live tools with session tracking and persistent state; built end-to-end pipelines processing 10K+ documents (parsing, chunking, embedding, retrieval, re-ranking).',
      'Owned AWS deployment (EC2, RDS, S3, Lambda) with Docker, CI/CD (GitHub Actions), and LangSmith observability; led an engineering team of 5 across architecture reviews and Agile sprints.',
    ],
    tags: ['Python', 'LangChain', 'CrewAI', 'FastAPI', 'Django REST', 'AWS', 'Docker', 'PostgreSQL', 'LangSmith'],
  },
];

export const projects = [
  {
    id: 1,
    name: 'Multi-Agent Evaluation & RAG Platform',
    subtitle: 'AIMS For All',
    period: 'Jul 2024 – Mar 2025',
    badge: 'AI Platform',
    url: 'https://aimsforall.com',
    github: 'https://github.com/khadar-debug',
    tech: ['Python', 'LangChain', 'OpenAI', 'pgvector', 'Django REST', 'PostgreSQL', 'AWS', 'Docker'],
    bullets: [
      'Built a modular AI system with independent services for PDF parsing, semantic chunking, embedding, vector retrieval, LLM scoring, and reporting; designed validation agents producing structured JSON.',
      'Implemented a custom evaluation framework with pass/fail rubrics measuring precision/recall on labeled sets; deployed on AWS with Docker, CI/CD, RBAC, and structured logging.',
    ],
    metrics: [
      { value: '35%',  label: 'Hallucination Reduction' },
      { value: '10K+', label: 'Documents Processed' },
      { value: '5',    label: 'Modular Services' },
    ],
    gradient: 'from-blue-600 to-cyan-500',
    badgeColor: 'bg-blue-500/20 text-blue-300',
  },
  {
    id: 2,
    name: 'Modular AI-Augmented SaaS Platform',
    subtitle: 'StartupVarsity',
    period: 'Apr 2025 – Oct 2025',
    badge: 'SaaS',
    url: 'https://startupvarsity.com',
    github: 'https://github.com/khadar-debug',
    tech: ['TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Drizzle ORM', 'RBAC', 'LLM Integration'],
    bullets: [
      'Architected a multi-tenant SaaS platform with modular service separation — five user roles, secure auth, and RBAC on a normalized relational schema.',
      'Integrated LLM-powered features (standup summarization, evidence review, structured feedback) with session-tracking and structured-output validation in milestone-gated pipelines.',
    ],
    metrics: [
      { value: '5',     label: 'User Roles & RBAC' },
      { value: '3+',    label: 'LLM-Powered Features' },
      { value: 'Multi', label: 'Tenant Architecture' },
    ],
    gradient: 'from-indigo-600 to-violet-500',
    badgeColor: 'bg-indigo-500/20 text-indigo-300',
  },
  {
    id: 3,
    name: 'Agentic ERP with Modular Service Boundaries',
    subtitle: 'Rooman ERP',
    period: 'Nov 2025 – Present',
    badge: 'Enterprise',
    url: 'https://erp.rooman.net',
    github: 'https://github.com/khadar-debug',
    tech: ['Python', 'Django REST', 'PostgreSQL', 'SimpleJWT', 'Docker', 'AWS', 'Agentic AI'],
    bullets: [
      'Leading 5 engineers; architected a Python-based ERP with modular service boundaries and AI-ready REST APIs across HR and academic operations.',
      'Designed schemas and APIs for agentic workflows (auto-summarization, anomaly detection, triage) using tool-calling and structured outputs in live environments.',
    ],
    metrics: [
      { value: '5',    label: 'Engineers Led' },
      { value: '2+',   label: 'Operational Modules' },
      { value: 'Live', label: 'Agentic Workflows' },
    ],
    gradient: 'from-emerald-600 to-teal-500',
    badgeColor: 'bg-emerald-500/20 text-emerald-300',
  },
];

export const caseStudies = [
  {
    id: 1,
    title: 'Multi-Agent Evaluation & RAG Platform',
    subtitle: 'AIMS For All',
    challenge:
      'AIMS needed an AI system capable of ingesting thousands of PDFs, evaluating content quality with objective pass/fail criteria, and generating consistent structured reports — without hallucinating or missing critical information.',
    approach:
      'Designed a modular pipeline with 5 independent services — each with a clean REST contract — enabling the team to develop, test, and scale each service independently. Introduced an evaluation layer from day one, not as an afterthought.',
    architecture: [
      { step: '01', label: 'PDF Ingestion',       detail: 'PyPDF2 + custom parser for structured & unstructured documents' },
      { step: '02', label: 'Semantic Chunking',   detail: 'Overlap-aware chunking with metadata preservation per chunk' },
      { step: '03', label: 'Vector Storage',      detail: 'pgvector on PostgreSQL with cosine similarity + HNSW indexing' },
      { step: '04', label: 'RAG Chain',           detail: 'LangChain retrieval chain with cross-encoder re-ranking' },
      { step: '05', label: 'Evaluation Agent',    detail: 'Pass/fail rubrics — precision, recall, hallucination rate via RAGAS' },
      { step: '06', label: 'REST Layer',          detail: 'FastAPI + Django REST, RBAC auth, session tracking, structured logging' },
      { step: '07', label: 'Deployment',          detail: 'AWS EC2 + RDS + S3, Dockerized services, GitHub Actions CI/CD' },
    ],
    results: [
      '35% reduction in hallucination rate through structured-output enforcement',
      '10,000+ documents processed reliably through the full pipeline',
      'Evaluation accuracy tracked end-to-end via LangSmith observability',
      'Modular architecture enabled team of 5 to work independently per service',
    ],
    tech: ['Python', 'LangChain', 'OpenAI GPT-4o', 'pgvector', 'FastAPI', 'Django REST', 'PostgreSQL', 'AWS', 'Docker', 'LangSmith', 'RAGAS'],
  },
  {
    id: 2,
    title: 'Modular AI-Augmented SaaS Platform',
    subtitle: 'StartupVarsity',
    challenge:
      'StartupVarsity needed a multi-tenant platform where startups, mentors, and investors interact through milestone-gated workflows — with AI automatically summarizing standups and validating milestone evidence with structured, reliable outputs.',
    approach:
      'Architected a normalized relational schema supporting 5 user roles with RBAC. Built an LLM integration layer using structured JSON outputs and session tracking to ensure deterministic, retry-safe AI responses that never hallucinate role boundaries.',
    architecture: [
      { step: '01', label: 'Auth Layer',           detail: 'JWT-based auth with 5 role types: Admin, Mentor, Startup, Investor, Evaluator' },
      { step: '02', label: 'Multi-tenant Schema',  detail: 'Drizzle ORM on PostgreSQL with strict tenant isolation per query' },
      { step: '03', label: 'LLM Integration',      detail: 'OpenAI GPT-4o with structured JSON outputs + automatic retry on schema mismatch' },
      { step: '04', label: 'Standup Summarizer',   detail: 'Context-aware summarization with session history and speaker attribution' },
      { step: '05', label: 'Evidence Reviewer',    detail: 'Structured validation of uploaded evidence against milestone criteria' },
      { step: '06', label: 'Milestone Engine',     detail: 'State-machine-based progression with automated LLM-triggered actions' },
      { step: '07', label: 'API Layer',            detail: 'Express.js REST APIs with input validation, rate limiting, and structured error responses' },
    ],
    results: [
      '5 user role types with granular RBAC implemented across all routes',
      '3 LLM-powered automation features shipped to production without incidents',
      'Zero hallucination boundary violations due to structured-output enforcement',
      'Milestone-gated pipeline significantly reduced manual review workload',
    ],
    tech: ['TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Drizzle ORM', 'OpenAI GPT-4o', 'RBAC', 'JWT'],
  },
  {
    id: 3,
    title: 'Agentic ERP with Modular Service Boundaries',
    subtitle: 'Rooman ERP',
    challenge:
      'Rooman Technologies needed an internal ERP covering HR and academic operations, built from day one to be AI-ready — with clean API contracts that future agents could call for auto-summarization, anomaly detection, and triage without requiring schema rewrites.',
    approach:
      'Led a team of 5 engineers to design the ERP with clear modular boundaries and tool-calling-compatible API endpoints from the start, treating future AI agents as first-class consumers of every API.',
    architecture: [
      { step: '01', label: 'Core Auth',             detail: 'Django REST Framework + SimpleJWT with role-based endpoint protection' },
      { step: '02', label: 'HR Module',             detail: 'Attendance, payroll, leaves — independent service with clean REST boundary' },
      { step: '03', label: 'Academic Module',       detail: 'Student records, assessments, scheduling — independently deployable' },
      { step: '04', label: 'Agentic API Design',    detail: 'Structured JSON endpoints designed as tool-calling compatible function definitions' },
      { step: '05', label: 'Auto-Summarization',   detail: 'LLM-powered daily/weekly operational summaries from structured DB queries' },
      { step: '06', label: 'Anomaly Detection',    detail: 'Statistical threshold monitoring with configurable alert triggers' },
      { step: '07', label: 'Deployment',            detail: 'AWS EC2 + RDS, Dockerized services, environment-based configuration' },
    ],
    results: [
      '5 engineers led across architecture reviews and Agile sprints',
      'AI-ready API design enables new agents to be plugged in without schema changes',
      'Auto-summarization agent reduces manual reporting overhead for ops team',
      'Live deployment serving Rooman Technologies internal operations',
    ],
    tech: ['Python', 'Django REST', 'PostgreSQL', 'SimpleJWT', 'Docker', 'AWS', 'LangChain', 'Agentic AI'],
  },
];

export const certifications = [
  {
    name: 'Generative AI: Prompt Engineering Basics',
    issuer: 'IBM SkillsBuild',
    date: 'Feb 2026',
    color: '#054ADA',
    abbr: 'IBM',
    url: null,
  },
  {
    name: 'ChatGPT Prompt Engineering for Developers',
    issuer: 'DeepLearning.AI',
    date: 'Aug 2025',
    color: '#E44C35',
    abbr: 'DL.AI',
    url: null,
  },
  {
    name: 'Generative AI Learning Path',
    issuer: 'Google Cloud Skills Boost',
    date: 'Jul 2025',
    color: '#4285F4',
    abbr: 'GCP',
    url: null,
  },
  {
    name: 'Java Certification',
    issuer: 'Rooman Technologies',
    date: 'May 2024',
    color: '#F89820',
    abbr: 'JAVA',
    url: null,
  },
];

export const testimonials = [
  {
    name: 'Sandeep',
    role: 'Technical Lead & Team Lead',
    company: 'Rooman Technologies',
    quote:
      'Khadar consistently delivers production-ready AI systems with strong engineering fundamentals. His ability to debug complex agent traces and reduce hallucination rates set a new benchmark for the team.',
    initials: 'S',
    color: '#2563EB',
  },
  {
    name: 'Project Lead',
    role: 'Product Manager',
    company: 'AIMS For All',
    quote:
      'Working with Khadar on the multi-agent RAG platform was exceptional. He brought both deep LLM expertise and disciplined backend engineering to a highly complex project, delivering on every milestone.',
    initials: 'PL',
    color: '#06B6D4',
  },
];

export const education = {
  degree: 'B.Tech in Computer Science and Engineering',
  institution: 'Bharath Institute of Higher Education and Research',
  location: 'Chennai, Tamil Nadu',
  period: '2020 – 2024',
  cgpa: '8.7 / 10',
};
