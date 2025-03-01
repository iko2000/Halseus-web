import React from 'react'
import ContactUs from "@/components/pages/contact-page";



export const metadata = {
  title: 'Contact Us - Halseus AI | Get in Touch for AI Solutions',
  description: 'Contact Halseus AI today to learn more about our AI customization, training, and local AI solutions. Let’s build the future of AI together.',
  keywords: ['Contact Halseus AI', 'AI Solutions', 'Customization AI', 'Local AI', 'Train AI Model'],
  openGraph: {
    title: 'Contact Us - Halseus AI | Get in Touch for AI Solutions',
    description: 'Contact Halseus AI today to learn more about our AI customization, training, and local AI solutions. Let’s build the future of AI together.',
    images: '../public/assets/HALSEUS.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Halseus AI | Get in Touch for AI Solutions',
    description: 'Contact Halseus AI today to learn more about our AI customization, training, and local AI solutions. Let’s build the future of AI together.',
    images: '../public/assets/HALSEUS.png',
  },
};


export default function Contactuspage() {
  return (
   <ContactUs/>
  )
}
