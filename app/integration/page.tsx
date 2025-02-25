'use client'
import React from 'react'
import Image from 'next/image'
const handleAnimationComplete = () => {
  console.log('Animation completed!');
};



export default function InfrastructurePage() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center flex-col">
        {/* BlurText Component */}
        <BlurText
          text="Isn't this so cool?!"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-4xl mb-12" // Increased text size and margin
        />

        {/* LetterGlitch Container */}
        <div className="w-full max-w-4xl h-96 flex justify-center items-center"> 
          {/* Adjusted container size */}
         
        </div>
      </div>
    </>
  );
}

