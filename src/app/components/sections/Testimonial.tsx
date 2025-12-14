"use client";

import React from "react";
import { Star } from "lucide-react";
import { RevealSection } from "../ui";

export const Testimonial: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto text-center">
      <RevealSection>
        <div className="bg-white/60 backdrop-blur-xl border border-white p-10 rounded-3xl shadow-lg relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#2EA8FF] rounded-full flex items-center justify-center text-white ring-4 ring-slate-50">
            <Star fill="currentColor" size={20} />
          </div>
          <p className="text-2xl text-slate-700 font-light italic mb-6 leading-relaxed">
            &ldquo;Finding a penthouse in Marina was daunting until I met the
            Raasta team. Their transparency, market knowledge, and digital-first
            approach made the process seamless. Truly a white-glove
            service.&rdquo;
          </p>
          <div>
            <h4 className="font-bold text-slate-900">Omar Khalid</h4>
            <p className="text-slate-500 text-sm">
              Investor, bought in Dubai Marina
            </p>
          </div>
        </div>
      </RevealSection>
    </section>
  );
};
