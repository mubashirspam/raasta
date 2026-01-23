import Home from "./home/Home";
import {
  getTestimonials,
  getFeaturedProperties,
  getDevelopers,
  getGalleryVideos,
} from "@/sanity/lib";

// Disable automatic time-based revalidation
// We use on-demand revalidation via Sanity webhooks instead
// This means: NO API calls until you publish in Sanity!
export const revalidate = false;

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
