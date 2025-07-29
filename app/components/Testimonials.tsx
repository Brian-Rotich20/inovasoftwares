'use client'

import React from 'react'

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    profile: "Senior Product Manager",
    company: "TechFlow Solutions",
    text: "Working with this team was exceptional. They delivered our e-commerce platform ahead of schedule with clean, scalable code. The attention to detail and communication throughout the project was outstanding.",
    avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    profile: "CTO",
    company: "StartupVenture Inc.",
    text: "These developers transformed our outdated system into a modern, responsive web application. Their expertise in React and Node.js was evident from day one. Highly recommend for any serious development project.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Emily Thompson",
    profile: "Founder & CEO",
    company: "Digital Marketing Pro",
    text: "From concept to deployment, the entire process was seamless. They understood our business requirements perfectly and built a custom solution that streamlined our workflow. We've seen a 40% increase in productivity.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }
]

export default function Testimonials() {
  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          What Our Clients Say
        </h2>
        <p className="text-xl text-white text-center max-w-2xl mx-auto">
          Don't just take our word for it - hear from the amazing clients we've had the pleasure to work with
        </p>
      </div>

      <div className="relative w-full">
        <div className="flex animate-scroll-slow gap-8 px-4">
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-96 bg-grey-800 rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                />
                <div className="ml-4">
                  <h3 className="font-bold text-lg text-gray-900">{testimonial.name}</h3>
                  <p className="text-yellow-500 font-medium">{testimonial.profile}</p>
                  <p className="text-white text-sm">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-3">
                  {[1,2,3,4,5].map((star) => (
                    <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
              
              <p className="text-white leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll-slow {
          animation: scroll-slow 30s linear infinite;
        }
        
        .animate-scroll-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}