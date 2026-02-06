import { getProperties } from "@/sanity/lib";
import PropertiesClient from "./PropertiesClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dubai Properties for Sale & Investment",
  description:
    "Browse premium Dubai properties — apartments, villas, penthouses & off-plan projects in Business Bay, Downtown, Marina, Palm Jumeirah & more. Verified listings with expert guidance from Raasta Realty.",
  keywords: [
    "Dubai properties for sale",
    "buy apartment Dubai",
    "Dubai villa for sale",
    "off plan Dubai",
    "Dubai investment property",
    "Business Bay apartments",
    "Downtown Dubai properties",
    "Dubai Marina property",
    "luxury property Dubai",
    "Dubai penthouse for sale",
  ],
  alternates: {
    canonical: "https://www.raastarealty.com/properties",
  },
  openGraph: {
    title: "Dubai Properties for Sale & Investment | Raasta Realty",
    description:
      "Browse premium Dubai properties — apartments, villas, penthouses & off-plan projects. Verified listings with expert guidance.",
    url: "https://www.raastarealty.com/properties",
  },
};

// Use a short revalidation time as fallback (5 minutes)
// Primary updates come from Sanity webhooks for instant changes
export const revalidate = 300;

export default async function PropertiesPage() {
  const properties = await getProperties();

  return <PropertiesClient sanityProperties={properties} />;
}
