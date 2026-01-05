"use client";

import React from "react";
import Image from "next/image";

const companyLogos = [
  { name: "Emaar", src: "/companies-logo/emaar.png" },
  { name: "Damac", src: "/companies-logo/damac.png" },
  { name: "Nakheel", src: "/companies-logo/nakheel.png" },
  { name: "Sobha", src: "/companies-logo/sobha.png" },
  { name: "Azizi", src: "/companies-logo/azizi.png" },
  { name: "Danube", src: "/companies-logo/danube.png" },
  // { name: "Ellington", src: "/companies-logo/ellington.png" },
  { name: "Omniyat", src: "/companies-logo/omniyat.png" },
  { name: "Samana", src: "/companies-logo/samana.png" },
  // { name: "Aldar", src: "/companies-logo/aldar.png" },
  { name: "Deyaar", src: "/companies-logo/deyaar.png" },
  // { name: "Nshama", src: "/companies-logo/nshama.png" },
  { name: "Tiger", src: "/companies-logo/tiger.png" },
  // { name: "Dar Global", src: "/companies-logo/darglobal.png" },
  { name: "Majid Al Futtaim", src: "/companies-logo/majidalfuttaim.png" },
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
        <div className="flex gap-12 items-center">
          {companyLogos.map((company, idx) => (
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
          {companyLogos.map((company, idx) => (
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
