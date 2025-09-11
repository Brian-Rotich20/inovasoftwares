import { motion } from 'framer-motion'
import { Code2, ShieldCheck, Paintbrush2, PiggyBank } from 'lucide-react'
import Link from 'next/link'

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Fast Development',
      icon: <Code2 className="text-white w-5 h-5" />,
      desc: 'Ship your solution on time with our engineering experience.',
    },
    {
      title: 'Quality Assurance',
      icon: <ShieldCheck className="text-white w-5 h-5" />,
      desc: 'Ensure quality and reliability with our testing process.',
    },
    {
      title: 'Classic Designs',
      icon: <Paintbrush2 className="text-white w-5 h-5" />,
      desc: 'Visually appealing and user-friendly solutions.',
    },
    {
      title: 'Reduced Costs',
      icon: <PiggyBank className="text-white w-5 h-5" />,
      desc: 'Strategic advantage with cost-effective solutions.',
    },
  ]

  return (
    <section className="py-8 bg-slate-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96  rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Left Content - Takes 2 columns */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-3">
              <span className="inline-block px-3 py-1 bg-brand/70 text-brand text-xs font-medium rounded-full mb-4">
                Why Choose Us
              </span>
              <h2 className="text-base sm:text-lg font-semibold text-slate-900 mb-3 leading-tight">
                Trusted partner for your digital transformation
              </h2>
            </div>
            
            <p className="text-xs text-slate-600 mb-4 leading-relaxed max-w-sm">
              We specialize in software development, hosting, and SEO. We've helped bring ideas to life with sustainable business practices across industries.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 text-xs font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-slate-900/25"
            >
              Schedule a Consultation
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          {/* Right Features Grid - Takes 3 columns */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  className="group bg-white/70 backdrop-blur-sm border border-slate-200/50 p-4 rounded-xl hover:bg-white hover:shadow-lg hover:shadow-slate-900/10 transition-all duration-300 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gray-950 rounded-lg group-hover:bg-brand  transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-slate-900 mb-1 group-hover:text-slate-800 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}