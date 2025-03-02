'use client'
import React, { useState, useEffect, useRef } from 'react';
import { 
  FaLightbulb, 
  FaRobot, 
  FaTools, 
  FaChartLine, 
  FaUsersCog, 
  FaCode, 
  FaCheckCircle,
  FaArrowRight,
  FaBusinessTime,
  FaLock,
  FaBrain,
  FaQuestionCircle,
  FaFileAlt
} from "react-icons/fa";
import PixelCard from '../reactbits/pixel-cards';

// Define TypeScript interfaces for better type safety
interface StepItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  variant: string;
  details?: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface CaseStudy {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  logo?: string;
}

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface IntegrationProps {
  title?: string;
  subtitle?: string;
}

export default function Integrationpagecontent({
  title = "How Halseus Implements Custom AI Solutions",
  subtitle = "Our step-by-step approach to integrating local AI solutions for your business",
}: IntegrationProps) {
  // Define all integration steps with pixel card variants
  const integrationSteps: StepItem[] = [
    {
      icon: <FaLightbulb />,
      title: "Contact",
      description: "Contact us via Contact's page to initiate your AI transformation journey.",
      color: "blue",
      variant: "blue",
      details: "Our team will schedule an initial discovery call to understand your specific needs, challenges, and objectives. We'll discuss your current infrastructure, data sources, and the problems you're trying to solve with AI."
    },
    {
      icon: <FaUsersCog />,
      title: "Analyse",
      description: "Our team evaluates your existing systems and identifies the optimal integration points for local AI solutions.",
      color: "purple",
      variant: "purple",
      details: "We conduct a comprehensive technical assessment of your current infrastructure and workflows. This includes examining your data architecture, API endpoints, user interfaces, and identifying potential bottlenecks or optimization opportunities."
    },
    {
      icon: <FaRobot />,
      title: "Model Selection",
      description: "We help you select the right AI models tailored to your specific use cases and performance requirements.",
      color: "teal",
      variant: "cyan",
      details: "Based on your business needs, we recommend the most appropriate AI models from our extensive library. We consider factors like accuracy requirements, domain specificity, inference speed, and hardware constraints to find the perfect match."
    },
    {
      icon: <FaTools />,
      title: "Customization",
      description: "Our engineers customize ChatGPT and other AI models to handle your specific business data and processes.",
      color: "indigo",
      variant: "indigo",
      details: "We fine-tune selected models using your proprietary data (with strict confidentiality). This may include custom prompt engineering, specialized training datasets, or developing unique model architectures to address your specific business challenges."
    },
    {
      icon: <FaCode />,
      title: "Implementation",
      description: "We seamlessly integrate the AI solutions into your existing infrastructure with minimal disruption.",
      color: "green",
      variant: "green",
      details: "Our developers work closely with your IT team to deploy the customized AI models into your production environment. We ensure proper API connectivity, authentication mechanisms, and scalable infrastructure to handle your user load."
    },
    {
      icon: <FaChartLine />,
      title: "Optimization",
      description: "We continuously refine and optimize your AI implementation to improve performance and efficiency.",
      color: "amber",
      variant: "yellow",
      details: "After initial deployment, we monitor the system's performance and gather user feedback. We use this data to further optimize model parameters, response time, and accuracy. This phase may involve A/B testing different approaches to maximize business value."
    },
    {
      icon: <FaCheckCircle />,
      title: "Support",
      description: "Our team provides ongoing maintenance and support to ensure your AI solution evolves with your business.",
      color: "rose",
      variant: "pink",
      details: "We offer comprehensive support packages that include regular model updates, performance monitoring, and technical assistance. As your business evolves, we help adapt your AI solutions to meet new challenges and opportunities."
    },
  ];

  // Define benefits


  // Define FAQ items
  const faqItems: FAQItem[] = [
    {
      question: "What types of AI models can you implement locally?",
      answer: "We specialize in deploying a wide range of AI models locally, including language models (similar to ChatGPT), image recognition systems, predictive analytics engines, recommendation systems, and custom-built models tailored to specific industry needs."
    },
    {
      question: "How long does a typical implementation take?",
      answer: "Implementation timelines vary based on project complexity, but typically range from 4-12 weeks. Simple integrations can be completed in as little as 2-4 weeks, while more complex enterprise-wide deployments may take 3-6 months."
    },
    {
      question: "What hardware requirements are needed for local AI deployment?",
      answer: "Hardware requirements depend on the specific models and workload. We can optimize models to run on existing infrastructure when possible, or provide recommendations for hardware upgrades if needed. For enterprise-grade deployments, we may recommend dedicated GPU servers or specialized AI accelerators."
    },
    {
      question: "How do you ensure data privacy during implementation?",
      answer: "We follow strict data handling protocols, including signed NDAs, secure transfer methods, and local processing whenever possible. Your data never leaves your control without explicit permission, and we can work entirely within your security perimeter if required."
    },
    {
      question: "Do you provide training for our team on using the AI solutions?",
      answer: "Yes, comprehensive training is included with every implementation. We provide both technical training for your IT team and end-user training for staff who will be using the AI tools daily. We also offer optional advanced training packages for organizations looking to build internal AI expertise."
    }
  ];

  // Define case studies
  const caseStudies: CaseStudy[] = [
    {
      title: "Financial Document Processing Automation",
      industry: "Banking & Finance",
      challenge: "A regional bank was manually processing thousands of loan applications, leading to delays and high operational costs.",
      solution: "We implemented a locally-hosted AI document processing system that could extract, verify, and analyze information from various loan documents.",
      results: [
        "90% reduction in document processing time",
        "68% decrease in processing errors",
        "Annual savings of $1.2M in operational costs"
      ]
    },
    {
      title: "AI-Powered Customer Support Assistant",
      industry: "Telecommunications",
      challenge: "A telecom provider struggled with high call volumes and long wait times in their customer support department.",
      solution: "We deployed a custom-trained AI assistant that could handle common queries, troubleshooting, and service requests through multiple channels.",
      results: [
        "42% of support inquiries resolved without human intervention",
        "Average wait time reduced from 15 minutes to under 2 minutes",
        "Customer satisfaction scores improved by 28%"
      ]
    },
    {
      title: "Predictive Maintenance System",
      industry: "Manufacturing",
      challenge: "A manufacturing plant was experiencing costly downtime due to unexpected equipment failures.",
      solution: "We integrated sensors with a local AI system that could predict potential failures before they occurred based on pattern recognition.",
      results: [
        "73% reduction in unplanned downtime",
        "Maintenance costs reduced by 35%",
        "Equipment lifespan extended by an average of 20%"
      ]
    }
  ];

  // State management
  const [activeStep, setActiveStep] = useState<number>(0);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  
  // Refs for scrollin
  const stepsRef:any = useRef<HTMLDivElement>(null);
  const faqRef:any = useRef<HTMLDivElement>(null);
  const contactRef:any = useRef<HTMLDivElement>(null);
  
  // Auto-cycle through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % integrationSteps.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [integrationSteps.length]);
  
  // Generate icon color classes (brighter for dark theme)
  const iconColorMap = {
    blue: "text-blue-400",
    purple: "text-purple-400",
    teal: "text-teal-400",
    indigo: "text-indigo-400",
    green: "text-green-400",
    amber: "text-amber-400",
    rose: "text-rose-400"
  };

  // Scroll to section function
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full mt-20 py-12 bg-black text-white">
      {/* Navigation Bar */}
      <div className="top-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm border-b border-gray-800 py-3 mb-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <button onClick={() => scrollToSection(stepsRef)} className="text-sm text-gray-300 hover:text-white transition-colors">
              Process
            </button>
            <button onClick={() => scrollToSection(faqRef)} className="text-sm text-gray-300 hover:text-white transition-colors">
              FAQ
            </button>
            <button onClick={() => scrollToSection(contactRef)} className="text-sm bg-blue-600 px-4 py-1 rounded-full hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
      
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white">{title}</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
      </div>
      
      {/* Main Content with PixelCards */}
      <div ref={stepsRef} className="max-w-6xl mx-auto flex flex-col items-center px-4 mb-20">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Implementation Process</h2>
        
        {/* Mobile step details view */}
        {showDetails && (
          <div className="lg:hidden mb-8">
            <PixelCard variant={integrationSteps[activeStep].variant}>
              <div className="p-6 absolute">
                <h3 className="text-xl font-bold mb-3">{integrationSteps[activeStep].title}</h3>
                <p className="text-gray-300 mb-4">{integrationSteps[activeStep].details}</p>
                <button 
                  onClick={() => setShowDetails(false)}
                  className="text-white bg-black bg-opacity-30 px-4 py-2 rounded hover:bg-opacity-40 transition-all"
                >
                  Back to Steps
                </button>
              </div>
            </PixelCard>
          </div>
        )}
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${showDetails ? 'hidden lg:grid' : ''}`}>
          {integrationSteps.map((step, index) => (
            <div 
              key={index} 
              className={`transition-all duration-300 transform ${activeStep === index ? 'scale-105 -translate-y-2' : 'hover:scale-103'}`}
              onMouseEnter={() => setActiveStep(index)}
            >
              <PixelCard variant={step.variant}>
                <div className="p-5 absolute">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`text-2xl ${iconColorMap[step.color as keyof typeof iconColorMap]}`}>
                      {step.icon}
                    </div>
                    <h3 className="font-bold text-lg">{step.title}</h3>
                  </div>
                  <p className="text-gray-300">{step.description}</p>
                  
                  {/* Step number indicator */}
                  <div className="mt-5 flex justify-between items-center">
                    <span className="text-sm font-mono opacity-60">Step {index + 1}/{integrationSteps.length}</span>
                    <button 
                      onClick={() => setShowDetails(true)}
                      className="lg:hidden text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1"
                    >
                      Details <FaArrowRight className="text-xs" />
                    </button>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black bg-opacity-30">
                      {index + 1}
                    </div>
                  </div>
                </div>
              </PixelCard>
            </div>
          ))}
        </div>
        
   
      {/* Benefits Section */}
      
 
        
   
      </div>
      
      {/* FAQ Section */}
      <div ref={faqRef} className="bg-gray-900 py-16 mb-20">
        <div className="max-w-4xl mx-auto px-4 ">
          <h2 className="text-2xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          
          <div className="bg-gray-900 py-16 mb-20 flex flex-col items-center space-y-4 sm:grid sm:grid-cols-2 sm:gap-6">
          {faqItems.map((item, index) => (
              <PixelCard key={index} variant="default">
                <div className="p-5 absolute w-full">
                  <button 
                    className="w-full flex justify-between items-center gap-4"
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  >
                    <div className="flex items-center gap-3">
                      <FaQuestionCircle className="text-blue-400 flex-shrink-0" />
                      <h3 className="font-medium text-left">{item.question}</h3>
                    </div>
                    <div className={`transition-transform ${expandedFAQ === index ? 'rotate-180' : ''}`}>
                      ▼
                    </div>
                  </button>
                  
                  {expandedFAQ === index && (
                    <div className="mt-4 pl-8 border-l border-gray-700 text-gray-300">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              </PixelCard>
            ))}
          </div>
        </div>
      </div>
      
      {/* Resources Section */}
      <div className="max-w-6xl mx-auto px-4 mb-20">
        <h2 className="text-2xl font-bold mb-10 text-center">Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 sm:p-6">
        <PixelCard variant="blue">
            <div className="p-6 absolute">
              <div className="mb-4 text-3xl text-blue-400">
                <FaFileAlt />
              </div>
              <h3 className="text-xl font-bold mb-2">Technical Whitepaper</h3>
              <p className="text-gray-300 mb-4">Download our detailed whitepaper on local AI implementation strategies and benchmarks.</p>
              <a href="https://halseus.com/assets/Halseuswhitepaper.pdf" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
                Download PDF <FaArrowRight className="ml-2" />
              </a>
            </div>
          </PixelCard>
          
          <PixelCard variant="cyan">
            <div className="p-6 absolute">
              <div className="mb-4 text-3xl text-cyan-400">
                <FaCode />
              </div>
              <h3 className="text-xl font-bold mb-2">API Documentation</h3>
              <p className="text-gray-300 mb-4">Explore our comprehensive documentation for integrating with our AI systems.</p>
              <a href="https://halseus.com/assets/api-doc-halseus.pdf" className="inline-flex items-center bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded transition-colors">
                View Docs <FaArrowRight className="ml-2" />
              </a>
            </div>
          </PixelCard>
          
          <PixelCard variant="purple">
            <div className="p-6 absolute">
              <div className="mb-4 text-3xl text-purple-400">
                <FaRobot />
              </div>
              <h3 className="text-xl font-bold mb-2">Model Catalog</h3>
              <p className="text-gray-300 mb-4">Browse our selection of customizable AI models for various business applications.</p>
              <a href="https://halseus.com/assets/catalog.pdf" className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition-colors">
                Explore Models <FaArrowRight className="ml-2" />
              </a>
            </div>
          </PixelCard>
        </div>
      </div>
      
      {/* Call to Action */}
    
      
      {/* Testimonials */}
      <div className="max-w-6xl mx-auto px-4 mb-20">
        <h2 className="text-2xl font-bold mb-10 text-center">What Our Clients Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PixelCard variant="yellow">
            <div className="p-6 absolute">
              <div className="text-amber-400 text-2xl mb-4">"</div>
              <p className="italic text-gray-300 mb-4">
                Implementing a local AI solution with Halseus has been transformative for our manufacturing process. The system paid for itself within the first quarter.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-black bg-opacity-30"></div>
                <div>
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-sm text-gray-400">CTO, Precision Manufacturing</p>
                </div>
              </div>
            </div>
          </PixelCard>
          
          <PixelCard variant="pink">
            <div className="p-6 absolute">
              <div className="text-rose-400 text-2xl mb-4">"</div>
              <p className="italic text-gray-300 mb-4">
                The team at Halseus understood our unique challenges and built a customer service AI that truly feels like part of our team. Our customers love the fast response times.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-black bg-opacity-30"></div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-400">Customer Experience Director, TeleConnect</p>
                </div>
              </div>
            </div>
          </PixelCard>
          
          <PixelCard variant="green">
            <div className="p-6 absolute">
              <div className="text-green-400 text-2xl mb-4">"</div>
              <p className="italic text-gray-300 mb-4">
                We were concerned about data privacy with cloud-based solutions. Halseus delivered a powerful local AI system that keeps all our financial data secure while providing incredible insights.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-black bg-opacity-30"></div>
                <div>
                  <h4 className="font-bold">David Rodriguez</h4>
                  <p className="text-sm text-gray-400">CFO, Regional Banking Corp</p>
                </div>
              </div>
            </div>
          </PixelCard>
        </div>
        <div ref={contactRef} className="mt-16 text-center mb-10">
        <PixelCard variant="gradient" className="inline-block max-w-3xl">
          <div className="p-8 absolute">
            <h2 className="text-2xl font-bold mb-4">Ready to implement local AI solutions?</h2>
            <p className="mb-6 text-gray-300 max-w-2xl mx-auto">
              Our team at Halseus specializes in customized AI solutions that can transform your business operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href='/contact' className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg">
                Schedule a Consultation
              </a>
              <a href='tel:+35699588686' className="bg-transparent border border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg">
                Call Us Now
              </a>
            </div>
          </div>
        </PixelCard>
      </div>
      </div>
    </section>
  );
}