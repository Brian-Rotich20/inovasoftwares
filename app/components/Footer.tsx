'use client'
import React from 'react'
import { Code, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Clock, Shield, Award } from "lucide-react"

export default function ProfessionalFooter() {
  const services = [
    'Web Development',
    'Mobile Apps',
    'E-Commerce',
    'UI/UX Design',
    'Cloud Services',
    'SEO Services'
  ]

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '#team' },
    { name: 'Projects', href: '/projects' },
    { name: 'Pricing', href: '/prices' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '#blog' }
  ]

  return (
    <footer className="bg-slate-950 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          
          {/* Company Info - Full width on mobile */}
          <div className="col-span-2 lg:col-span-1 mb-4 lg:mb-0">
            <div className="flex items-center space-x-2 mb-3">
              <span className="text-xl font-bold">
                Inova <span className="text-[#2DD4BF]">Softwares</span>
              </span>
            </div>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
              Professional software solutions that transform businesses.
            </p>
        
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-base">Our Services</h3>
            <ul className="space-y-1.5">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-300 hover:text-[#2DD4BF] text-sm transition-colors duration-200 flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-base">Quick Links</h3>
            <ul className="space-y-1.5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-slate-300 hover:text-[#2DD4BF] text-sm transition-colors duration-200 flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-white font-semibold mb-3 text-base">Get In Touch</h3>
            <div className="space-y-2.5">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#2DD4BF] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 text-sm">00100</p>
                  <p className="text-slate-300 text-sm">Nairobi, Kenya</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#2DD4BF] flex-shrink-0" />
                <a href="tel:+254700000000" className="text-slate-300 hover:text-blue-400 text-sm transition-colors">
                  +254 720 060 728
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#5EEAD4] flex-shrink-0" />
                <a href="mailto:info@inovasoftwares.com" className="text-slate-300 hover:text-blue-400 text-sm transition-colors">
                  ralphrotich@gmail.com
                </a>
              </div>
            </div>


            {/* Social Links */}
            <div className="mt-4">
              <p className="text-slate-400 text-xs mb-2">Follow Us</p>
              <div className="flex space-x-2">
                <a href="#" className="w-8 h-8 bg-slate-800 hover:bg-[#14B8A6] rounded-lg flex items-center justify-center transition-colors duration-200">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-slate-800 hover:bg-[#14B8A6] rounded-lg flex items-center justify-center transition-colors duration-200">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-slate-800 hover:bg-[#14B8A6] rounded-lg flex items-center justify-center transition-colors duration-200">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-slate-800 hover:bg-[#14B8A6] rounded-lg flex items-center justify-center transition-colors duration-200">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-400 text-xs">
              © 2025 Inova Softwares. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-2 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-[#5EEAD4] text-xs transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-[#5EEAD4]  text-xs transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-[#5EEAD4]  text-xs transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}