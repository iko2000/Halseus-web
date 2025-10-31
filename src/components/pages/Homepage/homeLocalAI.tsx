'use client'; // Required for animations
import { motion } from 'framer-motion';
import { FaChartLine, FaDatabase, FaCogs, FaRocket } from 'react-icons/fa';
import Image from 'next/image'; // Assuming you're using Next.js for optimized images
import Link from 'next/link';
import SplineExperience from '@/components/spline/experience';
import FaultyTerminal from '@/components/reactbits/terminal';
import { useTranslations } from 'next-intl';

const TrainAIModels = () => {
  const t = useTranslations("LocalAI")
  return (
    <section className= "w-full bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h6
          className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
         {t("title")}
        </motion.h6>

        {/* Split Layout: Features and Image */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Features Side */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  icon: <FaChartLine size={40} className="text-blue-600" />,
                  title: t("features.analysis.title"),
                  description: t("features.analysis.description"),
                },
                {
                  icon: <FaDatabase size={40} className="text-purple-600" />,
                  title: t("features.preparation.title"),
                  description: t("features.preparation.description"),
                },
                {
                  icon: <FaCogs size={40} className="text-green-600" />,
                  title: t("features.training.title"),
                  description: t("features.training.description"),
                },
                {
                  icon: <FaRocket size={40} className="text-orange-600" />,
                  title: t("features.deployment.title"),
                  description: t("features.deployment.description"),
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
                  <h4 className="text-2xl font-semibold text-gray-900 text-center mb-2">
                    {feature.title}
                  </h4>
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
           <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <FaultyTerminal
    scale={1.5}
    gridMul={[2, 1]}
    digitSize={1.2}
    timeScale={1}
    pause={false}
    scanlineIntensity={1}
    glitchAmount={1}
    flickerAmount={1}
    noiseAmp={1}
    chromaticAberration={0}
    dither={0}
    curvature={0}
  tint="#00ff00"  // Bright green
    mouseReact={true}
    mouseStrength={0.5}
    pageLoadAnimation={false}
    brightness={1}
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
        
        </motion.div>
      </div>
    </section>
  );
};

export default TrainAIModels;