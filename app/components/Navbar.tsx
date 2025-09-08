'use client'
import React, { useState } from 'react'
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react'
import localFont from 'next/font/local'

const logoFont = localFont({
  src: '../fonts/mongule.ttf',
  weight: '400',
  style: 'normal',
})

export default function ProfessionalNavbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null)

  const solutionsItems = [
    {
      title: 'Custom Software Development',
      description: 'Tailored web, desktop, or mobile applications for businesses.',
      subitems: [
        {
          title: 'Web Solutions',
          items: ['Website development (corporate, e-commerce, booking sites)', 'Web applications (SaaS platforms, dashboards)']
        },
        {
          title: 'Mobile App Development',
          items: ['Business apps, e-commerce apps, booking apps, fintech apps, learning apps']
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

  const toggleMobileDropdown = (itemName) => {
    setActiveMobileDropdown(activeMobileDropdown === itemName ? null : itemName)
  }

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo - Clickable */}
            <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="flex flex-col items-center leading-none">
                <span className={`text-xl font-bold text-gray-900 ${logoFont.className}`}>
                  Inova
                </span>
                <span className="text-xs text-[#0D9488] font-normal -mt-1.5">
                  Softwares
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-6">
                {navItems.map((item) => (
                  <div key={item.name} className="relative group">
                    <a
                      href={item.href}
                      className="flex items-center text-sm text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 py-4"
                    >
                      {item.name}
                      {item.hasDropdown && <ChevronDown className="w-3 h-3 ml-1" />}
                    </a>
                    
                    {/* Desktop Dropdown */}
                    {item.hasDropdown && (
                      <div className="absolute top-full left-0 w-80 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                        <div className="p-4">
                          {item.name === 'Solutions' ? (
                            <div className="space-y-4">
                              {solutionsItems.map((solution, index) => (
                                <div key={index}>
                                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                                    {solution.title}
                                  </h3>
                                  <p className="text-xs text-gray-600 mb-3">
                                    {solution.description}
                                  </p>
                                  {solution.subitems.map((subitem, subIndex) => (
                                    <div key={subIndex} className="mb-3">
                                      <h4 className="text-xs font-medium text-gray-800 mb-1">
                                        {subitem.title}
                                      </h4>
                                      <ul className="space-y-1">
                                        {subitem.items.map((item, itemIndex) => (
                                          <li key={itemIndex} className="text-xs text-gray-600 pl-2">
                                            • {item}
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
                                <a
                                  key={index}
                                  href={resource.href}
                                  className="block text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-2 py-2 rounded transition-colors"
                                >
                                  {resource.name}
                                </a>
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
              <a
                href="/contact"
                className="bg-[#0D9488] hover:bg-[#0D9488]/90 px-4 py-1.5 text-sm font-medium text-white rounded-lg transition-colors duration-200"
              >
                Get Started
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="text-gray-700 hover:text-gray-900 p-2 rounded-md transition-colors"
              >
                {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-xl">
              <div className="px-4 py-4">
                <div className="space-y-0">
                  {navItems.map((item, index) => (
                    <div key={item.name}>
                      <div className="flex items-center justify-between">
                        <a
                          href={item.href}
                          onClick={() => !item.hasDropdown && setIsMobileOpen(false)}
                          className="flex-1 block text-sm text-gray-700 hover:text-gray-900 font-medium py-3 px-2 hover:bg-gray-50 rounded-md transition-all duration-200"
                        >
                          {item.name}
                        </a>
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
                        <div className="ml-4 pb-2">
                          {item.name === 'Solutions' ? (
                            <div className="space-y-3">
                              {solutionsItems.map((solution, sIndex) => (
                                <div key={sIndex} className="bg-gray-50 p-3 rounded">
                                  <h4 className="text-xs font-semibold text-gray-900 mb-1">
                                    {solution.title}
                                  </h4>
                                  <p className="text-xs text-gray-600 mb-2">
                                    {solution.description}
                                  </p>
                                  {solution.subitems.map((subitem, subIndex) => (
                                    <div key={subIndex} className="mb-2">
                                      <h5 className="text-xs font-medium text-gray-800 mb-1">
                                        {subitem.title}
                                      </h5>
                                      <ul className="space-y-1">
                                        {subitem.items.map((item, itemIndex) => (
                                          <li key={itemIndex} className="text-xs text-gray-600 pl-2">
                                            • {item}
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
                                <a
                                  key={rIndex}
                                  href={resource.href}
                                  onClick={() => setIsMobileOpen(false)}
                                  className="block text-xs text-gray-600 hover:text-gray-900 py-2 px-2 hover:bg-gray-50 rounded transition-colors"
                                >
                                  {resource.name}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                      
                      {index < navItems.length - 1 && (
                        <hr className="border-gray-200" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile CTA Button */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button 
                    onClick={() => setIsMobileOpen(false)}
                    className="w-full flex items-center justify-center space-x-2 bg-[#0D9488] hover:bg-[#0D9488]/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-200"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Overlay */}
        {isMobileOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/20 z-30 top-14"
            onClick={() => setIsMobileOpen(false)}
          ></div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-14"></div>
    </>
  )
}