import React from 'react'
import NavBar from '../../Components/Home/NavBar'
import QuizModal from '../Teacher/Dashboard/QuizModal'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { PiStudentFill } from 'react-icons/pi'
import { TiBook } from 'react-icons/ti'
import Slidebar from '../../Components/Student/Slidebar'
import Quizez from '../../Components/Student/Quizez'

const StudentDashboard = () => {
  return (
    <>
      <NavBar />

{/* Background Header */}
<div
  style={{
    backgroundImage:
      "url(https://themes.stackbros.in/eduport_r/assets/04-Bnwx2Yg_.png)",
  }}
className="min-h-[100px]  md:min-h-[200px] bg-[#1D3B53]">

</div>

{/* Profile Section */}
<section className="container mx-auto p-5 md:-mt-7 md:px-10">
  <div className="grid grid-cols-1 md:grid-cols-2 items-center">
    {/* Profile Info */}
    <div className="flex items-center gap-4">
      <div className="border-2 -translate-y-[40%] md:-translate-y-[20%] border-white h-[100px] w-[100px] md:h-[130px] md:w-[130px] rounded-full overflow-hidden">
        <img
          src="https://themes.stackbros.in/eduport_r/assets/01-7N0KytgQ.jpg"
          alt="Profile picture of Eren Yeager"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <p className="text-3xl font-semibold capitalize">Eren Yeager</p>
          <BsFillPatchCheckFill className="translate-y-1" color="#8DD1DC" />
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
         <p className=''> <span className='font-semibold text-black'>255</span> points</p>
          <span className="flex items-center gap-1">
          <p className=''> <span className='font-semibold text-black'>7</span> Complete Courses</p> </span>
          <span className="flex items-center gap-1">
          <p className=''> <span className='font-semibold text-black'>52</span> Completed Lessons</p>
          </span>
        </div>
      </div>
    </div>

    {/* Button */}
    <div className="flex justify-center md:justify-end  mt-4 md:mt-0">
      
    </div>
  </div>
 <div className='flex gap-3'>
 <Slidebar/>
 <Quizez/>
 </div>
</section>
    </>
  )
}

export default StudentDashboard
