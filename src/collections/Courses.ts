import type { CollectionConfig, FilterOptions } from 'payload'

const exclusivePageAssignmentFilter: FilterOptions<typeof Courses> = async ({}) => {
  return {
    id: {
      not_in: [1, 2, 3],
    },
  }
}

export const Courses: CollectionConfig = {
  slug: 'courses',
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
      name: 'sections',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'pages',
          type: 'array',
          fields: [
            {
              name: 'page',
              type: 'relationship',
              relationTo: 'pages',
              filterOptions: exclusivePageAssignmentFilter,
              required: true,
              hasMany: false,
            },
          ],
        },
      ],
    },
  ],
}
