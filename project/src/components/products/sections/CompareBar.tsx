import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../../../types/product';

interface CompareBarProps {
  comparedProducts: Product[];
  onCompareClick: () => void;
}

export const CompareBar: React.FC<CompareBarProps> = ({
  comparedProducts,
  onCompareClick
}) => {
  if (comparedProducts.length === 0) return null;

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-2xl z-50"
    >
      <div className="mx-4">
        <motion.div
          layout
          className="bg-white rounded-xl shadow-2xl p-4 border border-blue-100"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-blue-700">
                  {comparedProducts.length} {comparedProducts.length === 1 ? 'product' : 'products'} selected
                </span>
                <span className="text-gray-400">|</span>
                <span className="text-sm text-gray-600">
                  {3 - comparedProducts.length} more can be added
                </span>
              </div>
              <div className="flex -space-x-2">
                {comparedProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-md"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onCompareClick}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-lg"
            >
              Compare Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}; 