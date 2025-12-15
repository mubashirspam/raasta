"use client";

import React from "react";
import { Star } from "lucide-react";

const marqueeItems = [
  "Luxury Living",
  "Palm Jumeirah",
  "Downtown Dubai",
  "Waterfront Villas",
  "Golden Visa",
  "Off-Plan Investment",
];

export const Marquee: React.FC = () => {
  return (
    <div
      className="py-6 -rotate-1 overflow-hidden border-y-2 border-black relative z-50"
      style={{
        background:
          "linear-gradient(43deg, #eed7f5 0%, #fccec2 50%, #c6e1fb 100%)",
      }}
    >
      <div className="flex whitespace-nowrap animate-marquee">
        {/* First set */}
        <div className="flex gap-8 items-center">
          {marqueeItems.map((item, idx) => (
            <React.Fragment key={idx}>
              <span className="text-4xl font-bold uppercase tracking-tight text-black">
                {item}
              </span>
              <Star className="w-8 h-8 fill-black text-black" />
            </React.Fragment>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex gap-8 items-center ml-8">
          {marqueeItems.map((item, idx) => (
            <React.Fragment key={`dup-${idx}`}>
              <span className="text-4xl font-bold uppercase tracking-tight text-black">
                {item}
              </span>
              <Star className="w-8 h-8 fill-black text-black" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
