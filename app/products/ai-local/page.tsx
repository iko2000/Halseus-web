'use client'; // Required for animations
import { motion } from 'framer-motion';
import { FaArrowLeft, FaShieldAlt, FaRocket, FaCogs, FaChartLine } from 'react-icons/fa';
import { useRouter } from 'next/navigation'; // For navigation (Next.js)

const RunningAILocallyArticle = () => {
  const router = useRouter(); // Initialize the router

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-gray-100 mt-10 py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.button
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-all duration-300 mb-8"
          onClick={() => router.back()} // Go back to the previous page
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FaArrowLeft />
          <span>Back</span>
        </motion.button>

        {/* Article Title */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Running AI Locally: The Future of Data Privacy and Performance
        </motion.h1>

        {/* Author and Date */}
        <motion.div
          className="flex items-center space-x-4 text-gray-600 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          
        </motion.div>

        {/* Article Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="text-lg text-gray-600">
              Running AI models locally is revolutionizing how businesses and individuals leverage artificial intelligence. By keeping data on-premises, you gain unparalleled control, security, and performance. Let’s explore why running AI locally is the future.
            </p>
          </motion.div>

          {/* Why Run AI Locally? */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900">Why Run AI Locally?</h2>
            <p className="text-lg text-gray-600">
              Running AI models locally offers several key advantages over cloud-based solutions. Here’s why it’s becoming the preferred choice for businesses and individuals alike:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <FaShieldAlt size={40} className="text-blue-600" />,
                  title: 'Data Privacy',
                  description: 'Keep sensitive data on your devices, ensuring it never leaves your premises.',
                },
                {
                  icon: <FaRocket size={40} className="text-purple-600" />,
                  title: 'High Performance',
                  description: 'Run models faster without relying on external servers or internet connectivity.',
                },
                {
                  icon: <FaCogs size={40} className="text-green-600" />,
                  title: 'Customization',
                  description: 'Tailor AI models to your specific needs without restrictions.',
                },
                {
                  icon: <FaChartLine size={40} className="text-orange-600" />,
                  title: 'Cost Efficiency',
                  description: 'Reduce cloud computing costs by leveraging local hardware.',
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
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* How It Works */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="text-lg text-gray-600">
              Running AI locally involves deploying models directly on your hardware, such as servers, GPUs, or even personal devices. Here’s a step-by-step breakdown:
            </p>
            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Model Selection',
                  description: 'Choose the AI model that best fits your needs, such as GPT, BERT, or custom models.',
                },
                {
                  step: '2',
                  title: 'Hardware Setup',
                  description: 'Ensure your hardware (e.g., GPUs, TPUs) is optimized for AI workloads.',
                },
                {
                  step: '3',
                  title: 'Deployment',
                  description: 'Deploy the model on your local infrastructure using frameworks like TensorFlow or PyTorch.',
                },
                {
                  step: '4',
                  title: 'Integration',
                  description: 'Integrate the model into your applications or workflows for seamless use.',
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 bg-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                >
                  <div className="text-2xl font-bold text-blue-600">{step.step}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RunningAILocallyArticle;