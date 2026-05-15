// app/prices/page.tsx  (or components/PricingPage.tsx)
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code, Check, ChevronDown, ChevronRight, Star, Shield,
  Globe, TrendingUp, Smartphone, ArrowRight, Package, Zap,
} from 'lucide-react';

const webDevelopmentPlans = [
  {
    name: 'Simple Website',
    price: 'KES 15,000',
    period: 'one-time',
    popular: false,
    description: 'Perfect for small businesses and startups',
    features: [
      'Up to 5 pages', 'Responsive design', 'Basic SEO setup',
      'Contact form', 'Social media integration', '3 months support', 'Basic hosting setup',
    ],
  },
  {
    name: 'Modern Complex',
    price: 'KES 25,000',
    period: 'one-time',
    popular: true,
    description: 'Advanced solution with dashboard and analytics',
    features: [
      'Unlimited pages', 'Custom dashboard', 'Advanced analytics',
      'User management system', 'Payment integration', 'Admin panel',
      '12 months support', 'Premium hosting', 'Database integration', 'API development',
    ],
  },
  {
    name: 'E-commerce Platform',
    price: 'KES 45,000',
    period: 'one-time',
    popular: false,
    description: 'Full-featured online store solution',
    features: [
      'Product catalog', 'Shopping cart', 'Payment gateways',
      'Inventory management', 'Order tracking', 'Customer accounts',
      'Analytics dashboard', 'Mobile app ready', '24/7 support',
    ],
  },
];

const digitalMarketingServices = [
  {
    name: 'SEO Optimization',
    price: 'KES 15,000',
    period: '/month',
    features: ['Keyword research', 'On-page optimization', 'Technical SEO audit', 'Monthly reports', 'Local SEO setup'],
  },
  {
    name: 'Social Media Management',
    price: 'KES 20,000',
    period: '/month',
    features: ['Content creation', '4 platforms management', 'Daily posting', 'Engagement monitoring', 'Monthly analytics'],
  },
  {
    name: 'Google Ads Campaign',
    price: 'KES 25,000',
    period: '/month',
    features: ['Campaign setup', 'Keyword optimization', 'Ad copy creation', 'Performance tracking', 'Monthly optimization'],
  },
];

const otherServices = [
  { name: 'Mobile App Development', price: 'KES 150,000 – 300,000', icon: Smartphone },
  { name: 'Logo & Branding Design', price: 'KES 8,000 – 25,000', icon: Star },
  { name: 'Domain & Hosting Setup', price: 'KES 5,000/year', icon: Globe },
  { name: 'Website Maintenance', price: 'KES 3,000/month', icon: Shield },
  { name: 'Custom Software Development', price: 'KES 200,000+', icon: Code },
  { name: 'Database Development', price: 'KES 50,000 – 100,000', icon: Package },
];

const commonWebsites = [
  'Business Portfolio', 'E-commerce Store', 'Restaurant Website', 'Real Estate Platform',
  'School Management System', 'Hospital Management', 'Event Management', 'Booking System',
];

const faqs = [
  {
    question: "What's included in the website development cost?",
    answer: "Our pricing includes design, development, basic SEO setup, mobile responsiveness, and initial support period. Additional features like payment integration or custom functionality may have extra costs.",
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'Simple websites take 1-2 weeks, while complex websites with dashboards and analytics take 4-6 weeks. E-commerce platforms typically require 6-8 weeks for completion.',
  },
  {
    question: 'Do you provide hosting and domain services?',
    answer: 'Yes, we help with domain registration and hosting setup. We work with reliable hosting providers and can manage the technical aspects for you.',
  },
  {
    question: 'Can I make changes to my website after it\'s built?',
    answer: "Absolutely! We provide a user-friendly admin panel for content updates. For complex changes, our support team is available to assist you.",
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept M-Pesa, PayPal, Stripe, and bank transfers. We can set up flexible payment plans for larger projects.',
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen bg-[#080c08] text-white overflow-hidden">

      {/* Grid bg */}
      <div
        className="fixed inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(74,222,128,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74,222,128,1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(34,197,94,0.07) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-green-500 mb-3 font-medium">Transparent Pricing</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Simple, Honest <span className="text-green-400">Pricing</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            No hidden fees. No surprises. Just clear pricing for high-quality software solutions built for your budget.
          </p>
        </motion.div>

        {/* ── Web Development Plans ── */}
        <section className="mb-20">
          <SectionLabel>Website Development</SectionLabel>
          <div className="grid md:grid-cols-3 gap-5">
            {webDevelopmentPlans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl border p-7 flex flex-col overflow-hidden transition-all duration-300
                  ${plan.popular
                    ? 'border-green-500/60 bg-green-500/[0.07] shadow-[0_0_40px_rgba(34,197,94,0.1)]'
                    : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
                  }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-green-500 text-black text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl uppercase tracking-wide">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <div className={`inline-flex p-2.5 rounded-xl mb-4 ${plan.popular ? 'bg-green-500/20' : 'bg-slate-800'}`}>
                    <Zap className={`h-5 w-5 ${plan.popular ? 'text-green-400' : 'text-slate-500'}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-sm text-slate-500">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  <span className="text-sm text-slate-500 ml-2">{plan.period}</span>
                </div>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
                      <span className="text-sm text-slate-300">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`group flex items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold transition-all duration-200
                    ${plan.popular
                      ? 'bg-green-500 text-black hover:bg-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]'
                      : 'border border-slate-700 text-slate-300 hover:border-green-500/40 hover:text-white'
                    }`}
                >
                  Get Started
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>

                {plan.popular && (
                  <div className="absolute bottom-0 left-0 h-[2px] w-full bg-green-500/60" />
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Digital Marketing ── */}
        <section className="mb-20">
          <SectionLabel>Digital Marketing Services</SectionLabel>
          <p className="text-slate-500 text-sm text-center mb-8">What we do for you in digital marketing</p>
          <div className="grid md:grid-cols-3 gap-5">
            {digitalMarketingServices.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-green-500/30 transition-all duration-300 overflow-hidden relative"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-slate-800 group-hover:bg-green-500/20 rounded-xl transition-colors">
                    <TrendingUp className="h-4 w-4 text-slate-400 group-hover:text-green-400 transition-colors" />
                  </div>
                  <h3 className="font-semibold text-white">{s.name}</h3>
                </div>
                <div className="mb-5">
                  <span className="text-2xl font-bold text-white">{s.price}</span>
                  <span className="text-sm text-slate-500 ml-1">{s.period}</span>
                </div>
                <ul className="space-y-2">
                  {s.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-green-400 shrink-0" />
                      <span className="text-sm text-slate-400">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-green-500/50 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Other Services ── */}
        <section className="mb-20">
          <SectionLabel>Other Services</SectionLabel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherServices.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-green-500/30 transition-all duration-300"
                >
                  <div className="p-2.5 bg-slate-800 group-hover:bg-green-500/20 rounded-xl transition-colors shrink-0">
                    <Icon className="h-5 w-5 text-slate-400 group-hover:text-green-400 transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white group-hover:text-green-300 transition-colors">{s.name}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{s.price}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── Common Websites ── */}
        <section className="mb-20">
          <SectionLabel>Most Common Website Types</SectionLabel>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {commonWebsites.map((w, i) => (
                <motion.a
                  key={i}
                  href="/contact"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-2 p-3 rounded-xl border border-slate-800 hover:border-green-500/40 hover:bg-green-500/[0.05] transition-all duration-200"
                >
                  <ChevronRight className="h-4 w-4 text-green-500/60 group-hover:text-green-400 group-hover:translate-x-0.5 transition-all" />
                  <span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors">{w}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="mb-20">
          <SectionLabel>Frequently Asked Questions</SectionLabel>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
                viewport={{ once: true }}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden
                  ${openFaq === i ? 'border-green-500/40 bg-green-500/[0.05]' : 'border-slate-800 bg-slate-900/60'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-medium text-white text-sm md:text-base">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 text-slate-500 shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-green-400' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-slate-400 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-green-500/20 bg-green-500/[0.05] p-10 md:p-14 text-center relative overflow-hidden"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, rgba(34,197,94,0.08) 0%, transparent 70%)' }}
          />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Ready to Get Started?</h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">Contact us today for a free consultation and custom quote tailored to your needs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-7 py-3 text-sm font-semibold text-black hover:bg-green-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:-translate-y-0.5"
              >
                Get Free Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/schedule"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-7 py-3 text-sm font-medium text-slate-300 hover:border-green-500/40 hover:text-white transition-all duration-200"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-white">{children}</h2>
      <div className="mt-3 mx-auto w-12 h-[2px] bg-green-500/50 rounded-full" />
    </div>
  );
}