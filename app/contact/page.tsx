// app/contact/page.tsx
'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, ArrowRight, Clock } from 'lucide-react';

const FaWhatsapp = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.863 3.488"/>
  </svg>
);

const contactMethods = [
  { icon: Phone, label: 'Phone', value: '+254 720 060 728', href: 'tel:+254720060728', color: 'text-green-400 bg-green-500/10 border-green-500/20' },
  { icon: Mail, label: 'Email', value: 'ralphrotich@gmail.com', href: 'mailto:ralphrotich@gmail.com', color: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
  { icon: MapPin, label: 'Location', value: 'Nairobi, Kenya (00100)', href: '#', color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
  { icon: FaWhatsapp, label: 'WhatsApp', value: '+254 720 060 728', href: 'https://wa.me/254720060728', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
];

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#080c08] text-white overflow-hidden">
      {/* Grid */}
      <div className="fixed inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: `linear-gradient(rgba(74,222,128,1) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,1) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(34,197,94,0.07) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-green-500 mb-3 font-medium">Contact Us</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95]">
              Get In <span className="text-green-400">Touch</span>
            </h1>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              We'd love to hear from you. Reach out for inquiries, support, or collaboration opportunities.
            </p>
          </div>
        </motion.div>

        {/* Contact method cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {contactMethods.map((method, i) => {
            const Icon = method.icon;
            return (
              <motion.a key={i} href={method.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group rounded-2xl border p-5 hover:-translate-y-1 transition-all duration-300 ${method.color}`}>
                <div className="mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-xs text-slate-500 mb-1 uppercase tracking-wider">{method.label}</p>
                <p className="text-sm text-white font-medium break-all leading-snug group-hover:text-green-300 transition-colors">{method.value}</p>
              </motion.a>
            );
          })}
        </div>

        {/* Main content: info + image */}
        <div className="grid lg:grid-cols-2 gap-6 mb-14">

          {/* Left: detailed contact info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 md:p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Let's <span className="text-green-400">Connect</span></h2>
              <p className="text-slate-500 text-sm mb-8">We're available and ready to help you bring your idea to life.</p>

              <div className="space-y-6">
                {[
                  { Icon: Phone, title: 'Call Us', sub: 'Mon–Fri, 8AM–6PM EAT', val: '+254 720 060 728', href: 'tel:+254720060728' },
                  { Icon: Mail, title: 'Email Us', sub: 'We respond within 24 hours', val: 'ralphrotich@gmail.com', href: 'mailto:ralphrotich@gmail.com' },
                  { Icon: MapPin, title: 'Visit Us', sub: 'Come say hello', val: 'Nairobi, Kenya', href: '#' },
                  { Icon: Clock, title: 'Working Hours', sub: 'We\'re available', val: 'Mon – Fri: 8AM – 6PM EAT', href: '#' },
                ].map(({ Icon, title, sub, val, href }, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="p-2.5 bg-slate-800 hover:bg-green-500/20 rounded-xl transition-colors shrink-0">
                      <Icon className="h-4 w-4 text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white mb-0.5">{title}</p>
                      <p className="text-xs text-slate-500 mb-1">{sub}</p>
                      <a href={href} className="text-sm text-green-400 hover:text-green-300 transition-colors break-all">{val}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-10 pt-8 border-t border-slate-800">
              <p className="text-sm font-semibold text-white mb-3">Prefer instant chat?</p>
              <a href="https://wa.me/254720060728" target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500/50 px-5 py-3 rounded-full transition-all duration-200">
                <FaWhatsapp className="h-4 w-4 text-emerald-400" />
                <span className="text-sm font-medium text-emerald-400">Chat on WhatsApp</span>
                <ArrowRight className="h-3.5 w-3.5 text-emerald-400 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </motion.div>

          {/* Right: visual / phone mockup */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }} viewport={{ once: true }}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 flex items-center justify-center relative overflow-hidden">
            {/* Glow */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(circle at 50% 50%, rgba(34,197,94,0.06), transparent 60%)' }} />
            <img src="/smartphone.png" alt="Contact visual"
              className="relative z-10 w-full max-w-sm h-auto object-contain" />
          </motion.div>
        </div>

        {/* CTA Banner */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
          className="rounded-2xl border border-green-500/20 bg-green-500/[0.05] p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, rgba(34,197,94,0.08) 0%, transparent 70%)' }} />
          <div className="relative z-10">
            <p className="text-xs uppercase tracking-[0.2em] text-green-500 mb-4 font-medium">Let's Work Together</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Ready to Start Your Project?</h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto text-sm leading-relaxed">
              Get in touch today and let's bring your ideas to life with our expertise and dedication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+254720060728"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-7 py-3 text-sm font-semibold text-black hover:bg-green-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:-translate-y-0.5">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              <a href="mailto:ralphrotich@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-7 py-3 text-sm font-medium text-slate-300 hover:border-green-500/40 hover:text-white transition-all duration-200">
                <Mail className="h-4 w-4" />
                Send Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}