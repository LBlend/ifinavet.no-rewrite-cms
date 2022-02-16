export default {
  name: "job",
  title: "Stillingsannonse",
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
      name: "deadline",
      title: "Søknadsfrist",
      type: "date",
      options: {
        dateFormat: "DD.MM.YYYY",
        calendarTodayLabel: "I dag",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Beskrivelse",
      type: "blockContent",
    },
    {
      name: "applicationLink",
      title: "Link til søknadsside",
      type: "url",
    },
    {
      name: "type",
      title: "Jobbtype",
      type: "string",
      options: {
        list: [
          { title: "Fulltid", value: "Fulltid" },
          { title: "Deltid", value: "Deltid" },
          { title: "Internship", value: "Internship" },
          { title: "Sommerjobb", value: "Sommerjobb" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "company.image",
      subtitle: "company.name",
      type: "type",
    },
    prepare(selection) {
      const { title, media, subtitle, type } = selection;
      return {
        title: title,
        media: media,
        subtitle: `${subtitle} - ${type}`,
      };
    },
  },
};
