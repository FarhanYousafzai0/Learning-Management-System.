import React from 'react'
import {motion} from 'motion/react'
const BecomeInstructor = () => {
  return (
    <motion.section
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
      <div className='bg-[#17A2B8] rounded-md text-white grid grid-cols-1 md:grid-cols-2 gap-4 items-center p-10 md:p-12'>
        <div className="flex flex-col gap-4">
          <h1 className='font-bold text-white text-2xl md:text-4xl'>Become an Instructor!</h1>
          <p>
            Speedily say has suitable disposal add boy. On forth doubt miles of child. 
            Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished.
          </p>
        </div>
        
        <div className="flex justify-start md:justify-end ">
          <button className='border border-amber-400 px-5 py-2  text-amber-400 hover:text-black cursor-pointer  duration-300 rounded-md font-semibold transition-all hover:bg-amber-500'>
            Start Teaching Today
          </button>
        </div>
      </div>
    </motion.section>
  )
}

export default BecomeInstructor
