import { defineField, defineType } from "sanity";

export const property = defineType({
  name: "property",
  title: "Property",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "images",
      title: "Gallery Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "price",
      title: "Price (AED)",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "pricePerSqft",
      title: "Price per Sqft (AED)",
      type: "number",
    }),
    defineField({
      name: "bedrooms",
      title: "Bedrooms",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "bathrooms",
      title: "Bathrooms",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "area",
      title: "Area (sqft)",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "propertyType",
      title: "Property Type",
      type: "string",
      options: {
        list: [
          { title: "Apartment", value: "apartment" },
          { title: "Villa", value: "villa" },
          { title: "Penthouse", value: "penthouse" },
          { title: "Townhouse", value: "townhouse" },
          { title: "Duplex", value: "duplex" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "For Sale", value: "sale" },
          { title: "For Rent", value: "rent" },
          { title: "Off Plan", value: "offplan" },
          { title: "Sold", value: "sold" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "address",
      title: "Full Address",
      type: "string",
    }),
    defineField({
      name: "coordinates",
      title: "Coordinates",
      type: "geopoint",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "amenities",
      title: "Amenities",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "featured",
      title: "Featured Property",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    }),
  ],
  preview: {
    select: {
      title: "title",
      location: "location",
      media: "mainImage",
      price: "price",
    },
    prepare({ title, location, media, price }) {
      return {
        title,
        subtitle: `${location} - AED ${price?.toLocaleString()}`,
        media,
      };
    },
  },
});
