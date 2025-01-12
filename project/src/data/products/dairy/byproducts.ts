import { Product } from '../../../types/product';

export const dairyByproducts: Product[] = [
  {
    id: 'cow-ghee',
    name: 'Cow Ghee',
    description: 'Pure clarified butter made from cow milk using traditional methods, rich in nutrients and perfect for cooking.',
    shortDescription: 'Pure cow milk clarified butter',
    category: 'Milk Byproducts',
    subcategory: 'Ghee',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    benefits: [
      {
        title: 'Rich aroma',
        description: 'Traditional method ensures authentic aroma'
      },
      {
        title: 'High smoke point',
        description: 'Perfect for high-temperature cooking'
      },
      {
        title: 'Rich in antioxidants',
        description: 'Contains natural antioxidants'
      },
      {
        title: 'Long shelf life',
        description: 'Can be stored at room temperature'
      }
    ],
    ingredients: ['Pure Cow Milk Cream'],
    packageSizes: [
      { size: '500', price: 350, unit: 'ml' },
      { size: '1', price: 680, unit: 'L' }
    ],
    nutritionalInfo: {
      calories: '897 kcal/100g',
      protein: '0g/100g',
      fat: '99.5g/100g',
      carbohydrates: '0g/100g',
      calcium: '1mg/100g',
      vitamins: {
        'Vitamin A': '3400 IU/100g',
        'Vitamin E': '2.8mg/100g',
        'Vitamin K': '8.6µg/100g'
      }
    },
    storageInfo: {
      temperature: 'Room temperature',
      shelfLife: '12 months',
      storageInstructions: [
        'Store in a cool, dry place',
        'Keep away from direct sunlight',
        'Use clean, dry spoon',
        'Close lid tightly after use'
      ]
    },
    usageSuggestions: [
      {
        title: 'Cooking Applications',
        instructions: [
          'Ideal for Indian cooking',
          'Perfect for tempering spices',
          'Can be used for deep frying',
          'Great for making traditional sweets'
        ]
      },
      {
        title: 'Ayurvedic Uses',
        instructions: [
          'Can be used for massage',
          'Traditional remedy for dry skin',
          'Used in traditional medicine'
        ]
      }
    ],
    certifications: [
      'FSSAI Certified',
      'ISO 22000:2018',
      'AGMARK Certified'
    ],
    allergenInfo: ['Contains: Milk'],
    organic: false
  },
  {
    id: 'fresh-paneer',
    name: 'Fresh Paneer',
    description: 'Soft and fresh cottage cheese made from pure milk, perfect for Indian cuisine and rich in protein.',
    shortDescription: 'Fresh cottage cheese',
    category: 'Milk Byproducts',
    subcategory: 'Paneer',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    benefits: [
      {
        title: 'High protein',
        description: 'Excellent source of vegetarian protein'
      },
      {
        title: 'Fresh daily',
        description: 'Made fresh every day'
      },
      {
        title: 'Versatile use',
        description: 'Perfect for various cuisines'
      }
    ],
    ingredients: ['Pure Cow Milk', 'Citric Acid'],
    packageSizes: [
      { size: '200', price: 80, unit: 'g' },
      { size: '1', price: 360, unit: 'kg' }
    ],
    nutritionalInfo: {
      calories: '265 kcal/100g',
      protein: '18.3g/100g',
      fat: '20.8g/100g',
      carbohydrates: '1.2g/100g',
      calcium: '208mg/100g'
    },
    storageInfo: {
      temperature: '4°C to 8°C',
      shelfLife: '7 days when refrigerated',
      storageInstructions: [
        'Keep refrigerated',
        'Store in airtight container',
        'Change water daily if stored in water'
      ]
    },
    usageSuggestions: [
      {
        title: 'Cooking Ideas',
        instructions: [
          'Perfect for curries',
          'Can be grilled or fried',
          'Great in sandwiches and wraps'
        ]
      }
    ],
    certifications: ['FSSAI Certified'],
    allergenInfo: ['Contains: Milk'],
    organic: false
  },
  {
    id: 'white-butter',
    name: 'White Butter',
    description: 'Traditional hand-churned butter made from fresh cream, rich in natural goodness.',
    shortDescription: 'Fresh hand-churned butter',
    category: 'Milk Byproducts',
    subcategory: 'Butter',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    benefits: [
      {
        title: 'Natural goodness',
        description: 'Pure and natural dairy fat'
      },
      {
        title: 'Traditional method',
        description: 'Made using traditional churning process'
      },
      {
        title: 'Rich in vitamins',
        description: 'Good source of fat-soluble vitamins'
      }
    ],
    ingredients: ['Fresh Cream'],
    packageSizes: [
      { size: '200', price: 120, unit: 'g' },
      { size: '500', price: 280, unit: 'g' }
    ],
    nutritionalInfo: {
      calories: '717 kcal/100g',
      protein: '0.9g/100g',
      fat: '81g/100g',
      carbohydrates: '0.1g/100g',
      calcium: '24mg/100g',
      vitamins: {
        'Vitamin A': '684 µg/100g',
        'Vitamin D': '1.5 µg/100g',
        'Vitamin E': '2.0 mg/100g'
      }
    },
    storageInfo: {
      temperature: '4°C to 8°C',
      shelfLife: '30 days when refrigerated',
      storageInstructions: [
        'Keep refrigerated',
        'Store in airtight container',
        'Avoid exposure to strong odors'
      ]
    },
    usageSuggestions: [
      {
        title: 'Usage Ideas',
        instructions: [
          'Perfect for spreading on bread',
          'Great for cooking',
          'Can be used in baking'
        ]
      }
    ],
    certifications: ['FSSAI Certified'],
    allergenInfo: ['Contains: Milk'],
    organic: false
  },
  {
    id: 'shrikhand',
    name: 'Classic Shrikhand',
    description: 'Traditional sweet dish made from strained yogurt, flavored with cardamom and saffron.',
    shortDescription: 'Sweet strained yogurt dessert',
    category: 'Milk Byproducts',
    subcategory: 'Desserts',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    benefits: [
      {
        title: 'Probiotic rich',
        description: 'Contains beneficial bacteria'
      },
      {
        title: 'Traditional recipe',
        description: 'Authentic preparation method'
      },
      {
        title: 'Premium ingredients',
        description: 'Made with high-quality ingredients'
      }
    ],
    ingredients: [
      'Strained Yogurt',
      'Sugar',
      'Cardamom',
      'Saffron',
      'Nuts'
    ],
    packageSizes: [
      { size: '200', price: 55, unit: 'g' },
      { size: '500', price: 130, unit: 'g' }
    ],
    nutritionalInfo: {
      calories: '142 kcal/100g',
      protein: '6g/100g',
      fat: '8g/100g',
      carbohydrates: '22g/100g',
      calcium: '150mg/100g'
    },
    storageInfo: {
      temperature: '4°C to 8°C',
      shelfLife: '10 days when refrigerated',
      storageInstructions: [
        'Keep refrigerated',
        'Store in airtight container',
        'Consume within 3 days after opening'
      ]
    },
    usageSuggestions: [
      {
        title: 'Serving Suggestions',
        instructions: [
          'Serve chilled',
          'Can be garnished with nuts',
          'Perfect as dessert'
        ]
      }
    ],
    certifications: ['FSSAI Certified'],
    allergenInfo: ['Contains: Milk', 'May contain: Nuts'],
    organic: false
  }
];