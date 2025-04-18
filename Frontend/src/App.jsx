import React, { useState, useEffect } from "react";
import "./globals.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Teacher/Dashboard/Dashboard";
import 'react-loading-skeleton/dist/skeleton.css';
import { Toaster } from "react-hot-toast";
import StudentDashboard from "./pages/Student/StudentDashboard";
import { motion, useScroll, useSpring } from 'framer-motion';
import SignUp from "./pages/Auth/SignUp";
import SignIn from "./pages/Auth/Signin";
import OTPVerification from "./pages/Auth/OTPVerification";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import About from "./pages/Admin/About";
import BecomeTeacherForm from "./pages/Teacher/BecomeTeacherForm";
import CreateCoursePage from "./pages/Teacher/CreateCoursePage";
import CoursesPage from "./pages/Student/CoursesPage";
import BranchesPage from "./pages/Home/BranchesPage";


const App = () => {

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoader(false), 2000); // Simulating loading delay
  }, []);



  return (
    <Router>
      <div className="relative bg-white text-black">
      

       
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Teacher-Routes */}
            <Route path="/teacher">
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="addcourse" element={<CreateCoursePage />} />
            </Route>

            {/* Student */}
            <Route path="/student">
              <Route path="dashboard" element={<StudentDashboard />} />
            </Route>
{/* Users */}
            <Route path="/">
              <Route path="register" element={<SignUp />} />
              <Route path="login" element={<SignIn />} />
              <Route path="otp/:id" element={<OTPVerification />} />
            </Route>
{/* Teacher */}

            <Route path="/">
              <Route path="becomeTeacher" element={<BecomeTeacherForm />} />
              <Route path="courses" element={<CoursesPage />} />

              <Route path="branches" element={<BranchesPage />} />

              </Route>
{/* About */}


<Route path="/">
<Route path="about" element={<About/>} />
</Route>
            {/* Admin */}

            <Route path="/admin">
            <Route path="dashboard" element={<AdminDashboard />} />

            </Route>
          </Routes>
     

        <Toaster />
      </div>
    </Router>
  );
};

export default App;
