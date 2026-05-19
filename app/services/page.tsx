// app/services/page.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  FaLaptopCode, FaMobileAlt, FaShoppingCart, FaPalette,
  FaCloud, FaLightbulb, FaBullhorn, FaClipboardCheck, FaSearch,
  FaComments, FaProjectDiagram, FaCode, FaRocket,
} from 'react-icons/fa';
import { ArrowRight, ChevronRight } from 'lucide-react';

const services = [
  { icon: FaLaptopCode, title: 'Custom Web Applications', description: 'Scalable, modern web apps tailored to your business goals and workflows.', accent: true },
  { icon: FaMobileAlt, title: 'Mobile App Development', description: 'Cross-platform mobile apps with top performance and sleek design.' },
  { icon: FaShoppingCart, title: 'E-Commerce Solutions', description: 'Robust online stores with secure payments, inventory, and analytics.' },
  { icon: FaPalette, title: 'UI/UX Design', description: 'User-centered design for visually appealing and high-converting interfaces.' },
  { icon: FaCloud, title: 'Cloud & DevOps Services', description: 'Deployment, scaling, and automation with leading cloud providers.', accent: true },
  { icon: FaLightbulb, title: 'IT Consulting', description: 'Strategic technology advice to optimize your IT infrastructure and processes.' },
  { icon: FaBullhorn, title: 'Digital Marketing', description: 'Enhance your online presence and reach the right audience through digital channels.' },
  { icon: FaClipboardCheck, title: 'QA & Testing', description: 'Ensure software quality with automated and manual testing services.' },
  { icon: FaSearch, title: 'SEO Services', description: 'Improve search engine visibility and increase website traffic organically.' },
];

const processSteps = [
  { number: '01', icon: FaComments, title: 'Tell Us What You Need', description: 'Share your vision and requirements with our team' },
  { number: '02', icon: FaProjectDiagram, title: 'Plan the Best Approach', description: 'We analyze and create a strategic roadmap' },
  { number: '03', icon: FaCode, title: 'Build It for You', description: 'Our experts develop your solution with precision' },
  { number: '04', icon: FaRocket, title: 'Launch & Support', description: 'Deploy your project and provide ongoing support' },
];

const techStack = [
  { name: 'React / Next.js', level: 95 },
  { name: 'Python / Django', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'React Native', level: 80 },
  { name: 'PostgreSQL', level: 88 },
  { name: 'AWS / Cloud', level: 75 },
];

export default function ServicesPage() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen bg-[#080c08] text-white overflow-hidden">
      {/* Grid */}
      <div className="fixed inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: `linear-gradient(rgba(74,222,128,1) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,1) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(34,197,94,0.07) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">

        {/* ── Header ── */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-20">
          <p className="text-xs uppercase tracking-[0.25em] text-green-500 mb-3 font-medium">What We Do</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95]">
              Solutions &<br /><span className="text-green-400">Technologies</span>
            </h1>
            <div className="max-w-sm">
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Using the latest technologies, we deliver quality, reliable, and scalable solutions to transform your business from the ground up.
              </p>
              <a href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-2.5 text-sm font-semibold text-black hover:bg-green-400 transition-all duration-200 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:-translate-y-0.5">
                Start a Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── Services grid ── */}
        <section className="mb-28">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isHovered = hoveredService === index;
              return (
                <motion.div key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  className={`group relative rounded-2xl border p-6 cursor-default transition-all duration-300 hover:-translate-y-1 overflow-hidden
                    ${service.accent
                      ? 'border-green-500/40 bg-green-500/[0.07] hover:border-green-400/60'
                      : 'border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-900'
                    }`}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'radial-gradient(circle at 20% 20%, rgba(34,197,94,0.06), transparent 60%)' }} />
                  <div className="relative z-10">
                    <div className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300
                      ${service.accent ? 'bg-green-500/20 text-green-400' : 'bg-slate-800 text-green-500 group-hover:bg-slate-700'}`}>
                      <Icon className="text-lg" />
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">{service.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">{service.description}</p>
                  </div>
                  <div className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ${service.accent ? 'bg-green-400' : 'bg-green-500/60'}`} />
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── Tech stack ── */}
        <section className="mb-28">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <p className="text-xs uppercase tracking-[0.25em] text-green-500 mb-3 font-medium">Our Stack</p>
            <div className="flex flex-col lg:flex-row lg:items-start gap-12">
              <div className="lg:w-1/3">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Built on the Best <span className="text-green-400">Technologies</span></h2>
                <p className="text-slate-400 text-sm leading-relaxed">We stay current with modern frameworks and tools to give your product the competitive edge it deserves.</p>
              </div>
              <div className="lg:w-2/3 space-y-4">
                {techStack.map((tech, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    viewport={{ once: true }}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-300 font-medium">{tech.name}</span>
                      <span className="text-xs text-green-400">{tech.level}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{ duration: 0.9, delay: 0.2 + i * 0.08, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="h-full bg-green-500 rounded-full" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── Process steps ── */}
        <section className="mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-green-500 mb-3 font-medium">How We Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              From Idea to <span className="text-green-400">Launch</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-green-500/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden">

                  {/* Step number watermark */}
                  <div className="absolute top-3 right-4 text-5xl font-black text-slate-800/60 group-hover:text-slate-700/60 transition-colors select-none leading-none">{step.number}</div>

                  <div className="relative z-10">
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                      <Icon className="text-green-400 text-lg" />
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">{step.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Arrow connector (not on last) */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute -right-3 top-1/2 -translate-y-1/2 hidden lg:flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 border border-slate-700 z-20">
                      <ChevronRight className="h-3 w-3 text-green-500" />
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-green-500/50 transition-all duration-500" />
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── CTA ── */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
          className="rounded-2xl border border-green-500/20 bg-green-500/[0.05] p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(34,197,94,0.08) 0%, transparent 70%)' }} />
          <div className="relative z-10">
            <p className="text-xs uppercase tracking-[0.2em] text-green-500 mb-4 font-medium">Ready?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Ready to Start Your Project?</h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto text-sm leading-relaxed">Let's discuss how we can bring your ideas to life with our expertise and dedication to quality.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-7 py-3 text-sm font-semibold text-black hover:bg-green-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:-translate-y-0.5">
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-7 py-3 text-sm font-medium text-slate-300 hover:border-green-500/40 hover:text-white transition-all duration-200">
                View Portfolio
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}