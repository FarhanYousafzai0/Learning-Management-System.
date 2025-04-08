import React, { useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { sidebar_data } from './SidebarData.jsx'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const Sidebar = () => {

const [show,setShow] = useState(null);


const handleOpen = (id)=>{
    setShow(show == id ? null : id)
    console.log(id)
}


  return (
    <div className='min-h-screen p-5 text-white bg-[#24292D] w-64'>
      {/* Logo */}
      <img
        src='https://themes.stackbros.in/eduport_r/assets/logo-light-C-qw19RF.svg'
        alt='Logo'
        width={150}
        className='text-white'
      />

      <div className='my-5'>
        <div className='flex items-center gap-2 px-5 mb-6'>
          <FaHome />
          <h5 className='text-lg font-semibold'>Dashboard</h5>
        </div>

        <div className='flex flex-col gap-4'>
          <h3 className='text-gray-400 uppercase text-sm px-5'>Pages</h3>

          <ul className='flex flex-col gap-3'>
            {sidebar_data?.map((item, index) => (
              <li
              onClick={()=>handleOpen()}
                key={index}
                className='flex items-center gap-3 px-5 py-2 rounded-md hover:bg-[#343a40] cursor-pointer transition-all duration-200'
              >
               
               <div className='flex  w-100 items-center justify-between'>
<div className='flex items-center gap-2'> <span className='text-xl'>{item.icon}</span>
                <span className='text-sm font-medium'>{item.title}</span>
                </div>
<span>
{item?.list && <MdOutlineKeyboardArrowDown />}</span>
               </div>
              </li>
             
               
             
              
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
