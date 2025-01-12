import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../../../types/product';

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
  onCompare: (product: Product) => void;
  comparedProducts: Product[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onProductClick,
  onCompare,
  comparedProducts
}) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      <AnimatePresence>
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={item}
            layout
            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          >
            {/* Image Section - Decreased size */}
            <div 
              className="relative cursor-pointer aspect-w-4 aspect-h-4 overflow-hidden" 
              onClick={() => onProductClick(product)}
            >
              <motion.img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover object-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Floating Action Buttons */}
              <div className="absolute top-3 right-3 flex flex-col gap-2 transform translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onCompare(product);
                  }}
                  className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                    comparedProducts.some(p => p.id === product.id)
                      ? 'bg-blue-500/90 text-white'
                      : 'bg-white/90 text-gray-700 hover:bg-blue-500/90 hover:text-white'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </motion.button>
              </div>

              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                {product.organic && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="px-2 py-1 bg-green-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full shadow-lg"
                  >
                    Organic
                  </motion.div>
                )}
                {product.certifications?.[0] && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="px-2 py-1 bg-blue-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full shadow-lg"
                  >
                    {product.certifications[0]}
                  </motion.div>
                )}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-4">
              {/* Title and Description */}
              <div className="mb-3">
                <motion.h3 
                  className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300"
                >
                  {product.name}
                </motion.h3>
                <p className="text-sm text-gray-600 line-clamp-2">{product.shortDescription}</p>
              </div>

              {/* Package Sizes */}
              <div className="flex flex-wrap gap-2 mb-3">
                {product.packageSizes.map((size, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-2 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors duration-300"
                  >
                    {size.size}{size.unit}
                  </motion.span>
                ))}
              </div>

              {/* Benefits */}
              <div className="space-y-2 mb-3">
                {product.benefits.slice(0, 2).map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center text-sm text-gray-600 group-hover:text-gray-700"
                  >
                    <span className="w-4 h-4 mr-2 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-300">
                      <svg className="w-2.5 h-2.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="line-clamp-1 text-xs">{benefit.title}</span>
                  </motion.div>
                ))}
              </div>

              {/* View Details Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onProductClick(product)}
                className="w-full py-2 px-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xs font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Details
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}; 