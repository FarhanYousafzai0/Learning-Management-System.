import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';

const feedbacks = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Web Development Graduate",
    comment: "This program completely transformed my career. I went from zero coding knowledge to landing a developer job in just 6 months!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Data Science Student",
    comment: "The hands-on projects gave me the portfolio I needed to stand out. I got 3 job offers before even completing the course!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "UX Design Graduate",
    comment: "The mentorship was exceptional. My instructor provided real-world insights you can't get from online tutorials alone.",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Cyber Security Student",
    comment: "The curriculum stays current with industry trends. I'm applying concepts I learned directly to my new role.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/75.jpg"
  }
];

const FeedBack = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Voices of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Success</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our students who transformed their careers through our programs
          </p>
        </motion.div>

        {/* Feedback Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {feedbacks.map((feedback, index) => (
            <motion.div
              key={feedback.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-8 h-full flex flex-col">
                <div className="mb-6 text-indigo-500">
                  <FaQuoteLeft className="text-3xl opacity-20" />
                </div>
                <p className="text-gray-700 mb-6 flex-grow">"{feedback.comment}"</p>
                
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`text-lg ${i < feedback.rating ? 'text-amber-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                
                <div className="flex items-center">
                  <img 
                    src={feedback.avatar} 
                    alt={feedback.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-indigo-100"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{feedback.name}</h4>
                    <p className="text-sm text-gray-500">{feedback.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center cursor-pointer  px-8 py-4 overflow-hidden rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300">
            <span className="relative z-10 flex items-center">
              Read More Reviews
              <IoIosArrowForward className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </button>
        </motion.div>

        {/* Floating decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/3 right-20 w-72 h-72 bg-indigo-100 rounded-full filter blur-3xl opacity-20"></div>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;