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
}> = ({ member, variant = "medium", gradientColor = "emerald" }) => {
  const imageUrl =
    member.image?.asset?.url ||
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop";

  const sizeClasses = {
    large: "h-[420px]",
    medium: "h-[320px]",
    small: "h-[280px]",
  };

  const gradientColors = {
    violet: "from-violet-500 via-purple-500/30 to-transparent",
    blue: "from-cyan-500 via-blue-500/30 to-transparent",
    pink: "from-rose-500 via-pink-500/30 to-transparent",
    amber: "from-amber-500 via-orange-500/30 to-transparent",
    emerald: "from-emerald-500 via-teal-500/30 to-transparent",
  };

  const overlayColors = {
    violet: "from-[#8b5cf6] via-[#a855f7]/20",
    blue: "from-[#00f6ff] via-[#03d0ff]/20",
    pink: "from-[#f43f5e] via-[#ec4899]/20",
    amber: "from-[#f59e0b] via-[#fb923c]/20",
    emerald: "from-[#10b981] via-[#14b8a6]/20",
  };

  return (
    <div
      className={`group relative w-full ${sizeClasses[variant]} rounded-[1.25rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]`}
    >
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 bg-slate-200">
        <img
          src={imageUrl}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Base Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
      </div>

      {/* Colored gradient overlay */}
      <div
        className={`absolute inset-0 z-10 bg-gradient-to-t ${overlayColors[gradientColor]} to-transparent opacity-60`}
      />

      {/* Role Badge - Top Left */}
      <div className="absolute top-4 left-4 z-20">
        <span
          className={`px-3 py-1.5 bg-gradient-to-r ${gradientColors[gradientColor]} backdrop-blur-md text-xs font-bold uppercase tracking-wider text-white rounded-full shadow-lg`}
        >
          {member.role}
        </span>
      </div>

      {/* Bio on Hover */}
      {member.bio && (
        <div className="absolute inset-0 z-15 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <p className="relative text-white/95 text-sm text-center line-clamp-5 max-w-[90%]">
            {member.bio}
          </p>
        </div>
      )}

      {/* Bottom text content */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-5">
        <h3 className="text-2xl font-bold text-white leading-tight mb-1 drop-shadow-lg">
          {member.name}
        </h3>
        <p className="text-sm text-white/90 font-medium">{member.role}</p>
      </div>
    </div>
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 25%, #a7f3d0 50%, #6ee7b7 75%, #34d399 100%)",
            }}
          />
          <div className="absolute inset-0 bg-white/30 backdrop-blur-xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-white/50 text-emerald-600 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm backdrop-blur-sm">
              <Heart size={14} className="fill-current" />
              <span>About Raasta Realty</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight mb-6 leading-[1.1]">
              A Path Where
              <br />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">
                  Business Meets Belief
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 10"
                  fill="none"
                >
                  <path
                    d="M2 8C50 2 150 2 198 8"
                    stroke="url(#about-underline)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="about-underline"
                      x1="0"
                      y1="0"
                      x2="200"
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

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-700 leading-relaxed">
              Raasta Realty is more than a real estate company. It is a
              purpose-driven platform built to create long-term value,
              meaningful growth, and lasting impact.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "6%", label: "Revenue to Charity" },
              { value: "Trust", label: "Our Foundation" },
              { value: "Impact", label: "Our Goal" },
              { value: "Legacy", label: "Our Vision" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/50 text-center shadow-lg"
              >
                <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-600 uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 text-white text-xs font-bold tracking-widest uppercase mb-6 shadow-lg">
                <Sparkles size={14} />
                <span>Our Story</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Three Minds. One Raasta.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-500">
                  Built On Belief
                </span>
              </h2>

              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Raasta was not built overnight; it was shaped through
                  conversations, trust, shared risks, and a deep belief in doing
                  things the right way.
                </p>
                <p>
                  Founded by <strong>Muhammad Navas Nazar</strong>,{" "}
                  <strong>Geetansh Suri</strong>, and{" "}
                  <strong>Muhammad Najeeb Nazar</strong>.
                </p>
                <p>
                  At the heart of Raasta is a simple truth — every path we
                  create begins with the client. Their goals, concerns, and
                  dreams shape every decision we take, because Raasta exists not
                  to sell, but to serve with honesty and responsibility.
                </p>
                <p>
                  We don't see ourselves ahead of you — we walk with you. This
                  is our Raasta that we chose and together we walk proudly, each
                  step of the journey that has just begun.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://cdn.sanity.io/images/8dj8qon7/production/a072261628072bed1efabe3b92f407f96b05667d-2432x1550.png"
                  alt="Raasta Realty Team - From Ours to Yours"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-slate-100"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center text-white mb-6 shadow-lg`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-10 rounded-3xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-2xl">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                To transform the lives of everyone connected to Raasta Realty —
                clients, investors, agents, and referral partners — while
                extending our impact to the deserving souls supported through
                our legacy fund.
              </p>
            </div>

            {/* Vision */}
            <div className="p-10 rounded-3xl bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 text-white shadow-2xl">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                <Eye size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                Through every deal, we uplift lives. Our vision is to be
                remembered not for the number of sales we made, but for the
                difference we created in people's lives.
              </p>
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

      {/* Founders Section */}
      {teamMembers.founders.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionHeader
              badge="Founders"
              badgeIcon={<Star size={14} className="fill-current" />}
              title="The Visionaries"
              titleHighlight="Behind Raasta"
              description="Three minds united by a shared belief in doing things the right way."
              gradientFrom="from-violet-500"
              gradientTo="to-purple-500"
            />

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.founders.map((member) => (
                <TeamMemberCard
                  key={member._id}
                  member={member}
                  variant="large"
                  gradientColor="violet"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Management Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader
            badge="Management Team"
            badgeIcon={<Users size={14} />}
            title="The Quiet Strength"
            titleHighlight="Behind the Scenes"
            gradientFrom="from-blue-500"
            gradientTo="to-cyan-500"
          />

          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              Behind every smooth operation and growing team at Raasta is a
              foundation built on care, clarity, and consistency.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              Our Administration and HR leadership play a vital role in shaping
              the culture we work in every day. From nurturing people and
              managing processes to ensuring fairness, balance, and structure,
              they create an environment where individuals can focus, grow, and
              give their best.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              This responsibility is led by{" "}
              <strong>Shaheen Fadil (Administrator)</strong> and{" "}
              <strong>Selin John (HR Manager)</strong> — they are the quiet
              strength behind the scenes. Through their dedication, they listen,
              support, organize, and guide, ensuring that both people and
              systems move forward together.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed">
              At Raasta, their work keeps our path steady, aligned, and human at
              its core.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.management.length > 0 ? (
              teamMembers.management.map((member) => (
                <TeamMemberCard
                  key={member._id}
                  member={member}
                  gradientColor="blue"
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
      </section>

      {/* Media Team */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader
            badge="Media Team"
            badgeIcon={<Camera size={14} />}
            title="Giving Our Journey"
            titleHighlight="A Voice"
            gradientFrom="from-pink-500"
            gradientTo="to-rose-500"
          />

          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              Behind every post, reel, and story at Raasta is a creative team
              that brings our journey to life.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              Our Content Creators don't just manage platforms — they capture
              purpose, people, and progress.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              By turning real moments into real stories, they shape how Raasta
              is seen, felt, and remembered.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed font-semibold">
              They don't market properties. They give our journey a voice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.media.length > 0 ? (
              teamMembers.media.map((member) => (
                <TeamMemberCard
                  key={member._id}
                  member={member}
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
      </section>

      {/* Elite Agents */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader
            badge="Elite Agents"
            badgeIcon={<Award size={14} />}
            title="Expertise, Trust &"
            titleHighlight="Market Intelligence"
            gradientFrom="from-amber-500"
            gradientTo="to-orange-500"
          />

          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              At Raasta Realty, our Elite Agents represent expertise, market
              intelligence, and trust within Dubai's dynamic real estate
              environment. They guide clients through high-value decisions with
              clarity, professionalism, and a strong understanding of market
              movements.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              Focused on strategy rather than pressure, our Elite Agents align
              the right opportunities with individual goals. Every interaction
              is driven by transparency, precision, and long-term value
              creation.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed font-semibold">
              They act as trusted partners, protecting client interests while
              delivering confident, informed real estate guidance at every
              stage.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.elite_agents.length > 0 ? (
              teamMembers.elite_agents.map((member) => (
                <TeamMemberCard
                  key={member._id}
                  member={member}
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
      </section>

      {/* Sales Team */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader
            badge="Sales Team"
            badgeIcon={<TrendingUp size={14} />}
            title="Energy, Focus &"
            titleHighlight="Responsibility"
            gradientFrom="from-emerald-500"
            gradientTo="to-teal-500"
          />

          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              Raasta Realty's Sales Team works with energy, focus, and a strong
              sense of responsibility.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              They understand the pace of Dubai real estate and move quickly,
              but never at the cost of trust or accuracy.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              Every follow-up, every conversation, and every closing is handled
              with commitment and care. The team stays close to clients, keeps
              communication clear, and ensures the journey is smooth and
              stress-free.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed font-semibold">
              They don't just aim to close deals. They aim to do it right,
              building confidence, long-term relationships, and a reputation
              Raasta Realty is proud of.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.sales.length > 0 ? (
              teamMembers.sales.map((member) => (
                <TeamMemberCard
                  key={member._id}
                  member={member}
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
