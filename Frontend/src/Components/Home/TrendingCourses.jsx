import React from 'react';
import { motion } from 'framer-motion';
import { FaFire, FaStar, FaUsers, FaClock } from 'react-icons/fa';
import { SiJavascript, SiReact, SiNodedotjs, SiPython, } from 'react-icons/si';
import { BsAmazon } from 'react-icons/bs';

const TrendingCourses = () => {
  const courses = [
    {
      title: "Full Stack JavaScript Mastery",
      description: "Build complete web apps with React, Node.js, and MongoDB",
      icon: <SiJavascript className="text-yellow-400 text-3xl" />,
      rating: 4.9,
      students: 12500,
      duration: "8 Weeks",
      color: "from-yellow-100 to-yellow-50"
    },
    {
      title: "React & Next.js Pro",
      description: "Modern frontend development with React 18 and Next.js",
      icon: <SiReact className="text-blue-400 text-3xl" />,
      rating: 4.8,
      students: 9800,
      duration: "6 Weeks",
      color: "from-blue-100 to-blue-50"
    },
    {
      title: "Node.js Backend Wizardry",
      description: "REST APIs, Authentication, and Database Integration",
      icon: <SiNodedotjs className="text-green-500 text-3xl" />,
      rating: 4.7,
      students: 7500,
      duration: "5 Weeks",
      color: "from-green-100 to-green-50"
    },
    {
      title: "Python & Django Full Stack",
      description: "From basics to building complete web applications",
      icon: <SiPython className="text-blue-600 text-3xl" />,
      rating: 4.8,
      students: 6800,
      duration: "7 Weeks",
      color: "from-indigo-100 to-indigo-50"
    },
    {
      title: "AWS Cloud Architecture",
      description: "Master cloud services and deployment strategies",
      icon: <BsAmazon className="text-orange-500 text-3xl" />,
      rating: 4.9,
      students: 5200,
      duration: "4 Weeks",
      color: "from-orange-100 to-orange-50"
    }
  ];

  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-200 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full mb-4">
            <FaFire className="text-white" />
            <span className="text-sm font-semibold">TRENDING NOW</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Hottest Courses
            </span> of 2024
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Master the most in-demand tech skills with our industry-leading courses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100`}
            >
              <div className={`p-6 bg-gradient-to-br ${course.color}`}>
                <div className="flex justify-between items-start">
                  {course.icon}
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/80 rounded-full text-sm font-medium">
                    <FaFire className="text-orange-500" />
                    <span>Trending</span>
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaUsers className="text-blue-500" />
                    <span className="text-sm font-medium">{course.students.toLocaleString()}+</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaClock className="text-purple-500" />
                    <span className="text-sm font-medium">{course.duration}</span>
                  </div>
                </div>
                
                <button className="mt-6 w-full py-3 bg-gradient-to-r cursor-pointer from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300">
                  Enroll Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-md cursor-pointer hover:bg-indigo-600 hover:text-white transition-colors duration-300"
          >
            View All Courses
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TrendingCourses;