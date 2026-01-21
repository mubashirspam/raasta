"use client";

import React, { useEffect, useRef, useState } from "react";
import { Instagram } from "lucide-react";
import { MediaCard } from "../cards";
import { GALLERY_COLUMNS } from "../../data";
import { MediaItem } from "@/app/types";

interface GalleryMedia {
  _id: string;
  title: string;
  mediaType: "image" | "video";
  video?: {
    asset: {
      url: string;
    };
  };
  image?: {
    asset: {
      url: string;
    };
  };
  likes?: string;
  order: number;
}

interface GallerySectionProps {
  videos?: GalleryMedia[];
}

export const GallerySection: React.FC<GallerySectionProps> = ({ videos }) => {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

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
    { speed: 0.2, marginTop: "450px" },
    { speed: 0.2, marginTop: "350px" },
    { speed: 0.1, marginTop: "150px" },
    { speed: 0.03, marginTop: "0px" },
    { speed: 0.1, marginTop: "150px" },
    { speed: 0.2, marginTop: "350px" },
    { speed: 0.2, marginTop: "450px" },
  ];

  const [deviceType, setDeviceType] = useState<"mobile" | "tablet" | "desktop">(
    "desktop",
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDeviceType("mobile");
      } else if (width < 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const distributeVideos = () => {
    if (!videos || videos.length === 0) {
      return GALLERY_COLUMNS;
    }

    const columns: MediaItem[][] = [[], [], [], [], [], [], []];

    const mediaItems: MediaItem[] = videos
      .filter((media) => {
        if (media.mediaType === "video") {
          return media.video?.asset?.url;
        } else if (media.mediaType === "image") {
          return media.image?.asset.url;
        }
        return false;
      })
      .map((media, index) => ({
        id: index,
        type: media.mediaType,
        url:
          media.mediaType === "video"
            ? media.video!.asset.url
            : media.image!.asset.url,
        caption: media.title,
        likes: media.likes,
      }));

    if (mediaItems.length === 0) {
      return GALLERY_COLUMNS;
    }

    // Default Desktop Logic (Sequential Filling)
    let columnPriority: number[] = [0, 1, 2, 3, 4, 5, 6];
    let columnMaxItems: number[] = [4, 4, 4, 4, 4, 4, 4];

    if (deviceType === "tablet") {
      // Tablet Logic: 3 -> 2,4 -> 1,5,6,7 (0,5,6)
      // Prioritize filling center outward partially
      // Note: User priority group 1: [2], Max 5
      // Group 2: [1, 3], Max 5
      // Group 3: [0, 5, 6], Max 5 (Includes 4 in last group as fallback)
      columnPriority = [2, 1, 3, 4, 5, 6];
      columnMaxItems = [5, 5, 5, 5, 5, 5];
    } else if (deviceType === "mobile") {
      // Mobile Logic: 3 -> 2,4 -> 1,6,7 (0,5,6)
      // Max 8 videos per column
      columnPriority = [2, 1, 3, 4, 5, 6];
      columnMaxItems = [0, 5, 6, 6, 6, 6];
    }

    let itemIndex = 0;

    // Fill based on priority groups if needed, or round-robin through priority list
    // The user requested standard round-robin for desktop.
    // For Tablet/Mobile: "start with X fill max... then Y fill max..."
    // This implies filling each group to capacity before moving to next.

    if (deviceType === "desktop") {
      while (itemIndex < mediaItems.length) {
        let addedThisRound = false;
        for (let i = 0; i < columnPriority.length; i++) {
          const colIdx = columnPriority[i];
          if (itemIndex >= mediaItems.length) break;
          if (columns[colIdx].length < columnMaxItems[colIdx]) {
            columns[colIdx].push(mediaItems[itemIndex]);
            itemIndex++;
            addedThisRound = true;
          }
        }
        if (!addedThisRound) break;
      }
    } else {
      // Priority Filling for Mobile/Tablet
      // Priority Groups based on description
      const priorityGroups =
        deviceType === "tablet" ? [[2], [1, 3], [4, 5]] : [[2], [1, 3], [4, 5]];

      for (const group of priorityGroups) {
        if (itemIndex >= mediaItems.length) break;

        // Fill current group until max or items run out
        let groupFull = false;
        while (!groupFull && itemIndex < mediaItems.length) {
          let addedToGroup = false;
          for (const colIdx of group) {
            if (itemIndex >= mediaItems.length) break;
            if (columns[colIdx].length < columnMaxItems[colIdx]) {
              columns[colIdx].push(mediaItems[itemIndex]);
              itemIndex++;
              addedToGroup = true;
            }
          }
          if (!addedToGroup) groupFull = true;
        }
      }
    }

    return columns;
  };

  const videoColumns = distributeVideos();

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-10 overflow-hidden font-sans bg-slate-50"
    >
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-slate-50"></div>

        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-linear-to-r from-cyan-300/30 via-pink-300/30 to-violet-300/30 blur-[130px] "></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-linear-to-l from-pink-300/30 via-cyan-300/30 to-sky-300/30 blur-[130px] "></div>
        <div className="absolute top-[30%] left-[20%] w-[50%] h-[50%] rounded-full bg-indigo-300/10 blur-[100px]"></div>
        <div className="absolute z-30 inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2740%27%20height=%2740%27%20viewBox=%270%200%2040%2040%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg%20fill=%27none%27%20fill-rule=%27evenodd%27%3E%3Cg%20fill=%27%23ffffff%27%20fill-opacity=%270.1%27%3E%3Cpath%20d=%27M0%2040L40%200H20L0%2020M40%2040V20L20%2040%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-100" />
      </div>

      <div className="relative z-20 w-full h-[1000px] md:h-[1200px] lg:h-[1350px]">
        <div className="text-center mb-16 px-4 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-12 bg-linear-to-b from-transparent via-[#2EA8FF]/50 to-[#2EA8FF]" />
          <div className="absolute left-1/2 -translate-x-1/2 top-12 w-3 h-3 rounded-full bg-[#2EA8FF] shadow-lg shadow-[#2EA8FF]/50" />

          <div className="pt-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-linear-to-r from-[#2EA8FF]/10 to-violet-500/10 border border-[#2EA8FF]/20 text-[#2EA8FF] text-xs font-bold tracking-widest uppercase mb-6 shadow-sm backdrop-blur-sm">
              <Instagram size={14} />
              <span>@RaastaRealty</span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight mb-4 leading-[1.1]">
              The Raasta
              <br />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#2EA8FF] via-violet-500 to-fuchsia-500 animate-gradient">
                  We Walked Together
                </span>
                <svg
                  className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-0 w-full h-[8px] sm:h-[10px] md:h-[14px]"
                  viewBox="0 0 200 10"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 6C30 2 50 8 100 5C150 2 170 8 198 5"
                    stroke="url(#gallery-underline)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <defs>
                    <linearGradient
                      id="gallery-underline"
                      x1="0"
                      y1="0"
                      x2="200"
                      y2="0"
                    >
                      <stop stopColor="#2EA8FF" />
                      <stop offset="0.5" stopColor="#9333EA" />
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

        <div className="h-[700px] md:h-[900px] lg:h-[1050px] overflow-hidden relative pt-[100px] w-full">
          <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-linear-to-r from-pink-100 to-transparent z-30 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-linear-to-l from-pink-100 to-transparent z-30 pointer-events-none"></div>
          <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-pink-100 to-transparent z-30 pointer-events-none"></div>
          <div className="grid grid-cols-5 md:grid-cols-5 lg:grid-cols-7 gap-2 items-start w-[133%] md:w-[120%] lg:w-[114%] left-1/2 -translate-x-1/2 relative">
            {videoColumns.map((colData, colIndex) => {
              const mobileVisible = colIndex >= 1 && colIndex <= 5;
              const tabletVisible = colIndex >= 1 && colIndex <= 5;
              const s = colData;
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
                  {[...colData].map((item, i) => (
                    <MediaCard
                      key={`${colIndex}-${item.id}-${i}`}
                      item={item}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
