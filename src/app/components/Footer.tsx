"use client";

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-black text-white mb-4">
              Raasta Realty
            </h3>
            <p className="text-sm mb-4">
              Your trusted partner in finding the perfect investment properties
              in Dubai.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="https://instagram.com/raastarealty"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="hover:text-green-600 transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#properties"
                  className="hover:text-green-600 transition-colors text-sm"
                >
                  Properties
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-green-600 transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#consultation"
                  className="hover:text-green-600 transition-colors text-sm"
                >
                  Consultation
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-green-600 transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition-colors text-sm"
                >
                  Luxury Properties
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition-colors text-sm"
                >
                  Off-Plan Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition-colors text-sm"
                >
                  Commercial Real Estate
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition-colors text-sm"
                >
                  Investment Advisory
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition-colors text-sm"
                >
                  Property Management
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-green-600 mt-1 flex-shrink-0" />
                <a
                  href="mailto:info@raastarealty.com"
                  className="text-sm hover:text-green-600 transition-colors"
                >
                  info@raastarealty.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone
                  size={16}
                  className="text-green-600 mt-1 flex-shrink-0"
                />
                <a
                  href="tel:+971501234567"
                  className="text-sm hover:text-green-600 transition-colors"
                >
                  +971 50 123 4567
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-green-600 mt-1 flex-shrink-0"
                />
                <p className="text-sm">Dubai Marina, UAE</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-center md:text-left">
            © {currentYear} Raasta Realty. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-green-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-green-600 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-green-600 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
