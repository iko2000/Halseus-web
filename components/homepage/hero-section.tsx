'use client'; 
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowDown, FaRocket, FaShieldAlt, FaLock } from "react-icons/fa";
import RotatingText from '../reactbits/roating.-text';
import transparentlogo from "../../public/assets/logotransparent.png";
import Image from 'next/image';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  // Track mouse position for dynamic effects
  useEffect(() => {
    const handleMouseMove = (e:any) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section className="w-full bg-gradient-to-br from-black via-gray-900 to-black h-screen mt-20 flex justify-center items-center relative overflow-hidden">
      {/* Dynamic Background Gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-red-600/10"
        style={{
          backgroundPosition: `${mousePosition.x * 100}% ${mousePosition.y * 100}%`,
          transition: 'background-position 0.5s ease-out'
        }}
      />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDYwTDYwIDBIMHoiIGZpbGw9IiMxMjEyMTIiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30" />
      
      {/* Content Container */}
      <div className="text-center text-white max-w-5xl px-6 relative z-10">
        {/* Animated Logo */}
        <motion.div
          className="mb-6 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-block relative">
            <motion.h1
              className="text-6xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 tracking-tighter"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%'] }}
              transition={{ duration: 15, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
            >
              HAL<span className="font-extrabold">SEUS</span>
            </motion.h1>
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
            />
          </div>
          
          <motion.p
            className="text-xl sm:text-2xl text-gray-300 mt-2 font-light tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Local AI Solutions
          </motion.p>
        </motion.div>
        
        {/* Feature Icons */}
        <motion.div 
          className="flex justify-center gap-8 mb-8 mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
         <Image  
        width={200}
        height={200}
        src={transparentlogo} alt='Halseus Transparent logo image'/>
        </motion.div>
        
        {/* Animated Text */}
        <motion.div
          className="mt-8 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <div className="p-3 backdrop-blur-sm bg-black/20 rounded-2xl border border-gray-800">
            <div className="flex items-center justify-center gap-3">
              <span className="text-white text-xl sm:text-2xl md:text-3xl font-medium">
                Make AI 
              </span>
              
              <RotatingText
                texts={['Local', 'Private', 'Customized', 'Safe', 'Yours']}
                mainClassName="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
          </div>
        </motion.div>
        
        {/* Call to Action Button */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <button
            className="group relative px-8 py-4 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-lg shadow-lg hover:shadow-blue-500/20"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => {
              const productsSection = document.getElementById('products');
              if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className="relative z-10 flex items-center gap-3">
              Discover Our Solutions
              <motion.span
                animate={isHovering ? { y: [0, 3, 0] } : {}}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                <FaArrowDown />
              </motion.span>
            </span>
            
            {/* Button Shine Effect */}
            <motion.div
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ translateX: isHovering ? '200%' : '-100%' }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            />
          </button>
        </motion.div>
      </div>
      
      {/* Interactive Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => {
          const size = Math.random() * 3 + 1;
          const duration = Math.random() * 10 + 10;
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              style={{
                width: size,
                height: size,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: 'blur(1px)',
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0.5],
              }}
              transition={{
                repeat: Infinity,
                duration,
                delay: Math.random() * 20,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default HeroSection;