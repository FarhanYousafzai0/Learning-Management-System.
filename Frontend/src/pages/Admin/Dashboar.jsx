import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, AreaChart, Area, LineChart, Line
} from 'recharts';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data for charts
  const courseData = [
    { name: 'Jan', enrolled: 400, completed: 240 },
    { name: 'Feb', enrolled: 300, completed: 139 },
    { name: 'Mar', enrolled: 600, completed: 400 },
    { name: 'Apr', enrolled: 500, completed: 280 },
    { name: 'May', enrolled: 800, completed: 600 },
    { name: 'Jun', enrolled: 700, completed: 450 },
  ];

  const earningsData = [
    { name: 'Jan', earnings: 4000 },
    { name: 'Feb', earnings: 3000 },
    { name: 'Mar', earnings: 6000 },
    { name: 'Apr', earnings: 5000 },
    { name: 'May', earnings: 8000 },
    { name: 'Jun', earnings: 7000 },
  ];

  const timeSpentData = [
    { name: 'Week 1', hours: 20 },
    { name: 'Week 2', hours: 15 },
    { name: 'Week 3', hours: 25 },
    { name: 'Week 4', hours: 30 },
  ];

  const trafficData = [
    { name: 'Direct', value: 400 },
    { name: 'Social', value: 300 },
    { name: 'Referral', value: 200 },
    { name: 'Organic', value: 100 },
  ];

  const supportRequests = [
    { id: 1, user: 'Sarah Johnson', type: 'Technical', status: 'Pending', date: '2023-05-15' },
    { id: 2, user: 'Mike Peterson', type: 'Billing', status: 'Resolved', date: '2023-05-14' },
    { id: 3, user: 'Emma Davis', type: 'Content', status: 'In Progress', date: '2023-05-12' },
    { id: 4, user: 'David Kim', type: 'Technical', status: 'Pending', date: '2023-05-10' },
  ];

  const topInstructors = [
    { id: 1, name: 'Alex Morgan', courses: 12, students: 1240, rating: 4.9 },
    { id: 2, name: 'Maria Garcia', courses: 8, students: 980, rating: 4.8 },
    { id: 3, name: 'James Wilson', courses: 6, students: 750, rating: 4.7 },
  ];

  const notices = [
    { id: 1, title: 'System Maintenance', content: 'Planned maintenance on June 15th from 2-4 AM UTC', date: '2023-06-10', priority: 'high' },
    { id: 2, title: 'New Features', content: 'New analytics dashboard coming next week!', date: '2023-06-05', priority: 'medium' },
    { id: 3, title: 'Holiday Schedule', content: 'Office will be closed on July 4th', date: '2023-05-30', priority: 'low' },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 shadow-lg rounded-lg border border-gray-200">
          <p className="font-semibold">{label}</p>
          {payload.map((entry, index) => (
            <p key={`tooltip-${index}`} style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Learning Dashboard</h1>
            <p className="text-gray-600 mt-2">Welcome back! Here's what's happening today.</p>
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer">
              Generate Report
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition cursor-pointer">
              Export Data
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          {['overview', 'analytics', 'reports', 'settings'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 font-medium cursor-pointer ${
                activeTab === tab ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Total Courses</p>
                <h3 className="text-2xl font-bold mt-1">42</h3>
                <p className="text-green-500 text-sm mt-1">+12% from last month</p>
              </div>
              <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Enrolled Courses</p>
                <h3 className="text-2xl font-bold mt-1">18</h3>
                <p className="text-green-500 text-sm mt-1">+5 this month</p>
              </div>
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Completed Hours</p>
                <h3 className="text-2xl font-bold mt-1">156</h3>
                <p className="text-green-500 text-sm mt-1">+32h this month</p>
              </div>
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Total Earnings</p>
                <h3 className="text-2xl font-bold mt-1">$4,850</h3>
                <p className="text-green-500 text-sm mt-1">+$1,200 this month</p>
              </div>
              <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Courses Chart */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-2"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Course Enrollment & Completion</h2>
              <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
                <option>Last 6 Months</option>
                <option>Last Year</option>
                <option>All Time</option>
              </select>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={courseData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar dataKey="enrolled" fill="#8884d8" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="completed" fill="#82ca9d" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Traffic Sources */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
          >
            <h2 className="text-xl font-semibold mb-4">Traffic Sources</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={trafficData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {trafficData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Earnings Chart */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Monthly Earnings</h2>
              <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
              </select>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={earningsData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" dataKey="earnings" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Time Spent */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Weekly Learning Time</h2>
              <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
                <option>Current Month</option>
                <option>Last Month</option>
                <option>Last 3 Months</option>
              </select>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={timeSpentData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Line type="monotone" dataKey="hours" stroke="#82ca9d" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Top Instructors */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
          >
            <h2 className="text-xl font-semibold mb-4">Top Instructors</h2>
            <div className="space-y-4">
              {topInstructors.map((instructor) => (
                <div key={instructor.id} className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mr-4">
                    {instructor.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{instructor.name}</h3>
                    <p className="text-sm text-gray-500">{instructor.courses} courses • {instructor.students} students</p>
                  </div>
                  <div className="flex items-center bg-yellow-50 px-2 py-1 rounded">
                    <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium">{instructor.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Support Requests */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Recent Support Requests</h2>
              <button className="text-indigo-600 text-sm font-medium cursor-pointer">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {supportRequests.map((request) => (
                    <tr key={request.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{request.user}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{request.type}</td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          request.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                          request.status === 'Resolved' ? 'bg-green-100 text-green-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {request.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{request.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Notice Board */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Notice Board</h2>
              <button className="text-indigo-600 text-sm font-medium cursor-pointer">View All</button>
            </div>
            <div className="space-y-4">
              {notices.map((notice) => (
                <motion.div 
                  key={notice.id}
                  whileHover={{ x: 5 }}
                  className={`p-4 rounded-lg border-l-4 ${
                    notice.priority === 'high' ? 'border-red-500 bg-red-50' :
                    notice.priority === 'medium' ? 'border-yellow-500 bg-yellow-50' :
                    'border-green-500 bg-green-50'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-gray-900">{notice.title}</h3>
                    <span className="text-xs text-gray-500">{notice.date}</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">{notice.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;