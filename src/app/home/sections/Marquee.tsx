"use client";

import React from "react";
import Image from "next/image";

interface Developer {
  _id: string;
  name: string;
  logo: {
    asset: {
      url: string;
    };
  };
  order: number;
}

interface MarqueeProps {
  developers?: Developer[];
}

const fallbackLogos = [
  { name: "Emaar", src: "/companies-logo/emaar.png" },
];

export const Marquee: React.FC<MarqueeProps> = ({ developers }) => {
  const logos =
    developers && developers.length > 0
      ? developers.map((dev) => ({
          name: dev.name,
          src: dev.logo.asset.url,
        }))
      : fallbackLogos;

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
        <div className="flex gap-12 items-center">
          {logos.map((company, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 h-10 flex items-center justify-center"
            >
              <Image
                src={company.src}
                alt={company.name}
                width={120}
                height={40}
                className="h-10 w-auto object-contain grayscale brightness-0"
                style={{ maxWidth: "120px" }}
              />
            </div>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex gap-12 items-center ml-12">
          {logos.map((company, idx) => (
            <div
              key={`dup-${idx}`}
              className="flex-shrink-0 h-10 flex items-center justify-center"
            >
              <Image
                src={company.src}
                alt={company.name}
                width={120}
                height={40}
                className="h-10 w-auto object-contain grayscale brightness-0"
                style={{ maxWidth: "120px" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
