import React from 'react'
import NavBar from '../../Components/Home/NavBar'
import Hero from '../../Components/Home/Hero'
import StateDetails from '../../Components/Home/StateDetails'
import Courses from '../../Components/Home/Courses'
import BecomeInstructor from '../../Components/Home/BecomeInstructor'
import TrendingCourses from '../../Components/Home/TrendingCourses'


const Home = () => {
  return (
    < >
          <NavBar/>
          <Hero/>
          <StateDetails/>
          <Courses/>
          <BecomeInstructor/>
          <TrendingCourses/>
        

    </>
  )
}

export default Home
