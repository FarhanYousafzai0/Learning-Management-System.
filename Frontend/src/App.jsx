import React, { useState, useEffect } from "react";
import "./globals.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Teacher/Dashboard/Dashboard";
import 'react-loading-skeleton/dist/skeleton.css';
import { Toaster } from "react-hot-toast";
import StudentDashboard from "./pages/Student/StudentDashboard";
import { motion, useScroll, useSpring } from 'framer-motion';
import Loader from "./Components/Home/Loader";

const App = () => {

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoader(false), 2000); // Simulating loading delay
  }, []);

  const { scrollYProgress } = useScroll();

  // Add spring effect for smooth scaling
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <div className="relative">
        <motion.div
          style={{
            scaleX: smoothProgress
          }}
          className='fixed top-0 left-0 right-0 bg-[#066AC9] h-[5px] rounded-lg  z-50'
        ></motion.div>

        {loader ? (
         <Loader/>
        ) : (
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Teacher-Routes */}
            <Route path="/teacher">
              <Route path="dashboard" element={<Dashboard />} />
            </Route>

            {/* Student */}
            <Route path="/student">
              <Route path="dashboard" element={<StudentDashboard />} />
            </Route>
          </Routes>
        )}

        <Toaster />
      </div>
    </Router>
  );
};

export default App;
