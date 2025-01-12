import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, Award, Clock } from 'lucide-react';

const slides = [
  {
    title: "Pure & Fresh Milk",
    tagline: "100% Pure Cow Milk",
    subtitle: "Premium Quality Dairy",
    description: "Experience the richness of pure, farm-fresh milk delivered to your doorstep daily.",
    features: ["Farm Fresh Daily", "100% Pure", "No Preservatives"],
    image: "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?auto=format&fit=crop&q=80",
    color: "from-[#2C5530] to-[#1a4423]",
    badge: "Best Seller"
  },
  {
    title: "Natural Ghee",
    tagline: "Traditional A2 Cow Ghee",
    subtitle: "Traditional Goodness",
    description: "Pure cow ghee made with traditional methods for authentic taste and aroma.",
    features: ["100% Natural", "No Chemicals", "Rich in Vitamins"],
    image: "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?auto=format&fit=crop&q=80",
    color: "from-amber-700 to-amber-900",
    badge: "Premium"
  },
  {
    title: "Fresh Paneer",
    tagline: "Soft & Fresh Daily",
    subtitle: "Daily Fresh",
    description: "Soft and fresh paneer made from pure milk, perfect for your favorite recipes.",
    features: ["Fresh Daily", "High Protein", "100% Pure"],
    image: "https://images.unsplash.com/photo-1567982047351-76b6f93e38ee?auto=format&fit=crop&q=80",
    color: "from-orange-600 to-orange-900",
    badge: "New Arrival"
  }
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [displayText, setDisplayText] = useState(0); // New state for displaying text

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setDisplayText(0); // Reset display text when changing slides
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const textTimer = setInterval(() => {
      setDisplayText((prev) => prev + 1);
    }, ); // Change text every second
    return () => clearInterval(textTimer);
  }, [currentSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentSlide((prev) => (prev + newDirection + slides.length) % slides.length);
    setDisplayText(0); // Reset display text when paginating
  };

  return (
    <div className="relative h-[90vh] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].color}`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white relative"
              >
                {/* Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-4 -right-4 bg-yellow-500 text-white px-4 py-1 rounded-full font-bold shadow-lg transform -rotate-12"
                >
                  {slides[currentSlide].badge}
                </motion.div>

                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-block px-4 py-2 rounded-full bg-white/10 text-sm font-medium mb-4"
                >
                  {slides[currentSlide].subtitle}
                </motion.span>

                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-5xl lg:text-7xl font-bold mb-2"
                >
                  {slides[currentSlide].title}
                </motion.h1>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-2xl lg:text-3xl font-semibold mb-6 text-yellow-400"
                >
                  {slides[currentSlide].tagline}
                </motion.h2>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-lg text-white/80 mb-6 max-w-xl"
                >
                  {displayText < 1 ? slides[currentSlide].description.split(' ').slice(0, 1).join(' ') : 
                   displayText < 2 ? slides[currentSlide].description.split(' ').slice(0, 2).join(' ') : 
                   slides[currentSlide].description}
                </motion.p>

                {/* Features */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
                >
                  {slides[currentSlide].features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link
                    to="/products"
                    className="inline-block px-8 py-4 bg-white text-green-800 font-bold rounded-xl hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Order Now
                  </Link>
                  <div className="flex items-center space-x-4 text-white/90">
                    <Award className="w-6 h-6" />
                    <span>Premium Quality</span>
                    <Clock className="w-6 h-6 ml-4" />
                    <span>24/7 Delivery</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="relative flex justify-center items-center"
              >
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 2, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                    <div className="relative rounded-xl overflow-hidden">
                      <img
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        className="w-full h-[50vh] object-cover rounded-lg shadow-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                        <p className="text-white text-lg font-semibold text-center">
                          {slides[currentSlide].title}
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white/40" />
                    <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white/40" />
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white/40" />
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white/40" />
                  </div>
                </motion.div>
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-8 -right-8 bg-white/90 backdrop-blur rounded-full p-4 shadow-lg"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <img
                    src="/certifications/fssai.png"
                    alt="FSSAI Certified"
                    className="w-16 h-16 object-contain"
                  />
                </motion.div>

                {/* Product Label */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg"
                >
                  <span className="text-green-800 font-semibold">{slides[currentSlide].title}</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all"
        onClick={() => paginate(1)}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
              setDisplayText(0); // Reset display text when changing slides
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}; 