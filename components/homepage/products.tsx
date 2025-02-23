'use client'; // Required for animations
import { motion } from 'framer-motion';

const ProductsSection = () => {
  const products = [
    {
      title: 'Train AI Models on Company Data',
      description: 'Custom AI models trained specifically on your company’s data for accurate and tailored insights.',
      icon: '🧠', // Emoji or custom icon
      color: 'from-blue-600 to-purple-600', // Gradient colors
    },
    {
      title: 'Run AI Models Locally',
      description: 'Ensure data security and privacy by running AI models locally, without exposing sensitive information.',
      icon: '🔒',
      color: 'from-green-600 to-teal-600',
    },
    {
      title: 'Create Custom GPT Models',
      description: 'Build GPT models tailored to your company’s needs, ensuring seamless integration with your workflows.',
      icon: '🤖',
      color: 'from-orange-600 to-red-600',
    },
    {
      title: 'Adjust AI to Company Needs',
      description: 'Fine-tune AI models to align perfectly with your business goals and operational requirements.',
      icon: '⚙️',
      color: 'from-purple-600 to-pink-600',
    },
  ];

  return (
    <section
      id="products"
      className="min-h-screen min-w-full bg-gradient-to-br from-gray-900 to-black py-20 px-4 sm:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Products
        </motion.h2>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="group relative bg-gray-800 rounded-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              {/* Gradient Background Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Product Icon */}
              <div className="text-6xl mb-4 text-center">{product.icon}</div>

              {/* Product Title */}
              <h3 className="text-2xl font-semibold text-white mb-2 text-center">
                {product.title}
              </h3>

              {/* Product Description */}
              <p className="text-gray-300 text-center">{product.description}</p>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/50 rounded-lg transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;