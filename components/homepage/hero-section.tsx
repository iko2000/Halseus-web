'use client'; // Required for animations
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="w-[100%] bg-black bg-cover bg-bottom h-screen sm:h-[100vh] flex justify-center items-center">
      <div className="text-center text-white max-w-4xl px-4">
        {/* Company Name and Slogan */}
        <motion.h1
          className="text-5xl sm:text-7xl text-blue-600 font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          HAL <span className='text-red-600'>SEUS</span>
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
        <motion.span
            className="inline-block mt-10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            Comming soon...
          </motion.span>
      </div>
    </section>
  );
};

export default HeroSection;