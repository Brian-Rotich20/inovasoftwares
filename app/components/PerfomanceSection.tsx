// components/PerformanceSection.tsx
'use client';

import { motion } from 'motion/react';
import { TrendingUp, Users, Zap, ArrowUpRight } from 'lucide-react';

const metrics = [
  {
    value: '+40%',
    label: 'Avg. Efficiency Boost',
    description: 'Clients report significant operational efficiency gains after deployment.',
    icon: TrendingUp,
    highlight: true,
  },
  {
    value: '168K+',
    label: 'End Users Served',
    description: 'Real users across platforms built and maintained by Inova.',
    icon: Users,
    highlight: false,
  },
  {
    value: '99.9%',
    label: 'System Uptime',
    description: 'Our infrastructure and deployment standards ensure near-perfect uptime.',
    icon: Zap,
    highlight: false,
  },
  {
    value: '3×',
    label: 'Faster Time to Market',
    description: 'Agile sprints and streamlined processes get you to launch 3× faster.',
    icon: ArrowUpRight,
    highlight: false,
  },
];

const improvements = [
  { label: 'Web Performance Score', before: 52, after: 94, unit: '/100' },
  { label: 'Page Load Time', before: 8.2, after: 1.4, unit: 's', reverse: true },
  { label: 'Conversion Rate', before: 1.8, after: 6.2, unit: '%' },
  { label: 'Customer Retention', before: 61, after: 89, unit: '%' },
];

export default function PerformanceSection() {
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

      {/* Glow */}
      <div
        className="absolute top-1/2 left-0 w-[600px] h-[600px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)' }}
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
          <p className="text-xs uppercase tracking-[0.25em] text-green-500 mb-3 font-medium">Proven Results</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Business <span className="text-green-400">Improvements</span><br className="hidden sm:block" /> & Performance
            </h2>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              Real numbers from real projects. We measure impact, not just delivery.
            </p>
          </div>
        </motion.div>

        {/* Metrics row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className={`group relative rounded-2xl border p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1
                  ${m.highlight
                    ? 'border-green-500/50 bg-green-500/10 hover:border-green-400/70'
                    : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
                  }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2 rounded-lg ${m.highlight ? 'bg-green-500/20' : 'bg-slate-800'}`}>
                    <Icon className={`h-4 w-4 ${m.highlight ? 'text-green-400' : 'text-slate-400'}`} />
                  </div>
                  {m.highlight && (
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full font-medium">Top</span>
                  )}
                </div>
                <p className="text-3xl font-bold text-white mb-1">{m.value}</p>
                <p className="text-xs font-semibold text-green-400/80 mb-2 uppercase tracking-wider">{m.label}</p>
                <p className="text-xs text-slate-500 leading-relaxed hidden lg:block">{m.description}</p>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 bg-green-500/50" />
              </motion.div>
            );
          })}
        </div>

        {/* Before/After improvements */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: chart bars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-1">Before vs After Inova</p>
            <h3 className="text-lg font-semibold text-white mb-8">Average Client Metrics</h3>

            <div className="space-y-7">
              {improvements.map((imp, i) => {
                const maxVal = Math.max(imp.before, imp.after);
                const beforePct = (imp.before / maxVal) * 100;
                const afterPct = (imp.after / maxVal) * 100;
                const improved = imp.reverse
                  ? imp.before > imp.after
                  : imp.after > imp.before;

                return (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-300">{imp.label}</span>
                      <span className={`text-xs font-semibold ${improved ? 'text-green-400' : 'text-red-400'}`}>
                        {imp.reverse
                          ? `${((imp.before - imp.after) / imp.before * 100).toFixed(0)}% faster`
                          : `+${((imp.after - imp.before) / imp.before * 100).toFixed(0)}%`
                        }
                      </span>
                    </div>
                    <div className="space-y-1.5">
                      {/* Before bar */}
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-600 w-12 shrink-0">Before</span>
                        <div className="flex-1 h-5 bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${beforePct}%` }}
                            transition={{ duration: 0.8, delay: 0.1 + i * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full bg-slate-600 rounded-full"
                          />
                        </div>
                        <span className="text-xs text-slate-400 w-14 text-right">{imp.before}{imp.unit}</span>
                      </div>
                      {/* After bar */}
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-green-500/70 w-12 shrink-0">After</span>
                        <div className="flex-1 h-5 bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${afterPct}%` }}
                            transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full bg-green-500 rounded-full"
                          />
                        </div>
                        <span className="text-xs text-green-400 font-medium w-14 text-right">{imp.after}{imp.unit}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: dashboard card mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Live analytics card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Live Performance</p>
                  <p className="text-white font-semibold mt-0.5">Real-time Monitoring</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs text-green-400">Live</span>
                </div>
              </div>

              {/* Mini bar chart */}
              <div className="flex items-end gap-1.5 h-20 mb-4">
                {[30, 55, 42, 70, 48, 85, 60, 90, 65, 95, 72, 88].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.04 }}
                    viewport={{ once: true }}
                    style={{ height: `${h}%`, transformOrigin: 'bottom' }}
                    className={`flex-1 rounded-sm ${i >= 9 ? 'bg-green-400' : 'bg-slate-700'}`}
                  />
                ))}
              </div>
              <div className="flex justify-between text-xs text-slate-600">
                <span>Jan</span><span>Jun</span><span>Dec</span>
              </div>
            </div>

            {/* Two small stat cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-green-500/30 bg-green-500/[0.07] p-5">
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="h-1.5 w-1.5 bg-green-400 rounded-full" />
                  <span className="text-xs text-slate-500">Revenue</span>
                </div>
                <p className="text-2xl font-bold text-white">$4.5M</p>
                <p className="text-xs text-green-400 mt-1">↑ 45.6% MoM</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="h-1.5 w-1.5 bg-slate-500 rounded-full" />
                  <span className="text-xs text-slate-500">Avg Rate</span>
                </div>
                <p className="text-2xl font-bold text-white">$4.5K</p>
                <p className="text-xs text-green-400 mt-1">↑ 45.66%</p>
              </div>
            </div>

            {/* User count card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 flex items-center gap-4">
              <div className="flex -space-x-2">
                {['bg-green-500', 'bg-emerald-400', 'bg-teal-500', 'bg-green-600', 'bg-slate-600'].map((c, i) => (
                  <div key={i} className={`h-9 w-9 rounded-full border-2 border-slate-900 ${c} flex items-center justify-center text-xs font-bold text-white`}>
                    {['A','R','K','S','M'][i]}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-lg font-bold text-white">168K+</p>
                <p className="text-xs text-slate-500">Realtime users across platforms</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}