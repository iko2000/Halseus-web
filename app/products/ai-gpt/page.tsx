'use client'; // Required for animations
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCogs, FaUserEdit, FaShieldAlt, FaRocket } from 'react-icons/fa';
import { useRouter } from 'next/navigation'; // For navigation (Next.js)

const CustomizationOfChatGPTArticle = () => {
  const router = useRouter(); // Initialize the router

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 sm:px-8 lg:px-16">
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
          Customization of ChatGPT: Tailoring AI to Your Needs
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
              Customizing ChatGPT allows you to create AI solutions that align perfectly with your business goals, workflows, and user needs. By tailoring the model to your specific requirements, you can unlock its full potential.
            </p>
          </motion.div>

          {/* Why Customize ChatGPT? */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900">Why Customize ChatGPT?</h2>
            <p className="text-lg text-gray-600">
              Customizing ChatGPT offers several advantages over using the default model. Here’s why it’s worth the effort:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <FaCogs size={40} className="text-blue-600" />,
                  title: 'Tailored Responses',
                  description: 'Train ChatGPT to provide responses specific to your industry or use case.',
                },
                {
                  icon: <FaUserEdit size={40} className="text-purple-600" />,
                  title: 'Brand Alignment',
                  description: 'Ensure the tone and style of responses match your brand’s voice.',
                },
                {
                  icon: <FaShieldAlt size={40} className="text-green-600" />,
                  title: 'Enhanced Security',
                  description: 'Customize ChatGPT to handle sensitive data securely and comply with regulations.',
                },
                {
                  icon: <FaRocket size={40} className="text-orange-600" />,
                  title: 'Improved Efficiency',
                  description: 'Optimize ChatGPT for specific tasks, reducing response times and improving accuracy.',
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
              Customizing ChatGPT involves a structured process to ensure the model meets your specific needs. Here’s a step-by-step guide:
            </p>
            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Define Use Case',
                  description: 'Identify the specific tasks or workflows where ChatGPT will be used.',
                },
                {
                  step: '2',
                  title: 'Data Collection',
                  description: 'Gather relevant data (e.g., FAQs, chat logs) to train the model.',
                },
                {
                  step: '3',
                  title: 'Fine-Tuning',
                  description: 'Train ChatGPT on your dataset to align it with your requirements.',
                },
                {
                  step: '4',
                  title: 'Prompt Engineering',
                  description: 'Design prompts to guide ChatGPT’s responses effectively.',
                },
                {
                  step: '5',
                  title: 'Testing',
                  description: 'Evaluate the model’s performance and refine as needed.',
                },
                {
                  step: '6',
                  title: 'Deployment',
                  description: 'Integrate the customized ChatGPT into your applications or workflows.',
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

export default CustomizationOfChatGPTArticle;