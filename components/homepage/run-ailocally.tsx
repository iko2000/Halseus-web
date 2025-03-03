'use client'; // Required for animations
import { motion } from 'framer-motion';
import Image from 'next/image'; // Assuming you're using Next.js for optimized images
import useAppStore from '@/app/infrastucture/store/store';
import Link from 'next/link';

const RunAILocally = ({ imageSrc }:any) => {

  const {state1change} = useAppStore();

  return (
    <motion.section
      className="w-full p-10 max-w-9xl mx-auto bg-white rounded-3xl overflow-hidden shadow-lg flex flex-col lg:flex-row"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      
      {/* Image Side */}
      <div className="w-full lg:w-1/2 relative">
        <Image
          src={imageSrc} // Pass the image source as a prop
          alt="Ai model picture"
          width={800}
          height={600}
          className="w-full rounded-xl h-full object-cover"
        />
     
      </div>

      {/* Text Side */}
      <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16">
        {/* Title */}
        <motion.h3
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Run AI Locally
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-lg text-gray-600 mb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Ensure <span className="font-semibold text-blue-600">data security</span> and <span className="font-semibold text-purple-600">privacy</span> by running AI models locally, without exposing sensitive information to third-party servers.
        </motion.p>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {[
            { icon: '🚀', title: 'High Performance', description: 'Optimized for local hardware.' },
            { icon: '🔐', title: 'Data Protection', description: 'No data leaves your premises.' },
            { icon: '⚡', title: 'Fast Deployment', description: 'Seamless integration with your systems.' },
            { icon: '🌍', title: 'Offline Capability', description: 'Operate without internet access.' },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              <div className="text-3xl mr-4 text-gray-700">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="flex justify-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <Link
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            href='/products/ai-local'
          >
            Explore LOCAL AI
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RunAILocally;