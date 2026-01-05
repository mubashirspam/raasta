import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "8dj8qon7",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const dummyProperties = [
  {
    _type: "property",
    title: "Azure Heights Penthouse",
    slug: { _type: "slug", current: "azure-heights-penthouse" },
    price: 12500000,
    pricePerSqft: 2976,
    bedrooms: 4,
    bathrooms: 5,
    area: 4200,
    propertyType: "penthouse",
    status: "sale",
    location: "Dubai Marina",
    address: "Azure Heights Tower, Dubai Marina, Dubai",
    description:
      "Experience luxury living at its finest in this stunning 4-bedroom penthouse located in the heart of Dubai Marina. Floor-to-ceiling windows offer breathtaking views of the marina and Arabian Gulf. Features include a private terrace, smart home system, and access to world-class amenities.",
    features: [
      "Floor-to-ceiling windows",
      "Private terrace",
      "Smart home system",
      "Panoramic views",
      "High ceilings",
      "Premium finishes",
    ],
    amenities: [
      "Private Pool",
      "Gym & Spa",
      "Concierge Service",
      "Valet Parking",
      "24/7 Security",
      "Private Beach Access",
    ],
    featured: true,
    publishedAt: new Date().toISOString(),
  },
  {
    _type: "property",
    title: "Palm Jumeirah Villa",
    slug: { _type: "slug", current: "palm-jumeirah-villa" },
    price: 28000000,
    pricePerSqft: 3294,
    bedrooms: 6,
    bathrooms: 7,
    area: 8500,
    propertyType: "villa",
    status: "sale",
    location: "The Palm",
    address: "Frond L, Palm Jumeirah, Dubai",
    description:
      "Magnificent beachfront villa on Palm Jumeirah's prestigious Frond L. This architectural masterpiece offers unparalleled luxury with direct beach access, private infinity pool, and stunning views of the Dubai skyline. Perfect for those seeking the ultimate in waterfront living.",
    features: [
      "Direct beach access",
      "Private infinity pool",
      "Smart home automation",
      "Home cinema",
      "Wine cellar",
      "Staff quarters",
    ],
    amenities: [
      "Private Beach",
      "Landscaped Garden",
      "BBQ Area",
      "Multiple Parking",
      "24/7 Security",
      "Boat Mooring",
    ],
    featured: true,
    publishedAt: new Date().toISOString(),
  },
  {
    _type: "property",
    title: "Downtown Boulevard Suite",
    slug: { _type: "slug", current: "downtown-boulevard-suite" },
    price: 3200000,
    pricePerSqft: 2207,
    bedrooms: 2,
    bathrooms: 2,
    area: 1450,
    propertyType: "apartment",
    status: "sale",
    location: "Downtown Dubai",
    address: "Boulevard Point, Mohammed Bin Rashid Boulevard, Dubai",
    description:
      "Elegant 2-bedroom apartment in the iconic Boulevard Point with stunning views of Burj Khalifa and Dubai Fountain. Walking distance to Dubai Mall and the city's finest dining and entertainment venues. Modern design with premium finishes throughout.",
    features: [
      "Burj Khalifa view",
      "Open plan living",
      "Built-in wardrobes",
      "Modern kitchen",
      "Balcony",
      "High-speed internet",
    ],
    amenities: [
      "Swimming Pool",
      "Gym",
      "Children's Play Area",
      "Covered Parking",
      "24/7 Security",
      "Concierge",
    ],
    featured: true,
    publishedAt: new Date().toISOString(),
  },
  {
    _type: "property",
    title: "Emirates Hills Mansion",
    slug: { _type: "slug", current: "emirates-hills-mansion" },
    price: 45000000,
    pricePerSqft: 3000,
    bedrooms: 8,
    bathrooms: 10,
    area: 15000,
    propertyType: "villa",
    status: "sale",
    location: "Emirates Hills",
    address: "Sector E, Emirates Hills, Dubai",
    description:
      "One of the most exclusive properties in Dubai, this palatial mansion sits on a prime plot overlooking the Montgomerie Golf Course. Featuring Italian marble floors, custom chandeliers, and meticulously landscaped gardens. A true trophy home for the discerning buyer.",
    features: [
      "Golf course views",
      "Italian marble floors",
      "Custom chandeliers",
      "Home theater",
      "Indoor pool",
      "Guest house",
    ],
    amenities: [
      "Private Pool",
      "Tennis Court",
      "Landscaped Gardens",
      "Staff Quarters",
      "Multi-car Garage",
      "Gated Community",
    ],
    featured: true,
    publishedAt: new Date().toISOString(),
  },
  {
    _type: "property",
    title: "JBR Beachfront Loft",
    slug: { _type: "slug", current: "jbr-beachfront-loft" },
    price: 5800000,
    pricePerSqft: 2762,
    bedrooms: 3,
    bathrooms: 3,
    area: 2100,
    propertyType: "apartment",
    status: "sale",
    location: "Jumeirah Beach Residence",
    address: "Rimal 4, JBR, Dubai",
    description:
      "Stunning beachfront loft apartment with direct access to JBR Beach. This unique duplex offers sea views from every room, contemporary interiors, and a vibrant lifestyle at your doorstep. The Walk and beach promenade are just steps away.",
    features: [
      "Duplex layout",
      "Sea views",
      "Beach access",
      "Modern design",
      "Large terrace",
      "Fitted kitchen",
    ],
    amenities: [
      "Beach Access",
      "Swimming Pool",
      "Gym",
      "Retail on Ground Floor",
      "Covered Parking",
      "24/7 Security",
    ],
    featured: true,
    publishedAt: new Date().toISOString(),
  },
  {
    _type: "property",
    title: "Creek Harbour Sky Villa",
    slug: { _type: "slug", current: "creek-harbour-sky-villa" },
    price: 9100000,
    pricePerSqft: 2395,
    bedrooms: 4,
    bathrooms: 5,
    area: 3800,
    propertyType: "penthouse",
    status: "offplan",
    location: "Dubai Creek Harbour",
    address: "Creek Rise, Dubai Creek Harbour, Dubai",
    description:
      "Experience the future of luxury living in this off-plan sky villa at Dubai Creek Harbour. Designed by world-renowned architects, this property offers views of the upcoming Dubai Creek Tower and the natural creek. Expected completion in 2026.",
    features: [
      "Sky villa concept",
      "Creek Tower views",
      "Private elevator",
      "Smart home ready",
      "Rooftop terrace",
      "Premium finishes",
    ],
    amenities: [
      "Infinity Pool",
      "Sky Lounge",
      "Private Marina",
      "Gym & Spa",
      "Retail & Dining",
      "24/7 Concierge",
    ],
    featured: true,
    publishedAt: new Date().toISOString(),
  },
];

async function seedProperties() {
  console.log("🌱 Starting to seed properties...\n");

  for (const property of dummyProperties) {
    try {
      const result = await client.create(property);
      console.log(`✅ Created: ${property.title} (${result._id})`);
    } catch (error) {
      console.error(`❌ Error creating ${property.title}:`, error);
    }
  }

  console.log("\n🎉 Seeding complete!");
  console.log("📸 Remember to add images to each property in Sanity Studio.");
}

seedProperties();
