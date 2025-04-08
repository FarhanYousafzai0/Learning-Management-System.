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
        id: 2,
        title: "All courses",
      },
      {
        id: 3,
        title: "Course Category",
      },
      {
        id: 4,
        title: "Add Course",
      },
    ],
  },
  {
    id: 5,
    title: "Add User",
    icon: <PiStudent />,
  },
  {
    id: 50,
    title: "All Users",
    icon: <PiStudent />,
  },
  {
    id: 6,
    title: "Instructors",
    icon: <FaChalkboardTeacher />,

    list: [
      {
        id: 2,
        title: "Instructors",
      },
      {
        id: 3,
        title: "Instructor details",
      },
      {
        id: 4,
        title: "Instructor requests",
      },
    ],
  },
  {
    id: 6,
    title: "Reviews",
    icon: <FaChartBar />,
  },
  {
    id: 6,
    title: "Earnings",
    icon: <FaChartBar />,
  },
  {
    id: 6,
    title: "Admin Setting",
    icon: <FaChartBar />,
  },
];