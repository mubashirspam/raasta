"use client";

import React from "react";
import { RevealSection } from "../ui";

interface FooterCTAProps {
  onContact: () => void;
}

export const FooterCTA: React.FC<FooterCTAProps> = ({ onContact }) => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#2EA8FF]/5 -skew-y-3 transform origin-left z-0"></div>
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <RevealSection>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to find your home?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Schedule a private viewing or speak to an agent today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onContact}
              className="px-8 py-4 bg-[#2EA8FF] text-white rounded-xl font-bold text-lg shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all"
            >
              Request a Viewing
            </button>
            <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all">
              Browse Listings
            </button>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
