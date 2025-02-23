'use client'; // Required for animations
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              HALSEUS
            </h3>
            <p className="text-gray-300">
              Empowering businesses with cutting-edge AI solutions tailored to your needs.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-all duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-all duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-all duration-300"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h4 className="text-xl font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-blue-500 transition-all duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-blue-500 transition-all duration-300">
                  Products
                </a>
              </li>
              <li>
                <a href="/integration" className="text-gray-300 hover:text-blue-500 transition-all duration-300">
                  Integration
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-blue-500 transition-all duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h4 className="text-xl font-semibold text-white">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <FaMapMarkerAlt size={18} />
                <span>ST George's Park, San-Giljan, Malta</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <FaPhone size={18} />
                <span>+356 995 88 696</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <FaEnvelope size={18} />
                <span>info.halseus@gmail.com</span>
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h4 className="text-xl font-semibold text-white">Newsletter</h4>
            <p className="text-gray-300">
              Subscribe to our newsletter for the latest updates and Local AI insights.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Copyright */}
        <motion.div
          className="text-center text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          &copy; {new Date().getFullYear()} HALSEUS. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;