'use client'
import React, { useState } from 'react';
import InfiniteScroll from "@/components/reactbits/advanced-coll";
import { FaLightbulb, FaRobot, FaTools, FaChartLine, FaUsersCog, FaCode, FaCheckCircle } from "react-icons/fa";

// Define TypeScript interfaces for better type safety
interface StepItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

interface IntegrationProps {
  title?: string;
  subtitle?: string;
  scrollHeight?: string;
  autoplaySpeed?: number;
  pauseOnHover?: boolean;
  tiltDirection?: 'left' | 'right';
}

export default function Integrationpagecontent({
  title = "How Halseus Implements Custom AI Solutions",
  subtitle = "Our step-by-step approach to integrating local AI solutions for your business",
  scrollHeight = "600px",
  autoplaySpeed = 0.4,
  pauseOnHover = false,
  tiltDirection = 'left'
}: IntegrationProps) {
  // Define all integration steps
  const integrationSteps: StepItem[] = [
    {
      icon: <FaLightbulb />,
      title: "Discovery",
      description: "We define your needs and goals for the AI integration to ensure perfect alignment with your business objectives.",
      color: "blue"
    },
    {
      icon: <FaUsersCog />,
      title: "Assessment",
      description: "Our team evaluates your existing systems and identifies the optimal integration points for local AI solutions.",
      color: "purple"
    },
    {
      icon: <FaRobot />,
      title: "Model Selection",
      description: "We help you select the right AI models tailored to your specific use cases and performance requirements.",
      color: "teal"
    },
    {
      icon: <FaTools />,
      title: "Customization",
      description: "Our engineers customize ChatGPT and other AI models to handle your specific business data and processes.",
      color: "indigo"
    },
    {
      icon: <FaCode />,
      title: "Implementation",
      description: "We seamlessly integrate the AI solutions into your existing infrastructure with minimal disruption.",
      color: "green"
    },
    {
      icon: <FaChartLine />,
      title: "Optimization",
      description: "We continuously refine and optimize your AI implementation to improve performance and efficiency.",
      color: "amber"
    },
    {
      icon: <FaCheckCircle />,
      title: "Support",
      description: "Our team provides ongoing maintenance and support to ensure your AI solution evolves with your business.",
      color: "rose"
    },
  ];

  // Generate items for the InfiniteScroll component
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  // Map colors to Tailwind classes
  const colorMap = {
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    purple: "bg-purple-50 text-purple-700 border-purple-200",
    teal: "bg-teal-50 text-teal-700 border-teal-200",
    indigo: "bg-indigo-50 text-indigo-700 border-indigo-200",
    green: "bg-green-50 text-green-700 border-green-200",
    amber: "bg-amber-50 text-amber-700 border-amber-200",
    rose: "bg-rose-50 text-rose-700 border-rose-200"
  };

  // Generate icon color classes
  const iconColorMap = {
    blue: "text-blue-600",
    purple: "text-purple-600",
    teal: "text-teal-600",
    indigo: "text-indigo-600",
    green: "text-green-600",
    amber: "text-amber-600",
    rose: "text-rose-600"
  };

  const items:any = integrationSteps.map((step, index) => {
    return {
      content: (
        <div 
          className={`w-full border-2 ${colorMap[step.color as keyof typeof colorMap]} rounded-2xl p-5 transition-all duration-300 hover:shadow-lg cursor-pointer`}
          onMouseEnter={() => setActiveStep(index)}
          onMouseLeave={() => setActiveStep(null)}
        >
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-3">
              <div className={`text-2xl ${iconColorMap[step.color as keyof typeof iconColorMap]}`}>
                {step.icon}
              </div>
              <h3 className="font-bold text-lg">{step.title}</h3>
            </div>
            <p>{step.description}</p>
          </div>
        </div>
      )
    };
  });

  return (
    <section className="w-full mt-20 py-12">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-3">{title}</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      </div>
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Panel - Step Selector */}
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold mb-4">Implementation Steps</h2>
              <ul className="space-y-2">
                {integrationSteps.map((step, idx) => (
                  <li 
                    key={idx}
                    className={`p-3 rounded-lg cursor-pointer transition-all ${
                      activeStep === idx 
                        ? `${colorMap[step.color as keyof typeof colorMap]} shadow-sm` 
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveStep(idx)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={iconColorMap[step.color as keyof typeof iconColorMap]}>
                        {step.icon}
                      </div>
                      <span className="font-medium">{step.title}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Right Panel - Infinite Scroll Visualization */}
          <div className="md:col-span-2">
            <div style={{ height: scrollHeight, position: 'relative' }} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <InfiniteScroll
                items={items}
                isTilted={true}
                tiltDirection={tiltDirection}
                autoplay={true}
                autoplaySpeed={autoplaySpeed}
                autoplayDirection="down"
                pauseOnHover={pauseOnHover}
              />
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to implement local AI solutions?</h2>
          <p className="mb-6 text-gray-600 max-w-2xl mx-auto">
            Our team at Halseus specializes in customized AI solutions that can transform your business operations.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Schedule a Consultation
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}