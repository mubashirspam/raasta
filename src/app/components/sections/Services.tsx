"use client";

import React from "react";
import { RevealSection } from "../ui";
import { ServiceCard } from "../cards";
import { SERVICES } from "../../data";

export const Services: React.FC = () => {
  return (
    <section className="py-24 bg-white/40 backdrop-blur-sm border-y border-white/50">
      <div className="max-w-7xl mx-auto px-6">
        <RevealSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Real Estate Solutions
            </h2>
            <p className="text-slate-500">
              Whether you&apos;re looking to buy your forever home or invest in
              Dubai&apos;s booming market, we guide you every step of the way.
            </p>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <RevealSection key={idx} delay={idx * 100}>
              <ServiceCard service={service} />
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
};
