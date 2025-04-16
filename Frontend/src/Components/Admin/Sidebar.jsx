import React, { useState } from "react";
import { FaHome } from "react-icons/fa";

import { RiArrowDropDownLine } from "react-icons/ri";
import { sidebar_data } from "./SidebarData";

const Sidebar = ({ selected, setSelected }) => {
  const [open, setOpen] = useState(null);
  const handleClick = (id) => {
    setOpen(open == id ? null : id);
  };
  return (
    <>
      <div className="min-h-screen fixed text-white p-5 bg-[#24292D]">
        <img
          src="https://themes.stackbros.in/eduport_r/assets/logo-light-C-qw19RF.svg"
          alt="logo"
          width={200}
        />
        <div
          onClick={() => setSelected("Dashboard")}
          className={`flex gap-3 items-center px-5 mt-10 py-3 rounded-md mb-5 cursor-pointer ${
            selected == "Dashboard" && "bg-gray-100 text-black"
          } `}
        >
          <FaHome />
          <h5 className="text-sm font-semibold">Dashboard</h5>
        </div>

        <p className="text-gray-500">Pages</p>
        <ul className="flex flex-col unstyled gap-3">
          {sidebar_data?.map((item, index) => {
            return (
              <div key={index} onClick={() => setSelected(item?.title)}>
                <li
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`flex flex-col py-2 my-3 justify-between hover:bg-gray-200 hover:text-black px-4 transition-all rounded-md cursor-pointer gap-3 ${
                    selected == item?.title && "bg-gray-100 text-black"
                  } `}
                >
                  <div className="flex gap-3 justify-between items-center">
                    <div className="flex gap-3 items-center">
                      {item?.icon}
                      <h5 className="text-sm font-semibold">{item?.title}</h5>
                    </div>
                    {item?.list && <RiArrowDropDownLine />}
                  </div>
                </li>
                {item?.list && (
                  <>
                    <ul
                      className={`flex transition-all delay-200 duration-200 flex-col unstyled gap-3 ${
                        open == index
                          ? "h-[100px] opacity-100"
                          : "h-0 overflow-hidden opacity-0"
                      } `}
                    >
                      {item?.list?.map((item2, index2) => {
                        return <li className="ms-10">{item2?.title}</li>;
                      })}
                    </ul>
                  </>
                )}
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;