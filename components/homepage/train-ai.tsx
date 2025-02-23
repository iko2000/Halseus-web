'use client'; // Required for animations
import { motion } from 'framer-motion';
import { FaChartLine, FaDatabase, FaCogs, FaRocket } from 'react-icons/fa';
import Image from 'next/image'; // Assuming you're using Next.js for optimized images

const TrainAIModels = ({ imageSrc }:any) => {
  return (
    <section className= "w-full bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Train AI Models on Custom Data
        </motion.h2>

        {/* Split Layout: Features and Image */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Features Side */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  icon: <FaChartLine size={40} className="text-blue-600" />,
                  title: 'Data Analysis',
                  description: 'Analyze your data to identify patterns and insights for better model training.',
                },
                {
                  icon: <FaDatabase size={40} className="text-purple-600" />,
                  title: 'Data Preparation',
                  description: 'Clean, preprocess, and prepare your data for optimal AI model performance.',
                },
                {
                  icon: <FaCogs size={40} className="text-green-600" />,
                  title: 'Model Training',
                  description: 'Train AI models using state-of-the-art algorithms tailored to your data.',
                },
                {
                  icon: <FaRocket size={40} className="text-orange-600" />,
                  title: 'Deployment',
                  description: 'Deploy your trained models seamlessly into production environments.',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                >
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900 text-center mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={imageSrc} // Pass the image source as a prop
                alt="Train AI Models"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <button
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            onClick={() => alert('Get Started Clicked!')}
          >
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainAIModels;