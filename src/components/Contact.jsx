import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiPhone, FiArrowRight, FiSend } from 'react-icons/fi';
import { HiCheckBadge } from 'react-icons/hi2';
import { personal } from '../data';

const CONTACT_ITEMS = [
  {
    Icon: FiMail,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    color: 'bg-blue-600/10 text-blue-600',
  },
  {
    Icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/khadarbasha-s',
    href: personal.linkedin,
    color: 'bg-blue-500/10 text-blue-500',
    external: true,
  },
  {
    Icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/khadarbasha-s',
    href: personal.github,
    color: 'bg-slate-500/10 text-slate-600 dark:text-slate-400',
    external: true,
  },
  {
    Icon: FiPhone,
    label: 'Phone',
    value: personal.phone,
    href: `tel:${personal.phone}`,
    color: 'bg-green-500/10 text-green-600',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-blue-600/60 focus:ring-2 focus:ring-blue-600/15 transition-all duration-200';

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-lg mx-auto">
            Open to full-time AI engineer roles, full-stack projects, and AI product consulting.
            Let's talk.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-4xl mx-auto">

          {/* Left: contact links + availability */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="font-heading font-semibold text-slate-900 dark:text-white mb-5">
              Reach me on
            </h3>
            {CONTACT_ITEMS.map(({ Icon, label, value, href, color, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 card hover:border-blue-600/40 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">
                    {label}
                  </p>
                  <p className="text-slate-700 dark:text-slate-200 text-sm font-medium truncate">
                    {value}
                  </p>
                </div>
                <FiArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
              </a>
            ))}

            {/* Availability badge */}
            <div className="card p-4 flex flex-wrap items-center gap-3 mt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-xs font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-slow" />
                Available Now
              </span>
              <div className="flex flex-wrap gap-2">
                {personal.availability.map((item, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300 text-xs">
                    <HiCheckBadge className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card p-7">
              <h3 className="font-heading font-semibold text-slate-900 dark:text-white text-lg mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Smith"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@company.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about the role or project..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-md shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 disabled:opacity-70"
                >
                  {sent ? (
                    <>
                      <HiCheckBadge className="w-4 h-4" />
                      Opening your mail client…
                    </>
                  ) : (
                    <>
                      <FiSend className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-xs text-slate-400 dark:text-slate-500 text-center">
                  Opens your mail client with the message pre-filled.
                </p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
