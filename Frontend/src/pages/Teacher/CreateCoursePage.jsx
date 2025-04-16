import { useState } from 'react';
import { FiUpload, FiPlus, FiTrash2, FiChevronLeft, FiChevronRight, FiCheck } from 'react-icons/fi';
import { FaHome } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const CreateCoursePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    category: '',
    level: 'beginner',
    duration: '',
    thumbnail: null,
    promoVideo: null,
    sections: [
      {
        id: 1,
        title: 'Introduction',
        lectures: [
          { id: 1, title: 'Welcome to the course', type: 'video', duration: '5:00' }
        ]
      }
    ],
    faqs: [
      { id: 1, question: '', answer: '' }
    ]
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      setCourseData(prev => ({ ...prev, [field]: file }));
    }
  };

  const addSection = () => {
    const newId = courseData.sections.length + 1;
    setCourseData(prev => ({
      ...prev,
      sections: [
        ...prev.sections,
        { id: newId, title: `Section ${newId}`, lectures: [] }
      ]
    }));
  };

  const addLecture = (sectionId) => {
    const newId = Date.now();
    const updatedSections = courseData.sections.map(section => {
      if (section.id === sectionId) {
        return {
          ...section,
          lectures: [
            ...section.lectures,
            { id: newId, title: 'New Lecture', type: 'video', duration: '0:00' }
          ]
        };
      }
      return section;
    });
    setCourseData(prev => ({ ...prev, sections: updatedSections }));
  };

  const addFaq = () => {
    const newId = courseData.faqs.length + 1;
    setCourseData(prev => ({
      ...prev,
      faqs: [
        ...prev.faqs,
        { id: newId, question: '', answer: '' }
      ]
    }));
  };

  const removeItem = (type, parentId, id) => {
    if (type === 'section') {
      setCourseData(prev => ({
        ...prev,
        sections: prev.sections.filter(section => section.id !== id)
      }));
    } else if (type === 'lecture') {
      const updatedSections = courseData.sections.map(section => {
        if (section.id === parentId) {
          return {
            ...section,
            lectures: section.lectures.filter(lecture => lecture.id !== id)
          };
        }
        return section;
      });
      setCourseData(prev => ({ ...prev, sections: updatedSections }));
    } else if (type === 'faq') {
      setCourseData(prev => ({
        ...prev,
        faqs: prev.faqs.filter(faq => faq.id !== id)
      }));
    }
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    
   <>
   {/* <div className='bg-gradient-to-r h-[90vh] w-full flex items-center justify-center'>
   <h1 className='text-white text-4xl font-bold'>Create Your Course</h1>
   </div>
    */}
   
   <div className="min-h-screen bg-gradient-to-b relative  from-indigo-500 to-purple-600 py-2 px-4 sm:px-6 lg:px-8">


   <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="absolute  right-4"
      >
        <Link
          to="/"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-indigo-50 transition-colors duration-200"
        >
          <FaHome className="text-indigo-600 text-xl" />
        </Link>
      </motion.div>
<div className="max-w-4xl mx-auto">
  {/* Progress Steps */}
  <div className="mb-8">
    <div className="flex items-center justify-between mb-4">
      {[1, 2, 3, 4].map((step) => (
        <div key={step} className="flex flex-col items-center">
          <div
            className={`w-15 h-15 rounded-full flex items-center justify-center ${currentStep >= step ? 'bg-indigo-600 text-white' : 'bg-white text-whiete'}`}
          >
            {currentStep > step ? <FiCheck /> : step}
          </div>
          <span className="text-xs mt-2 text-white">
            {step === 1 && 'Details'}
            {step === 2 && 'Media'}
            {step === 3 && 'Curriculum'}
            {step === 4 && 'FAQs'}
          </span>
        </div>
      ))}
    </div>
    <div className="relative">
      <div className="absolute top-1/2 h-1 bg-gray-200 w-full -z-10"></div>
      <div
        className="absolute top-1/2 h-1 bg-indigo-600 transition-all duration-300 -z-10"
        style={{ width: `${(currentStep - 1) * 33.33}%` }}
      ></div>
    </div>
  </div>

  {/* Form Content */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 sm:p-8">
    {currentStep === 1 && (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Course Details</h2>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Course Title</label>
          <input
            type="text"
            name="title"
            value={courseData.title}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="e.g. Advanced Web Development"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            value={courseData.description}
            onChange={handleInputChange}
            rows={2}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Describe what students will learn in this course"
          ></textarea>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              name="category"
              value={courseData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select a category</option>
              <option value="web-development">Web Development</option>
              <option value="data-science">Data Science</option>
              <option value="mobile-development">Mobile Development</option>
              <option value="business">Business</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Level</label>
            <select
              name="level"
              value={courseData.level}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Duration</label>
          <input
            type="text"
            name="duration"
            value={courseData.duration}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="e.g. 8 hours"
          />
        </div>
      </div>
    )}

    {currentStep === 2 && (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Course Media</h2>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Course Thumbnail</label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
            <div className="space-y-1 text-center">
              {courseData.thumbnail ? (
                <div className="relative">
                  <img 
                    src={URL.createObjectURL(courseData.thumbnail)} 
                    alt="Thumbnail preview" 
                    className="mx-auto h-48 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => setCourseData(prev => ({ ...prev, thumbnail: null }))}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                  >
                    <FiTrash2 size={16} />
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex text-sm text-gray-600 justify-center">
                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none">
                      <span>Upload a file</span>
                      <input 
                        type="file" 
                        className="sr-only" 
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, 'thumbnail')}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG up to 2MB</p>
                </>
              )}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Promotional Video (Optional)</label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
            <div className="space-y-1 text-center">
              {courseData.promoVideo ? (
                <div className="relative">
                  <video 
                    src={URL.createObjectURL(courseData.promoVideo)} 
                    controls
                    className="mx-auto h-48 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => setCourseData(prev => ({ ...prev, promoVideo: null }))}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                  >
                    <FiTrash2 size={16} />
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex text-sm text-gray-600 justify-center">
                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none">
                      <span>Upload a video</span>
                      <input 
                        type="file" 
                        className="sr-only" 
                        accept="video/*"
                        onChange={(e) => handleFileUpload(e, 'promoVideo')}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">MP4 up to 50MB</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    )}

    {currentStep === 3 && (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Course Curriculum</h2>
        
        <div className="space-y-4">
          {courseData.sections.map((section) => (
            <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-4 py-3 flex justify-between items-center">
                <input
                  type="text"
                  value={section.title}
                  onChange={(e) => {
                    const updatedSections = courseData.sections.map(s => 
                      s.id === section.id ? { ...s, title: e.target.value } : s
                    );
                    setCourseData(prev => ({ ...prev, sections: updatedSections }));
                  }}
                  className="bg-transparent font-medium text-gray-800 flex-1 focus:outline-none focus:ring-1 focus:ring-indigo-500 px-2 py-1 rounded"
                />
                <button
                  onClick={() => removeItem('section', null, section.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FiTrash2 />
                </button>
              </div>
              
              <div className="p-4 space-y-3">
                {section.lectures.map((lecture) => (
                  <div key={lecture.id} className="flex items-center justify-between bg-gray-50 p-3 rounded">
                    <div className="flex items-center space-x-3 flex-1">
                      <select
                        value={lecture.type}
                        onChange={(e) => {
                          const updatedSections = courseData.sections.map(s => {
                            if (s.id === section.id) {
                              const updatedLectures = s.lectures.map(l => 
                                l.id === lecture.id ? { ...l, type: e.target.value } : l
                              );
                              return { ...s, lectures: updatedLectures };
                            }
                            return s;
                          });
                          setCourseData(prev => ({ ...prev, sections: updatedSections }));
                        }}
                        className="text-sm border border-gray-300 rounded px-2 py-1"
                      >
                        <option value="video">Video</option>
                        <option value="quiz">Quiz</option>
                        <option value="assignment">Assignment</option>
                      </select>
                      <input
                        type="text"
                        value={lecture.title}
                        onChange={(e) => {
                          const updatedSections = courseData.sections.map(s => {
                            if (s.id === section.id) {
                              const updatedLectures = s.lectures.map(l => 
                                l.id === lecture.id ? { ...l, title: e.target.value } : l
                              );
                              return { ...s, lectures: updatedLectures };
                            }
                            return s;
                          });
                          setCourseData(prev => ({ ...prev, sections: updatedSections }));
                        }}
                        className="flex-1 text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        placeholder="Lecture title"
                      />
                      <input
                        type="text"
                        value={lecture.duration}
                        onChange={(e) => {
                          const updatedSections = courseData.sections.map(s => {
                            if (s.id === section.id) {
                              const updatedLectures = s.lectures.map(l => 
                                l.id === lecture.id ? { ...l, duration: e.target.value } : l
                              );
                              return { ...s, lectures: updatedLectures };
                            }
                            return s;
                          });
                          setCourseData(prev => ({ ...prev, sections: updatedSections }));
                        }}
                        className="w-20 text-sm border border-gray-300 rounded px-2 py-1"
                        placeholder="Duration"
                      />
                    </div>
                    <button
                      onClick={() => removeItem('lecture', section.id, lecture.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                ))}
                
                <button
                  onClick={() => addLecture(section.id)}
                  className="flex items-center text-sm text-indigo-600 hover:text-indigo-800 mt-2"
                >
                  <FiPlus className="mr-1" /> Add Lecture
                </button>
              </div>
            </div>
          ))}
          
          <button
            onClick={addSection}
            className="flex items-center justify-center w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:text-indigo-600 hover:border-indigo-600"
          >
            <FiPlus className="mr-2" /> Add Section
          </button>
        </div>
      </div>
    )}

    {currentStep === 4 && (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {courseData.faqs.map((faq) => (
            <div key={faq.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <input
                  type="text"
                  value={faq.question}
                  onChange={(e) => {
                    const updatedFaqs = courseData.faqs.map(f => 
                      f.id === faq.id ? { ...f, question: e.target.value } : f
                    );
                    setCourseData(prev => ({ ...prev, faqs: updatedFaqs }));
                  }}
                  placeholder="Question"
                  className="flex-1 font-medium text-gray-800 border-b border-gray-300 pb-1 focus:outline-none focus:border-indigo-500"
                />
                <button
                  onClick={() => removeItem('faq', null, faq.id)}
                  className="text-red-500 hover:text-red-700 ml-3"
                >
                  <FiTrash2 />
                </button>
              </div>
              <textarea
                value={faq.answer}
                onChange={(e) => {
                  const updatedFaqs = courseData.faqs.map(f => 
                    f.id === faq.id ? { ...f, answer: e.target.value } : f
                  );
                  setCourseData(prev => ({ ...prev, faqs: updatedFaqs }));
                }}
                rows={3}
                placeholder="Answer"
                className="w-full text-sm text-gray-600 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              ></textarea>
            </div>
          ))}
          
          <button
            onClick={addFaq}
            className="flex items-center text-indigo-600 hover:text-indigo-800"
          >
            <FiPlus className="mr-1" /> Add FAQ
          </button>
        </div>
      </div>
    )}

    {/* Navigation Buttons */}
    <div className="mt-8 flex justify-between">
      <button
        onClick={prevStep}
        disabled={currentStep === 1}
        className={`px-4 py-2 rounded-lg ${currentStep === 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
      >
        <FiChevronLeft className="inline mr-1" /> Previous
      </button>
      
      {currentStep < 4 ? (
        <button
          onClick={nextStep}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg cursor-pointer hover:bg-indigo-700"
        >
          Next <FiChevronRight className="inline ml-1" />
        </button>
      ) : (
        <button
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Submit Course
        </button>
      )}
    </div>
  </div>
</div>
</div>
   
   </>
  );
};

export default CreateCoursePage;