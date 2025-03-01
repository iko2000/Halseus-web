import HeroSection from "@/components/homepage/hero-section";
import RunAILocally from "@/components/homepage/run-ailocally";
import aipicture from "../public/assets/pexels-pixabay-158826.jpg"
import TrainAIModels from "@/components/homepage/train-ai";
import trainaipic from "../public/assets/aimodel.webp"
import CustomChatGPT from "@/components/homepage/chatgpt";
import WhyCustomAIModels from "@/components/homepage/explanation";
import AILocalBenefits from "@/components/homepage/Ai-benefits";
export default async function Home() {



  return (
    <>
      <main className="">
       <HeroSection/>
       <CustomChatGPT />
       <RunAILocally imageSrc={aipicture}/>
       <AILocalBenefits/>
       <WhyCustomAIModels/>
       <TrainAIModels imageSrc={trainaipic}/>
      </main>
    </>
  );
}
