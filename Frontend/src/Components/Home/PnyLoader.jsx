import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

const PnyLoader = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);
  const controls = useAnimation();
  const letterControls = useAnimation();
  const particleControls = useAnimation();

  // Animation sequence
  useEffect(() => {
    const sequence = async () => {
      // Phase 1: Initial circle pulse
      setPhase(1);
      await controls.start({
        scale: [1, 1.2, 1],
        opacity: 1,
        transition: { duration: 1.5 }
      });

      // Phase 2: Draw PNY letters
      setPhase(2);
      await letterControls.start({
        pathLength: 1,
        opacity: 1,
        transition: { duration: 1.5 }
      });

      // Phase 3: Fill with gradient
      await letterControls.start({
        fill: 'url(#pny-gradient)',
        transition: { duration: 0.8 }
      });

      // Phase 4: Explode effect
      setPhase(3);
      await particleControls.start({
        opacity: 1,
        scale: 10,
        transition: { duration: 0.8 }
      });

      // Final completion
      setTimeout(onComplete, 500);
    };

    sequence();
  }, []);

  // Particle explosion effect
  const renderParticles = () => {
    return Array.from({ length: 50 }).map((_, i) => {
      const angle = (i / 50) * Math.PI * 2;
      const distance = 0.5 + Math.random() * 2;
      const size = 5 + Math.random() * 10;
      const delay = Math.random() * 0.5;

      return (
        <motion.div
          key={i}
          initial={{
            x: 0,
            y: 0,
            opacity: 0,
            scale: 1
          }}
          animate={particleControls}
          custom={i}
          transition={{
            delay: delay,
            type: 'spring',
            damping: 20,
            stiffness: 100 + Math.random() * 100
          }}
          style={{
            position: 'absolute',
            width: `${size}px`,
            height: `${size}px`,
            background: `hsl(${Math.random() * 60 + 200}, 80%, 60%)`,
            borderRadius: '50%',
            x: Math.cos(angle) * distance * 100,
            y: Math.sin(angle) * distance * 100,
            opacity: 0
          }}
        />
      );
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden">
      <svg width="0" height="0">
        <defs>
          <linearGradient id="pny-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
      </svg>

      {/* Initial pulse circle */}
      <AnimatePresence>
        {phase === 1 && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={controls}
            exit={{ scale: 1.5, opacity: 0 }}
            className="w-32 h-32 border-4 border-purple-500 rounded-full border-t-transparent"
            style={{ position: 'absolute' }}
          />
        )}
      </AnimatePresence>

      {/* PNY Letters */}
      {phase >= 2 && (
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="relative"
        >
          <svg width="200" height="200" viewBox="0 0 200 200">
            {/* P Letter */}
            <motion.path
              d="M30,50 L30,150 L80,150 C110,150 110,120 80,120 L60,120 L60,50 Z"
              fill="transparent"
              stroke="#4f46e5"
              strokeWidth="8"
              strokeLinecap="round"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={letterControls}
            />
            
            {/* N Letter */}
            <motion.path
              d="M100,50 L100,150 L130,50 L160,50 L160,150"
              fill="transparent"
              stroke="#4f46e5"
              strokeWidth="8"
              strokeLinecap="round"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={letterControls}
              transition={{ delay: 0.3 }}
            />
            
            {/* Y Letter */}
            <motion.path
              d="M180,50 L200,50 L190,100 L190,150"
              fill="transparent"
              stroke="#4f46e5"
              strokeWidth="8"
              strokeLinecap="round"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={letterControls}
              transition={{ delay: 0.6 }}
            />
          </svg>
        </motion.div>
      )}

      {/* Particle explosion */}
      {phase >= 3 && (
        <div className="absolute inset-0 flex items-center justify-center">
          {renderParticles()}
        </div>
      )}

      {/* Tagline text */}
      <motion.div
        className="absolute bottom-20 text-white text-xl font-medium"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: phase >= 2 ? 1 : 0, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        Empowering Digital Futures
      </motion.div>
    </div>
  );
};

export default PnyLoader;