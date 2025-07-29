'use client'
import { motion } from 'framer-motion'
import { Code2, ShieldCheck, Paintbrush2, PiggyBank } from 'lucide-react'
import Link from 'next/link'

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Fast Development',
      icon: <Code2 className="text-yellow-500 w-10 h-10 mb-4" />,
      desc: 'With vast software engineering experience, we ship your solution on time.',
    },
    {
      title: 'Quality Assurance',
      icon: <ShieldCheck className="text-yellow-500 w-10 h-10 mb-4" />,
      desc: 'Our internal and external testers ensure quality and reliability.',
    },
    {
      title: 'Classic Designs',
      icon: <Paintbrush2 className="text-yellow-500 w-10 h-10 mb-4" />,
      desc: 'We craft visually appealing and user-friendly solutions.',
    },
    {
      title: 'Reduced Costs',
      icon: <PiggyBank className="text-yellow-500 w-10 h-10 mb-4" />,
      desc: 'We help you gain strategic advantage with low-cost solutions.',
    },
  ]

  return (
    <section className="py-24 bg-gray-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-md">
              We specialize in software development, hosting, and SEO. We've helped bring ideas to life with sustainable business practices across industries.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 font-bold rounded-full transition"
            >
              Schedule a Consultation
            </Link>
          </motion.div>

          {/* Right Features Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gray-800/40 backdrop-blur-lg p-6 rounded-2xl border border-gray-700"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/60 p-6 rounded-xl hover:shadow-lg transition hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
