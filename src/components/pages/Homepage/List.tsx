'use client'

import { motion } from 'framer-motion'
import {
  Server,
  Database,
  TrendingUp,
  Rocket,
  Code,
  Cloud,
  Shield,
  Cpu,
  GitBranch,
  Brain,
  BarChart3,
  Globe
} from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const getServices = (t: any) => [
  {
    icon: <Server className="w-10 h-10" />,
    title: t("list.hosting.title"),
    description: t("list.hosting.description"),
    features: [t("list.hosting.features.1"), t("list.hosting.features.2"), t("list.hosting.features.3")],
    color: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10"
  },
  {
    icon: <Database className="w-10 h-10" />,
    title: t("list.dataProcessing.title"),
    description: t("list.dataProcessing.description"),
    features: [t("list.dataProcessing.features.1"), t("list.dataProcessing.features.2"), t("list.dataProcessing.features.3")],
    color: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10"
  },
  {
    icon: <TrendingUp className="w-10 h-10" />,
    title: t("list.insights.title"),
    description: t("list.insights.description"),
    features: [t("list.insights.features.1"), t("list.insights.features.2"), t("list.insights.features.3")],
    color: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/10 to-emerald-500/10"
  },
  {
    icon: <Rocket className="w-10 h-10" />,
    title: t("list.deployment.title"),
    description: t("list.deployment.description"),
    features: [t("list.deployment.features.1"), t("list.deployment.features.2"), t("list.deployment.features.3")],
    color: "from-orange-500 to-red-500",
    bgGradient: "from-orange-500/10 to-red-500/10"
  },
  {
    icon: <Code className="w-10 h-10" />,
    title: t("list.development.title"),
    description: t("list.development.description"),
    features: [t("list.development.features.1"), t("list.development.features.2"), t("list.development.features.3")],
    color: "from-indigo-500 to-blue-500",
    bgGradient: "from-indigo-500/10 to-blue-500/10"
  },
  {
    icon: <Brain className="w-10 h-10" />,
    title: t("list.ai.title"),
    description: t("list.ai.description"),
    features: [t("list.ai.features.1"), t("list.ai.features.2"), t("list.ai.features.3")],
    color: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-500/10 to-purple-500/10"
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: t("list.security.title"),
    description: t("list.security.description"),
    features: [t("list.security.features.1"), t("list.security.features.2"), t("list.security.features.3")],
    color: "from-red-500 to-rose-500",
    bgGradient: "from-red-500/10 to-rose-500/10"
  },
  {
    icon: <GitBranch className="w-10 h-10" />,
    title: t("list.devops.title"),
    description: t("list.devops.description"),
    features: [t("list.devops.features.1"), t("list.devops.features.2"), t("list.devops.features.3")],
    color: "from-teal-500 to-cyan-500",
    bgGradient: "from-teal-500/10 to-cyan-500/10"
  },
  {
    icon: <BarChart3 className="w-10 h-10" />,
    title: t("list.performance.title"),
    description: t("list.performance.description"),
    features: [t("list.performance.features.1"), t("list.performance.features.2"), t("list.performance.features.3")],
    color: "from-amber-500 to-yellow-500",
    bgGradient: "from-amber-500/10 to-yellow-500/10"
  },
  {
    icon: <Globe className="w-10 h-10" />,
    title: t("list.api.title"),
    description: t("list.api.description"),
    features: [t("list.api.features.1"), t("list.api.features.2"), t("list.api.features.3")],
    color: "from-sky-500 to-blue-500",
    bgGradient: "from-sky-500/10 to-blue-500/10"
  },
  {
    icon: <Cloud className="w-10 h-10" />,
    title: t("list.microservices.title"),
    description: t("list.microservices.description"),
    features: [t("list.microservices.features.1"), t("list.microservices.features.2"), t("list.microservices.features.3")],
    color: "from-lime-500 to-green-500",
    bgGradient: "from-lime-500/10 to-green-500/10"
  },
  {
    icon: <Cpu className="w-10 h-10" />,
    title: t("list.edge.title"),
    description: t("list.edge.description"),
    features: [t("list.edge.features.1"), t("list.edge.features.2"), t("list.edge.features.3")],
    color: "from-fuchsia-500 to-pink-500",
    bgGradient: "from-fuchsia-500/10 to-pink-500/10"
  }
]

export function ServicesList() {
  const t = useTranslations("Services")
  const services = getServices(t)
  return (
    <section className="w-full bg-gradient-to-b from-black via-gray-900 to-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            {t("title")}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Card */}
              <div className={`relative h-full bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-300 group-hover:border-white/30 group-hover:shadow-2xl group-hover:shadow-white/10 group-hover:-translate-y-2`}>
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-3`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <Link
                  href="#contact"
                  className="inline-flex items-center text-white font-semibold group/link"
                >
                  <span className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover/link:underline`}>
                    {t("learnMore")}
                  </span>
                  <svg
                    className={`w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform bg-gradient-to-r ${service.color} text-white`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-8 text-lg">
            {t("cta.text")}
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105"
          >
            {t("cta.button")}
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
