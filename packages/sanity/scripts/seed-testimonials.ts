import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "8dj8qon7",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const dummyTestimonials = [
  {
    _type: "testimonial",
    name: "Alexander Sterling",
    role: "International Investor",
    purchase: "Villa in Palm Jumeirah",
    content:
      "RaastaRealty didn't just find me a house; they secured a legacy. The off-market access to the Palm Jumeirah villa was exceptional. Their concierge team handled the entire Golden Visa process seamlessly.",
    rating: 5,
    featured: true,
    order: 1,
    publishedAt: new Date().toISOString(),
  },
  {
    _type: "testimonial",
    name: "Sarah Al-Fayed",
    role: "Business Executive",
    purchase: "Penthouse at The Royal Atlantis",
    content:
      "The level of professionalism is unmatched in Dubai. I was looking for a specific view and layout, and they found the only available unit that matched my criteria perfectly. Truly a white-glove service.",
    rating: 5,
    featured: true,
    order: 2,
    publishedAt: new Date().toISOString(),
  },
  {
    _type: "testimonial",
    name: "James & Elena Chen",
    role: "Family Relocation",
    purchase: "Townhouse in Arabian Ranches",
    content:
      "Moving a family of four to Dubai was daunting, but the team made it effortless. They advised us on the best schools nearby and found a community that feels like home. We couldn't be happier.",
    rating: 5,
    featured: true,
    order: 3,
    publishedAt: new Date().toISOString(),
  },
  {
    _type: "testimonial",
    name: "Michael Rodriguez",
    role: "Tech Entrepreneur",
    purchase: "Apartment in Dubai Marina",
    content:
      "As a first-time investor in Dubai real estate, I needed guidance every step of the way. Raasta's team was patient, knowledgeable, and helped me secure an amazing off-plan deal with incredible ROI potential.",
    rating: 5,
    featured: true,
    order: 4,
    publishedAt: new Date().toISOString(),
  },
  {
    _type: "testimonial",
    name: "Fatima Hassan",
    role: "Healthcare Professional",
    purchase: "Villa in Emirates Hills",
    content:
      "The attention to detail was remarkable. They understood exactly what I was looking for and showed me properties that matched my lifestyle perfectly. The entire process from viewing to handover was seamless.",
    rating: 5,
    featured: true,
    order: 5,
    publishedAt: new Date().toISOString(),
  },
  {
    _type: "testimonial",
    name: "David & Priya Sharma",
    role: "Expat Couple",
    purchase: "Penthouse in Downtown Dubai",
    content:
      "We were impressed by how well they knew the market. They negotiated a price well below asking and guided us through every legal requirement. Now we have our dream home with Burj Khalifa views!",
    rating: 5,
    featured: true,
    order: 6,
    publishedAt: new Date().toISOString(),
  },
];

async function seedTestimonials() {
  console.log("🌱 Starting to seed testimonials...\n");

  for (const testimonial of dummyTestimonials) {
    try {
      const result = await client.create(testimonial);
      console.log(`✅ Created: ${testimonial.name} (${result._id})`);
    } catch (error) {
      console.error(`❌ Error creating ${testimonial.name}:`, error);
    }
  }

  console.log("\n🎉 Seeding complete!");
  console.log(
    "📸 Remember to add client photos to each testimonial in Sanity Studio."
  );
}

seedTestimonials();
