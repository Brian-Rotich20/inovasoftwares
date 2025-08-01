'use client';

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
    icon: <FaLaptopCode className="text-xl text-yellow-500" />,
    title: 'Custom Web Applications',
    description: 'We build scalable, modern web apps tailored to your business goals.',
  },
  {
    icon: <FaMobileAlt className="text-xl text-yellow-500" />,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps with top performance and sleek design.',
  },
  {
    icon: <FaShoppingCart className="text-xl text-yellow-500" />,
    title: 'E-Commerce Solutions',
    description: 'Robust online stores with secure payments, inventory, and analytics.',
  },
  {
    icon: <FaPalette className="text-xl text-yellow-500" />,
    title: 'UI/UX Design',
    description: 'User-centered design for visually appealing and intuitive interfaces.',
  },
  {
    icon: <FaCloud className="text-xl text-yellow-500" />,
    title: 'Cloud & DevOps Services',
    description: 'Deployment, scaling, and automation with top cloud providers.',
  },
  {
    icon: <FaLightbulb className="text-xl text-yellow-500" />,
    title: 'IT Consulting',
    description: 'Strategic technology advice to optimize your IT infrastructure and processes.',
  },
  {
    icon: <FaBullhorn className="text-xl text-yellow-500" />,
    title: 'Digital Marketing',
    description: 'Enhance your online presence and reach the right audience through digital channels.',
  },
  {
    icon: <FaClipboardCheck className="text-xl text-yellow-500" />,
    title: 'QA & Testing',
    description: 'Ensure software quality with automated and manual testing services.',
  },
  {
    icon: <FaSearch className="text-xl text-yellow-500" />,
    title: 'SEO Services',
    description: 'Improve search engine visibility and increase website traffic organically.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-12 md:py-16 px-4 md:px-6 max-w-6xl mx-auto">
      <div className="text-center">
        <h2 className="relative inline-block text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 after:content-[''] after:block after:h-1 after:w-1/2 after:bg-yellow-500 after:mx-auto after:mt-2">
          Solutions and Technologies
        </h2>
      </div>

      <p className="text-center text-slate-300 mb-8 md:mb-10 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
        Using latest technologies, we deliver quality, reliable and scalable solutions to transform your business and remain competitive.
        We have mastered the art of software engineering in a wide range of industries to bring valuable insights to our esteemed clients.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-slate-800 p-4 md:p-5 rounded-lg shadow hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-700"
          >
            <div className="mb-3">{service.icon}</div>
            <h3 className="text-base md:text-lg font-semibold mb-2 text-white">
              {service.title}
            </h3>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}