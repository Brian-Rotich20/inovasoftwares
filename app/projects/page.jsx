// app/projects/page.tsx  (or components/ProjectShowcase.tsx)
'use client';

import React, { useState } from 'react';
import { Github, ExternalLink, ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A clean, responsive portfolio website designed to showcase a rich collection of graphic designs crafted in Kenya.',
    image: '/lyrebird.png',
    github: 'https://github.com/Brian-Rotich20/lyrebird-graphics',
    live: 'https://lyrebird-graphics.netlify.app/',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    category: 'Portfolio',
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
  },
];

const categoryColors = {
  'Full Stack': 'text-green-400 bg-green-500/10 border-green-500/30',
  'Web Application': 'text-blue-400 bg-blue-500/10 border-blue-500/30',
  'CMS': 'text-purple-400 bg-purple-500/10 border-purple-500/30',
  'Portfolio': 'text-amber-400 bg-amber-500/10 border-amber-500/30',
  'Booking Platform': 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
  'E-commerce': 'text-rose-400 bg-rose-500/10 border-rose-500/30',
};

const ProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const current = projects[selectedProject];

  return (
    <div className="relative min-h-screen bg-[#080c08] text-white overflow-hidden">

      {/* Grid bg */}
      <div
        className="fixed inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(74,222,128,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74,222,128,1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Glow */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(34,197,94,0.07) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-green-500 mb-3 font-medium">Our Work</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Projects &<br /><span className="text-green-400">Case Studies</span>
            </h1>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              Innovative solutions and cutting-edge applications built for real clients.
            </p>
          </div>
        </motion.div>

        {/* Main featured project */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProject}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-8 mb-16"
          >
            {/* Image */}
            <div className="relative group rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60">
              <div className="aspect-video overflow-hidden">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#080c08]/0 group-hover:bg-[#080c08]/30 transition-all duration-300 flex items-center justify-center">
                {current.live && (
                  <a
                    href={current.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 bg-green-500/90 backdrop-blur-sm rounded-full p-4 hover:bg-green-400"
                  >
                    <ArrowUpRight className="h-6 w-6 text-black" />
                  </a>
                )}
              </div>
              {/* Badge */}
              <div className="absolute top-4 left-4">
                <span className="text-xs font-mono text-slate-400 bg-[#080c08]/80 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-700">
                  {String(selectedProject + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center space-y-6">
              <span className={`self-start text-xs font-medium px-3 py-1 rounded-full border ${categoryColors[current.category] ?? 'text-slate-400 bg-slate-800 border-slate-700'}`}>
                {current.category}
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                {current.title}
              </h2>

              <p className="text-slate-400 leading-relaxed">{current.description}</p>

              {/* Tech */}
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-600 mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {current.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-xs text-slate-300 bg-slate-800 border border-slate-700 rounded-full hover:border-green-500/40 hover:text-green-300 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                {current.live && (
                  <a
                    href={current.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-400 rounded-full text-sm font-semibold text-black transition-all duration-200 hover:shadow-[0_0_20px_rgba(34,197,94,0.35)] hover:-translate-y-0.5"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                )}
                {current.github && (
                  <a
                    href={current.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-700 text-sm font-medium text-slate-300 hover:border-slate-500 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Project grid */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base font-semibold text-white">All Projects</h3>
            <span className="text-xs text-slate-600">{projects.length} total</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(index)}
                className={`group relative text-left p-4 rounded-xl border transition-all duration-300 overflow-hidden
                  ${selectedProject === index
                    ? 'border-green-500/50 bg-green-500/[0.07]'
                    : 'border-slate-800 bg-slate-900/40 hover:border-slate-700'
                  }`}
              >
                {/* Thumbnail */}
                <div className="rounded-lg overflow-hidden mb-3 aspect-video bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                  />
                </div>

                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h4 className={`text-sm font-semibold leading-tight ${selectedProject === index ? 'text-green-300' : 'text-white'}`}>
                    {project.title}
                  </h4>
                  {selectedProject === index && (
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400 mt-1.5 shrink-0 animate-pulse" />
                  )}
                </div>

                <p className="text-xs text-slate-500 line-clamp-2 mb-3">{project.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {project.tech.slice(0, 2).map((t, i) => (
                      <span key={i} className="px-2 py-0.5 text-[10px] text-slate-500 bg-slate-800 rounded">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 2 && (
                      <span className="text-[10px] text-slate-600 px-1">+{project.tech.length - 2}</span>
                    )}
                  </div>
                  <div className="flex gap-1.5">
                    {project.live && <div className="h-1.5 w-1.5 rounded-full bg-green-500/60" title="Live" />}
                    {project.github && <div className="h-1.5 w-1.5 rounded-full bg-slate-600" title="GitHub" />}
                  </div>
                </div>

                {/* Active bottom line */}
                {selectedProject === index && (
                  <div className="absolute bottom-0 left-0 h-[2px] w-full bg-green-500/60" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-slate-500 text-sm mb-5">Have a project in mind?</p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-green-500 px-7 py-3 text-sm font-semibold text-black hover:bg-green-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:-translate-y-0.5"
          >
            Let's Build Together
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectShowcase;