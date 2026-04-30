import { defineField, defineType } from 'sanity'

export const portfolio = defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: r => r.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: r => r.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Brand Identity', value: 'Brand Identity' },
          { title: 'Web Design', value: 'Web Design' },
          { title: 'Photography', value: 'Photography' },
          { title: 'Social Media', value: 'Social Media' },
          { title: 'Editorial', value: 'Editorial' },
          { title: 'Typography', value: 'Typography' },
          { title: 'Marketing', value: 'Marketing' },
        ],
      },
    }),
    defineField({ name: 'image', title: 'Cover Image', type: 'image', options: { hotspot: true }, validation: r => r.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'client', title: 'Client', type: 'string' }),
    defineField({ name: 'year', title: 'Year', type: 'number' }),
    defineField({ name: 'link', title: 'Live Project URL', type: 'url' }),
    defineField({ name: 'order', title: 'Order', type: 'number', description: 'Lower numbers appear first' }),
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'title', subtitle: 'client', media: 'image' },
  },
})
