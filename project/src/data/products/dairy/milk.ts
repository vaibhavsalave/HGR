import { Product } from '../../../types/product';

export const milkProducts: Product[] = [
  {
    id: 'pasteurized-cow-milk',
    name: 'Pasteurized Cow Milk',
    description: 'Fresh and pure cow milk processed under strict quality control with modern pasteurization techniques to ensure safety while preserving nutritional value.',
    shortDescription: 'Fresh and pure cow milk processed under strict quality control',
    category: 'Milk',
    subcategory: 'Fresh Milk',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    benefits: [
      {
        title: 'Rich in calcium',
        description: 'Essential for strong bones and teeth development'
      },
      {
        title: 'High protein content',
        description: 'Supports muscle growth and repair'
      },
      {
        title: 'Essential nutrients',
        description: 'Contains vital vitamins and minerals for overall health'
      },
      {
        title: 'Safe for consumption',
        description: 'Pasteurized to eliminate harmful bacteria while preserving nutrients'
      }
    ],
    ingredients: ['Pure Cow Milk'],
    packageSizes: [
      { size: '500', price: 30, unit: 'ml' },
      { size: '1', price: 60, unit: 'L' }
    ],
    nutritionalInfo: {
      calories: '67 kcal/100ml',
      protein: '3.3g/100ml',
      fat: '3.5g/100ml',
      carbohydrates: '4.8g/100ml',
      calcium: '120mg/100ml',
      vitamins: {
        'Vitamin A': '100 IU/100ml',
        'Vitamin D': '40 IU/100ml',
        'Vitamin B12': '0.45 µg/100ml',
        'Vitamin B2': '0.18 mg/100ml'
      },
      minerals: {
        'Phosphorus': '95mg/100ml',
        'Potassium': '150mg/100ml',
        'Magnesium': '11mg/100ml'
      }
    },
    storageInfo: {
      temperature: '4°C to 6°C',
      shelfLife: '7 days when refrigerated',
      storageInstructions: [
        'Keep refrigerated at all times',
        'Store in the main body of the refrigerator',
        'Once opened, consume within 3 days',
        'Do not freeze'
      ]
    },
    usageSuggestions: [
      {
        title: 'Direct Consumption',
        instructions: [
          'Best served chilled',
          'Can be consumed at room temperature after boiling',
          'Ideal for breakfast or before bedtime'
        ]
      },
      {
        title: 'Cooking Applications',
        instructions: [
          'Perfect for making tea and coffee',
          'Can be used in baking and cooking',
          'Ideal for making smoothies and shakes'
        ]
      }
    ],
    certifications: [
      'FSSAI Certified',
      'ISO 22000:2018',
      'HACCP Certified'
    ],
    allergenInfo: ['Contains: Milk'],
    organic: false
  },
  {
    id: 'gold-milk',
    name: 'Gold Milk',
    description: 'Premium quality milk with enhanced nutritional value, sourced from select breeds of cows and processed to maintain highest standards of purity.',
    shortDescription: 'Premium quality milk with enhanced nutritional value',
    category: 'Milk',
    subcategory: 'Premium Milk',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    benefits: [
      {
        title: 'Vitamin D fortified',
        description: 'Enhanced with vitamin D for better calcium absorption'
      },
      {
        title: 'Premium quality',
        description: 'Sourced from select breeds of cows'
      },
      {
        title: 'Rich taste',
        description: 'Full-bodied flavor and creamy texture'
      },
      {
        title: 'Enhanced nutrition',
        description: 'Higher protein and calcium content'
      }
    ],
    ingredients: ['Premium Cow Milk', 'Vitamin D3'],
    packageSizes: [
      { size: '500', price: 40, unit: 'ml' },
      { size: '1', price: 80, unit: 'L' }
    ],
    nutritionalInfo: {
      protein: '3.5g/100ml',
      fat: '4.0g/100ml',
      calcium: '140mg/100ml',
      vitamins: {
        'Vitamin D3': '400IU/L'
      }
    },
    storageInfo: {
      temperature: '4°C to 6°C',
      shelfLife: '7 days when refrigerated',
      storageInstructions: [
        'Keep refrigerated at all times',
        'Store in the main body of the refrigerator',
        'Once opened, consume within 3 days'
      ]
    },
    usageSuggestions: [
      {
        title: 'Direct Consumption',
        instructions: [
          'Best served chilled',
          'Ideal for daily consumption',
          'Perfect for growing children'
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
    id: 'toned-milk',
    name: 'Toned Milk',
    description: 'Processed milk with balanced fat content, perfect for daily consumption and maintaining a healthy lifestyle.',
    shortDescription: 'Balanced fat content milk for daily use',
    category: 'Milk',
    subcategory: 'Regular Milk',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    benefits: [
      {
        title: 'Balanced nutrition',
        description: 'Perfect balance of proteins and fats'
      },
      {
        title: 'Economical choice',
        description: 'Affordable without compromising on quality'
      },
      {
        title: 'Daily nutrition',
        description: 'Ideal for regular consumption'
      }
    ],
    ingredients: ['Cow Milk', 'Skimmed Milk Powder'],
    packageSizes: [
      { size: '500', price: 25, unit: 'ml' },
      { size: '1', price: 48, unit: 'L' }
    ],
    nutritionalInfo: {
      calories: '52 kcal/100ml',
      protein: '3.1g/100ml',
      fat: '3.0g/100ml',
      carbohydrates: '4.7g/100ml',
      calcium: '115mg/100ml',
      vitamins: {
        'Vitamin A': '90 IU/100ml',
        'Vitamin D': '35 IU/100ml',
        'Vitamin B12': '0.4 µg/100ml'
      }
    },
    storageInfo: {
      temperature: '4°C to 6°C',
      shelfLife: '7 days when refrigerated',
      storageInstructions: [
        'Keep refrigerated at all times',
        'Store in the main body of the refrigerator',
        'Once opened, consume within 3 days'
      ]
    },
    usageSuggestions: [
      {
        title: 'Daily Use',
        instructions: [
          'Perfect for tea and coffee',
          'Great for breakfast cereals',
          'Ideal for cooking'
        ]
      }
    ],
    certifications: ['FSSAI Certified'],
    allergenInfo: ['Contains: Milk'],
    organic: false
  },
  {
    id: 'standardized-milk',
    name: 'Standardized Milk',
    description: 'High-quality milk with standardized fat content, ensuring consistent taste and nutritional value.',
    shortDescription: 'Consistent quality standardized milk',
    category: 'Milk',
    subcategory: 'Regular Milk',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    benefits: [
      {
        title: 'Consistent quality',
        description: 'Standardized fat and protein content'
      },
      {
        title: 'Rich taste',
        description: 'Perfect for all dairy needs'
      },
      {
        title: 'Versatile use',
        description: 'Suitable for drinking and cooking'
      }
    ],
    ingredients: ['Pure Cow Milk'],
    packageSizes: [
      { size: '500', price: 28, unit: 'ml' },
      { size: '1', price: 52, unit: 'L' }
    ],
    nutritionalInfo: {
      calories: '58 kcal/100ml',
      protein: '3.2g/100ml',
      fat: '3.5g/100ml',
      carbohydrates: '4.8g/100ml',
      calcium: '118mg/100ml',
      vitamins: {
        'Vitamin A': '95 IU/100ml',
        'Vitamin D': '38 IU/100ml',
        'Vitamin B12': '0.42 µg/100ml'
      }
    },
    storageInfo: {
      temperature: '4°C to 6°C',
      shelfLife: '7 days when refrigerated',
      storageInstructions: [
        'Keep refrigerated at all times',
        'Store in the main body of the refrigerator',
        'Once opened, consume within 3 days'
      ]
    },
    usageSuggestions: [
      {
        title: 'Multiple Uses',
        instructions: [
          'Perfect for direct consumption',
          'Ideal for making sweets',
          'Great for all cooking purposes'
        ]
      }
    ],
    certifications: ['FSSAI Certified'],
    allergenInfo: ['Contains: Milk'],
    organic: false
  }
];