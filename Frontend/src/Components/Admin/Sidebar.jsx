import React, { useState, useEffect } from 'react'
import { FaHome, FaEllipsisV } from 'react-icons/fa'
import { sidebar_data } from './SidebarData.jsx'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { Link, NavLink, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const [expandedItems, setExpandedItems] = useState({})
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const location = useLocation()

  // Automatically expand parent items when their child is active
  useEffect(() => {
    const newExpandedItems = {...expandedItems}
    
    sidebar_data.forEach(item => {
      if (item.list) {
        const hasActiveChild = item.list.some(subItem => 
          location.pathname.startsWith(subItem.link)
        )
        if (hasActiveChild) {
          newExpandedItems[item.id] = true
        }
      }
    })

    setExpandedItems(newExpandedItems)
  }, [location.pathname])

  const toggleItem = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  // Close mobile sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.querySelector('.sidebar-container')
      const mobileMenuButton = document.querySelector('.mobile-menu-button')
      
      if (isMobileSidebarOpen && 
          !sidebar.contains(event.target) && 
          !mobileMenuButton?.contains(event.target)) {
        setIsMobileSidebarOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMobileSidebarOpen])

  const isAdminPage = location.pathname.startsWith('/admin')

  return (
    <>
      {/* Mobile Menu Button - Only visible on small screens */}
      <div className="lg:hidden fixed top-4 right-4 z-40">
        <button 
          className="mobile-menu-button p-2 rounded-md bg-[#24292D] text-white"
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
        >
          <FaEllipsisV className="text-xl" />
        </button>
      </div>

      {/* Sidebar - Responsive behavior */}
      <div className={`
        sidebar-container
        fixed lg:static
        min-h-screen p-5 text-white bg-[#24292D] 
        w-64 z-30
        transition-transform duration-300 ease-in-out
        ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo */}
        <Link to="/" className="block mb-8">
          <img
            src='https://themes.stackbros.in/eduport_r/assets/logo-light-C-qw19RF.svg'
            alt='Logo'
            width={150}
            className='text-white'
          />
        </Link>

        <div className='my-5'>
          <NavLink 
            to="/dashboard" 
            className={({isActive}) => `flex items-center gap-2 px-5 mb-6 ${
              isActive || isAdminPage ? 'text-blue-400' : ''
            }`}
            onClick={() => setIsMobileSidebarOpen(false)}
          >
            <FaHome />
            <h5 className='text-lg cursor-pointer font-semibold'>Dashboard</h5>
          </NavLink>

          <div className='flex flex-col gap-4'>
            <h3 className='text-gray-400 uppercase text-sm px-5'>Pages</h3>

            <ul className='flex flex-col gap-1'>
              {sidebar_data?.map((item) => (
                <li key={item.id}>
                  <div
                    onClick={() => {
                      if (item.list) toggleItem(item.id)
                      else setIsMobileSidebarOpen(false)
                    }}
                    className={`flex items-center justify-between gap-3 px-5 py-2 rounded-md hover:bg-[#343a40] cursor-pointer transition-all duration-200 ${
                      expandedItems[item.id] ? 'bg-[#343a40]' : ''
                    } ${
                      (item.link && location.pathname.startsWith(item.link)) ? 'bg-[#343a40]' : ''
                    }`}
                  >
                    <div className='flex items-center gap-2'>
                      <span className='text-xl'>{item.icon}</span>
                      {item.link ? (
                        <NavLink 
                          to={item.link} 
                          className={({isActive}) => `text-sm font-medium ${
                            isActive || (isAdminPage && item.link === '/dashboard') ? 'text-blue-400' : ''
                          }`}
                          onClick={(e) => {
                            if (!item.list) {
                              setIsMobileSidebarOpen(false)
                              e.stopPropagation()
                            }
                          }}
                        >
                          {item.title}
                        </NavLink>
                      ) : (
                        <span className='text-sm font-medium'>{item.title}</span>
                      )}
                    </div>
                    {item?.list && (
                      <MdOutlineKeyboardArrowDown
                        className={`transition-transform duration-300 ${
                          expandedItems[item.id] ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </div>

                  {/* Submenu */}
                  {item?.list && (
                    <ul
                      className={`ml-10 overflow-hidden transition-all duration-300 ${
                        expandedItems[item.id] ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      {item.list.map((subItem) => (
                        <li key={subItem.id} className='py-1'>
                          <NavLink
                            to={subItem.link}
                            className={({isActive}) => `block text-sm pl-2 py-1.5 rounded hover:bg-[#3a4249] transition-colors duration-200 ${
                              isActive ? 'text-blue-400 bg-[#3a4249]' : 'text-gray-300'
                            }`}
                            onClick={() => setIsMobileSidebarOpen(false)}
                          >
                            {subItem.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar