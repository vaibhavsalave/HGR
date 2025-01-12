import { Product } from '../../../types/product';

export const sugarProducts: Product[] = [
  {
    id: 'brown-sugar',
    name: 'Brown Sugar',
    description: 'Natural brown sugar with rich molasses content, perfect for baking and cooking.',
    shortDescription: 'Natural brown sugar with rich flavor',
    category: 'Sugar',
    subcategory: 'Brown Sugar',
    image: 'https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=500&h=500&q=80',
    benefits: [
      {
        title: 'Natural Sweetness',
        description: 'Contains natural molasses for rich flavor'
      },
      {
        title: 'Rich in Minerals',
        description: 'Contains essential minerals from molasses'
      },
      {
        title: 'Perfect for Baking',
        description: 'Adds moisture and flavor to baked goods'
      }
    ],
    ingredients: ['Pure Sugar Cane', 'Natural Molasses'],
    packageSizes: [
      { size: '500', price: 45, unit: 'g' },
      { size: '1', price: 85, unit: 'kg' }
    ],
    nutritionalInfo: {
      calories: '380 kcal/100g',
      carbohydrates: '98g/100g',
      minerals: {
        'Iron': '0.71mg/100g',
        'Calcium': '85mg/100g',
        'Potassium': '133mg/100g'
      }
    },
    storageInfo: {
      temperature: 'Room temperature',
      shelfLife: '24 months',
      storageInstructions: [
        'Store in a cool, dry place',
        'Keep away from moisture',
        'Close container tightly after use'
      ]
    },
    usageSuggestions: [
      {
        title: 'Baking',
        instructions: [
          'Perfect for cakes and cookies',
          'Great for bread and muffins',
          'Ideal for caramel making'
        ]
      }
    ],
    certifications: ['FSSAI Certified'],
    organic: false
  },
  {
    id: 'white-sugar',
    name: 'Pure White Sugar',
    description: 'Refined white sugar with consistent crystal size, ideal for everyday use and baking.',
    shortDescription: 'Pure refined white sugar',
    category: 'Sugar',
    subcategory: 'White Sugar',
    image: 'https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=500&h=500&q=80',
    benefits: [
      {
        title: 'Pure & Clean',
        description: 'Highly refined for purity'
      },
      {
        title: 'Consistent Quality',
        description: 'Uniform crystal size for better results'
      },
      {
        title: 'Versatile Use',
        description: 'Perfect for all sweetening needs'
      }
    ],
    ingredients: ['Pure Sugar Cane'],
    packageSizes: [
      { size: '500', price: 40, unit: 'g' },
      { size: '1', price: 75, unit: 'kg' }
    ],
    nutritionalInfo: {
      calories: '400 kcal/100g',
      carbohydrates: '100g/100g'
    },
    storageInfo: {
      temperature: 'Room temperature',
      shelfLife: '24 months',
      storageInstructions: [
        'Store in a cool, dry place',
        'Keep away from moisture',
        'Close container tightly after use'
      ]
    },
    usageSuggestions: [
      {
        title: 'General Use',
        instructions: [
          'Perfect for tea and coffee',
          'Ideal for cooking and baking',
          'Great for desserts'
        ]
      }
    ],
    certifications: ['FSSAI Certified'],
    organic: false
  }
]; 