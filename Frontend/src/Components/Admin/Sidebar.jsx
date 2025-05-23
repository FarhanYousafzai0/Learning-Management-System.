import React, { useState, useEffect } from "react";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { sidebar_data } from "./SidebarData";
import { Link } from "react-router-dom";

const Sidebar = ({ selected, setSelected }) => {
  const [open, setOpen] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setSidebarOpen(true);
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

  const closeSidebar = () => {
    if (isMobile) setSidebarOpen(false);
  };

  return (
    <>
      {/* Mobile Hamburger Button */}
      {isMobile && (
        <motion.button
          onClick={toggleSidebar}
          className="fixed z-50 top-4 right-4 p-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md shadow-lg"
          aria-label="Toggle menu"
          aria-expanded={sidebarOpen}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {sidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </motion.button>
      )}

      {/* Overlay for mobile when sidebar open */}
      <AnimatePresence>
        {isMobile && sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={closeSidebar}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        initial={isMobile ? { x: '-100%' } : false}
        animate={isMobile ? { x: sidebarOpen ? 0 : '-100%' } : false}
        transition={{ type: 'tween', ease: 'easeInOut' }}
        className={`min-h-screen fixed text-white p-5 z-40 w-64 bg-gradient-to-b from-indigo-700 to-purple-800`}
      >
        <div className="flex flex-col h-full">
          {/* Dashboard Link */}
          <Link
            to="/dashboard"
            onClick={() => {
              setSelected("Dashboard");
              closeSidebar();
            }}
            className={`flex gap-3 items-center px-5 mt-5 py-3 rounded-lg mb-5 cursor-pointer transition-all ${
              selected === "Dashboard" 
                ? "bg-white text-indigo-600 shadow-md" 
                : "hover:bg-white/20 hover:shadow-sm"
            }`}
          >
            <FaHome />
            <span className="text-sm font-semibold">Dashboard</span>
          </Link>

          <p className="text-indigo-200 text-xs uppercase tracking-wider px-5 mb-3 font-medium">Navigation</p>
          
          <ul className="flex-1 overflow-y-auto">
            {sidebar_data?.map((item, index) => (
              <li key={index} className="mb-1">
                {/* Main Menu Item */}
                <motion.div
                  onClick={() => {
                    handleClick(index);
                    if (!item.list) {
                      setSelected(item.title);
                      closeSidebar();
                    }
                  }}
                  className={`flex items-center justify-between px-5 py-3 rounded-lg cursor-pointer transition-all ${
                    selected === item.title && !item.list
                      ? "bg-white text-indigo-600 shadow-md"
                      : "hover:bg-white/20 hover:shadow-sm"
                  }`}
                  aria-expanded={open === index && !!item.list}
                  
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span className="text-sm font-medium">{item.title}</span>
                  </div>
                  {item.list && (
                    open === index ? 
                    <RiArrowDropUpLine className="text-white" /> : 
                    <RiArrowDropDownLine className="text-white" />
                  )}
                </motion.div>

                {/* Submenu Items */}
                {item.list && (
                  <AnimatePresence>
                    {open === index && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-2 mt-1"
                      >
                        {item.list.map((sub, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={sub.path || "#"}
                              onClick={() => {
                                setSelected(sub.title);
                                closeSidebar();
                              }}
                              className={`block ml-8 py-2 px-3 rounded-lg cursor-pointer transition-all text-sm ${
                                selected === sub.title
                                  ? "bg-white text-indigo-600 font-medium shadow-sm"
                                  : "text-indigo-100 hover:bg-white/10"
                              }`}
                            >
                              {sub.title}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;