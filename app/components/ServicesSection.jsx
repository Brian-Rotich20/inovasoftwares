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
    icon: <FaLaptopCode className="text-lg text-white" />,
    title: 'Custom Web Applications',
    description: 'Scalable, modern web apps tailored to your business goals.',
  },
  {
    icon: <FaMobileAlt className="text-lg text-white" />,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps with top performance and sleek design.',
  },
  {
    icon: <FaShoppingCart className="text-lg text-white" />,
    title: 'E-Commerce Solutions',
    description: 'Robust online stores with secure payments and analytics.',
  },
  {
    icon: <FaPalette className="text-lg text-white" />,
    title: 'UI/UX Design',
    description: 'User-centered design for appealing and intuitive interfaces.',
  },
  {
    icon: <FaCloud className="text-lg text-white" />,
    title: 'Cloud & DevOps Services',
    description: 'Deployment, scaling, and automation with top cloud providers.',
  },
  {
    icon: <FaLightbulb className="text-lg text-white" />,
    title: 'IT Consulting',
    description: 'Strategic technology advice to optimize your IT infrastructure.',
  },
  {
    icon: <FaBullhorn className="text-lg text-white" />,
    title: 'Digital Marketing',
    description: 'Enhance your online presence and reach the right audience.',
  },
  {
    icon: <FaClipboardCheck className="text-lg text-white" />,
    title: 'QA & Testing',
    description: 'Ensure software quality with automated and manual testing.',
  },
  {
    icon: <FaSearch className="text-lg text-white" />,
    title: 'SEO Services',
    description: 'Improve search engine visibility and increase website traffic.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-8 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Solutions & Technologies
        </h2>
        <div className="w-16 h-0.5 bg-teal-400 mx-auto mb-3"></div>
        <p className="text-gray-600 text-sm max-w-xl mx-auto">
          Using latest technologies, we deliver quality, reliable and scalable solutions to transform your business.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-950 rounded-lg flex items-center justify-center">
                {service.icon}
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}