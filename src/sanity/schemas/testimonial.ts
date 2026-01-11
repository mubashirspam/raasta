import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role / Title",
      type: "string",
      description: "e.g., International Investor, Business Executive",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "purchase",
      title: "Property Purchased",
      type: "string",
      description: "e.g., Villa in Palm Jumeirah",
    }),
    defineField({
      name: "image",
      title: "Client Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "content",
      title: "Testimonial Content",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required().min(50).max(500),
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) => Rule.required().min(1).max(5),
      initialValue: 5,
    }),
    defineField({
      name: "featured",
      title: "Featured Testimonial",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "image",
    },
  },
});
