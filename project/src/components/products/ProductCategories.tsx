import React from 'react';
import { ProductCategory } from '../../types/product';
import { Milk, Coffee, Cookie, Candy } from 'lucide-react';

interface ProductCategoriesProps {
  activeCategory: ProductCategory;
  onCategoryChange: (category: ProductCategory, subcategory?: string) => void;
}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  const categories: { id: ProductCategory; label: string; icon: React.ReactNode }[] = [
    { id: 'Milk', label: 'Milk', icon: <Milk className="mr-2" /> },
    { id: 'Milk Beverages', label: 'Beverages', icon: <Coffee className="mr-2" /> },
    { id: 'Milk Byproducts', label: 'Byproducts', icon: <Cookie className="mr-2" /> },
    { id: 'Sugar', label: 'Sugar', icon: <Candy className="mr-2" /> },
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {categories.map(({ id, label, icon }) => (
        <button
          key={id}
          onClick={() => onCategoryChange(id)}
          className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
            activeCategory === id
              ? 'bg-green-100 text-green-800'
              : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
        >
          {icon}
          {label}
        </button>
      ))}
    </div>
  );
};