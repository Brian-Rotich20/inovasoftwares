'use client'
import { motion } from 'framer-motion'
import { Code2, ShieldCheck, Paintbrush2, PiggyBank } from 'lucide-react'
import Link from 'next/link'

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Fast Development',
      icon: <Code2 className="text-blue-500 w-6 h-6 mb-2" />,
      desc: 'With vast software engineering experience, we ship your solution on time.',
    },
    {
      title: 'Quality Assurance',
      icon: <ShieldCheck className="text-blue-500 w-6 h-6 mb-2" />,
      desc: 'Our internal and external testers ensure quality and reliability.',
    },
    {
      title: 'Classic Designs',
      icon: <Paintbrush2 className="text-blue-500 w-6 h-6 mb-2" />,
      desc: 'We craft visually appealing and user-friendly solutions.',
    },
    {
      title: 'Reduced Costs',
      icon: <PiggyBank className="text-blue-500 w-6 h-6 mb-2" />,
      desc: 'We help you gain strategic advantage with low-cost solutions.',
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-slate-950 text-white relative">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Why Choose Us</h2>
            <p className="text-slate-300 text-sm md:text-base mb-6 max-w-md leading-relaxed">
              We specialize in software development, hosting, and SEO. We&rsquo;ve helped bring ideas to life with sustainable business practices across industries.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 md:px-8 py-2.5 md:py-3 font-semibold rounded-lg transition text-sm md:text-base"
            >
              Schedule a Consultation
            </Link>
          </motion.div>

          {/* Right Features Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 bg-slate-800/40 backdrop-blur-lg p-4 md:p-6 rounded-xl border border-slate-700"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                className="bg-slate-900/60 p-4 md:p-5 rounded-lg hover:shadow-lg transition hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
              >
                {item.icon}
                <h3 className="text-base md:text-lg font-semibold mb-1.5 md:mb-2">{item.title}</h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}