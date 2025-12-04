import React, { useState } from "react";
import { Calendar, ArrowRight, User, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const blogs = [
    {
      id: 1,
      title: "Top 10 Luxury Properties in Dubai Marina 2024",
      excerpt:
        "Discover the most sought-after luxury properties in Dubai Marina. From waterfront penthouses to modern apartments.",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      author: "Ahmed Al Mansouri",
      date: "Nov 20, 2024",
      category: "Luxury Living",
      readTime: "5 min",
    },
    {
      id: 2,
      title: "Investment Guide: Off-Plan Properties in Dubai",
      excerpt:
        "Everything you need to know about investing in off-plan. Learn about payment plans, ROI expectations, and top developers.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      author: "Sarah Johnson",
      date: "Nov 18, 2024",
      category: "Investment",
      readTime: "7 min",
    },
    {
      id: 3,
      title: "Dubai Real Estate Market Trends 2024",
      excerpt:
        "Comprehensive analysis of current market trends, price movements, and future predictions for the real estate sector.",
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop",
      author: "Mohammed Hassan",
      date: "Nov 15, 2024",
      category: "Analysis",
      readTime: "6 min",
    },
  ];

  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl dark:bg-emerald-500/5"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl dark:bg-blue-500/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-emerald-500"></span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider text-sm uppercase">
                Latest Insights
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight leading-tight">
              News & Market{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                Analysis
              </span>
            </h2>
          </div>

          <Link
            href="/blog"
            className="hidden md:flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors group"
          >
            View all articles
            <span className="bg-zinc-200 dark:bg-zinc-800 p-2 rounded-full group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/30 transition-colors">
              <ArrowRight
                size={16}
                className="group-hover:-rotate-45 transition-transform duration-300"
              />
            </span>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group relative flex flex-col h-full bg-white dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-2xl hover:shadow-emerald-900/5 dark:hover:shadow-emerald-900/10 transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(blog.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-zinc-900/10 dark:bg-zinc-900/20 group-hover:opacity-0 transition-opacity z-10"></div>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  width={600}
                  height={400}
                />

                {/* Floating Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-4 py-1.5 bg-white/90 dark:bg-black/80 backdrop-blur-md text-zinc-900 dark:text-white text-xs font-bold rounded-full border border-zinc-200/50 dark:border-zinc-700/50 shadow-sm">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6">
                {/* Meta Data */}
                <div className="flex items-center gap-4 text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-emerald-500" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-emerald-500" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  <Link
                    href={`/blog/${blog.id}`}
                    className="focus:outline-none"
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    {blog.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {blog.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden">
          <button className="w-full px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-bold hover:opacity-90 transition-opacity">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
