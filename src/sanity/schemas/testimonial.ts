import { defineField, defineType } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'author', title: 'Author', type: 'string', validation: r => r.required() }),
    defineField({ name: 'quote', title: 'Quote', type: 'text', validation: r => r.required() }),
    defineField({ name: 'logo', title: 'Logo', type: 'image' }),
    defineField({ name: 'logoWidth', title: 'Logo Width (px)', type: 'number' }),
    defineField({ name: 'logoHeight', title: 'Logo Height (px)', type: 'number' }),
    defineField({
      name: 'desktopLeft',
      title: 'Desktop Left Position',
      type: 'string',
      description: 'CSS value, e.g. 46.94vw or 200px',
    }),
    defineField({ name: 'desktopTop', title: 'Desktop Top Position (px)', type: 'number' }),
    defineField({ name: 'desktopRotate', title: 'Desktop Rotation (deg)', type: 'number' }),
    defineField({ name: 'desktopBehind', title: 'Render Behind Heading', type: 'boolean' }),
    defineField({ name: 'mobileOrder', title: 'Mobile Order', type: 'number' }),
    defineField({ name: 'mobileRotate', title: 'Mobile Rotation (deg)', type: 'number' }),
  ],
})
