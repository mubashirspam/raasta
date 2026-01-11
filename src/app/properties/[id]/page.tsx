import { getPropertyBySlug } from "@/sanity/lib";
import PropertyDetailsClient from "./PropertyDetailsClient";

export default async function PropertyDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const property = await getPropertyBySlug(resolvedParams.id);

  return <PropertyDetailsClient property={property} />;
}
