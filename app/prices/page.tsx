'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { 
  Code, Check, ChevronDown, ChevronRight, Star, Shield, 
  Zap, BarChart3, Users, Globe, Search, TrendingUp,
  CreditCard, Smartphone, DollarSign, ArrowRight, Package
} from 'lucide-react';

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('websites');

  const webDevelopmentPlans = [
    {
      name: "Simple Website",
      price: "KES 25,000",
      period: "one-time",
      popular: false,
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 5 pages",
        "Responsive design",
        "Basic SEO setup",
        "Contact form",
        "Social media integration",
        "3 months support",
        "Basic hosting setup"
      ],
      color: "blue"
    },
    {
      name: "Modern Complex",
      price: "KES 85,000",
      period: "one-time",
      popular: true,
      description: "Advanced solution with dashboard and analytics",
      features: [
        "Unlimited pages",
        "Custom dashboard",
        "Advanced analytics",
        "User management system",
        "Payment integration",
        "Admin panel",
        "12 months support",
        "Premium hosting",
        "Database integration",
        "API development"
      ],
      color: "yellow"
    },
    {
      name: "E-commerce Platform",
      price: "KES 120,000",
      period: "one-time",
      popular: false,
      description: "Full-featured online store solution",
      features: [
        "Product catalog",
        "Shopping cart",
        "Payment gateways",
        "Inventory management",
        "Order tracking",
        "Customer accounts",
        "Analytics dashboard",
        "Mobile app ready",
        "24/7 support"
      ],
      color: "green"
    }
  ];

  const digitalMarketingServices = [
    {
      name: "SEO Optimization",
      price: "KES 15,000",
      period: "monthly",
      features: [
        "Keyword research",
        "On-page optimization",
        "Technical SEO audit",
        "Monthly reports",
        "Local SEO setup"
      ]
    },
    {
      name: "Social Media Management",
      price: "KES 20,000",
      period: "monthly", 
      features: [
        "Content creation",
        "4 platforms management",
        "Daily posting",
        "Engagement monitoring",
        "Monthly analytics"
      ]
    },
    {
      name: "Google Ads Campaign",
      price: "KES 25,000",
      period: "monthly",
      features: [
        "Campaign setup",
        "Keyword optimization",
        "Ad copy creation",
        "Performance tracking",
        "Monthly optimization"
      ]
    }
  ];

  const otherServices = [
    { name: "Mobile App Development", price: "KES 150,000 - 300,000", icon: Smartphone },
    { name: "Logo & Branding Design", price: "KES 8,000 - 25,000", icon: Star },
    { name: "Domain & Hosting Setup", price: "KES 5,000/year", icon: Globe },
    { name: "Website Maintenance", price: "KES 3,000/month", icon: Shield },
    { name: "Custom Software Development", price: "KES 200,000+", icon: Code },
    { name: "Database Development", price: "KES 50,000 - 100,000", icon: Package }
  ];

  const paymentMethods = [
    {
      name: "M-Pesa",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/1200px-M-PESA_LOGO-01.svg.png"
    },
    {
      name: "PayPal",
      logo: "https://logos-world.net/wp-content/uploads/2020/07/PayPal-Logo.png"
    },
    {
      name: "Stripe",
      logo: "https://logos-world.net/wp-content/uploads/2021/03/Stripe-Logo.png"
    },
    {
      name: "Paystack",
      logo: "/1200px-Paystack_Logo.png"
    },
    {
      name: "Intersend",
      logo: "/Interswitch_logo.svg.png"
    },
    {
      name: "Bank Transfer",
      logo: "https://cdn-icons-png.flaticon.com/512/2171/2171046.png"
    }
  ];

  const commonWebsites = [
    "Business Portfolio",
    "E-commerce Store", 
    "Restaurant Website",
    "Real Estate Platform",
    "School Management System",
    "Hospital Management",
    "Event Management",
    "Booking System"
  ];

  const faqs = [
    {
      question: "What's included in the website development cost?",
      answer: "Our pricing includes design, development, basic SEO setup, mobile responsiveness, and initial support period. Additional features like payment integration or custom functionality may have extra costs."
    },
    {
      question: "How long does it take to build a website?",
      answer: "Simple websites take 1-2 weeks, while complex websites with dashboards and analytics take 4-6 weeks. E-commerce platforms typically require 6-8 weeks for completion."
    },
    {
      question: "Do you provide hosting and domain services?",
      answer: "Yes, we help with domain registration and hosting setup. We work with reliable hosting providers and can manage the technical aspects for you."
    },
    {
      question: "Can I make changes to my website after it's built?",
      answer: "Absolutely! We provide a user-friendly admin panel for content updates. For complex changes, our support team is available to assist you."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept M-Pesa, PayPal, Stripe, and bank transfers. We can set up flexible payment plans for larger projects."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Payment Methods */}
        

        {/* Website Development Pricing */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Website Development</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {webDevelopmentPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg border-2 ${
                plan.popular ? 'border-yellow-500 transform scale-105' : 'border-gray-200'
              } relative`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-500 text-white px-3 py-1 text-xs font-bold rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-sm text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                    plan.popular 
                      ? 'bg-yellow-600 hover:bg-yellow-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods Section */}
       <div className="relative overflow-hidden p-4 mb-12">
      <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">
        E-commerce Payment Gateways
      </h2>

      <div className="w-full overflow-hidden">
        <div className="flex animate-slide whitespace-nowrap space-x-16">
          {[...paymentMethods, ...paymentMethods].map((method, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Image
                src={method.logo}
                alt={method.name}
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="text-sm text-gray-700">{method.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>



        {/* Digital Marketing Services */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Digital Marketing Services</h2>
          <p className="text-center text-gray-600 mb-6">What we do for you in digital marketing</p>
          <div className="grid md:grid-cols-3 gap-6">
            {digitalMarketingServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                </div>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                  <span className="text-sm text-gray-600 ml-1">{service.period}</span>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Other Services */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Other Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-4 flex items-center space-x-3">
                <service.icon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">{service.name}</h3>
                  <p className="text-sm text-gray-600">{service.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Common Websites */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Most Common Required Websites</h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {commonWebsites.map((website, index) => (
                <div key={index} className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <ChevronRight className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm font-medium text-gray-700">{website}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
          <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="p-4">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${
                    openFaq === index ? 'rotate-180' : ''
                  }`} />
                </button>
                {openFaq === index && (
                  <div className="mt-3 text-sm text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Ready to Get Started?</h2>
          <p className="mb-6">Contact us today for a free consultation and custom quote</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-yellow-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border-2 border-white text-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-yellow-600 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}