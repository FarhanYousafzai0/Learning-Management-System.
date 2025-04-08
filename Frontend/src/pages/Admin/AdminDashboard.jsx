import React from 'react'
import Sidebar from '../../Components/Admin/Sidebar'

const AdminDashboard = () => {
  return (
    <>
    <div className='grid grid-cols-1  md:grid-cols-5'>


<div className='md:col-span-2 xl:col-span-1 lg:col-span-2'>
<Sidebar/>

</div>

<div className='col-span-4'></div>

    </div>
   
    </>
  )
}

export default AdminDashboard
