import React from 'react';
import NavBar from '../../../Components/Home/NavBar';
import { BsFillPatchCheckFill, BsThreeDotsVertical } from 'react-icons/bs';
import { PiStudentFill } from 'react-icons/pi';
import { TiBook } from 'react-icons/ti';
import { FiSettings, FiMessageSquare, FiCalendar } from 'react-icons/fi';
import { BiStats } from 'react-icons/bi';
import { Button } from '@mui/material';
import QuizModal from './QuizModal';
import CourseCard from './CourseCard';

const Dashboard = () => {
  // Sample data - replace with your actual data
  const courses = [
  {
    id: 1,
    title: 'Advanced Web Development',
    students: 1200,
    progress: 75,
    thumbnail: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
    category: 'Web Development',
    duration: '8 Weeks',
    level: 'Advanced'
  },
  {
    id: 2,
    title: 'Machine Learning Fundamentals',
    students: 850,
    progress: 30,
    thumbnail: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    category: 'Data Science',
    duration: '10 Weeks',
    level: 'Intermediate'
  },
  {
    id: 3,
    title: 'UI/UX Design Principles',
    students: 650,
    progress: 90,
    thumbnail: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    category: 'Design',
    duration: '6 Weeks',
    level: 'Beginner'
  },
  {
    id: 4,
    title: 'Mobile App Development with React Native',
    students: 980,
    progress: 45,
    thumbnail: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    category: 'Mobile Development',
    duration: '7 Weeks',
    level: 'Intermediate'
  },
  {
    id: 5,
    title: 'Data Structures & Algorithms',
    students: 2100,
    progress: 60,
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    category: 'Computer Science',
    duration: '12 Weeks',
    level: 'Advanced'
  },
  {
    id: 6,
    title: 'Digital Marketing Fundamentals',
    students: 750,
    progress: 85,
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    category: 'Marketing',
    duration: '5 Weeks',
    level: 'Beginner'
  }
];

  const stats = [
    { title: 'Total Students', value: '12,450', change: '+12%', positive: true },
    { title: 'Active Courses', value: '25', change: '+2', positive: true },
    { title: 'Completion Rate', value: '78%', change: '+5%', positive: true },
    { title: 'Avg. Rating', value: '4.5/5', change: '+0.2', positive: true }
  ];

  return (
    <>
      <NavBar />

      {/* Background Header */}
      <div
        style={{
          backgroundImage: "url(https://themes.stackbros.in/eduport_r/assets/04-Bnwx2Yg_.png)",
        }}
        className="min-h-[100px] md:min-h-[200px] bg-[#1D3B53] relative"
      >
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="p-2 bg-white bg-opacity-20 rounded-full text-white hover:bg-opacity-30 transition">
            <FiSettings size={18} />
          </button>
          <button className="p-2 bg-white bg-opacity-20 rounded-full text-white hover:bg-opacity-30 transition">
            <FiMessageSquare size={18} />
          </button>
          <button className="p-2 bg-white bg-opacity-20 rounded-full text-white hover:bg-opacity-30 transition">
            <BsThreeDotsVertical size={18} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 pb-10">
        {/* Profile Section */}
        <section className="">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
            {/* Profile Info */}
            <div className="flex items-center gap-4 col-span-2">
              <div className="border-4 -translate-y-[40%] md:-translate-y-[20%] border-white h-[100px] w-[100px] md:h-[130px] md:w-[130px] rounded-full overflow-hidden shadow-lg">
                <img
                  src="https://themes.stackbros.in/eduport_r/assets/01-7N0KytgQ.jpg"
                  alt="Profile picture of Eren Yeager"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <p className="text-2xl md:text-3xl font-semibold capitalize">Eren Yeager</p>
                  <BsFillPatchCheckFill className="translate-y-1" color="#8DD1DC" />
                </div>
                <p className="text-gray-600 mb-2">Senior Instructor | Web Development</p>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-3 text-sm md:text-base">
                  <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                    ⭐ 4.5/5.0
                  </span>
                  <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                    <PiStudentFill color="orange" /> 12K Enrolled Students
                  </span>
                  <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                    <TiBook color="purple" /> 25 Courses
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row justify-end gap-3">
              <QuizModal />
              <Button 
                variant="contained" 
                color="primary"
                className="bg-blue-600 hover:bg-blue-700"
              >
                Create New Course
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mt-8 md:mt-12">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <BiStats className="text-blue-500" /> Dashboard Overview
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
                <p className={`text-sm mt-1 ${stat.positive ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.change} {stat.positive ? '↑' : '↓'}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Courses Section */}
        <section className="mt-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
              <TiBook className="text-purple-500" /> Your Courses
            </h2>
            <Button variant="outlined" color="primary">
              View All
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {/* Recent Activity Section */}
        <section className="mt-10">
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
            <FiCalendar className="text-orange-500" /> Recent Activity
          </h2>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-4">
              {[1, 2, 3, 4].map(item => (
                <div key={item} className="flex items-start pb-4 border-b border-gray-100 last:border-0">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <FiMessageSquare className="text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium">New message from student #{item}</p>
                    <p className="text-gray-500 text-sm mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="text-gray-400 text-xs mt-2">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button 
              variant="text" 
              color="primary" 
              className="mt-4"
              fullWidth
            >
              View All Activity
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;