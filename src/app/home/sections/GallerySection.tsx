"use client";

import React, { useEffect, useRef, useState } from "react";
import { Instagram } from "lucide-react";
import { MediaCard } from "../cards";
import { GALLERY_COLUMNS } from "../../data";
import { MediaItem } from "@/app/types";

interface GalleryVideo {
  _id: string;
  title: string;
  video: {
    asset: {
      url: string;
    };
  };
  likes?: string;
  order: number;
}

interface GallerySectionProps {
  videos?: GalleryVideo[];
}

export const GallerySection: React.FC<GallerySectionProps> = ({ videos }) => {
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
    { speed: 0.3, marginTop: "450px" },
  ];

  // Convert Sanity videos to MediaItem format and distribute across columns
  const distributeVideos = () => {
    if (!videos || videos.length === 0) {
      return GALLERY_COLUMNS; // Fallback to static data
    }

    const columns: MediaItem[][] = [[], [], [], [], [], [], []];

    // Convert Sanity videos to MediaItem format, filter out invalid ones
    const mediaItems: MediaItem[] = videos
      .filter((video) => video.video?.asset?.url) // Only include videos with valid URLs
      .map((video, index) => ({
        id: index,
        type: "video" as const,
        url: video.video.asset.url,
        caption: video.title,
        likes: video.likes,
      }));

    if (mediaItems.length === 0) {
      return GALLERY_COLUMNS; // Fallback if no valid videos
    }

    // Distribute all videos across 7 columns
    // If there are more videos than columns, they wrap around
    // If there are fewer videos than columns, fill empty columns from the start
    mediaItems.forEach((item, index) => {
      const columnIndex = index % 7;
      columns[columnIndex].push(item);
    });

    // Fill empty columns by repeating from the start
    columns.forEach((column, colIndex) => {
      if (column.length === 0 && mediaItems.length > 0) {
        // Find the first available video to fill this column
        const videoIndex = colIndex % mediaItems.length;
        column.push(mediaItems[videoIndex]);
      }
    });

    return columns;
  };

  const videoColumns = distributeVideos();

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 overflow-hidden font-sans bg-slate-50"
    >
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-slate-50"></div>

        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-r from-violet-200/30 via-pink-200/30 to-fuchsia-200/30 blur-[130px] animate-pulse mix-blend-multiply"></div>
        <div
          className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-l from-blue-200/30 via-cyan-200/30 to-sky-200/30 blur-[130px] animate-pulse mix-blend-multiply"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-[30%] left-[20%] w-[50%] h-[50%] rounded-full bg-indigo-300/10 blur-[100px] mix-blend-multiply"></div>

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.03) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          }}
        ></div>

        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-20 w-full h-[1500px]">
        <div className="text-center mb-16 px-4 relative">
          {/* Decorative elements */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-12 bg-gradient-to-b from-transparent via-[#2EA8FF]/50 to-[#2EA8FF]" />
          <div className="absolute left-1/2 -translate-x-1/2 top-12 w-3 h-3 rounded-full bg-[#2EA8FF] shadow-lg shadow-[#2EA8FF]/50" />

          <div className="pt-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#2EA8FF]/10 to-violet-500/10 border border-[#2EA8FF]/20 text-[#2EA8FF] text-xs font-bold tracking-widest uppercase mb-6 shadow-sm backdrop-blur-sm">
              <Instagram size={14} />
              <span>@RaastaRealty</span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight mb-4 leading-[1.1]">
              Where Dreams
              <br />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2EA8FF] via-violet-500 to-fuchsia-500 animate-gradient">
                  Come Home
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 8C50 2 150 2 198 8"
                    stroke="url(#underline-gradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="underline-gradient"
                      x1="0"
                      y1="0"
                      x2="200"
                      y2="0"
                    >
                      <stop stopColor="#2EA8FF" />
                      <stop offset="0.5" stopColor="#8B5CF6" />
                      <stop offset="1" stopColor="#D946EF" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>

            <p className="text-slate-500 text-lg md:text-xl max-w-md mx-auto mt-6">
              Follow our journey through Dubai's most stunning properties
            </p>
          </div>

          {/* Side decorative dots */}
          <div className="hidden md:block absolute left-[15%] top-1/2 -translate-y-1/2">
            <div className="flex flex-col gap-2">
              <div className="w-2 h-2 rounded-full bg-[#2EA8FF]/30" />
              <div className="w-2 h-2 rounded-full bg-violet-500/30" />
              <div className="w-2 h-2 rounded-full bg-fuchsia-500/30" />
            </div>
          </div>
          <div className="hidden md:block absolute right-[15%] top-1/2 -translate-y-1/2">
            <div className="flex flex-col gap-2">
              <div className="w-2 h-2 rounded-full bg-fuchsia-500/30" />
              <div className="w-2 h-2 rounded-full bg-violet-500/30" />
              <div className="w-2 h-2 rounded-full bg-[#2EA8FF]/30" />
            </div>
          </div>
        </div>

        <div className="h-[1200px] overflow-hidden relative pt-[100px] w-full">
          <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-30 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-30 pointer-events-none"></div>
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-50 to-transparent z-30 pointer-events-none"></div>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2 items-start w-[133%] md:w-[120%] lg:w-[114%] left-1/2 -translate-x-1/2 relative">
            {videoColumns.map((colData, colIndex) => {
              const mobileVisible = colIndex >= 2 && colIndex <= 4;
              const tabletVisible = colIndex >= 1 && colIndex <= 5;
              return (
                <div
                  key={colIndex}
                  className={`flex-col gap-1 ${
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
      </div>
    </section>
  );
};
