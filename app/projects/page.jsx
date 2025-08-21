'use client';
import React, { useState } from 'react';
import { Github, ExternalLink, Clock, CheckCircle, ChevronRight } from 'lucide-react';

const ProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A modern full-featured e-commerce shop with product catalog, cart, checkout. Supporting different payment gateways',
      image: '/shop2.png',
      github: 'https://github.com/Brian-Rotich20/Django-Shop-With-RF',
      live: 'https://frontend-shop-xi.vercel.app',
      status: 'completed',
      tech: ['React', 'Next.js', 'Tailwind CSS', 'Django', 'PostgreSQL'],
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'Inventory Management System App',
      description: 'A collaborative inventory management application with real-time updates and team features.',
      image: '/inventory.png',
      github: 'https://github.com/Brian-Rotich20/Sales-Inventory-System',
      live: null,
      status: 'completed',
      tech: ['PHP', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      category: 'Web Application'
    },
    {
      id: 3,
      title: 'Personal Blog',
      description: 'A blog built with Django featuring dark mode, tags, categories, pagination and a markdown editor. Also still in progress',
      image: '/blog.jpeg',
      github: 'https://github.com/Brian-Rotich20/django-blog',
      live: null,
      status: 'pending',
      tech: ['Django', 'Tailwind CSS'],
      category: 'CMS'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A clean, responsive portfolio website designed to showcase a rich collection of graphic designs crafted in Kenya',
      image: '/lyrebird.png',
      github: 'https://github.com/Brian-Rotich20/lyrebird-graphics',
      live: 'https://lyrebird-graphics.netlify.app/',
      status: 'completed',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      category: 'Portfolio'
    },
    {
      id: 5,
      title: 'Travel Site',
      description: 'A travelling website, people in Kenya can book for places, view where travel and access the prices',
      image: '/travel.png',
      github: 'https://github.com/Brian-Rotich20/Travel-Website',
      live: 'https://inovatravels.netlify.app/',
      status: 'completed',
      tech: ['React', 'Django'],
      category: 'Booking Platform'
    },
    {
      id: 7,
      title: 'Ecommerce Website',
      description: 'An electrical website that deals with modern electrical accessories.',
      image: '/facols.png',
      github: null,
      live: 'https://facols.com',
      status: 'completed',
      tech: ['WooCommerce', 'Elementor'],
      category: 'E-commerce'
    }
  ];

  const currentProject = projects[selectedProject];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#0D9488] to-slate-900 text-white">
      {/* Header */}
      <div className="container mx-auto px-6 pt-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Projects
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Showcasing innovative solutions and cutting-edge applications we've built
          </p>
        </div>

        {/* Main Project Display */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Project Image */}
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#0D9488] rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 z-10 transition-all duration-300 group-hover:scale-95">
                <span className="px-3 py-1 text-sm font-medium bg-slate-900/80 rounded-full backdrop-blur-sm">
                  {String(selectedProject + 1).padStart(2, '0')}
                </span>
              </div>
              {/* Overlay that appears on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 text-sm font-medium bg-slate-700 rounded-full">
                {currentProject.category}
              </span>
              <div className="flex items-center gap-2">
                {currentProject.status === 'completed' ? (
                  <>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-medium">Completed</span>
                  </>
                ) : (
                  <>
                    <Clock className="w-5 h-5 text-yellow-400" />
                    <span className="text-yellow-400 font-medium">In Progress</span>
                  </>
                )}
              </div>
            </div>

            <h2 className="text-4xl font-bold leading-tight">
              {currentProject.title}
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed">
              {currentProject.description}
            </p>

            {/* Tech Stack */}
            <div>
              <h3 className="text-sm font-medium text-slate-200 mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {currentProject.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-slate-700/50 border border-slate-600 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="text-sm text-slate-200 mt-2">
                {currentProject.tech.length} Technologies
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              {currentProject.live && (
                <a
                  href={currentProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-lg font-medium hover:from-orange-700 hover:to-yellow-700 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              {currentProject.github && (
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border border-slate-600 rounded-lg font-medium hover:bg-slate-800 transition-all"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Project List */}
        <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6">
          <h3 className="text-xl font-bold mb-6">All Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(index)}
                className={`p-4 rounded-xl cursor-pointer transition-all ${
                  selectedProject === index
                    ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500'
                    : 'bg-slate-700/30 hover:bg-slate-700/50 border-slate-600'
                } border`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-sm leading-tight pr-2">
                    {project.title}
                  </h4>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    {project.status === 'completed' ? (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    ) : (
                      <Clock className="w-4 h-4 text-yellow-400" />
                    )}
                  </div>
                </div>
                <p className="text-xs text-slate-200 mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {project.tech.slice(0, 2).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-slate-600/50 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 2 && (
                      <span className="px-2 py-1 text-xs text-slate-400">
                        +{project.tech.length - 2}
                      </span>
                    )}
                  </div>
                  {selectedProject === index && (
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-12"></div>
    </div>
  );
};

export default ProjectShowcase;