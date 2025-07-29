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
    icon: <FaLaptopCode className="text-3xl" style={{ color: 'var(--btn-gold)' }} />,
    title: 'Custom Web Applications',
    description: 'We build scalable, modern web apps tailored to your business goals.',
  },
  {
    icon: <FaMobileAlt className="text-3xl" style={{ color: 'var(--btn-gold)' }} />,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps with top performance and sleek design.',
  },
  {
    icon: <FaShoppingCart className="text-3xl" style={{ color: 'var(--btn-gold)' }} />,
    title: 'E-Commerce Solutions',
    description: 'Robust online stores with secure payments, inventory, and analytics.',
  },
  {
    icon: <FaPalette className="text-3xl" style={{ color: 'var(--btn-gold)' }} />,
    title: 'UI/UX Design',
    description: 'User-centered design for visually appealing and intuitive interfaces.',
  },
  {
    icon: <FaCloud className="text-3xl" style={{ color: 'var(--btn-gold)' }} />,
    title: 'Cloud & DevOps Services',
    description: 'Deployment, scaling, and automation with top cloud providers.',
  },
  {
    icon: <FaLightbulb className="text-3xl" style={{ color: 'var(--btn-gold)' }} />,
    title: 'IT Consulting',
    description: 'Strategic technology advice to optimize your IT infrastructure and processes.',
  },
  {
    icon: <FaBullhorn className="text-3xl" style={{ color: 'var(--btn-gold)' }} />,
    title: 'Digital Marketing',
    description: 'Enhance your online presence and reach the right audience through digital channels.',
  },
  {
    icon: <FaClipboardCheck className="text-3xl" style={{ color: 'var(--btn-gold)' }} />,
    title: 'QA & Testing',
    description: 'Ensure software quality with automated and manual testing services.',
  },
  {
    icon: <FaSearch className="text-3xl" style={{ color: 'var(--btn-gold)' }} />,
    title: 'SEO Services',
    description: 'Improve search engine visibility and increase website traffic organically.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center">
    <h2 className="relative inline-block text-3xl font-bold text-white mb-6 after:content-[''] after:block after:h-1 after:w-1/2 after:bg-yellow-500 after:mx-auto after:mt-2">
        Solutions and Technologies
    </h2>
    </div>

      <p className="text-center text-white mb-12 max-w-2xl mx-auto">
        Using latest technologies, we deliver quality, reliable and scalable solutions to transform your business and remain competitive.
         We have mastered the art of software engineering in a wide range of industries to bring valuable insights to our esteemed clients.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition-shadow border border-gray-100 dark:border-zinc-700"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
