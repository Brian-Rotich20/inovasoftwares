// components/GlobalSection.tsx
'use client';

import { motion } from 'motion/react';
import { Globe, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const regions = [
  { name: 'East Africa', countries: 'Kenya · Uganda · Tanzania · Rwanda', projects: 38, primary: true },
  { name: 'West Africa', countries: 'Nigeria · Ghana · Côte d\'Ivoire', projects: 11, primary: false },
  { name: 'Europe', countries: 'UK · Germany · Netherlands', projects: 7, primary: false },
  { name: 'North America', countries: 'USA · Canada', projects: 5, primary: false },
];

const dots = [
  // East Africa cluster (primary)
  { x: '60%', y: '54%', size: 'large', pulse: true, label: 'Nairobi HQ' },
  { x: '59%', y: '50%', size: 'small', pulse: false, label: 'Kampala' },
  { x: '61%', y: '57%', size: 'small', pulse: false, label: 'Dar es Salaam' },
  { x: '60%', y: '49%', size: 'small', pulse: false, label: 'Kigali' },
  // West Africa
  { x: '46%', y: '52%', size: 'medium', pulse: false, label: 'Lagos' },
  { x: '44%', y: '51%', size: 'small', pulse: false, label: 'Accra' },
  // Europe
  { x: '50%', y: '28%', size: 'medium', pulse: false, label: 'London' },
  { x: '52%', y: '26%', size: 'small', pulse: false, label: 'Berlin' },
  // North America
  { x: '22%', y: '33%', size: 'medium', pulse: false, label: 'New York' },
  { x: '18%', y: '36%', size: 'small', pulse: false, label: 'Toronto' },
];

const stats = [
  { value: '10+', label: 'Countries' },
  { value: '61+', label: 'Projects' },
  { value: '5+', label: 'Years' },
  { value: '3', label: 'Continents' },
];

export default function GlobalSection() {
  return (
    <section className="relative py-24 bg-[#080c08] overflow-hidden">

      {/* Grid background */}
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

      {/* Radial glow */}
      <div
        className="absolute top-1/2 right-0 w-[700px] h-[700px] -translate-y-1/2 translate-x-1/3 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">

        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-green-500 mb-3 font-medium">Global Reach</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Building the Future,<br />
              <span className="text-green-400">Across Borders</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              Headquartered in Nairobi, serving clients across Africa, Europe, and North America.
            </p>
          </div>
        </motion.div>

        {/* World map visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden mb-12"
          style={{ paddingBottom: '48%' }}
        >
          {/* SVG world map dots (simplified continents silhouette via dots grid) */}
          <div className="absolute inset-0">
            {/* World map dot-grid background */}
            <svg
              className="absolute inset-0 w-full h-full opacity-[0.15]"
              viewBox="0 0 1000 500"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Simplified continent-shaped dot clusters */}
              {/* North America */}
              {Array.from({ length: 280 }).map((_, i) => {
                const col = i % 20;
                const row = Math.floor(i / 20);
                const x = 80 + col * 12;
                const y = 60 + row * 12;
                const inContinent =
                  (row < 4 && col > 3 && col < 16) ||
                  (row >= 4 && row < 8 && col > 2 && col < 14) ||
                  (row >= 8 && row < 12 && col > 4 && col < 11) ||
                  (row >= 12 && row < 14 && col > 5 && col < 9);
                return inContinent ? (
                  <circle key={`na-${i}`} cx={x} cy={y} r="1.5" fill="#22c55e" />
                ) : null;
              })}
              {/* South America */}
              {Array.from({ length: 140 }).map((_, i) => {
                const col = i % 10;
                const row = Math.floor(i / 10);
                const x = 220 + col * 12;
                const y = 220 + row * 12;
                const inContinent =
                  (row < 4 && col > 1 && col < 8) ||
                  (row >= 4 && row < 9 && col > 0 && col < 9) ||
                  (row >= 9 && row < 14 && col > 1 && col < 7);
                return inContinent ? (
                  <circle key={`sa-${i}`} cx={x} cy={y} r="1.5" fill="#22c55e" />
                ) : null;
              })}
              {/* Europe */}
              {Array.from({ length: 120 }).map((_, i) => {
                const col = i % 12;
                const row = Math.floor(i / 12);
                const x = 460 + col * 11;
                const y = 60 + row * 11;
                const inContinent =
                  (row < 5 && col > 1 && col < 10) ||
                  (row >= 5 && row < 9 && col > 0 && col < 11);
                return inContinent ? (
                  <circle key={`eu-${i}`} cx={x} cy={y} r="1.5" fill="#22c55e" />
                ) : null;
              })}
              {/* Africa */}
              {Array.from({ length: 200 }).map((_, i) => {
                const col = i % 14;
                const row = Math.floor(i / 14);
                const x = 460 + col * 12;
                const y = 190 + row * 12;
                const inContinent =
                  (row < 4 && col > 1 && col < 12) ||
                  (row >= 4 && row < 10 && col > 0 && col < 13) ||
                  (row >= 10 && row < 15 && col > 2 && col < 11) ||
                  (row >= 15 && row < 18 && col > 4 && col < 8);
                return inContinent ? (
                  <circle key={`af-${i}`} cx={x} cy={y} r="1.5" fill="#22c55e" />
                ) : null;
              })}
              {/* Asia */}
              {Array.from({ length: 300 }).map((_, i) => {
                const col = i % 20;
                const row = Math.floor(i / 20);
                const x = 590 + col * 12;
                const y = 60 + row * 12;
                const inContinent =
                  (row < 5 && col > 2 && col < 18) ||
                  (row >= 5 && row < 12 && col > 0 && col < 19) ||
                  (row >= 12 && row < 15 && col > 4 && col < 16);
                return inContinent ? (
                  <circle key={`as-${i}`} cx={x} cy={y} r="1.5" fill="#22c55e" />
                ) : null;
              })}
              {/* Australia */}
              {Array.from({ length: 80 }).map((_, i) => {
                const col = i % 10;
                const row = Math.floor(i / 10);
                const x = 760 + col * 12;
                const y = 310 + row * 12;
                const inContinent =
                  (row < 3 && col > 1 && col < 9) ||
                  (row >= 3 && row < 8 && col > 0 && col < 9);
                return inContinent ? (
                  <circle key={`au-${i}`} cx={x} cy={y} r="1.5" fill="#22c55e" />
                ) : null;
              })}
            </svg>

            {/* Connection lines from Nairobi to other points */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice">
              {/* Nairobi to Lagos */}
              <path d="M 600 270 Q 520 200 440 255" fill="none" stroke="#22c55e" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
              {/* Nairobi to London */}
              <path d="M 600 270 Q 560 160 500 145" fill="none" stroke="#22c55e" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
              {/* Nairobi to New York */}
              <path d="M 600 270 Q 400 100 220 165" fill="none" stroke="#22c55e" strokeWidth="1" strokeDasharray="4 4" opacity="0.25" />
            </svg>

            {/* Location dots overlay */}
            {dots.map((dot, i) => (
              <div
                key={i}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: dot.x, top: dot.y }}
              >
                {dot.pulse && (
                  <>
                    <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-40 scale-150" />
                    <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20 scale-300 animation-delay-500" />
                  </>
                )}
                <div
                  className={`rounded-full border-2 border-[#080c08] relative z-10
                    ${dot.size === 'large' ? 'h-4 w-4 bg-green-400' :
                      dot.size === 'medium' ? 'h-3 w-3 bg-green-500' :
                      'h-2 w-2 bg-green-700'}`}
                />
                {dot.size !== 'small' && (
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="text-[9px] text-green-400/80 font-medium bg-slate-900/80 px-1.5 py-0.5 rounded">
                      {dot.label}
                    </span>
                  </div>
                )}
              </div>
            ))}

            {/* HQ badge */}
            <div className="absolute" style={{ left: '60%', top: '54%' }}>
              <div className="ml-4 -mt-8 bg-green-500/20 border border-green-500/40 rounded-lg px-3 py-1.5 whitespace-nowrap">
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-3 w-3 text-green-400" />
                  <span className="text-xs text-green-400 font-semibold">Nairobi, Kenya</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-0.5">Headquarters</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="text-center rounded-2xl border border-slate-800 bg-slate-900/60 py-6"
            >
              <p className="text-3xl font-bold text-green-400">{s.value}</p>
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Region cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {regions.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className={`group rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 overflow-hidden relative
                ${r.primary
                  ? 'border-green-500/40 bg-green-500/[0.07] hover:border-green-400/60'
                  : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
                }`}
            >
              {r.primary && (
                <span className="absolute top-3 right-3 text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full font-medium">Primary</span>
              )}
              <p className="font-semibold text-white mb-1">{r.name}</p>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">{r.countries}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-green-400">{r.projects}</span>
                <span className="text-xs text-slate-600">projects</span>
              </div>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 bg-green-500/50" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-500 text-sm mb-5">Wherever you are, we build for you.</p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-green-500 px-7 py-3 text-sm font-semibold text-black hover:bg-green-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:-translate-y-0.5"
          >
            <Globe className="h-4 w-4" />
            Start a Global Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}