import React, { useState, useEffect, useRef } from 'react';
import { Avatar, TextField } from '@mui/material';
import { Moon, Sun, Laptop, Settings, HelpCircle, LogOut, User } from 'lucide-react';
import { BiCategoryAlt } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { nav_data } from './NavData';
import { FaSearch } from 'react-icons/fa';
import SmallNavigation from './SmallNavigation';
import Typography from '@mui/material/Typography';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import EnrollButton from './EnrollButton';
import { useWindowScroll } from 'react-use';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import MagneticButton from './MagneticButton';

const NavBar = () => {
  const [rotate, setRotate] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isCategoryHovered, setIsCategoryHovered] = useState(false);
  
  // Scroll visibility controls
  const navContainerRef = useRef();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { y: currentScrollY } = useWindowScroll();

  // Scroll event listener
  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsNavVisible(false);
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  // GSAP animation
  useGSAP(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.3,
      ease: "power2.inOut"
    });
  }, [isNavVisible]);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuEnter = (index) => {
    setActiveMenu(index);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  const categories = [
    'Web Development',
    'Mobile Development',
    'Data Science',
    'Artificial Intelligence',
    'Cloud Computing',
    'Cyber Security',
    'UI/UX Design',
    'Digital Marketing'
  ];

  return (
    <>
      <div 
        ref={navContainerRef}
        className="fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300"
        style={{
          transform: `translateY(${isNavVisible ? '0' : '-100'}px)`,
          opacity: isNavVisible ? 1 : 0
        }}
      >
        <div className="flex px-5 md:px-10 py-5 items-center rounded-md justify-between shadow-lg">
          {/* Logo and Category */}
          <div className="flex items-center gap-5">
            <Link to="/">
              <img
                src="https://vectorjungal.com/files/preview/1280x405/117222840473b5i1fifzdt6ggfancin8phyitwa9batprdmtuhcazzbvlyyfqybsxwaa1hpebaeaojntubnixwm4nxhgg4xpg9rmam8ilny2gle.png"
                className="w-30"
                alt="Logo"
              />
            </Link>
            
            <div className="relative flex gap-3">
              <div 
                className="p-2 gap-1 cursor-pointer bg-[#E6F0F9] rounded-md hidden lg:flex items-center"
                onMouseEnter={() => setIsCategoryHovered(true)}
                onMouseLeave={() => setIsCategoryHovered(false)}
              >
                <BiCategoryAlt className="text-[#066AC9]" />
                <Typography className="text-[#066AC9] text-sm">Category</Typography>
              </div>

             <MagneticButton>
              Join Us
             </MagneticButton>

              <AnimatePresence>
                {isCategoryHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 z-50"
                    onMouseEnter={() => setIsCategoryHovered(true)}
                    onMouseLeave={() => setIsCategoryHovered(false)}
                  >
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
                      <div className="bg-primary p-3">
                        <h3 className="text-white font-medium">All Categories</h3>
                      </div>
                      
                      <ul className="py-1">
                        {categories.map((category, index) => (
                          <motion.li
                            key={category}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ backgroundColor: '#E6F0F9' }}
                            className="px-4 py-2 cursor-pointer transition-colors"
                          >
                            <div className="flex items-center">
                              <span className="text-gray-700">{category}</span>
                            </div>
                          </motion.li>
                        ))}
                      </ul>
                      
                      <div className="bg-gray-50 px-4 py-2 border-t border-gray-200">
                        <span className="text-xs text-gray-500">Browse all courses</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Menu */}
          <ul className="hidden lg:flex items-center gap-3">
            {nav_data.map((item, index) => (
              <li 
                key={index} 
                className="relative group text-black cursor-pointer"
                onMouseEnter={() => handleMenuEnter(index)}
                onMouseLeave={handleMenuLeave}
              >
                <NavLink
                  to={item.link || '#'}
                  className={({ isActive }) => 
                    `hover:text-[#066AC9] flex items-center gap-1 ${isActive ? 'text-[#066AC9] font-medium' : 'text-gray-700'}`
                  }
                >
                  {item.icon && React.cloneElement(item.icon, { className: "text-current" })}
                  {item.title}
                  {item.list && <IoIosArrowDown className="transition-transform duration-200 group-hover:rotate-180" />}
                </NavLink>
                
                {item.list && activeMenu === index && (
                  <ul 
                    className="shadow-lg bg-white absolute z-50 w-[200px] p-2 rounded-md mt-1 border border-gray-100"
                    onMouseEnter={() => handleMenuEnter(index)}
                  >
                    {item.list.map((item1, index1) => (
                      <li
                        key={index1}
                        className="hover:bg-[#E6F0F9] px-3 py-2 rounded-md relative group/sub transition-colors duration-200"
                      >
                        <div className="flex items-center justify-between">
                          {item1.link ? (
                            <Link to={item1.link} className="w-full text-sm hover:font-semibold">
                              <span className='flex items-center gap-2'>
                                {item1.icon && React.cloneElement(item1.icon, { className: "text-current" })}
                                {item1.title}
                              </span>
                            </Link>
                          ) : (
                            <span className='flex items-center gap-2 hover:font-semibold'>
                              {item1.icon && React.cloneElement(item1.icon, { className: "text-current" })}
                              {item1.title}
                            </span>
                          )}
                          {item1.subList && <BsThreeDots className="text-xs" />}
                        </div>
                        
                        {item1.subList && (
                          <ul className="shadow-lg bg-white absolute left-full top-0 ml-1 w-[240px] opacity-0 group-hover/sub:opacity-100 border border-gray-100 rounded-md transition-opacity duration-200">
                            {item1.subList.map((item2, index2) => (
                              <li
                                key={index2}
                                className="hover:bg-[#E6F0F9] px-3 py-2 group/subsub rounded-md relative transition-colors duration-200"
                              >
                                <div className="flex items-center justify-between text-sm hover:font-semibold">
                                  {item2.link ? (
                                    <Link to={item2.link} className="w-full flex items-center gap-2">
                                      {item2.icon && React.cloneElement(item2.icon, { className: "text-current" })}
                                      {item2.title}
                                    </Link>
                                  ) : (
                                    <span className="flex items-center gap-2">
                                      {item2.icon && React.cloneElement(item2.icon, { className: "text-current" })}
                                      {item2.title}
                                    </span>
                                  )}
                                  {item2.subSubList && <BsThreeDots className="text-xs" />}
                                </div>
                                
                                {item2.subSubList && (
                                  <ul className="shadow-lg bg-white absolute left-full top-0 ml-1 w-[240px] opacity-0 group-hover/subsub:opacity-100 border border-gray-100 rounded-md transition-opacity duration-200">
                                    {item2.subSubList.map((item3, index3) => (
                                      <li 
                                        key={index3} 
                                        className="hover:bg-[#E6F0F9] px-3 py-2 rounded-md transition-colors duration-200 hover:font-semibold"
                                      >
                                        {item3.link ? (
                                          <Link to={item3.link} className="w-full block text-sm items-center gap-2">
                                            {item3.icon && React.cloneElement(item3.icon, { className: "text-current" })}
                                            {item3.title}
                                          </Link>
                                        ) : (
                                          <span className="text-sm flex items-center gap-2">
                                            {item3.icon && React.cloneElement(item3.icon, { className: "text-current" })}
                                            {item3.title}
                                          </span>
                                        )}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Search bar & avatar */}
          <div className="flex items-center gap-5">
            <div className="relative hidden lg:flex">
              <TextField
                size="small"
                placeholder="Search"
                label="Search"
                variant="outlined"
                className="w-64"
              />
              <FaSearch className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer hover:text-[#066AC9] text-[#747579]" />
            </div>

            {/* Hamburger Menu */}
            <div
              onClick={() => setRotate(!rotate)}
              className="flex lg:hidden cursor-pointer w-7 h-5 relative flex-col gap-1"
            >
              <span className={`w-full h-[2.5px] rounded-md bg-[#747579] transition-all duration-300 ${rotate ? "rotate-45 -translate-y-1/2 absolute" : ""}`} />
              <span className={`w-full h-[2.5px] rounded-md bg-[#747579] transition-all duration-300 ${rotate ? "opacity-0" : ""}`} />
              <span className={`w-full h-[2.5px] rounded-md bg-[#747579] transition-all duration-300 ${rotate ? "-rotate-45 translate-y-1/2 absolute" : ""}`} />
            </div>

            {/* Avatar & Dropdown */}
            <div className="relative">
  <Avatar
    onClick={handleOpen}
    sx={{ 
      width: 42, 
      height: 42,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'scale(1.1)',
        boxShadow: '0 0 0 3px rgba(99, 102, 241, 0.3)'
      }
    }}
    src="https://themes.stackbros.in/eduport_r/assets/01-7N0KytgQ.jpg"
  />
  
  <div className={`absolute right-0 top-16 w-72 bg-white rounded-xl shadow-2xl z-50 overflow-hidden transition-all duration-300 transform ${open ? 'flex flex-col opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
    {/* Header with user info */}
    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-gray-100">
      <Avatar 
        sx={{ 
          width: 52, 
          height: 52,
          border: '2px solid #6366f1'
        }} 
        src="https://themes.stackbros.in/eduport_r/assets/01-7N0KytgQ.jpg" 
      />
      <div>
        <h3 className="font-semibold text-gray-800">Farhan Yousafzai</h3>
        <p className="text-xs text-gray-500">Admin</p>
      </div>
    </div>

    {/* Menu items */}
    <div className="flex flex-col p-2 space-y-1">
      <Link 
        to="/profile" 
        className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-50 transition-all duration-200 text-gray-700 hover:text-indigo-600 group"
      >
        <User size={18} className="text-gray-500 group-hover:text-indigo-600" />
        <span className="text-sm font-medium">My Profile</span>
      </Link>
      
      <Link 
        to="/settings" 
        className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-50 transition-all duration-200 text-gray-700 hover:text-indigo-600 group"
      >
        <Settings size={18} className="text-gray-500 group-hover:text-indigo-600" />
        <span className="text-sm font-medium">Account Settings</span>
      </Link>
      
      <Link 
        to="/help" 
        className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-50 transition-all duration-200 text-gray-700 hover:text-indigo-600 group"
      >
        <HelpCircle size={18} className="text-gray-500 group-hover:text-indigo-600" />
        <span className="text-sm font-medium">Help Center</span>
      </Link>
    </div>

    {/* Theme switcher */}
    <div className="flex justify-between items-center p-3 border-t border-gray-100">
      <span className="text-sm font-medium text-gray-600">Theme</span>
      <div className="flex items-center gap-1">
        <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200" title="Light">
          <Sun size={16} className="text-yellow-500" />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200" title="Dark">
          <Moon size={16} className="text-indigo-600" />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200" title="Auto">
          <Laptop size={16} className="text-gray-600" />
        </button>
      </div>
    </div>

    {/* Logout button */}
    <Link to="/login" className="mt-2 mx-2 mb-3 py-2 px-4 cursor-pointer rounded-lg flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-rose-600 text-white font-medium hover:from-red-600 hover:to-rose-700 transition-all duration-300 shadow hover:shadow-md">
      <LogOut size={16} className="text-white" />
      <span>Sign Out</span>
    </Link>
  </div>
</div>
          </div>
        </div>
      </div>

      {/* Add padding to prevent content jump */}
      <div className="pt-24"></div>

      {/* Small Nav for Mobile */}
      <SmallNavigation open={rotate} />
    </>
  );
};

export default NavBar;