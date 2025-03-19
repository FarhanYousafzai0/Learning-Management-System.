import React, { useEffect, useState } from 'react'
import NavBar from '../../Components/Home/NavBar'
import Hero from '../../Components/Home/Hero'
import StateDetails from '../../Components/Home/StateDetails'
import Courses from '../../Components/Home/Courses'
import BecomeInstructor from '../../Components/Home/BecomeInstructor'
import TrendingCourses from '../../Components/Home/TrendingCourses'
import FeedBack from '../../Components/Home/FeedBack'
import Footer from '../../Components/Home/Footer'
import {motion} from 'motion/react'
const Home = () => {
  
 
  return (
    <>
     

      <NavBar  />
      <Hero />
      <StateDetails />
      <Courses />
      <BecomeInstructor />
      <TrendingCourses />
      <FeedBack/>
      <Footer/>
    </>
  )
}

export default Home
