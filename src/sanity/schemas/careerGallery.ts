import { defineField, defineType } from "sanity";

export const careerGallery = defineType({
  name: "careerGallery",
  title: "Career Gallery",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Media Title",
      type: "string",
      description: "e.g., Team Outing, Training Session, Office Photos",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mediaType",
      title: "Media Type",
      type: "string",
      options: {
        list: [
          { title: "Image", value: "image" },
          { title: "Video", value: "video" },
        ],
      },
      initialValue: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      hidden: ({ document }) => document?.mediaType === "video",
      validation: (Rule) =>
        Rule.custom((image, context) => {
          const mediaType = (context.document as any)?.mediaType;
          if (mediaType === "image" && !image) {
            return "Image is required when media type is Image";
          }
          return true;
        }),
    }),
    defineField({
      name: "video",
      title: "Video",
      type: "file",
      options: {
        accept: "video/*",
      },
      hidden: ({ document }) => document?.mediaType === "image",
      validation: (Rule) =>
        Rule.custom((video, context) => {
          const mediaType = (context.document as any)?.mediaType;
          if (mediaType === "video" && !video) {
            return "Video is required when media type is Video";
          }
          return true;
        }),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Office Photos", value: "office" },
          { title: "Team Events", value: "team_events" },
          { title: "Training Sessions", value: "training" },
          { title: "Festive Celebrations", value: "celebrations" },
        ],
      },
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
      initialValue: 0,
    }),
    defineField({
      name: "active",
      title: "Active",
      type: "boolean",
      description: "Only active images will be displayed",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      mediaType: "mediaType",
      image: "image",
      active: "active",
    },
    prepare({ title, category, mediaType, image, active }) {
      const categoryLabels: Record<string, string> = {
        office: "Office Photos",
        team_events: "Team Events",
        training: "Training Sessions",
        celebrations: "Festive Celebrations",
      };
      const mediaTypeLabel = mediaType === "video" ? "📹 Video" : "🖼️ Image";
      return {
        title: `${title} ${!active ? "(Inactive)" : ""}`,
        subtitle: `${mediaTypeLabel} • ${categoryLabels[category] || category}`,
        media: image,
      };
    },
  },
});
