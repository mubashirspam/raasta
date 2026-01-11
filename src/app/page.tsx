import Home from "./home/Home";
import {
  getTestimonials,
  getFeaturedProperties,
  getDevelopers,
  getGalleryVideos,
} from "@/sanity/lib";

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
