export default {
  name: "company",
  title: "Bedrift",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Navn",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Bilde",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Beskrivelse",
      type: "text",
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
