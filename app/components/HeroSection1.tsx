// components/HeroSection1.tsx
"use client";

import { motion } from "motion/react";
import { cn } from "../lib/utils";
import { ArrowRight, Zap } from "lucide-react";

export function HeroSection1() {
  return (
    <div className="relative min-h-screen bg-[#080c08] overflow-hidden flex flex-col items-center justify-center">
      
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(74,222,128,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74,222,128,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial green glow center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[700px] h-[500px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(ellipse at center, #22c55e 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Corner glows */}
      <div className="absolute top-0 left-0 w-96 h-96 opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle at top-left, #16a34a, transparent 60%)" }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle at bottom-right, #15803d, transparent 60%)" }} />

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 mb-8 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-400 backdrop-blur-sm"
      >
        
        <span className="font-medium tracking-wide"></span>
      </motion.div>

      {/* Main headline */}
      <div className="relative z-10 px-4 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl leading-[1.08]">
          {"We Build Fast,".split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1, ease: "easeOut" }}
              className="mr-3 inline-block"
            >
              {word}
            </motion.span>
          ))}
          <br />
          {"Scalable".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 + i * 0.04, ease: "easeOut" }}
              className="inline-block text-green-400"
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.1 }}
            className="ml-3 inline-block text-white"
          >
            Apps
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="mx-auto mt-6 max-w-2xl text-base text-slate-400 md:text-lg leading-relaxed"
        >
          Custom software solutions engineered for performance, security, and scalability.
          Empowering Kenyan businesses and innovators worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => window.location.href = '/contact'}
            className="group flex items-center gap-2 rounded-full bg-green-500 px-7 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:-translate-y-0.5"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => window.location.href = '/projects'}
            className="flex items-center gap-2 rounded-full border border-slate-600 bg-transparent px-7 py-3 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-green-500/50 hover:text-white hover:-translate-y-0.5"
          >
            View Projects
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.7 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-slate-800 pt-10"
        >
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "5y+", label: "In Business" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-bold text-green-400 md:text-3xl">{stat.value}</div>
              <div className="mt-1 text-xs text-slate-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Hero dashboard mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.9 }}
        className="relative z-10 mt-20 w-full max-w-5xl px-4 md:px-8"
      >
        <div className="relative rounded-2xl border border-slate-700/60 bg-slate-900/70 backdrop-blur-sm shadow-[0_0_80px_rgba(34,197,94,0.08)] overflow-hidden">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 border-b border-slate-700/60 px-5 py-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/70" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <div className="h-3 w-3 rounded-full bg-green-500/70" />
            </div>
            <div className="mx-auto flex h-6 w-56 items-center rounded-md bg-slate-800 px-3">
              <span className="text-xs text-slate-500">inovasoftwares.co.ke</span>
            </div>
          </div>
          {/* Mockup content */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { label: "Active Projects", val: "12", up: true },
                { label: "Revenue MoM", val: "+38%", up: true },
                { label: "Uptime", val: "99.9%", up: true },
              ].map((m, i) => (
                <div key={i} className="rounded-xl border border-slate-700/50 bg-slate-800/60 p-4">
                  <p className="text-xs text-slate-500 mb-1">{m.label}</p>
                  <p className="text-xl font-bold text-green-400">{m.val}</p>
                </div>
              ))}
            </div>
            {/* Bar chart mockup */}
            <div className="rounded-xl border border-slate-700/50 bg-slate-800/40 p-5">
              <p className="text-xs text-slate-500 mb-4 uppercase tracking-widest">Deployment Activity</p>
              <div className="flex items-end gap-2 h-24">
                {[40, 65, 35, 80, 55, 90, 45, 75, 60, 85, 50, 95].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.4, delay: 2.1 + i * 0.05, ease: "easeOut" }}
                    style={{ height: `${h}%`, transformOrigin: "bottom" }}
                    className={cn(
                      "flex-1 rounded-sm",
                      i === 11 ? "bg-green-400" : "bg-slate-700"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Glow under mockup */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-green-500/10 blur-3xl rounded-full pointer-events-none" />
      </motion.div>

      {/* Trusted by logos row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.3 }}
        className="relative z-10 mt-16 mb-8 px-4 text-center"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-slate-600 mb-6">Trusted by businesses across Kenya</p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {["Facols", "Tsavol", "Startups", "SMEs", "Enterprises"].map((name, i) => (
            <span key={i} className="text-slate-600 font-semibold text-sm tracking-wide hover:text-slate-400 transition-colors cursor-default">
              {name}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}