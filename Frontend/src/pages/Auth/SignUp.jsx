import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

import { regUserData, userReset } from '../../features/User/userSlice';

const SignUp = () => {
  const [formFields, setFormFields] = useState({
    name: '',
    username: '',
    email: '',
    gender: '',
    password: '',
    c_password: '',
  });

  const { name, username, email, gender, password, c_password } = formFields;

  const dispatch = useDispatch();
  const { userLoading, userError, userMessage, userSuccess } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (userError) {
      toast.error(userMessage);
    }
    dispatch(userReset());
  }, [userError, userMessage, dispatch]);

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== c_password) {
      toast.error('Passwords do not match!');
      return;
    }

    const regData = {
      name,
      username,
      email,
      gender,
      password,
    };

    dispatch(regUserData(regData));


    setFormFields({
      name: '',
    username: '',
    email: '',
    gender: '',
    password: '',
    c_password: '',
    })
  };

  return (
    <div className="w-screen h-screen overflow-y-scroll md:overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Section */}
        <div className="flex flex-col gap-8 text-center justify-center bg-[#E6F0F9] h-full w-full p-5">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold">
              Welcome to our largest community
            </h1>
            <p className="text-lg">Let's learn something new today!</p>
          </div>

          <img
            src="https://themes.stackbros.in/eduport_r/assets/02-CxJqFtvR.svg"
            alt="register_img"
            className="w-full max-w-md mx-auto"
          />

          <div className="flex items-center justify-center gap-8">
            <div className="avatar-group flex items-center -space-x-5">
              {['02-Dm08lEkH', '01-7N0KytgQ', '04-Axz2kzOk'].map((id, i) => (
                <div key={i} className="avatar">
                  <div className="w-8 md:w-10 ring-2 ring-transparent">
                    <img
                      src={`https://themes.stackbros.in/eduport_r/assets/${id}.jpg`}
                      alt={`avatar${i + 1}`}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm md:text-lg">
              4k+ Students joined us, now it's your turn.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="px-8 md:px-20 py-10 flex flex-col bg-white items-center w-full max-h-screen ">
          <div className="text-start w-full max-w-2xl">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">
              Sign up for your account!
            </h1>
            <p className="text-sm md:text-lg text-gray-500">
              Nice to see you! Please sign up with your account.
            </p>
          </div>

          {/* Form */}
          <form className="w-full max-w-2xl mt-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="mb-1 block">Full Name*</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full h-12 px-4 bg-gray-100 rounded-md"
                />
              </div>

              {/* Username */}
              <div>
                <label className="mb-1 block">Username*</label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleChange}
                  placeholder="Username"
                  className="w-full h-12 px-4 bg-gray-100 rounded-md"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-1 block">Email address*</label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="E-mail"
                    className="w-full h-12 pl-10 pr-4 bg-gray-100 rounded-md"
                  />
                  <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
                </div>
              </div>

              {/* Gender */}
              <div>
                <label className="mb-1 block">Gender*</label>
                <select
                  name="gender"
                  value={gender}
                  onChange={handleChange}
                  className="w-full h-12 px-4 bg-gray-100 rounded-md"
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Password */}
              <div>
                <label className="mb-1 block">Password*</label>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="w-full h-12 pl-10 pr-4 bg-gray-100 rounded-md"
                  />
                  <FaLock className="absolute left-3 top-4 text-gray-400" />
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-1 block">Confirm Password*</label>
                <div className="relative">
                  <input
                    type="password"
                    name="c_password"
                    value={c_password}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    className="w-full h-12 pl-10 pr-4 bg-gray-100 rounded-md"
                  />
                  <FaLock className="absolute left-3 top-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              disabled={userLoading}
              className="w-full mt-6 bg-[#0F9E99] text-white py-3 rounded-md hover:bg-[#0d8c88] transition disabled:opacity-50"
            >
              {userLoading ? 'Signing Up...' : 'Sign Up'}
            </button>

            {/* Social Buttons */}
            <div className="mt-5 text-center text-sm text-gray-500">or</div>
            <div className="flex flex-col gap-3 mt-3">
              <button
                type="button"
                className="flex items-center justify-center gap-3 w-full bg-white border border-gray-300 py-3 rounded-md hover:bg-gray-100 transition"
              >
                <FcGoogle size={20} /> Sign up with Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-3 w-full bg-[#1877F2] text-white py-3 rounded-md hover:bg-[#166FE5] transition"
              >
                <FaFacebook size={20} /> Sign up with Facebook
              </button>
            </div>

            {/* Login Link */}
            <p className="text-center mt-4 text-sm">
              Already have an account?{' '}
              <Link
                to="/user/login"
                className="text-[#0F9E99] font-semibold hover:underline"
              >
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
