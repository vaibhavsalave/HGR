import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2, Target, Eye, Users, MapPin, Phone, ChevronRight,
  Milk, Scale, Award, Leaf, Droplet, Star,
  TrendingUp, Shield, Truck, Factory
} from 'lucide-react';
import logo from '../../public/logo/WhatsApp Image 2025-01-01 at 12.40.54 PM.jpeg';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const statsAnimation = {
  initial: { scale: 0.5, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { type: "spring", stiffness: 100 }
};

const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    rotate: [0, -5, 5, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#e0f2f1] to-[#c8e6c9]">
      {/* Enhanced Hero Section with Logo */}
      <motion.section 
        className="relative py-32 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M0 0h20L0 20z"/%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        {/* Enhanced Floating Elements */}
        <motion.div 
          className="absolute top-20 left-20 text-[#a5d6a7] opacity-30"
          animate={floatingAnimation}
        >
          <Leaf className="w-32 h-32" />
        </motion.div>
        <motion.div 
          className="absolute bottom-20 right-20 text-[#a5d6a7] opacity-30"
          animate={{
            ...floatingAnimation.animate,
            transition: { ...floatingAnimation.animate.transition, delay: 1 }
          }}
        >
          <Droplet className="w-32 h-32" />
        </motion.div>
        
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-5xl mx-auto relative"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            {/* Enhanced Company Logo */}
            <motion.div
              className="w-48 h-48 mx-auto mb-12 relative group"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-[#c8e6c9] to-[#a5d6a7] rounded-full shadow-xl"
                animate={{
                  boxShadow: ["0 0 20px rgba(0,0,0,0.1)", "0 0 40px rgba(0,0,0,0.2)", "0 0 20px rgba(0,0,0,0.1)"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <img
                src={logo}
                alt="HGR FOOD AND AGRO PRODUCT"
                className="w-full h-full object-contain relative z-10 p-4 rounded-full"
              />
              <motion.div
                className="absolute inset-0 border-4 border-[#a5d6a7] rounded-full"
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              ></motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#388e3c] via-[#43a047] to-[#66bb6a]">
                About HGR FOOD AND AGRO PRODUCT
              </h1>
              <motion.p 
                className="text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                A leader in dairy and agro-related products, committed to quality and innovation. 
                We bring nature's goodness to your doorstep with our premium products.
              </motion.p>
            </motion.div>

            <motion.div 
              className="flex justify-center gap-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 30px -12px rgba(0, 0, 0, 0.2)"
                }}
                className="px-10 py-5 bg-gradient-to-r from-[#d57e2e] to-[#e8a45c] text-white rounded-2xl font-medium shadow-xl flex items-center gap-3 cursor-pointer transform transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Award className="w-7 h-7" />
                <span className="text-lg">Our Legacy</span>
              </motion.div>
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 30px -12px rgba(0, 0, 0, 0.2)"
                }}
                className="px-10 py-5 bg-white text-[#d57e2e] rounded-2xl font-medium shadow-xl flex items-center gap-3 cursor-pointer transform transition-all duration-300"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Users className="w-7 h-7" />
                <span className="text-lg">Meet Our Team</span>
              </motion.div>
            </motion.div>

            {/* Added Achievement Stats */}
            <motion.div 
              className="grid grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {[
                { icon: Star, label: "Quality", value: "Premium" },
                { icon: TrendingUp, label: "Growth", value: "25% YoY" },
                { icon: Shield, label: "Trust", value: "100%" },
                { icon: Factory, label: "Facilities", value: "State-of-art" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl shadow-lg flex items-center justify-center text-[#388e3c]"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <stat.icon className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-[#388e3c] mb-1">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </motion.section>

      {/* Enhanced Company Overview */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M0 0h20L0 20z"/%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
              >
                <h2 className="text-5xl font-bold mb-8 flex items-center gap-4">
                  <Building2 className="w-12 h-12 text-[#388e3c]" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#388e3c] to-[#66bb6a]">
                    Company Overview
                  </span>
                </h2>
                <p className="text-gray-600 text-xl leading-relaxed mb-8">
                  HGR FOOD AND AGRO PRODUCT Pvt. Ltd. stands as a prominent leader in the dairy and agro-related products industry. 
                  Our comprehensive range of products includes premium dairy items and high-quality agricultural commodities.
                </p>
              </motion.div>

              <div className="space-y-6">
                {[
                  "Premium dairy products manufacturing",
                  "Sugar trading partnerships with leading factories",
                  "Extensive distribution network across major cities"
                ].map((text, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10, backgroundColor: "rgba(213, 126, 46, 0.1)" }}
                    className="flex items-center gap-6 bg-green-50 p-6 rounded-2xl transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
                      <ChevronRight className="w-7 h-7 text-[#388e3c]" />
                    </div>
                    <span className="text-gray-700 font-medium text-lg">{text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {[
                { icon: Milk, title: "Dairy Products", desc: "Premium quality milk and dairy products" },
                { icon: Scale, title: "Sugar Trading", desc: "Partnerships with reputable sugar factories" },
                { icon: Truck, title: "Distribution", desc: "Extensive network across major cities" },
                { icon: Award, title: "Quality", desc: "Commitment to excellence" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 25px 30px -12px rgba(0, 0, 0, 0.2)"
                  }}
                  className="bg-gradient-to-br from-[#e8f5e9] to-white p-8 rounded-2xl shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ rotate: 5 }}
                    className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6"
                  >
                    <item.icon className="w-10 h-10 text-[#388e3c]" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3 text-[#388e3c]">{item.title}</h3>
                  <p className="text-gray-600 text-lg">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Mission & Vision Section */}
      <section className="py-24 bg-gradient-to-br from-[#e8f5e9] to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M0 0h20L0 20z"/%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description: "Our mission is to scale operations, dominate the market, and maintain strong client relationships while delivering premium quality products to our customers.",
                points: [
                  "Market dominance through quality products",
                  "Strong client relationships",
                  "Extensive retail chain network"
                ]
              },
              {
                icon: Eye,
                title: "Our Vision",
                description: "We envision becoming the market leader in dairy and agro products through continuous innovation, expanded product offerings, and enhanced supply chain efficiency.",
                points: [
                  "Product range expansion",
                  "Supply chain optimization",
                  "Market leadership"
                ]
              }
            ].map((section, index) => (
              <motion.div
                key={index}
                className="bg-white p-12 rounded-3xl shadow-xl relative overflow-hidden group"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="absolute top-0 right-0 w-40 h-40 bg-[#e8f5e9] rounded-bl-full opacity-20 group-hover:scale-110 transition-transform duration-500"
                  animate={{
                    rotate: [0, 90, 0],
                    transition: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                ></motion.div>

                <div className="flex items-center gap-6 mb-10">
                  <motion.div
                    className="w-20 h-20 bg-[#e8f5e9] rounded-2xl flex items-center justify-center shadow-inner"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.5 }}
                  >
                    <section.icon className="w-10 h-10 text-[#388e3c]" />
                  </motion.div>
                  <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#388e3c] to-[#66bb6a]">
                    {section.title}
                  </h2>
                </div>

                <p className="text-gray-600 text-xl mb-10 leading-relaxed">
                  {section.description}
                </p>

                <ul className="space-y-5">
                  {section.points.map((point, pointIndex) => (
                    <motion.li
                      key={pointIndex}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 bg-[#e8f5e9] p-5 rounded-xl group"
                    >
                      <motion.div
                        className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md group-hover:bg-[#388e3c] transition-colors duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <ChevronRight className="w-6 h-6 text-[#388e3c] group-hover:text-white transition-colors duration-300" />
                      </motion.div>
                      <span className="text-gray-700 text-lg font-medium">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Capacity */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h2 className="text-3xl font-bold mb-4">Daily Production Capacity</h2>
            <p className="text-gray-600">Our state-of-the-art facilities enable us to meet high-volume demands</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Paneer', value: '2,500 Kg' },
              { label: 'Cream', value: '990 Kg' },
              { label: 'Curd', value: '7,000 Kg' },
              { label: 'Milk Packing', value: '8,000/hr' },
              { label: 'Lassi', value: '3,000 Kg' },
              { label: 'Tak', value: '3,000 L' },
              { label: 'Khava', value: '2,000 Kg' },
              { label: 'Chakka', value: '1,000 Kg' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-[#e8f5e9] p-6 rounded-xl text-center"
                variants={statsAnimation}
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-bold text-[#388e3c] mb-2">{stat.value}</h3>
                <p className="text-gray-700">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gradient-to-br from-[#e8f5e9] to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-600">Meet the visionaries behind our success</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-xl"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold mb-4">Akash Dattatray Chorghe</h3>
              <p className="text-gray-600 mb-4">Director</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#388e3c] mt-1" />
                  <span className="text-gray-700">Master's of Business Administration graduate</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#388e3c] mt-1" />
                  <span className="text-gray-700">Founded Sai Akash Enterprises in 2018</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#388e3c] mt-1" />
                  <span className="text-gray-700">Established partnerships with major sugar factories</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-xl"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold mb-4">Ganesh Kakasaheb Memane</h3>
              <p className="text-gray-600 mb-4">Director</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#388e3c] mt-1" />
                  <span className="text-gray-700">Experienced accountant turned dairy industry expert</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#388e3c] mt-1" />
                  <span className="text-gray-700">Manages large-scale dairy operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#388e3c] mt-1" />
                  <span className="text-gray-700">Visionary leader in milk collection and processing</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <div className="bg-[#e8f5e9] p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-[#388e3c]" />
                Office Location
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Registered Office:</strong><br />
                Office No. 01, Chorghe Building,<br />
                At Post Uruli Kanchan,<br />
                Opposite Mahatma Gandhi High School,<br />
                Taluka Haveli, District Pune
              </p>
              <p className="text-gray-700">
                <strong>Factory Address:</strong><br />
                Same as above (Owned Property)
              </p>
            </div>

            <div className="bg-[#e8f5e9] p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Phone className="w-6 h-6 text-[#388e3c]" />
                Contact Details
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Akash Chorghe</p>
                  <p className="text-gray-700">Director</p>
                  <p className="text-[#388e3c]">+91 88898963608</p>
                </div>
                <div>
                  <p className="font-semibold">Ganesh Memane</p>
                  <p className="text-gray-700">Director</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}; 