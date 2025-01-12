import { Product } from '../../../types/product';

export const dairyBeverages: Product[] = [
  {
    id: 'plain-lassi',
    name: 'Plain Lassi',
    description: 'Traditional yogurt-based drink that\'s smooth, creamy and perfectly balanced between sweet and tangy.',
    shortDescription: 'Classic sweet yogurt drink',
    category: 'Milk Beverages',
    subcategory: 'Lassi',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    benefits: [
      {
        title: 'Probiotic rich',
        description: 'Contains beneficial bacteria for gut health'
      },
      {
        title: 'Natural ingredients',
        description: 'Made with fresh yogurt and pure ingredients'
      },
      {
        title: 'Perfect balance',
        description: 'Balanced sweetness and tanginess'
      }
    ],
    ingredients: [
      'Fresh Yogurt',
      'Sugar',
      'Cardamom'
    ],
    packageSizes: [
      { size: '200', price: 25, unit: 'ml' },
      { size: '1', price: 100, unit: 'L' }
    ],
    nutritionalInfo: {
      calories: '85 kcal/100ml',
      protein: '3.3g/100ml',
      fat: '2.4g/100ml',
      carbohydrates: '13.5g/100ml',
      calcium: '105mg/100ml'
    },
    storageInfo: {
      temperature: '4°C to 8°C',
      shelfLife: '10 days when refrigerated',
      storageInstructions: [
        'Keep refrigerated',
        'Shake well before use',
        'Consume within 2 days after opening'
      ]
    },
    usageSuggestions: [
      {
        title: 'Serving Suggestions',
        instructions: [
          'Serve chilled',
          'Can be topped with dry fruits',
          'Perfect summer refreshment'
        ]
      }
    ],
    certifications: ['FSSAI Certified'],
    allergenInfo: ['Contains: Milk'],
    organic: false
  },
  {
    id: 'mango-lassi',
    name: 'Mango Lassi',
    description: 'Creamy yogurt drink blended with sweet Alphonso mangoes, creating a perfect balance of taste and nutrition.',
    shortDescription: 'Sweet and creamy mango-flavored yogurt drink',
    category: 'Milk Beverages',
    subcategory: 'Lassi',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    benefits: [
      {
        title: 'Real mango pulp',
        description: 'Made with premium Alphonso mangoes for authentic taste'
      },
      {
        title: 'Rich in probiotics',
        description: 'Contains live cultures for gut health'
      },
      {
        title: 'Natural sweetness',
        description: 'No artificial sweeteners added'
      },
      {
        title: 'Nutrient-rich',
        description: 'Good source of vitamins, minerals, and protein'
      }
    ],
    ingredients: [
      'Fresh Yogurt',
      'Alphonso Mango Pulp',
      'Sugar',
      'Live Cultures'
    ],
    packageSizes: [
      { size: '200', price: 30, unit: 'ml' },
      { size: '1', price: 120, unit: 'L' }
    ],
    nutritionalInfo: {
      calories: '98 kcal/100ml',
      protein: '3.1g/100ml',
      fat: '2.6g/100ml',
      carbohydrates: '16.8g/100ml',
      calcium: '115mg/100ml',
      vitamins: {
        'Vitamin A': '120 IU/100ml',
        'Vitamin C': '4mg/100ml',
        'Vitamin B12': '0.4 µg/100ml'
      },
      minerals: {
        'Potassium': '200mg/100ml',
        'Phosphorus': '85mg/100ml'
      }
    },
    storageInfo: {
      temperature: '4°C to 8°C',
      shelfLife: '15 days when refrigerated',
      storageInstructions: [
        'Keep refrigerated',
        'Shake well before use',
        'Consume within 2 days after opening',
        'Do not freeze'
      ]
    },
    usageSuggestions: [
      {
        title: 'Serving Suggestions',
        instructions: [
          'Serve chilled',
          'Can be garnished with mint leaves',
          'Perfect as a summer refreshment'
        ]
      },
      {
        title: 'Pairing Ideas',
        instructions: [
          'Great with spicy Indian meals',
          'Can be enjoyed as a breakfast drink',
          'Ideal post-workout refreshment'
        ]
      }
    ],
    certifications: [
      'FSSAI Certified',
      'ISO 22000:2018'
    ],
    allergenInfo: ['Contains: Milk'],
    organic: false
  },
  {
    id: 'rose-lassi',
    name: 'Rose Lassi',
    description: 'Delightful yogurt drink infused with the essence of rose, offering a refreshing and aromatic experience.',
    shortDescription: 'Aromatic rose-flavored yogurt drink',
    category: 'Milk Beverages',
    subcategory: 'Lassi',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    benefits: [
      {
        title: 'Refreshing taste',
        description: 'A unique blend of yogurt and rose flavor'
      },
      {
        title: 'Rich in probiotics',
        description: 'Supports digestive health'
      },
      {
        title: 'Natural sweetness',
        description: 'No artificial flavors added'
      }
    ],
    ingredients: [
      'Fresh Yogurt',
      'Rose Syrup',
      'Sugar',
      'Live Cultures'
    ],
    packageSizes: [
      { size: '200', price: 35, unit: 'ml' },
      { size: '1', price: 150, unit: 'L' }
    ],
    nutritionalInfo: {
      calories: '90 kcal/100ml',
      protein: '3.0g/100ml',
      fat: '2.5g/100ml',
      carbohydrates: '15g/100ml',
      calcium: '110mg/100ml'
    },
    storageInfo: {
      temperature: '4°C to 8°C',
      shelfLife: '10 days when refrigerated',
      storageInstructions: [
        'Keep refrigerated',
        'Shake well before use',
        'Consume within 3 days after opening'
      ]
    },
    usageSuggestions: [
      {
        title: 'Serving Suggestions',
        instructions: [
          'Serve chilled',
          'Can be garnished with rose petals',
          'Ideal for summer picnics'
        ]
      }
    ],
    certifications: ['FSSAI Certified'],
    allergenInfo: ['Contains: Milk'],
    organic: false
  },
  {
    id: 'tadka-chhach',
    name: 'Tadka Chhach',
    description: 'Traditional spiced buttermilk with aromatic herbs and spices, perfect for hot summer days.',
    shortDescription: 'Spiced buttermilk with aromatic herbs',
    category: 'Milk Beverages',
    subcategory: 'Buttermilk',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    benefits: [
      {
        title: 'Aids digestion',
        description: 'Natural probiotics help improve digestive health'
      },
      {
        title: 'Cooling effect',
        description: 'Perfect refreshment for hot weather'
      },
      {
        title: 'Natural probiotics',
        description: 'Contains beneficial bacteria for gut health'
      },
      {
        title: 'Traditional spices',
        description: 'Blend of authentic Indian spices'
      }
    ],
    ingredients: [
      'Buttermilk',
      'Cumin',
      'Black Salt',
      'Mint',
      'Ginger',
      'Green Chili'
    ],
    packageSizes: [
      { size: '200', price: 20, unit: 'ml' },
      { size: '1', price: 45, unit: 'L' }
    ],
    nutritionalInfo: {
      calories: '30 kcal/100ml',
      protein: '3.3g/100ml',
      fat: '0.8g/100ml',
      carbohydrates: '4.4g/100ml',
      calcium: '100mg/100ml'
    },
    storageInfo: {
      temperature: '4°C to 8°C',
      shelfLife: '7 days when refrigerated',
      storageInstructions: [
        'Keep refrigerated',
        'Shake well before use',
        'Consume within 2 days after opening'
      ]
    },
    usageSuggestions: [
      {
        title: 'Serving Suggestions',
        instructions: [
          'Serve chilled',
          'Best consumed between meals',
          'Can be diluted with water if desired'
        ]
      }
    ],
    certifications: ['FSSAI Certified'],
    allergenInfo: ['Contains: Milk'],
    organic: false
  },
  {
    id: 'masala-chaas',
    name: 'Masala Chaas',
    description: 'Refreshing spiced buttermilk with a blend of Indian spices and herbs, perfect for digestion.',
    shortDescription: 'Traditional spiced buttermilk',
    category: 'Milk Beverages',
    subcategory: 'Buttermilk',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    benefits: [
      {
        title: 'Digestive aid',
        description: 'Helps in better digestion'
      },
      {
        title: 'Cooling effect',
        description: 'Natural coolant for summer'
      },
      {
        title: 'Low calories',
        description: 'Perfect for health-conscious people'
      }
    ],
    ingredients: [
      'Buttermilk',
      'Indian Spices',
      'Curry Leaves',
      'Coriander',
      'Rock Salt'
    ],
    packageSizes: [
      { size: '200', price: 20, unit: 'ml' },
      { size: '1', price: 45, unit: 'L' }
    ],
    nutritionalInfo: {
      calories: '25 kcal/100ml',
      protein: '3.1g/100ml',
      fat: '0.7g/100ml',
      carbohydrates: '4.2g/100ml',
      calcium: '95mg/100ml'
    },
    storageInfo: {
      temperature: '4°C to 8°C',
      shelfLife: '7 days when refrigerated',
      storageInstructions: [
        'Keep refrigerated',
        'Shake well before use',
        'Consume within 2 days after opening'
      ]
    },
    usageSuggestions: [
      {
        title: 'Serving Suggestions',
        instructions: [
          'Serve chilled',
          'Best consumed after meals',
          'Can be diluted according to taste'
        ]
      }
    ],
    certifications: ['FSSAI Certified'],
    allergenInfo: ['Contains: Milk'],
    organic: false
  }
];