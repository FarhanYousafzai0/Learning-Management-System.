import React, { useState } from 'react'
import Sidebar from '../../Components/Admin/Sidebar'
import AddStudent from '../../Components/Admin/AddStudent'
import AllUsers from './AllUsers';
import Dashboard from './Dashboar';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
  const [selected, setSelected] = useState("Dashboard");

  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-6 min-h-[90vh] relative '>

        <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="absolute  right-4"
      >
        <Link
          to="/"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-indigo-50 transition-colors duration-200"
        >
          <FaHome className="text-indigo-600 text-xl" />
        </Link>
      </motion.div>

<div className='xl:col-span-1 md:col-span-2'>
<Sidebar selected={selected} setSelected={setSelected}/>
</div>

<div className='xl:col-span-5 md:col-span-4 h-screen overflow-y-scroll"'>
{selected == "Dashboard" && <Dashboard />}
{selected == "Add User" && <AddStudent />}
{selected == "All Users" && <AllUsers />}
  
  </div>

    </div>
   
    </>
  )
}

export default AdminDashboard
