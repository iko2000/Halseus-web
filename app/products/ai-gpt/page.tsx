import React from 'react'
import CustomizationOfChatGPTArticle from '@/components/pages/gpt-page'


export const metadata = {
  title: 'Customize GPT - Halseus AI | Tailored AI Solutions for Your Business',
  description: 'Customize GPT models to fit your business needs with Halseus AI. Create AI solutions that align perfectly with your workflows and goals.',
  keywords: ['Customization AI', 'Customize GPT', 'Halseus AI', 'AI Solutions', 'GPT Customization'],
  openGraph: {
    title: 'Customize GPT - Halseus AI | Tailored AI Solutions for Your Business',
    description: 'Customize GPT models to fit your business needs with Halseus AI. Create AI solutions that align perfectly with your workflows and goals.',
    images: 'https://halseus.com/assets/products.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Customize GPT - Halseus AI | Tailored AI Solutions for Your Business',
    description: 'Customize GPT models to fit your business needs with Halseus AI. Create AI solutions that align perfectly with your workflows and goals.',
    images: 'https://halseus.com/assets/products.png',
  },
};

export default function Gptpage() {
  return (
   <CustomizationOfChatGPTArticle/>
  )
}
