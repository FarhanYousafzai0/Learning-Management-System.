import React from 'react'
import Sidebar from '../../Components/Admin/Sidebar'
import AddStudent from '../../Components/Admin/AddStudent'

const AdminDashboard = () => {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-6 min-h-[90vh] overflow-hidden'>


<div className='xl:col-span-1 md:col-span-2'>
<Sidebar/>
</div>

<div className='xl:col-span-5 md:col-span-4 h-screen overflow-y-scroll"'><AddStudent/></div>

    </div>
   
    </>
  )
}

export default AdminDashboard
