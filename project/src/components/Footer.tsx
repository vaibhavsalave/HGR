import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../../public/logo/WhatsApp Image 2025-01-01 at 12.40.54 PM.jpeg' ;

export const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', path: '/' },
        { label: 'Products', path: '/products' },
        { label: 'About Us', path: '/about' },
        { label: 'Contact', path: '/contact' },
      ],
    },
    {
      title: 'Products',
      links: [
        { label: 'Milk Products', path: '/products#milk' },
        { label: 'Milk Beverages', path: '/products#beverages' },
        { label: 'Milk Byproducts', path: '/products#byproducts' },
        { label: 'Sugar', path: '/products#sugar' },
      ],
    },
    {
      title: 'Contact Us',
      content: [
        { label: 'Email', value: 'info@hgrfood.com' },
        { label: 'Phone', value: '+91 123 456 7890' },
        { label: 'Address', value: 'HGR Food and Agro Product Pvt Ltd, India' },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <motion.img
                src={logo}
                alt="HGR Food and Agro"
                className="h-16 w-auto"
                whileHover={{ scale: 1.05 }}
              />
            </Link>
            <p className="text-gray-600 mt-4 text-sm">
              Enjoy Test with Purity - Your trusted source for premium dairy products.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <motion.a
                  key={social}
                  href={`#${social}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center group transition-colors hover:bg-[#2C5530]"
                >
                  <svg
                    className="w-5 h-5 text-[#2C5530] group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {/* Social Media Icons Paths */}
                    {social === 'facebook' && (
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    )}
                    {social === 'twitter' && (
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    )}
                    {social === 'instagram' && (
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m8.4 2H7.8C5.7 4 4 5.7 4 7.8v8.4c0 2.1 1.7 3.8 3.8 3.8h8.4c2.1 0 3.8-1.7 3.8-3.8V7.8C20 5.7 18.3 4 16.2 4z" />
                    )}
                    {social === 'linkedin' && (
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M2 4a2 2 0 114 0 2 2 0 01-4 0z" />
                    )}
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-[#2C5530] mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links?.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-[#2C5530] transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                {section.content?.map((item) => (
                  <li key={item.label} className="text-sm">
                    <span className="text-gray-500">{item.label}: </span>
                    <span className="text-gray-600">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} HGR Food and Agro Product Pvt Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-600 hover:text-[#2C5530] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-600 hover:text-[#2C5530] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// service_@2408