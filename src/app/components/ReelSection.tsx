"use client";

import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";

export default function ReelSection() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Explore Premium Properties
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover our handpicked collection of luxury real estate across
            Dubai
          </p>
        </div>
        <Carousel items={cards} autoPlayInterval={6000} />
      </div>
    </section>
  );
}

const data = [
  {
    category: "Downtown Dubai",
    title: "Luxury Penthouse with Burj Khalifa View",
    src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=1200&fit=crop",
    videoUrl:
      "https://cdn.pixabay.com/video/2022/08/15/127867-740935622_large.mp4",
  },
  {
    category: "Dubai Marina",
    title: "Modern Waterfront Apartment",
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=1200&fit=crop",
    videoUrl:
      "https://cdn.pixabay.com/video/2023/05/12/162707-827176455_large.mp4",
  },
  {
    category: "Palm Jumeirah",
    title: "Exclusive Beach Villa",
    src: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=1200&fit=crop",
    videoUrl:
      "https://cdn.pixabay.com/video/2022/04/04/113613-695828038_large.mp4",
  },
  {
    category: "Business Bay",
    title: "Premium Office Space",
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=1200&fit=crop",
    videoUrl:
      "https://cdn.pixabay.com/video/2023/07/30/173657-850834765_large.mp4",
  },
  {
    category: "Jumeirah Beach Residence",
    title: "Seaside Luxury Living",
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=1200&fit=crop",
    videoUrl:
      "https://cdn.pixabay.com/video/2022/12/01/141476-777516806_large.mp4",
  },
  {
    category: "Dubai Hills Estate",
    title: "Contemporary Family Home",
    src: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&h=1200&fit=crop",
    videoUrl:
      "https://cdn.pixabay.com/video/2023/03/02/151764-802468831_large.mp4",
  },
  {
    category: "Arabian Ranches",
    title: "Spacious Villa with Garden",
    src: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=800&h=1200&fit=crop",
    videoUrl:
      "https://cdn.pixabay.com/video/2022/07/28/125434-733831468_large.mp4",
  },
  {
    category: "DIFC",
    title: "High-Rise Investment Property",
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=1200&fit=crop",
    videoUrl:
      "https://cdn.pixabay.com/video/2023/06/26/169142-841051929_large.mp4",
  },
  {
    category: "Dubai Creek Harbour",
    title: "Modern Waterfront Living",
    src: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&h=1200&fit=crop",
    videoUrl:
      "https://cdn.pixabay.com/video/2022/09/28/132999-755959736_large.mp4",
  },
  {
    category: "Emirates Hills",
    title: "Ultra-Luxury Mansion",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=1200&fit=crop",
    videoUrl:
      "https://cdn.pixabay.com/video/2023/04/21/159685-820161824_large.mp4",
  },
];
