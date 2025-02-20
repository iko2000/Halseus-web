'use client'
import { motion } from "framer-motion";

const RunAILocally = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-indigo-900 p-6">
      <motion.div
        className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto border border-white/20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <motion.h1
            className="text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Run AI Models Locally
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Secure, Fast, and Fully Compliant with Data Protection Regulations
          </motion.p>
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="bg-transparent border border-white/50 hover:border-white text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </motion.div>
        </div>

        {/* AI Animation */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative w-64 h-64">
            {/* AI Chip */}
            <motion.div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-blue-500/20 rounded-full w-24 h-24 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="bg-blue-500 rounded-full w-12 h-12"></div>
            </motion.div>

            {/* Data Nodes */}
            {[0, 1, 2,3].map((i) => (
              <motion.div
                key={i}
                className="absolute bg-white/10 rounded-full w-8 h-8"
                style={{
                  top: `${Math.sin((i * 2 * Math.PI) / 3) * 80 + 80}px`,
                  left: `${Math.cos((i * 2 * Math.PI) / 3) * 80 + 80}px`,
                }}
                animate={{ scale: [1, 1.6, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RunAILocally;