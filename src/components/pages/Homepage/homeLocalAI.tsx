'use client';
import { motion } from 'framer-motion';
import { FaChartLine, FaDatabase, FaCogs, FaRocket } from 'react-icons/fa';
import FaultyTerminal from '@/components/reactbits/terminal';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';

const TrainAIModels = () => {
  const t = useTranslations("LocalAI")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-8 sm:py-12 lg:py-16 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h6
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t("title")}
        </motion.h6>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          {/* Features Grid */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {[
                {
                  icon: <FaChartLine className="text-blue-600 w-7 h-7 sm:w-8 sm:h-8" />,
                  title: t("features.analysis.title"),
                  description: t("features.analysis.description"),
                },
                {
                  icon: <FaDatabase className="text-purple-600 w-7 h-7 sm:w-8 sm:h-8" />,
                  title: t("features.preparation.title"),
                  description: t("features.preparation.description"),
                },
                {
                  icon: <FaCogs className="text-green-600 w-7 h-7 sm:w-8 sm:h-8" />,
                  title: t("features.training.title"),
                  description: t("features.training.description"),
                },
                {
                  icon: <FaRocket className="text-orange-600 w-7 h-7 sm:w-8 sm:h-8" />,
                  title: t("features.deployment.title"),
                  description: t("features.deployment.description"),
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-3">{feature.icon}</div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 text-center mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Terminal Display */}
          <motion.div
            className="w-full lg:w-1/2 order-1 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-full rounded-xl overflow-hidden shadow-lg">
              {!isMobile ? (
                <div className="relative w-full h-[400px] bg-gray-900 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                    <div className="w-full h-full">
                      <FaultyTerminal
                        scale={0.7}
                        gridMul={[2, 1]}
                        digitSize={1}
                        timeScale={1}
                        pause={false}
                        scanlineIntensity={0.6}
                        glitchAmount={0.6}
                        flickerAmount={0.6}
                        noiseAmp={0.6}
                        chromaticAberration={0}
                        dither={0}
                        curvature={0}
                        tint="#00ff00"
                        mouseReact={false}
                        mouseStrength={0}
                        pageLoadAnimation={false}
                        brightness={1}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-6 min-h-[300px] flex flex-col justify-center">
                  {/* Terminal Header */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-2 text-gray-400 text-xs font-mono">terminal</span>
                  </div>

                  {/* Terminal Content */}
                  <div className="space-y-3 font-mono text-sm">
                    <motion.div 
                      className="flex items-start gap-2 text-green-400"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="text-green-500">$</span>
                      <span>initializing AI training environment...</span>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start gap-2 text-blue-400"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <span className="text-green-500">$</span>
                      <span>loading datasets and models...</span>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start gap-2 text-purple-400"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <span className="text-green-500">$</span>
                      <span>configuring neural networks...</span>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start gap-2 text-yellow-400"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1 }}
                    >
                      <span className="text-green-500">$</span>
                      <span>optimizing parameters...</span>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start gap-2 text-green-400"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.4 }}
                    >
                      <span className="text-green-500">$</span>
                      <span className="flex items-center gap-2">
                        ready for deployment 
                        <span className="inline-block animate-pulse">✓</span>
                      </span>
                    </motion.div>
                  </div>

                  {/* Cursor Effect */}
                  <motion.div
                    className="inline-block w-2 h-5 bg-green-500 mt-3"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrainAIModels;