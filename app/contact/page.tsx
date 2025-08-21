import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white" style={{ backgroundColor: '#111827' }}>
      {/* Header */}
      <div className="text-center pt-16 pb-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto px-4">
          We'd love to hear from you. Reach out to us for any inquiries, 
          <span className="text-teal-400"> support</span>, or 
          <span className="text-teal-400"> collaboration opportunities</span>.
        </p>
      </div>

      {/* Contact Cards Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Phone Card */}
          <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl p-3.5 hover:border-teal-500 transition-all duration-300">
            <div className="bg-teal-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-300">+254720060728</p>
          </div>

          {/* Email Card */}
          <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl p-3.5 hover:border-teal-500 transition-all duration-300">
            <div className="bg-teal-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-300 break-all">ralphrotich@gmail.com</p>
          </div>

          {/* Location Card */}
          <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl p-3.5 hover:border-teal-500 transition-all duration-300">
            <div className="bg-teal-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-300">Nairobi, Kenya</p>
          </div>

        <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl p-3.5 hover:border-teal-500 transition-all duration-300">
          <div className="bg-green-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <FaWhatsapp className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
          <p className="text-gray-300">+254720060728</p>
        </div>
        </div>

        {/* Main Content Section */}
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
      {/* Left Side - Contact Info */}
      <div className="bg-gray-800/40 border border-gray-700 rounded-2xl p-8 h-full">
        <div className="space-y-8 h-full flex flex-col justify-between">
          <div>
            <h2
              className="text-4xl font-bold mb-8"
              style={{ color: "#0D9488" }}
            >
              Let's Connect
            </h2>

            {/* Call Us */}
            <div className="flex items-start space-x-4 mb-6">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#0D9488" }}
              >
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Call Us</h3>
                <p className="text-gray-400 mb-2">
                  Available Monday - Friday, 8AM - 6PM EAT
                </p>
                <p className="font-medium" style={{ color: "#0D9488" }}>
                  +254720060728
                </p>
              </div>
            </div>

            {/* Email Us */}
            <div className="flex items-start space-x-4 mb-6">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#0D9488" }}
              >
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Email Us</h3>
                <p className="text-gray-400 mb-2">
                  Send us an email and we'll respond within 24 hours
                </p>
                <p
                  className="font-medium break-all"
                  style={{ color: "#0D9488" }}
                >
                  ralphrotich@gmail.com
                </p>
              </div>
            </div>

            {/* Visit Us */}
            <div className="flex items-start space-x-4 mb-8">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#0D9488" }}
              >
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Visit Us</h3>
                <p className="text-gray-400 mb-2">
                  Come say hello at our office
                </p>
                <p className="font-medium" style={{ color: "#0D9488" }}>
                  Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>

          {/* Quick Chat Section */}
          <div className="border-t border-gray-700 pt-8">
            <h3 className="text-2xl font-semibold mb-4">Quick Chat</h3>
            <a
              href="https://wa.me/254720060728"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition-colors duration-300 font-medium"
            >
              <FaWhatsapp className="w-5 h-5 text-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex justify-center lg:justify-end h-full">
        <div className="bg-gray-800/40 border border-gray-700 rounded-2xl p-8 h-full">
          <div className="relative h-full flex items-center justify-center">
            <div
              className="absolute inset-0 rounded-full blur-3xl transform scale-110"
              style={{
                background:
                  "linear-gradient(135deg, rgba(13, 148, 136, 0.2), rgba(13, 148, 136, 0.1))",
              }}
            ></div>
            <img
              src="/smartphone.png"
              alt="Woman with smartphone"
              className="relative z-10 w-full max-w-md h-auto object-contain mx-auto"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-3xl p-8 md:p-12 text-center" style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6, #F97316)' }}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Ecommerce Store?</h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Get in touch with us today and let's bring your <span className="font-semibold">ecommerce</span> ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+254720060728"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <a 
                href="mailto:ralphrotich@gmail.com"
                className="inline-flex items-center space-x-2 bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;