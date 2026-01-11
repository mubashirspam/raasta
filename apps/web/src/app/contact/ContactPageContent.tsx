"use client";

import React, { useState } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { ContactForm } from "../components/forms/ContactForm";
import { ContactModal } from "../components/ui/ContactModal";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
  Send,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+971 52 936 8338",
    link: "tel:+971529368338",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Connect@raastarealty.com",
    link: "mailto:Connect@raastarealty.com",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "1610, 16th Floor, The Prism Tower, Business Bay, Dubai, UAE",
    link: "https://maps.google.com/?q=The+Prism+Tower+Business+Bay+Dubai",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Clock,
    label: "Landline",
    value: "+971 04 576 0345",
    link: "tel:+97145760345",
    color: "from-emerald-500 to-teal-500",
  },
];

export default function ContactPageContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar onContact={() => setIsModalOpen(true)} />
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #dbeafe 100%)",
            }}
          />
          {/* Animated orbs */}
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-[#2EA8FF]/10 to-purple-500/5 blur-[100px]" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-tr from-cyan-500/10 to-blue-500/5 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2EA8FF]/10 border border-[#2EA8FF]/20 text-[#2EA8FF] text-xs font-bold tracking-widest uppercase mb-6">
              <MessageCircle size={14} />
              <span>Get in Touch</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight mb-4 leading-[1.1]">
              Let's Start a
              <br />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2EA8FF] via-cyan-500 to-[#2EA8FF]">
                  Conversation
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 250 10"
                  fill="none"
                >
                  <path
                    d="M2 8C70 2 180 2 248 8"
                    stroke="url(#contact-underline)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="contact-underline"
                      x1="0"
                      y1="0"
                      x2="250"
                      y2="0"
                    >
                      <stop stopColor="#2EA8FF" />
                      <stop offset="0.5" stopColor="#06B6D4" />
                      <stop offset="1" stopColor="#2EA8FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed mt-6">
              Ready to make your move? Our team of experts is here to guide you
              every step of the way.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="group p-5 rounded-2xl bg-white border border-slate-200 hover:shadow-lg hover:border-[#2EA8FF]/30 transition-all cursor-pointer"
              >
                {item.link ? (
                  <a
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                    >
                      <item.icon size={22} />
                    </div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                      {item.label}
                    </p>
                    <p className="text-slate-900 font-medium text-sm">
                      {item.value}
                    </p>
                  </a>
                ) : (
                  <>
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4 shadow-lg`}
                    >
                      <item.icon size={22} />
                    </div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                      {item.label}
                    </p>
                    <p className="text-slate-900 font-medium text-sm">
                      {item.value}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  We're Here to Help
                </h2>
                <p className="text-slate-600 text-lg">
                  Whether you're looking to invest in Dubai real estate or
                  explore career opportunities, our expert team is ready to
                  provide personalized guidance.
                </p>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/971529368338"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#25D366]/10 to-[#25D366]/5 border border-[#25D366]/30 hover:border-[#25D366]/50 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#25D366] flex items-center justify-center text-white shadow-lg shadow-[#25D366]/30 group-hover:scale-110 transition-transform">
                  <MessageCircle size={28} />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-slate-900 text-lg">
                    Chat on WhatsApp
                  </p>
                  <p className="text-slate-600 text-sm">
                    Get instant response from our team
                  </p>
                </div>
                <ArrowRight
                  size={20}
                  className="text-[#25D366] group-hover:translate-x-1 transition-transform"
                />
              </a>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden h-[300px] bg-slate-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178509345498!2d55.2707!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzE3LjMiTiA1NcKwMTYnMTQuNSJF!5e0!3m2!1sen!2sae!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right - Form */}
            <div className="relative">
              <div className="p-8 md:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl">
                <div className="text-center mb-8">
                  <img
                    src="/logo_black.svg"
                    alt="Raasta Realty"
                    className="h-12 mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Start Your Safe & Secure Investment
                  </h3>
                  <p className="text-slate-600">
                    Fill in your details to begin
                  </p>
                </div>

                <ContactForm variant="light" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ or Trust Section */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
            Trusted by Hundreds of Clients
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold text-[#2EA8FF] mb-2">500+</p>
              <p className="text-slate-600">Happy Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#2EA8FF] mb-2">
                AED 2.5B+
              </p>
              <p className="text-slate-600">Property Sold</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#2EA8FF] mb-2">98%</p>
              <p className="text-slate-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
