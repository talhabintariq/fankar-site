import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "tagline", type: "string" }),
    defineField({ name: "logo", type: "image" }),
    defineField({
      name: "social",
      title: "Social Links",
      type: "object",
      fields: [
        { name: "github", type: "url" },
        { name: "linkedin", type: "url" },
        { name: "x", title: "X (Twitter)", type: "url" },
      ],
    }),
  ],
});
