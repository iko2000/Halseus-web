'use client'

import React from "react"
import Toy from "@/components/spline/toy"
import BlurText from "@/components/reactbits/blurtext"
import Link from "next/link"
import { useTranslations } from "next-intl"

const VIDEO_URL = "/assets/videos/purple.mp4"

export function HomeHero() {
  const t = useTranslations("Hero")
  return (
    <section className="relative font-mono w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover blur-[2px] scale-105"
      >
        <source src={VIDEO_URL} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-purple-900/30 z-[5]"></div>

      {/* Overlay Content Container */}
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-2 text-white max-w-2xl">
              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 font-pixel bg-clip-text text-transparent">
                    {t("title")}
                  </span>
                </h1>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>

              {/* Subtitle with BlurText */}
              <BlurText
                text={t("subtitle")}
                delay={150}
                animateBy="words"
                direction="top"
                className="text-xl font-pixel md:text-2xl lg:text-3xl font-light leading-relaxed text-gray-100"
              />
          
              {/* CTA Button */}
              <div className="flex flex-wrap gap-4 pt-6">
                <Link
                  href="#hero2"
                  className="group px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105 flex items-center gap-2"
                >
                  {t("cta.getStarted")}
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Side - Robot */}
            <div className="lg:block">
              <Toy />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}