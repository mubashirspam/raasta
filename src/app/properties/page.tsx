"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bed,
  Bath,
  Maximize,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [bedrooms, setBedrooms] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  // Get location from URL params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const location = params.get("location");
    if (location) {
      setSelectedLocation(location);
    }
  }, []);

  const properties = [
    {
      id: 1,
      title: "Luxury Penthouse with Burj Khalifa View",
      location: "Downtown Dubai",
      price: "AED 15.5M",
      bedrooms: 4,
      bathrooms: 5,
      area: "5,500 sq ft",
      type: "Penthouse",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
      featured: true,
      status: "For Sale",
    },
    {
      id: 2,
      title: "Modern Waterfront Apartment",
      location: "Dubai Marina",
      price: "AED 3.2M",
      bedrooms: 2,
      bathrooms: 3,
      area: "1,850 sq ft",
      type: "Apartment",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      featured: false,
      status: "For Sale",
    },
    {
      id: 3,
      title: "Exclusive Beach Villa",
      location: "Palm Jumeirah",
      price: "AED 25M",
      bedrooms: 6,
      bathrooms: 7,
      area: "8,000 sq ft",
      type: "Villa",
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop",
      featured: true,
      status: "For Sale",
    },
    {
      id: 4,
      title: "Premium Office Space",
      location: "Business Bay",
      price: "AED 8.5M",
      bedrooms: 0,
      bathrooms: 2,
      area: "3,200 sq ft",
      type: "Commercial",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      featured: false,
      status: "For Sale",
    },
    {
      id: 5,
      title: "Contemporary Family Home",
      location: "Dubai Hills Estate",
      price: "AED 6.8M",
      bedrooms: 5,
      bathrooms: 6,
      area: "4,500 sq ft",
      type: "Villa",
      image:
        "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&h=600&fit=crop",
      featured: false,
      status: "For Sale",
    },
    {
      id: 6,
      title: "Spacious Villa with Garden",
      location: "Arabian Ranches",
      price: "AED 5.5M",
      bedrooms: 4,
      bathrooms: 5,
      area: "4,000 sq ft",
      type: "Villa",
      image:
        "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=800&h=600&fit=crop",
      featured: false,
      status: "For Sale",
    },
  ];

  const locations = [
    "All",
    "Downtown Dubai",
    "Dubai Marina",
    "Palm Jumeirah",
    "Business Bay",
    "Dubai Hills Estate",
    "Arabian Ranches",
  ];
  const types = ["All", "Apartment", "Villa", "Penthouse", "Commercial"];
  const bedroomOptions = ["All", "Studio", "1", "2", "3", "4", "5+"];

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation =
      selectedLocation === "All" || property.location === selectedLocation;
    const matchesType =
      selectedType === "All" || property.type === selectedType;
    const matchesBedrooms =
      bedrooms === "All" ||
      (bedrooms === "5+" && property.bedrooms >= 5) ||
      property.bedrooms === parseInt(bedrooms);

    return matchesSearch && matchesLocation && matchesType && matchesBedrooms;
  });

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Properties" },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <main className="min-h-screen bg-black">
        {/* Header Section */}
        <section className="pt-16 pb-12 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              Find Your Perfect Property
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              Browse through our exclusive collection of premium properties in
              Dubai
            </p>

            {/* Search Bar */}
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search by property name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-900 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-600 transition-colors"
              />
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-6 bg-gray-900/50 border-b border-gray-800 sticky top-0 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors mb-4"
            >
              <SlidersHorizontal size={20} />
              <span>Filters</span>
            </button>

            {/* Filters */}
            <div
              className={`${
                showFilters ? "flex" : "hidden"
              } md:flex flex-col md:flex-row gap-4`}
            >
              {/* Location Filter */}
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-600 transition-colors"
              >
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location === "All" ? "All Locations" : location}
                  </option>
                ))}
              </select>

              {/* Type Filter */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-600 transition-colors"
              >
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type === "All" ? "All Types" : type}
                  </option>
                ))}
              </select>

              {/* Bedrooms Filter */}
              <select
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-600 transition-colors"
              >
                {bedroomOptions.map((option) => (
                  <option key={option} value={option}>
                    {option === "All" ? "All Bedrooms" : `${option} Bed`}
                  </option>
                ))}
              </select>

              {/* Clear Filters */}
              {(selectedLocation !== "All" ||
                selectedType !== "All" ||
                bedrooms !== "All") && (
                <button
                  onClick={() => {
                    setSelectedLocation("All");
                    setSelectedType("All");
                    setBedrooms("All");
                  }}
                  className="px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex items-center gap-2"
                >
                  <X size={16} />
                  <span>Clear</span>
                </button>
              )}
            </div>

            {/* Results Count */}
            <div className="mt-4 text-gray-400 text-sm">
              Showing {filteredProperties.length} of {properties.length}{" "}
              properties
            </div>
          </div>
        </section>

        {/* Properties Grid */}
        <section className="py-12 bg-gradient-to-br from-red-900/30 to-green-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProperties.map((property) => (
                  <Link key={property.id} href={`/properties/${property.id}`}>
                    <article className="group relative bg-[#111] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-800 hover:border-gray-700">
                      {/* Hover Image */}
                      <div className="relative h-64 w-full">
                        <Image
                          src={property.image}
                          alt={property.title}
                          fill
                          className="object-cover opacity-0 group-hover:opacity-30 transition-all duration-300"
                        />
                      </div>

                      {/* Floating Hover Info */}
                      <div className="absolute top-0 left-0 w-full p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                        <div className="flex justify-end">
                          <div className="flex items-center gap-2 bg-black/90 px-3 py-1 rounded-lg text-sm font-medium text-gray-200 shadow border border-gray-800">
                            <span>Type:</span>
                            <span className="font-bold text-white">
                              {property.type}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Visible Card Content */}
                      <div className="relative bg-[#111] p-6 z-10 transition-all duration-300 group-hover:bg-transparent group-hover:text-white">
                        <span className="text-xs uppercase font-semibold tracking-wider text-gray-500 group-hover:text-gray-300">
                          {property.location}
                        </span>

                        <h3 className="text-xl font-bold mt-2 mb-1 text-white">
                          {property.title}
                        </h3>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300">
                          {property.status}
                        </p>

                        <div className="mt-4">
                          <p className="text-sm text-gray-400 group-hover:text-gray-300">
                            Price
                          </p>
                          <p className="text-2xl font-black text-white">
                            {property.price}
                          </p>
                        </div>

                        <div className="mt-4 flex justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <Maximize size={16} className="text-blue-500" />
                            <span className="text-gray-400 group-hover:text-white">
                              {property.area}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Bed size={16} className="text-green-600" />
                            <span className="text-gray-400 group-hover:text-white">
                              {property.bedrooms} Beds
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Bath size={16} className="text-blue-400" />
                            <span className="text-gray-400 group-hover:text-white">
                              {property.bathrooms} Baths
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Hover full image overlay effect */}
                      <div
                        className="absolute top-0 left-0 w-full h-64 bg-cover bg-center transition-all duration-300 group-hover:h-full opacity-100 group-hover:opacity-30"
                        style={{ backgroundImage: `url(${property.image})` }}
                      ></div>
                    </article>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <h3 className="text-2xl font-bold text-white mb-4">
                  No Properties Found
                </h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your filters to see more results
                </p>
                <button
                  onClick={() => {
                    setSelectedLocation("All");
                    setSelectedType("All");
                    setBedrooms("All");
                    setSearchQuery("");
                  }}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
