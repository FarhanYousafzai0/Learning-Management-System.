import React, { useState } from 'react'
import Sidebar from '../../Components/Admin/Sidebar'
import AddStudent from '../../Components/Admin/AddStudent'
import AllUsers from './AllUsers';
import Dashboard from './Dashboar';

const AdminDashboard = () => {
  const [selected, setSelected] = useState("Dashboard");

  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-6 min-h-[90vh] '>


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
