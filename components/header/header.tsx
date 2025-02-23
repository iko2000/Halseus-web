'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';
import halseuslogo from "../../public/assets/HALSEUS.png";
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home'); // Track active link

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (name: string) => {
    setActiveLink(name); // Set active link on click
  };

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '#products' },
    { name: 'Integration', href: '/integration' },
    { name: 'Contact', href: '/contact' },
  ];

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
            <Link href="/">
              <Image
                src={halseuslogo}
                width={50}
                height={50}
                alt="Halseus Logo"
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            {links.map((link, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <Link
                  href={link.href}
                  className={`text-gray-700 hover:text-blue-600 transition-all duration-300 ${
                    activeLink === link.name ? 'text-lg font-semibold' : 'text-base'
                  }`}
                  onClick={() => handleLinkClick(link.name)}
                >
                  {link.name}
                </Link>
                {activeLink === link.name && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
            {/* Call to Action Button */}
         
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
              {links.map((link, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className={`text-gray-700 hover:text-blue-600 px-4 py-2 transition-all duration-300 ${
                      activeLink === link.name ? 'text-lg font-semibold' : 'text-base'
                    }`}
                    onClick={() => {
                      handleLinkClick(link.name);
                      toggleMenu(); // Close menu on link click
                    }}
                  >
                    {link.name}
                  </Link>
                  {activeLink === link.name && (
                    <motion.div
                      className="absolute bottom-0 left-4 w-[calc(100%-2rem)] h-0.5 bg-blue-600"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              ))}
              {/* Call to Action Button */}
            
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;