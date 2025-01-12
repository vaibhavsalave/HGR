import React from 'react';
import { motion } from 'framer-motion';
import { Users, Factory, Truck, Award } from 'lucide-react';

export const Stats = () => {
  const stats = [
    { icon: Users, count: '500+', label: 'Happy Clients', color: 'from-blue-500 to-blue-600' },
    { icon: Factory, count: '15+', label: 'Production Units', color: 'from-green-500 to-green-600' },
    { icon: Truck, count: '1000+', label: 'Daily Deliveries', color: 'from-purple-500 to-purple-600' },
    { icon: Award, count: '25+', label: 'Years Experience', color: 'from-yellow-500 to-yellow-600' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <motion.h3 
                className="text-3xl font-bold mt-4 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
              >
                {stat.count}
              </motion.h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 