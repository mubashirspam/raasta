"use client";

import React from "react";
import { Heart } from "lucide-react";
import { MediaItem } from "@/app/types";

interface MediaCardProps {
  item: MediaItem;
}

export const MediaCard: React.FC<MediaCardProps> = ({ item }) => (
  <div className="relative group w-full mb-2 break-inside-avoid rounded-md overflow-hidden shadow-sm bg-gray-100 transform transition-transform duration-500 hover:scale-[1.02]">
    {/* Media - Forced Square Aspect Ratio */}
    <div className="relative w-full aspect-square bg-slate-200">
      {item.type === "video" ? (
        <iframe
          src={`https://www.youtube.com/embed/${item.url}?autoplay=1&mute=1&loop=1&playlist=${item.url}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
          title={item.caption}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          allow="autoplay; encrypted-media"
          style={{ border: 0 }}
        />
      ) : (
        <img
          src={item.url}
          alt={item.caption}
          className="w-full h-full object-cover"
        />
      )}

      {/* Hover Info Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2 pointer-events-none">
        <div className="text-white">
          <p className="font-bold text-[10px] mb-0.5 truncate">
            {item.caption}
          </p>
          <div className="flex items-center gap-2 text-[9px] opacity-90">
            <span className="flex items-center gap-1">
              <Heart size={8} fill="currentColor" /> {item.likes}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
