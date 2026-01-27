import { Metadata } from "next";
import CareerPageContent from "./CareerPageContent";
import { getJobPositions, getCareerGallery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Careers at Raasta Realty | Join Our Team",
  description:
    "Join Dubai's most purpose-driven real estate company. Explore career opportunities at Raasta Realty and be part of a team that makes a difference.",
  keywords: [
    "raasta realty careers",
    "dubai real estate jobs",
    "real estate agent jobs dubai",
    "property jobs dubai",
    "raasta jobs",
  ],
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
