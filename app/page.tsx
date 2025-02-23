import image1 from "../public/assets/pexels-pixabay-158826.jpg";
import HeroSection from "@/components/homepage/hero-section";
import ProductsSection from "@/components/homepage/products";
import RunAILocally from "@/components/homepage/run-ailocally";
import aipicture from "../public/assets/pexels-pixabay-158826.jpg"
import TrainAIModels from "@/components/homepage/train-ai";
import trainaipic from "../public/assets/aimodel.webp"
import bgimage from "../public/assets/pexels-googledeepmind-17483907.jpg";
import CustomChatGPT from "@/components/homepage/chatgpt";
import WhyCustomAIModels from "@/components/homepage/explanation";
export default async function Home() {


  return (
    <>
      <main className="">
       <HeroSection/>
       <WhyCustomAIModels/>
       <RunAILocally imageSrc={aipicture}/>
       <TrainAIModels imageSrc={trainaipic}/>
       <CustomChatGPT />

      </main>
    </>
  );
}
