import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@raasta/sanity/schemas";

export default defineConfig({
  name: "raasta-studio",
  title: "Raasta Realty CMS",

  projectId: "8dj8qon7",
  dataset: "production",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
