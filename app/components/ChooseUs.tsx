'use client';
import { Code2, ShieldCheck, Paintbrush2, PiggyBank } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ChooseUs() {
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
  ];

  return (
    <section className="py-20 bg-gray-900 text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4"
      >
        <h2 className="text-4xl font-bold mb-4">
          Why Choose Us
        </h2>
        <p className="text-lg text-gray-300 mb-12">
          We specialize in software development, hosting, and SEO. We've helped bring ideas to life with sustainable business practices across industries.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8 rounded-xl hover:shadow-xl transition hover:-translate-y-1"
              whileHover={{ scale: 1.02 }}
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/contact"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 font-bold rounded-full transition"
          >
            Schedule a Consultation
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
