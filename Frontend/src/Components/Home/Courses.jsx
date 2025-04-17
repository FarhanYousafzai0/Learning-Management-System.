import React, { useState } from "react";
import { courses } from "./WebsiteData/CoursesName";
import { coursesData } from "./WebsiteData/CouresStrategy";
import { LuClock5 } from "react-icons/lu";
import { MdOutlineCalendarViewMonth } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { motion } from 'framer-motion';

const Courses = () => {
  const [selected, setSelected] = useState("All");
  const [likedItems, setLikedItems] = useState({});
  const [filterCourses, setFilterCourses] = useState(coursesData);

  const handleFilterCourses = (category) => {
    if (category === "All") {
      setFilterCourses(coursesData);
    } else {
      const filtered = coursesData.filter((data) => 
        data.category.toLowerCase() === category.toLowerCase()
      );
      setFilterCourses(filtered);
    }
  };

  const handleCoursesCategory = (item) => {
    setSelected(item);
    handleFilterCourses(item);
  };

  const toggleLike = (index) => {
    setLikedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <motion.section
      initial={{ opacity: 0, translateY: -20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="p-3 md:p-10 container mx-auto"
    >
      <div className="text-center mb-10">
        <motion.h1 
          className="text-3xl md:text-5xl font-bold mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Most <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Popular</span> Courses
        </motion.h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Choose from hundreds of courses from specialist organizations
        </p>
      </div>

      {/* Courses-Category */}
      <div className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 h-max md:h-16 rounded-xl shadow-md mb-10">
        <div className="w-full md:w-4/5 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 md:gap-2 p-1">
          {courses.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => handleCoursesCategory(item)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`capitalize font-medium py-2 md:py-3 rounded-lg transition-all duration-300 ${
                item === selected 
                  ? "bg-white text-indigo-600 shadow-md" 
                  : "text-white hover:bg-white/20"
              }`}
            >
              {item}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Courses-card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filterCourses.map((item2, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            <div className="relative">
              <img 
                src={item2.image} 
                alt={item2.title} 
                className="w-full h-48 object-cover"
              />
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => toggleLike(index)}
                className="absolute top-3 right-3 bg-white/80 p-2 rounded-full cursor-pointer backdrop-blur-sm"
              >
                {likedItems[index] ? (
                  <FaHeart className="text-red-500" size={20} />
                ) : (
                  <FiHeart className="text-gray-600 hover:text-red-500" size={20} />
                )}
              </motion.div>
            </div>

            <div className="p-5">
              <div className="flex justify-between items-start mb-3">
                <span
                  style={{ backgroundColor: item2.levelColor }}
                  className={`px-2 py-1 rounded-md text-xs font-medium ${
                    item2.levelColor === "#F0ECF9" ? "text-purple-600" : "text-green-600"
                  }`}
                >
                  {item2.level}
                </span>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-gray-700 font-medium">{item2.rating}</span>
                  <span className="text-gray-400">/5.0</span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 hover:text-indigo-600 transition-colors">
                {item2.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2">{item2.desc}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-600 border-t border-gray-100 pt-3">
                <div className="flex items-center gap-2">
                  <LuClock5 className="text-indigo-500" />
                  <span>{item2.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineCalendarViewMonth className="text-orange-500" />
                  <span>{item2.lectures}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Courses;