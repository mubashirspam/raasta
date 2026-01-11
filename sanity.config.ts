"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@/sanity/schemas";
import { projectId, dataset } from "@/sanity/config";

export default defineConfig({
  name: "raasta-studio",
  title: "Raasta Realty CMS",
  basePath: "/studio",

  projectId,
  dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
