import { FaTachometerAlt, FaBook, FaQuestionCircle, FaChartLine, FaUserGraduate, FaClipboardList, FaStar, FaUserEdit, FaWallet, FaCog, FaTrash, FaSignOutAlt } from 'react-icons/fa';

export const sidebar = [
    { id: 1, icon: <FaTachometerAlt />, title: 'Dashboard' },
    { id: 2, icon: <FaBook />, title: 'My Courses' },
    { id: 3, icon: <FaQuestionCircle />, title: 'Quiz' },
    { id: 4, icon: <FaChartLine />, title: 'Earnings' },
    { id: 5, icon: <FaUserGraduate />, title: 'Students' },
    { id: 6, icon: <FaClipboardList />, title: 'Orders' },
    { id: 7, icon: <FaStar />, title: 'Reviews' },
    { id: 8, icon: <FaUserEdit />, title: 'Edit Profile' },
    { id: 9, icon: <FaWallet />, title: 'Payouts' },
    { id: 10, icon: <FaCog />, title: 'Settings' },
    { id: 11, icon: <FaTrash />, title: 'Delete Profile' },
    { id: 12, icon: <FaSignOutAlt />, title: 'Sign Out', color: 'text-red-500' }
];
