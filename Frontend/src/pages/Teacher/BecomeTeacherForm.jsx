import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaUserGraduate, FaEnvelope, FaPhone, FaChalkboardTeacher, FaCalendarAlt, FaHome } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import { IoMdCloudUpload } from "react-icons/io";
import { MdSubject, MdTransgender } from "react-icons/md";
import { fetchTeachers, resetTeacherState } from "../../features/Teacher/TeacherSlice";
import { Link } from "react-router-dom";

const BecomeTeacherForm = () => {
  const [formFields, setFormFields] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    qualification: "",
    gender: "",
    dateOfBirth: "",
    
  });

  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const dispatch = useDispatch();
  const { teacherError, teacherSuccess, teacherMessage, teacherLoading } = useSelector(
    (state) => state.teacher
  );

  useEffect(() => {
    if (teacherError) {
      toast.error(teacherMessage);
      dispatch(resetTeacherState());
    }
    if (teacherSuccess) {
      setSubmissionSuccess(true);
      dispatch(resetTeacherState());
    }
  }, [teacherError, teacherSuccess, teacherMessage, dispatch]);

  const handleChange = (e) => {
e.preventDefault();
setFormFields({
  ...formFields,
  [e.target.name]: e.target.value,
})

    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(fetchTeachers(formFields));
  };

  const resetForm = () => {
    setFormFields({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      qualification: "",
      gender: "",
      dateOfBirth: "",
     
    });
   
    setSubmissionSuccess(false);
  };

  if (submissionSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50"
      >
        <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </motion.div>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-bold text-gray-800 mb-3"
          >
            Application Received!
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-600 mb-8"
          >
            Thank you for joining PNY's teaching team. We'll review your application and contact you shortly.
          </motion.p>
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            onClick={resetForm}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 cursor-pointer text-white py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300"
          >
            Back to Form
          </motion.button>
        </div>
      </motion.div>
    );
  }

  return (
    
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 relative">
       <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="absolute top-4 left-4"
      >
        <Link
          to="/"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md hover:bg-indigo-50 transition-colors duration-200"
        >
          <FaHome className="text-indigo-600 text-xl" />
        </Link>
      </motion.div>
      <div className="container mx-auto flex flex-col lg:flex-row h-full">
        {/* Illustration Side */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 p-12 flex flex-col justify-center"
        >
          <div className="max-w-md mx-auto text-white">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <svg viewBox="0 0 500 400" className="w-full h-64">
                <path d="M100,200 Q250,50 400,200 T100,200" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />
                <circle cx="250" cy="200" r="80" fill="white" opacity="0.1" />
                <path d="M150,150 Q250,50 350,150 T150,150" fill="none" stroke="white" strokeWidth="3" />
                <circle cx="250" cy="150" r="40" fill="none" stroke="white" strokeWidth="2" />
                <path d="M100,250 Q250,350 400,250" fill="none" stroke="white" strokeWidth="3" />
                <circle cx="250" cy="250" r="40" fill="none" stroke="white" strokeWidth="2" />
                <circle cx="200" cy="120" r="10" fill="white" />
                <circle cx="300" cy="120" r="10" fill="white" />
                <path d="M220,160 Q250,180 280,160" fill="none" stroke="white" strokeWidth="2" />
              </svg>
            </motion.div>
            
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-4xl font-bold mb-6"
            >
              Join PNY's Teaching Team
            </motion.h2>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-lg mb-8 opacity-90"
            >
              Share your knowledge and inspire the next generation of tech leaders with Pakistan's premier IT institute.
            </motion.p>
            
            <motion.ul 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="space-y-4"
            >
              <li className="flex items-center">
                <div className="bg-white bg-opacity-20 rounded-full p-1 mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                Competitive compensation packages
              </li>
              <li className="flex items-center">
                <div className="bg-white bg-opacity-20 rounded-full p-1 mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                Flexible teaching schedules
              </li>
              <li className="flex items-center">
                <div className="bg-white bg-opacity-20 rounded-full p-1 mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                Professional development opportunities
              </li>
            </motion.ul>
          </div>
        </motion.div>

        {/* Form Side */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 bg-white p-8 lg:p-12 flex flex-col justify-center"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Teacher Application</h2>
            <p className="text-gray-600 mb-8">Fill out the form to join our team</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField 
                  label="Full Name" 
                  name="fullName" 
                  value={formFields.fullName} 
                  onChange={handleChange}
                  icon={<FaUserGraduate className="text-indigo-500" />}
                />
                
                <InputField 
                  label="Email" 
                  name="email" 
                  type="email" 
                  value={formFields.email} 
                  onChange={handleChange}
                  icon={<FaEnvelope className="text-indigo-500" />}
                />
                
                <InputField 
                  label="Phone" 
                  name="phone" 
                  type="tel" 
                  value={formFields.phone} 
                  onChange={handleChange}
                  icon={<FaPhone className="text-indigo-500" />}
                />
                
                <InputField 
                  label="Subject" 
                  name="subject" 
                  value={formFields.subject} 
                  onChange={handleChange}
                  icon={<MdSubject className="text-indigo-500" />}
                />
                
                <SelectField 
                  label="Qualification" 
                  name="qualification" 
                  value={formFields.qualification} 
                  onChange={handleChange}
                  icon={<RiGraduationCapFill className="text-indigo-500" />}
                  options={[
                    { value: "", label: "Select Qualification" },
                    { value: "High School", label: "High School" },
                    { value: "Bachelor's Degree", label: "Bachelor's Degree" },
                    { value: "Master's Degree", label: "Master's Degree" },
                    { value: "PhD", label: "PhD" },
                    { value: "Professional Certification", label: "Professional Certification" }
                  ]}
                />
                
                <SelectField 
                  label="Gender" 
                  name="gender" 
                  value={formFields.gender} 
                  onChange={handleChange}
                  icon={<MdTransgender className="text-indigo-500" />}
                  options={[
                    { value: "", label: "Select Gender" },
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" },
                    { value: "other", label: "Other" }
                  ]}
                />
                
                <InputField 
                  label="Date of Birth" 
                  name="dateOfBirth" 
                  type="date" 
                  value={formFields.dateOfBirth} 
                  onChange={handleChange}
                  icon={<FaCalendarAlt className="text-indigo-500" />}
                />
              </div>

              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={teacherLoading}
                  className={`w-full flex justify-center cursor-pointer items-center py-4 px-6 rounded-xl shadow-md text-lg font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-lg transition-all duration-300 ${teacherLoading ? 'opacity-80 cursor-not-allowed' : ''}`}
                >
                  {teacherLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing Application...
                    </>
                  ) : (
                    <>
                      <FaChalkboardTeacher className="mr-3" />
                      Submit Application
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const InputField = ({ label, name, value, onChange, type = "text", icon }) => (
  <motion.div 
    whileHover={{ y: -2 }}
    transition={{ duration: 0.2 }}
    className="relative"
  >
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <div className="relative rounded-lg shadow-sm border border-gray-200 hover:border-indigo-300 transition-colors">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        {icon}
      </div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="block w-full pl-10 pr-4 py-3 text-gray-700 bg-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
      />
    </div>
  </motion.div>
);

const SelectField = ({ label, name, value, onChange, icon, options }) => (
  <motion.div 
    whileHover={{ y: -2 }}
    transition={{ duration: 0.2 }}
    className="relative"
  >
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <div className="relative rounded-lg shadow-sm border border-gray-200 hover:border-indigo-300 transition-colors">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        {icon}
      </div>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required
        className="block w-full pl-10 pr-4 py-3 text-gray-700 bg-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none appearance-none transition-all"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  </motion.div>
);

const FileField = ({ label, name, onChange, preview, onRemove }) => (
  <motion.div
    whileHover={{ y: -2 }}
    transition={{ duration: 0.2 }}
    className="space-y-2"
  >
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <div className="flex items-center space-x-4">
      <label className="relative cursor-pointer bg-white rounded-lg border-2 border-dashed border-gray-300 hover:border-indigo-500 transition-colors duration-200 p-4 flex flex-col items-center justify-center w-full">
        <IoMdCloudUpload className="h-8 w-8 text-indigo-500 mb-2" />
        <span className="text-sm text-gray-600">
          {preview ? 'Change photo' : 'Click to upload'}
        </span>
        <span className="text-xs text-gray-500 mt-1">PNG, JPG up to 2MB</span>
        <input
          type="file"
          name={name}
          accept="image/*"
          onChange={onChange}
          className="sr-only"
        />
      </label>
      {preview && (
        <div className="relative">
          <img
            src={preview}
            alt="Profile preview"
            className="h-16 w-16 rounded-full object-cover border-2 border-white shadow-md"
          />
          <button
            type="button"
            onClick={onRemove}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </div>
  </motion.div>
);

export default BecomeTeacherForm;