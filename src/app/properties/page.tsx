import { getProperties } from "@/sanity/lib";
import PropertiesClient from "./PropertiesClient";

export default async function PropertiesPage() {
  const properties = await getProperties();

  return <PropertiesClient sanityProperties={properties} />;
}
