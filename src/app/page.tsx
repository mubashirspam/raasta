import Home from "./home/Home";
import {
  getTestimonials,
  getFeaturedProperties,
  getDevelopers,
  getGalleryVideos,
} from "@/sanity/lib";

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
