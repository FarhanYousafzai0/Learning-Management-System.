import { Typography } from '@mui/material';
import React from 'react'
import { BiCategoryAlt } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { nav_data } from './NavData';

const NavBar = () => {
  return (
    <>
      <div className="flex px-5 py-5 items-center gap-5">
        {/* Logo and Category */}
<div className="flex items-center gap-5">
  <img src="https://vectorjungal.com/files/preview/1280x405/117222840473b5i1fifzdt6ggfancin8phyitwa9batprdmtuhcazzbvlyyfqybsxwaa1hpebaeaojntubnixwm4nxhgg4xpg9rmam8ilny2gle.png" className='w-30' alt="" />

  <div className="p-2 gap-1 cursor-pointer  bg-[#E6F0F9] rounded-md flex items-center">
<BiCategoryAlt className='text-[#066AC9]' />
<Typography className='text-[#066AC9] text-sm'>Category</Typography>
</div>
</div>
{/*  Nav-bar items*/}
{nav_data?.map((item,index)=>{
return (
  <>
  <ul className='flex items-center gap-3'>
<li className='relative group text-black cursor-pointer'><span className='hover:text-[#066AC9] flex items-center gap-1 transition-all text-gray-700'>{item.title}<IoIosArrowDown />
</span>

{/* Navigation-Menu */}
<ul className='shadow-lg  hidden  bg-white absolute w-50 group-hover:block transition-all duration-700 p-2  '>
  {item?.list?.map((item1,index1)=>{
    return (
      <>
      <li className='hover:bg-[#E6F0F9] px-5  py-[0.5rem] rounded-md flex items-center justify-between'>{item1.title}
{""}{item1?.subList && <BsThreeDots />
}
      </li>
      </>
    )
  })}
</ul>
</li>

</ul>

  
  </>
)
})}
      </div>
    </>
  )
}

export default NavBar
