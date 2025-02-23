'use client'; // Required for animations and interactivity
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <a href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              HALSEUS
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            {[
              { name: 'Home', href: '#home' },
              { name: 'Products', href: '#products' },
              { name: 'About', href: '#about' },
              { name: 'Contact', href: '#contact' },
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-all duration-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                {link.name}
              </motion.a>
            ))}
            {/* Call to Action Button */}
            <motion.button
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Get Started
            </motion.button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white shadow-lg rounded-lg mt-4 py-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Products', href: '#products' },
                { name: 'About', href: '#about' },
                { name: 'Contact', href: '#contact' },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 px-4 py-2 transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
              {/* Call to Action Button */}
              <button
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 mx-4"
              >
                Get Started
              </button>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;