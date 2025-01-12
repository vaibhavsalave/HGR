export type ProductCategory = 'Milk' | 'Milk Beverages' | 'Milk Byproducts' | 'Sugar';

export interface NutritionalInfo {
  calories?: string;
  protein?: string;
  fat?: string;
  carbohydrates?: string;
  calcium?: string;
  vitamins?: {
    [key: string]: string;
  };
  minerals?: {
    [key: string]: string;
  };
}

export interface StorageInfo {
  temperature: string;
  shelfLife: string;
  storageInstructions: string[];
}

export interface ProductBenefit {
  title: string;
  description: string;
}

export interface UsageSuggestion {
  title: string;
  instructions: string[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  category: ProductCategory;
  subcategory: string;
  image: string;
  benefits: ProductBenefit[];
  ingredients: string[];
  packageSizes: {
    size: string;
    price: number;
    unit: string;
  }[];
  nutritionalInfo: NutritionalInfo;
  storageInfo: StorageInfo;
  usageSuggestions: UsageSuggestion[];
  certifications?: string[];
  allergenInfo?: string[];
  organic?: boolean;
}