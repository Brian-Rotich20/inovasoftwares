'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react'
import localFont from 'next/font/local'

const logoFont = localFont({
  src: '../fonts/mongule.ttf',
  weight: '400',
  style: 'normal',
})

export default function ProfessionalNavbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null)

  const solutionsItems = [
    {
      title: 'Custom Software Development',
      description: 'Tailored web, desktop, or mobile applications for businesses.',
      href: '/services/custom-software',
      subitems: [
        {
          title: 'Web Solutions',
          href: '/services/web-solutions',
          items: [
            { name: 'Website Development', href: '/services/website-development' },
            { name: 'Web Applications', href: '/services/web-applications' }
          ]
        },
        {
          title: 'Mobile App Development',
          href: '/services/mobile-development',
          items: [
            { name: 'Business Apps', href: '/services/business-apps' },
            { name: 'E-commerce Apps', href: '/services/ecommerce-apps' },
            { name: 'Booking Apps', href: '/services/booking-apps' },
            { name: 'Fintech Apps', href: '/services/fintech-apps' },
            { name: 'Learning Apps', href: '/services/learning-apps' }
          ]
        }
      ]
    }
  ]

  const resourcesItems = [
    { name: 'About Inova', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Schedule A Call', href: '/schedule' },
  ]

  const navItems = [
    { name: 'Solutions', href: '/services', hasDropdown: true, dropdownItems: solutionsItems },
    { name: 'Projects', href: '/projects' },
    { name: 'Customers', href: '/customers' },
    { name: 'Pricing', href: '/prices' },
    { name: 'Resources', href: '/resources', hasDropdown: true, dropdownItems: resourcesItems },
  ]

  const toggleMobileDropdown = (itemName: string) => {
    setActiveMobileDropdown(activeMobileDropdown === itemName ? null : itemName)
  }

  const closeMobileMenu = () => {
    setIsMobileOpen(false)
    setActiveMobileDropdown(null)
  }

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo - Clickable */}
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="flex flex-col items-center leading-none">
                <span className={`text-xl font-bold text-white ${logoFont.className}`}>
                  Inova
                </span>
                <span className="text-xs text-[#0D9488] font-normal -mt-1.5">
                  Softwares
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-6">
                {navItems.map((item) => (
                  <div key={item.name} className="relative group">
                    <Link
                      href={item.href}
                      className="flex items-center text-sm text-white hover:text-gray-50 font-medium transition-colors duration-200 py-4"
                    >
                      {item.name}
                      {item.hasDropdown && <ChevronDown className="w-3 h-3 ml-1" />}
                    </Link>
                    
                    {/* Desktop Dropdown */}
                    {item.hasDropdown && (
                      <div className="absolute top-full left-0 w-80 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                        <div className="p-4">
                          {item.name === 'Solutions' ? (
                            <div className="space-y-4">
                              {solutionsItems.map((solution, index) => (
                                <div key={index}>
                                  <Link 
                                    href={solution.href}
                                    className="block hover:bg-gray-50 p-2 rounded-md transition-colors"
                                  >
                                    <h3 className="text-sm font-semibold text-gray-900 mb-1">
                                      {solution.title}
                                    </h3>
                                    <p className="text-xs text-gray-600 mb-2">
                                      {solution.description}
                                    </p>
                                  </Link>
                                  {solution.subitems.map((subitem, subIndex) => (
                                    <div key={subIndex} className="mb-3 pl-2 border-l-2 border-gray-100">
                                      <Link 
                                        href={subitem.href}
                                        className="block hover:bg-gray-50 p-1 rounded transition-colors"
                                      >
                                        <h4 className="text-xs font-medium text-gray-800 mb-1">
                                          {subitem.title}
                                        </h4>
                                      </Link>
                                      <ul className="space-y-1 ml-2">
                                        {subitem.items.map((item, itemIndex) => (
                                          <li key={itemIndex}>
                                            <Link 
                                              href={item.href}
                                              className="text-xs text-gray-600 hover:text-gray-900 hover:bg-gray-50 block p-1 rounded transition-colors"
                                            >
                                              • {item.name}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="space-y-1">
                              {resourcesItems.map((resource, index) => (
                                <Link
                                  key={index}
                                  href={resource.href}
                                  className="block text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-2 py-2 rounded transition-colors"
                                >
                                  {resource.name}
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

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex">
              <Link
                href="/contact"
                className="bg-white hover:bg-white/90 px-4 py-1.5 text-sm font-medium text-gray-950 rounded-lg transition-colors duration-200"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="text-gray-700 hover:text-gray-900 p-2 rounded-md transition-colors z-60 relative"
              >
                {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          {/* Background overlay */}
          <div 
            className="absolute inset-0 bg-black/50 transition-opacity duration-300"
            onClick={closeMobileMenu}
          />
          
          {/* Slide-in menu */}
          <div className={`absolute top-0 right-0 h-full w-3/4 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className={`text-lg font-bold text-gray-900 ${logoFont.className}`}>
                  Navigation
                </div>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 text-gray-500 hover:text-gray-700 rounded-md transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Menu Content */}
              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-0">
                  {navItems.map((item, index) => (
                    <div key={item.name}>
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          onClick={() => !item.hasDropdown && closeMobileMenu()}
                          className="flex-1 block text-sm text-gray-700 hover:text-gray-900 font-medium py-3 px-2 hover:bg-gray-50 rounded-md transition-all duration-200"
                        >
                          {item.name}
                        </Link>
                        {item.hasDropdown && (
                          <button
                            onClick={() => toggleMobileDropdown(item.name)}
                            className="p-2 text-gray-500 hover:text-gray-700"
                          >
                            <ChevronDown className={`w-4 h-4 transition-transform ${activeMobileDropdown === item.name ? 'rotate-180' : ''}`} />
                          </button>
                        )}
                      </div>
                      
                      {/* Mobile Dropdown Content */}
                      {item.hasDropdown && activeMobileDropdown === item.name && (
                        <div className="ml-2 pb-2 border-l-2 border-gray-100 pl-3">
                          {item.name === 'Solutions' ? (
                            <div className="space-y-3">
                              {solutionsItems.map((solution, sIndex) => (
                                <div key={sIndex} className="bg-gray-50 p-3 rounded">
                                  <Link 
                                    href={solution.href}
                                    onClick={closeMobileMenu}
                                    className="block hover:bg-white p-2 rounded transition-colors"
                                  >
                                    <h4 className="text-xs font-semibold text-gray-900 mb-1">
                                      {solution.title}
                                    </h4>
                                    <p className="text-xs text-gray-600">
                                      {solution.description}
                                    </p>
                                  </Link>
                                  {solution.subitems.map((subitem, subIndex) => (
                                    <div key={subIndex} className="mt-2 ml-2">
                                      <Link
                                        href={subitem.href}
                                        onClick={closeMobileMenu}
                                        className="block text-xs font-medium text-gray-800 hover:text-gray-900 py-1 hover:bg-white rounded px-2 transition-colors"
                                      >
                                        {subitem.title}
                                      </Link>
                                      <ul className="ml-3 mt-1 space-y-1">
                                        {subitem.items.map((item, itemIndex) => (
                                          <li key={itemIndex}>
                                            <Link
                                              href={item.href}
                                              onClick={closeMobileMenu}
                                              className="block text-xs text-gray-600 hover:text-gray-900 py-1 px-2 hover:bg-white rounded transition-colors"
                                            >
                                              • {item.name}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="space-y-1">
                              {resourcesItems.map((resource, rIndex) => (
                                <Link
                                  key={rIndex}
                                  href={resource.href}
                                  onClick={closeMobileMenu}
                                  className="block text-xs text-gray-600 hover:text-gray-900 py-2 px-2 hover:bg-gray-50 rounded transition-colors"
                                >
                                  {resource.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                      
                      {index < navItems.length - 1 && (
                        <hr className="border-gray-200 my-2" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer CTA */}
              <div className="p-4 border-t border-gray-200">
                <Link 
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="w-full flex items-center justify-center space-x-2 bg-white hover:bg-white/90 text-gray-950 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spacer */}
      <div className="h-14"></div>
    </>
  )
}