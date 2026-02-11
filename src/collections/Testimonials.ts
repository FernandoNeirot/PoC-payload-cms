import { CollectionConfig } from 'payload'

const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  fields: [
    { name: 'clientName', type: 'text', required: true },
    { name: 'feedback', type: 'textarea' },
  ],
}

export default Testimonials
