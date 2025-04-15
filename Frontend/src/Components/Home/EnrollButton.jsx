import React from 'react';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { FaUserGraduate } from 'react-icons/fa'; // Importing an icon from react-icons

const EnrollButton = () => {
  return (
    <motion.a
    href='/admin/dashboard'
      className="relative p-2 gap-2 cursor-pointer bg-green-500 rounded-md hidden lg:flex items-center overflow-hidden"
      whileHover="hover"
      initial="rest"
    >
      {/* Icon */}
      <FaUserGraduate className="relative z-10 text-white text-lg" />

      {/* Button text */}
      <Typography className="relative z-10 text-white text-sm">
        Enroll Now
      </Typography>
      
      {/* Animated SVG wave */}
      <motion.svg
        className="absolute left-0 top-0 h-full text-white"
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
        variants={{
          rest: { width: 0 },
          hover: { 
            width: '100%',
            transition: { duration: 0.6, ease: [0.83, 0, 0.17, 1] }
          }
        }}
      >
        <path
          d="M0,10 C15,15 30,5 45,10 S75,5 90,10 S105,5 120,10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          variants={{
            rest: { strokeDashoffset: 1000 },
            hover: { 
              strokeDashoffset: 0,
              transition: { 
                duration: 1.2,
                ease: [0.83, 0, 0.17, 1],
                delay: 0.15
              }
            }
          }}
        />
      </motion.svg>
      
      {/* Background fill that follows the wave */}
      <motion.div
        className="absolute inset-0 bg-green-600 z-0"
        variants={{
          rest: { scaleX: 0, transformOrigin: 'left center' },
          hover: { 
            scaleX: 1,
            transition: { 
              duration: 0.6,
              ease: [0.83, 0, 0.17, 1],
              delay: 0.1
            }
          }
        }}
      />
    </motion.a>
  );
};

export default EnrollButton;