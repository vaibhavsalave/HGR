import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../../types/product';
import { milkProducts } from '../../data/products/dairy/milk';
import { dairyBeverages } from '../../data/products/dairy/beverages';
import { dairyByproducts } from '../../data/products/dairy/byproducts';
import { sugarProducts } from '../../data/products/sugar/sugar';

export const FeaturedProducts = () => {
  // Select one featured product from each category
  const featuredProducts: Product[] = [
    milkProducts[0], // Pasteurized Cow Milk
    dairyBeverages[1], // Mango Lassi
    dairyByproducts[0], // Cow Ghee
    sugarProducts[0], // Brown Sugar
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600">
            Discover our premium selection of high-quality products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group overflow-hidden"
            >
              <div className="relative h-48">
                <motion.img
                  initial={{ scale: 1.2 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.organic && (
                  <span className="absolute top-4 right-4 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    Organic
                  </span>
                )}
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <span className="text-green-600 text-sm font-medium mb-2 block">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {product.shortDescription}
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-2 mb-6">
                  {product.benefits.slice(0, 2).map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <span className="w-5 h-5 mr-2 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors duration-300">
                        <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>{benefit.title}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Certifications */}
                {product.certifications && product.certifications.length > 0 && (
                  <div className="flex items-center gap-2 mb-4">
                    {product.certifications.slice(0, 2).map((cert, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-2 px-4 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg font-medium hover:from-green-700 hover:to-green-600 transition-colors duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 