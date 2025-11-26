"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, User } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";

export default function BlogPage() {
  const blogs = [
    {
      id: 1,
      title: "Top 10 Luxury Properties in Dubai Marina 2024",
      excerpt:
        "Discover the most sought-after luxury properties in Dubai Marina. From waterfront penthouses to modern apartments with stunning views.",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      author: "Ahmed Al Mansouri",
      date: "Nov 20, 2024",
      category: "Luxury Properties",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Investment Guide: Off-Plan Properties in Dubai",
      excerpt:
        "Everything you need to know about investing in off-plan properties. Learn about payment plans, ROI expectations, and top developers.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      author: "Sarah Johnson",
      date: "Nov 18, 2024",
      category: "Investment",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Dubai Real Estate Market Trends 2024",
      excerpt:
        "Comprehensive analysis of current market trends, price movements, and future predictions for Dubai's real estate sector.",
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop",
      author: "Mohammed Hassan",
      date: "Nov 15, 2024",
      category: "Market Analysis",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Best Family-Friendly Communities in Dubai",
      excerpt:
        "Explore the top residential communities perfect for families, featuring excellent schools, parks, and amenities.",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      author: "Elena Rodriguez",
      date: "Nov 12, 2024",
      category: "Lifestyle",
      readTime: "5 min read",
    },
    {
      id: 5,
      title: "Understanding Property Financing in Dubai",
      excerpt:
        "A comprehensive guide to mortgage options, requirements, and financing solutions for property buyers in Dubai.",
      image:
        "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=800&h=600&fit=crop",
      author: "Ahmed Al Mansouri",
      date: "Nov 10, 2024",
      category: "Finance",
      readTime: "8 min read",
    },
    {
      id: 6,
      title: "The Rise of Sustainable Real Estate in Dubai",
      excerpt:
        "How green building practices and sustainable developments are shaping Dubai's real estate future.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      author: "Sarah Johnson",
      date: "Nov 8, 2024",
      category: "Sustainability",
      readTime: "6 min read",
    },
  ];

  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Blog" }];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="pt-16 pb-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
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
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
                Insights & Updates
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Stay informed with expert insights, market trends, and the
                latest news from Dubai&apos;s real estate sector
              </p>
            </div>
          </div>
        </section>

        {/* Blog Grid Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <Link key={blog.id} href={`/blog/${blog.id}`}>
                  <div className="group bg-gray-900/50 border border-gray-800 hover:border-green-600/50 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full">
                        {blog.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <User size={14} />
                          <span>{blog.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{blog.date}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
                        {blog.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {blog.excerpt}
                      </p>

                      {/* Read More */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {blog.readTime}
                        </span>
                        <div className="flex items-center gap-2 text-green-600 font-semibold text-sm group-hover:gap-3 transition-all">
                          <span>Read More</span>
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-green-600/10 via-red-600/10 to-green-600/10 border border-green-600/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Ready to Invest in Dubai Real Estate?
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                Connect with our expert team for personalized property
                recommendations and market insights
              </p>
              <Link href="/#contact">
                <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center gap-2">
                  Get in Touch
                  <ArrowRight size={18} />
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
