"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send, Instagram, Linkedin, Twitter, Zap, Sparkles, Globe, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "investment"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Dubai Office",
      details: ["Business Bay, Dubai", "United Arab Emirates"],
      action: "View on Map",
      color: "from-rose-400 to-pink-600",
      bgColor: "from-rose-500/20 to-pink-500/20",
      borderColor: "border-rose-400/30"
    },
    {
      icon: Phone,
      title: "Phone & WhatsApp",
      details: ["+971 XX XXX XXXX", "Available 24/7"],
      action: "Call Now",
      color: "from-emerald-400 to-teal-600",
      bgColor: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-400/30"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@raastarealty.com", "Quick response guaranteed"],
      action: "Send Email",
      color: "from-violet-400 to-purple-600",
      bgColor: "from-violet-500/20 to-purple-500/20",
      borderColor: "border-violet-400/30"
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", url: "#", color: "from-pink-400 to-rose-600" },
    { icon: Linkedin, name: "LinkedIn", url: "#", color: "from-blue-400 to-indigo-600" },
    { icon: Twitter, name: "Twitter", url: "#", color: "from-cyan-400 to-blue-600" }
  ];

  return (
    <section id="contact" className="py-[45px] px-[12px] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-rose-500/10 to-pink-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-teal-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-gradient-to-br from-violet-500/10 to-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-[30px]">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-600 rounded-3xl flex items-center justify-center text-white shadow-lg">
              <MessageCircle size={28} />
            </div>
            <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-rose-300 via-emerald-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-3xl flex items-center justify-center text-white shadow-lg">
              <Sparkles size={28} />
            </div>
          </div>
          <p className="text-lg text-white/90 max-w-3xl mx-auto font-medium">
            We&apos;d love to connect with you. Whether you&apos;re looking to invest, join our team, or simply learn more about our <span className="bg-gradient-to-r from-rose-300 to-emerald-300 bg-clip-text text-transparent font-bold">movement</span> ✨
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {/* Contact Form - Enhanced */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-cyan-500/20 via-blue-500/15 to-indigo-500/20 rounded-xl border border-cyan-300/30 p-6 md:p-8 shadow-xl">
              <div className="text-center mb-10">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-3xl flex items-center justify-center text-white mx-auto mb-6 shadow-2xl">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">Get in Touch</h3>
                <p className="text-cyan-100/80">Let&apos;s start a conversation that changes lives</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-cyan-200 text-sm font-bold mb-3">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-white/10 border border-cyan-300/30 rounded-2xl text-white placeholder-cyan-200/50 focus:outline-none focus:border-cyan-400/70 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm font-medium"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-cyan-200 text-sm font-bold mb-3">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-white/10 border border-cyan-300/30 rounded-2xl text-white placeholder-cyan-200/50 focus:outline-none focus:border-cyan-400/70 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm font-medium"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-cyan-200 text-sm font-bold mb-3">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-white/10 border border-cyan-300/30 rounded-2xl text-white placeholder-cyan-200/50 focus:outline-none focus:border-cyan-400/70 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm font-medium"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-cyan-200 text-sm font-bold mb-3">Interest</label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-white/10 border border-cyan-300/30 rounded-2xl text-white focus:outline-none focus:border-cyan-400/70 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm font-medium"
                    >
                      <option value="investment" className="bg-slate-800">Investment Opportunities</option>
                      <option value="career" className="bg-slate-800">Career Opportunities</option>
                      <option value="buying" className="bg-slate-800">Buying Property</option>
                      <option value="selling" className="bg-slate-800">Selling Property</option>
                      <option value="partnership" className="bg-slate-800">Partnership</option>
                      <option value="other" className="bg-slate-800">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-cyan-200 text-sm font-bold mb-3">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-6 py-4 bg-white/10 border border-cyan-300/30 rounded-2xl text-white placeholder-cyan-200/50 focus:outline-none focus:border-cyan-400/70 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm resize-none font-medium"
                    placeholder="Tell us about your requirements and how we can help you..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full group/submit px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:from-cyan-400 hover:via-blue-400 hover:to-indigo-500 rounded-xl text-white font-bold text-base transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center gap-3"
                >
                  <Zap className="group-hover/submit:rotate-12 transition-transform" size={24} />
                  Send Message
                  <Send className="group-hover/submit:translate-x-2 transition-transform" size={24} />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information - Enhanced */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.bgColor} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                  <div className={`relative backdrop-blur-xl bg-gradient-to-br ${info.bgColor} rounded-3xl border ${info.borderColor} p-8 hover:border-opacity-50 transition-all duration-300 group-hover:scale-105`}>
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg flex-shrink-0`}>
                        <IconComponent size={28} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-black text-white mb-3">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-white/80 text-lg mb-1 font-medium">{detail}</p>
                        ))}
                        <button className={`mt-4 px-6 py-3 bg-gradient-to-r ${info.color} hover:shadow-xl hover:shadow-current/25 rounded-xl text-white font-bold transition-all duration-300 hover:scale-105`}>
                          {info.action}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Social Media - Enhanced */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative backdrop-blur-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl border border-indigo-400/30 p-8 hover:border-indigo-400/50 transition-all duration-300">
                <h4 className="text-2xl font-black text-white mb-6 text-center">Follow Our Journey</h4>
                <div className="flex justify-center gap-6">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        className={`w-16 h-16 bg-gradient-to-br ${social.color} hover:shadow-2xl hover:shadow-current/25 rounded-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:rotate-6 shadow-lg`}
                        aria-label={social.name}
                      >
                        <IconComponent size={28} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Contact - Enhanced */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative backdrop-blur-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl border border-green-400/30 p-8 hover:border-green-400/50 transition-all duration-300">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg animate-pulse">
                    <MessageCircle size={28} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-black text-white mb-2">Quick WhatsApp</h4>
                    <p className="text-green-100/80 text-lg font-medium">Get instant responses to your queries</p>
                  </div>
                  <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 rounded-2xl text-white font-bold transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-3">
                    <Clock size={20} />
                    Chat Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-400/20 via-emerald-400/20 via-violet-400/20 to-cyan-400/20 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
            <div className="relative backdrop-blur-2xl bg-gradient-to-br from-rose-500/20 via-emerald-500/15 via-violet-500/15 to-cyan-500/20 rounded-[3rem] border border-rose-300/30 p-12 md:p-16 shadow-2xl">
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-600 rounded-2xl flex items-center justify-center text-white animate-bounce">
                  <Globe size={28} />
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl flex items-center justify-center text-white animate-bounce delay-300">
                  <Zap size={28} />
                </div>
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                Ready to Make an Impact?
              </h3>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                Join thousands who have chosen purpose-driven real estate with Raasta Realty.
              </p>
              <button className="px-12 py-6 bg-gradient-to-r from-rose-500 via-emerald-500 to-violet-500 hover:from-rose-400 hover:via-emerald-400 hover:to-violet-400 rounded-2xl text-white font-bold text-xl transition-all duration-300 hover:scale-105 shadow-2xl">
                Start Your Journey Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
