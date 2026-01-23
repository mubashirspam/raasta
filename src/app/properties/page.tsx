import { getProperties } from "@/sanity/lib";
import PropertiesClient from "./PropertiesClient";

// Use a short revalidation time as fallback (5 minutes)
// Primary updates come from Sanity webhooks for instant changes
export const revalidate = 300;

export default async function PropertiesPage() {
  const properties = await getProperties();

  return <PropertiesClient sanityProperties={properties} />;
}
