import React from 'react';
import { Hero } from '../components/home/Hero';
import { Features } from '../components/home/Features';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { Stats } from '../components/home/Stats';
import { Partners } from '../components/home/Partners';
import { Quality } from '../components/home/Quality';
import { Testimonials } from '../components/home/Testimonials';

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Stats />
      <Features />
      <FeaturedProducts />
      <Quality />
      
      {/* Mission Section */}
      <section className="py-20 bg-green-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-6 text-gray-800">Our Mission</h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-600">
              At HGR FOOD AND AGRO PRODUCT Pvt. Ltd., we are driven by a vision to lead the market with excellence. 
              We foster strong partnerships with our clients across diverse cities and collaborate with top sugar factories 
              to guarantee consistent quality and supply.
            </p>
          </div>
        </div>
      </section>
      
      <Testimonials />
      <Partners />
    </div>
  );
}