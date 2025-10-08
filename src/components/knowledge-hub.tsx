"use client";

import React from "react";
import {
  BarChart3,
  FileText,
  Play,
  BookOpen,
  TrendingUp,
  Calculator,
  Brain,
  Lightbulb,
  Download,
  Bell,
} from "lucide-react";

export default function KnowledgeHub() {
  const resources = [
    {
      icon: BarChart3,
      title: "Dubai Market Trends & Analysis",
      description:
        "Stay updated with the latest market insights, price trends, and investment opportunities in Dubai's real estate sector.",
      type: "Market Data",
      color: "from-cyan-400 to-blue-600",
      bgColor: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-400/30",
      stats: "Updated Daily",
    },
    {
      icon: FileText,
      title: "Property Investment Guides",
      description:
        "Comprehensive guides covering off-plan vs ready properties, ROI calculations, and investment strategies.",
      type: "Guides",
      color: "from-violet-400 to-purple-600",
      bgColor: "from-violet-500/20 to-purple-500/20",
      borderColor: "border-violet-400/30",
      stats: "50+ Guides",
    },
    {
      icon: Play,
      title: "Exclusive Video Insights",
      description:
        "Watch our expert analysis videos and property showcase reels for insider market knowledge.",
      type: "Video Content",
      color: "from-emerald-400 to-teal-600",
      bgColor: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-400/30",
      stats: "100+ Videos",
    },
    {
      icon: BookOpen,
      title: "Wealth Building Strategies",
      description:
        "Learn proven strategies for building wealth through real estate and creating lasting financial legacies.",
      type: "Education",
      color: "from-amber-400 to-orange-600",
      bgColor: "from-amber-500/20 to-orange-500/20",
      borderColor: "border-amber-400/30",
      stats: "Expert Tips",
    },
  ];

  const quickTools = [
    {
      icon: Calculator,
      title: "ROI Calculator",
      description:
        "Calculate potential returns on your Dubai property investments",
      color: "from-rose-400 to-pink-600",
      bgColor: "from-rose-500/20 to-pink-500/20",
      borderColor: "border-rose-400/30",
    },
    {
      icon: TrendingUp,
      title: "Market Tracker",
      description: "Track real-time property prices and market movements",
      color: "from-indigo-400 to-blue-600",
      bgColor: "from-indigo-500/20 to-blue-500/20",
      borderColor: "border-indigo-400/30",
    },
    {
      icon: FileText,
      title: "Property Comparison",
      description: "Compare different properties and investment options",
      color: "from-teal-400 to-cyan-600",
      bgColor: "from-teal-500/20 to-cyan-500/20",
      borderColor: "border-teal-400/30",
    },
  ];

  return (
    <section id="knowledge" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-violet-500/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-br from-emerald-500/10 to-teal-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-[48px] h-[48px] bg-gradient-to-br from-cyan-400 to-blue-600 rounded-[18px] flex items-center justify-center text-white shadow-lg">
              <Brain size={21} />
            </div>
            <h2 className="text-[1.875rem] md:text-[3rem] font-black bg-gradient-to-r from-cyan-300 via-violet-400 via-emerald-400 to-amber-400 bg-clip-text text-transparent">
              Knowledge Hub
            </h2>
            <div className="w-[48px] h-[48px] bg-gradient-to-br from-emerald-400 to-teal-600 rounded-[18px] flex items-center justify-center text-white shadow-lg">
              <Lightbulb size={21} />
            </div>
          </div>
          <p className="text-[1rem] text-white/90 max-w-3xl mx-auto font-medium">
            Stay empowered with Raasta Realty&apos;s insights and tools for{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent font-bold">
              smart real estate decisions
            </span>{" "}
            🧠
          </p>
        </div>

        {/* Main Resources - Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <div key={index} className="group relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${resource.bgColor} rounded-[24px] blur-xl group-hover:blur-2xl transition-all duration-300`}
                ></div>
                <div
                  className={`relative backdrop-blur-xl bg-gradient-to-br ${resource.bgColor} rounded-[24px] border ${resource.borderColor} p-6 hover:border-opacity-50 transition-all duration-300 shadow-xl group-hover:scale-105`}
                >
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${resource.color} rounded-[18px] flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg flex-shrink-0`}
                    >
                      <IconComponent size={28} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-[1.125rem] font-black text-white">
                          {resource.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className={`px-3 py-1 bg-gradient-to-r ${resource.color} bg-opacity-20 text-white text-[0.875rem] rounded-full border border-white/20 font-medium`}
                        >
                          {resource.type}
                        </span>
                        <span className="text-white/70 text-[0.875rem] font-medium">
                          {resource.stats}
                        </span>
                      </div>
                      <p className="text-white/80 leading-relaxed text-[1rem] mb-4">
                        {resource.description}
                      </p>

                      {/* Action Button */}
                      <button
                        className={`group/btn px-6 py-2 bg-gradient-to-r ${resource.color} hover:shadow-xl hover:shadow-current/25 rounded-[12px] text-white font-bold text-[0.875rem] transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2`}
                      >
                        Explore Now
                        <div className="w-2 h-2 bg-white rounded-full group-hover/btn:w-4 transition-all duration-300"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Tools - Interactive Grid */}
        <div className="mb-20">
          <h3 className="text-[2.25rem] font-black text-white text-center mb-12">
            Quick Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickTools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <div key={index} className="group relative cursor-pointer">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tool.bgColor} rounded-[24px] blur-xl group-hover:blur-2xl transition-all duration-300`}
                  ></div>
                  <div
                    className={`relative backdrop-blur-xl bg-gradient-to-br ${tool.bgColor} rounded-[24px] border ${tool.borderColor} p-6 hover:border-opacity-50 transition-all duration-300 group-hover:scale-105 h-full`}
                  >
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${tool.color} rounded-[18px] flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                    >
                      <IconComponent size={24} />
                    </div>
                    <h4 className="text-[1.125rem] font-bold text-white mb-3">
                      {tool.title}
                    </h4>
                    <p className="text-white/80 leading-relaxed text-[0.875rem] mb-4">
                      {tool.description}
                    </p>

                    {/* Interactive Element */}
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-sm">
                        Click to use
                      </span>
                      <div
                        className={`w-8 h-8 bg-gradient-to-br ${tool.color} rounded-full flex items-center justify-center text-white group-hover:rotate-90 transition-transform duration-300`}
                      >
                        <span className="text-xs">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Featured Content - Enhanced */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-violet-400/20 via-emerald-400/20 to-amber-400/20 rounded-[24px] blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
          <div className="relative backdrop-blur-2xl bg-gradient-to-br from-cyan-500/20 via-violet-500/15 via-emerald-500/15 to-amber-500/20 rounded-[24px] border border-cyan-300/30 p-8 md:p-10 shadow-2xl">
            <div className="text-center">
              {/* Header Icons */}
              <div className="flex items-center justify-center gap-6 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-[18px] flex items-center justify-center text-white shadow-lg animate-pulse">
                  <BarChart3 size={24} />
                </div>
                <div className="w-14 h-14 bg-gradient-to-br from-violet-400 to-purple-600 rounded-[18px] flex items-center justify-center text-white shadow-lg animate-pulse delay-300">
                  <FileText size={24} />
                </div>
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-[18px] flex items-center justify-center text-white shadow-lg animate-pulse delay-500">
                  <TrendingUp size={24} />
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
                Latest Market Report
              </h3>
              <p className="text-[1rem] md:text-[1.125rem] text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
                Get our comprehensive Q4 2024 Dubai Real Estate Market Analysis
                with exclusive insights and forecasts for 2025.
              </p>

              {/* Enhanced CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group/download px-8 py-3 bg-gradient-to-r from-cyan-500 via-violet-500 to-emerald-500 hover:from-cyan-400 hover:via-violet-400 hover:to-emerald-400 rounded-[12px] text-white font-bold text-[1rem] transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center gap-3">
                  <Download
                    className="group-hover/download:translate-y-1 transition-transform"
                    size={18}
                  />
                  Download Report
                </button>
                <button className="group/subscribe px-8 py-3 backdrop-blur-xl bg-white/10 hover:bg-white/20 rounded-[12px] border border-white/30 hover:border-white/50 text-white font-bold text-[1rem] transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-3">
                  <Bell
                    className="group-hover/subscribe:animate-bounce"
                    size={18}
                  />
                  Subscribe to Updates
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
