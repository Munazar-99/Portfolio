import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  options: {
    sortable: true,
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
    }),
    // defineField({
    //   name: 'technologies',
    //   title: 'Technologies',
    //   type: 'array',
    //   of: [{type: 'reference', to: {type: 'skill'}}],
    // }),
    defineField({
      name: 'linktobuild',
      title: 'Linktobuild',
      type: 'url',
    }),
    defineField({
      name: 'linktogithub',
      title: 'Linktogithub',
      type: 'url',
    }),

  ],
})
