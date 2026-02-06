import { getPropertyBySlug } from "@/sanity/lib";
import PropertyDetailsClient from "./PropertyDetailsClient";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const property = await getPropertyBySlug(resolvedParams.id);

  if (!property) {
    return {
      title: "Property Not Found",
      description: "The requested property could not be found.",
    };
  }

  const title = `${property.title} — ${property.propertyType ? property.propertyType.charAt(0).toUpperCase() + property.propertyType.slice(1) : "Property"} in ${property.location || "Dubai"}`;
  const description = `${property.title} for sale in ${property.location || "Dubai"}. ${property.bedrooms ? property.bedrooms + " bedrooms, " : ""}${property.area ? property.area + " sq.ft. " : ""}AED ${property.price?.toLocaleString() || "Price on request"}. Contact Raasta Realty for details.`;
  const imageUrl =
    property.images?.[0]?.asset?.url ||
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&h=630&auto=format&fit=crop";

  return {
    title,
    description,
    keywords: [
      property.title,
      `${property.propertyType} Dubai`,
      `${property.location} property`,
      "buy property Dubai",
      "Dubai real estate",
      property.developer || "",
    ].filter(Boolean),
    alternates: {
      canonical: `https://www.raastarealty.com/properties/${resolvedParams.id}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.raastarealty.com/properties/${resolvedParams.id}`,
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: property.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function PropertyDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const property = await getPropertyBySlug(resolvedParams.id);

  return <PropertyDetailsClient property={property} />;
}
