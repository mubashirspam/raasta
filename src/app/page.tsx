import Home from "./home/Home";
import {
  getTestimonials,
  getFeaturedProperties,
  getDevelopers,
  getGalleryVideos,
} from "@/sanity/lib";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raasta Realty | Top Dubai Real Estate Consultancy",
  description:
    "Find your dream property in Dubai with Raasta Realty. Explore premium apartments, villas & off-plan investments across Business Bay, Downtown, Marina & more. RERA-certified experts with 6% charity commitment.",
  alternates: {
    canonical: "https://www.raastarealty.com",
  },
  openGraph: {
    title: "Raasta Realty | Top Dubai Real Estate Consultancy",
    description:
      "Find your dream property in Dubai with Raasta Realty. Premium apartments, villas & off-plan investments with RERA-certified experts.",
    url: "https://www.raastarealty.com",
  },
};

// Use a short revalidation time as fallback (5 minutes)
// Primary updates come from Sanity webhooks for instant changes
// This ensures data stays fresh even without webhooks
export const revalidate = 300;

export default async function Page() {
  const [testimonials, properties, developers, galleryVideos] =
    await Promise.all([
      getTestimonials(),
      getFeaturedProperties(),
      getDevelopers(),
      getGalleryVideos(),
    ]);

  return (
    <Home
      sanityTestimonials={testimonials}
      sanityProperties={properties}
      sanityDevelopers={developers}
      sanityGalleryVideos={galleryVideos}
    />
  );
}
