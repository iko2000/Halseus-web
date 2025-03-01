import React from 'react'
import RunningAILocallyArticle from '@/components/pages/ai-local-page'

export const metadata = {
  title: 'Local AI Solutions - Halseus AI | On-Device AI for Privacy and Performance',
  description: 'Discover Halseus AI’s local AI solutions. Keep your data on-device for enhanced privacy and performance with our cutting-edge AI technology.',
  keywords: ['Local AI', 'Local AI Solutions', 'On-Device AI', 'Halseus AI', 'AI Privacy'],
  openGraph: {
    title: 'Local AI Solutions - Halseus AI | On-Device AI for Privacy and Performance',
    description: 'Discover Halseus AI’s local AI solutions. Keep your data on-device for enhanced privacy and performance with our cutting-edge AI technology.',
    images: 'https://halseus.com/assets/products.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local AI Solutions - Halseus AI | On-Device AI for Privacy and Performance',
    description: 'Discover Halseus AI’s local AI solutions. Keep your data on-device for enhanced privacy and performance with our cutting-edge AI technology.',
    images: 'https://halseus.com/assets/products.png',
  },
};

export default function AIlocalpage() {
  return (
    <RunningAILocallyArticle/>
  )
}
