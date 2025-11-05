'use client'

import React from "react"
import Toy from "@/components/spline/toy"
import BlurText from "@/components/reactbits/blurtext"
import Link from "next/link"
import SplineExperience from "@/components/spline/experience"
import { motion } from 'framer-motion';
import imagesrc from "../../../../public/assets/images/red.jpg"
import Image from "next/image"
import { useTranslations } from "next-intl"

export function HomeScene() {
  const t = useTranslations("RunAILocally")
  return (
    <section id="hero2" className="font-mono relative w-full min-h-screen py-8 sm:py-12 lg:py-16 overflow-hidden">
      <motion.section
        className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl">
          <div className="flex flex-col lg:flex-row">
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative h-64 sm:h-80 lg:h-auto">
              <Image
                src={imagesrc}
                alt="AI model picture"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Text Side */}
            <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 xl:p-16">
              {/* Title */}
              <motion.h3
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              >
                {t("title")}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              >
                Ensure <span className="font-semibold text-blue-600">{t("securityText")}</span> and <span className="font-semibold text-purple-600">{t("privacyText")}</span> by running AI models locally, without exposing sensitive information to third-party servers.
              </motion.p>

              {/* Features Grid */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5 mb-8 sm:mb-10 lg:mb-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                viewport={{ once: true }}
              >
                {[
                  { icon: '🚀', title: t("features.performance.title"), description: t("features.performance.description") },
                  { icon: '🔐', title: t("features.protection.title"), description: t("features.protection.description") },
                  { icon: '⚡', title: t("features.deployment.title"), description: t("features.deployment.description") },
                  { icon: '🌍', title: t("features.offline.title"), description: t("features.offline.description") },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-2xl sm:text-3xl mr-3 sm:mr-4 flex-shrink-0">{feature.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Call to Action */}
              <motion.div
                className="flex justify-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Add your CTA button here if needed */}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </section>
  )
}