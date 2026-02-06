import { MetadataRoute } from "next";
import { getProperties } from "@/sanity/lib";

const SITE_URL = "https://www.raastarealty.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/properties`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/career`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/rera`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamic property pages
  let propertyPages: MetadataRoute.Sitemap = [];
  try {
    const properties = await getProperties();
    propertyPages = properties.map(
      (property: { slug: { current: string }; _updatedAt?: string }) => ({
        url: `${SITE_URL}/properties/${property.slug.current}`,
        lastModified: property._updatedAt
          ? new Date(property._updatedAt)
          : new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      })
    );
  } catch (error) {
    console.error("Error fetching properties for sitemap:", error);
  }

  return [...staticPages, ...propertyPages];
}
