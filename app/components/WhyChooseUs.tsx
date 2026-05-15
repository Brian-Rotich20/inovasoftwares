// components/WhyChooseUs.tsx
'use client';

import { motion } from 'motion/react';
import { Code2, ShieldCheck, Paintbrush2, PiggyBank, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    title: 'Fast Development',
    icon: Code2,
    desc: 'Ship your solution on time with our agile engineering process and experienced team.',
  },
  {
    title: 'Quality Assurance',
    icon: ShieldCheck,
    desc: 'Ensure reliability and security with our rigorous automated and manual testing.',
  },
  {
    title: 'Classic Designs',
    icon: Paintbrush2,
    desc: 'Visually appealing, user-friendly interfaces built for conversions and retention.',
  },
  {
    title: 'Reduced Costs',
    icon: PiggyBank,
    desc: 'Strategic cost-effective solutions that maximize your ROI from day one.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-[#060a06] overflow-hidden">

      {/* Grid */}
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

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-center">

          {/* Left content */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-green-500 mb-3 font-medium">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
              Your Trusted Partner for<br />
              <span className="text-green-400">Digital Transformation</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
              We specialize in software development, hosting, and SEO. We've helped bring ideas to life with sustainable business practices across industries.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-black hover:bg-green-400 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,197,94,0.35)] hover:-translate-y-0.5"
            >
              Schedule a Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Right features grid */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-green-500/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: 'radial-gradient(circle at 0% 0%, rgba(34,197,94,0.05), transparent 60%)' }} />
                    <div className="relative z-10">
                      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 group-hover:bg-green-500/20 transition-colors duration-300">
                        <Icon className="h-5 w-5 text-slate-400 group-hover:text-green-400 transition-colors duration-300" />
                      </div>
                      <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-green-500/50 transition-all duration-500" />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}