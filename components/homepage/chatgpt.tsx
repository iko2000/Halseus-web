'use client'; // Required for animations
import { motion } from 'framer-motion';
import { FaMagic, FaCode, FaRocket } from 'react-icons/fa';
import Image from 'next/image'; // Import Next.js Image component for optimized local images
import Particles from '../reactbits/background';

const CustomChatGPT = () => {
  return (
    <section 
    id='products' 
    className="w-full min-h-screen bg-blue relative flex justify-center p-5 items-center overflow-hidden">
    {/* Particles Background */}
    <div className="absolute inset-0 z-0">
      <Particles
        particleColors={['#red', '#red']}
        particleCount={500}
        particleSpread={10}
        speed={1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-1" />
  
    {/* Content */}
    <div className="relative z-10 text-center px-4 sm:px-8">
      {/* Minimal Text */}
      <motion.h6
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
       We Customize ChatGPT for you
      </motion.h6>
      <motion.p
        className="text-lg sm:text-xl text-gray-300 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Straight in your browser.
      </motion.p>
  
      {/* Features */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {[
          {
            icon: <FaMagic size={40} className="text-blue-500" />,
            title: 'Easy Customization',
            description: 'We Tailor ChatGPT to your needs with a simple interface.',
          },
          {
            icon: <FaCode size={40} className="text-purple-500" />,
            title: 'No Coding Required',
            description: 'We Build and deploy models without writing a single line of code.',
          },
          {
            icon: <FaRocket size={40} className="text-orange-500" />,
            title: 'Instant Deployment',
            description: 'We Deploy your custom model in seconds.',
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold text-white text-center mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-300 text-center">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
  
      {/* Call to Action */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <a
          href='/products/ai-gpt'
          className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
        >
          See More
        </a>
      </motion.div>
    </div>
  </section>
  );
};

export default CustomChatGPT;