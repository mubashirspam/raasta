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
        "Raasta Realty is not just a company — it&apos;s a movement. We began with a simple belief: real estate can be a tool to create impact, not just income. Every deal at Raasta Realty carries a deeper meaning. Beyond property ownership, beyond financial growth — it&apos;s about lives uplifted and legacies built.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      side: "right",
    },
    {
      year: "Mission",
      chapter: "Chapter Two",
      title: "Our Mission",
      content:
        "To transform the lives of everyone connected to Raasta Realty — clients, investors, agents, and referral partners — while extending our impact to the deserving souls supported through our legacy fund.",
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop",
      side: "left",
    },
    {
      year: "Vision",
      chapter: "Chapter Three",
      title: "Our Vision",
      content:
        "Through every deal, we uplift lives. Our vision is to be remembered not for the number of sales we made, but for the difference we created in people&apos;s lives.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      side: "right",
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
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      side: "left",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A story of impact, legacy, and transformation
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-600 via-green-500 to-green-600 hidden lg:block"></div>

          {/* Timeline Items */}
          <div className="space-y-24">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  item.side === "left" ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Left Side */}
                <div
                  className={`${
                    item.side === "right"
                      ? "lg:text-right lg:pr-16"
                      : "lg:text-left lg:pl-16 lg:order-2"
                  }`}
                >
                  {item.side === "right" ? (
                    <>
                      {/* Year and Chapter on Left */}
                      <div className="mb-6">
                        <h3 className="text-5xl md:text-6xl font-black text-green-600 mb-2">
                          {item.year}
                        </h3>
                        <p className="text-2xl font-bold text-green-700">
                          {item.chapter}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Content on Left */}
                      <div className="space-y-4">
                        <h3 className="text-3xl font-black text-white">
                          {item.title}
                        </h3>
                        {item.content && (
                          <p className="text-lg text-gray-300 leading-relaxed">
                            {item.content}
                          </p>
                        )}
                        {item.values && (
                          <ul className="space-y-3 text-lg">
                            {item.values.map((value, idx) => (
                              <li
                                key={idx}
                                className="text-gray-300 font-medium"
                              >
                                {value}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </>
                  )}
                </div>

                {/* Center Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-0 hidden lg:block z-10">
                  <div className="w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>

                {/* Right Side */}
                <div
                  className={`${
                    item.side === "right" ? "lg:pl-16" : "lg:pr-16 lg:order-1"
                  }`}
                >
                  {item.side === "right" ? (
                    <>
                      {/* Content on Right */}
                      <div className="space-y-4">
                        <h3 className="text-3xl font-black text-white">
                          {item.title}
                        </h3>
                        {item.content && (
                          <p className="text-lg text-gray-300 leading-relaxed">
                            {item.content}
                          </p>
                        )}
                        {item.values && (
                          <ul className="space-y-3 text-lg">
                            {item.values.map((value, idx) => (
                              <li
                                key={idx}
                                className="text-gray-300 font-medium"
                              >
                                {value}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Year and Chapter on Right */}
                      <div className="mb-6">
                        <h3 className="text-5xl md:text-6xl font-black text-green-600 mb-2">
                          {item.year}
                        </h3>
                        <p className="text-2xl font-bold text-green-700">
                          {item.chapter}
                        </p>
                      </div>
                    </>
                  )}
                </div>

                {/* Image - Below content on mobile, integrated in timeline on desktop */}
                <div
                  className={`lg:absolute ${
                    item.side === "right"
                      ? "lg:left-0 lg:w-5/12"
                      : "lg:right-0 lg:w-5/12"
                  } mt-6 lg:mt-0`}
                >
                  <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-xl group">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-900/50 rounded-2xl shadow-lg border border-gray-800">
            <h3 className="text-5xl font-black text-green-600 mb-2">500+</h3>
            <p className="text-gray-400 font-semibold">Happy Clients</p>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-2xl shadow-lg border border-gray-800">
            <h3 className="text-5xl font-black text-red-600 mb-2">1.2B+</h3>
            <p className="text-gray-400 font-semibold">AED in Sales</p>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-2xl shadow-lg border border-gray-800">
            <h3 className="text-5xl font-black text-green-600 mb-2">6%</h3>
            <p className="text-gray-400 font-semibold">To Charity</p>
          </div>
        </div>
      </div>
    </section>
  );
}
