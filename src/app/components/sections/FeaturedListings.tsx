"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { RevealSection } from "../ui";
import { ListingCard } from "../cards";
import { PROPERTIES } from "../../data";
import { companiesLogo } from "../../data/partners";

export const FeaturedListings: React.FC = () => {
  return (
    <section className="px-6 max-w-7xl mx-auto">
      <h3 className="text-base  text-center text-slate-400 mt-28 pb-14 font-medium">
        Trusting by leading brands, including —
      </h3>
      <div className="relative max-w-5xl mx-auto overflow-hidden pb-20">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...companiesLogo, ...companiesLogo, ...companiesLogo].map(
            (company, index) => (
              <img
                key={index}
                src={company.logo}
                alt={company.name}
                className="h-12 w-auto mx-8 opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
              />
            )
          )}
        </div>
      </div>

      <RevealSection>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-sm font-bold text-[#2EA8FF] uppercase tracking-widest mb-2">
              Curated Portfolio
            </h2>
            <h3 className="text-4xl font-bold text-slate-900">
              Featured Listings
            </h3>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-slate-500 hover:text-[#2EA8FF] font-medium transition-colors mt-4 md:mt-0"
          >
            View All Properties <ArrowRight size={18} />
          </a>
        </div>
      </RevealSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROPERTIES.map((prop, idx) => (
          <RevealSection key={prop.id} delay={idx * 100}>
            <ListingCard data={prop} />
          </RevealSection>
        ))}
      </div>

      <div className="mt-12 text-center md:hidden">
        <button className="px-8 py-3 rounded-full border border-slate-300 text-slate-600 font-medium">
          View All Properties
        </button>
      </div>
    </section>
  );
};
