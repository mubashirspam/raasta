"use client";

import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

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
    <div>
      <div className="flex items-center justify-center gap-2 md:gap-5">
        <Sparkles className="w-3 h-3 md:w-5 md:h-5 text-emerald-500 mt-4" />
        <h2 className="mt-10 text-md md:text-2xl lg:text-2xl font-medium text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500  tracking-tight mb-6 text-center">
          Trusted by Leading Developers
        </h2>
        <Sparkles className="w-3 h-3 md:w-5 md:h-5 text-emerald-500 mt-4" />
      </div>

      <div
        className="py-2 md:py-6 overflow-hidden border-y-2 border-black relative z-50"
        style={{
          background:
            "linear-gradient(45deg, #eed7f5 0%, #fccec2 50%, #c6e1fb 100%)",
        }}
      >
        <div className="flex w-max animate-marquee">
          {/* First set */}
          <div className="flex gap-7 items-center px-4 md:px-8">
            {logos.map((company, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 h-10 flex items-center justify-center"
              >
                <Image
                  src={company.src}
                  alt={company.name}
                  width={0}
                  height={40}
                  className="h-10 w-auto object-contain grayscale brightness-0"
                  sizes="100vw"
                />
              </div>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex gap-7 items-center px-4 md:px-8">
            {logos.map((company, idx) => (
              <div
                key={`dup-${idx}`}
                className="shrink-0 h-10 flex items-center justify-center"
              >
                <Image
                  src={company.src}
                  alt={company.name}
                  width={0}
                  height={40}
                  className="h-10 w-auto object-contain grayscale brightness-0"
                  sizes="100vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
