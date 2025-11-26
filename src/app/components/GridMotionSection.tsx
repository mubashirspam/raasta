"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface GridMotionProps {
  items?: (string | React.ReactNode)[];
  gradientColor?: string;
}

const GridMotionSection: React.FC<GridMotionProps> = ({
  items = [],
  gradientColor = "black",
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mouseXRef = useRef<number>(
    typeof window !== "undefined" ? window.innerWidth / 2 : 0
  );

  // Property images for the grid
  const propertyImages = [
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1601760562234-9814eea6663a?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=400&fit=crop",
  ];

  const totalItems = 28;
  const combinedItems =
    items.length > 0 ? items.slice(0, totalItems) : propertyImages;

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);

    const handleMouseMove = (e: MouseEvent) => {
      mouseXRef.current = e.clientX;
    };

    const updateMotion = () => {
      const maxMoveAmount = 300;
      const baseDuration = 0.8;
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2];

      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1;
          const moveAmount =
            ((mouseXRef.current / window.innerWidth) * maxMoveAmount -
              maxMoveAmount / 2) *
            direction;

          gsap.to(row, {
            x: moveAmount,
            duration:
              baseDuration + inertiaFactors[index % inertiaFactors.length],
            ease: "power3.out",
            overwrite: "auto",
          });
        }
      });
    };

    const removeAnimationLoop = gsap.ticker.add(updateMotion);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      removeAnimationLoop();
    };
  }, []);

  return (
    <div className="h-full w-full overflow-hidden" ref={gridRef}>
      <section
        className="relative flex items-center justify-center w-full h-screen overflow-hidden"
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`,
        }}
      >
        {/* Centered Title Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
          <h2 className="text-6xl md:text-8xl font-black text-white mb-4 text-center drop-shadow-2xl">
            Explore Properties
          </h2>
          <p className="text-xl md:text-2xl text-white/90 text-center max-w-2xl px-4">
            Move your cursor to explore our stunning collection
          </p>
        </div>

        {/* Grid Container */}
        <div className="relative w-[150vw] h-[150vh] grid grid-rows-4 gap-4 z-[2] -rotate-[15deg] origin-center">
          {[...Array(4)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-7 gap-4"
              ref={(el) => {
                rowRefs.current[rowIndex] = el;
              }}
            >
              {[...Array(7)].map((_, itemIndex) => {
                const content = combinedItems[rowIndex * 7 + itemIndex];
                const isImage =
                  typeof content === "string" && content.startsWith("http");

                return (
                  <div key={itemIndex} className="relative">
                    <div className="relative w-full h-full overflow-hidden rounded-xl bg-[#111] flex items-center justify-center text-white text-2xl shadow-2xl">
                      {isImage ? (
                        <div
                          className="absolute inset-0 bg-cover bg-center hover:scale-110 transition-transform duration-500"
                          style={{
                            backgroundImage: `url(${content})`,
                          }}
                        />
                      ) : (
                        <div className="p-4 text-center z-[1]">{content}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Fullview overlay */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-black/50" />
      </section>
    </div>
  );
};

export default GridMotionSection;
