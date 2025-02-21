import { Avatar, TextField, Typography } from '@mui/material';
import React from 'react';
import { BiCategoryAlt } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { nav_data } from './NavData';
import { FaSearch } from 'react-icons/fa';
const SmallNavigation = () => {
  return (
    <div className="flex px-5 md:px-10  flex-col py-5 w-full gap-4 items-center ">
      {/* Logo and Category */}
      <div className="flex items-center w-full gap-5">
      
        <div className="p-3 w-full gap-1 cursor-pointer bg-[#E6F0F9] rounded-md flex items-center">
          <BiCategoryAlt className="text-[#066AC9]" />
          <Typography className="text-[#066AC9] text-sm">Category</Typography>
        </div>
      </div>

      {/* Navigation Menu */}
      <ul className="flex flex-col w-full items-center gap-3 mt-3">
        {nav_data.map((item, index) => (
          <li key={index} className="relative group text-black shadow-lg py-4 rounded-md px-4 w-full cursor-pointer">
            <span className="hover:text-[#066AC9] flex items-center justify-between  transition-all text-gray-700">
              {item.title}
              <IoIosArrowDown className='' />
            </span>

            {/* Dropdown Menu */}
            {item.list && (
              <ul className="shadow-lg hidden  bg-white absolute w-[200px] group-hover:block transition-all duration-300 p-2 rounded-md">
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
                            {item2.title}

<ul className='shadow-lg bg-white absolute -translate-x-7 group-hover/subsub:translate-x-[80%]  opacity-0 group-hover/subsub:opacity-100  group-hover/sub:block w-[240px] transition-all duration-500   top-0'>

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
      <div className="flex items-center gap-5 w-full ">
<div className="relative w-full">
<TextField className='w-full'  size='large' placeholder='Search' id='outline-basic' label='Search' variant='outlined'></TextField>
<FaSearch className='absolute top-[50%] right-[2%]  -translate-y-[50%] cursor-pointer hover:text-[#066AC9] text-[#747579]'></FaSearch>
</div>



      </div>
    </div>
  );
};

export default SmallNavigation;
