"use client";

import React from "react";

export const ThemeBackground: React.FC = () => (
  <div className="fixed inset-0 z-0 pointer-events-none">
    {/* 1. Bottom Layer: Linear Gradient Base */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(43deg, #eed7f5 0%, #fccec2 50%, #c6e1fb 100%)",
      }}
    />

    {/* 2. Middle Layer: Rotated Blobs */}
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute -left-[10%] top-[5%] w-[60vw] h-[60vw] rounded-full blur-[45px] opacity-60"
        style={{
          background:
            "linear-gradient(43deg, #aed0f3 0%, rgba(174, 208, 243, 0) 100%)",
          transform: "rotate(33.69deg)",
        }}
      />
      <div
        className="absolute left-[30%] top-[40%] w-[40vw] h-[40vw] rounded-full blur-[45px] opacity-20 bg-[#ffe70f]"
        style={{ transform: "rotate(33.69deg)" }}
      />
      <div
        className="absolute -right-[10%] top-[20%] w-[50vw] h-[50vw] rounded-full blur-[55px] opacity-20 bg-[#4071ff]"
        style={{ transform: "rotate(33.69deg)" }}
      />
    </div>

    {/* 3. Top Layer: Glass Overlay */}
    <div className="absolute inset-0 bg-white/40 backdrop-blur-[100px] shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.15)]" />

    {/* 4. Architectural Grid Pattern */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.03) 1px, transparent 1px)`,
        backgroundSize: "64px 64px",
        maskImage:
          "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
      }}
    />

    {/* 5. Noise Texture */}
    <div
      className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}
    />
  </div>
);
