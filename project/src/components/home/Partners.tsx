import React from 'react';
import { motion } from 'framer-motion';

export const Partners = () => {
  const partners = [
    { name: 'Company 1', logo: '/logos/company1.png' },
    { name: 'Company 2', logo: '/logos/company2.png' },
    { name: 'Company 3', logo: '/logos/company3.png' },
    { name: 'Company 4', logo: '/logos/company4.png' },
    { name: 'Company 5', logo: '/logos/company5.png' },
    { name: 'Company 6', logo: '/logos/company6.png' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Trusted by Industry Leaders
          </motion.h2>
          <p className="text-gray-600">
            We're proud to work with some of the most respected names in the industry
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 