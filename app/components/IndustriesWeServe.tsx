// components/IndustriesWeServe.tsx
'use client';

import { motion } from 'motion/react';
import {
  Building2, Heart, GraduationCap, Truck, Code, HardHat,
  ShoppingCart, Plane, Shield, TrendingUp, Film, Trophy,
  ArrowRight,
} from 'lucide-react';

const industries = [
  { title: "Finance & Banking", icon: Building2 },
  { title: "Healthcare", icon: Heart },
  { title: "Education", icon: GraduationCap },
  { title: "Transport & Automotive", icon: Truck },
  { title: "Technology", icon: Code },
  { title: "Construction", icon: HardHat },
  { title: "Retail & E-commerce", icon: ShoppingCart },
  { title: "Travel & Hospitality", icon: Plane },
  { title: "Insurance", icon: Shield },
  { title: "Trade", icon: TrendingUp },
  { title: "Media & Entertainment", icon: Film },
  { title: "Sports", icon: Trophy },
];

export default function IndustriesWeServe() {
  return (
    <section className="relative py-24 bg-[#060a06] overflow-hidden">

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(74,222,128,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74,222,128,1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(34,197,94,0.07) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">

        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-green-500 mb-3 font-medium">Our Reach</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Industries We <span className="text-green-400">Serve</span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl leading-relaxed">
            From startups to enterprise, we deliver tailored solutions across diverse industries with cutting-edge technology.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/50 p-4 text-center
                  hover:border-green-500/40 hover:bg-green-500/[0.05] transition-all duration-300 hover:-translate-y-1 cursor-default"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 group-hover:bg-green-500/20 transition-colors duration-300">
                  <Icon className="h-5 w-5 text-slate-400 group-hover:text-green-400 transition-colors duration-300" />
                </div>
                <p className="text-xs font-medium text-slate-400 group-hover:text-slate-200 transition-colors duration-300 leading-tight">
                  {industry.title}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="text-white font-semibold text-lg mb-1">Don't see your industry?</p>
            <p className="text-slate-400 text-sm">We adapt our expertise to meet unique business needs across all sectors.</p>
          </div>
          <button
            onClick={() => window.location.href = '/contact'}
            className="group flex items-center gap-2 whitespace-nowrap rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-black hover:bg-green-400 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,197,94,0.35)] hover:-translate-y-0.5"
          >
            Discuss Your Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}