import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title of Skill',
      type: 'string',
    }),
    defineField({
      name: 'xvalue',
      title: 'X-Value',
      type: 'string',
    }),
    defineField({
      name: 'yvalue',
      title: 'Y-Value',
      type: 'string',
    }),
  ],
})
