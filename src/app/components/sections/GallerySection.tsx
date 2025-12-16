"use client";

import React, { useEffect, useRef, useState } from "react";
import { Instagram } from "lucide-react";
import { MediaCard } from "../cards";
import { GALLERY_COLUMNS } from "../../data";

export const GallerySection: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  //
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrolledIntoView = windowHeight - rect.top;

      if (scrolledIntoView > 0 && rect.bottom > 0) {
        setOffsetY(Math.max(0, scrolledIntoView));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const colConfig = [
    { speed: 0.3, marginTop: "450px" },
    { speed: 0.2, marginTop: "350px" },
    { speed: 0.1, marginTop: "150px" },
    { speed: 0.03, marginTop: "0px" },
    { speed: 0.1, marginTop: "150px" },
    { speed: 0.2, marginTop: "350px" },
    { speed: 0.4, marginTop: "450px" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 overflow-hidden font-sans bg-slate-50"
    >
      {/* --- Dynamic Background --- */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-slate-50"></div>

        {/* Animated Gradient Orbs */}
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-r from-violet-200/30 via-pink-200/30 to-fuchsia-200/30 blur-[130px] animate-pulse mix-blend-multiply"></div>
        <div
          className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-l from-blue-200/30 via-cyan-200/30 to-sky-200/30 blur-[130px] animate-pulse mix-blend-multiply"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-[30%] left-[20%] w-[50%] h-[50%] rounded-full bg-indigo-300/10 blur-[100px] mix-blend-multiply"></div>

        {/* Architectural Grid Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.03) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          }}
        ></div>

        {/* Noise Texture for Premium Paper Feel */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-20 w-full">
        {/* Header */}
        <div className="text-center mb-12 px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 border border-white/50 text-[#2EA8FF] text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
            <Instagram size={12} />
            <span>@RaastaRealty</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Life at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2EA8FF] to-violet-500">
              Raasta
            </span>
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="h-[900px] overflow-hidden relative flex justify-center pt-[100px]">
          {/* Left Fade Mask */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-30 pointer-events-none"></div>

          {/* Right Fade Mask */}
          <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-30 pointer-events-none"></div>

          {/* Bottom Fade Mask */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-50 to-transparent z-30 pointer-events-none"></div>

          {/* Grid Container - Responsive with symmetric 50% edge cut
              Mobile: 3 cols -> width 133% (4/3), margin -16.67%
              Tablet: 5 cols -> width 120% (6/5), margin -10%
              Desktop: 7 cols -> width 114% (8/7), margin -7.14%
          */}
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2 items-start w-[133%] md:w-[120%] lg:w-[114%] -ml-[16.5%] md:-ml-[10%] lg:-ml-[7%]">
            {GALLERY_COLUMNS.map((colData, colIndex) => {
              // Responsive visibility:
              // Mobile (3 cols): Show cols 2,3,4 (center 3)
              // Tablet (5 cols): Show cols 1-5 (center 5)
              // Desktop (7 cols): Show all 7
              const mobileVisible = colIndex >= 2 && colIndex <= 4;
              const tabletVisible = colIndex >= 1 && colIndex <= 5;

              return (
                <div
                  key={colIndex}
                  className={`flex-col gap-2 ${
                    mobileVisible ? "flex" : "hidden"
                  } ${tabletVisible ? "md:flex" : "md:hidden"} lg:flex`}
                  style={{
                    transform: `translateY(-${
                      offsetY * colConfig[colIndex].speed
                    }px)`,
                    marginTop: colConfig[colIndex].marginTop,
                  }}
                >
                  {[...colData, ...colData, ...colData, ...colData].map(
                    (item, i) => (
                      <MediaCard
                        key={`${colIndex}-${item.id}-${i}`}
                        item={item}
                      />
                    )
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8 relative z-40">
          <button className="px-8 py-3 rounded-full bg-slate-900 text-white font-bold text-sm shadow-xl hover:bg-[#2EA8FF] transition-colors duration-300">
            View More on Instagram
          </button>
        </div>
      </div>
    </section>
  );
};
