import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, ArrowRight, Quote } from 'lucide-react'

export default function CustomersSection() {
  const customerTestimonials = [
    {
      company: 'Facols Limited',
      industry: 'Ecommerce services',
      testimonial: "Inova Softwares transformed our business operations with their custom web application. The booking system they developed streamlined our client appointments and increased our efficiency by 40%. Their team's expertise and dedication to quality is outstanding.",
      customerProfile: {
        name: 'Sylus Obol',
        position: 'Operations Manager',
         image: '/sylus.jpeg'
      },
      
    },
    {
      company: 'Tsavol',
      industry: 'Printing and Branding',
      testimonial: "Working with Inova Softwares on our website application was an exceptional experience. They delivered a beautiful, user-friendly e-commerce app that exceeded our expectations. Our sales have increased by 60% since launch, and customer engagement has never been higher.",
      customerProfile: {
        name: 'Kennedy K',
        position: 'CEO & Founder',
        image: '/kennedy.jpeg'
      },
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-amber-100 to-orange-100 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            What our customers have to say
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto mb-8">
            We love our users because they love us. Check out some of the love they've sent our way.
          </p>
          
          <Link
            href="/customers"
            className="inline-flex items-center gap-2 bg-gray-950 hover:bg-gray-900/90 text-white px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#0D9488]/25 group"
          >
            Read All Customer Stories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Customer Testimonials */}
        <div className="grid lg:grid-cols-2 gap-8">
          {customerTestimonials.map((customer, index) => (
            <motion.div
              key={customer.company}
              className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Company Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{customer.company}</h3>
                    <p className="text-xs text-gray-500">{customer.industry}</p>
                  </div>
                </div>
                
              </div>

              {/* Testimonial */}
              <div className="mb-6">
                <Quote className="w-6 h-6 text-[#0D9488] mb-3" />
                <p className="text-sm text-gray-700 leading-relaxed italic">
                  "{customer.testimonial}"
                </p>
              </div>
              {/* Customer Profile */}
            <div className="flex items-center gap-3 mb-6 p-3 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                    src={customer.customerProfile.image}
                    alt={customer.customerProfile.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover rounded-full"
                    />
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-900">
                    {customer.customerProfile.name}
                    </p>
                    <p className="text-xs text-gray-600">
                    {customer.customerProfile.position}
                    </p>
                </div>
                </div>
  
              </motion.div>
            
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-600 mb-4">
            Ready to join our satisfied customers?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-transparent hover:bg-gray-900 text-gray-900 hover:text-white px-6 py-2 text-sm font-medium rounded-lg border-2 border-gray-900 transition-all duration-200 group"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}