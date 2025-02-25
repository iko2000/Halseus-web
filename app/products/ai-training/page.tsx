'use client'; // Required for animations
import { motion } from 'framer-motion';
import { FaArrowLeft, FaDatabase, FaChartLine, FaCogs, FaShieldAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation'; // For navigation (Next.js)

const TrainingAIOnYourDataArticle = () => {
  const router = useRouter(); // Initialize the router

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 mt-10 sm:px-8 lg:px-16">
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
          Training AI on Your Dataset: Unlocking Customization and Accuracy
        </motion.h1>

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
              Training AI models on your dataset ensures that the model is tailored to your specific needs, delivering higher accuracy and better performance. By leveraging your unique data, you can create AI solutions that truly align with your goals.
            </p>
          </motion.div>

          {/* Why Train AI on Your Dataset? */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900">Why Train AI on Your Dataset?</h2>
            <p className="text-lg text-gray-600">
              Training AI models on your dataset offers several advantages over using pre-trained models. Here’s why it’s a game-changer:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <FaDatabase size={40} className="text-blue-600" />,
                  title: 'Domain-Specific Accuracy',
                  description: 'Train models on data specific to your industry or use case for better results.',
                },
                {
                  icon: <FaChartLine size={40} className="text-purple-600" />,
                  title: 'Improved Performance',
                  description: 'Custom-trained models perform better on tasks unique to your business.',
                },
                {
                  icon: <FaCogs size={40} className="text-green-600" />,
                  title: 'Customization',
                  description: 'Tailor models to your exact requirements, ensuring they fit your workflows.',
                },
                {
                  icon: <FaShieldAlt size={40} className="text-orange-600" />,
                  title: 'Data Privacy',
                  description: 'Keep sensitive data within your organization, ensuring compliance and security.',
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
              Training AI models on your dataset involves a structured process to ensure optimal results. Here’s a step-by-step guide:
            </p>
            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Data Collection',
                  description: 'Gather high-quality, relevant data that represents your use case.',
                },
                {
                  step: '2',
                  title: 'Data Preprocessing',
                  description: 'Clean and prepare your data for training, ensuring it’s free from errors.',
                },
                {
                  step: '3',
                  title: 'Model Selection',
                  description: 'Choose the right AI architecture (e.g., neural networks, decision trees) for your task.',
                },
                {
                  step: '4',
                  title: 'Training',
                  description: 'Train the model on your dataset, fine-tuning it for optimal performance.',
                },
                {
                  step: '5',
                  title: 'Evaluation',
                  description: 'Test the model’s accuracy and performance on unseen data.',
                },
                {
                  step: '6',
                  title: 'Deployment',
                  description: 'Integrate the trained model into your applications or workflows.',
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

export default TrainingAIOnYourDataArticle;