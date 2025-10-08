"use client";

import React from "react";
import { BookOpen, Heart, Home, Globe, Award, Users, Zap, TrendingUp, DollarSign, Sparkles } from "lucide-react";

export default function Legacy() {
  const impactAreas = [
    {
      icon: BookOpen,
      title: "Education for children",
      description: "Funding educational programs and scholarships for underprivileged children",
      color: "from-blue-400 to-indigo-600",
      bgColor: "from-blue-500/20 to-indigo-500/20",
      borderColor: "border-blue-400/30",
      stat: "150+",
      statLabel: "Students Supported"
    },
    {
      icon: Heart,
      title: "Healthcare for the needy",
      description: "Providing medical assistance and healthcare access to those in need",
      color: "from-rose-400 to-pink-600",
      bgColor: "from-rose-500/20 to-pink-500/20",
      borderColor: "border-rose-400/30",
      stat: "500+",
      statLabel: "Lives Touched"
    },
    {
      icon: Home,
      title: "Shelter and housing support",
      description: "Building homes and providing housing assistance for families",
      color: "from-emerald-400 to-teal-600",
      bgColor: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-400/30",
      stat: "25",
      statLabel: "Homes Built"
    },
    {
      icon: Globe,
      title: "Global reach in giving back",
      description: "Extending our charitable impact across communities worldwide",
      color: "from-violet-400 to-purple-600",
      bgColor: "from-violet-500/20 to-purple-500/20",
      borderColor: "border-violet-400/30",
      stat: "12",
      statLabel: "Countries Reached"
    }
  ];

  return (
    <section id="legacy" className="py-[60px] px-[12px] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-[30px] left-[30px] w-[288px] h-[288px] bg-gradient-to-br from-rose-500/10 to-pink-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[30px] right-[30px] w-[240px] h-[240px] bg-gradient-to-br from-emerald-500/10 to-teal-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-[216px] h-[216px] bg-gradient-to-br from-violet-500/10 to-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-[60px]">
          <div className="inline-flex items-center gap-[12px] mb-[24px]">
            <div className="w-[48px] h-[48px] bg-gradient-to-br from-rose-400 to-pink-600 rounded-[18px] flex items-center justify-center text-white shadow-lg">
              <Award size={21} />
            </div>
            <h2 className="text-[1.875rem] md:text-[3rem] font-black bg-gradient-to-r from-rose-300 via-pink-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Our Legacy & Impact
            </h2>
            <div className="w-[48px] h-[48px] bg-gradient-to-br from-emerald-400 to-teal-600 rounded-[18px] flex items-center justify-center text-white shadow-lg">
              <Sparkles size={21} />
            </div>
          </div>
          
          {/* Hero Quote */}
          <div className="relative group mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-400/20 via-pink-400/20 to-emerald-400/20 rounded-[24px] blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
            <div className="relative backdrop-blur-2xl bg-gradient-to-br from-rose-500/20 via-pink-500/15 to-emerald-500/20 rounded-[24px] border border-rose-300/30 p-10 md:p-12 shadow-2xl">
              <div className="flex items-center justify-center gap-6 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-600 rounded-[18px] flex items-center justify-center text-white animate-pulse">
                  <Heart size={28} />
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-[18px] flex items-center justify-center text-white animate-pulse delay-300">
                  <Zap size={28} />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
                &quot;Every Deal. Every Time. A Life is Changed.&quot;
              </h3>
              <p className="text-xl text-white/90 font-medium">
                This is not a campaign. It is our <span className="bg-gradient-to-r from-rose-300 to-emerald-300 bg-clip-text text-transparent font-bold">commitment</span> ✨
              </p>
            </div>
          </div>
        </div>

        {/* Main Impact Stats - Redesigned */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* AED 635,000+ Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-400/20 to-pink-600/20 rounded-[24px] blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-rose-500/20 via-pink-500/15 to-red-500/20 rounded-[24px] border border-rose-300/30 p-8 md:p-10 shadow-xl hover:border-rose-300/50 transition-all duration-300 h-full">
              <div className="text-center">
                <div className="w-28 h-28 bg-gradient-to-br from-rose-400 to-pink-600 rounded-full flex items-center justify-center text-white mx-auto mb-8 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <DollarSign size={40} />
                </div>
                <div className="mb-6">
                  <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent mb-2">
                    AED 635,000+
                  </h3>
                  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden mb-4">
                    <div className="w-4/5 h-full bg-gradient-to-r from-rose-400 to-pink-600 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <p className="text-xl text-rose-100 mb-4 font-medium">
                  As of 31 March 2025, contributed toward charitable causes
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-4 h-4 bg-rose-400 rounded-full animate-pulse"></div>
                  <span className="text-rose-200 font-medium">Growing Every Day</span>
                </div>
              </div>
            </div>
          </div>

          {/* 6% Revenue Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-[24px] blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
            <div className="relative backdrop-blur-2xl bg-gradient-to-br from-emerald-500/20 via-teal-500/15 to-cyan-500/20 rounded-[24px] border border-emerald-300/30 p-8 md:p-10 shadow-2xl hover:border-emerald-300/50 transition-all duration-300 h-full">
              <div className="text-center">
                <div className="w-28 h-28 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center text-white mx-auto mb-8 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <TrendingUp size={40} />
                </div>
                <div className="mb-6">
                  <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent mb-2">
                    6%
                  </h3>
                  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden mb-4">
                    <div className="w-1/5 h-full bg-gradient-to-r from-emerald-400 to-teal-600 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <p className="text-xl text-emerald-100 mb-4 font-medium">
                  Of every revenue goes directly toward charity
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-200 font-medium">Ongoing Commitment</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Areas - Colorful Grid */}
        <div className="mb-20">
          <h3 className="text-4xl font-black text-white text-center mb-16">Impact Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div key={index} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.bgColor} rounded-[24px] blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                  <div className={`relative backdrop-blur-xl bg-gradient-to-br ${area.bgColor} rounded-[24px] border ${area.borderColor} p-8 hover:border-opacity-50 transition-all duration-300 group-hover:scale-105 h-full`}>
                    <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-[18px] flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                      <IconComponent size={28} />
                    </div>
                    
                    {/* Stats */}
                    <div className="text-center mb-4">
                      <div className={`text-3xl font-black bg-gradient-to-r ${area.color} bg-clip-text text-transparent mb-1`}>
                        {area.stat}
                      </div>
                      <p className="text-white/70 text-sm font-medium">{area.statLabel}</p>
                    </div>
                    
                    <h4 className="text-lg font-bold text-white mb-3">{area.title}</h4>
                    <p className="text-white/80 text-sm leading-relaxed">{area.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action - Grand Finale */}
        <div className="text-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-400/20 via-emerald-400/20 via-violet-400/20 to-cyan-400/20 rounded-[24px] blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
            <div className="relative backdrop-blur-2xl bg-gradient-to-br from-rose-500/20 via-emerald-500/15 via-violet-500/15 to-cyan-500/20 rounded-[24px] border border-rose-300/30 p-8 md:p-10 shadow-2xl">
              <div className="flex items-center justify-center gap-6 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-rose-400 to-pink-600 rounded-[18px] flex items-center justify-center text-white shadow-lg animate-bounce">
                  <Heart size={24} />
                </div>
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-[18px] flex items-center justify-center text-white shadow-lg animate-bounce delay-300">
                  <Users size={24} />
                </div>
                <div className="w-14 h-14 bg-gradient-to-br from-violet-400 to-purple-600 rounded-[18px] flex items-center justify-center text-white shadow-lg animate-bounce delay-500">
                  <Sparkles size={24} />
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
                Be Part of Something Bigger
              </h3>
              <p className="text-[1rem] md:text-[1.125rem] text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
                When you choose Raasta Realty, you&apos;re not just making a real estate transaction. You&apos;re contributing to a movement that changes lives and builds lasting legacies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group/cta px-8 py-3 bg-gradient-to-r from-rose-500 via-pink-500 to-emerald-500 hover:from-rose-400 hover:via-pink-400 hover:to-emerald-400 rounded-[12px] text-white font-bold text-[1rem] transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-rose-500/25">
                  Start Your Journey
                  <Zap className="inline-block ml-2 group-hover/cta:rotate-12 transition-transform" size={18} />
                </button>
                <button className="px-8 py-3 backdrop-blur-xl bg-white/10 hover:bg-white/20 rounded-[12px] border border-white/30 hover:border-white/50 text-white font-bold text-[1rem] transition-all duration-300 hover:scale-105 shadow-xl">
                  Learn More About Our Impact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
