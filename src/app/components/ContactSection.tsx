"use client";

import React from "react";
import { Mail, Phone, MapPin, MessageCircle, Instagram } from "lucide-react";

export default function ContactSection() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/971501234567", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+971501234567";
  };

  const handleInstagram = () => {
    window.open("https://instagram.com/raastarealty", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-900/50 via-black/50 to-red-900/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ready to find your dream property? We&apos;re here to help you every
            step of the way
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">
                Contact Information
              </h3>

              {/* Email */}
              <div className="flex items-start gap-4 mb-6 group">
                <div className="w-12 h-12 bg-green-600/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition-colors duration-300">
                  <Mail
                    className="text-green-600 group-hover:text-white"
                    size={20}
                  />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <a
                    href="mailto:info@raastarealty.com"
                    className="text-white text-lg font-semibold hover:text-green-600 transition-colors"
                  >
                    info@raastarealty.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 mb-6 group">
                <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 transition-colors duration-300">
                  <Phone
                    className="text-red-600 group-hover:text-white"
                    size={20}
                  />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Phone</p>
                  <a
                    href="tel:+971501234567"
                    className="text-white text-lg font-semibold hover:text-red-600 transition-colors"
                  >
                    +971 50 123 4567
                  </a>
                </div>
              </div>

              {/* Office */}
              <div className="flex items-start gap-4 mb-8 group">
                <div className="w-12 h-12 bg-green-600/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition-colors duration-300">
                  <MapPin
                    className="text-green-600 group-hover:text-white"
                    size={20}
                  />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Office</p>
                  <p className="text-white text-lg font-semibold">
                    Dubai Marina, UAE
                  </p>
                </div>
              </div>

              {/* Quick Connect */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4">
                  Quick Connect
                </h4>
                <div className="flex gap-4">
                  <button
                    onClick={handleWhatsApp}
                    className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <MessageCircle size={20} />
                    <span>WhatsApp</span>
                  </button>
                  <button
                    onClick={handleCall}
                    className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <Phone size={20} />
                    <span>Call</span>
                  </button>
                  <button
                    onClick={handleInstagram}
                    className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <Instagram size={20} />
                    <span>Instagram</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            <div className="bg-gradient-to-br from-green-600/10 to-green-600/5 border border-green-600/20 rounded-2xl p-6 hover:border-green-600/40 transition-all duration-300">
              <div className="text-5xl font-black text-green-600 mb-2">
                500+
              </div>
              <p className="text-gray-400 text-sm">Happy Clients</p>
            </div>

            <div className="bg-gradient-to-br from-red-600/10 to-red-600/5 border border-red-600/20 rounded-2xl p-6 hover:border-red-600/40 transition-all duration-300">
              <div className="text-5xl font-black text-red-600 mb-2">24/7</div>
              <p className="text-gray-400 text-sm">Available</p>
            </div>

            <div className="bg-gradient-to-br from-green-600/10 to-green-600/5 border border-green-600/20 rounded-2xl p-6 hover:border-green-600/40 transition-all duration-300">
              <div className="text-5xl font-black text-green-600 mb-2">98%</div>
              <p className="text-gray-400 text-sm">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
