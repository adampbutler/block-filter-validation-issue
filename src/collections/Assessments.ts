import type { CollectionConfig } from 'payload'

export const Assessments: CollectionConfig = {
  slug: 'assessments',
  versions: {
    drafts: {
      autosave: true,
    },
  },
  admin: {
    useAsTitle: 'name',
    components: {
      edit: {
        beforeDocumentControls: ['@/components/Validator#Validator'],
      },
    },
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      type: 'text',
      required: true,
    },
    {
      name: 'requiredScore',
      type: 'number',
      required: true,
    },
  ],
}
