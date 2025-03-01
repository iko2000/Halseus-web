import ProductsPagecontent from "@/components/pages/productspage-content";
import { Metadata } from "next";
import imagetodisp from "../public/assets/HALSEUS.png"


export const metadata: Metadata = {
    title: 'Halseus | Custom AI Solutions & Products',
    description: 'Explore Halseus AI products and solutions for businesses. Our local AI implementations, customized ChatGPT services, and specialized AI tools help transform your operations.',
    keywords: ['AI solutions', 'custom ChatGPT', 'local AI implementation', 'Halseus products', 'business AI tools'],
    openGraph: {
      title: 'Halseus AI Products & Solutions',
      description: 'Discover how Halseus can transform your business with customized AI products and implementation services.',
      url: 'https://halseus.com/products',
      siteName: 'Halseus',
      images: [
        {
          url: 'https://halseus.com/assets/products.png',
          width: 1200,
          height: 630,
          alt: 'Halseus AI Products',
        }
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Halseus AI Products & Solutions',
      description: 'Explore our custom AI solutions designed for business implementation.',
      images: ['https://halseus.com/assets/products.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: 'https://halseus.com/products',
    }
  };
  
const ProductsPage = () => {



    return (
    
          <ProductsPagecontent/>
        
    );
};

export default ProductsPage;