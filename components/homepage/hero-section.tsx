'use client'; // Required for animations
import { motion } from 'framer-motion';
import {FaArrowDown} from "react-icons/fa"
import RotatingText from '../reactbits/roating.-text';
import ShinyText from '../reactbits/shiny-button';


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
          HAL<span className="text-red-600">SEUS</span>
        </motion.h1>
        <motion.span
          className="text-xl sm:text-2xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
        >
          Local AI Solutions
        </motion.span>

        {/* Animated Text */}
        <motion.div
          className="text-lg sm:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
        >
  <div className="flex border-solid p-2 rounded-2xl items-center justify-center gap-3">
  {/* Static Word */}
  <span className="text-white text-lg sm:text-xl md:text-2xl font-bold">
    Make AI 
  </span>

  {/* RotatingText Component */}
  <RotatingText
    texts={['Local', 'Trained', 'Adjusted', 'Safe']}
    mainClassName="px-16 sm:px-2 md:px-3 bg-blue-500 text-white overflow-hidden sm:py-1 md:py-2 justify-center rounded-lg"
    staggerFrom={"last"}
    initial={{ y: "100%" }}
    animate={{ y: 0 }}
    exit={{ y: "-120%" }}
    staggerDuration={0.025}
    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
    transition={{ type: "spring", damping: 30, stiffness: 400 }}
    rotationInterval={2000}
  />
</div>
        </motion.div>

        {/* Call to Action Button */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >

          <button
            className="px-8 flex gap-3 py-3 bg-black text-white font-semibold rounded-lg hover:from-blue-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
            onClick={() => {
              const productsSection = document.getElementById('products');
              if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
          <ShinyText text="Explore" disabled={false} speed={3} className='custom-class' />
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