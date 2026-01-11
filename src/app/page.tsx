import Home from "./home/Home";
import { getTestimonials, getFeaturedProperties } from "@/sanity/lib";

export default async function Page() {
  const [testimonials, properties] = await Promise.all([
    getTestimonials(),
    getFeaturedProperties(),
  ]);

  return (
    <Home sanityTestimonials={testimonials} sanityProperties={properties} />
  );
}
