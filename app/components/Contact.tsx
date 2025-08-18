'use client'

import React, { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Globe,
  Linkedin,
  Github,
  Twitter
} from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      info: "hello@yourcompany.com",
      subInfo: "We'll respond within 24 hours",
      color: "text-yellow-400",
      bgColor: "bg-gray-800"
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+254 700 123 456",
      subInfo: "Mon–Fri 9AM–6PM EAT",
      color: "text-yellow-400",
      bgColor: "bg-gray-800"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "Nairobi, Kenya",
      subInfo: "Available for in-person meetings",
      color: "text-yellow-400",
      bgColor: "bg-gray-800"
    },
    {
      icon: Clock,
      title: "Working Hours",
      info: "Mon–Fri: 9AM–6PM",
      subInfo: "Sat: 10AM–2PM",
      color: "text-yellow-400",
      bgColor: "bg-gray-800"
    }
  ]

  const socialLinks = [
    { icon: Linkedin, href: "#", color: "hover:text-yellow-400" },
    { icon: Github, href: "#", color: "hover:text-yellow-400" },
    { icon: Twitter, href: "#", color: "hover:text-yellow-400" },
    { icon: Globe, href: "#", color: "hover:text-yellow-400" }
  ]

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to start your next project? Let’s bring your ideas to life with innovation and precision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-2xl p-8 shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-yellow-100 text-brand rounded-xl flex items-center justify-center mr-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Send us a message</h3>
                <p className="text-gray-400 text-sm">We'd love to hear from you</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input-style"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input-style"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="input-style"
                />
                <select
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="input-style"
                >
                  <option value="">Select a subject *</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="consultation">Consultation</option>
                  <option value="support">Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <textarea
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message *"
                className="input-style resize-none"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:from-yellow-500 hover:to-yellow-600 transition-all"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-6">
            {contactInfo.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className={`${item.bgColor} rounded-2xl p-5 border border-gray-700 flex items-start gap-4`}>
                  <div className="w-10 h-10 rounded-xl bg-gray-700 flex items-center justify-center">
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-gray-300">{item.info}</p>
                    <p className="text-gray-500 text-sm">{item.subInfo}</p>
                  </div>
                </div>
              )
            })}

            <div className="bg-gray-800 rounded-2xl p-5 border border-gray-700">
              <h4 className="font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      className={`w-10 h-10 rounded-xl bg-gray-700 text-gray-400 flex items-center justify-center transition hover:scale-110 ${social.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind plugin class override */}
      <style jsx>{`
        .input-style {
          @apply w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400;
        }
      `}</style>
    </section>
  )
}
