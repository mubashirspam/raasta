"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { ContactForm } from "../forms/ContactForm";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+971 4 XXX XXXX",
    link: "tel:+97140000000",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@raastarealty.com",
    link: "mailto:info@raastarealty.com",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Downtown Dubai, UAE",
    link: "#",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Sun - Thu: 9AM - 6PM",
    link: null,
    color: "from-emerald-500 to-teal-500",
  },
];

export const ContactSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative w-full py-24 overflow-hidden font-sans"
    >
      {/* Light Animated Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #f8fafc 0%, #e0f2fe 50%, #f0f9ff 100%)",
          }}
        />

        {/* Animated gradient orbs */}
        <motion.div
          style={{ y }}
          className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-[#2EA8FF]/10 to-purple-500/5 blur-[100px]"
        />
        <motion.div
          style={{ y: useTransform(y, (v) => v * -0.5) }}
          className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-[#C9A050]/10 to-amber-500/5 blur-[100px]"
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2EA8FF]/10 border border-[#2EA8FF]/20 text-[#2EA8FF] text-xs font-bold tracking-widest uppercase mb-6">
            <MessageCircle size={12} />
            <span>Get in Touch</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight mb-4 leading-[1.1]">
            Start Your
            <br />
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2EA8FF] via-cyan-500 to-[#2EA8FF]">
                Investment Journey
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 10"
                fill="none"
              >
                <path
                  d="M2 8C80 2 220 2 298 8"
                  stroke="url(#contact-underline)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="contact-underline"
                    x1="0"
                    y1="0"
                    x2="300"
                    y2="0"
                  >
                    <stop stopColor="#2EA8FF" />
                    <stop offset="0.5" stopColor="#06B6D4" />
                    <stop offset="1" stopColor="#2EA8FF" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed mt-6">
            Ready to make your move in Dubai's real estate market? Our experts
            are here to guide you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group"
                >
                  {item.link ? (
                    <a
                      href={item.link}
                      className="block p-5 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/60 hover:bg-white/60 hover:shadow-lg hover:shadow-[#2EA8FF]/10 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg`}
                        >
                          <item.icon size={22} />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                            {item.label}
                          </p>
                          <p className="text-slate-900 font-medium">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="p-5 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/60">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}
                        >
                          <item.icon size={22} />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                            {item.label}
                          </p>
                          <p className="text-slate-900 font-medium">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/971000000000"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex items-center gap-4 p-6 rounded-2xl bg-white/40 backdrop-blur-xl border border-[#25D366]/30 hover:bg-white/60 hover:border-[#25D366]/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#25D366] flex items-center justify-center text-white shadow-lg shadow-[#25D366]/30 group-hover:scale-110 transition-transform">
                <MessageCircle size={28} />
              </div>
              <div className="flex-1">
                <p className="text-slate-900 font-bold text-lg">
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
            </motion.a>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-[300px] bg-white/40 backdrop-blur-xl border border-white/60">
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
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Form Card */}
            <div className="relative p-8 md:p-10 rounded-3xl bg-white/50 backdrop-blur-2xl border border-white/60 shadow-xl shadow-slate-200/30">
              {/* Decorative gradient border */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-[#2EA8FF]/10 via-white/50 to-cyan-500/10 -z-10" />

              <div className="text-center mb-8">
                <img
                  src="/logo_black.svg"
                  alt="Raasta Realty"
                  className="h-12 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Start Your Safe & Secure Investment
                </h3>
                <p className="text-slate-600 text-sm">
                  Fill in your details to begin
                </p>
              </div>

              <ContactForm variant="light" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
