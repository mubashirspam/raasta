import { defineField, defineType } from "sanity";

export const galleryItem = defineType({
  name: "galleryItem",
  title: "Gallery Item",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title/Caption",
      type: "string",
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      hidden: ({ parent }) => parent?.mediaType !== "image",
    }),
    defineField({
      name: "video",
      title: "Video",
      type: "file",
      options: {
        accept: "video/*",
      },
      hidden: ({ parent }) => parent?.mediaType !== "video",
      description: "Upload a single video file",
    }),
    defineField({
      name: "likes",
      title: "Likes Count",
      type: "string",
      description: 'Display format like "2.4k"',
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  preview: {
    select: {
      title: "title",
      mediaType: "mediaType",
      media: "image",
    },
    prepare({ title, mediaType, media }) {
      return {
        title,
        subtitle: mediaType === "video" ? "🎬 Video" : "🖼️ Image",
        media,
      };
    },
  },
});
