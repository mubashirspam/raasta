"use client";

import React, { useEffect, useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  MessageCircle, 
  ArrowUpRight,
  PhoneCall
} from "lucide-react";

export default function ContactSection() {
  const [scrollY, setScrollY] = useState(0);

  // Simple parallax effect handler
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contactDetails = [
    {
      id: "email",
      label: "Email Us",
      value: "info@raastarealty.com",
      icon: Mail,
      href: "mailto:info@raastarealty.com",
    },
    {
      id: "phone",
      label: "Call Us",
      value: "+971 50 123 4567",
      icon: Phone,
      href: "tel:+971501234567",
    },
    {
      id: "office",
      label: "Visit Office",
      value: "Dubai Marina, UAE",
      icon: MapPin,
      href: "https://goo.gl/maps/placeholder", // Replace with actual map link
    },
  ];

  const socialActions = [
    {
      id: "whatsapp",
      label: "WhatsApp",
      icon: MessageCircle,
      color: "bg-[#25D366] hover:bg-[#128C7E]",
      href: "https://wa.me/971501234567",
    },
    {
      id: "call",
      label: "Call Now",
      icon: PhoneCall,
      color: "bg-emerald-600 hover:bg-emerald-700",
      href: "tel:+971501234567",
    },
    {
      id: "instagram",
      label: "Instagram",
      icon: Instagram,
      color: "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:opacity-90",
      href: "https://instagram.com",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-zinc-950">
      
      {/* Parallax Background Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-75 ease-out"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1512453979798-5ea904ac6605?q=80&w=1920&auto=format&fit=crop')", // High-res Dubai Image
            transform: `translateY(${scrollY * 0.2}px) scale(1.1)`, // Parallax & slight scale to prevent white edges
          }}
        />
        {/* Overlay for readability - changes with theme */}
        <div className="absolute inset-0 bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-[2px] transition-colors duration-500"></div>
        
        {/* Subtle animated pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
             style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Heading & Info */}
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">
                  Always Available
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight">
                Let&apos;s discuss your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                  Dubai Property
                </span>
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-md leading-relaxed">
                Whether you&apos;re looking to buy, sell, or invest, our team of experts in Dubai Marina is ready to assist you.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-6">
              {contactDetails.map((item) => (
                <a 
                  key={item.id}
                  href={item.href}
                  className="group flex items-center gap-6 p-4 -mx-4 rounded-2xl hover:bg-white/50 dark:hover:bg-white/5 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white dark:bg-zinc-900 shadow-sm border border-zinc-100 dark:border-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white group-hover:scale-110 group-hover:border-emerald-500/30 transition-all duration-300">
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-0.5 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {item.label}
                    </p>
                    <p className="text-xl font-semibold text-zinc-900 dark:text-white flex items-center gap-2">
                      {item.value}
                      <ArrowUpRight size={16} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-zinc-400" />
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Card */}
          <div className="relative">
            {/* Decorative blurs */}
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-[2.5rem] blur-2xl opacity-0 lg:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-white/50 dark:border-white/10 p-8 md:p-10 rounded-[2rem] shadow-2xl">
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                  Quick Connect
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  Choose your preferred method to reach us instantly.
                </p>
              </div>

              <div className="grid gap-4">
                {socialActions.map((action) => (
                  <a
                    key={action.id}
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-between p-5 rounded-2xl bg-zinc-50 dark:bg-black/40 border border-zinc-100 dark:border-zinc-800 hover:border-transparent transition-all duration-300 overflow-hidden"
                  >
                    {/* Hover Gradient Background */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${action.color}`}></div>
                    
                    <div className="flex items-center gap-4 relative z-10">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 ${action.color}`}>
                        <action.icon size={22} />
                      </div>
                      <span className="text-lg font-semibold text-zinc-900 dark:text-white group-hover:translate-x-1 transition-transform">
                        {action.label}
                      </span>
                    </div>

                    <div className="relative z-10 w-10 h-10 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                      <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-300" />
                    </div>
                  </a>
                ))}
              </div>

              {/* Status Indicator */}
              <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-sm">
                <span className="text-zinc-500 dark:text-zinc-400">Response time</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">Typically under 15 mins</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}