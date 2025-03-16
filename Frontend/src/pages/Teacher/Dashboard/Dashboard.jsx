import React from 'react';
import NavBar from '../../../Components/Home/NavBar';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { PiStudentFill } from 'react-icons/pi';
import { TiBook } from 'react-icons/ti';
import { Button } from '@mui/material';
import QuizModal from './QuizModal';

const Dashboard = () => {
  return (
    <>
      <NavBar />

      {/* Background Header */}
      <div
        style={{
          backgroundImage:
            "url(https://themes.stackbros.in/eduport_r/assets/04-Bnwx2Yg_.png)",
        }}
       className="min-h-[100px] md:min-h-[200px] bg-[#1D3B53]"></div>

      {/* Profile Section */}
      <section className="container mx-auto md:-mt-7 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Profile Info */}
          <div className="flex items-center gap-4">
            <div className="border-2 -translate-y-[40%] md:-translate-y-[20%] border-white h-[100px] w-[100px] md:h-[130px] md:w-[130px] rounded-full overflow-hidden">
              <img
                src="https://themes.stackbros.in/eduport_r/assets/01-7N0KytgQ.jpg"
                alt="Profile picture of Eren Yeager"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <p className="text-3xl font-semibold capitalize">Eren Yeager</p>
                <BsFillPatchCheckFill className="translate-y-1" color="#8DD1DC" />
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                <span>⭐ 4.5/5.0</span>
                <span className="flex items-center gap-1">
                  <PiStudentFill color="orange" /> 12K Enrolled Students
                </span>
                <span className="flex items-center gap-1">
                  <TiBook color="purple" /> 25 Courses
                </span>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-center md:justify-end  mt-4 md:mt-0">
          <QuizModal/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
