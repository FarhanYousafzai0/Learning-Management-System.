import React from 'react'
import {motion} from 'motion/react'
const TrendingCourses = () => {
  return (
    <>
      <motion.div
      initial={{
        opacity: 0,
        translateY: -20
      }}
      whileInView={{
        opacity: 1,
        translateY: 0
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut"
      }}
      
      
      className='p-3 md:p-10'>



      <div className="flex flex-col gap-2">
      <h1 className='text-center text-2xl md:text-5xl font-bold'>Our Trending Courses</h1>
      <p className='text-center'>Discover the hottest courses dominating the market right now! 🚀</p>
      </div>
      </motion.div>
    </>
  )
}

export default TrendingCourses
