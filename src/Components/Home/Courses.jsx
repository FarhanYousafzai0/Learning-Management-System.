import React, { useState, useEffect } from "react";
import { courses } from "./WebsiteData/CoursesName";
import { coursesData } from "./WebsiteData/CouresStrategy";
import { LuClock5 } from "react-icons/lu";
import { MdOutlineCalendarViewMonth } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

const Courses = () => {
  const [selected, setSelected] = useState("All"); // Default category
  const [likedItems, setLikedItems] = useState({}); // Track liked items
  const [filterCourses, setFilterCourses] = useState(coursesData); // Initialize with all courses

  // ✅ Function to filter courses based on category
  const handleFilterCourses = (category) => {
    if (category === "All") {
      setFilterCourses(coursesData); // Show all courses when "All" is clicked
    } else {
      const filtered = coursesData.filter((data) => data.category.toLowerCase() === category.toLowerCase());
      setFilterCourses(filtered);
    }
  };

  // ✅ Function to update selected category and apply filtering
  const handleCoursesCategory = (item) => {
    setSelected(item);
    handleFilterCourses(item);
  };

  // ✅ Function to toggle the like button
  const toggleLike = (index) => {
    setLikedItems((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the liked state
    }));
  };

  return (
    <section className="p-3 md:p-10 container mx-auto">
      <h1 className="text-center font-bold md:text-5xl text-3xl">
        Most Popular Courses
      </h1>
      <p className="text-center text-gray-500 mt-4">
        Choose from hundreds of courses from specialist organizations
      </p>

      {/* Courses-Category */}
      <div className="w-full bg-[#E6F0F9] h-max md:h-16 rounded-md mt-5 flex justify-center items-center">
        <div className="w-2/3 text-center mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 justify-center">
          {courses.map((item, index) => (
            <button
              key={index}
              onClick={() => handleCoursesCategory(item)} // ✅ Pass category
              className={`capitalize font-semibold transition-colors py-2 duration-300 rounded-md w-full cursor-pointer text-center ${
                item === selected ? "text-white bg-blue-700" : "text-blue-600 bg-transparent"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Courses-card */}
      <div className="grid grid-cols-1 my-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filterCourses.map((item2, index) => (
          <div key={index} className="rounded-md overflow-hidden shadow-lg cursor-pointer">
            <img src={item2.image} alt="" />
            <div className="card-data p-3 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span
                  style={{ backgroundColor: item2.levelColor }}
                  className={`px-1 rounded-md ${
                    item2.levelColor === "#F0ECF9" ? "text-purple-500" : "text-green-500"
                  }`}
                >
                  {item2.level}
                </span>

                {/* Heart Icon (Like Button) */}
                <div
                  className="cursor-pointer transition-transform duration-300 active:scale-90"
                  onClick={() => toggleLike(index)}
                >
                  {likedItems[index] ? (
                    <FaHeart className="text-red-500 transition-colors duration-300" size={20} />
                  ) : (
                    <FiHeart className="text-gray-600 transition-colors duration-300 hover:text-red-500" size={20} />
                  )}
                </div>
              </div>

              <h3 className="text-2xl font-semibold hover:text-green-500 cursor-pointer transition-all">
                {item2.title}
              </h3>
              <p className="text-gray-500">{item2.desc}</p>
              <div className="flex items-center gap-1">
                <span>{Array.from({ length: item2.rating }).map((_, index) => "⭐")}</span>
                <p>{item2.rating}</p>/5.0
              </div>
              <span className="h-[1px] w-full bg-gray-200"></span>

              <div className="flex items-center justify-between">
                <p className="flex items-center text-[1.1rem] gap-2">
                  <LuClock5 scale={50} className="text-red-600" />
                  {item2.time}
                </p>
                <p className="flex items-center gap-2">
                  <MdOutlineCalendarViewMonth scale={50} className="text-orange-500" />
                  {item2.lectures}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
