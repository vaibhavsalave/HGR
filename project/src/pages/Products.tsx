import React, { useState } from 'react';
import { milkProducts } from '../data/products/dairy/milk';
import { dairyBeverages } from '../data/products/dairy/beverages';
import { dairyByproducts } from '../data/products/dairy/byproducts';
import { sugarProducts } from '../data/products/sugar/sugar';
import { Product, ProductCategory } from '../types/product';
import { ProductDetail } from '../components/products/ProductDetail';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductHero } from '../components/products/sections/ProductHero';
import { ProductFilters } from '../components/products/sections/ProductFilters';
import { ProductGrid } from '../components/products/sections/ProductGrid';
import { CompareBar } from '../components/products/sections/CompareBar';

type SortOption = 'name';

export const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<ProductCategory[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>('name');
  const [comparedProducts, setComparedProducts] = useState<Product[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  // Combine all products
  const allProducts: Product[] = [...milkProducts, ...dairyBeverages, ...dairyByproducts, ...sugarProducts];

  // Filter products based on search query and categories
  const filteredProducts = allProducts.filter(p => {
    const matchesSearch = searchQuery
      ? p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    
    const matchesCategory = selectedCategories.length > 0
      ? selectedCategories.includes(p.category)
      : true;

    return matchesSearch && matchesCategory;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsDetailOpen(true);
  };

  const handleCompare = (product: Product) => {
    setComparedProducts(prev => {
      const isAlreadyCompared = prev.some(p => p.id === product.id);
      if (isAlreadyCompared) {
        return prev.filter(p => p.id !== product.id);
      }
      if (prev.length >= 3) {
        return [...prev.slice(1), product];
      }
      return [...prev, product];
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ProductHero />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <ProductFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {/* Product Grid */}
        <div className="py-12">
          {sortedProducts.length > 0 ? (
            <ProductGrid
              products={sortedProducts}
              onProductClick={handleProductClick}
              onCompare={handleCompare}
              comparedProducts={comparedProducts}
            />
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="inline-block p-4 rounded-full bg-blue-100 mb-4"
              >
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </motion.div>
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-xl font-medium text-gray-900 mb-2"
              >
                No Products Found
              </motion.h3>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-500"
              >
                Try adjusting your search criteria or filters
              </motion.p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {isDetailOpen && selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onClose={() => {
              setIsDetailOpen(false);
              setSelectedProduct(null);
            }}
          />
        )}
      </AnimatePresence>

      {/* Compare Bar */}
      <AnimatePresence>
        {comparedProducts.length > 0 && (
          <CompareBar
            comparedProducts={comparedProducts}
            onCompareClick={() => setShowComparison(true)}
          />
        )}
      </AnimatePresence>

      {/* Product Comparison Modal */}
      <AnimatePresence>
        {showComparison && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setShowComparison(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Product Comparison</h2>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowComparison(false)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left p-4 bg-gray-50">Feature</th>
                        {comparedProducts.map((product) => (
                          <th key={product.id} className="text-left p-4 bg-gray-50">
                            {product.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {/* Category */}
                      <tr>
                        <td className="p-4 font-medium">Category</td>
                        {comparedProducts.map((product) => (
                          <td key={product.id} className="p-4">{product.category}</td>
                        ))}
                      </tr>

                      {/* Package Sizes */}
                      <tr>
                        <td className="p-4 font-medium">Package Sizes</td>
                        {comparedProducts.map((product) => (
                          <td key={product.id} className="p-4">
                            {product.packageSizes.map((size) => (
                              <div key={size.size}>
                                {size.size}{size.unit}
                              </div>
                            ))}
                          </td>
                        ))}
                      </tr>

                      {/* Benefits */}
                      <tr>
                        <td className="p-4 font-medium">Benefits</td>
                        {comparedProducts.map((product) => (
                          <td key={product.id} className="p-4">
                            <ul className="list-disc list-inside">
                              {product.benefits.map((benefit, index) => (
                                <li key={index}>{benefit.title}</li>
                              ))}
                            </ul>
                          </td>
                        ))}
                      </tr>

                      {/* Ingredients */}
                      <tr>
                        <td className="p-4 font-medium">Ingredients</td>
                        {comparedProducts.map((product) => (
                          <td key={product.id} className="p-4">
                            <ul className="list-disc list-inside">
                              {product.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                              ))}
                            </ul>
                          </td>
                        ))}
                      </tr>

                      {/* Certifications */}
                      <tr>
                        <td className="p-4 font-medium">Certifications</td>
                        {comparedProducts.map((product) => (
                          <td key={product.id} className="p-4">
                            {product.certifications?.map((cert, index) => (
                              <div
                                key={index}
                                className="inline-block px-2 py-1 bg-teal-50 text-teal-700 rounded-full text-sm mr-2 mb-2"
                              >
                                {cert}
                              </div>
                            ))}
                          </td>
                        ))}
                      </tr>

                      {/* Storage */}
                      <tr>
                        <td className="p-4 font-medium">Storage</td>
                        {comparedProducts.map((product) => (
                          <td key={product.id} className="p-4">
                            {product.storageInfo && (
                              <>
                                <div>Temperature: {product.storageInfo.temperature}</div>
                                <div>Shelf Life: {product.storageInfo.shelfLife}</div>
                              </>
                            )}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;