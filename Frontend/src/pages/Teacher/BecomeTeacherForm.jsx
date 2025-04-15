import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaChalkboardTeacher, FaUserGraduate, FaCalendarAlt, FaPhone, FaEnvelope, FaIdCard } from 'react-icons/fa';
import { MdSubject, MdTransgender } from 'react-icons/md';
import { RiGraduationCapFill } from 'react-icons/ri';
import { IoMdCloudUpload } from 'react-icons/io';
import axios from 'axios';

const BecomeTeacherForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handlePhotoChange = (e) => {
    if (e.target.files[0]) {
      setProfilePhoto(URL.createObjectURL(e.target.files[0]));
    }
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }
      if (data.profilePhoto[0]) {
        formData.append('profileImage', data.profilePhoto[0]);
      }

      // Replace with your API endpoint
     

      setSubmitSuccess(true);
      reset();
      setProfilePhoto(null);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h2>
          <p className="text-gray-600 mb-6">Your teacher application has been received. We'll review your qualifications and get back to you soon.</p>
          <button 
            onClick={() => setSubmitSuccess(false)}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Join Our Team of <span className="text-indigo-600">Educators</span>
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            Share your knowledge and inspire the next generation of learners
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* SVG Illustration Side */}
            <div className="lg:w-1/2 bg-gradient-to-br from-indigo-500 to-purple-600 p-12 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="max-w-md mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-64">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" opacity="0.3"/>
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3"/>
                    <circle cx="12" cy="7" r="3" fill="currentColor" opacity="0.3"/>
                    <circle cx="12" cy="17" r="3" fill="currentColor" opacity="0.3"/>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mt-8 mb-4">Why Teach With Us?</h2>
                <ul className="space-y-3 text-left max-w-xs mx-auto">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Flexible teaching schedule
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Competitive compensation
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Supportive learning community
                  </li>
                </ul>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:w-1/2 p-8 sm:p-12">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Full Name */}
                  <div className="sm:col-span-2">
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUserGraduate className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        {...register("fullName", { required: "Full name is required" })}
                        className="pl-10 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-3 border focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="John Doe"
                      />
                    </div>
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        {...register("email", { 
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                        className="pl-10 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-3 border focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="you@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaPhone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        {...register("phone", { 
                          required: "Phone number is required",
                          pattern: {
                            value: /^[0-9]{10,15}$/,
                            message: "Invalid phone number"
                          }
                        })}
                        className="pl-10 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-3 border focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="1234567890"
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Subject Specialization */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject Specialization
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MdSubject className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        {...register("subject", { required: "Subject is required" })}
                        className="pl-10 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-3 border focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Mathematics"
                      />
                    </div>
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                    )}
                  </div>

                  {/* Qualification */}
                  <div>
                    <label htmlFor="qualification" className="block text-sm font-medium text-gray-700 mb-1">
                      Highest Qualification
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <RiGraduationCapFill className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        id="qualification"
                        name="qualification"
                        {...register("qualification", { required: "Qualification is required" })}
                        className="pl-10 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-3 border focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="">Select qualification</option>
                        <option value="High School">High School</option>
                        <option value="Bachelor's Degree">Bachelor's Degree</option>
                        <option value="Master's Degree">Master's Degree</option>
                        <option value="PhD">PhD</option>
                        <option value="Professional Certification">Professional Certification</option>
                      </select>
                    </div>
                    {errors.qualification && (
                      <p className="mt-1 text-sm text-red-600">{errors.qualification.message}</p>
                    )}
                  </div>

                  {/* Gender */}
                  <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                      Gender
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MdTransgender className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        id="gender"
                        name="gender"
                        {...register("gender", { required: "Gender is required" })}
                        className="pl-10 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-3 border focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                        <option value="Prefer not to say">Prefer not to say</option>
                      </select>
                    </div>
                    {errors.gender && (
                      <p className="mt-1 text-sm text-red-600">{errors.gender.message}</p>
                    )}
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
                      Date of Birth
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaCalendarAlt className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="dob"
                        name="dob"
                        type="date"
                        {...register("dob", { required: "Date of birth is required" })}
                        className="pl-10 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-3 border focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    {errors.dob && (
                      <p className="mt-1 text-sm text-red-600">{errors.dob.message}</p>
                    )}
                  </div>

                  {/* Profile Photo */}
                  <div className="sm:col-span-2">
                    <label htmlFor="profilePhoto" className="block text-sm font-medium text-gray-700 mb-1">
                      Profile Photo (Optional)
                    </label>
                    <div className="mt-1 flex items-center">
                      <label
                        htmlFor="profilePhoto"
                        className="relative cursor-pointer bg-white rounded-md border border-gray-300 p-3 flex items-center justify-center w-full hover:border-indigo-500 hover:bg-indigo-50 transition duration-150"
                      >
                        <div className="flex flex-col items-center">
                          <IoMdCloudUpload className="h-8 w-8 text-indigo-500 mb-2" />
                          <span className="text-sm text-gray-600">
                            {profilePhoto ? 'Change photo' : 'Upload a photo'}
                          </span>
                        </div>
                        <input
                          id="profilePhoto"
                          name="profilePhoto"
                          type="file"
                          accept="image/*"
                          {...register("profilePhoto")}
                          onChange={handlePhotoChange}
                          className="sr-only"
                        />
                      </label>
                    </div>
                    {profilePhoto && (
                      <div className="mt-2 flex items-center">
                        <img
                          src={profilePhoto}
                          alt="Profile preview"
                          className="h-16 w-16 rounded-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setProfilePhoto(null);
                            reset({ profilePhoto: null });
                          }}
                          className="ml-2 text-sm text-red-600 hover:text-red-800"
                        >
                          Remove
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    {...register("terms", { required: "You must accept the terms" })}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                    I agree to the <a href="#" className="text-indigo-600 hover:text-indigo-500">terms and conditions</a>
                  </label>
                </div>
                {errors.terms && (
                  <p className="mt-1 text-sm text-red-600">{errors.terms.message}</p>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <FaChalkboardTeacher className="mr-2 h-5 w-5" />
                        Submit Application
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeTeacherForm;