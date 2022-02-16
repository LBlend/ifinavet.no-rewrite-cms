export default {
  name: "person",
  title: "Person",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Navn",
      type: "string",
      validation: (Rule) => Rule.required().max(50),
    },
    {
      name: "image",
      title: "Bilde",
      type: "image",
    },
    {
      name: "role",
      title: "Rolle",
      type: "string",
      type: "string",
      options: {
        list: [
          { title: "Leder", value: "Leder" },
          { title: "Nestleder", value: "Nestleder" },
          { title: "Bedriftskontakt", value: "Bedriftskontakt" },
          { title: "Økonomiansvarlig", value: "Økonomiansvarlig" },
          { title: "Webansvarlig", value: "Webansvarlig" },
          { title: "Studentkontakt", value: "Studentkontakt" },
          { title: "Organiseringsansvarlig", value: "Organiseringsansvarlig" },
          { title: "Promoteringsansvarlig", value: "Promoteringsansvarlig" },
          { title: "Arrangementansvarlig", value: "Arrangementansvarlig" },
          { title: "Styremedlem", value: "Styremedlem" },
          { title: "Annet", value: "Annet" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      title: "E-post",
      type: "string",
      validation: (Rule) =>
        Rule.required().regex(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@ifinavet.no/
        ),
    },
    {
      name: "phoneNumber",
      title: "Telefonnummer",
      type: "number",
      validation: (Rule) =>
        Rule.integer().positive().min(10000000).max(99999999),
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      subtitle: "role",
    },
    prepare(selection) {
      const { title, media, subtitle } = selection;
      return {
        title: title,
        media: media,
        subtitle: `Rolle: ${subtitle}`,
      };
    },
  },
};
