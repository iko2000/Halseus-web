'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaArrowLeft, 
  FaCogs, 
  FaUserEdit, 
  FaShieldAlt, 
  FaRocket,
  FaChevronRight
} from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import ContactButton from '@/components/getintouch/get-intouch';

const CustomizationOfChatGPTArticle = () => {
  const router = useRouter();
  const [activeStep, setActiveStep]:any = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <FaCogs size={40} className="text-blue-500" />,
      title: 'Tailored Responses',
      description: 'We train ChatGPT to provide responses specific to your industry or use case.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <FaUserEdit size={40} className="text-purple-500" />,
      title: 'Brand Alignment',
      description: 'Ensure the tone and style of responses match your brand"s voice.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <FaShieldAlt size={40} className="text-green-500" />,
      title: 'Enhanced Security',
      description: 'We customize ChatGPT to handle sensitive data securely and comply with regulations.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <FaRocket size={40} className="text-orange-500" />,
      title: 'Improved Efficiency',
      description: 'We optimize ChatGPT for specific tasks, reducing response times and improving accuracy.',
      color: 'from-orange-500 to-orange-600'
    },
  ];

  const steps = [
    {
      step: '1',
      title: 'Define Use Case',
      description: 'After introducing to your business, we define the perfect use case for AI integration.',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      step: '2',
      title: 'Data Collection',
      description: 'We gather relevant data (e.g., FAQs, chat logs) to train the model for optimal performance.',
      color: 'bg-purple-50 border-purple-200'
    },
    {
      step: '3',
      title: 'Fine-Tuning',
      description: 'We train ChatGPT on your dataset to align it with your specific requirements and goals.',
      color: 'bg-green-50 border-green-200'
    },
    {
      step: '4',
      title: 'Prompt Engineering',
      description: 'We design strategic prompts to guide ChatGPT"s responses effectively and consistently.',
      color: 'bg-yellow-50 border-yellow-200'
    },
    {
      step: '5',
      title: 'Testing',
      description: 'We thoroughly evaluate the model"s performance and refine as needed to ensure quality.',
      color: 'bg-red-50 border-red-200'
    },
    {
      step: '6',
      title: 'Deployment',
      description: 'We seamlessly integrate the customized ChatGPT into your applications or workflows.',
      color: 'bg-indigo-50 border-indigo-200'
    },
  ];

  return (
    <section className="w-full mt-20 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Floating back button that appears on scroll */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            className="fixed top-6 left-6 z-50 flex items-center space-x-2 bg-white text-blue-600 px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
            onClick={() => router.back()}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <FaArrowLeft />
            <span>Back</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Hero Section with 3D-like depth */}
      <div className="relative overflow-hidden py-20 px-4 sm:px-8 lg:px-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-70"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Back Button (visible when not scrolled) */}
          {!isScrolled && (
            <motion.button
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-all duration-300 mb-8 group"
              onClick={() => router.back()}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              <span>Back</span>
            </motion.button>
          )}

          {/* Title with animated gradient */}
          <div className="mb-12">
            <motion.div
              className="inline-block relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 animate-gradient-x leading-tight">
                Customization of ChatGPT
              </h1>
            </motion.div>
            <motion.h2 
              className="text-2xl md:text-3xl text-gray-700 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Tailoring AI to Your Unique Needs
            </motion.h2>
          </div>

          {/* Introduction with animated underline */}
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="text-xl text-gray-600 leading-relaxed relative">
              Customizing ChatGPT with us allows you to create AI solutions that align perfectly with your business goals, workflows, and user needs. By tailoring the model to your specific requirements, you can unlock its full potential.
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.3, duration: 1 }}
              />
            </p>
          </motion.div>
        </div>
        
        {/* Decorative background elements */}
        <motion.div 
          className="absolute -bottom-8 -right-8 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-400/20 to-purple-400/20 blur-2xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-24">
        {/* Why Customize ChatGPT? */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Why Customize ChatGPT?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Customizing ChatGPT offers several advantages over using the default model. Here's why it's worth the investment:
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5 }}
              >
                {/* Gradient top border */}
                <div className={`h-2 w-full bg-gradient-to-r ${feature.color}`}></div>
                
                <div className="p-8">
                  <div className="flex justify-center mb-6 relative">
                    <div className="relative z-10">{feature.icon}</div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full transform scale-0 group-hover:scale-150 transition-transform duration-500 opacity-50"></div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              How It Works
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Customizing ChatGPT involves a structured process to ensure the model meets your specific needs. Here's our proven approach:
            </motion.p>
          </div>
          
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`border-l-4 ${step.color} pl-6 py-2 transition-all duration-300 cursor-pointer`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
                onClick={() => setActiveStep(activeStep === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-blue-600 font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: activeStep === index ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronRight className="text-gray-500" />
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {activeStep === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 mt-4 ml-14">
                        {step.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-red-600 to-indigo-600 rounded-2xl p-10 text-white text-center shadow-xl overflow-hidden relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white opacity-10"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white opacity-10"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-white opacity-5"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Customize Your AI Solution?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's transform your business with a tailored ChatGPT solution designed specifically for your needs.
            </p>
            <div className="inline-block">
              <ContactButton />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomizationOfChatGPTArticle;