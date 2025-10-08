"use client";

import React from "react";
import { Globe, Clock, Lightbulb, Handshake, Zap, Target, Compass, Rocket } from "lucide-react";

export default function Story() {
  const values = [
    {
      icon: Globe,
      title: "Impact over income",
      description: "Every decision we make prioritizes meaningful impact over short-term profits",
      color: "from-emerald-400 to-teal-600",
      bgColor: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-400/30"
    },
    {
      icon: Clock,
      title: "Legacy over short-term gains",
      description: "Building lasting relationships and sustainable growth for generations",
      color: "from-violet-400 to-purple-600",
      bgColor: "from-violet-500/20 to-purple-500/20",
      borderColor: "border-violet-400/30"
    },
    {
      icon: Lightbulb,
      title: "Growth with purpose",
      description: "Expanding our reach while staying true to our core mission of helping others",
      color: "from-amber-400 to-orange-600",
      bgColor: "from-amber-500/20 to-orange-500/20",
      borderColor: "border-amber-400/30"
    },
    {
      icon: Handshake,
      title: "Empowering our people first",
      description: "When our team thrives, they can better serve and empower our clients",
      color: "from-rose-400 to-pink-600",
      bgColor: "from-rose-500/20 to-pink-500/20",
      borderColor: "border-rose-400/30"
    }
  ];

  return (
    <section id="story" className="py-[60px] px-[12px] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[288px] h-[288px] bg-gradient-to-br from-indigo-500/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[240px] h-[240px] bg-gradient-to-br from-pink-500/10 to-rose-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Story Header */}
        <div className="text-center mb-[60px]">
          <div className="inline-flex items-center gap-[9px] mb-[18px]">
            <div className="w-[36px] h-[36px] bg-gradient-to-br from-indigo-400 to-purple-600 rounded-[12px] flex items-center justify-center">
              <Compass className="text-white" size={18} />
            </div>
            <h2 className="text-[1.875rem] md:text-[3rem] font-black bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Story
            </h2>
            <div className="w-[36px] h-[36px] bg-gradient-to-br from-pink-400 to-rose-600 rounded-[12px] flex items-center justify-center">
              <Rocket className="text-white" size={18} />
            </div>
          </div>
          <p className="text-[1.125rem] text-white/90 max-w-3xl mx-auto font-medium">
            Raasta Realty is not just a company — it&apos;s a <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent font-bold">movement</span> 🚀
          </p>
        </div>

        {/* Story Timeline Layout */}
        <div className="relative mb-[60px]">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400 rounded-full hidden lg:block"></div>
          
          {/* Story Cards */}
          <div className="space-y-[48px] lg:space-y-[72px]">
            {/* Our Beginning - Left Side */}
            <div className="flex flex-col lg:flex-row items-center gap-[24px]">
              <div className="lg:w-1/2 lg:pr-[36px]">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-[18px] blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative backdrop-blur-xl bg-gradient-to-br from-cyan-500/20 via-blue-500/15 to-indigo-500/20 rounded-[9px] border border-cyan-300/30 p-[18px] hover:border-cyan-300/50 transition-all duration-300">
                    <div className="flex items-center gap-[12px] mb-[18px]">
                      <div className="w-[48px] h-[48px] bg-gradient-to-br from-cyan-400 to-blue-600 rounded-[12px] flex items-center justify-center text-white shadow-lg">
                        <Zap size={21} />
                      </div>
                      <h3 className="text-[1.25rem] font-black text-white">Our Beginning</h3>
                    </div>
                    <p className="text-cyan-100 leading-relaxed text-[1rem] mb-[12px]">
                      We began with a simple belief: real estate can be a tool to create impact, not just income.
                    </p>
                    <p className="text-cyan-200/80 leading-relaxed">
                      Every deal at Raasta Realty carries a deeper meaning. Beyond property ownership, beyond financial growth — it&apos;s about lives uplifted and legacies built.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-[36px]">
                <div className="w-[60px] h-[60px] bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-white mx-auto lg:mx-0 shadow-2xl">
                  <span className="text-[1.5rem] font-black">01</span>
                </div>
              </div>
            </div>

            {/* What Makes Us Different - Right Side */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-[24px]">
              <div className="lg:w-1/2 lg:pl-[36px]">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-[18px] blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative backdrop-blur-xl bg-gradient-to-br from-purple-500/20 via-pink-500/15 to-rose-500/20 rounded-[18px] border border-purple-300/30 p-[30px] hover:border-purple-300/50 transition-all duration-300">
                    <div className="flex items-center gap-[12px] mb-[18px]">
                      <div className="w-[48px] h-[48px] bg-gradient-to-br from-purple-400 to-pink-600 rounded-[12px] flex items-center justify-center text-white shadow-lg">
                        <Target size={21} />
                      </div>
                      <h3 className="text-[1.875rem] font-black text-white">What Makes Us Different</h3>
                    </div>
                    <p className="text-purple-100 leading-relaxed text-[1.125rem] mb-[12px]">
                      Every real estate company talks about sales and targets. But we ask a different question: What can money do beyond numbers?
                    </p>
                    <div className="bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-[12px] p-[18px] border border-purple-300/20">
                      <p className="text-purple-200/90 leading-relaxed font-medium">
                        💡 At Raasta Realty, <span className="text-pink-300 font-bold">6% of every revenue</span> is dedicated to charity — funding education, providing healthcare, building shelters, and bringing hope to those who need it most.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pr-[36px] flex lg:justify-end">
                <div className="w-[60px] h-[60px] bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center text-white shadow-2xl">
                  <span className="text-[1.5rem] font-black">02</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision - Timeline Layout */}
        <div className="relative mb-[60px]">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-400 via-teal-400 to-violet-400 rounded-full hidden lg:block"></div>
          
          {/* Mission & Vision Cards */}
          <div className="space-y-[48px] lg:space-y-[72px]">
            {/* Our Mission - Left Side */}
            <div className="flex flex-col lg:flex-row items-center gap-[24px]">
              <div className="lg:w-1/2 lg:pr-[36px]">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-[18px] blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative backdrop-blur-xl bg-gradient-to-br from-emerald-500/20 via-teal-500/15 to-cyan-500/20 rounded-[18px] border border-emerald-300/30 p-[30px] hover:border-emerald-300/50 transition-all duration-300">
                    <div className="flex items-center gap-[12px] mb-[18px]">
                      <div className="w-[48px] h-[48px] bg-gradient-to-br from-emerald-400 to-teal-600 rounded-[12px] flex items-center justify-center text-white shadow-lg">
                        <Target size={21} />
                      </div>
                      <h3 className="text-[1.875rem] font-black text-white">Our Mission</h3>
                    </div>
                    <p className="text-emerald-100 leading-relaxed text-[1.125rem]">
                      To transform the lives of everyone connected to Raasta Realty — clients, investors, agents, and referral partners — while extending our impact to the deserving souls supported through our legacy fund.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-[36px]">
                <div className="w-[60px] h-[60px] bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center text-white mx-auto lg:mx-0 shadow-2xl">
                  <span className="text-[1.5rem] font-black">03</span>
                </div>
              </div>
            </div>

            {/* Our Vision - Right Side */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-[24px]">
              <div className="lg:w-1/2 lg:pl-[36px]">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-400/20 to-indigo-600/20 rounded-[18px] blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative backdrop-blur-xl bg-gradient-to-br from-violet-500/20 via-indigo-500/15 to-purple-500/20 rounded-[18px] border border-violet-300/30 p-[30px] hover:border-violet-300/50 transition-all duration-300">
                    <div className="flex items-center gap-[12px] mb-[18px]">
                      <div className="w-[48px] h-[48px] bg-gradient-to-br from-violet-400 to-indigo-600 rounded-[12px] flex items-center justify-center text-white shadow-lg">
                        <Compass size={21} />
                      </div>
                      <h3 className="text-[1.875rem] font-black text-white">Our Vision</h3>
                    </div>
                    <p className="text-violet-100 leading-relaxed text-[1.125rem]">
                      Through every deal, we uplift lives. Our vision is to be remembered not for the number of sales we made, but for the difference we created in people&apos;s lives.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pr-[36px] flex lg:justify-end">
                <div className="w-[60px] h-[60px] bg-gradient-to-br from-violet-400 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-2xl">
                  <span className="text-[1.5rem] font-black">04</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values - Colorful Grid */}
        <div className="text-center mb-[48px]">
          <h3 className="text-[2.25rem] font-black text-white mb-[36px]">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.bgColor} rounded-[18px] blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                  <div className={`relative backdrop-blur-xl bg-gradient-to-br ${value.bgColor} rounded-[18px] border ${value.borderColor} p-[24px] hover:border-opacity-50 transition-all duration-300 group-hover:scale-105 h-full`}>
                    <div className={`w-[48px] h-[48px] bg-gradient-to-br ${value.color} rounded-[12px] flex items-center justify-center text-white mb-[18px] mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                      <IconComponent size={21} />
                    </div>
                    <h4 className="text-[1.25rem] font-bold text-white mb-[12px]">{value.title}</h4>
                    <p className="text-white/80 text-[0.875rem] leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Legacy Statement - Grand Finale */}
        <div className="text-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 via-purple-400/20 to-pink-400/20 rounded-[36px] blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
            <div className="relative backdrop-blur-2xl bg-gradient-to-br from-indigo-500/20 via-purple-500/15 to-pink-500/20 rounded-[36px] border border-indigo-300/30 p-[36px] md:p-[48px] shadow-2xl">
              <div className="flex items-center justify-center gap-[18px] mb-[24px]">
                <div className="w-[48px] h-[48px] bg-gradient-to-br from-indigo-400 to-purple-600 rounded-[12px] flex items-center justify-center text-white animate-pulse">
                  <Zap size={21} />
                </div>
                <div className="w-[48px] h-[48px] bg-gradient-to-br from-purple-400 to-pink-600 rounded-[12px] flex items-center justify-center text-white animate-pulse delay-300">
                  <Rocket size={21} />
                </div>
              </div>
              <h3 className="text-[1.875rem] md:text-[3rem] font-black text-white mb-[18px] leading-tight">
                We&apos;re not just chasing transactions.
              </h3>
              <p className="text-[1.5rem] md:text-[2.25rem] bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent font-black">
                We&apos;re building legacy. ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
