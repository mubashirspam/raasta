"use client";

import React from "react";
import { Award, Users, Target, TrendingUp } from "lucide-react";
import Image from "next/image";

const ServicesSection = () => {
  const services = [
    {
      icon: Award,
      title: "Property Valuation",
      description:
        "All-inclusive real estate services to facilitate the easy and confident purchase, sale, and management of your properties.",
      tags: ["Appraisal", "Market Analysis", "Assessment", "Reports"],
      number: "01",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=80",
    },
    {
      icon: Users,
      title: "Property Management",
      description:
        "All-inclusive real estate services to facilitate the easy and confident purchase, sale, and management of your properties.",
      tags: ["Maintenance", "Tenant Relations", "Operations", "Support"],
      number: "02",
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=500&q=80",
    },
    {
      icon: Target,
      title: "Business Consulting",
      description:
        "Business consulting involves providing expert advice and services to help real estate businesses improve performance and achieve their goals.",
      tags: ["Strategy", "Advisory", "Planning", "Growth"],
      number: "03",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&q=80",
    },
    {
      icon: TrendingUp,
      title: "Invest Opportunities",
      description:
        "Real estate services to help investors identify, evaluate, and act on high-potential property opportunities for growth.",
      tags: ["ROI Analysis", "Portfolio", "Market Research", "Due Diligence"],
      number: "04",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80",
    },
  ];

  // Removed unused getCardStyle function to resolve lint warning

  return (
    <section className=" text-black dark:text-white">
      {/* Hero Section */}
      <div className="flex items-center justify-center px-4 md:px-8">
        <div className="max-w-7xl w-full">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
            <h1 className="text-6xl sm:text-6xl md:text-8xl font-light tracking-tight">
              Services
            </h1>
            <span className="text-3xl sm:text-3xl md:text-6xl font-light text-red-600 mt-2 sm:mt-0">
              (04)
            </span>
          </div>
        </div>
      </div>

      {/* Parallax Cards Section */}
      <div className="relative w-full">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="sticky top-0 h-[600px] flex items-center justify-end px-4 md:px-8 overflow-visible"
              style={{ zIndex: index + 1 }}
            >
              <div className="w-full max-w-4xl h-[300px]">
                <div
                  className="transition-all duration-500 ease-out will-change-transform"
                  style={{ opacity: 1 }}
                >
                  <div className="dark:bg-zinc-900 bg-zinc-200 overflow-hidden border-t border-zinc-800 dark:border-green-600 rounded-2xl">
                    <div className="flex flex-col h-full p-4 md:p-8">
                      {/* Top Section - Title and Image side by side on desktop, stacked on mobile */}
                      <div className="flex flex-col sm:flex-row gap-6 mb-6">
                        {/* Left - Title and Tags */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-black font-bold text-base text-white">
                              {service.number}
                            </div>
                            <h2 className="text-2xl md:text-3xl font-light">
                              {service.title}
                            </h2>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4 sm:mb-0">
                            {service.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="px-4 py-2 rounded-full bg-zinc-800 text-xs text-gray-300 border border-zinc-700 hover:border-zinc-600 transition-colors"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Right - Image */}
                        <div className="w-full sm:w-64 h-40 relative rounded-xl overflow-hidden flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent z-10" />
                          <Image
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            width={256}
                            height={160}
                          />
                        </div>
                      </div>

                      {/* Bottom Section - Description */}
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                        <div className="flex-1">
                          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                        <Icon className="w-8 h-8 sm:w-12 sm:h-12 text-gray-600 dark:text-gray-400 flex-shrink-0 mt-2 sm:mt-0" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
