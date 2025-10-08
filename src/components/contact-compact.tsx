"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  Instagram, 
  MessageCircle 
} from "lucide-react";

export default function ContactCompact() {
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
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-[30px] px-[12px] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-[30px] left-[30px] w-[180px] h-[180px] bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[30px] right-[30px] w-[200px] h-[200px] bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-[24px]">
          <div className="inline-flex items-center gap-[9px] mb-[12px]">
            <div className="w-[30px] h-[30px] bg-gradient-to-br from-purple-400 to-pink-600 rounded-[9px] flex items-center justify-center text-white shadow-lg">
              <MessageSquare size={15} />
            </div>
            <h2 className="text-[1.875rem] md:text-[2.25rem] font-black bg-gradient-to-r from-purple-300 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-[30px] h-[30px] bg-gradient-to-br from-cyan-400 to-blue-600 rounded-[9px] flex items-center justify-center text-white shadow-lg">
              <Send size={15} />
            </div>
          </div>
          <p className="text-[0.875rem] text-white/90 max-w-2xl mx-auto font-medium">
            Ready to start your Dubai real estate journey? Let&apos;s connect and make it happen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
          {/* Contact Form - Compact */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-[12px] blur-lg"></div>
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-cyan-500/20 via-blue-500/15 to-indigo-500/20 rounded-[12px] border border-cyan-300/30 p-[18px] shadow-xl">
              <div className="text-center mb-[15px]">
                <div className="w-[36px] h-[36px] bg-gradient-to-br from-cyan-400 to-blue-600 rounded-[9px] flex items-center justify-center text-white mx-auto mb-[9px] shadow-lg">
                  <Send size={18} />
                </div>
                <h3 className="text-[1.125rem] font-black text-white mb-[3px]">Quick Contact</h3>
                <p className="text-[0.75rem] text-cyan-100/80">Let&apos;s start a conversation</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-[12px]">
                <div className="grid grid-cols-2 gap-[12px]">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-[12px] py-[9px] bg-white/10 border border-cyan-300/30 rounded-[9px] text-white text-[0.875rem] placeholder-cyan-200/50 focus:outline-none focus:border-cyan-400/70 transition-all duration-300 backdrop-blur-sm"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-[12px] py-[9px] bg-white/10 border border-cyan-300/30 rounded-[9px] text-white text-[0.875rem] placeholder-cyan-200/50 focus:outline-none focus:border-cyan-400/70 transition-all duration-300 backdrop-blur-sm"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-[12px]">
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-[12px] py-[9px] bg-white/10 border border-cyan-300/30 rounded-[9px] text-white text-[0.875rem] placeholder-cyan-200/50 focus:outline-none focus:border-cyan-400/70 transition-all duration-300 backdrop-blur-sm"
                      placeholder="Phone"
                    />
                  </div>
                  <div>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full px-[12px] py-[9px] bg-white/10 border border-cyan-300/30 rounded-[9px] text-white text-[0.875rem] focus:outline-none focus:border-cyan-400/70 transition-all duration-300 backdrop-blur-sm"
                    >
                      <option value="investment" className="bg-slate-800">Investment</option>
                      <option value="buying" className="bg-slate-800">Buying</option>
                      <option value="selling" className="bg-slate-800">Selling</option>
                      <option value="career" className="bg-slate-800">Career</option>
                    </select>
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-[12px] py-[9px] bg-white/10 border border-cyan-300/30 rounded-[9px] text-white text-[0.875rem] placeholder-cyan-200/50 focus:outline-none focus:border-cyan-400/70 transition-all duration-300 backdrop-blur-sm resize-none"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full group px-[18px] py-[9px] bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:from-cyan-400 hover:via-blue-400 hover:to-indigo-500 rounded-[9px] text-white font-bold text-[0.875rem] transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-[6px]"
                >
                  <Send className="group-hover:translate-x-[3px] transition-transform" size={15} />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social - Compact */}
          <div className="space-y-[12px]">
            {/* Contact Info Cards */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-purple-500/20 via-pink-500/15 to-cyan-500/20 rounded-[12px] border border-purple-300/30 p-[15px] shadow-xl">
              <h3 className="text-[1.125rem] font-black text-white mb-[12px] flex items-center gap-[6px]">
                <MapPin className="text-purple-400" size={15} />
                Contact Information
              </h3>

              <div className="space-y-[9px]">
                {/* Email */}
                <div className="flex items-center gap-[9px] p-[9px] rounded-[9px] bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <div className="w-[24px] h-[24px] bg-gradient-to-br from-purple-400 to-pink-600 rounded-[6px] flex items-center justify-center text-white flex-shrink-0">
                    <Mail size={12} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[0.75rem] font-bold text-white">Email</h4>
                    <p className="text-purple-200 text-[0.625rem]">info@raastarealty.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-[9px] p-[9px] rounded-[9px] bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <div className="w-[24px] h-[24px] bg-gradient-to-br from-cyan-400 to-blue-600 rounded-[6px] flex items-center justify-center text-white flex-shrink-0">
                    <Phone size={12} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[0.75rem] font-bold text-white">Phone</h4>
                    <p className="text-cyan-200 text-[0.625rem]">+971 50 123 4567</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-[9px] p-[9px] rounded-[9px] bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <div className="w-[24px] h-[24px] bg-gradient-to-br from-emerald-400 to-teal-600 rounded-[6px] flex items-center justify-center text-white flex-shrink-0">
                    <MapPin size={12} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[0.75rem] font-bold text-white">Office</h4>
                    <p className="text-emerald-200 text-[0.625rem]">Dubai Marina, UAE</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-[12px] pt-[12px] border-t border-white/10">
                <h4 className="text-[0.75rem] font-bold text-white mb-[9px]">Quick Connect</h4>
                <div className="flex gap-[6px]">
                  {/* WhatsApp */}
                  <a 
                    href="https://wa.me/971501234567" 
                    className="flex-1 flex items-center justify-center gap-[3px] px-[9px] py-[6px] bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 rounded-[6px] text-white text-[0.625rem] font-bold transition-all duration-300 hover:scale-105"
                  >
                    <MessageCircle size={10} />
                    WhatsApp
                  </a>
                  
                  {/* Call */}
                  <a 
                    href="tel:+971501234567" 
                    className="flex-1 flex items-center justify-center gap-[3px] px-[9px] py-[6px] bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 rounded-[6px] text-white text-[0.625rem] font-bold transition-all duration-300 hover:scale-105"
                  >
                    <Phone size={10} />
                    Call
                  </a>
                  
                  {/* Instagram */}
                  <a 
                    href="https://instagram.com/raastarealty" 
                    className="flex-1 flex items-center justify-center gap-[3px] px-[9px] py-[6px] bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 rounded-[6px] text-white text-[0.625rem] font-bold transition-all duration-300 hover:scale-105"
                  >
                    <Instagram size={10} />
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-[9px]">
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[9px] p-[12px] text-center">
                <div className="text-[1rem] font-black text-white mb-[3px]">500+</div>
                <div className="text-[0.625rem] text-white/60">Happy Clients</div>
              </div>
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[9px] p-[12px] text-center">
                <div className="text-[1rem] font-black text-white mb-[3px]">24/7</div>
                <div className="text-[0.625rem] text-white/60">Available</div>
              </div>
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[9px] p-[12px] text-center">
                <div className="text-[1rem] font-black text-white mb-[3px]">98%</div>
                <div className="text-[0.625rem] text-white/60">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
