import { Avatar, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { BiCategoryAlt } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { nav_data } from './NavData';
import { FaSearch } from 'react-icons/fa';

const SmallNavigation = ({ open }) => {
  const [open1, setOpen1] = useState(null);
  const [open2, setOpen2] = useState(null);
const [open3,setOpen3] = useState(null)


const handleOpen1 = (id) => {
  setOpen1(open1 === id ? null : id);
  setOpen2(null); // Close submenus when switching main menu
  setOpen3(null); // Also close third-level menu
};

const handleOpen2 = (id) => {
  setOpen2(open2 === id ? null : id);
  setOpen3(null); // Close third-level menu
};

const handleOpen3 = (id) => {
  setOpen3(open3 === id ? null : id);
};
  return (
    <div className={`flex px-5 md:px-10 overflow-hidden lg:hidden flex-col  bg-white shadow  transition-all duration-500 w-full gap-4 items-center ${open ? 'h-[350px] py-3' : 'h-0'}`}>
      
      {/* Logo and Category */}
      <div className="flex items-center w-full gap-5">
        <div className="p-3 w-full gap-1 cursor-pointer bg-[#E6F0F9] rounded-md flex items-center">
          <BiCategoryAlt className="text-[#066AC9]" />
          <Typography className="text-[#066AC9] text-sm">Category</Typography>
        </div>
      </div>

      {/* Navigation Menu */}
      <ul className="flex flex-col w-full justify-start gap-3 items-start">
        {nav_data.map((item, index) => (
          <li key={index} className="relative border border-gray-300 text-black shadow-lg py-4 rounded-md px-4 w-full cursor-pointer">
            
            <span onClick={() => handleOpen1(index)} className="hover:text-[#066AC9] flex items-center justify-between transition-all text-gray-700">
              {item.title} 
              <IoIosArrowDown className={`transition-transform ${open1 === index ? 'rotate-180' : ''}`} />
            </span>

            {/* First Dropdown */}
            <ul className={`flex flex-col bg-gray-100 rounded-md w-full max-h-0 ${open1 === index ? 'max-h-[300px] overflow-y-scroll' : 'max-h-0'} overflow-hidden transition-all duration-500`}>
              {item?.list?.map((item2, index2) => (
                <li key={index2} className="relative px-4 py-3">
                  
                  <span onClick={() => handleOpen2(index2)} className="flex items-center justify-between">
                    {item2.title} {item2?.subList && <BsThreeDots />}
                  </span>

                  {/* Second Dropdown */}
                  <ul className={`flex flex-col w-full max-h-0 
                    ${open2 === index2 ? 'max-h-[300px] overflow-y-scroll' :'max-h-0'} 
                    transition-all duration-500 overflow-hidden`}>
                    
                    {item2?.subList?.map((item3, index3) => (
                      <li key={index3} className="relative px-4 py-3">
                        <span onClick={()=>setOpen3(index3)} className="flex items-center justify-between">
                          {item3.title}
                        </span>


                       {/* Third Drop-Down */}
                       
                       <ul className={`flex flex-col w-full max-h-0 
                    ${open3 === index3 ? 'max-h-[300px] overflow-y-scroll' :'max-h-0'} 
                    transition-all duration-500 overflow-hidden`}>
                    
                    {item3?.subSubList?.map((item4, index4) => (
                      <li key={index4} className="relative px-4 py-3">
                        <span  className="flex items-center justify-between">
                          {item4.title}
                        </span>


                       {/* Third Drop-Down */}
                       
                      
                      </li>
                    ))}
                  </ul>

                      </li>
                    ))}
                  </ul>

                </li>
              ))}
            </ul>

          </li>
        ))}
      </ul>

      {/* Search Bar */}
      <div className="flex items-center gap-5 w-full">
        <div className="relative w-full">
          <TextField className="w-full" size="small" placeholder="Search" label="Search" variant="outlined" />
          <FaSearch className="absolute top-[50%] right-[2%] -translate-y-[50%] cursor-pointer hover:text-[#066AC9] text-[#747579]" />
        </div>
      </div>

    </div>
  );
};

export default SmallNavigation;
