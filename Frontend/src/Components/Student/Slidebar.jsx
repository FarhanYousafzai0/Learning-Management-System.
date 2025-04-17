import React, { useState } from 'react'
import { sidebar } from './Data.jsx'

const Slidebar = () => {

    const [selected,setSelected] = useState('Dashboard')
  return (
    <>
      <ul className='bg-primary hidden md:flex flex-col py-10 w-[25%] px-5 rounded-md'>
        {sidebar.map((item, index) => (
          <li
          onClick={() => setSelected(item.title)}
          key={index}
          className={` my-1 rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-white transition-all duration-300 cursor-pointer hover:text-black 
          ${selected == item.title ? 'bg-white text-black' : 'text-white'}`}
        >
          {item.icon} {item.title}
        </li>
        ))}
      </ul>
    </>
  )
}

export default Slidebar
