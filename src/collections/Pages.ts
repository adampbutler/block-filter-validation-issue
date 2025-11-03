import type { CollectionConfig, Where } from 'payload'

export const getAssessmentsByType = (assessmentType: string) => {
  return (): Where => ({
    type: {
      equals: assessmentType,
    },
  })
}

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'name',
    components: {
      edit: {
        beforeDocumentControls: ['@/components/Validator#Validator'],
      },
    },
  },
  versions: {
    drafts: {
      autosave: true,
    },
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'blocks',
      blocks: [
        {
          slug: 'quiz',
          fields: [
            {
              name: 'assessment',
              type: 'relationship',
              relationTo: 'assessments',
              filterOptions: getAssessmentsByType('broken'),
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
