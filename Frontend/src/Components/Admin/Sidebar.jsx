import React, { useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { sidebar_data } from './SidebarData.jsx'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const Sidebar = () => {
  const [show, setShow] = useState(null)

  const handleOpen = (id) => {
    setShow(show === id ? null : id)
  }

  return (
    <div className='min-h-screen  p-5 text-white bg-[#24292D] w-64'>
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
          <h5 className='text-lg cursor-pointer font-semibold'>Dashboard</h5>
        </div>

        <div className='flex flex-col gap-4'>
          <h3 className='text-gray-400 uppercase text-sm px-5'>Pages</h3>

          <ul className='flex flex-col gap-3'>
            {sidebar_data?.map((item, index) => (
              <li key={index}>
                <div
                  onClick={() => handleOpen(item.id)}
                  className='flex items-center justify-between gap-3 px-5 py-2 rounded-md hover:bg-[#343a40] cursor-pointer transition-all duration-200'
                >
                  <div className='flex items-center gap-2'>
                    <span className='text-xl'>{item.icon}</span>
                    <span className='text-sm font-medium'>{item.title}</span>
                  </div>
                  {item?.list && <MdOutlineKeyboardArrowDown className={`${show == item.id ? 'rotate-180' : 'rotate-0'} transition-all duration-300`} />}
                </div>

                {/* Submenu with height toggle */}
                <ul
                  className='ml-10 overflow-hidden transition-all duration-300'
                  style={{
                    height: show === item.id ? '100px' : '0px',
                  }}
                >
                  {item?.list?.map((item2, index2) => (
                    <li
                      key={index2}
                      className='text-sm text-gray-300 hover:text-white cursor-pointer py-1'
                    >
                      {item2.title}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
