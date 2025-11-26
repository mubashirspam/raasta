"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Clock, Share2 } from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer";

// Blog data - in a real app, this would come from a CMS or API
const blogPosts = {
  "1": {
    id: 1,
    title: "Top 10 Luxury Properties in Dubai Marina 2024",
    excerpt:
      "Discover the most sought-after luxury properties in Dubai Marina. From waterfront penthouses to modern apartments with stunning views.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop",
    author: "Ahmed Al Mansouri",
    date: "Nov 20, 2024",
    category: "Luxury Properties",
    readTime: "5 min read",
    content: `
      <p>Dubai Marina has established itself as one of the most prestigious addresses in Dubai, offering a unique waterfront lifestyle combined with world-class amenities. In this comprehensive guide, we explore the top 10 luxury properties that define the pinnacle of refined living in this iconic neighborhood.</p>

      <h2>1. Marina Gate Residences</h2>
      <p>Standing tall at 338 meters, Marina Gate offers spectacular views of the Arabian Gulf and Palm Jumeirah. These luxurious apartments feature contemporary design, state-of-the-art facilities, and direct access to Dubai Marina Mall.</p>

      <h2>2. Princess Tower</h2>
      <p>One of the tallest residential buildings in the world, Princess Tower provides residents with breathtaking panoramic views. The penthouses here are particularly sought after by discerning buyers looking for ultimate luxury.</p>

      <h2>3. Cayan Tower</h2>
      <p>Famous for its unique twisted architecture, Cayan Tower is an architectural marvel that offers luxury apartments with floor-to-ceiling windows, providing unobstructed views of the marina and beyond.</p>

      <h2>Investment Potential</h2>
      <p>Dubai Marina continues to be one of the most promising areas for real estate investment. The area's rental yields remain strong, averaging between 6-8% annually, making it attractive for both end-users and investors.</p>

      <h2>Amenities and Lifestyle</h2>
      <p>Residents of Dubai Marina enjoy access to:</p>
      <ul>
        <li>World-class dining and entertainment options</li>
        <li>Marina Walk with stunning waterfront promenades</li>
        <li>Dubai Marina Mall for shopping enthusiasts</li>
        <li>Beach clubs and water sports facilities</li>
        <li>Proximity to business districts and key areas</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Whether you're looking for a primary residence or an investment opportunity, Dubai Marina's luxury properties offer unparalleled value. With its strategic location, world-class infrastructure, and vibrant community, it remains one of Dubai's most coveted addresses.</p>
    `,
  },
  "2": {
    id: 2,
    title: "Investment Guide: Off-Plan Properties in Dubai",
    excerpt:
      "Everything you need to know about investing in off-plan properties. Learn about payment plans, ROI expectations, and top developers.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop",
    author: "Sarah Johnson",
    date: "Nov 18, 2024",
    category: "Investment",
    readTime: "7 min read",
    content: `
      <p>Investing in off-plan properties has become increasingly popular among investors in Dubai. This comprehensive guide will walk you through everything you need to know to make informed investment decisions.</p>

      <h2>What Are Off-Plan Properties?</h2>
      <p>Off-plan properties are real estate units sold before construction is completed. Buyers invest during the development phase and take ownership upon completion.</p>

      <h2>Advantages of Off-Plan Investment</h2>
      <ul>
        <li>Lower initial investment with flexible payment plans</li>
        <li>Potential for capital appreciation during construction</li>
        <li>Access to prime locations and modern designs</li>
        <li>Developer warranties and guarantees</li>
      </ul>

      <h2>Payment Plans</h2>
      <p>Most developers in Dubai offer attractive payment plans, typically structured as:</p>
      <ul>
        <li>10-20% down payment</li>
        <li>60-70% during construction in installments</li>
        <li>20-30% on completion</li>
      </ul>

      <h2>Top Developers to Consider</h2>
      <p>When investing in off-plan properties, choosing reputable developers is crucial. Leading names include Emaar, DAMAC, Sobha Realty, and Select Group, known for their track record of timely deliveries and quality construction.</p>

      <h2>ROI Expectations</h2>
      <p>Off-plan properties in Dubai typically offer strong returns, with potential capital appreciation of 15-25% by the time of handover, depending on location and market conditions.</p>

      <h2>Key Considerations</h2>
      <p>Before investing, ensure you:</p>
      <ul>
        <li>Verify developer credentials and track record</li>
        <li>Review payment plans carefully</li>
        <li>Understand completion timelines</li>
        <li>Consider location and connectivity</li>
        <li>Consult with real estate experts</li>
      </ul>
    `,
  },
  "3": {
    id: 3,
    title: "Dubai Real Estate Market Trends 2024",
    excerpt:
      "Comprehensive analysis of current market trends, price movements, and future predictions for Dubai's real estate sector.",
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&h=800&fit=crop",
    author: "Mohammed Hassan",
    date: "Nov 15, 2024",
    category: "Market Analysis",
    readTime: "6 min read",
    content: `
      <p>Dubai's real estate market continues to demonstrate remarkable resilience and growth in 2024. This analysis provides insights into current trends shaping the market landscape.</p>

      <h2>Market Performance</h2>
      <p>The Dubai real estate market has shown strong performance in 2024, with transaction volumes increasing by 20% year-over-year. Property prices have seen steady appreciation, particularly in prime locations.</p>

      <h2>High-Demand Areas</h2>
      <p>Key areas experiencing significant demand include:</p>
      <ul>
        <li>Dubai Marina - waterfront luxury living</li>
        <li>Downtown Dubai - prestigious addresses</li>
        <li>Palm Jumeirah - exclusive island lifestyle</li>
        <li>Business Bay - modern urban living</li>
        <li>Dubai Hills Estate - family-friendly communities</li>
      </ul>

      <h2>Price Trends</h2>
      <p>Average property prices have increased by 12-15% in prime areas, while emerging neighborhoods show even higher growth potential. Villa prices have seen particularly strong appreciation due to high demand for spacious living.</p>

      <h2>Foreign Investment</h2>
      <p>Dubai continues to attract international investors, with favorable policies including long-term visas for property investors and 100% foreign ownership in designated areas.</p>

      <h2>Future Outlook</h2>
      <p>The market outlook for 2024-2025 remains positive, driven by:</p>
      <ul>
        <li>Expo 2020 legacy projects</li>
        <li>Strong economic fundamentals</li>
        <li>Infrastructure development</li>
        <li>Government initiatives supporting real estate</li>
      </ul>

      <h2>Investment Recommendations</h2>
      <p>For investors looking to enter the Dubai market, focus on established areas with proven track records, consider off-plan opportunities from reputable developers, and diversify across property types for optimal portfolio balance.</p>
    `,
  },
};

export default function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const blog = blogPosts[resolvedParams.id as keyof typeof blogPosts];

  if (!blog) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blog Not Found</h1>
          <Link href="/">
            <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: blog.title },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative pt-16 pb-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <Link href="/#blog">
              <button className="flex items-center gap-2 text-gray-400 hover:text-green-600 transition-colors mb-8 group">
                <ArrowLeft
                  size={20}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                <span>Back to Blog</span>
              </button>
            </Link>

            {/* Category */}
            <div className="mb-4">
              <span className="px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-full">
                {blog.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{blog.readTime}</span>
              </div>
            </div>

            {/* Share Button */}
            <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-semibold transition-all border border-gray-800">
              <Share2 size={18} />
              <span>Share Article</span>
            </button>
          </div>
        </section>

        {/* Featured Image */}
        <section className="relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article
              className="prose prose-invert prose-lg max-w-none
                prose-headings:text-white prose-headings:font-bold
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                prose-ul:text-gray-300 prose-ul:my-6
                prose-li:mb-2
                prose-strong:text-white"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Author Box */}
            <div className="mt-16 p-8 bg-gray-900/50 border border-gray-800 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <User size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {blog.author}
                  </h3>
                  <p className="text-gray-400">
                    Real Estate Expert at Raasta Realty with extensive
                    experience in Dubai&apos;s property market. Passionate about
                    helping clients find their perfect investment opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center p-8 bg-gradient-to-r from-green-600/10 via-red-600/10 to-green-600/10 border border-green-600/20 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Interested in Dubai Real Estate?
              </h3>
              <p className="text-gray-400 mb-6">
                Get in touch with our expert team for personalized property
                recommendations
              </p>
              <Link href="/#contact">
                <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  Contact Us Today
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
