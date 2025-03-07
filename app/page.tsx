import HeroSection from "@/components/homepage/hero-section";
import RunAILocally from "@/components/homepage/run-ailocally";
import aipicture from "../public/assets/pexels-pixabay-158826.jpg"
import TrainAIModels from "@/components/homepage/train-ai";
import CustomChatGPT from "@/components/homepage/chatgpt";
import WhyCustomAIModels from "@/components/homepage/explanation";
import AILocalBenefits from "@/components/homepage/Ai-benefits";
import ourai from '../public/assets/halseus.png';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

  export const metadata = {
    metadataBase: new URL(defaultUrl),
    title: "Halseus | Local AI Solutions",
    description: "Halseus offers cutting-edge local AI solutions for businesses and individuals.",
    icons: {
      icon: '/favicon.ico',
    },
    keywords: ["AI improve", "AI custom", "Local AI", "AI Solutions", "Halseus"],
    openGraph: {
      title: "Halseus | Local AI Solutions",
      description: "Halseus offers cutting-edge local AI solutions for businesses and individuals.",
      url: defaultUrl,
      siteName: "Halseus",
      images: [
        {
          url: `${defaultUrl}/assets/open-graph.png`, 
          width: 1200,
          height: 630,
          alt: "Halseus - AI Solutions",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Halseus | Local AI Solutions",
      description: "Halseus offers cutting-edge local AI solutions for businesses and individuals.",
      images: [`${defaultUrl}/assets/open-graph.png`], // Replace with actual image
    },
    alternates: {
      canonical: defaultUrl,
    },
  };

export default async function Home() {



  return (
    <>
      <main className="">
       <HeroSection/>
       <CustomChatGPT />
       <RunAILocally imageSrc={aipicture}/>
       <AILocalBenefits/>
       <WhyCustomAIModels/>
       <TrainAIModels imageSrc={ourai}/>
      </main>
    </>
  );
}
