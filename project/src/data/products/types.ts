export type ProductCategory = 'Milk' | 'Milk Beverages' | 'Milk Byproducts' | 'Sugar';

export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  category: ProductCategory;
  subcategory: string;
  image: string;
  benefits: string[];
  ingredients: string[];
  packageSizes: {
    size: string;
    price: number;
    unit: string;
  }[];
  nutritionalInfo?: {
    [key: string]: string;
  };
} 