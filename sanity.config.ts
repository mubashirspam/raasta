"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@/sanity/schemas";
import { projectId, dataset } from "@/sanity/config";
import { structure } from "@/sanity/desk/structure";

export default defineConfig({
  name: "raasta-studio",
  title: "Raasta Realty CMS",
  basePath: "/studio",

  projectId,
  dataset,

  plugins: [
    structureTool({
      structure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
