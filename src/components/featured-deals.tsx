"use client";

import React from "react";
import Image from "next/image";
import { Heart, Bed, Bath, Maximize, MapPin, Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function FeaturedDeals() {
  const featuredProperties = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=250&fit=crop",
      price: "$509,990",
      originalPrice: null,
      discount: null,
      beds: 4,
      baths: 3,
      sqft: "2,127",
      address: "218 NW 12th Ln",
      location: "Dubai Marina, Dubai",
      type: "Single-Family Home",
      badge: "Cash at closing",
      badgeColor: "from-green-500 to-emerald-600",
      heartFilled: false
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=250&fit=crop",
      price: "$1,773,804",
      originalPrice: null,
      discount: null,
      beds: 5,
      baths: 6,
      sqft: "4,986",
      address: "12629 Solana Bay Cir",
      location: "Palm Beach Gardens, Dubai",
      type: "Single-Family Home",
      badge: "Free upgrades",
      badgeColor: "from-blue-500 to-cyan-600",
      heartFilled: false
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop",
      price: "$379,997",
      originalPrice: "$414,460",
      discount: "$34k",
      beds: 5,
      baths: 3,
      sqft: "2,640",
      address: "5947 Tomahawk Lake Dr",
      location: "Jacksonville, Dubai",
      type: "Single-Family Home",
      badge: "Reduced rates",
      badgeColor: "from-orange-500 to-red-600",
      heartFilled: true
    },
    {
      id: "4",
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=250&fit=crop",
      price: "$343,829",
      originalPrice: "$353,939",
      discount: "$10k",
      beds: 4,
      baths: 2.5,
      sqft: "2,350",
      address: "6192 Daphne St",
      location: "Lake Hamilton, Dubai",
      type: "Single-Family Home",
      badge: "Reduced rates",
      badgeColor: "from-orange-500 to-red-600",
      heartFilled: false
    },
    {
      id: "5",
      image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=400&h=250&fit=crop",
      price: "$790,690",
      originalPrice: null,
      discount: null,
      beds: 3,
      baths: 3,
      sqft: "2,890",
      address: "6581 Canopy Row",
      location: "Jacksonville, Dubai",
      type: "Single-Family Home",
      badge: "Reduced rates",
      badgeColor: "from-orange-500 to-red-600",
      heartFilled: false
    }
  ];

  return (
    <section className="py-[60px] px-[12px] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-[60px] right-[60px] w-[240px] h-[240px] bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[60px] left-[60px] w-[288px] h-[288px] bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-[48px]">
          <div className="flex items-center justify-between mb-[12px]">
            <div>
              <h2 className="text-[2.25rem] md:text-[3rem] font-black bg-gradient-to-r from-purple-300 via-pink-400 to-orange-400 bg-clip-text text-transparent mb-[6px]">
                Featured Deals
              </h2>
              <p className="text-[1rem] text-white/70 font-medium">
                Shop Days of Deals Builder Promotions
              </p>
            </div>
            
            {/* Navigation Arrows */}
            <div className="hidden md:flex gap-[9px]">
              <button className="w-[36px] h-[36px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 rounded-full flex items-center justify-center text-purple-300 hover:text-white transition-all duration-300 border border-purple-400/30">
                <ChevronLeft size={15} />
              </button>
              <button className="w-[36px] h-[36px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 rounded-full flex items-center justify-center text-purple-300 hover:text-white transition-all duration-300 border border-purple-400/30">
                <ChevronRight size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Properties Carousel */}
        <div className="relative">
          <div className="flex gap-[18px] overflow-x-auto scrollbar-hide pb-[12px]">
            {featuredProperties.map((property) => (
              <div key={property.id} className="flex-shrink-0 w-[280px] group relative cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-[12px] blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 rounded-[12px] border border-white/20 hover:border-white/30 transition-all duration-300 group-hover:scale-105 overflow-hidden shadow-xl">
                  
                  {/* Property Image */}
                  <div className="relative h-[180px] overflow-hidden rounded-t-[12px]">
                    <Image 
                      src={property.image} 
                      alt={property.address}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    {/* Badge */}
                    <div className={`absolute top-[9px] left-[9px] px-[9px] py-[3px] bg-gradient-to-r ${property.badgeColor} rounded-[6px] text-white text-[0.75rem] font-bold shadow-lg`}>
                      {property.badge}
                    </div>
                    
                    {/* Heart Icon */}
                    <button className={`absolute top-[9px] right-[9px] w-[30px] h-[30px] bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/30 ${property.heartFilled ? 'text-red-400' : 'text-white/70 hover:text-red-400'}`}>
                      <Heart size={15} fill={property.heartFilled ? "currentColor" : "none"} />
                    </button>
                  </div>

                  {/* Property Details */}
                  <div className="p-[15px]">
                    {/* Type Badge */}
                    <div className="flex items-center gap-[6px] mb-[9px]">
                      <div className="w-[6px] h-[6px] bg-green-400 rounded-full"></div>
                      <span className="text-[0.75rem] text-green-400 font-medium">{property.type}</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-[6px] mb-[9px]">
                      <span className="text-[1.5rem] font-black text-white">{property.price}</span>
                      {property.originalPrice && (
                        <>
                          <span className="text-[1rem] text-white/50 line-through">{property.originalPrice}</span>
                          <span className="text-[0.875rem] text-green-400 font-bold">↓ {property.discount}</span>
                        </>
                      )}
                    </div>

                    {/* Property Info */}
                    <div className="flex items-center gap-[12px] mb-[9px] text-white/80">
                      <div className="flex items-center gap-[3px]">
                        <Bed size={12} />
                        <span className="text-[0.875rem] font-medium">{property.beds} bed</span>
                      </div>
                      <div className="flex items-center gap-[3px]">
                        <Bath size={12} />
                        <span className="text-[0.875rem] font-medium">{property.baths} bath</span>
                      </div>
                      <div className="flex items-center gap-[3px]">
                        <Maximize size={12} />
                        <span className="text-[0.875rem] font-medium">{property.sqft} sqft</span>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-[6px]">
                      <MapPin size={12} className="text-purple-400 mt-[3px] flex-shrink-0" />
                      <div>
                        <p className="text-[0.875rem] font-medium text-white leading-tight">{property.address}</p>
                        <p className="text-[0.75rem] text-white/60">{property.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-[36px]">
          <button className="px-[30px] py-[12px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-400 hover:via-pink-400 hover:to-orange-400 rounded-[12px] text-white font-bold text-[1.125rem] transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-purple-500/25">
            View All Featured Deals
            <Star className="inline-block ml-[9px]" size={15} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
