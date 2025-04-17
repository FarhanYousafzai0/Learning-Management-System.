import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Removed unused FaPlayCircle
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';
import HeroVideo from './HeroVideo';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-indigo-100 filter blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium">
              <span>🚀 Trending Now</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              Unlock <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Limitless</span> Learning
              <span className="relative inline-block ml-2">
                <svg 
                  className="absolute -bottom-2 -left-2 -z-10 w-full h-auto" 
                  width="180" 
                  height="30" 
                  viewBox="0 0 180 30"
                >
                  <path 
                    d="M5,15 C30,25 60,5 90,15 C120,25 150,5 175,15" 
                    stroke="#6366f1" 
                    strokeWidth="3" 
                    fill="none" 
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg"
            >
              Join our online learning platform with 5,000+ courses & 10 million students. 
              Learn from industry experts and acquire skills that matter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              {['Learn with experts', 'Get certified', 'Premium membership'].map((item, index) => (
                <div key={index} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                  <FaCheckCircle className="text-emerald-500" />
                  <span className="text-gray-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap items-center gap-6"
            >
              <MagneticButton>
                Start Learning Free
              </MagneticButton>

              <button className="group flex items-center gap-2 font-medium">
                <HeroVideo />
              </button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 600 500" 
                className="w-full h-auto max-w-lg mx-auto"
              >
                {/* Background circle */}
                <circle cx="300" cy="250" r="220" fill="#6366F1" opacity="0.1" />
                
                {/* Main illustration */}
                <g transform="translate(100, 100)">
                  {/* Person */}
                  <path 
                    d="M200,300 Q220,280 240,300 Q260,320 280,300 L300,280 L320,300 Q340,320 360,300 Q380,280 400,300"
                    stroke="#4F46E5" 
                    strokeWidth="8" 
                    fill="none"
                  />
                  
                  {/* Book */}
                  <rect x="220" y="220" width="160" height="120" rx="5" fill="#7C3AED" />
                  <line x1="220" y1="250" x2="380" y2="250" stroke="#FFFFFF" strokeWidth="2" />
                  <line x1="220" y1="280" x2="380" y2="280" stroke="#FFFFFF" strokeWidth="2" />
                  <line x1="220" y1="310" x2="380" y2="310" stroke="#FFFFFF" strokeWidth="2" />
                  
                  {/* Graduation cap */}
                  <path 
                    d="M260,180 Q300,150 340,180 L320,200 Q300,190 280,200 Z"
                    fill="#5B21B6"
                  />
                  
                  {/* Stars */}
                  <g fill="#F59E0B">
                    <path d="M120,120 L130,150 L160,150 L140,170 L150,200 L120,185 L90,200 L100,170 L80,150 L110,150 Z" />
                    <path d="M400,80 L410,110 L440,110 L420,130 L430,160 L400,145 L370,160 L380,130 L360,110 L390,110 Z" />
                    <path d="M450,220 L460,250 L490,250 L470,270 L480,300 L450,285 L420,300 L430,270 L410,250 L440,250 Z" />
                  </g>
                </g>
                
                {/* Floating elements */}
                <g opacity="0.6">
                  <circle cx="100" cy="100" r="8" fill="#8B5CF6" />
                  <circle cx="500" cy="150" r="6" fill="#7C3AED" />
                  <circle cx="80" cy="400" r="10" fill="#6D28D9" />
                  <circle cx="550" cy="350" r="7" fill="#5B21B6" />
                </g>
              </svg>
              
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((item) => (
                      <img
                        key={item}
                        src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item + 10}.jpg`}
                        alt="Happy student"
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">10M+ Students</p>
                    <p className="text-xs text-gray-500">Joined our community</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;