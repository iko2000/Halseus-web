import InfiniteScroll from "@/components/reactbits/advanced-coll";
import { FaLightbulb } from "react-icons/fa";

const items:any = [
  {content: (
    <div className="w-full bg-blue-50 rounded-2xl p-5 flex items-center space-x-4">
        <FaLightbulb className="text-blue-600 text-2xl" />
        <p className="text-blue-700">Define your needs and goals for the integration.</p>
    </div>
)},
{content: (
  <div className="w-full h-full bg-blue-50 rounded-2xl p-5 flex items-center space-x-4">
      <FaLightbulb className="text-blue-600 text-2xl" />
      <p className="text-blue-700">Define your needs and goals for the integration.</p>
  </div>
)}
,
{content: (
  <div className="w-full h-full bg-blue-50 rounded-2xl p-5 flex items-center space-x-4">
      <FaLightbulb className="text-blue-600 text-2xl" />
      <p className="text-blue-700">Define your needs and goals for the integration.</p>
  </div>
)}
,
{content: (
  <div className="w-full h-full bg-blue-50 rounded-2xl p-5 flex items-center space-x-4">
      <FaLightbulb className="text-blue-600 text-2xl" />
      <p className="text-blue-700">Define your needs and goals for the integration.</p>
  </div>
)}
,
{content: (
  <div className="w-full h-full bg-blue-50 rounded-2xl p-5 flex items-center space-x-4">
      <FaLightbulb className="text-blue-600 text-2xl" />
      <p className="text-blue-700">Define your needs and goals for the integration.</p>
  </div>
)}
,
{content: (
  <div className="w-full h-full bg-blue-50 rounded-2xl p-5 flex items-center space-x-4">
      <FaLightbulb className="text-blue-600 text-2xl" />
      <p className="text-blue-700">Define your needs and goals for the integration.</p>
  </div>
)}
,
{content: (
  <div className="w-full h-full bg-blue-50 rounded-2xl p-5 flex items-center space-x-4">
      <FaLightbulb className="text-blue-600 text-2xl" />
      <p className="text-blue-700">Define your needs and goals for the integration.</p>
  </div>
)}


];
  

import React from 'react'

export default function Integration() {
  return (
    <section className="w-full h-full">
      <div style={{height: '1000px', position: 'relative'}}>
  <InfiniteScroll
    items={items}
    isTilted={true}
    tiltDirection='left'
    autoplay={true}
    autoplaySpeed={0.1}
    autoplayDirection="down"
    pauseOnHover={true}
  />
</div>
    </section>
  )
}
