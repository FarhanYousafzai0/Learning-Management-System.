import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTimes, FaQuestion } from 'react-icons/fa';

const WhatsAppButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const phoneNumber = '+9230977746685'; // Replace with your PNY WhatsApp number
  const message = 'Hello PNY, I have a question about your courses!';

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.5 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="absolute bottom-16 right-0 mb-4 bg-white shadow-xl rounded-lg p-4 w-64"
          >
            <h4 className="font-bold text-gray-800 mb-2">Need help?</h4>
            <p className="text-sm text-gray-600 mb-3">
              Chat with our admissions team on WhatsApp for quick assistance.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 cursor-pointer text-white py-2 px-4 rounded-lg flex items-center justify-center transition-colors"
            >
              <FaWhatsapp className="mr-2" /> Start Chat
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        {isExpanded ? (
          <motion.button
            initial={{ rotate: 0 }}
            animate={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
            onClick={toggleMenu}
            className="bg-red-500 text-white p-4 rounded-full shadow-lg cursor-pointer flex items-center justify-center"
            aria-label="Close menu"
          >
            <FaTimes size={24} />
          </motion.button>
        ) : (
          <motion.button
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, repeatDelay: 5, duration: 1.5 }}
            onClick={toggleMenu}
            className="bg-green-500 text-white p-4 rounded-full shadow-lg cursor-pointer flex items-center justify-center"
            aria-label="Contact us"
          >
            <FaWhatsapp size={28} />
          </motion.button>
        )}
      </motion.div>
    </div>
  );
};

export default WhatsAppButton;