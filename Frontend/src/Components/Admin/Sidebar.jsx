import React, { useState, useEffect } from "react";
import { FaHome, FaBars } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { sidebar_data } from "./SidebarData";
import { Link } from "react-router-dom";

const Sidebar = ({ selected, setSelected }) => {
  const [open, setOpen] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = (id) => {
    setOpen(open === id ? null : id);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* Mobile Hamburger Button (only when sidebar is closed) */}
      {isMobile && !sidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed z-50 top-4 right-4 p-2 bg-[#24292D] text-white rounded-md"
        >
          <FaBars size={20} />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`min-h-screen fixed text-white p-5 bg-[#24292D] z-40 transition-all duration-300
          ${isMobile ? (sidebarOpen ? 'left-0' : '-left-full') : 'left-0'}`}
        style={{ width: isMobile ? '80%' : 'auto' }}
      >
        <div className="flex justify-between ">
          

          {/* Mobile Close Button (only when sidebar is open) */}
          {isMobile && sidebarOpen && (
            <button
              onClick={toggleSidebar}
              className="p-1 text-white"
            >
              <FaHome />
            </button>
          )}
        </div>

        <div
          onClick={() => {
            setSelected("Dashboard");
            if (isMobile) setSidebarOpen(false);
          }}
          className={`flex gap-3 items-center px-5 mt-10 py-3 rounded-md mb-5 cursor-pointer ${
            selected === "Dashboard" ? "bg-gray-100 text-black" : "hover:bg-gray-700"
          }`}
        >
          <FaHome />
          <h5 className="text-sm font-semibold">Dashboard</h5>
        </div>

        <p className="text-gray-500">Pages</p>
        <ul className="flex flex-col unstyled gap-3">
          {sidebar_data?.map((item, index) => {
            return (
              <div key={index}>
                <li
                  onClick={() => {
                    handleClick(index);
                    if (!item.list) {
                      setSelected(item.title);
                      if (isMobile) setSidebarOpen(false);
                    }
                  }}
                  className={`flex flex-col py-2 my-3 justify-between px-4 transition-all rounded-md cursor-pointer gap-3 ${
                    selected === item.title && !item.list
                      ? "bg-gray-100 text-black"
                      : "hover:bg-gray-700"
                  }`}
                >
                  <div className="flex gap-3 justify-between items-center">
                    <div className="flex gap-3 items-center">
                      {item.icon}
                      <h5 className="text-sm font-semibold">{item.title}</h5>
                    </div>
                    {item.list && <RiArrowDropDownLine />}
                  </div>
                </li>
                {item.list && (
                  <ul
                    className={`flex transition-all duration-200 flex-col unstyled gap-3 ${
                      open === index
                        ? "max-h-[500px] opacity-100"
                        : "max-h-0 overflow-hidden opacity-0"
                    }`}
                  >
                    {item.list.map((sub, subIndex) => (
                      <li
                        key={subIndex}
                        onClick={() => {
                          setSelected(sub.title);
                          if (isMobile) setSidebarOpen(false);
                        }}
                        className={`ms-10 py-1 px-3 rounded-md cursor-pointer ${
                          selected === sub.title ? "bg-gray-100 text-black" : "hover:bg-gray-700"
                        }`}
                      >
                        {sub.title}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </ul>
      </div>

      {/* Overlay for mobile when sidebar open */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
