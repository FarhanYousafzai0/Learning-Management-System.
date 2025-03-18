import React from 'react'


const FeedBack = () => {
  return (
    <>
   <div className='w-full h-screen bg-[#F5F7F9] flex  px-10 md:px-20 p-10 '>
  
  <div className='grid grid-cols-1 p md:grid-cols-2 gap-4 place-content-center '>
    
    {/* Left */}
    <div className='flex flex-col  gap-5 items-start '>
      <h1 className='text-black text-start font-semibold text-3xl md:text-5xl'>
        Some valuable feedback from our students
      </h1>
      <p>
      Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so. Departure defective arranging rapturous did believe him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how.
      </p>
     
      <button class="cta group">
  <span className='group-hover:text-white'>View Reviews </span>
  <svg width="15px" height="10px" viewBox="0 0 13 10">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>
    </div>

{/* Right */}
  </div>

</div>

      
    </>
  )
}

export default FeedBack
