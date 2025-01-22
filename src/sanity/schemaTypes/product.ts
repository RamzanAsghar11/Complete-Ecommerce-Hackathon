import { Rule } from 'sanity';

export const product= {
  name: 'product',
  title: 'Products',
  type: 'document',
  fields: [
   
    {
      name: 'title',
      title: 'Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().min(3).max(100),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title', // Use 'title' instead of 'name'
        maxLength: 96,
      },
      validation: (Rule : Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule : Rule) => Rule.required().min(10).max(1000),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule : Rule) => Rule.required().positive().precision(2),
    },
 
    {
      name: 'imageSrc',
      title: 'Images',
      type: 'image',
      options:{

        hotspot : true
      }
      
    },
    {
      name: 'size',
      title: 'Size',
      type: 'array',
      of: [
        { type: 'string' } // Size ko string ke roop mein store karenge
      ],
      options: {
        list: [
          { title: 'Small', value: 'SM' },
          { title: 'Medium', value: 'M' },
          { title: 'Large', value: 'L' },
          { title: 'Extra Large', value: 'XL' }
        ]
      },
      // Optional: Set this to true if size is mandatory
      validation: (Rule : Rule) => Rule.required()
    },
      {
      name: 'sku',
      title: 'SKU',
      type: 'string',
    },

    {
      name: 'discountPercentage',
      title: 'Discount Percentage',
      type: 'number',
    },
    {
      name: 'isFeaturedProduct',
      title: 'Is Featured Product',
      type: 'boolean',
    },
    {
      name: 'colors',
      type: 'array',
      title: 'Colors',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags', // Allow adding multiple colors
      },
    },
    {
      name: 'stockLevel',
      title: 'Stock Level',
      type: 'number',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference', // Use reference for better category management
      to: [{ type: 'category' }],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags', // Allow adding multiple colors
      },
    },

  
   
  ],
};

