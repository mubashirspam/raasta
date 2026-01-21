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

const fallbackLogos = [{ name: "Emaar", src: "/companies-logo/emaar.png" }];

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
      className="py-2 md:py-6 -rotate-3 md:-rotate-1 overflow-hidden border-y-2 border-black relative z-50"
      style={{
        background:
          "linear-gradient(45deg, #eed7f5 0%, #fccec2 50%, #c6e1fb 100%)",
      }}
    >
      <div className="flex w-max animate-marquee">
        {/* First set */}
        <div className="flex gap-8 md:gap-16 items-center px-4 md:px-8">
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
        <div className="flex gap-8 md:gap-16 items-center px-4 md:px-8">
          {logos.map((company, idx) => (
            <div
              key={`dup-${idx}`}
              className="shrink-0 h-10 flex items-center justify-center"
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
