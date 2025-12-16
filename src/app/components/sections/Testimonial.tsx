import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { testimonials } from "@/app/data/testmonial";
import TestimonialCard from "../cards/TestmonialCard";

export const Testimonial: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full py-24 overflow-hidden font-sans">
      
      {/* =========================================================================
          BACKGROUND COMPOSITION (Multi-Color Iridescent Theme)
         ========================================================================= */}
      
      {/* 1. Bottom Layer: Linear Gradient Base */}
      <div 
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(135deg, #fdfbf7 0%, #eef2ff 40%, #fdf2f8 100%)' }} 
      />

      {/* 2. Middle Layer: Rotated Blobs for Multi-Color Effect */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {/* Top Left: Soft Violet */}
        <div 
          className="absolute -left-[10%] -top-[10%] w-[50vw] h-[50vw] rounded-full blur-[100px] opacity-40 mix-blend-multiply"
          style={{ background: '#ddd6fe', transform: 'rotate(0deg)' }}
        />
        {/* Top Right: Light Cyan/Blue */}
        <div 
          className="absolute -right-[5%] top-[10%] w-[50vw] h-[50vw] rounded-full blur-[100px] opacity-40 mix-blend-multiply"
          style={{ background: '#bae6fd', transform: 'rotate(-20deg)' }}
        />
        {/* Bottom Left: Warm Peach/Pink */}
        <div 
          className="absolute left-[10%] bottom-[10%] w-[40vw] h-[40vw] rounded-full blur-[100px] opacity-40 mix-blend-multiply"
          style={{ background: '#fbcfe8' }}
        />
         {/* Bottom Right: Soft Amber */}
         <div 
          className="absolute right-[0%] -bottom-[10%] w-[40vw] h-[40vw] rounded-full blur-[100px] opacity-30 mix-blend-multiply"
          style={{ background: '#fde68a' }}
        />
      </div>

      {/* 3. Top Layer: Glass Overlay & Noise */}
      <div className="absolute inset-0 z-20 bg-white/30 backdrop-blur-[60px]" />
      <div className="absolute inset-0 z-20 opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      {/* =========================================================================
          CONTENT
         ========================================================================= */}
      
      <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 border border-white/50 text-[#2EA8FF] text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
            <Star size={12} className="fill-current" />
            <span>Trusted by the Elite</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-4">
            Stories from <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2EA8FF] via-purple-500 to-pink-500">Our Residents</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
            We don't just sell properties; we facilitate life-changing investments. Hear from the families and investors who trusted us with their future.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <TestimonialCard data={testimonial} index={index} />
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className={`mt-20 pt-10 border-t border-white/40 flex flex-wrap justify-center md:justify-between items-center gap-8 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
           <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-slate-900">AED 2.5B+</h3>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">Property Sold</p>
           </div>
           <div className="hidden md:block w-px h-12 bg-slate-300/50"></div>
           <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-slate-900">50+</h3>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">Nationalities Served</p>
           </div>
           <div className="hidden md:block w-px h-12 bg-slate-300/50"></div>
           <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-slate-900">98%</h3>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">Client Retention</p>
           </div>
        </div>

      </div>
    </section>
  );
}