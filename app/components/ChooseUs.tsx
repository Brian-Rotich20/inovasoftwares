'use client'
import { Code2, ShieldCheck, Paintbrush2, PiggyBank } from 'lucide-react'

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Fast Development',
      icon: <Code2 className="text-yellow-500 w-4 h-4" />,
      desc: 'Ship your solution on time with our engineering experience.',
    },
    {
      title: 'Quality Assurance',
      icon: <ShieldCheck className="text-yellow-500 w-4 h-4" />,
      desc: 'Ensure quality and reliability with our testing process.',
    },
    {
      title: 'Classic Designs',
      icon: <Paintbrush2 className="text-yellow-500 w-4 h-4" />,
      desc: 'Visually appealing and user-friendly solutions.',
    },
    {
      title: 'Reduced Costs',
      icon: <PiggyBank className="text-yellow-500 w-4 h-4" />,
      desc: 'Strategic advantage with cost-effective solutions.',
    },
  ]

  return (
    <section className="py-6 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-lg font-medium mb-2">Why Choose Us</h2>
            <p className="text-slate-300 text-sm mb-3 leading-relaxed">
              We specialize in software development, hosting, and SEO. We've helped bring ideas to life across industries.
            </p>
            <button className="bg-yellow-600 hover:bg-yellow-500 text-white px-4 py-2 text-sm font-medium rounded transition">
              Schedule a Consultation
            </button>
          </div>

          {/* Right Features */}
          <div className="grid grid-cols-2 gap-2 bg-slate-800/40 p-3 rounded-lg border border-slate-700">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-slate-900/60 p-3 rounded text-center"
              >
                <div className="flex justify-center mb-1">{item.icon}</div>
                <h3 className="text-xs font-semibold mb-1">{item.title}</h3>
                <p className="text-slate-400 text-[10px] leading-tight">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}