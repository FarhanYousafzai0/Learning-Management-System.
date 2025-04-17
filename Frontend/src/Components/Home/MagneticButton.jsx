import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const MagneticButton = ({ 
  children, 
  className = '', 
  hoverScale = 1.1, 
  magneticPull = 0.2 
}) => {
  const buttonRef = useRef(null);
  
  const handleMouseMove = (e) => {
    const { current: button } = buttonRef;
    if (!button) return;
    
    const { left, top, width, height } = button.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * magneticPull;
    const y = (e.clientY - top - height / 2) * magneticPull;
    
    button.style.transform = `translate(${x}px, ${y}px)`;
  };
  
  const handleMouseLeave = () => {
    const { current: button } = buttonRef;
    if (button) {
      button.style.transform = 'translate(0, 0)';
    }
  };

  return (
    <motion.div
      className={`relative inline-block ${className}`}
      whileHover={{ scale: hoverScale }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
    >
      <button
        ref={buttonRef}
        className="relative z-10 md:px-8 px-5 p-2 md:py-4 cursor-pointer bg-gradient-to-r whitespace-nowrap from-indigo-600 to-purple-600 text-white font-medium rounded-md shadow-lg overflow-hidden group"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <span className="relative z-20 flex items-center gap-2">
          {children}
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
        
        {/* Animated background */}
        <motion.span 
          className="absolute inset-0 z-0 bg-gradient-to-r from-purple-600 to-indigo-700 opacity-0 group-hover:opacity-100"
          initial={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </button>
      
      {/* Subtlet pulse animation */}
      <motion.div 
        className="absolute inset-0 bg-indigo-500 rounded-md opacity-0 group-hover:opacity-20"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0, 0.2, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: 'easeOut'
        }}
      />
    </motion.div>
  );
};

export default MagneticButton;