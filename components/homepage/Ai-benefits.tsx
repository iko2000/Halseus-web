'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaShieldAlt, FaRocket, FaPlug, FaCoins, FaCogs, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import halseuslogo from "../../public/assets/HALSEUS.png";
import { useState } from 'react';
import LetterGlitch from '../reactbits/glitch';

const AILocalBenefits = () => {
  // Local state for managing expanded/collapsed features
  const [expandedFeatures, setExpandedFeatures] = useState<Record<string, boolean>>({
    privacy: false,
    latency: false,
    offline: false,
    cost: false,
    control: false,
  });

  // Toggle function for expanding/collapsing features
  const toggleFeature = (id: string) => {
    setExpandedFeatures((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const features = [
    {
      id: 'privacy',
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Enhanced Privacy",
      description: "Your data never leaves your infrastructure, ensuring complete confidentiality"
    },
    {
      id: 'latency',
      icon: <FaRocket className="w-6 h-6" />,
      title: "Low Latency",
      description: "Instant responses without network dependency"
    },
    {
      id: 'offline',
      icon: <FaPlug className="w-6 h-6" />,
      title: "Offline Capabilities",
      description: "Operate seamlessly without internet connectivity"
    },
    {
      id: 'cost',
      icon: <FaCoins className="w-6 h-6" />,
      title: "Cost Efficient",
      description: "Reduce cloud costs with on-device processing"
    },
    {
      id: 'control',
      icon: <FaCogs className="w-6 h-6" />,
      title: "Full Control",
      description: "Customize models to your specific needs"
    }
  ];

  return (
    <>
      <section className="bg-black py-24 px-6 sm:px-6 lg:px-8 flex justify-center">
        <div className="max-w-7xl flex justify-center gap-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-4xl font-bold text-white mb-6">
                Why Local AI Matters
              </h4>
              <p className="text-lg text-white mb-8">
                Empower your business with AI that operates directly within your environment. 
                Our local-first approach combines enterprise-grade security with unmatched performance.
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col p-4 rounded-lg hover:bg-blue-500 transition-colors cursor-pointer"
                    onClick={() => toggleFeature(feature.id)} // Toggle feature collapse
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 text-white">
                          {feature.icon}
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold text-white">
                            {feature.title}
                          </h3>
                        </div>
                      </div>
                      <div className="text-white">
                        {expandedFeatures[feature.id] ? <FaChevronUp /> : <FaChevronDown />}
                      </div>
                    </div>
                    {expandedFeatures[feature.id] && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="text-white mt-2 pl-10"
                      >
                        {feature.description}
                      </motion.p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Logo Section */}
            <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className=''  // style={{ width: '600px', height: '400px' }} // Set a larger size for the container
>
    <LetterGlitch
      glitchSpeed={50}
      centerVignette={true}
      outerVignette={false}
      smooth={true}
    />
</motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AILocalBenefits;