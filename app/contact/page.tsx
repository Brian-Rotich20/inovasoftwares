import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

// Simulated WhatsApp icon component since we can't import FaWhatsapp
const FaWhatsapp = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.863 3.488"/>
  </svg>
);

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white" style={{ backgroundColor: '#111827' }}>
      {/* Header */}
      <div className="text-center pt-16 pb-8">
        <h1 className="text-2xl md:text-6xl font-bold mb-6">Get In Touch</h1>
        <p className="text-xs md:text-sm text-gray-300 max-w-4xl mx-auto px-4">
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
              <Phone className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-sm md:text-xs font-semibold mb-2">Phone</h3>
            <p className="text-gray-300 text-xs md:text-xs">+254720060728</p>
          </div>

          {/* Email Card */}
          <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl p-3.5 hover:border-teal-500 transition-all duration-300">
            <div className="bg-teal-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-sm md:text-xs font-semibold mb-2">Email</h3>
            <p className="text-gray-300 break-all text-xs md:text-xs">ralphrotich@gmail.com</p>
          </div>

          {/* Location Card */}
          <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl p-3.5 hover:border-teal-500 transition-all duration-300">
            <div className="bg-teal-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-sm md:text-xs font-semibold mb-2">Location</h3>
            <p className="text-gray-300 text-xs md:text-xs">Nairobi, Kenya</p>
          </div>

        <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl p-3.5 hover:border-teal-500 transition-all duration-300">
          <div className="bg-green-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <FaWhatsapp className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-sm md:text-xs font-semibold mb-2">WhatsApp</h3>
          <p className="text-gray-300 text-xs md:text-xs">+254720060728</p>
        </div>
        </div>

        {/* Main Content Section */}
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
      {/* Left Side - Contact Info */}
      <div className="bg-gray-800/40 border border-gray-700 rounded-2xl p-8 h-full">
        <div className="space-y-8 h-full flex flex-col justify-between">
          <div>
            <h2
              className="text-2xl md:text-4xl font-bold mb-8"
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
                <h3 className="text-sm md:text-xs font-semibold mb-1">Call Us</h3>
                <p className="text-gray-400 mb-2 text-xs md:text-xs">
                  Available Monday - Friday, 8AM - 6PM EAT
                </p>
                <p className="font-medium text-xs md:text-xs" style={{ color: "#0D9488" }}>
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
                <h3 className="text-sm md:text-xs font-semibold mb-1">Email Us</h3>
                <p className="text-gray-400 mb-2 text-xs md:text-xs">
                  Send us an email and we'll respond within 24 hours
                </p>
                <p
                  className="font-medium break-all text-xs md:text-xs"
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
                <h3 className="text-sm md:text-xs font-semibold mb-1">Visit Us</h3>
                <p className="text-gray-400 mb-2 text-xs md:text-xs">
                  Come say hello at our office
                </p>
                <p className="font-medium text-xs md:text-xs" style={{ color: "#0D9488" }}>
                  Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>

          {/* Quick Chat Section */}
          <div className="border-t border-gray-700 pt-8">
            <h3 className="text-lg md:text-2xl font-semibold mb-4">Quick Chat</h3>
            <a
              href="https://wa.me/254720060728"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition-colors duration-300 font-medium text-xs md:text-sm"
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
            <h2 className="text-2xl md:text-5xl font-bold mb-6">Ready to Start Your Ecommerce Store?</h2>
            <p className="text-sm md:text-xl mb-8 max-w-3xl mx-auto">
              Get in touch with us today and let's bring your <span className="font-semibold">ecommerce</span> ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+254720060728"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors duration-300 text-xs md:text-base"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <a 
                href="mailto:ralphrotich@gmail.com"
                className="inline-flex items-center space-x-2 bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors duration-300 text-xs md:text-base"
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