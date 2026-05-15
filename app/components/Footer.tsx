// components/Footer.tsx
'use client';

import { ArrowRight, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const services = [
  'Web Development', 'Mobile Apps', 'E-Commerce',
  'UI/UX Design', 'Cloud Services', 'SEO Services',
];

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '#team' },
  { name: 'Projects', href: '/projects' },
  { name: 'Pricing', href: '/prices' },
  { name: 'Contact', href: '#contact' },
];

const socials = [
  { icon: Facebook, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Instagram, href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#040704] border-t border-slate-800/60 overflow-hidden">

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(74,222,128,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74,222,128,1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(34,197,94,0.05) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">

        {/* CTA banner */}
        <div className="py-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-slate-800/60">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Ready to build something great?</h3>
            <p className="text-sm text-slate-400">Let's talk about your project — no commitment, just ideas.</p>
          </div>
          <a
            href="/contact"
            className="group shrink-0 inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-black hover:bg-green-400 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] hover:-translate-y-0.5"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-4">
              <span className="text-xl font-bold text-white">
                Inova <span className="text-green-400">Softwares</span>
              </span>
              <p className="text-xs text-green-500/70 mt-0.5 uppercase tracking-widest">Nairobi · Kenya</p>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Innovating Kenyan businesses and global clients with modern, scalable software solutions.
            </p>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="h-9 w-9 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-green-500/40 hover:bg-green-500/10 flex items-center justify-center text-slate-500 hover:text-green-400 transition-all duration-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((s, i) => (
                <li key={i}>
                  <a href="#services" className="group flex items-center gap-1.5 text-sm text-slate-500 hover:text-green-400 transition-colors duration-200">
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l, i) => (
                <li key={i}>
                  <a href={l.href} className="group flex items-center gap-1.5 text-sm text-slate-500 hover:text-green-400 transition-colors duration-200">
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <p className="text-sm text-slate-400">00100, Nairobi, Kenya</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-green-500 shrink-0" />
                <a href="tel:+254720060728" className="text-sm text-slate-400 hover:text-green-400 transition-colors">
                  +254 720 060 728
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-green-500 shrink-0" />
                <a href="mailto:ralphrotich@gmail.com" className="text-sm text-slate-400 hover:text-green-400 transition-colors">
                  ralphrotich@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/60 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">© 2025 Inova Softwares. All rights reserved.</p>
          <div className="flex gap-5">
            {[['Privacy Policy', 'privacy'], ['Terms of Service', 'terms'], ['FAQs', 'faq']].map(([label, href]) => (
              <a key={href} href={href} className="text-xs text-slate-600 hover:text-green-400 transition-colors">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}