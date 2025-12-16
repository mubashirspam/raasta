import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";

type ContentItemProps = {
  subtitle: string;
  title: string;
  description: string;
};

const contentItems = [
  {
    subtitle: "Experience Luxury",
    title: "Life in Dubai",
    description:
      "Discover a world where architectural marvels meet cultural heritage",
  },
  {
    subtitle: "Modern Living",
    title: "Urban Paradise",
    description:
      "Exclusive properties in the heart of a thriving metropolitan city",
  },
  {
    subtitle: "Premium Locations",
    title: "Waterfront Views",
    description:
      "Wake up to breathtaking panoramas of Dubai's iconic coastline",
  },
  {
    subtitle: "Investment Opportunity",
    title: "Growing Market",
    description:
      "Secure your future with properties in one of the world's fastest growing cities",
  },
  {
    subtitle: "Exceptional Design",
    title: "Architectural Wonders",
    description:
      "Live in spaces designed by world-renowned architects and designers",
  },
];

const OverlayContent = ({
  item,
  isActive,
}: {
  item: ContentItemProps;
  isActive: boolean;
}) => {
  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 transition-opacity duration-700 ${
        isActive
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={isActive ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <span className="block text-sm md:text-lg font-medium tracking-[0.3em] uppercase mb-4 text-blue-200">
          {item.subtitle}
        </span>
        <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-6">
          {item.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
          {item.description}
        </p>
      </motion.div>
    </div>
  );
};

export const VideoShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoDuration, setVideoDuration] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const isVideoReadyRef = useRef(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (videoRef.current && videoDuration > 0 && isVideoReadyRef.current) {
      const targetTime = latest * videoDuration;

      if (
        Number.isFinite(targetTime) &&
        targetTime >= 0 &&
        targetTime <= videoDuration
      ) {
        try {
          videoRef.current.currentTime = targetTime;
        } catch (e) {
          // Video not ready yet
        }
      }
    }

    const index = Math.min(
      Math.floor(latest * contentItems.length),
      contentItems.length - 1
    );
    setActiveIndex(index);
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      if (video) {
        setVideoDuration(video.duration || 9);
        video.pause();
        video.currentTime = 0;
      }
    };

    const handleCanPlay = () => {
      isVideoReadyRef.current = true;
      setIsVideoReady(true);
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("canplay", handleCanPlay);

    if (video.readyState >= 1) {
      handleLoadedMetadata();
    }
    if (video.readyState >= 3) {
      isVideoReadyRef.current = true;
      setIsVideoReady(true);
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{
        height: videoDuration ? `${contentItems.length * 150}vh` : "100vh",
      }}
    >
      {/* STICKY WRAPPER: This stays fixed on the screen while the parent scrolls */}
      <div className="sticky top-0 left-0 h-screen w-full overflow-hidden">
        {/* VIDEO LAYER */}
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          playsInline
          preload="auto"
          poster="/outputs-poster.jpg"
        >
          <source src="/outputs.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Loading indicator */}
        {!isVideoReady && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-10">
            <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
          </div>
        )}

        {/* <div className="absolute inset-0 bg-black/40 z-10" /> */}

        {/* CONTENT LAYER */}
        <div className="relative z-20 h-full w-full flex items-center justify-center">
          {contentItems.map((item, index) => (
            <OverlayContent
              key={index}
              item={item}
              isActive={index === activeIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
