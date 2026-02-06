import { Metadata } from "next";
import CareerPageContent from "./CareerPageContent";
import { getJobPositions, getCareerGallery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Careers — Join Dubai's Purpose-Driven Real Estate Team",
  description:
    "Join Raasta Realty and build a meaningful career in Dubai real estate. Open positions for agents, managers & creatives. Mentorship, growth & purpose — not just a job.",
  keywords: [
    "raasta realty careers",
    "dubai real estate jobs",
    "real estate agent jobs dubai",
    "property jobs dubai",
    "raasta jobs",
    "real estate career Dubai",
    "join real estate company Dubai",
    "property agent vacancy Dubai",
    "real estate internship Dubai",
  ],
  alternates: {
    canonical: "https://www.raastarealty.com/career",
  },
  openGraph: {
    title: "Careers at Raasta Realty — Join Our Team in Dubai",
    description:
      "Build a meaningful career in Dubai real estate. Open positions for agents, managers & creatives at Raasta Realty.",
    url: "https://www.raastarealty.com/career",
  },
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function CareerPage() {
  const [jobPositions, careerGallery] = await Promise.all([
    getJobPositions(),
    getCareerGallery(),
  ]);

  return (
    <CareerPageContent
      jobPositions={jobPositions}
      careerGallery={careerGallery}
    />
  );
}
