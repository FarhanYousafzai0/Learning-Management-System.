import React from 'react';
import {  FaCheckCircle } from 'react-icons/fa';
import HeroVideo from './HeroVideo';

const Hero = () => {
  return (
    <section className="container mx-auto px-10 md:px-20   grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col gap-7 relative items-start justify-center">
        <h1 className=" text-4xl md:text-6xl  font-semibold">
          Limitless learning at your{' '}
          <span className="relative">
            fingertips{' '}
            <span className="absolute top-5 -z-10 left-0">
              <img src="/Svgs/hero-svg.svg" alt="Decorative SVG" />
            </span>
          </span>
        </h1>

        <p className="text-gray-500 text-1xl md:text-[1.2rem]">Online learning and teaching marketplace with 5K+ courses & 10M students. Taught by experts to help you acquire new skills.</p>


        <div className=" flex flex-wrap gap-3">
<div className="flex items-center gap-1  whitespace-nowrap">
<FaCheckCircle/>
  <div className="text-grey-500 text-lighter whitespace-nowrap">Learn with experts</div>
</div>
<div className="flex items-center gap-1">
<FaCheckCircle/>
  <div className="text-grey-500 text-lighter whitespace-nowrap">Get ceritficate</div>
</div>
<div className="flex items-center gap-1">
<FaCheckCircle/>
  <div className="text-grey-500 text-lighter whitespace-nowrap">Get membership</div>
</div>
        </div>

        <div className="flex items-center gap-1 md:gap-3 ">

          <button className='bg-rose-100 text-red-500 flex font-semibold relative whitespace-nowrap px-6 rounded-md py-3'>Get Started</button>
          

          <HeroVideo/>



          
        </div>
      </div>

      <div className="flex items-center justify-center ">
<div className="overflow-hidden relative ">
<img src="./Images/RightImage.png" alt="" className='object-center object-cover ' />


{/* <img src="https://themes.stackbros.in/eduport_r/assets/07-CK3ZrEuH.png" className='absolute top-0 left-0 object-center object-cover' alt="" /> */}


</div>


      </div>
    </section>
  );
};

export default Hero;
