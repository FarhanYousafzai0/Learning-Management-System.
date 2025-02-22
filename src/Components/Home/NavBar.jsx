import { Avatar, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { BiCategoryAlt } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { nav_data } from './NavData';
import { FaSearch } from 'react-icons/fa';
import SmallNavigation from './SmallNavigation';

const NavBar = () => {

  const [rotate,setRotate] = useState(false)
  return (
    <>
    <div className="flex px-5 md:px-10  py-5 items-center relative justify-between shadow-lg">
      {/* Logo and Category */}
      <div className="flex items-center gap-5">
        <img 
          src="https://vectorjungal.com/files/preview/1280x405/117222840473b5i1fifzdt6ggfancin8phyitwa9batprdmtuhcazzbvlyyfqybsxwaa1hpebaeaojntubnixwm4nxhgg4xpg9rmam8ilny2gle.png"
          className="w-30"
          alt="Logo"
        />
        <div className="p-2 gap-1 cursor-pointer bg-[#E6F0F9] rounded-md hidden lg:flex  items-center">
          <BiCategoryAlt className="text-[#066AC9]" />
          <Typography className="text-[#066AC9] text-sm">Category</Typography>
        </div>
      </div>

      {/* Navigation Menu */}
      <ul className="hidden  lg:flex items-center gap-3">
        {nav_data.map((item, index) => (
          <li key={index} className="relative group text-black cursor-pointer">
            <span className="hover:text-[#066AC9] flex items-center gap-1 transition-all text-gray-700">
              {item.title}
              <IoIosArrowDown />
            </span>

            {/* Dropdown Menu */}
            {item.list && (
              <ul className="shadow-lg hidden bg-white absolute w-[200px] group-hover:block transition-all duration-300 p-2 rounded-md">
                {item.list.map((item1, index1) => (
                  <li
                    key={index1}
                    className="hover:bg-[#E6F0F9] px-5 py-2 rounded-md flex items-center justify-between relative group/sub"
                  >
                    {item1.title} {item1.subList && <BsThreeDots />}

                    {/* Sublist Dropdown */}
                    {item1.subList && (
                      <ul className="shadow-lg bg-white absolute -translate-x-7 group-hover/sub:translate-x-[80%]  opacity-0 group-hover/sub:opacity-100  group-hover/sub:block w-[240px] transition-all duration-500   top-0">
                        {item1.subList.map((item2, index2) => (
                          <li
                            key={index2}
                            className="hover:bg-[#E6F0F9] px-5 py-2 group/subsub rounded-md relative"
                          >
                           <div className="flex items-center justify-between"> {item2.title}{item2.subSubList && <BsThreeDots />}</div>

<ul className='shadow-lg bg-white absolute -translate-x-6 group-hover/subsub:translate-x-[90%]  opacity-0 group-hover/subsub:opacity-100  group-hover/sub:block w-[240px] transition-all duration-500   top-0'>

{item2?.subSubList?.map((item3,index3)=>(
<li key={index3} className='hover:bg-[#E6F0F9] px-5 py-2 rounded-md'>{item3.title}</li>
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
      {/* Search-bar / user-ima */}
      <div className="flex items-center m-0 gap-5">
      {/* Search bar (Visible only on large screens) */}
      <div className="relative hidden lg:flex">
        <TextField
          size="small"
          placeholder="Search"
          id="outline-basic"
          label="Search"
          variant="outlined"
        />
        <FaSearch className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer hover:text-[#066AC9] text-[#747579]" />
      </div>

      {/* Hamburger Menu (Visible only on small screens) */}
      <div
        onClick={() => setRotate(!rotate)}
        className="flex lg:hidden cursor-pointer w-7  h-5 relative flex-col gap-1 "
      >
        <span
          className={`w-full h-[2.5px] rounded-md bg-[#747579] transition-all duration-500 ${
            rotate ? "rotate-45 -translate-y-50% absolute" : ""
          }`}
        ></span>
        <span
          className={`w-full h-[2.5px] rounded-md bg-[#747579] transition-all duration-500 ${
            rotate ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`w-full h-[2.5px] rounded-md bg-[#747579] transition-all duration-500 ${
            rotate ? "-rotate-45 translate-y-50% absolute" : ""
          }`}
        ></span>
      </div>

      {/* Avatar */}
      <Avatar
        sx={{ width: 40, height: 40 }}
        src="https://themes.stackbros.in/eduport_r/assets/01-7N0KytgQ.jpg"
      />
    </div>
    </div>
    <SmallNavigation  open={rotate} />
  </>
  );
};

export default NavBar;
