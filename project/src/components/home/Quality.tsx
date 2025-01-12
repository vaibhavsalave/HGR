import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Star } from 'lucide-react'; // Removed Certificate import

export const Quality = () => {
  const certifications = [
    {
      icon: Shield,
      title: 'ISO Certified',
      description: 'Meeting international quality standards'
    },
    {
      icon: CheckCircle,
      title: 'FSSAI Approved',
      description: 'Compliant with food safety regulations'
    },
    {
      icon: Star,
      title: 'HACCP Certified',
      description: 'Ensuring food safety at every step'
    },
    // Removed Certificate entry to resolve the error
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 -skew-y-6 transform origin-top-left" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Quality Assurance
          </motion.h2>
          <p className="text-gray-600">
            Our commitment to quality is backed by international certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <cert.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold ml-3">{cert.title}</h3>
              </div>
              <p className="text-gray-600">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 