"use client";

import React, { useRef, useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { MediaItem } from "@/app/types";

interface MediaCardProps {
  item: MediaItem;
}

// Video cache to store loaded videos
const videoCache = new Map<string, string>();

export const MediaCard: React.FC<MediaCardProps> = ({ item }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [cachedVideoUrl, setCachedVideoUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Load and cache video
  useEffect(() => {
    if (!shouldLoad || item.type !== "video") return;
    if (!item.url.startsWith("http") && !item.url.startsWith("https")) return;

    // Check if video is already cached
    if (videoCache.has(item.url)) {
      setCachedVideoUrl(videoCache.get(item.url)!);
      return;
    }

    // Load video and cache it
    const loadVideo = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(item.url);
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);

        // Store in cache
        videoCache.set(item.url, blobUrl);
        setCachedVideoUrl(blobUrl);
      } catch (error) {
        console.error("Error loading video:", error);
        // Fallback to direct URL if caching fails
        setCachedVideoUrl(item.url);
      } finally {
        setIsLoading(false);
      }
    };

    loadVideo();

    // Cleanup blob URL on unmount
    return () => {
      if (cachedVideoUrl && cachedVideoUrl.startsWith("blob:")) {
        // Don't revoke immediately as it might be in cache
        // URL.revokeObjectURL(cachedVideoUrl);
      }
    };
  }, [shouldLoad, item.url, item.type]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setTimeout(() => setShouldLoad(true), 100);
          } else {
            setIsVisible(false);
            // Pause video when not visible
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      {
        rootMargin: "200px",
        threshold: 0.1,
      },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  // Auto-play when visible and cached
  useEffect(() => {
    if (isVisible && cachedVideoUrl && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Ignore autoplay errors
      });
    }
  }, [isVisible, cachedVideoUrl]);

  return (
    <div
      ref={cardRef}
      className="relative group w-full mb-2 break-inside-avoid rounded-md overflow-hidden shadow-sm bg-gray-100 transform transition-transform duration-500 hover:scale-[1.02]"
    >
      {/* Media - Forced Square Aspect Ratio */}
      <div className="relative w-full aspect-square bg-slate-200">
        {item.type === "video" ? (
          // Check if URL is a YouTube video ID or direct video URL
          item.url.startsWith("http") || item.url.startsWith("https") ? (
            cachedVideoUrl ? (
              <video
                ref={videoRef}
                src={cachedVideoUrl}
                className="absolute inset-0 w-full h-full object-cover"
                loop
                muted
                playsInline
                preload="auto"
              />
            ) : (
              <div className="absolute inset-0 w-full h-full bg-slate-300 animate-pulse flex items-center justify-center">
                {isLoading && (
                  <div className="text-slate-500 text-xs">Loading...</div>
                )}
              </div>
            )
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${item.url}?autoplay=1&mute=1&loop=1&playlist=${item.url}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
              title={item.caption}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              allow="autoplay; encrypted-media"
              style={{ border: 0 }}
            />
          )
        ) : (
          <>
            {shouldLoad ? (
              <>
                {/* Loading placeholder while image loads */}
                {!imageLoaded && !imageError && (
                  <div className="absolute inset-0 w-full h-full bg-slate-300 animate-pulse flex items-center justify-center">
                    <div className="text-slate-500 text-xs">Loading...</div>
                  </div>
                )}

                {/* Error state for images */}
                {imageError && (
                  <div className="absolute inset-0 w-full h-full bg-slate-200 flex items-center justify-center">
                    <div className="text-slate-400 text-xs text-center px-4">
                      Image unavailable
                    </div>
                  </div>
                )}

                {/* Actual image */}
                <img
                  src={item.url}
                  alt={item.caption}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => {
                    setImageError(true);
                    console.error(`Failed to load image: ${item.url}`);
                  }}
                />
              </>
            ) : (
              /* Initial placeholder before lazy loading triggers */
              <div className="absolute inset-0 w-full h-full bg-slate-200" />
            )}
          </>
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
};
