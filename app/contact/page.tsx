'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { WorldMap } from '../components/ui/world-map';

export default function ContactPage() {
  const [showMap, setShowMap] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll direction: down → show, up → hide
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY) {
        setShowMap(true);   // scrolling down → reveal
      } else {
        setShowMap(false);  // scrolling up → hide
      }
      setLastScrollY(currentY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Form states
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      {/* Fixed map background — loads instantly */}
      <div
        className={`fixed top-0 left-0 w-full transition-all duration-700 ease-in-out z-0 
                    ${showMap ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
        style={{ height: '40vh' }}
      >
        <WorldMap />
      </div>

      {/* Page content */}
      <div className="relative z-10 bg-gradient-to-b from-black/60 to-white">
        <div className="max-w-4xl mx-auto px-4 pt-[40vh] pb-8">
          
          {/* Contact header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">Contact Us</h1>
            <p className="text-sm text-white">Get in touch with our team for your software solutions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm p-5 h-fit">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h2>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-gray-900">Address</p>
                    <p className="text-xs text-gray-600">Nairobi, Kenya</p>
                    <p className="text-xs text-gray-600">Upper Hill, ABC Place</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-gray-900">Phone</p>
                    <p className="text-xs text-gray-600">+254 700 123 456</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-gray-900">Email</p>
                    <p className="text-xs text-gray-600">hello@company.co.ke</p>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Stay Updated</h3>
                <p className="text-xs text-gray-600 mb-3">Subscribe to our newsletter for tech insights and updates</p>
                
                <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500"
                  />
                  <button
                    type="submit"
                    className="w-full bg-yellow-600 text-white text-xs font-medium py-2 px-3 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition-colors"
                  >
                    {isSubscribed ? (
                      <span className="flex items-center justify-center space-x-1">
                        <CheckCircle className="w-3 h-3" />
                        <span>Subscribed!</span>
                      </span>
                    ) : (
                      'Subscribe to Newsletter'
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2 bg-white rounded-lg shadow-sm p-5">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-xs font-medium text-gray-700 mb-1">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us about your project requirements..."
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 resize-none"
                  ></textarea>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type='submit'
                    className="bg-yellow-600 text-white text-xs font-medium py-2 px-4 rounded-md hover:bg-orange-400 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition-colors flex items-center space-x-1"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-3 h-3" />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3 h-3" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 bg-white rounded-lg shadow-sm p-4">
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Response Time</h3>
                <p className="text-xs text-gray-600">Within 24 hours</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Business Hours</h3>
                <p className="text-xs text-gray-600">Mon-Fri, 8AM-6PM EAT</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Services</h3>
                <p className="text-xs text-gray-600">Web, Mobile & Enterprise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  