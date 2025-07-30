
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '../components/SectionHeader';
import { fadeIn, staggerContainer } from '../libs/animations';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiDjango, SiPostgresql} from 'react-icons/si';
import { FaPhp, FaHtml5, FaCss3Alt, FaJs, FaBootstrap } from "react-icons/fa";
import { SiWoocommerce, SiElementor } from 'react-icons/si';

export default function Projects() {
  const projects = [
    {
      slug: 'ecommerce-platform',
      title: 'E-commerce Platform',
      description: 'A modern full-featured e-commerce shop with product catalog, cart, checkout. Supporting different payment gateways',
      image: '/shop2.png',
      live: 'https://frontend-shop-xi.vercel.app',
      tech: [<FaReact key="react" />, <SiNextdotjs key="next" />, <SiTailwindcss key="tailwind" />, <SiDjango key="django" />, <SiPostgresql key="postgresql"/>]
    },
    {
      slug: 'inventory-management-system',
      title: 'Inventory Management System App',
      description: 'A collaborative inventory management application with real-time updates and team features.',
      image: '/inventory.png',
      tech: [<FaPhp key="php" />, <FaHtml5 key="html" />, <FaCss3Alt key="css" />, <FaJs key="js" />, <FaBootstrap key="bootstrap" />]
    },
    {
      slug: 'personal-blog',
      title: 'Personal Blog',
      description: 'A blog built with Django featuring dark mode, tags, categories,pagination and a markdown editor.Also still in progress',
      image: '/blog.jpeg',
      live: '/',
      tech: [<SiDjango key="django" />, <SiTailwindcss key="tailwind" />]
    },
    {
      slug: 'portfolio-website',
      title: 'Portfolio Website',
      description: 'A clean, responsive portfolio website designed to showcase a rich collection of graphic designs crafted in Kenya',
      image: '/lyrebird.png',
      live: 'https://lyrebird-graphics.netlify.app/',
      tech: [<FaHtml5 key="html" />, <FaCss3Alt key="css" />, <FaJs key="js" />]
    },
    {
      slug: 'travel-site',
      title: 'Travel Site',
      description: 'A travelling website, people in Kenya can book for places, view where travel and access the prices',
      image: '/travel.png',
      live: 'https://inovatravels.netlify.app/',
      tech: [<FaReact key="react" />, <SiDjango key="django" />]
    },
    {
      slug: 'facols-ecommerce',
      title: 'Facols Ecommerce Website',
      description: 'An electrical website that deals with modern electrical accessories.',
      image: '/facols.png',
      live: 'https://facols.com',
      tech: [<SiWoocommerce key="woocommerce" />, <SiElementor key="elementor" />]
    },
  ];

  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
         <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm">
        <SectionHeader title="Projects" />
        
        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', index * 0.2)}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg group cursor-pointer"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="group border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-64 sm:h-72 md:h-80 lg:h-64 xl:h-72">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain sm:object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="100vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 highlight group-hover:text-[#FFD700] transition-colors">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex items-center mb-4 space-x-3">
                  {project.tech.map((icon, i) => (
                    <div key={i} className="text-xl text-gray-600 dark:text-gray-400">
                      {icon}
                    </div>
                  ))}
                </div>

                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-[#FFD700] dark:hover:text-[#FFD700] transition-colors"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
      </div>
    </section>
  );
}