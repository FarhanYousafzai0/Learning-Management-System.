import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { getUserData } from '../../features/User/userSlice';
import { Menu, Transition } from '@headlessui/react';
import { BiDotsVertical } from 'react-icons/bi';

const AllUsers = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(8);

  const { allUser, userLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  // Filter users based on search term
  const filteredUsers = allUser?.filter(user =>
    user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers?.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers?.length / usersPerPage);

  const statusColor = {
    active: 'bg-green-100 text-green-800',
    inactive: 'bg-gray-100 text-gray-800',
    pending: 'bg-yellow-100 text-yellow-800'
  };

  const roleColor = {
    Admin: 'bg-purple-100 text-purple-800',
    Editor: 'bg-blue-100 text-blue-800',
    Viewer: 'bg-orange-100 text-orange-800'
  };

  // Generate AI avatar based on user name
  const generateAIAvatar = (name) => {
    const colors = ['FFAD08', 'EDD75A', '73B06F', '0C8F8F', '405059', '2C497F', '7D3C8C', 'B24C63'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=${color}&color=fff&size=128`;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 overflow-hidden md:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
            <p className="text-gray-600 mt-2">
              {allUser?.length || 0} {allUser?.length === 1 ? 'user' : 'users'} in total
            </p>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} className="mt-4 md:mt-0 w-full md:w-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search users..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </motion.div>
        </div>

        {userLoading ? (
          <div className="flex justify-center items-center h-64">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full"
            />
          </div>
        ) : (
          <>
            <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 250px)' }}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-6"
              >
                <AnimatePresence>
                  {currentUsers?.map((user) => (
                    <motion.div
                      key={user._id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 relative"
                    >
                      <div className="p-6">
                        {/* Action Menu */}
                        <Menu as="div" className="absolute top-4 right-4">
                          <div>
                            <Menu.Button className="p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-500 focus:outline-none">
                              <BiDotsVertical className="h-5 w-5" aria-hidden="true" />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={React.Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                              <div className="py-1">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} group flex items-center px-4 py-2 text-sm w-full`}
                                    >
                                      <PencilIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                                      Edit
                                    </button>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} group flex items-center px-4 py-2 text-sm w-full`}
                                    >
                                      <TrashIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                                      Delete
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>

                        <div className="flex items-center space-x-4">
                          <motion.div whileHover={{ scale: 1.1 }}>
                            <img
                              className="min-h-16 min-w-16 rounded-full object-center object-cover border-2 border-white shadow"
                              src={user.avatar || generateAIAvatar(user.name)}
                              alt={user.name}
                              onError={(e) => {
                                e.target.src = generateAIAvatar(user.name);
                              }}
                            />
                          </motion.div>
                          <div>
                            <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
                            <p className="text-gray-500 text-sm truncate max-w-[180px]">{user.email}</p>
                          </div>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${roleColor[user.role] || 'bg-gray-100 text-gray-800'}`}>
                            {user.role}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor[user.status] || 'bg-gray-100 text-gray-800'}`}>
                            {user.status}
                          </span>
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-600">
                          <p className="font-medium">Last Active</p>
                          <p>{user.lastActive ? new Date(user.lastActive).toLocaleDateString() : 'N/A'}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-6">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 cursor-pointer  rounded-md ${currentPage === 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
                >
                  Previous
                </button>
                <div className="flex items-center space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 cursor-pointer rounded-full ${currentPage === page ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 cursor-pointer rounded-md ${currentPage === totalPages ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </motion.div>
    </div>
  );
};

export default AllUsers;