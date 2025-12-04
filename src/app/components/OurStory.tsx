"use client";

import React from "react";
import Image from "next/image";

export default function OurStory() {
  const timeline = [
    {
      year: "2024",
      chapter: "Chapter One",
      title: "Our Story",
      content:
        "Raasta Realty is not just a company — it's a movement. We began with a simple belief: real estate can be a tool to create impact, not just income. Every deal at Raasta Realty carries a deeper meaning. Beyond property ownership, beyond financial growth — it's about lives uplifted and legacies built.",
      bgColor: "bg-green-900",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=1200&fit=crop",
    },
    {
      year: "Mission",
      chapter: "Chapter Two",
      title: "Our Mission",
      content:
        "To transform the lives of everyone connected to Raasta Realty — clients, investors, agents, and referral partners — while extending our impact to the deserving souls supported through our legacy fund.",
      bgColor: "bg-red-900",
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&h=1200&fit=crop",
    },
    {
      year: "Vision",
      chapter: "Chapter Three",
      title: "Our Vision",
      content:
        "Through every deal, we uplift lives. Our vision is to be remembered not for the number of sales we made, but for the difference we created in people's lives.",
      bgColor: "bg-indigo-600",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=1200&fit=crop",
    },
    {
      year: "Values",
      chapter: "Chapter Four",
      title: "Our Values",
      content: "",
      values: [
        "🌍 Impact over income",
        "🕰 Legacy over short-term gains",
        "💡 Growth with purpose",
        "🤝 Empowering our people first, so they can empower the world",
      ],
      bgColor: "bg-purple-600",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=1200&fit=crop",
    },
  ];

  return (
    <section className="pb-20">
      <div className="relative">
        {/* Stacked Sections */}
        {timeline.map((item, index) => (
          <div
            key={index}
            className="sticky top-0 h-screen"
            style={{
              zIndex: 10 + index,
            }}
          >
            <div
              className={`h-full w-full ${item.bgColor} grid grid-cols-1 lg:grid-cols-2`}
            >
              {/* Left Side - Content */}
              <div className="flex items-center justify-center p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="max-w-xl">
                  <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-none">
                    {item.title}
                  </h2>

                  <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
                    {item.chapter}
                  </p>

                  {item.content && (
                    <p className="text-lg md:text-xl text-white leading-relaxed font-light">
                      {item.content}
                    </p>
                  )}

                  {item.values && (
                    <div className="space-y-4 mt-6">
                      {item.values.map((value, idx) => (
                        <p
                          key={idx}
                          className="text-lg md:text-xl text-white font-light"
                        >
                          {value}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="relative h-full hidden lg:block">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  width={600}
                  height={600}
                  priority
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
