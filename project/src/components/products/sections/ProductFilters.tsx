import React from 'react';
import { motion } from 'framer-motion';
import { ProductCategory } from '../../../types/product';

interface ProductFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategories: ProductCategory[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<ProductCategory[]>>;
  sortBy: 'name';
  setSortBy: React.Dispatch<React.SetStateAction<'name'>>;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategories,
  setSelectedCategories,
  sortBy,
  setSortBy
}) => {
  const categories: ProductCategory[] = ['Milk', 'Milk Beverages', 'Milk Byproducts', 'Sugar'];

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6 space-y-6 relative z-10 -mt-8"
    >
      {/* Search */}
      <div className="relative">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow duration-200"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-wrap gap-4 items-center justify-between">
        {/* Category Filters */}
        <motion.div 
          className="flex flex-wrap gap-2"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => {
                setSelectedCategories((prev: ProductCategory[]) =>
                  prev.includes(category)
                    ? prev.filter((c: ProductCategory) => c !== category)
                    : [...prev, category]
                );
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                selectedCategories.includes(category)
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Sort Options */}
        <motion.div 
          className="flex items-center gap-3"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span className="text-sm text-gray-600">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'name')}
            className="px-4 py-2 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition-shadow duration-200"
          >
            <option value="name">Name</option>
          </select>
        </motion.div>
      </div>
    </motion.div>
  );
}; 