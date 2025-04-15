import { 
  FaUser, 
  FaDashcube, 
  FaHome, 
  FaGraduationCap, 
  FaBook, 
  FaSchool, 
  FaChalkboardTeacher, 
  FaChild, 
  FaGlobeAmericas, 
  FaTools,
  FaLandmark,
  FaShoppingCart,
  FaQuestionCircle,
  FaSignInAlt,
  FaEdit,
  FaCog,
  FaTrash,
  FaLayerGroup,
  FaCube
} from "react-icons/fa";

export const nav_data = [
  {
    id: 1,
    title: "Demos",
    icon: <FaLayerGroup />,
    list: [
      {
        id: 2,
        title: "Home Default",
        link: "",
        icon: <FaHome />
      },
      {
        id: 3,
        title: "Home Education",
        link: "",
        icon: <FaGraduationCap />
      },
      {
        id: 4,
        title: "Home Course",
        link: "",
        icon: <FaBook />
      },
      {
        id: 5,
        title: "Home Academy",
        link: "",
        icon: <FaSchool />
      },
      {
        id: 6,
        title: "Home University",
        link: "",
        icon: <FaLandmark />
      },
      {
        id: 7,
        title: "Home Tutor",
        link: "",
        icon: <FaChalkboardTeacher />
      },
      {
        id: 8,
        title: "Home Kindergarten",
        link: "",
        icon: <FaChild />
      },
      {
        id: 9,
        title: "Home School",
        link: "",
        icon: <FaSchool />
      },
      {
        id: 10,
        title: "Home Abroad",
        link: "",
        icon: <FaGlobeAmericas />
      },
      {
        id: 11,
        title: "Home Workshop",
        link: "",
        icon: <FaTools />
      },
      {
        id: 12,
        title: "Home Landing",
        link: "",
        icon: <FaHome />
      },
    ],
  },
  {
    id: 14,
    title: "Pages",
    icon: <FaBook />,
    list: [
      {
        id: 15,
        title: "Course",
        link: "",
        icon: <FaBook />,
        subList: [
          {
            id: 22,
            title: "Course Classic",
            icon: <FaBook />
          },
          {
            id: 23,
            title: "Course modern",
            icon: <FaBook />
          },
          {
            id: 24,
            title: "Course minimal",
            icon: <FaBook />
          },
          {
            id: 25,
            title: "Course grid",
            icon: <FaBook />
          },
        ],
      },
      {
        id: 16,
        title: "Become a Teacher",
        link: "/becomeTeacher",
        icon: <FaChalkboardTeacher />
      },
      {
        id: 17,
        title: "Shop",
        link: "",
        icon: <FaShoppingCart />,
        subList: [
          {
            id: 18,
            title: "Course Categories",
            icon: <FaBook />
          },
          // ... other shop items
        ],
      },
      {
        id: 19,
        title: "Help",
        link: "",
        icon: <FaQuestionCircle />,
        subList: [
          // ... help items
        ],
      },
      {
        id: 20,
        title: "Auth",
        link: "",
        icon: <FaSignInAlt />,
        subList: [
          // ... auth items
        ],
      },
      // ... other page items
    ],
  },
  {
    id: 4237,
    title: "Accounts",
    icon: <FaUser />,
    list: [
      {
        id: 4234,
        title: "Instructor",
        link: "",
        icon: <FaChalkboardTeacher />,
        subList: [
          {
            id: 654635,
            title: "Add Course",
            link: "",
            icon: <FaBook />
          },
          {
            id: 654636,
            title: "Add Quiz",
            link: "/teacher/dashboard",
            icon: <FaEdit />
          },
          // ... other instructor items
        ],
      },
      {
        id: 4235,
        title: "Student",
        link: "/student/dashboard",
        icon: <FaUser />,
       
      },
      {
        id: 4236,
        title: "Admin",
        link: "/admin/dashboard",
        icon: <FaCube />
      },
      {
        id: 4237,
        title: "Edit Profile",
        link: "",
        icon: <FaEdit />
      },
      {
        id: 4238,
        title: "Settings",
        link: "",
        icon: <FaCog />
      },
      {
        id: 4239,
        title: "Delete Profile",
        link: "",
        icon: <FaTrash />
      },
      // ... other account items
    ],
  },
  {
    id: 4344,
    title: "About Us",
    link: "/about",
  
  }
];