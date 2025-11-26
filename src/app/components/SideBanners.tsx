// "use client";

// import React from "react";
// import Marquee from "react-fast-marquee";

// export default function SideBanners() {
//   return (
//     <>
//       {/* Left Banner - Green - Bottom to Top */}
//       <div className="fixed left-0 top-0 h-full z-40 w-[30px] md:w-[40px] bg-green-700/90 border-r border-green-600/50 shadow-2xl backdrop-blur-sm flex flex-col">
//         <Marquee
//           direction="up"
//           className="h-full w-full overflow-hidden"
//           autoFill={true}
//           speed={40}
//         >
//           <div
//             className="py-4 writing-vertical-rl text-white font-bold uppercase tracking-[0.2em] text-xs md:text-sm opacity-90 whitespace-nowrap flex items-center w-full"
//             style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
//           >
//             <span className="my-8">Raasta Realty</span>
//             <span className="my-8 text-green-300">✦</span>
//             <span className="my-8">Premium Properties</span>
//             <span className="my-8 text-green-300">✦</span>
//             <span className="my-8">Dubai Investment</span>
//             <span className="my-8 text-green-300">✦</span>
//           </div>
//         </Marquee>
//       </div>

//       {/* Right Banner - Red - Top to Bottom */}
//       <div className="fixed right-0 top-0 h-full z-40 w-[30px] md:w-[40px] bg-red-700/90 border-l border-red-600/50 shadow-2xl backdrop-blur-sm flex flex-col">
//         <Marquee
//           direction="down"
//           className="h-full w-full overflow-hidden"
//           autoFill={true}
//           speed={40}
//         >
//           <div
//             className="py-4 writing-vertical-rl text-white font-bold uppercase tracking-[0.2em] text-xs md:text-sm opacity-90 whitespace-nowrap flex items-center w-full"
//             style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
//           >
//             <span className="my-8">Exclusive Off-Plan</span>
//             <span className="my-8 text-red-300">✦</span>
//             <span className="my-8">Luxury Living</span>
//             <span className="my-8 text-red-300">✦</span>
//             <span className="my-8">Best ROI</span>
//             <span className="my-8 text-red-300">✦</span>
//           </div>
//         </Marquee>
//       </div>
//     </>
//   );
// }
