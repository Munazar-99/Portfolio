import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutpage',
  title: 'Aboutpage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'firstParagraph',
      title: 'First Paragraph',
      type: 'text',
    }),
    defineField({
      name: 'secondParagraph',
      title: 'Second Paragraph',
      type: 'text',
    }),
    defineField({
      name: 'thirdParagraph',
      title: 'Third Paragraph',
      type: 'text',
    }),
    defineField({
      name: 'profileimge',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
