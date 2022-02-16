export default {
  name: "event",
  title: "Arrangement",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "company",
      title: "Bedrift",
      type: "reference",
      to: { type: "company" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "startTime",
      title: "Tidspunkt",
      type: "datetime",
      options: {
        dateFormat: "DD.MM.YYYY",
        timeFormat: "HH:mm",
        timeStep: 15,
        calendarTodayLabel: "I dag",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "maxParticipants",
      title: "Maks antall deltakere",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "location",
      title: "Sted",
      type: "string",
      initialValue: "Mer info kommer",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "isFood",
      title: "Mat",
      type: "string",
      initialValue: "Mer info kommer",
    },
    {
      name: "shortDescription",
      title: "Kort beskrivelse",
      type: "string",
      initialValue: "Mer info kommer",
      validation: (Rule) => Rule.required().max(50),
    },
    {
      name: "description",
      title: "Full beskrivelse",
      type: "blockContent",
    },
    {
      name: "responsible",
      title: "Ansvarlige",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "person" }],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "company.image",
      subtitle: "startTime",
    },
    prepare(selection) {
      const { title, media, subtitle } = selection;
      const date = new Date(subtitle);
      return {
        title: title,
        media: media,
        subtitle: date.toLocaleString("nb-NO"),
      };
    },
  },
};
