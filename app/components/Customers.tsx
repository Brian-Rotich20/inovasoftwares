// components/CustomersSection.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, Quote, Star } from 'lucide-react';

const customerTestimonials = [
  {
    company: 'Facols Limited',
    industry: 'Ecommerce Services',
    metric: '+40%',
    metricLabel: 'Efficiency Boost',
    testimonial:
      "Inova Softwares transformed our business operations with their custom web application. The booking system they developed streamlined our client appointments and increased our efficiency by 40%. Their team's expertise and dedication to quality is outstanding.",
    customerProfile: {
      name: 'Sylus Obol',
      position: 'Operations Manager',
      image: '/sylus.jpeg',
    },
  },
  {
    company: 'Tsavol',
    industry: 'Printing and Branding',
    metric: '+60%',
    metricLabel: 'Sales Increase',
    testimonial:
      "Working with Inova Softwares on our website application was an exceptional experience. They delivered a beautiful, user-friendly e-commerce app that exceeded our expectations. Our sales have increased by 60% since launch, and customer engagement has never been higher.",
    customerProfile: {
      name: 'Kennedy K',
      position: 'CEO & Founder',
      image: '/kennedy.jpeg',
    },
  },
];

export default function CustomersSection() {
  return (
    <section className="relative py-24 bg-[#080c08] overflow-hidden">

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
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(34,197,94,0.05) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">

        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-green-500 mb-3 font-medium">Testimonials</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                What Our <span className="text-green-400">Customers</span><br className="hidden sm:block" /> Have to Say
              </h2>
              <p className="text-slate-400 text-base max-w-xl">
                Real results from real businesses. Here's what our clients say about working with Inova.
              </p>
            </div>
            <Link
              href="/customers"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-700 bg-transparent px-5 py-2.5 text-sm font-medium text-slate-300 hover:border-green-500/50 hover:text-white transition-all duration-200"
            >
              All Stories
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {customerTestimonials.map((customer, index) => (
            <motion.div
              key={customer.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-8 hover:border-green-500/30 transition-all duration-300 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(circle at 0% 0%, rgba(34,197,94,0.05), transparent 60%)" }} />

              {/* Top row */}
              <div className="relative z-10 flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white">{customer.company}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{customer.industry}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-400">{customer.metric}</p>
                  <p className="text-xs text-slate-500">{customer.metricLabel}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="relative z-10 flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-green-400 text-green-400" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative z-10 mb-8">
                <Quote className="h-5 w-5 text-green-500/50 mb-3" />
                <p className="text-slate-300 text-sm leading-relaxed">
                  "{customer.testimonial}"
                </p>
              </div>

              {/* Profile */}
              <div className="relative z-10 flex items-center gap-3 pt-6 border-t border-slate-800">
                <div className="h-10 w-10 rounded-full overflow-hidden border border-slate-700 flex-shrink-0">
                  <Image
                    src={customer.customerProfile.image}
                    alt={customer.customerProfile.name}
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{customer.customerProfile.name}</p>
                  <p className="text-xs text-slate-500">{customer.customerProfile.position} · {customer.company}</p>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-green-500/50 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-500 text-sm mb-5">Ready to join our satisfied customers?</p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-green-500 px-7 py-3 text-sm font-semibold text-black hover:bg-green-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:-translate-y-0.5"
          >
            Start Your Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}