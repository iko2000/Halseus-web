'use client';
import { useState, useEffect } from 'react';
import FlowingMenu from '@/components/reactbits/collections';
import { motion } from 'framer-motion';
import Productivitycomponent from "@/components/tailwind-UI/prodactivity";

const ProductsPageContent = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const productItems = [
    { 
      id: 'ai-gpt',
      link: '/products/ai-gpt', 
      text: 'Customized ChatGPT', 
      category: 'enterprise',
      description: 'Build powerful AI chatbots tailored to your business needs',
      image: "https://images.pexels.com/photos/16245252/pexels-photo-16245252/free-photo-of-a-laptop-computer-with-the-word-chatgpt-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
    },
    { 
      id: 'ai-training',
      link: '/products/ai-training', 
      text: 'Train AI Models', 
      category: 'enterprise',
      description: 'Create custom AI solutions with your proprietary data',
      image: 'https://images.pexels.com/photos/965345/pexels-photo-965345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
    },
    { 
      id: 'ai-local',
      link: '/products/ai-local', 
      text: 'Local AI Deployment', 
      category: 'security',
      description: 'Run powerful AI models securely within your infrastructure',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg' 
    },
  ];

  // Filter items based on active category
  const filteredItems = activeCategory === 'all' 
    ? productItems 
    : productItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <Productivitycomponent/>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-3 px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium"
          >
            Our Solutions
          </motion.div>
          
          <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            AI-Powered 
            <span className="relative mx-3">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                Solutions
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-indigo-100 rounded-sm -z-10"></span>
            </span>
            for Your Business
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Leverage cutting-edge AI technology to transform your operations,
            enhance customer experience, and drive business growth.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button 
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === 'all' 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Solutions
            </button>
            <button 
              onClick={() => setActiveCategory('enterprise')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === 'enterprise' 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Enterprise AI
            </button>
            <button 
              onClick={() => setActiveCategory('security')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === 'security' 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Secure Solutions
            </button>
          </div>
        </motion.div>
      </section>

      {/* Products Showcase with FlowingMenu */}
      <section className="relative pb-32 px-4 sm:px-2 lg:px-2 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-[600px] relative mx-auto"
        >
          <FlowingMenu items={filteredItems} />
        </motion.div>
        
        {/* Product Details */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.text} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.text}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a 
                  href={item.link} 
                  className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                >
                  Learn more
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-indigo-600 to-violet-600 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to transform your business with AI?</h2>
          <p className="text-indigo-100 mb-8 max-w-3xl mx-auto">
            Our team of experts will help you identify the right AI solutions for your specific needs
            and guide you through the implementation process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact" 
              className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Contact Us
            </a>
            <a 
              href="/contact" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
            >
              Request Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPageContent;