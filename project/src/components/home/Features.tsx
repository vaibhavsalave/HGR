import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplet, Award, Shield, Clock, Heart } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Pure and natural dairy products straight from our farms",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Droplet,
    title: "Fresh Daily",
    description: "Fresh products delivered to your doorstep every day",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Highest quality standards in dairy production",
    color: "from-yellow-500 to-yellow-600"
  },
  {
    icon: Shield,
    title: "Food Safety",
    description: "FSSAI certified with strict quality controls",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Clock,
    title: "24/7 Delivery",
    description: "Round-the-clock delivery at your convenience",
    color: "from-red-500 to-red-600"
  },
  {
    icon: Heart,
    title: "Customer Care",
    description: "Dedicated support for all your dairy needs",
    color: "from-pink-500 to-pink-600"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: {
      type: "spring",
      stiffness: 300,
      duration: 0.6
    }
  }
};

export const Features: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium mb-3"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
          >
            Our Premium Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 text-sm max-w-xl mx-auto"
          >
            Experience the difference with our premium dairy products and exceptional service
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-lg bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-lg">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.color} p-2 mb-3 text-white shadow-md mx-auto`}
                >
                  <feature.icon className="w-full h-full" />
                </motion.div>

                {/* Content */}
                <h3 className="text-sm font-bold text-gray-900 mb-1 text-center">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-600 text-center">
                  {feature.description}
                </p>

                {/* Decorative Elements */}
                <div className="absolute top-1 right-1 w-8 h-8 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-tr from-white/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center justify-center space-x-1 bg-green-50 px-4 py-2 rounded-full">
            <Award className="w-4 h-4 text-green-600" />
            <span className="text-green-800 text-xs font-medium">Trusted by thousands of customers</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 