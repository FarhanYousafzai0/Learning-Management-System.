import React from "react";
import "./globals.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Teacher/Dashboard/Dashboard";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Router>
      <div className="relative">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Teacher-Routes */}
          <Route path="/teacher">
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
        <Toaster/>
      </div>
    </Router>
  );
};

export default App;
