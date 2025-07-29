'use client'

import React from 'react'
import {
  Building2,
  Heart,
  GraduationCap,
  Truck,
  Code,
  HardHat,
  ShoppingCart,
  Plane,
  Shield,
  TrendingUp,
  Film,
  Trophy
} from 'lucide-react'

const industries = [
  {
    title: "Finance & Banking",
    description: "We design and develop Fintech desktop, webapps and mobile solutions, that provide seamless operations and business process support.",
    icon: Building2,
    gradient: "from-green-500 to-emerald-600",
    bgColor: "bg-green-950",
    iconColor: "text-green-400"
  },
  {
    title: "Healthcare",
    description: "We innovate solutions for hospital and healthcare management, mobile apps to deliver essential services, consultations and diagnostic solutions.",
    icon: Heart,
    gradient: "from-red-500 to-pink-600",
    bgColor: "bg-red-950",
    iconColor: "text-red-400"
  },
  {
    title: "Education",
    description: "We offer a plethora of education and eLearning management which includes online learning, examination, progress tracking and biometric solutions.",
    icon: GraduationCap,
    gradient: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-950",
    iconColor: "text-blue-400"
  },
  {
    title: "Transport & Automotive",
    description: "We provide webapp and mobile booking and route planning, real-time tracking and freight consignment solutions to transport and logistics companies.",
    icon: Truck,
    gradient: "from-orange-500 to-red-600",
    bgColor: "bg-orange-950",
    iconColor: "text-orange-400"
  },
  {
    title: "Technology",
    description: "We help Information Technology actualize their ideas, meet their clients' deadlines and requirements. Our team is ready for contracts and sub-contracts.",
    icon: Code,
    gradient: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-950",
    iconColor: "text-purple-400"
  },
  {
    title: "Construction",
    description: "We develop solutions to help firms in engineering and construction to manage their daily operations in terms of expenses, raw materials and workforce.",
    icon: HardHat,
    gradient: "from-yellow-500 to-orange-600",
    bgColor: "bg-yellow-900",
    iconColor: "text-yellow-300"
  },
  {
    title: "Retail & E-commerce",
    description: "Get ready point of sale (POS) solutions, C2B, B2B and B2C integrations services, eCommerce online shopping solutions among others.",
    icon: ShoppingCart,
    gradient: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-950",
    iconColor: "text-cyan-300"
  },
  {
    title: "Travel & Hospitality",
    description: "Our online booking, rooms management and daily hotel and restaurants management systems enables those in hospitality industry smoothen their operations.",
    icon: Plane,
    gradient: "from-teal-500 to-green-600",
    bgColor: "bg-teal-950",
    iconColor: "text-teal-300"
  },
  {
    title: "Insurance",
    description: "We work with insurance companies and agencies to provide them with solutions to help them manage their clients, monitor their policy and provide them with relevant information.",
    icon: Shield,
    gradient: "from-indigo-500 to-purple-600",
    bgColor: "bg-indigo-950",
    iconColor: "text-indigo-300"
  },
  {
    title: "Trade",
    description: "We develop trade systems by employing blockchain and distributed ledger technologies which provides high level of transparency in the trading ecosystem.",
    icon: TrendingUp,
    gradient: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-950",
    iconColor: "text-emerald-300"
  },
  {
    title: "Media and Entertainment",
    description: "We work with media and entertainment industry by developing web portals and mobile applications that help in events planning, booking, ticketing and increase brand awareness.",
    icon: Film,
    gradient: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-950",
    iconColor: "text-pink-300"
  },
  {
    title: "Sports",
    description: "We create solutions which enable stakeholders in the sport world to plan, organize and track different events and activities. We also develop competitive web and mobile app games.",
    icon: Trophy,
    gradient: "from-amber-500 to-yellow-600",
    bgColor: "bg-amber-900",
    iconColor: "text-amber-300"
  }
]

export default function IndustriesWeServe() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From startups to enterprise, we deliver tailored solutions across diverse industries with cutting-edge technology and innovative approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div
                key={index}
                className={`group ${industry.bgColor} rounded-2xl p-8 border border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden relative`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className="relative z-10">
                  <div className={`w-16 h-16 ${industry.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    <Icon className={`w-8 h-8 ${industry.iconColor}`} />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                    {industry.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-200 transition-colors">
                    {industry.description}
                  </p>

                  <div className="mt-6 flex items-center text-sm font-medium text-yellow-500 group-hover:text-yellow-400 transition-colors">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-300 mb-8">
            Don’t see your industry? We adapt our expertise to meet unique business needs across all sectors.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-semibold shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  )
}
