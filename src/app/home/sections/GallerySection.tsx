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

            <h2 className="text-3xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight mb-4 leading-[1.1]">
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

            <div className="flex flex-row justify-center gap-4 mt-6">
              <a
                href="https://www.instagram.com/raasta_realty"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center shadow-lg shadow-pink-500/25 hover:scale-110 hover:shadow-pink-500/40 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@raastarealty?si=4pq1a5xN46XEPoKe"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 rounded-full bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center shadow-lg shadow-red-500/25 hover:scale-110 hover:shadow-red-500/40 transition-all duration-300"
                aria-label="YouTube"
              >
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/people/Raasta-Realty/61582162074282/?mibextid=wwXIfr&rdid=C3beyC24lEyBtYdu&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17qQijEB4k%2F%3Fmibextid%3DwwXIfr%26ref%3D1"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/25 hover:scale-110 hover:shadow-blue-500/40 transition-all duration-300"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@raastarealty"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center shadow-lg shadow-gray-800/25 hover:scale-110 hover:shadow-gray-800/40 transition-all duration-300"
                aria-label="TikTok"
              >
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/raasta-realty"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 rounded-full bg-gradient-to-br from-blue-700 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/25 hover:scale-110 hover:shadow-blue-600/40 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://x.com/raastarealty"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center shadow-lg shadow-gray-800/25 hover:scale-110 hover:shadow-gray-800/40 transition-all duration-300"
                aria-label="X (Twitter)"
              >
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
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
