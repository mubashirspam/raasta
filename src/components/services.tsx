"use client";

import React from "react";
import {
  Users,
  TrendingUp,
  BookOpen,
  Rocket,
  Star,
  Target,
  BarChart3,
  Shield,
  Crown,
  Briefcase,
  Home,
  Zap,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "agents",
      title: "For Agents & Partners",
      subtitle: "Become a Brand in Dubai Real Estate",
      description:
        "Join us on a journey that transforms your career into a legacy. We don't just hire agents — we create industry leaders.",
      icon: Crown,
      color: "from-orange-400 to-red-600",
      bgColor: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-400/30",
      benefits: [
        {
          icon: Rocket,
          title: "Personal growth with dedicated mentorship",
          color: "text-orange-300",
        },
        {
          icon: Star,
          title: "Recognition that transforms you into a brand",
          color: "text-red-300",
        },
        {
          icon: Target,
          title: "Work with purpose, not just targets",
          color: "text-orange-300",
        },
        {
          icon: Users,
          title: "Be part of a movement bigger than real estate",
          color: "text-red-300",
        },
      ],
      cta: "Join the Raasta Family",
      ctaColor: "from-orange-500 to-red-600",
    },
    {
      id: "investors",
      title: "For Investors & Clients",
      subtitle: "Profitable Investments with Purpose",
      description:
        "We guide you toward high-ROI opportunities while ensuring your investment creates positive impact in the world.",
      icon: Briefcase,
      color: "from-emerald-400 to-teal-600",
      bgColor: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-400/30",
      benefits: [
        {
          icon: BarChart3,
          title: "High ROI opportunities in Dubai's top projects",
          color: "text-emerald-300",
        },
        {
          icon: BookOpen,
          title: "Transparent guidance and data-driven decisions",
          color: "text-teal-300",
        },
        {
          icon: Users,
          title: "Legacy-driven transactions that uplift lives",
          color: "text-emerald-300",
        },
        {
          icon: Shield,
          title: "Confidence in working with a purpose-driven company",
          color: "text-teal-300",
        },
      ],
      cta: "Explore Investment Opportunities",
      ctaColor: "from-emerald-500 to-teal-600",
    },
    {
      id: "buyers",
      title: "For Property Buyers",
      subtitle: "Find Your Dream Home with Impact",
      description:
        "Every property purchase through Raasta Realty contributes to our charitable mission while securing your perfect home.",
      icon: Home,
      color: "from-violet-400 to-purple-600",
      bgColor: "from-violet-500/20 to-purple-500/20",
      borderColor: "border-violet-400/30",
      benefits: [
        {
          icon: Home,
          title: "Curated selection of premium Dubai properties",
          color: "text-violet-300",
        },
        {
          icon: Shield,
          title: "Complete legal and financial guidance",
          color: "text-purple-300",
        },
        {
          icon: Target,
          title: "Personalized property matching service",
          color: "text-violet-300",
        },
        {
          icon: Star,
          title: "Your purchase contributes to charity",
          color: "text-purple-300",
        },
      ],
      cta: "Find Your Dream Home",
      ctaColor: "from-violet-500 to-purple-600",
    },
  ];

  return (
    <section
      id="services"
      className="py-[60px] px-[12px] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-[60px] left-[60px] w-[240px] h-[240px] bg-gradient-to-br from-orange-500/10 to-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[60px] right-[60px] w-[288px] h-[288px] bg-gradient-to-br from-emerald-500/10 to-teal-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[216px] h-[216px] bg-gradient-to-br from-violet-500/10 to-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-[60px]">
          <div className="inline-flex items-center gap-[12px] mb-[24px]">
            <div className="w-[48px] h-[48px] bg-gradient-to-br from-cyan-400 to-blue-600 rounded-[18px] flex items-center justify-center text-white shadow-lg">
              <Zap size={21} />
            </div>
            <h2 className="text-[1.875rem] md:text-[3rem] font-black bg-gradient-to-r from-cyan-300 via-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Join Our Movement
            </h2>
            <div className="w-[48px] h-[48px] bg-gradient-to-br from-purple-400 to-pink-600 rounded-[18px] flex items-center justify-center text-white shadow-lg">
              <Rocket size={21} />
            </div>
          </div>
          <p className="text-[1rem] text-white/90 max-w-3xl mx-auto font-medium">
            Whether you&apos;re looking to grow your career, invest wisely, or
            find your dream property — we&apos;re here to guide you with{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent font-bold">
              purpose
            </span>{" "}
            ✨
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <div key={service.id} className="group relative">
                {/* Background Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} rounded-[24px] blur-2xl group-hover:blur-3xl transition-all duration-300`}
                ></div>

                {/* Service Card */}
                <div
                  className={`relative backdrop-blur-xl bg-gradient-to-br ${service.bgColor} rounded-[24px] border ${service.borderColor} p-[24px] hover:border-opacity-50 transition-all duration-300 shadow-xl h-full flex flex-col`}
                >
                  {/* Icon & Stats Badge */}
                  <div className="flex items-start justify-between mb-[18px]">
                    <div
                      className={`w-[54px] h-[54px] bg-gradient-to-br ${service.color} rounded-[18px] flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                    >
                      <IconComponent size={24} />
                    </div>
                    <div
                      className={`px-[12px] py-[6px] bg-gradient-to-r ${service.color} bg-opacity-20 rounded-[12px] border border-white/20`}
                    >
                      <div
                        className={`text-[1.125rem] font-black bg-white bg-clip-text text-transparent`}
                      >
                        {index === 0 ? "100+" : index === 1 ? "25%" : "500+"}
                      </div>
                    </div>
                  </div>

                  {/* Header */}
                  <div className="mb-[18px]">
                    <h3 className="text-[1.25rem] font-black text-white mb-[6px]">
                      {service.title}
                    </h3>
                    <p
                      className={`text-[1rem] font-bold mb-[9px] bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                    >
                      {service.subtitle}
                    </p>
                    <p className="text-white/70 leading-relaxed text-[0.875rem]">
                      {service.description}
                    </p>
                  </div>

                  {/* Benefits List */}
                  <div className="space-y-[9px] mb-[18px] flex-1">
                    {service.benefits.map((benefit, idx) => {
                      const BenefitIcon = benefit.icon;
                      return (
                        <div
                          key={idx}
                          className="flex items-start gap-[9px] p-[9px] rounded-[12px] bg-white/5 hover:bg-white/10 transition-all duration-300 group/benefit"
                        >
                          <div
                            className={`w-[24px] h-[24px] bg-gradient-to-br ${service.color} rounded-[9px] flex items-center justify-center text-white flex-shrink-0 group-hover/benefit:scale-110 transition-transform`}
                          >
                            <BenefitIcon size={12} />
                          </div>
                          <p
                            className={`${benefit.color} font-medium leading-relaxed text-[0.75rem]`}
                          >
                            {benefit.title}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full group/cta px-[18px] py-[9px] bg-gradient-to-r ${service.ctaColor} hover:shadow-xl hover:shadow-current/25 rounded-[12px] text-white font-bold text-[0.875rem] transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-[6px]`}
                  >
                    <span>{service.cta}</span>
                    <Rocket
                      className="group-hover/cta:translate-x-1 transition-transform"
                      size={15}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dubai Market Highlight - Redesigned */}
        <div className="mt-[60px]">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-[24px] blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
            <div className="relative backdrop-blur-2xl bg-gradient-to-br from-cyan-500/20 via-blue-500/15 via-purple-500/15 to-pink-500/20 rounded-[24px] border border-cyan-300/30 p-[24px] md:p-[30px] shadow-2xl">
              <div className="text-center">
                <div className="flex items-center justify-center gap-[12px] mb-[18px]">
                  <div className="w-[48px] h-[48px] bg-gradient-to-br from-cyan-400 to-blue-600 rounded-[18px] flex items-center justify-center text-white shadow-lg animate-pulse">
                    <TrendingUp size={21} />
                  </div>
                  <h3 className="text-[1.875rem] md:text-[2.5rem] font-black text-white leading-tight">
                    Dubai&apos;s Booming Market
                  </h3>
                  <div className="w-[48px] h-[48px] bg-gradient-to-br from-purple-400 to-pink-600 rounded-[18px] flex items-center justify-center text-white shadow-lg animate-pulse delay-300">
                    <BarChart3 size={21} />
                  </div>
                </div>
                <p className="text-[1rem] md:text-[1.125rem] text-white/90 mb-[24px] max-w-3xl mx-auto leading-relaxed">
                  With Dubai&apos;s booming real estate market, Raasta Realty is
                  your trusted partner — blending market expertise with a
                  values-driven approach.
                </p>
                <div className="flex flex-col sm:flex-row gap-[12px] justify-center">
                  <button className="px-[24px] py-[12px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500 rounded-[12px] text-white font-bold text-[1rem] transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-cyan-500/25">
                    View Properties
                  </button>
                  <button className="px-[24px] py-[12px] backdrop-blur-xl bg-white/10 hover:bg-white/20 rounded-[12px] border border-white/30 hover:border-white/50 text-white font-bold text-[1rem] transition-all duration-300 hover:scale-105 shadow-xl">
                    Market Analysis
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
