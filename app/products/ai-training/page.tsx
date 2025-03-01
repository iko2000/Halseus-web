import React from 'react'
import TrainingAIOnYourDataArticle from '@/components/pages/train-ai-page'


export const metadata = {
  title: 'Train AI Models - Halseus AI | Custom AI Training Solutions',
  description: 'Train AI models tailored to your needs with Halseus AI. Our platform offers advanced tools and expertise to build high-performance AI models.',
  keywords: ['Train AI Model', 'Custom AI Training', 'Halseus AI', 'AI Model Training', 'AI Solutions'],
  openGraph: {
    title: 'Train AI Models - Halseus AI | Custom AI Training Solutions',
    description: 'Train AI models tailored to your needs with Halseus AI. Our platform offers advanced tools and expertise to build high-performance AI models.',
    images: '/images/og-train-ai.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Train AI Models - Halseus AI | Custom AI Training Solutions',
    description: 'Train AI models tailored to your needs with Halseus AI. Our platform offers advanced tools and expertise to build high-performance AI models.',
    images: '/images/og-train-ai.jpg',
  },
};


export default function Trainaipage() {
  return (
    <TrainingAIOnYourDataArticle/>
  )
}
