import React from 'react';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    // Left
    <div className="w-screen h-screen relative ">
        {/* Achievments */}
      <div className="grid grid-cols-1 overscroll-y-scroll md:overflow-hidden  md:grid-cols-2">
        <div className="flex flex-col gap-8 text-center justify-center bg-[#E6F0F9] h-screen w-full p-5">
          <div className="relative">
            <h1 className="text-2xl md:text-4xl font-bold ">
              Welcome to our largest community
            </h1>
            <p className="text-lg">Let's learn something new today!</p>
          </div>

          <img
            src="https://themes.stackbros.in/eduport_r/assets/02-CxJqFtvR.svg"
            loading="lazy"
            alt="register_img"
          />

          <div className="flex items-center justify-center gap-8">
          <div className="avatar-group flex items-center -space-x-5">
  <div className="avatar">
    <div className="w-8 md:w-10 ring-2 ring-transparent">
      <img
        src="https://themes.stackbros.in/eduport_r/assets/02-Dm08lEkH.jpg"
        alt="avatar1"
      />
    </div>
  </div>
  <div className="avatar">
    <div className="w-8 md:w-10 ring-2 ring-transparent">
      <img
        src="https://themes.stackbros.in/eduport_r/assets/01-7N0KytgQ.jpg"
        alt="avatar2"
      />
    </div>
  </div>
  <div className="avatar">
    <div className="w-8 md:w-10 ring-2 ring-transparent">
      <img
        src="https://themes.stackbros.in/eduport_r/assets/04-Axz2kzOk.jpg"
        alt="avatar3"
      />
    </div>
  </div>
</div>

            <p className=' text-sm md:text-lg'>4k+ Students joined us, now it's your turn.</p>
          </div>
        </div>

        {/* Form-section */}
        <div className="px-8 md:px-20 flex flex-col bg-white items-center py-5 relative text-start w-full h-screen ">
      {/* Heading */}
      <div className="flex flex-col text-start w-full max-w-md">
        <h1 className="text-2xl md:text-4xl font-bold my-2">
          Login into PNY!
        </h1>
        <p className="text-sm md:text-lg text-gray-500">
          Nice to see you! Please Login up with your account.
        </p>
      </div>

      {/* Form */}
      <form className="w-full max-w-md mt-5">
        {/* Email */}
        <div className="flex flex-col mb-4">
          <label className="mb-1">Email address*</label>
          <div className="relative">
            <input
              type="email"
              placeholder="E-mail"
              className="w-full h-12 pl-10 pr-4 bg-gray-100 rounded-md"
            />
            <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
          </div>
        </div>

        {/* Password */}
        <div className="flex flex-col mb-4">
          <label className="mb-1">Password*</label>
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full h-12 pl-10 pr-4 rounded-md bg-gray-100 focus:outline-[#0F9E99]"
            />
            <FaLock className="absolute left-3 top-4 text-gray-400" />
          </div>
        </div>

       

        {/* Sign Up Button */}
        <button
          type="submit"
          className="w-full bg-[#0F9E99] text-white py-3 rounded-md hover:bg-[#0d8c88] transition"
        >
          Sign In
        </button>

        {/* Social Sign Up */}
        <div className="mt-5 text-center text-sm text-gray-500">or</div>
        <div className="flex flex-col gap-3 mt-3">
          <button className="flex items-center justify-center gap-3 w-full bg-white border border-gray-300 py-3 rounded-md hover:bg-gray-100 transition">
            <FcGoogle
             size={20} /> Login up with Google
          </button>

          <button className="flex items-center justify-center gap-3 w-full bg-[#1877F2] text-white py-3 rounded-md hover:bg-[#166FE5] transition">
            <FaFacebook size={20} /> Login up with Facebook
          </button>
        </div>

        {/* Already have an account */}
        <p className="text-center mt-4 text-sm">
           Create  an account?{' '}
           <Link
        to="/user/register"
        className="text-[#0F9E99] font-semibold transition-all hover:underline"
      >
        Register here
      </Link>
        </p>
      </form>
    </div>

      </div>
    </div>
  );
};

export default SignIn;
