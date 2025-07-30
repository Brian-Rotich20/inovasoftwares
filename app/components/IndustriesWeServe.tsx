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
    icon: Building2,
  },
  {
    title: "Healthcare",
    icon: Heart,
  },
  {
    title: "Education",
    icon: GraduationCap,
  },
  {
    title: "Transport & Automotive",
    icon: Truck,
  },
  {
    title: "Technology",
    icon: Code,
  },
  {
    title: "Construction",
    icon: HardHat,
  },
  {
    title: "Retail & E-commerce",
    icon: ShoppingCart,
  },
  {
    title: "Travel & Hospitality",
    icon: Plane,
  },
  {
    title: "Insurance",
    icon: Shield,
  },
  {
    title: "Trade",
    icon: TrendingUp,
  },
  {
    title: "Media & Entertainment",
    icon: Film,
  },
  {
    title: "Sports",
    icon: Trophy,
  }
]

export default function IndustriesWeServe() {
  return (
    <section className="py-12 md:py-16 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Industries We Serve
          </h2>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From startups to enterprise, we deliver tailored solutions across diverse industries with cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div
                key={index}
                className="group flex flex-col items-center p-3 md:p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 mb-2 md:mb-3 p-1.5 md:p-2 bg-yellow-600 rounded-lg group-hover:bg-yellow-500 transition-colors duration-300 flex items-center justify-center">
                  <Icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-white font-medium text-xs md:text-sm text-center leading-tight">
                  {industry.title}
                </h3>
              </div>
            )
          })}
        </div>

        <div className="mt-10 md:mt-12 text-center">
          <p className="text-sm md:text-base text-slate-300 mb-6 md:mb-8">
            Don't see your industry? We adapt our expertise to meet unique business needs across all sectors.
          </p>
          <button className="bg-yellow-600 hover:bg-yellow-500 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base">
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  )
}