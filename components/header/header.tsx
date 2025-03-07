'use client';
import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Add this import
import TrueFocus from '../reactbits/focus';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current route
  const [activeLink, setActiveLink] = useState(pathname); // Initialize with the current route

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleLinkClick = useCallback((href: string) => {
    setActiveLink(href);
    setIsMenuOpen(false); // Close mobile menu on link click
  }, []);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Integration', href: '/integration' },
    { name: 'Contact', href: '/contact' },
  ];

  // Update activeLink when the route changes
  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.querySelector('.mobile-menu');
      const menuButton = document.querySelector('.menu-button');
      if (
        mobileMenu &&
        !mobileMenu.contains(event.target as Node) &&
        !menuButton?.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white shadow-sm p-2 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/" aria-label="Home">
              <TrueFocus
                sentence="HALSEUS AI"
                manualMode={false}
                blurAmount={5}
                borderColor="red"
                animationDuration={2}
                pauseBetweenAnimations={5}
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
                    activeLink === link.href ? 'text-lg font-semibold' : 'text-base'
                  }`}
                  onClick={() => handleLinkClick(link.href)}
                  aria-label={link.name}
                >
                  {link.name}
                </Link>
                {activeLink === link.href && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="menu-button text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Full-Screen Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="mobile-menu fixed inset-0 bg-black bg-opacity-75 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="fixed inset-0 bg-white w-full h-full flex flex-col items-center justify-center"
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-100%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <button
                  onClick={toggleMenu}
                  className="absolute top-6 right-6 text-gray-700 hover:text-blue-600 focus:outline-none"
                  aria-label="Close menu"
                >
                  <FaTimes size={24} />
                </button>
                <nav className="flex flex-col space-y-6 text-center">
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
                        className={`text-gray-700 hover:text-blue-600 text-2xl transition-all duration-300 ${
                          activeLink === link.href ? 'font-semibold' : 'font-normal'
                        }`}
                        onClick={() => handleLinkClick(link.href)}
                        aria-label={link.name}
                      >
                        {link.name}
                      </Link>
                      {activeLink === link.href && (
                        <motion.div
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.div>
                  ))}
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;