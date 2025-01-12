import React from 'react';
import { Product } from '../../types/product';
import { motion } from 'framer-motion';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 rounded-full p-2 hover:bg-white transition-colors"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Section */}
          <div className="relative h-72 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                {product.category}
              </span>
              {product.organic && (
                <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-full">
                  Organic
                </span>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 overflow-y-auto max-h-[80vh]">
            <div className="space-y-6">
              {/* Header */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h2>
                <p className="text-lg text-gray-600">{product.description}</p>
              </div>

              {/* Package Sizes */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Available Sizes</h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.packageSizes.map((size, index) => (
                    <div
                      key={index}
                      className="bg-blue-50 rounded-lg p-4 border-2 border-blue-100 hover:border-blue-300 transition-colors"
                    >
                      <div className="text-lg font-medium text-blue-900">
                        {size.size}{size.unit}
                      </div>
                      <div className="text-blue-600 font-semibold">₹{size.price}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
                <div className="grid gap-3">
                  {product.benefits.map((benefit, index) => (
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      key={index}
                      className="flex items-start bg-green-50 rounded-lg p-4"
                    >
                      <span className="flex-shrink-0 h-6 w-6 text-green-500 mr-3">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <div>
                        <span className="font-medium text-green-900">{benefit.title}</span>
                        {benefit.description && (
                          <p className="text-sm text-green-700 mt-1">{benefit.description}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Ingredients */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Ingredients</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ingredient, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Nutritional Info */}
              {product.nutritionalInfo && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Nutritional Information</h3>
                  <div className="space-y-4">
                    {/* Main Nutrients */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {Object.entries(product.nutritionalInfo)
                        .filter(([key]) => !['vitamins', 'minerals'].includes(key))
                        .map(([key, value]) => (
                          value && (
                            <div key={key} className="bg-yellow-50 rounded-lg p-3">
                              <div className="text-sm text-yellow-800 capitalize">{key}</div>
                              <div className="text-lg font-semibold text-yellow-900">
                                {value}
                              </div>
                            </div>
                          )
                        ))}
                    </div>

                    {/* Vitamins */}
                    {product.nutritionalInfo.vitamins && (
                      <div>
                        <h4 className="text-md font-medium text-gray-900 mb-2">Vitamins</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {Object.entries(product.nutritionalInfo.vitamins).map(([vitamin, value]) => (
                            <div key={vitamin} className="bg-orange-50 rounded-lg p-3">
                              <div className="text-sm text-orange-800">{vitamin}</div>
                              <div className="text-lg font-semibold text-orange-900">{value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Minerals */}
                    {product.nutritionalInfo.minerals && (
                      <div>
                        <h4 className="text-md font-medium text-gray-900 mb-2">Minerals</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {Object.entries(product.nutritionalInfo.minerals).map(([mineral, value]) => (
                            <div key={mineral} className="bg-purple-50 rounded-lg p-3">
                              <div className="text-sm text-purple-800">{mineral}</div>
                              <div className="text-lg font-semibold text-purple-900">{value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Storage Information */}
              {product.storageInfo && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Storage Information</h3>
                  <div className="bg-blue-50 rounded-lg p-4 space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white rounded-lg p-3">
                        <div className="text-sm text-blue-800">Temperature</div>
                        <div className="text-lg font-semibold text-blue-900">{product.storageInfo.temperature}</div>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <div className="text-sm text-blue-800">Shelf Life</div>
                        <div className="text-lg font-semibold text-blue-900">{product.storageInfo.shelfLife}</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-md font-medium text-gray-900 mb-2">Storage Instructions</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {product.storageInfo.storageInstructions.map((instruction, index) => (
                          <li key={index} className="text-blue-700">{instruction}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Usage Suggestions */}
              {product.usageSuggestions && product.usageSuggestions.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Usage Suggestions</h3>
                  <div className="space-y-3">
                    {product.usageSuggestions.map((suggestion, index) => (
                      <div key={index} className="bg-indigo-50 rounded-lg p-4">
                        <h4 className="font-medium text-indigo-900 mb-2">{suggestion.title}</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {suggestion.instructions.map((instruction, idx) => (
                            <li key={idx} className="text-indigo-700">{instruction}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Certifications */}
              {product.certifications && product.certifications.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Certifications</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.certifications.map((cert, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-medium border border-teal-200"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Allergen Information */}
              {product.allergenInfo && product.allergenInfo.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Allergen Information</h3>
                  <div className="bg-red-50 rounded-lg p-4">
                    <ul className="list-disc list-inside space-y-1">
                      {product.allergenInfo.map((allergen, index) => (
                        <li key={index} className="text-red-700">{allergen}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}; 