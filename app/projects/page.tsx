// app/projects/page.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, ArrowRight, ArrowUpRight, Terminal, Database, FileSpreadsheet, Zap } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A modern full-featured e-commerce shop with product catalog, cart, checkout, and support for multiple payment gateways.',
    image: '/shop2.png',
    github: 'https://github.com/Brian-Rotich20/Django-Shop-With-RF',
    live: 'https://frontend-shop-xi.vercel.app',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Django', 'PostgreSQL'],
    category: 'Full Stack',
    featured: true,
  },
  {
    id: 2,
    title: 'Inventory Management System',
    description: 'A collaborative inventory management application with real-time updates, reporting dashboards, and team features.',
    image: '/inventory.png',
    github: 'https://github.com/Brian-Rotich20/Sales-Inventory-System',
    live: null,
    tech: ['PHP', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    category: 'Web Application',
    featured: false,
  },
  {
    id: 3,
    title: 'Personal Blog Platform',
    description: 'A blog built with Django featuring dark mode, tags, categories, pagination and a markdown editor.',
    image: '/blog.jpeg',
    github: 'https://github.com/Brian-Rotich20/django-blog',
    live: null,
    tech: ['Django', 'Tailwind CSS'],
    category: 'CMS',
    featured: false,
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A clean, responsive portfolio website to showcase a rich collection of graphic designs crafted in Kenya.',
    image: '/lyrebird.png',
    github: 'https://github.com/Brian-Rotich20/lyrebird-graphics',
    live: 'https://lyrebird-graphics.netlify.app/',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    category: 'Portfolio',
    featured: false,
  },
  {
    id: 5,
    title: 'Travel Booking Site',
    description: 'A travel website where Kenyans can book destinations, view travel options, and access pricing in real time.',
    image: '/travel.png',
    github: 'https://github.com/Brian-Rotich20/Travel-Website',
    live: 'https://inovatravels.netlify.app/',
    tech: ['React', 'Django'],
    category: 'Booking Platform',
    featured: true,
  },
  {
    id: 6,
    title: 'Facols Ecommerce Store',
    description: 'An electrical accessories store dealing with modern products, built with full WooCommerce integration.',
    image: '/facols.png',
    github: null,
    live: 'https://facols.com',
    tech: ['WooCommerce', 'Elementor'],
    category: 'E-commerce',
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  'Full Stack': 'text-green-400 bg-green-500/10 border-green-500/30',
  'Web Application': 'text-blue-400 bg-blue-500/10 border-blue-500/30',
  'CMS': 'text-purple-400 bg-purple-500/10 border-purple-500/30',
  'Portfolio': 'text-amber-400 bg-amber-500/10 border-amber-500/30',
  'Booking Platform': 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
  'E-commerce': 'text-rose-400 bg-rose-500/10 border-rose-500/30',
  'Automation': 'text-violet-400 bg-violet-500/10 border-violet-500/30',
};

const automationFeatures = [
  { icon: Terminal, text: 'Logs into CRM dashboards automatically using stored sessions' },
  { icon: Database, text: 'Collects all leads and expands hidden sections dynamically' },
  { icon: Zap, text: 'Extracts structured data — company info, contacts, notes, custom fields & opportunities' },
  { icon: FileSpreadsheet, text: 'Exports everything into clean Excel, CSV, and JSON formats' },
];

const tags = ['#Python', '#Playwright', '#Automation', '#WebScraping', '#DataEngineering'];
const allCategories = ['All', ...Array.from(new Set(projects.map(p => p.category))), 'Automation'];

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState('All');
  const showAutomation = activeCategory === 'All' || activeCategory === 'Automation';
  const filteredProjects = activeCategory === 'All' || activeCategory === 'Automation'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="relative min-h-screen bg-[#080c08] text-white overflow-hidden">
      <div className="fixed inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: `linear-gradient(rgba(74,222,128,1) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,1) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(34,197,94,0.07) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-green-500 mb-3 font-medium">Our Work</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95]">
              Projects &<br /><span className="text-green-400">Case Studies</span>
            </h1>
            <div className="max-w-xs">
              <p className="text-slate-400 text-sm leading-relaxed">Innovative solutions and cutting-edge applications built for real clients across Kenya and beyond.</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex items-center gap-1.5"><div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" /><span className="text-xs text-slate-500">{projects.length + 1} Projects</span></div>
                <div className="h-3 w-px bg-slate-700" />
                <span className="text-xs text-slate-500">Live & In Production</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category filter */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12">
          {allCategories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`text-xs px-4 py-1.5 rounded-full border font-medium transition-all duration-200
                ${activeCategory === cat
                  ? 'bg-green-500 text-black border-green-500'
                  : 'border-slate-800 text-slate-400 hover:border-slate-600 hover:text-slate-200'}`}>
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Automation Case Study */}
        {showAutomation && (
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="relative mb-6 rounded-2xl border border-violet-500/30 bg-violet-500/[0.05] overflow-hidden group">
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(139,92,246,0.08), transparent 60%)' }} />

            <div className="relative z-10 grid lg:grid-cols-2 gap-0">
              <div className="p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-xs font-medium px-3 py-1 rounded-full border text-violet-400 bg-violet-500/10 border-violet-500/30">Automation</span>
                    <span className="text-xs text-slate-500">Close CRM · Python · Playwright</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                    CRM Data Extraction<br /><span className="text-violet-400">Automation Tool</span>
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    A smart automation tool built for <span className="text-white font-medium">Close CRM</span> — extracts leads, contacts, custom fields, notes, and opportunities at scale. Built with async Python and Playwright for fast, flexible large-scale data workflows.
                  </p>
                  <div className="space-y-3 mb-8">
                    {automationFeatures.map((f, i) => {
                      const Icon = f.icon;
                      return (
                        <div key={i} className="flex items-start gap-3">
                          <div className="p-1.5 bg-violet-500/15 rounded-lg shrink-0 mt-0.5">
                            <Icon className="h-3.5 w-3.5 text-violet-400" />
                          </div>
                          <p className="text-sm text-slate-300">{f.text}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {tags.map(tag => (
                      <span key={tag} className="text-[11px] text-violet-400/70 bg-violet-500/10 px-2.5 py-1 rounded-full border border-violet-500/20">{tag}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-slate-600 mb-3 uppercase tracking-wider">Quick Setup</p>
                  <div className="bg-[#0d0d0d] rounded-xl border border-slate-800 px-4 py-3 font-mono text-sm space-y-1">
                    <div><span className="text-slate-500">$ </span><span className="text-green-400">pip install</span><span className="text-slate-300"> playwright pandas openpyxl</span></div>
                    <div><span className="text-slate-500">$ </span><span className="text-green-400">python</span><span className="text-slate-300"> extract.py</span></div>
                  </div>
                </div>
              </div>

              <div className="relative p-8 md:p-10 border-t lg:border-t-0 lg:border-l border-violet-500/10 flex flex-col justify-center gap-4">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Leads Extracted', val: '10K+', color: 'text-violet-400' },
                    { label: 'Export Formats', val: '3', color: 'text-green-400' },
                    { label: 'Fields Captured', val: '25+', color: 'text-blue-400' },
                    { label: 'Time Saved', val: '90%', color: 'text-amber-400' },
                  ].map((s, i) => (
                    <div key={i} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                      <p className={`text-2xl font-bold ${s.color}`}>{s.val}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                  <p className="text-xs text-slate-600 mb-3 uppercase tracking-wider">Extraction Pipeline</p>
                  <div className="space-y-2">
                    {['Login & Session', 'Collect Leads', 'Expand Sections', 'Extract & Parse', 'Export Output'].map((step, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`h-5 w-5 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 ${i < 4 ? 'bg-green-500 text-black' : 'bg-violet-500 text-white'}`}>{i + 1}</div>
                        <div className="flex-1 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                          <div className={`h-full rounded-full ${i < 4 ? 'bg-green-500' : 'bg-violet-500'}`} style={{ width: i < 4 ? '100%' : '75%' }} />
                        </div>
                        <span className="text-xs text-slate-500 w-24 text-right">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-violet-500/60 to-transparent" />
          </motion.div>
        )}

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, index) => (
            <motion.div key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              viewport={{ once: true }}
              className={`group relative rounded-2xl border bg-slate-900/60 overflow-hidden transition-all duration-300 hover:-translate-y-1.5
                ${project.featured ? 'border-green-500/30 hover:border-green-500/50' : 'border-slate-800 hover:border-slate-700'}`}>
              <div className="relative overflow-hidden aspect-[16/10]">
                <img src={project.image} alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080c08] via-[#080c08]/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className={`text-[10px] font-medium px-2.5 py-1 rounded-full border backdrop-blur-sm ${categoryColors[project.category] ?? ''}`}>
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className="h-8 w-8 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center transition-colors">
                      <ArrowUpRight className="h-4 w-4 text-black" />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="h-8 w-8 bg-slate-800/90 hover:bg-slate-700 border border-slate-700 rounded-full flex items-center justify-center transition-colors">
                      <Github className="h-3.5 w-3.5 text-white" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-white mb-2 group-hover:text-green-300 transition-colors leading-tight">{project.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="text-[10px] text-slate-500 bg-slate-800 px-2 py-0.5 rounded">{t}</span>
                  ))}
                  {project.tech.length > 3 && <span className="text-[10px] text-slate-600">+{project.tech.length - 3}</span>}
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                  <div className="flex gap-3">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                        className="text-xs text-green-400 hover:text-green-300 flex items-center gap-1 transition-colors">
                        <ExternalLink className="h-3 w-3" />Live
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1 transition-colors">
                        <Github className="h-3 w-3" />Code
                      </a>
                    )}
                  </div>
                  {project.featured && <span className="text-[10px] text-green-500/70 font-medium">Featured</span>}
                </div>
              </div>
              {project.featured && <div className="absolute bottom-0 left-0 h-[2px] w-full bg-green-500/40 group-hover:bg-green-500/70 transition-colors" />}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-green-500/20 bg-green-500/[0.04] p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(34,197,94,0.06) 0%, transparent 70%)' }} />
          <div className="relative z-10">
            <p className="text-slate-500 text-sm mb-2">Have a project in mind?</p>
            <h3 className="text-2xl font-bold text-white mb-6">Let's build something great together.</h3>
            <a href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-green-500 px-7 py-3 text-sm font-semibold text-black hover:bg-green-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:-translate-y-0.5">
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}