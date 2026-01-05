import { createClient } from "next-sanity";

export const projectId = "8dj8qon7";
export const dataset = "production";
export const apiVersion = "2024-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
