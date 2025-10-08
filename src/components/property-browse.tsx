"use client";

import React from "react";
import Image from "next/image";
import { 
  Home, 
  TrendingDown, 
  DoorOpen, 
  CheckCircle, 
  Hammer, 
  MapPin, 
  AlertTriangle, 
  Building2 
} from "lucide-react";

export default function PropertyBrowse() {
  const propertyCategories = [
    {
      id: "new-listings",
      title: "New Listings",
      count: 176,
      icon: Home,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&h=200&fit=crop",
      color: "from-blue-400 to-cyan-600",
      bgColor: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-400/30"
    },
    {
      id: "price-reduced",
      title: "Price Reduced",
      count: 374,
      icon: TrendingDown,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=300&h=200&fit=crop",
      color: "from-orange-400 to-red-600",
      bgColor: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-400/30"
    },
    {
      id: "open-houses",
      title: "Open Houses",
      count: 21,
      icon: DoorOpen,
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=300&h=200&fit=crop",
      color: "from-green-400 to-emerald-600",
      bgColor: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-400/30"
    },
    {
      id: "recently-sold",
      title: "Recently Sold",
      count: 1238,
      icon: CheckCircle,
      image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=300&h=200&fit=crop",
      color: "from-purple-400 to-indigo-600",
      bgColor: "from-purple-500/20 to-indigo-500/20",
      borderColor: "border-purple-400/30"
    },
    {
      id: "new-construction",
      title: "New Construction",
      count: 64,
      icon: Hammer,
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=300&h=200&fit=crop",
      color: "from-teal-400 to-cyan-600",
      bgColor: "from-teal-500/20 to-cyan-500/20",
      borderColor: "border-teal-400/30"
    },
    {
      id: "land",
      title: "Land",
      count: 86,
      icon: MapPin,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=300&h=200&fit=crop",
      color: "from-amber-400 to-orange-600",
      bgColor: "from-amber-500/20 to-orange-500/20",
      borderColor: "border-amber-400/30"
    },
    {
      id: "foreclosures",
      title: "Foreclosures",
      count: 31,
      icon: AlertTriangle,
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=300&h=200&fit=crop",
      color: "from-red-400 to-rose-600",
      bgColor: "from-red-500/20 to-rose-500/20",
      borderColor: "border-red-400/30"
    },
    {
      id: "condos",
      title: "Condos",
      count: 1290,
      icon: Building2,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&h=200&fit=crop",
      color: "from-violet-400 to-purple-600",
      bgColor: "from-violet-500/20 to-purple-500/20",
      borderColor: "border-violet-400/30"
    }
  ];

  return (
    <section className="py-[60px] px-[12px] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-[60px] left-[60px] w-[240px] h-[240px] bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[60px] right-[60px] w-[288px] h-[288px] bg-gradient-to-br from-emerald-500/10 to-teal-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-[48px]">
          <h2 className="text-[2.25rem] md:text-[3rem] font-black bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-[12px]">
            Browse Properties in Dubai
          </h2>
          <p className="text-[1.125rem] text-white/90 max-w-3xl font-medium">
            Discover your perfect property from our extensive collection of homes, condos, and land opportunities
          </p>
        </div>

        {/* Property Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[18px]">
          {propertyCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.id} className="group relative cursor-pointer">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} rounded-[12px] blur-lg group-hover:blur-xl transition-all duration-300`}></div>
                <div className={`relative backdrop-blur-xl bg-gradient-to-br ${category.bgColor} rounded-[12px] border ${category.borderColor} p-[12px] hover:border-opacity-50 transition-all duration-300 group-hover:scale-105 overflow-hidden`}>
                  {/* Background Image */}
                  <div className="relative h-[120px] mb-[12px] rounded-[9px] overflow-hidden">
                    <Image 
                      src={category.image} 
                      alt={category.title}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Count Badge */}
                    <div className={`absolute top-[9px] right-[9px] px-[9px] py-[3px] bg-gradient-to-r ${category.color} rounded-full text-white text-[0.75rem] font-bold shadow-lg`}>
                      {category.count}
                    </div>
                  </div>

                  {/* Category Info */}
                  <div className="flex items-center gap-[9px]">
                    <div className={`w-[30px] h-[30px] bg-gradient-to-br ${category.color} rounded-[6px] flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <IconComponent size={15} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[1rem] font-bold text-white leading-tight">{category.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
