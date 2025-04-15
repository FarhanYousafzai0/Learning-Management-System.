import { Avatar, TextField } from '@mui/material';
import { Moon, Sun, Laptop, Settings, HelpCircle, LogOut, User } from 'lucide-react';
import React, { useState } from 'react';
import { BiCategoryAlt } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { nav_data } from './NavData';
import { FaSearch } from 'react-icons/fa';
import SmallNavigation from './SmallNavigation';
import Typography from '@mui/material/Typography';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  const [rotate, setRotate] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuEnter = (index) => {
    setActiveMenu(index);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  return (
    <>
      <div className="flex px-5 md:px-10 py-5 items-center justify-between shadow-lg">
        {/* Logo and Category */}
        <div className="flex items-center gap-5">
          <Link to="/">
            <img
              src="https://vectorjungal.com/files/preview/1280x405/117222840473b5i1fifzdt6ggfancin8phyitwa9batprdmtuhcazzbvlyyfqybsxwaa1hpebaeaojntubnixwm4nxhgg4xpg9rmam8ilny2gle.png"
              className="w-30"
              alt="Logo"
            />
          </Link>
          <div className="p-2 gap-1 cursor-pointer bg-[#E6F0F9] rounded-md hidden lg:flex items-center">
            <BiCategoryAlt className="text-[#066AC9]" />
            <Typography className="text-[#066AC9] text-sm">Category</Typography>
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
                          <Link to={item1.link} className="w-full text-sm">
                            {item1.title}
                          </Link>
                        ) : (
                          <span className="text-sm">{item1.title}</span>
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
                              <div className="flex items-center justify-between text-sm">
                                {item2.link ? (
                                  <Link to={item2.link} className="w-full">
                                    {item2.title}
                                  </Link>
                                ) : (
                                  <span>{item2.title}</span>
                                )}
                                {item2.subSubList && <BsThreeDots className="text-xs" />}
                              </div>
                              
                              {item2.subSubList && (
                                <ul className="shadow-lg bg-white absolute left-full top-0 ml-1 w-[240px] opacity-0 group-hover/subsub:opacity-100 border border-gray-100 rounded-md transition-opacity duration-200">
                                  {item2.subSubList.map((item3, index3) => (
                                    <li 
                                      key={index3} 
                                      className="hover:bg-[#E6F0F9] px-3 py-2 rounded-md transition-colors duration-200"
                                    >
                                      {item3.link ? (
                                        <Link to={item3.link} className="w-full block text-sm">
                                          {item3.title}
                                        </Link>
                                      ) : (
                                        <span className="text-sm">{item3.title}</span>
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

          {/* Avatar & Dropdown - Improved Styling */}
          <div className="relative">
            <Avatar
              onClick={handleOpen}
              sx={{ 
                width: 40, 
                height: 40,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                  boxShadow: '0 0 0 2px #E6F0F9'
                }
              }}
              src="https://themes.stackbros.in/eduport_r/assets/01-7N0KytgQ.jpg"
            />
            
            {/* Enhanced Dropdown Menu */}
            <div className={`absolute right-0 top-14 w-72 bg-white rounded-xl shadow-xl z-50 overflow-hidden transition-all duration-300 ${open ? 'flex flex-col opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              {/* User Info Section */}
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#E6F0F9] to-[#F0F7FC]">
                <Avatar 
                  sx={{ width: 48, height: 48 }} 
                  src="https://themes.stackbros.in/eduport_r/assets/01-7N0KytgQ.jpg" 
                />
                <div>
                  <h3 className="font-semibold text-gray-800">Farhan</h3>
                  <p className="text-xs text-gray-500">farhan@gmail.com</p>
                </div>
              </div>

              {/* Menu Options */}
              <div className="flex flex-col p-2">
                <Link 
                  to="/profile" 
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#E6F0F9] transition-colors duration-200 text-gray-700 hover:text-[#066AC9]"
                >
                  <User size={18} className="text-gray-500" />
                  <span className="text-sm font-medium">Edit Profile</span>
                </Link>
                
                <Link 
                  to="/settings" 
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#E6F0F9] transition-colors duration-200 text-gray-700 hover:text-[#066AC9]"
                >
                  <Settings size={18} className="text-gray-500" />
                  <span className="text-sm font-medium">Account Settings</span>
                </Link>
                
                <Link 
                  to="/help" 
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#E6F0F9] transition-colors duration-200 text-gray-700 hover:text-[#066AC9]"
                >
                  <HelpCircle size={18} className="text-gray-500" />
                  <span className="text-sm font-medium">Help & Support</span>
                </Link>
              </div>

              {/* Theme Selector */}
              <div className="flex justify-between items-center p-3 border-t border-gray-100">
                <span className="text-sm text-gray-600">Theme</span>
                <div className="flex items-center gap-1">
                  <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200" title="Light">
                    <Sun size={16} className="text-yellow-500" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200" title="Dark">
                    <Moon size={16} className="text-indigo-500" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200" title="Auto">
                    <Laptop size={16} className="text-blue-500" />
                  </button>
                </div>
              </div>

              {/* Logout Button */}
              <button className="flex items-center gap-3 p-3 mt-1 rounded-lg hover:bg-red-50 transition-colors duration-200 text-red-500 border-t border-gray-100">
                <LogOut size={18} />
                <span className="text-sm font-medium">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Small Nav for Mobile */}
      <SmallNavigation open={rotate} />
    </>
  );
};

export default NavBar;