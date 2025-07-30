'use client'
import React, { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Code, ArrowRight, Phone } from 'lucide-react'

export default function ProfessionalNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Teams', href: '#teams' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Prices', href: '#prices' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg border-b border-slate-700/50' 
          : 'bg-slate-900/80 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Inova <span className="text-blue-400">Softwares</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-white font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center space-x-3">
              <button className="flex items-center space-x-1 bg-slate-800 hover:bg-slate-700 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 border border-slate-600">
                <Phone className="w-3 h-3" />
                <span>Call Us</span>
              </button>
              <button className="flex items-center space-x-1 bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
                <span>Get Quote</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-300 hover:text-white p-2 rounded-md transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-slate-800/95 backdrop-blur-lg border-t border-slate-700/50">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Logo */}
              <div className="flex items-center justify-center space-x-2 pb-4 border-b border-slate-700">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">
                  Inova <span className="text-blue-400">Softwares</span>
                </span>
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-slate-300 hover:text-white font-medium py-2 px-4 rounded-lg hover:bg-slate-700/50 transition-all duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3">
                <button className="w-full flex items-center justify-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200">
                  <Phone className="w-4 h-4" />
                  <span>Call Us Now</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 shadow-lg">
                  <span>Get Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Contact Info */}
              <div className="pt-4 border-t border-slate-700 text-center">
                <p className="text-slate-400 text-xs">
                  Professional Software Solutions
                </p>
                <p className="text-slate-300 text-sm font-medium">
                  Available 24/7 for Consultations
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind navbar */}
      <div className="h-16"></div>
    </>
  )
}