import React from 'react';
import { 
  FaLaptopCode, 
  FaMobileAlt, 
  FaShoppingCart, 
  FaPalette, 
  FaCloud, 
  FaLightbulb, 
  FaBullhorn, 
  FaClipboardCheck, 
  FaSearch,
  FaComments,
  FaProjectDiagram,
  FaCode,
  FaRocket
} from 'react-icons/fa';

const services = [
  {
    icon: <FaLaptopCode className="text-xl text-amber-500" />,
    title: 'Custom Web Applications',
    description: 'We build scalable, modern web apps tailored to your business goals.',
  },
  {
    icon: <FaMobileAlt className="text-xl text-amber-500" />,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps with top performance and sleek design.',
  },
  {
    icon: <FaShoppingCart className="text-xl text-amber-500" />,
    title: 'E-Commerce Solutions',
    description: 'Robust online stores with secure payments, inventory, and analytics.',
  },
  {
    icon: <FaPalette className="text-xl text-amber-500" />,
    title: 'UI/UX Design',
    description: 'User-centered design for visually appealing and intuitive interfaces.',
  },
  {
    icon: <FaCloud className="text-xl text-amber-500" />,
    title: 'Cloud & DevOps Services',
    description: 'Deployment, scaling, and automation with top cloud providers.',
  },
  {
    icon: <FaLightbulb className="text-xl text-amber-500" />,
    title: 'IT Consulting',
    description: 'Strategic technology advice to optimize your IT infrastructure and processes.',
  },
  {
    icon: <FaBullhorn className="text-xl text-amber-500" />,
    title: 'Digital Marketing',
    description: 'Enhance your online presence and reach the right audience through digital channels.',
  },
  {
    icon: <FaClipboardCheck className="text-xl text-amber-500" />,
    title: 'QA & Testing',
    description: 'Ensure software quality with automated and manual testing services.',
  },
  {
    icon: <FaSearch className="text-xl text-amber-500" />,
    title: 'SEO Services',
    description: 'Improve search engine visibility and increase website traffic organically.',
  },
];

const processSteps = [
  {
    number: '01',
    icon: <FaComments className="text-lg" />,
    title: 'Tell Us What You Need',
    description: 'Share your vision and requirements with our team'
  },
  {
    number: '02',
    icon: <FaProjectDiagram className="text-lg" />,
    title: 'Plan the Best Approach',
    description: 'We analyze and create a strategic roadmap'
  },
  {
    number: '03',
    icon: <FaCode className="text-lg" />,
    title: 'Build It for You',
    description: 'Our experts develop your solution with precision'
  },
  {
    number: '04',
    icon: <FaRocket className="text-lg" />,
    title: 'Launch & Support',
    description: 'Deploy your project and provide ongoing support'
  }
];

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our <span className="text-amber-500">Services</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We deliver cutting-edge technology solutions that drive your business forward
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-amber-200"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              How We <span className="text-amber-500">Work</span>
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm">
              Our streamlined process ensures your project is delivered on time and exceeds expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connecting Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-amber-200 to-transparent transform -translate-x-1/2 z-0" />
                )}
                
                <div className="relative z-10 text-center">
                  {/* Circular Number Badge */}
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white font-bold text-sm">{step.number}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-3 text-slate-600">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed px-2">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-slate-300 mb-8 text-sm max-w-2xl mx-auto">
              Let's discuss how we can help bring your ideas to life with our expertise and dedication
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-medium transition-colors text-sm">
                Get Started
              </button>
              <button className="border border-slate-600 hover:border-slate-500 text-white px-8 py-3 rounded-lg font-medium transition-colors text-sm">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;