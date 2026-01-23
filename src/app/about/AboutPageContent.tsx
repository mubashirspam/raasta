"use client";

import React, { useState } from "react";
import { Navbar } from "../home/layout/Navbar";
import { Footer } from "../home/layout/Footer";
import { ContactModal } from "../home/ui/ContactModal";
import {
  Heart,
  Target,
  Eye,
  Users,
  Star,
  Sparkles,
  ArrowRight,
  Award,
  Camera,
  TrendingUp,
  Handshake,
} from "lucide-react";

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  section: string;
  bio?: string;
  image?: { asset: { url: string } };
}

interface TeamMembersBySection {
  founders: TeamMember[];
  management: TeamMember[];
  media: TeamMember[];
  elite_agents: TeamMember[];
  sales: TeamMember[];
}

interface AboutPageContentProps {
  teamMembers: TeamMembersBySection;
}

const TeamMemberCard: React.FC<{
  member: TeamMember;
  variant?: "large" | "medium" | "small";
  gradientColor?: "violet" | "blue" | "pink" | "amber" | "emerald";
  index?: number;
}> = ({ member, variant = "medium", gradientColor = "emerald", index = 0 }) => {
  const imageUrl =
    member.image?.asset?.url ||
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop";

  const allGradients = [
    "bg-gradient-to-br from-violet-200 via-purple-100 to-pink-200",
    "bg-gradient-to-br from-blue-200 via-cyan-100 to-sky-200",
    "bg-gradient-to-br from-pink-200 via-rose-100 to-orange-200",
    "bg-gradient-to-br from-amber-200 via-yellow-100 to-orange-200",
    "bg-gradient-to-br from-emerald-200 via-teal-100 to-cyan-200",
    "bg-gradient-to-br from-rose-200 via-pink-100 to-fuchsia-200",
    "bg-gradient-to-br from-teal-200 via-emerald-100 to-green-200",
    "bg-gradient-to-br from-indigo-200 via-blue-100 to-cyan-200",
    "bg-gradient-to-br from-orange-200 via-amber-100 to-yellow-200",
    "bg-gradient-to-br from-fuchsia-200 via-purple-100 to-violet-200",
  ];

  const bgClass = allGradients[index % allGradients.length];

  return (
    <article
      tabIndex={0}
      aria-label={`${member.name} — ${member.role}`}
      className={`group relative flex items-center justify-between overflow-hidden rounded-xl pt-3 pl-3 md:pt-5 md:pl-5   transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 ${bgClass}`}
    >
      {/* Left: Name + Role */}
      <div className="min-w-0 mr-2 flex-1 flex flex-col">
        <h3 className="text-xs md:text-base font-bold text-gray-900 line-clamp-2">
          {member.name}
        </h3>
        <p className="mt-1 text-[10px] md:text-xs text-gray-700 font-bold uppercase line-clamp-3">
          {member.role}
        </p>
      </div>

      {/* Right: Photo (circular, slightly overlapping card edge) */}
      <div className="relative flex-shrink-0 w-18 md:w-28 h-20 md:h-30">
        <div className="absolute -right-0 bottom-0 ">
          <img
            src={imageUrl}
            alt={member.name}
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              target.onerror = null;
              target.src = `data:image/svg+xml;utf8,${encodeURIComponent(
                `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><rect width='100%' height='100%' fill='%23e5e7eb'/><text x='50%' y='50%' font-size='40' text-anchor='middle' fill='%239ca3af' dy='.3em'>No Image</text></svg>`,
              )}`;
            }}
          />
        </div>
      </div>
    </article>
  );
};

const SectionHeader: React.FC<{
  badge: string;
  badgeIcon: React.ReactNode;
  title: string;
  titleHighlight?: string;
  description?: string;
  gradientFrom: string;
  gradientTo: string;
}> = ({
  badge,
  badgeIcon,
  title,
  titleHighlight,
  description,
  gradientFrom,
  gradientTo,
}) => (
  <div className="text-center mb-12">
    <div
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white text-xs font-bold tracking-widest uppercase mb-6 shadow-lg`}
    >
      {badgeIcon}
      <span>{badge}</span>
    </div>
    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
      {title}{" "}
      {titleHighlight && (
        <span
          className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientFrom} ${gradientTo}`}
        >
          {titleHighlight}
        </span>
      )}
    </h2>
    {description && (
      <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
        {description}
      </p>
    )}
  </div>
);

export default function AboutPageContent({
  teamMembers,
}: AboutPageContentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar onContact={() => setIsModalOpen(true)} />
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <section className="relative pt-32 pb-10 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, #ecfdf5 0%, #d1fae5 25%, #a7f3d0 50%, #6ee7b7 75%, #34d399 100%)",
            }}
          />
          <div className="absolute inset-0 bg-white/30 backdrop-blur-xl" />
        </div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-2xl" />

        <div className="absolute bottom-48 left-20 opacity-15">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect
              x="5"
              y="5"
              width="30"
              height="30"
              rx="8"
              stroke="#10b981"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-9xl mx-auto px-3 md:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500 text-white text-xs font-bold tracking-widest uppercase mb-6 shadow-xl shadow-emerald-500/25">
              <Sparkles size={14} className="animate-pulse" />
              <span>Our Story</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              A Path Where
              <br />
              <span className="relative inline-block mt-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">
                  Business Meets Belief
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                >
                  <path
                    d="M2 10C80 4 220 4 298 10"
                    stroke="url(#story-underline)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="story-underline"
                      x1="0"
                      y1="0"
                      x2="300"
                      y2="0"
                    >
                      <stop stopColor="#10B981" />
                      <stop offset="0.5" stopColor="#14B8A6" />
                      <stop offset="1" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
          </div>

          <div className="relative rounded-3xl md:rounded-[2.5rem] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2740%27%20height=%2740%27%20viewBox=%270%200%2040%2040%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg%20fill=%27none%27%20fill-rule=%27evenodd%27%3E%3Cg%20fill=%27%2310b981%27%20fill-opacity=%270.06%27%3E%3Cpath%20d=%27M0%2040L40%200H20L0%2020M40%2040V20L20%2040%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />

            <div className="relative z-10 p-6 md:p-12">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                <div className="order-2 lg:order-1">
                  <div className="space-y-5 text-slate-700 leading-relaxed">
                    <div className="lg:hidden">
                      <p className="text-lg">
                        Raasta was not built overnight; it was shaped through
                        conversations, trust, shared risks, and a deep belief in
                        doing things the right way. Founded by{" "}
                        <strong className="text-emerald-600">
                          Muhammad Najeeb Nazar
                        </strong>
                        ,{" "}
                        <strong className="text-emerald-600">
                          Geetansh Suri
                        </strong>
                        , and{" "}
                        <strong className="text-emerald-600">
                          Muhammad Navas Nazar
                        </strong>
                        .
                      </p>
                      <details className="mt-4 group">
                        <summary className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold cursor-pointer hover:shadow-lg transition-all duration-300 list-none">
                          <span className="group-open:hidden">Read More</span>
                          <span className="hidden group-open:inline">
                            Show Less
                          </span>
                          <ArrowRight
                            size={16}
                            className="group-open:rotate-90 transition-transform"
                          />
                        </summary>
                        <div className="mt-5 space-y-4 text-base animate-fadeIn">
                          <p>
                            At the heart of Raasta is a simple truth — every
                            path we create begins with the client. Their goals,
                            concerns, and dreams shape every decision we take.
                          </p>
                          <p>
                            This journey is strengthened by a dedicated team
                            that walks this path with us every day. Our people
                            are our greatest strength.
                          </p>
                          <p>
                            As we look ahead, our vision for Raasta goes beyond
                            today. We are building something enduring — a
                            platform that evolves with time.
                          </p>
                          <p className="text-lg font-semibold text-slate-800 pt-2">
                            We don't see ourselves ahead of you — we walk with
                            you.
                          </p>
                        </div>
                      </details>
                    </div>

                    <div className="hidden lg:block space-y-5 text-lg">
                      <p>
                        Raasta was not built overnight; it was shaped through
                        conversations, trust, shared risks, and a deep belief in
                        doing things the right way.
                      </p>
                      <p>
                        Founded by{" "}
                        <strong className="text-emerald-600">
                          Muhammad Navas Nazar
                        </strong>
                        ,{" "}
                        <strong className="text-emerald-600">
                          Geetansh Suri
                        </strong>
                        , and{" "}
                        <strong className="text-emerald-600">
                          Muhammad Najeeb Nazar
                        </strong>
                        .
                      </p>
                      <p>
                        At the heart of Raasta is a simple truth — every path we
                        create begins with the client. Their goals, concerns,
                        and dreams shape every decision we take, because Raasta
                        exists not to sell, but to serve with honesty and
                        responsibility.
                      </p>
                      <p>
                        This journey is strengthened by a dedicated team that
                        walks this path with us every day. Our people are our
                        greatest strength — they are the ones who believe in the
                        vision, carry the values forward, and turn intent into
                        action through their commitment and care.
                      </p>
                      <p>
                        As we look ahead, our vision for Raasta goes beyond
                        today. We are building something enduring — a platform
                        that evolves with time, sets new standards, and
                        redefines how trust is experienced in this industry.
                      </p>
                      <p className="text-xl font-semibold text-slate-800 pt-2">
                        We don't see ourselves ahead of you — we walk with you.
                      </p>
                      <p className="text-slate-600 italic">
                        This is our Raasta that we chose and together we walk
                        proudly, each step of the journey that has just begun.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right - Image with Founders */}
                <div className="order-1 lg:order-2">
                  {/* Image Container */}
                  <div className="relative group">
                    {/* Decorative frame */}
                    <div className="absolute -top-3 -left-3 w-16 h-16 border-t-4 border-l-4 border-emerald-400 rounded-tl-2xl opacity-70" />
                    <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-4 border-r-4 border-teal-400 rounded-br-2xl opacity-70" />

                    {/* Glow effect */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

                    <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                      <img
                        src="https://cdn.sanity.io/images/8dj8qon7/production/a59b2b9203cd812167fc0ccb744c191e5d34a2a5-768x512.jpg"
                        alt="Raasta Realty Founders"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader
            badge="What Sets Us Apart"
            badgeIcon={<Star size={14} className="fill-current" />}
            title="Purpose-Driven"
            titleHighlight="Real Estate"
            description="We believe real estate is not only about buying and selling properties, but about shaping futures."
            gradientFrom="from-amber-500"
            gradientTo="to-orange-500"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: <Heart size={24} />,
                title: "6% for Charity",
                description:
                  "A fixed 6% of our revenue from every deal is dedicated to charitable causes — education, healthcare, shelter, and essential needs.",
                gradient: "from-rose-500 to-pink-500",
              },
              {
                icon: <Handshake size={24} />,
                title: "Trust & Transparency",
                description:
                  "Every transaction is guided by responsibility, transparency, and a deeper intention to create wealth that matters.",
                gradient: "from-emerald-500 to-teal-500",
              },
              {
                icon: <TrendingUp size={24} />,
                title: "Data-Driven Insights",
                description:
                  "Every investment is approached with clarity, data-driven insight, and the confidence that your success contributes to something greater.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: <Award size={24} />,
                title: "Agent Growth Platform",
                description:
                  "Through mentorship, recognition, and opportunity, we help individuals evolve into respected brands within the real estate industry.",
                gradient: "from-violet-500 to-purple-500",
              },
              {
                icon: <Users size={24} />,
                title: "Client-Centric Approach",
                description:
                  "For our clients and investors, we offer trusted guidance combining market expertise with transparency and responsibility.",
                gradient: "from-amber-500 to-orange-500",
              },
              {
                icon: <Sparkles size={24} />,
                title: "Purpose Over Performance",
                description:
                  "A platform that values purpose alongside performance, building something enduring that will be remembered for what it stood for.",
                gradient: "from-pink-500 to-rose-500",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 rounded-3xl bg-white hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center gap-2 mb-2 md:mb-4">
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center text-white shadow-lg flex-shrink-0`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Desktop: Full text */}
                <p className="hidden md:block text-slate-600 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>

                {/* Mobile: Read More */}
                <div className="md:hidden">
                  <details className="group">
                    <summary className="list-none text-sm font-semibold text-emerald-600 cursor-pointer flex items-center gap-1">
                      <span className="group-open:hidden">Read more</span>
                      <span className="hidden group-open:inline">
                        Show less
                      </span>
                      <ArrowRight
                        size={14}
                        className="group-open:rotate-90 transition-transform"
                      />
                    </summary>
                    <p className="mt-2 text-slate-600 leading-relaxed text-sm animate-fadeIn">
                      {item.description}
                    </p>
                  </details>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="relative p-10 rounded-3xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2740%27%20height=%2740%27%20viewBox=%270%200%2040%2040%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg%20fill=%27none%27%20fill-rule=%27evenodd%27%3E%3Cg%20fill=%27%23ffffff%27%20fill-opacity=%270.1%27%3E%3Cpath%20d=%27M0%2040L40%200H20L0%2020M40%2040V20L20%2040%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Target size={28} />
                  </div>
                  <h3 className="text-3xl font-bold">Our Mission</h3>
                </div>
                <p className="text-white/90 text-lg leading-relaxed">
                  To transform the lives of everyone connected to Raasta Realty
                  i.e. clients, investors, agents, and referral partners, while
                  extending our impact to the deserving souls supported through
                  our legacy fund.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="relative p-10 rounded-3xl bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 text-white shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2740%27%20height=%2740%27%20viewBox=%270%200%2040%2040%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg%20fill=%27none%27%20fill-rule=%27evenodd%27%3E%3Cg%20fill=%27%23ffffff%27%20fill-opacity=%270.1%27%3E%3Cpath%20d=%27M0%2040L40%200H20L0%2020M40%2040V20L20%2040%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Eye size={28} />
                  </div>
                  <h3 className="text-3xl font-bold">Our Vision</h3>
                </div>
                <p className="text-white/90 text-lg leading-relaxed">
                  Through every deal, we uplift lives. Our vision is to be
                  remembered not for the number of sales we made, but for the
                  difference we created in people’s lives.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-10 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 text-white text-center shadow-2xl">
            <p className="text-2xl md:text-3xl font-bold leading-relaxed">
              "Raasta Realty is not focused on short-term wins. We are building
              something enduring — a name that stands for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                trust, impact, and progress
              </span>
              ."
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-slate-50">
        <div className="max-w-9xl mx-auto px-3 md:px-12">
          <div className="relative rounded-3xl md:rounded-[2.5rem] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2740%27%20height=%2740%27%20viewBox=%270%200%2040%2040%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg%20fill=%27none%27%20fill-rule=%27evenodd%27%3E%3Cg%20fill=%27%233b82f6%27%20fill-opacity=%270.06%27%3E%3Cpath%20d=%27M0%2040L40%200H20L0%2020M40%2040V20L20%2040%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />

            <div className="relative z-10 p-6 md:p-12">
              <SectionHeader
                badge="Management Team"
                badgeIcon={<Users size={14} />}
                title="The Quiet Strength"
                titleHighlight="Behind the Scenes"
                gradientFrom="from-blue-500"
                gradientTo="to-cyan-500"
              />

              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                {/* Left - Management Images */}
                <div className="order-1 lg:order-1">
                  <div className="grid grid-cols-2 gap-4">
                    {teamMembers.management.slice(0, 2).map((member, index) => (
                      <div key={member._id} className="relative group">
                        {/* Decorative frame */}
                        <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-blue-400 rounded-tl-lg opacity-70" />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-cyan-400 rounded-br-lg opacity-70" />
                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                        <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-white">
                          <img
                            src={
                              member.image?.asset?.url ||
                              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
                            }
                            alt={member.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />

                          {/* Gradient overlay with name */}
                          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#00f6ff] via-[#03d0ff]/20 to-transparent">
                            <div className="absolute bottom-0 left-0 p-3">
                              <h4 className="text-black font-bold text-sm">
                                {member.name}
                              </h4>
                              <p className="text-black text-xs">
                                {member.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right - Content */}
                <div className="order-2 lg:order-2">
                  <div className="space-y-5 text-slate-700 leading-relaxed">
                    {/* Mobile: Show limited content with Read More */}
                    <div className="lg:hidden">
                      <p className="text-lg">
                        Behind every smooth operation and growing team at Raasta
                        is a foundation built on care, clarity, and consistency.
                      </p>
                      <p className="text-lg">
                        Our Administration and HR leadership play a vital role
                        in shaping the culture we work in every day.
                      </p>
                      <details className="mt-4 group">
                        <summary className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold cursor-pointer hover:shadow-lg transition-all duration-300 list-none">
                          <span className="group-open:hidden">Read More</span>
                          <span className="hidden group-open:inline">
                            Show Less
                          </span>
                          <ArrowRight
                            size={16}
                            className="group-open:rotate-90 transition-transform"
                          />
                        </summary>
                        <div className="mt-5 space-y-4 text-base animate-fadeIn">
                          <p>
                            This responsibility is led by{" "}
                            <strong className="text-blue-600">
                              Shaheen Fadil (Administrator)
                            </strong>{" "}
                            and{" "}
                            <strong className="text-blue-600">
                              Selin John (HR Manager)
                            </strong>{" "}
                            — they are the quiet strength behind the scenes.
                          </p>
                          <p>
                            At Raasta, their work keeps our path steady,
                            aligned, and human at its core.
                          </p>
                        </div>
                      </details>
                    </div>

                    {/* Desktop: Show full content */}
                    <div className="hidden lg:block space-y-5 text-lg">
                      <p>
                        Behind every smooth operation and growing team at Raasta
                        is a foundation built on care, clarity, and consistency.
                      </p>
                      <p>
                        Our Administration and HR leadership play a vital role
                        in shaping the culture we work in every day. From
                        nurturing people and managing processes to ensuring
                        fairness, balance, and structure, they create an
                        environment where individuals can focus, grow, and give
                        their best.
                      </p>
                      <p>
                        This responsibility is led by{" "}
                        <strong className="text-blue-600">
                          Shaheen Fadil (Administrator)
                        </strong>{" "}
                        and{" "}
                        <strong className="text-blue-600">
                          Selin John (HR Manager)
                        </strong>{" "}
                        — they are the quiet strength behind the scenes. Through
                        their dedication, they listen, support, organize, and
                        guide, ensuring that both people and systems move
                        forward together.
                      </p>
                      <p>
                        At Raasta, their work keeps our path steady, aligned,
                        and human at its core.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-slate-50">
        <div className="max-w-9xl mx-auto px-3 md:px-12">
          <div className="relative rounded-3xl md:rounded-[2.5rem] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2740%27%20height=%2740%27%20viewBox=%270%200%2040%2040%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg%20fill=%27none%27%20fill-rule=%27evenodd%27%3E%3Cg%20fill=%27%23f59e0b%27%20fill-opacity=%270.06%27%3E%3Cpath%20d=%27M0%2040L40%200H20L0%2020M40%2040V20L20%2040%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />

            <div className="relative z-10 px-2 pt-6 pb-2  md:p-12">
              <SectionHeader
                badge="Elite Agents"
                badgeIcon={<Award size={14} />}
                title="Expertise, Trust &"
                titleHighlight="Market Intelligence"
                gradientFrom="from-amber-500"
                gradientTo="to-orange-500"
              />

              <div className="hidden md:block max-w-4xl mx-auto text-center mb-12 space-y-5">
                <p className="text-slate-700 text-lg leading-relaxed">
                  At Raasta Realty, our Elite Agents represent expertise, market
                  intelligence, and trust within Dubai's dynamic real estate
                  environment. They guide clients through high-value decisions
                  with clarity, professionalism, and a strong understanding of
                  market movements.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed">
                  Focused on strategy rather than pressure, our Elite Agents
                  align the right opportunities with individual goals. Every
                  interaction is driven by transparency, precision, and
                  long-term value creation.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed font-semibold">
                  They act as trusted partners, protecting client interests
                  while delivering confident, informed real estate guidance at
                  every stage.
                </p>
              </div>

              <div className="md:hidden max-w-4xl mx-auto text-center mb-8">
                <div className="space-y-4 text-slate-700 text-base leading-relaxed">
                  <p>
                    At Raasta Realty, our Elite Agents represent expertise,
                    market intelligence, and trust within Dubai's dynamic real
                    estate environment.
                  </p>
                  <p>
                    They guide clients through high-value decisions with
                    clarity, professionalism, and a strong understanding of
                    market movements.
                  </p>

                  <details className="group">
                    <summary className="list-none text-sm font-semibold text-amber-600 cursor-pointer flex items-center justify-center gap-1 mt-3">
                      <span className="group-open:hidden">Read more</span>
                      <span className="hidden group-open:inline">
                        Show less
                      </span>
                      <ArrowRight
                        size={14}
                        className="group-open:rotate-90 transition-transform"
                      />
                    </summary>
                    <div className="mt-4 space-y-4 animate-fadeIn">
                      <p>
                        Focused on strategy rather than pressure, our Elite
                        Agents align the right opportunities with individual
                        goals.
                      </p>
                      <p className="font-semibold">
                        They act as trusted partners, protecting client
                        interests while delivering confident, informed real
                        estate guidance at every stage.
                      </p>
                    </div>
                  </details>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3">
                {teamMembers.elite_agents.length > 0 ? (
                  teamMembers.elite_agents.map((member, index) => (
                    <TeamMemberCard
                      key={member._id}
                      member={member}
                      index={index}
                      gradientColor="amber"
                    />
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-slate-500 text-lg">
                      Team members will appear here once added to Sanity CMS.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Team */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-9xl mx-auto px-3 md:px-12">
          <div className="relative rounded-3xl md:rounded-[2.5rem] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2740%27%20height=%2740%27%20viewBox=%270%200%2040%2040%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg%20fill=%27none%27%20fill-rule=%27evenodd%27%3E%3Cg%20fill=%27%23ec4899%27%20fill-opacity=%270.06%27%3E%3Cpath%20d=%27M0%2040L40%200H20L0%2020M40%2040V20L20%2040%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />

            <div className="relative z-10 px-2 pt-6 pb-2  md:p-12">
              <SectionHeader
                badge="Media Team"
                badgeIcon={<Camera size={14} />}
                title="Giving Our Journey"
                titleHighlight="A Voice"
                gradientFrom="from-pink-500"
                gradientTo="to-rose-500"
              />

              <div className="hidden md:block max-w-4xl mx-auto text-center mb-12 space-y-5">
                <p className="text-slate-700 text-lg leading-relaxed">
                  Behind every post, reel, and story at Raasta is a creative
                  team that brings our journey to life.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed">
                  Our Content Creators don't just manage platforms — they
                  capture purpose, people, and progress.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed">
                  By turning real moments into real stories, they shape how
                  Raasta is seen, felt, and remembered.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed font-semibold">
                  They don't market properties. They give our journey a voice.
                </p>
              </div>

              <div className="md:hidden max-w-4xl mx-auto text-center mb-8">
                <div className="space-y-4 text-slate-700 text-base leading-relaxed">
                  <p>
                    Behind every post, reel, and story at Raasta is a creative
                    team that brings our journey to life.
                  </p>
                  <p>
                    Our Content Creators don't just manage platforms — they
                    capture purpose, people, and progress.
                  </p>

                  <details className="group">
                    <summary className="list-none text-sm font-semibold text-pink-600 cursor-pointer flex items-center justify-center gap-1 mt-3">
                      <span className="group-open:hidden">Read more</span>
                      <span className="hidden group-open:inline">
                        Show less
                      </span>
                      <ArrowRight
                        size={14}
                        className="group-open:rotate-90 transition-transform"
                      />
                    </summary>
                    <div className="mt-4 space-y-4 animate-fadeIn">
                      <p>
                        By turning real moments into real stories, they shape
                        how Raasta is seen, felt, and remembered.
                      </p>
                      <p className="font-semibold">
                        They don't market properties. They give our journey a
                        voice.
                      </p>
                    </div>
                  </details>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {teamMembers.media.length > 0 ? (
                  teamMembers.media.map((member, index) => (
                    <TeamMemberCard
                      key={member._id}
                      member={member}
                      index={index}
                      variant="small"
                      gradientColor="pink"
                    />
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-slate-500 text-lg">
                      Team members will appear here once added to Sanity CMS.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Team */}
      <section className="py-10 md:py-10 bg-white">
        <div className="max-w-9xl mx-auto px-3 md:px-10">
          <div className="relative rounded-3xl md:rounded-[2.5rem] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2740%27%20height=%2740%27%20viewBox=%270%200%2040%2040%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg%20fill=%27none%27%20fill-rule=%27evenodd%27%3E%3Cg%20fill=%27%2310b981%27%20fill-opacity=%270.06%27%3E%3Cpath%20d=%27M0%2040L40%200H20L0%2020M40%2040V20L20%2040%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />

            <div className="relative z-10 px-2 pt-6 pb-2  md:p-12">
              <SectionHeader
                badge="Sales Team"
                badgeIcon={<TrendingUp size={14} />}
                title="Energy, Focus &"
                titleHighlight="Responsibility"
                gradientFrom="from-emerald-500"
                gradientTo="to-teal-500"
              />

              <div className="hidden md:block max-w-4xl mx-auto text-center mb-12 space-y-5">
                <p className="text-slate-700 text-lg leading-relaxed">
                  Raasta Realty's Sales Team works with energy, focus, and a
                  strong sense of responsibility.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed">
                  They understand the pace of Dubai real estate and move
                  quickly, but never at the cost of trust or accuracy.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed">
                  Every follow-up, every conversation, and every closing is
                  handled with commitment and care. The team stays close to
                  clients, keeps communication clear, and ensures the journey is
                  smooth and stress-free.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed font-semibold">
                  They don't just aim to close deals. They aim to do it right,
                  building confidence, long-term relationships, and a reputation
                  Raasta Realty is proud of.
                </p>
              </div>

              <div className="md:hidden max-w-4xl mx-auto text-center mb-8">
                <div className="space-y-4 text-slate-700 text-base leading-relaxed">
                  <p>
                    Raasta Realty's Sales Team works with energy, focus, and a
                    strong sense of responsibility.
                  </p>
                  <p>
                    They understand the pace of Dubai real estate and move
                    quickly, but never at the cost of trust or accuracy.
                  </p>

                  <details className="group">
                    <summary className="list-none text-sm font-semibold text-emerald-600 cursor-pointer flex items-center justify-center gap-1 mt-3">
                      <span className="group-open:hidden">Read more</span>
                      <span className="hidden group-open:inline">
                        Show less
                      </span>
                      <ArrowRight
                        size={14}
                        className="group-open:rotate-90 transition-transform"
                      />
                    </summary>
                    <div className="mt-4 space-y-4 animate-fadeIn">
                      <p>
                        Every follow-up, every conversation, and every closing
                        is handled with commitment and care. The team stays
                        close to clients, keeps communication clear, and ensures
                        the journey is smooth and stress-free.
                      </p>
                      <p className="font-semibold">
                        They don't just aim to close deals. They aim to do it
                        right, building confidence, long-term relationships, and
                        a reputation Raasta Realty is proud of.
                      </p>
                    </div>
                  </details>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                {teamMembers.sales.length > 0 ? (
                  teamMembers.sales.map((member, index) => (
                    <TeamMemberCard
                      key={member._id}
                      member={member}
                      index={index}
                      variant="small"
                      gradientColor="emerald"
                    />
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-slate-500 text-lg">
                      Team members will appear here once added to Sanity CMS.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Sparkles className="w-12 h-12 text-white/80 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Walk This Path With Us?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Join us on a journey where success creates legacy.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 rounded-full bg-white text-emerald-600 font-bold hover:bg-slate-100 transition-colors shadow-xl flex items-center gap-2 mx-auto"
          >
            Get in Touch
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
