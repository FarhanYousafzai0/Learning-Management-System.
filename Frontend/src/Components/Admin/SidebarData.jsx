import { FaBasketShopping, FaChartBar } from "react-icons/fa6";
import { PiStudent } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";

export const sidebar_data = [
  {
    id: 1,
    title: "Courses",
    icon: <FaBasketShopping />,
    list: [
      {
        id: 101,
        title: "All courses",
      },
      {
        id: 102,
        title: "Course Category",
      },
      {
        id: 103,
        title: "Add Course",
      },
    ],
  },
  {
    id: 2,
    title: "Add User",
    icon: <PiStudent />,
  },
  {
    id: 3,
    title: "All Users",
    icon: <PiStudent />,
  },
  {
    id: 4,
    title: "Instructors",
    icon: <FaChalkboardTeacher/>,
    list: [
      {
        id: 104,
        title: "Instructors",
      },
      {
        id: 105,
        title: "Instructor details",
      },
      {
        id: 106,
        title: "Instructor requests",
      },
    ],
  },
  {
    id: 5,
    title: "Reviews",
    icon: <FaChartBar />,
  },
  {
    id: 6,
    title: "Earnings",
    icon: <FaChartBar />,
  },
  {
    id: 7,
    title: "Admin Setting",
    icon: <FaChartBar />,
  },
];
