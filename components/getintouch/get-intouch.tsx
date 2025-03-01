'use client'; // Required for animations
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation'; // For navigation (Next.js)

const ContactButton = () => {
  const router = useRouter(); // Initialize the router

  return (
    <motion.button
      onClick={() => router.push('/contact')} // Navigate to the contact page
      className="relative mt-5 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Button Text */}
      <span className="relative z-10">Get in Touch</span>

      {/* Shiny Overlay Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-lg shadow-lg glow animate-glow" />
    </motion.button>
  );
};

export default ContactButton;