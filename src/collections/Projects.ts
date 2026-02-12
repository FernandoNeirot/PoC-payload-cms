import { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects', // Este es el ID de la colección
  admin: {
    useAsTitle: 'title', // Qué campo se verá en la lista del admin
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'clientName',
      type: 'text',
    },
    {
      name: 'banner',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'images',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
    },
  ],
}
