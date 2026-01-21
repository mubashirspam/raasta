import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from "../config";

// Client for reading (with CDN)
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

// Client for writing (server-side only, with token)
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN || process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
