import { Rule } from 'sanity';
export const category = {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Category Name',
        type: 'string',
        validation: (Rule:Rule) => Rule.required().min(3).max(50),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule:Rule) => Rule.max(200),
      },
    ],
  };
  