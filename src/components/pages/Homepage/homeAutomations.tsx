'use client'

import { motion } from 'framer-motion'
import {
  Workflow,
  Zap,
  Clock,
  Server,
  GitBranch,
  Database,
  Bot,
  Settings
} from 'lucide-react'
import { useTranslations } from 'next-intl'

const automationTools = [
  {
    name: 'n8n',
    icon: <Workflow className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Node-Cron',
    icon: <Clock className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Custom APIs',
    icon: <Server className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Webhooks',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500'
  }
]

export function AutomationsHighlight() {
  const t = useTranslations('Automations')

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20"
            >
              <Bot className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">{t('badge')}</span>
            </motion.div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {t('title')}
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {t('description')}
            </p>

            {/* Features list */}
            <div className="space-y-4 pt-4">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + item * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-lg">{t(`features.${item}`)}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="pt-6"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105"
              >
                {t('cta')}
                <Zap className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Automation tools grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main grid */}
            <div className="grid grid-cols-2 gap-6">
              {automationTools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="relative group"
                >
                  <div className="relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    {/* Icon container */}
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${tool.color} mb-4`}>
                      <div className="text-white">
                        {tool.icon}
                      </div>
                    </div>

                    {/* Tool name */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {tool.name}
                    </h3>

                    {/* Hover effect gradient border */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`}></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Center icon - Settings gear */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, type: 'spring' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="p-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full shadow-2xl"
              >
                <Settings className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>

            {/* Connecting lines decoration */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 1 }}
            >
              <line
                x1="25%"
                y1="25%"
                x2="50%"
                y2="50%"
                stroke="url(#gradient1)"
                strokeWidth="2"
                strokeDasharray="5,5"
                opacity="0.3"
              />
              <line
                x1="75%"
                y1="25%"
                x2="50%"
                y2="50%"
                stroke="url(#gradient2)"
                strokeWidth="2"
                strokeDasharray="5,5"
                opacity="0.3"
              />
              <line
                x1="25%"
                y1="75%"
                x2="50%"
                y2="50%"
                stroke="url(#gradient3)"
                strokeWidth="2"
                strokeDasharray="5,5"
                opacity="0.3"
              />
              <line
                x1="75%"
                y1="75%"
                x2="50%"
                y2="50%"
                stroke="url(#gradient4)"
                strokeWidth="2"
                strokeDasharray="5,5"
                opacity="0.3"
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9333ea" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#34d399" />
                </linearGradient>
                <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#ef4444" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>

        {/* Bottom stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[1, 2, 3, 4].map((stat) => (
            <div key={stat} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {t(`stats.${stat}.value`)}
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                {t(`stats.${stat}.label`)}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
