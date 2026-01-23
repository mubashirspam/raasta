import { getProperties } from "@/sanity/lib";
import PropertiesClient from "./PropertiesClient";

// Disable automatic time-based revalidation
// We use on-demand revalidation via Sanity webhooks instead
export const revalidate = false;

export default async function PropertiesPage() {
  const properties = await getProperties();

  return <PropertiesClient sanityProperties={properties} />;
}
