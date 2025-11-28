import React from "react";
import Link from "next/link";
import { Award, Target, Users, TrendingUp } from "lucide-react";

export default function AboutUs() {
  const services = [
    {
      icon: Award,
      title: "Property Valuation",
      description:
        "All-inclusive real estate services to facilitate the easy and confident purchase, sale, and management of your properties.",
      gradient: "from-yellow-400 to-pink-500",
    },
    {
      icon: Users,
      title: "Property Management",
      description:
        "All-inclusive real estate services to facilitate the easy and confident purchase, sale, and management of your properties.",
      gradient: "from-sky-400 to-pink-500",
    },
    {
      icon: Target,
      title: "Business Consulting",
      description:
        "Business consulting involves providing expert advice and services to help real estate businesses improve performance and achieve their goals.",
      gradient: "from-lime-400 to-cyan-400",
    },
    {
      icon: TrendingUp,
      title: "Invest Opportunities",
      description:
        "Real estate services to help investors identify, evaluate, and act on high-potential property opportunities for growth.",
      gradient: "from-yellow-400 to-pink-500",
    },
  ];

  return (
    <section
      id="about"
      className="max-w-7xl mx-auto rounded-3xl bg- overflow-hidden "
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            We are a real estate firm with over 20 years of expertise, and our
            main goal is to provide amazing locations to our partners.
          </p>
          <Link href="/about">
            <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
              Learn More
            </button>
          </Link>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="relative w-full h-[340px] flex justify-center items-center group transition-all duration-500"
              >
                {/* Background layers (skewed gradient + blurred glow) */}
                <div
                  className={`absolute top-0 left-10 w-1/2 h-full bg-gradient-to-br ${service.gradient} rounded-lg -skew-x-12 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-70px)] transition-all duration-500`}
                />

                {/* Floating highlights */}
                <span className="absolute inset-0 pointer-events-none z-10">
                  <span className="absolute w-0 h-0 bg-gray-900/10 backdrop-blur-md rounded-lg opacity-0 group-hover:opacity-100 group-hover:w-24 group-hover:h-24 group-hover:-top-10 group-hover:left-10 transition-all duration-300 shadow-xl" />
                  <span className="absolute w-full h-full bg-gray-900/10 backdrop-blur-md rounded-lg opacity-0 group-hover:opacity-100 group-hover:-bottom-10 group-hover:right-10 transition-all duration-500 shadow-xl" />
                </span>

                {/* Card Content */}
                <div className="relative bg-white/8 backdrop-blur-lg text-white rounded-2xl p-6 z-20 shadow-xl w-[85%] group-hover:-translate-x-6 group-hover:py-10 transition-all duration-500">
                  <div className="mb-3 w-12 h-12 flex items-center justify-center rounded-full bg-white/20">
                    <Icon size={28} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white text-xs  leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
          <p className="text-lg text-gray-300 leading-relaxed">
            All-inclusive real estate services to facilitate the easy and
            confident purchase, sale, and management of your properties.
          </p>
        </div>
      </div>
    </section>
  );
}
