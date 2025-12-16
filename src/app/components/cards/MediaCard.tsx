"use client";

import React from "react";
import { Play, Heart } from "lucide-react";
import { MediaItem } from "../../data/gallery";

interface MediaCardProps {
  item: MediaItem;
}

export const MediaCard: React.FC<MediaCardProps> = ({ item }) => (
  <div className="relative group w-full mb-2 break-inside-avoid rounded-md overflow-hidden shadow-sm bg-gray-100 transform transition-transform duration-500 hover:scale-[1.02]">
    {/* Media - Forced Square Aspect Ratio */}
    <div className="relative w-full aspect-square bg-slate-200">
      <img
        src={item.url}
        alt={item.caption}
        className="w-full h-full object-cover"
      />

      {/* Video Overlay */}
      {item.type === "video" && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
          <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center text-white shadow-xl">
            <Play size={12} fill="currentColor" className="ml-0.5" />
          </div>
        </div>
      )}

      {/* Hover Info Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2">
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
