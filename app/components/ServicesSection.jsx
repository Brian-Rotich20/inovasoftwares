// components/ServicesSection.tsx
'use client';

import { motion } from 'motion/react';
import {
  FaLaptopCode,
  FaMobileAlt,
  FaShoppingCart,
  FaPalette,
  FaCloud,
  FaSearch,
  FaClipboardCheck,
  FaBullhorn,
  FaLightbulb,
} from 'react-icons/fa';

const services = [
  {
    icon: FaLaptopCode,
    title: 'Custom Web Applications',
    description: 'Scalable, modern web apps tailored to your business goals and workflows.',
    accent: true,
  },
  {
    icon: FaMobileAlt,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps with top performance and sleek design.',
    accent: false,
  },
  {
    icon: FaShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'Robust online stores with secure payments and powerful analytics.',
    accent: false,
  },
  {
    icon: FaPalette,
    title: 'UI/UX Design',
    description: 'User-centered design for intuitive, beautiful, high-converting interfaces.',
    accent: false,
  },
  {
    icon: FaCloud,
    title: 'Cloud & DevOps',
    description: 'Deployment, scaling, and automation with leading cloud providers.',
    accent: true,
  },
  {
    icon: FaLightbulb,
    title: 'IT Consulting',
    description: 'Strategic technology advice to optimize your IT infrastructure and roadmap.',
    accent: false,
  },
  {
    icon: FaBullhorn,
    title: 'Digital Marketing',
    description: 'Enhance your online presence and reach the right audience at scale.',
    accent: false,
  },
  {
    icon: FaClipboardCheck,
    title: 'QA & Testing',
    description: 'Ensure software quality with automated and rigorous manual testing.',
    accent: false,
  },
  {
    icon: FaSearch,
    title: 'SEO Services',
    description: 'Improve search visibility and drive qualified traffic to your platform.',
    accent: false,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-24 bg-[#080c08] overflow-hidden"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(74,222,128,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74,222,128,1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Section glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(34,197,94,0.06) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">

        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-green-500 mb-3 font-medium">What We Do</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Solutions & <span className="text-green-400">Technologies</span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl leading-relaxed">
            Using the latest technologies, we deliver quality, reliable, and scalable solutions to transform your business.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                viewport={{ once: true }}
                className={`group relative rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 cursor-default overflow-hidden
                  ${service.accent
                    ? 'border-green-500/40 bg-green-500/[0.07] hover:border-green-400/60 hover:bg-green-500/[0.12]'
                    : 'border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-900'
                  }`}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 20% 20%, rgba(34,197,94,0.06), transparent 60%)" }} />

                <div className="relative z-10">
                  <div className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl
                    ${service.accent
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-slate-800 text-green-500 group-hover:bg-slate-700'
                    } transition-colors duration-300`}
                  >
                    <Icon className="text-lg" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2 group-hover:text-green-300 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors duration-200">
                    {service.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500
                  ${service.accent ? 'bg-green-400' : 'bg-green-500/60'}`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}