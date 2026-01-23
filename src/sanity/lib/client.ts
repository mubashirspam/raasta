import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from "../config";

// Client for reading (without CDN for fresh data)
// Set useCdn to false to get real-time updates from Sanity
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Changed to false to prevent CDN caching
});

// Client for writing (server-side only, with token)
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN || process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
