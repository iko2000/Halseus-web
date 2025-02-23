'use client'; // Required for animations
import { motion } from 'framer-motion';
import {FaArrowDown} from "react-icons/fa"


const HeroSection = () => {
  return (
    <section className="w-[100%] bg-gradient-to-br from-black via-gray-900 to-black bg-cover bg-bottom h-screen sm:h-[100vh] flex justify-center items-center relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-red-600/10 animate-moveBackground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      />

      <div className="text-center text-white max-w-4xl px-4 relative z-10">
        {/* Company Name and Slogan */}
        <motion.h1
          className="text-5xl sm:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          HAL <span className="text-red-600">SEUS</span>
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
        >
          Local AI Solutions
        </motion.p>

        {/* Animated Text */}
        <motion.div
          className="text-lg sm:text-xl text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
        >
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            Everyone uses AI,
          </motion.span>{' '}
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            no one wants to disclose data.
          </motion.span>
        </motion.div>

        {/* Call to Action Button */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
          <button
            className="px-8 flex gap-3 py-3 bg-gradient-to-r from-blue-600 to-red-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
            onClick={() => {
              const productsSection = document.getElementById('products');
              if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Explore
            <FaArrowDown size={18} />
          </button>
        </motion.div>
      </div>

      {/* Floating Particles Animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: Math.random() * 2,
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;