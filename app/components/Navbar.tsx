'use client'
import React, { useState, useEffect } from 'react'
import { Menu, X, ArrowRight, Facebook, Instagram, Linkedin } from 'lucide-react'
import localFont from 'next/font/local'

const logoFont = localFont({
  src: '../fonts/mongule.ttf',
  weight: '400',
  style: 'normal',
})

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
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Prices', href: '/prices' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
          <div className="flex items-center space-x-2">
              <div className="flex flex-col items-center leading-none">
                <span className={`text-3xl font-bold text-gray-900 ${logoFont.className}`}>
                  Inova
                </span>
                <span className="text-xs text-[#0D9488] font-normal -mt-1">
                  Softwares
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2DD4BF] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="/contact"
                className="transform rounded-lg bg-[#0D9488] hover:bg-[#0D9488]/90 px-4 py-1.5 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center"
              >
                Get Started
              </a>

              {/* Desktop Social Icons */}
              <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-gray-200">
                <a href="#" className="text-gray-500 hover:text-[#0D9488] transition-colors duration-200">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-[#0D9488] transition-colors duration-200">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-[#0D9488] transition-colors duration-200">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-gray-900 p-2 rounded-md transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu - Dropdown below navbar */}
          {isOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-xl">
              <div className="px-4 py-4">
                {/* Mobile Navigation Links with Dividers */}
                <div className="space-y-0">
                  {navItems.map((item, index) => (
                    <div key={item.name}>
                      <a
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`${logoFont.className} block text-gray-700 hover:text-gray-900 font-medium py-3 px-2 hover:bg-gray-50 rounded-md transition-all duration-200`}
                      >
                        {item.name}
                      </a>
                      {index < navItems.length - 1 && (
                        <hr className="border-gray-200" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Divider before bottom section */}
                <hr className="border-gray-200 my-4" />

                {/* Social Icons */}
                <div className="flex justify-center items-center space-x-6 mb-4">
                  <a href="#" className="text-gray-500 hover:text-[#0D9488] transition-colors duration-200">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-[#0D9488] transition-colors duration-200">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-[#0D9488] transition-colors duration-200">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>

                {/* Mobile CTA Button */}
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 bg-[#0D9488] hover:bg-[#0D9488]/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-200"
                >
                  <span>Get In Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Overlay */}
        {isOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/20 z-30 top-16"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding behind navbar */}
      <div className="h-16"></div>
    </>
  )
}