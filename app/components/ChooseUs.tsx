'use client'
import { motion } from 'framer-motion'
import { Code2, ShieldCheck, Paintbrush2, PiggyBank } from 'lucide-react'
import Link from 'next/link'

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Fast Development',
      icon: <Code2 className="text-yellow-500 w-4 h-4 mb-1" />,
      desc: 'Ship your solution on time with our engineering experience.',
    },
    {
      title: 'Quality Assurance',
      icon: <ShieldCheck className="text-yellow-500 w-4 h-4 mb-1" />,
      desc: 'Ensure quality and reliability with our testing process.',
    },
    {
      title: 'Classic Designs',
      icon: <Paintbrush2 className="text-yellow-500 w-4 h-4 mb-1" />,
      desc: 'Visually appealing and user-friendly solutions.',
    },
    {
      title: 'Reduced Costs',
      icon: <PiggyBank className="text-yellow-500 w-4 h-4 mb-1" />,
      desc: 'Strategic advantage with cost-effective solutions.',
    },
  ]

  return (
    <section className="py-6 bg-slate-950 text-white relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-4 items-start">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-lg font-medium mb-2">Why Choose Us</h2>
            <p className="text-slate-300 text-sm mb-3 max-w-md leading-relaxed">
              We specialize in software development, hosting, and SEO. We&rsquo;ve helped bring ideas to life with sustainable business practices across industries.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-yellow-600 hover:bg-yellow-500 text-white px-4 py-2 text-sm font-medium rounded transition"
            >
              Schedule a Consultation
            </Link>
          </motion.div>

          {/* Right Features Grid */}
          <motion.div
            className="grid grid-cols-2 gap-2 bg-slate-800/40 backdrop-blur-lg p-3 rounded-lg border border-slate-700"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                className="bg-slate-900/60 p-3 rounded hover:shadow-md transition hover:-translate-y-0.5"
                whileHover={{ scale: 1.02 }}
              >
                {item.icon}
                <h3 className="text-xs font-semibold mb-1">{item.title}</h3>
                <p className="text-slate-400 text-[10px] leading-tight">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}