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

const NavBar = () => {
  const [rotate, setRotate] = useState(false);

  const [open,setopen] = useState(false);

  const handleOpen = ()=>{
    setopen(!open)
  }

  return (
    <>
      <div className="flex px-5 md:px-10 py-5 items-center justify-between shadow-lg">
        {/* Logo and Category */}
        <div className="flex items-center gap-5">
          <img
            src="https://vectorjungal.com/files/preview/1280x405/117222840473b5i1fifzdt6ggfancin8phyitwa9batprdmtuhcazzbvlyyfqybsxwaa1hpebaeaojntubnixwm4nxhgg4xpg9rmam8ilny2gle.png"
            className="w-30"
            alt="Logo"
          />
          <div className="p-2 gap-1 cursor-pointer bg-[#E6F0F9] rounded-md hidden lg:flex items-center">
            <BiCategoryAlt className="text-[#066AC9]" />
            <Typography className="text-[#066AC9] text-sm">Category</Typography>
          </div>
        </div>

        {/* Navigation Menu */}
        <ul className="hidden lg:flex items-center gap-3">
          {nav_data.map((item, index) => (
            <li key={index} className="relative group text-black cursor-pointer">
              <span className="hover:text-[#066AC9] flex items-center gap-1 text-gray-700">
                {item.title}
                <IoIosArrowDown />
              </span>
              {item.list && (
                <ul className="shadow-lg hidden bg-white absolute w-[200px] group-hover:block p-2 rounded-md">
                  {item.list.map((item1, index1) => (
                    <li
                      key={index1}
                      className="hover:bg-[#E6F0F9] px-5 py-2 rounded-md flex items-center justify-between group/sub"
                    >
                      {item1.title} {item1.subList && <BsThreeDots />}
                      {item1.subList && (
                        <ul className="shadow-lg bg-white absolute -translate-x-7 group-hover/sub:translate-x-[80%] opacity-0 group-hover/sub:opacity-100 w-[240px] top-0">
                          {item1.subList.map((item2, index2) => (
                            <li
                              key={index2}
                              className="hover:bg-[#E6F0F9] px-5 py-2 group/subsub rounded-md relative"
                            >
                              <div className="flex items-center justify-between">
                                {item2.title}
                                {item2.subSubList && <BsThreeDots />}
                              </div>
                              <ul className="shadow-lg bg-white absolute -translate-x-6 group-hover/subsub:translate-x-[90%] opacity-0 group-hover/subsub:opacity-100 w-[240px] top-0">
                                {item2?.subSubList?.map((item3, index3) => (
                                  <li key={index3} className="hover:bg-[#E6F0F9] px-5 py-2 rounded-md">
                                    {item3.title}
                                  </li>
                                ))}
                              </ul>
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
            />
            <FaSearch className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer hover:text-[#066AC9] text-[#747579]" />
          </div>

          {/* Hamburger Menu */}
          <div
            onClick={() => setRotate(!rotate)}
            className="flex lg:hidden cursor-pointer w-7 h-5 relative flex-col gap-1"
          >
            <span className={`w-full h-[2.5px] rounded-md bg-[#747579] transition-all duration-500 ${rotate ? "rotate-45 -translate-y-1/2 absolute" : ""}`} />
            <span className={`w-full h-[2.5px] rounded-md bg-[#747579] transition-all duration-500 ${rotate ? "opacity-0" : ""}`} />
            <span className={`w-full h-[2.5px] rounded-md bg-[#747579] transition-all duration-500 ${rotate ? "-rotate-45 translate-y-1/2 absolute" : ""}`} />
          </div>

          {/* Avatar & Dropdown */}
          <div className="relative">
      <Avatar
        onClick={handleOpen} // Toggle dropdown on avatar click
        sx={{ width: 40, height: 40 }}
        className="cursor-pointer"
        src="https://themes.stackbros.in/eduport_r/assets/01-7N0KytgQ.jpg"
      />
      {/* Conditional rendering of dropdown menu */}
      <div className={`absolute right-0 top-12 w-72 bg-white rounded-2xl shadow-xl z-50 p-4 flex-col gap-4 ${open ? 'flex' : 'hidden'}`}>
        {/* User Info */}
        <div className="flex items-center gap-3 border-b pb-4">
          <Avatar sx={{ width: 40, height: 40 }} src="https://themes.stackbros.in/eduport_r/assets/01-7N0KytgQ.jpg" />
          <div>
            <h3 className="font-semibold">Farhan</h3>
            <p className="text-xs text-gray-500">farhan@gmail.com</p>
          </div>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-3 text-sm mt-4">
          <div className="flex items-center gap-2 transition-all duration-200 hover:bg-[#E6F0F9] p-2 rounded cursor-pointer">
            <User size={16} /> Edit Profile
          </div>
          <div className="flex items-center gap-2 transition-all duration-200 p-2 rounded hover:bg-[#E6F0F9] cursor-pointer">
            <Settings size={16} /> Account Settings
          </div>
          <div className="flex items-center transition-all duration-200 p-2 rounded gap-2 hover:bg-[#E6F0F9] cursor-pointer">
            <HelpCircle size={16} /> Help & Support
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="flex justify-between items-center border-t pt-3 mt-3 text-sm">
          <span className="text-gray-600">Theme</span>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-gray-100" title="Light">
              <Sun size={16} />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100" title="Dark">
              <Moon size={16} />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100" title="Auto">
              <Laptop size={16} />
            </button>
          </div>
        </div>

        {/* Logout */}
        <button className="flex items-center gap-2 text-sm text-red-500 hover:bg-red-50 p-2 rounded-md mt-2">
          <LogOut size={16} /> Sign Out
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
