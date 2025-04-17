import React from 'react';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaArrowRight } from 'react-icons/fa';

const BecomeInstructor = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="px-4 py-16 md:py-24 lg:px-8"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 shadow-2xl">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500 rounded-full opacity-20 filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-500 rounded-full opacity-20 filter blur-3xl"></div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-10 md:p-16">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm w-fit">
              <FaChalkboardTeacher className="text-xl text-amber-300" />
              <span className="text-sm font-semibold text-white">Join Our Team</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Share Your Knowledge <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                Become an Instructor
              </span>
            </h2>
            
            <p className="text-lg text-indigo-100 max-w-2xl">
              Join our community of expert educators and inspire the next generation of learners. 
              Whether you're a seasoned professional or a passionate specialist, we provide the 
              platform to showcase your expertise.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-white text-sm">Flexible schedule</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-white text-sm">Competitive earnings</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-white text-sm">Global audience</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center lg:items-end">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden px-8 py-4 bg-amber-400 text-gray-900 font-bold rounded-md cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Teaching Today
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <motion.span
                className="absolute inset-0 z-0 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((item) => (
                  <img
                    key={item}
                    src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item + 20}.jpg`}
                    alt="Instructor"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="text-white text-sm">
                <p>Join <span className="font-bold">250+</span> instructors</p>
                <p className="text-indigo-200">4.9/5 average rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default BecomeInstructor;