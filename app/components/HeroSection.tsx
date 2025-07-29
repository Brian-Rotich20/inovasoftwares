'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">
        
      
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight text-center md:text-left">
            We Build Fast, Scalable Apps
          </h1>

         <p className="text-lg text-white text-center md:text-left">
          Custom software solutions engineered for <span className="font-semibold text-yellow-500">performance</span>, <span className="font-semibold text-yellow-500">security</span>, and <span className="font-semibold text-yellow-500">scalability</span>.
        </p>

          <div className="flex flex-row flex-wrap gap-4 pt-4 justify-center md:justify-start text-center">
            <Link
              href="/contact"
              className="btn btn-gold"
            >
              Get in Touch
            </Link>

            <Link
              href="/projects"
              className="btn btn-gold"
            >
              View Projects
            </Link>
          </div>

          <p className="text-sm text-gray-400 pt-4 text-center md:text-left">
            Trusted by startups & growing businesses
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/hero-mockup.jpg"
            alt="Web app illustration"
            width={700}
            height={700}
            className="rounded-xl shadow-xl"
            priority
          />
        </div>
      </div>
    </section>
  )
}
