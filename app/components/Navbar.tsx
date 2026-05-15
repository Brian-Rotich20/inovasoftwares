// components/Navbar.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import localFont from 'next/font/local';

const logoFont = localFont({
  src: '../fonts/mongule.ttf',
  weight: '400',
  style: 'normal',
});

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const solutionsItems = [
    {
      title: 'Custom Software Development',
      description: 'Tailored web, desktop, or mobile applications for businesses.',
      href: '/services/custom-software',
    },
    {
      title: 'Web Solutions',
      description: 'Bespoke web applications to streamline your operations.',
      href: '/services/web-solutions',
    },
    {
      title: 'Mobile App Development',
      description: 'iOS and Android apps designed for performance and user experience.',
      href: '/services/mobile-development',
    },
  ];

  const resourcesItems = [
    { name: 'About Inova', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Schedule A Call', href: '/schedule' },
  ];

  const navItems = [
    { name: 'Solutions', href: '/services', hasDropdown: true, dropdownItems: solutionsItems },
    { name: 'Projects', href: '/projects' },
    { name: 'Customers', href: '/customers' },
    { name: 'Pricing', href: '/prices' },
    { name: 'Resources', href: '/resources', hasDropdown: true, dropdownItems: resourcesItems },
  ];

  const toggleMobileDropdown = (itemName: string) => {
    setActiveMobileDropdown(activeMobileDropdown === itemName ? null : itemName);
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    setActiveMobileDropdown(null);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080c08]/95 backdrop-blur-md border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">

            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="flex flex-col items-center leading-none">
                <span className={`text-xl font-bold text-white ${logoFont.className}`}>
                  Inova
                </span>
                <span className="text-xs text-green-400 font-normal -mt-1.5 tracking-wider">
                  Softwares
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <div key={item.name} className="relative group">
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 text-sm text-slate-400 hover:text-white font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-slate-800/50"
                    >
                      {item.name}
                      {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
                    </Link>

                    {/* Desktop dropdown */}
                    {item.hasDropdown && (
                      <div className="absolute top-full left-0 w-72 bg-[#0d120d] border border-slate-700/60 rounded-xl shadow-2xl shadow-black/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
                        <div className="p-3">
                          {item.name === 'Solutions' ? (
                            <div className="space-y-1">
                              {solutionsItems.map((s, i) => (
                                <Link
                                  key={i}
                                  href={s.href}
                                  className="block p-3 rounded-lg hover:bg-slate-800/60 transition-colors group/item"
                                >
                                  <p className="text-sm font-medium text-white group-hover/item:text-green-400 transition-colors mb-0.5">
                                    {s.title}
                                  </p>
                                  <p className="text-xs text-slate-500">{s.description}</p>
                                </Link>
                              ))}
                            </div>
                          ) : (
                            <div className="space-y-1">
                              {resourcesItems.map((r, i) => (
                                <Link
                                  key={i}
                                  href={r.href}
                                  className="block text-sm text-slate-400 hover:text-green-400 px-3 py-2 rounded-lg hover:bg-slate-800/60 transition-colors"
                                >
                                  {r.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex">
              <Link
                href="/contact"
                className="group flex items-center gap-1.5 bg-green-500 hover:bg-green-400 px-4 py-1.5 text-sm font-semibold text-black rounded-full transition-all duration-200 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
              >
                Get Started
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          <div className={`absolute top-0 right-0 h-full w-3/4 max-w-xs bg-[#080c08] border-l border-slate-800/60 shadow-2xl transform transition-transform duration-300 ease-in-out ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col h-full">

              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-800/60">
                <span className={`text-lg font-bold text-white ${logoFont.className}`}>Inova</span>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 text-slate-500 hover:text-white rounded-lg hover:bg-slate-800/50 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Menu */}
              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-1">
                  {navItems.map((item, index) => (
                    <div key={item.name}>
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          onClick={() => !item.hasDropdown && closeMobileMenu()}
                          className="flex-1 text-sm text-slate-300 hover:text-white font-medium py-2.5 px-3 hover:bg-slate-800/50 rounded-lg transition-colors"
                        >
                          {item.name}
                        </Link>
                        {item.hasDropdown && (
                          <button
                            onClick={() => toggleMobileDropdown(item.name)}
                            className="p-2 text-slate-500 hover:text-white"
                          >
                            <ChevronDown className={`w-4 h-4 transition-transform ${activeMobileDropdown === item.name ? 'rotate-180' : ''}`} />
                          </button>
                        )}
                      </div>

                      {item.hasDropdown && activeMobileDropdown === item.name && (
                        <div className="ml-3 mt-1 mb-2 border-l border-slate-800 pl-3 space-y-1">
                          {item.name === 'Solutions' ? (
                            solutionsItems.map((s, i) => (
                              <Link
                                key={i}
                                href={s.href}
                                onClick={closeMobileMenu}
                                className="block p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
                              >
                                <p className="text-xs font-semibold text-white mb-0.5">{s.title}</p>
                                <p className="text-xs text-slate-500">{s.description}</p>
                              </Link>
                            ))
                          ) : (
                            resourcesItems.map((r, i) => (
                              <Link
                                key={i}
                                href={r.href}
                                onClick={closeMobileMenu}
                                className="block text-sm text-slate-400 hover:text-green-400 py-2 px-2 rounded-lg hover:bg-slate-800/50 transition-colors"
                              >
                                {r.name}
                              </Link>
                            ))
                          )}
                        </div>
                      )}

                      {index < navItems.length - 1 && (
                        <hr className="border-slate-800/40 mx-2" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer CTA */}
              <div className="p-4 border-t border-slate-800/60">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-black px-4 py-2.5 rounded-full text-sm font-semibold transition-colors"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="h-14" />
    </>
  );
}