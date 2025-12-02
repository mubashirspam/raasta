// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export const Carousel = ({
//   items,
//   autoPlayInterval = 5000,
// }: {
//   items: React.ReactElement[];
//   autoPlayInterval?: number;
// }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % items.length);
//     }, autoPlayInterval);

//     return () => clearInterval(interval);
//   }, [items.length, autoPlayInterval]);

//   useEffect(() => {
//     if (containerRef.current) {
//       const container = containerRef.current;
//       const activeCard = container.children[activeIndex] as HTMLElement;
//       if (activeCard) {
//         const scrollLeft =
//           activeCard.offsetLeft -
//           container.offsetWidth / 2 +
//           activeCard.offsetWidth / 2;
//         container.scrollTo({ left: scrollLeft, behavior: "smooth" });
//       }
//     }
//   }, [activeIndex]);

//   return (
//     <div className="relative w-full">
//       <div
//         ref={containerRef}
//         className="flex gap-4 py-10 overflow-x-scroll scroll-smooth scrollbar-hide px-4"
//       >
//         {items.map((item, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{
//               opacity: activeIndex === index ? 1 : 0.5,
//               scale: activeIndex === index ? 1 : 0.85,
//             }}
//             transition={{ duration: 0.5 }}
//             onClick={() => setActiveIndex(index)}
//             className="cursor-pointer"
//           >
//             {React.cloneElement(
//               item as React.ReactElement<{ isActive: boolean }>,
//               {
//                 isActive: activeIndex === index,
//               }
//             )}
//           </motion.div>
//         ))}
//       </div>

//       {/* Indicators */}
//       <div className="flex justify-center gap-2 mt-4">
//         {items.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveIndex(index)}
//             className={`h-2 rounded-full transition-all duration-300 ${
//               activeIndex === index ? "w-8 bg-green-600" : "w-2 bg-gray-400"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// interface CardProps {
//   card: {
//     src: string;
//     title: string;
//     category: string;
//     content?: React.ReactNode;
//     videoUrl?: string;
//   };
//   index: number;
//   layout?: boolean;
//   isActive?: boolean;
// }

// export const Card = ({ card, index, layout, isActive }: CardProps) => {
//   const videoRef = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video || !card.videoUrl) return;

//     if (isActive) {
//       // Only play if not already playing
//       if (video.paused) {
//         const playPromise = video.play();
//         if (playPromise !== undefined) {
//           playPromise.catch((error) => {
//             // Ignore AbortError - it means play was interrupted by pause
//             if (error.name !== "AbortError") {
//               console.error("Video playback failed:", error);
//             }
//           });
//         }
//       }
//     } else {
//       video.pause();
//       video.currentTime = 0;
//     }
//   }, [isActive, card.videoUrl]);

//   return (
//     <motion.div
//       className="relative rounded-3xl overflow-hidden h-[500px] w-[350px] md:w-[400px] bg-gray-900 flex-shrink-0"
//       layoutId={layout ? `card-${index}` : undefined}
//     >
//       {card.videoUrl ? (
//         <video
//           ref={videoRef}
//           className="absolute inset-0 w-full h-full object-cover"
//           loop
//           muted
//           playsInline
//           preload="auto"
//         >
//           <source src={card.videoUrl} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       ) : (
//         <Image src={card.src} alt={card.title} fill className="object-cover" />
//       )}

//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

//       <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//         <p className="text-sm font-medium text-gray-300 mb-2">
//           {card.category}
//         </p>
//         <h3 className="text-2xl font-bold">{card.title}</h3>
//       </div>
//     </motion.div>
//   );
// };
