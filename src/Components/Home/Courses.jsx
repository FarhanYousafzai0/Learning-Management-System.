import React, { useState } from "react";
import { courses } from "./WebsiteData/CoursesName";

const Courses = () => {
  const [selected, setSelected] = useState("Web Design");

  return (
    <section className="p-3 md:p-10 container mx-auto">
      <h1 className="text-center font-bold md:text-5xl text-3xl">
        Most Popular Courses
      </h1>
      <p className="text-center text-gray-500 mt-4">
        Choose from hundreds of courses from specialist organizations
      </p>

      {/* Courses-Category */}
      <div className="w-full bg-[#E6F0F9] h-max  md:h-16 rounded-md mt-5 flex justify-center items-center">
        <div className="w-2/3 text-center mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 justify-center">
          {courses.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelected(item)}
              className={`capitalize font-semibold transition-colors py-2 duration-300 rounded-md w-full cursor-pointer text-center ${
                item === selected ? "text-white bg-blue-700" : "text-blue-600 bg-transparent"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

{/*  */}

    </section>
  );
};

export default Courses;
