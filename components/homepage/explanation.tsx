'use client'; // Required for animations
import { motion } from 'framer-motion';
import { FaChartLine, FaDatabase, FaCogs, FaRocket } from 'react-icons/fa';

const WhyCustomAIModels = () => {
  return (
    <section id='products' className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Train AI Models on Custom Data?
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg sm:text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Training AI models on custom data ensures that the models are tailored to your specific needs, providing accurate and actionable insights. This approach enhances performance, ensures data privacy, and delivers results that align with your business goals.
        </motion.p>

        {/* Why It's Important */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side: Why It's Important */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900">Why It's Important</h3>
            <p className="text-gray-600">
              Custom data allows AI models to understand your unique business context, leading to better decision-making and improved outcomes. Without custom data, AI models may produce generic results that don't address your specific challenges.
            </p>
            <ul className="space-y-4">
              {[
                'Tailored insights for your business.',
                'Improved accuracy and relevance.',
                'Enhanced data privacy and security.',
                'Better alignment with business goals.',
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-blue-600">✔</span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Side: How It's Implemented */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900">How It's Implemented</h3>
            <p className="text-gray-600">
              Implementing custom AI models involves several steps, from data collection and preparation to model training and deployment. Here's how we make it happen:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <FaChartLine size={24} className="text-blue-600" />,
                  title: 'Data Collection',
                  description: 'Gather relevant data from your business operations.',
                },
                {
                  icon: <FaDatabase size={24} className="text-purple-600" />,
                  title: 'Data Preparation',
                  description: 'Clean and preprocess the data for optimal model performance.',
                },
                {
                  icon: <FaCogs size={24} className="text-green-600" />,
                  title: 'Model Training',
                  description: 'Train AI models using state-of-the-art algorithms.',
                },
                {
                  icon: <FaRocket size={24} className="text-orange-600" />,
                  title: 'Deployment',
                  description: 'Deploy the trained models into your production environment.',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-2xl">{feature.icon}</div>
                    <h4 className="text-xl font-semibold text-gray-900">{feature.title}</h4>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default WhyCustomAIModels;