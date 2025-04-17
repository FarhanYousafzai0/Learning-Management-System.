import { useState,useRef,useEffect } from 'react';
import { FiHeart, FiClock, FiCalendar } from 'react-icons/fi';
import { FaHeart, FaStar, FaRegStar } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import {motion} from 'framer-motion';
import gsap from 'gsap';
import { RiFilter3Line } from 'react-icons/ri';
import NavBar from '../../Components/Home/NavBar';

const CoursesPage = () => {
  const [likedItems, setLikedItems] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  // Sample course data
  const courses = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Advanced JavaScript',
      desc: 'Master modern JavaScript concepts and frameworks',
      level: 'Advanced',
      levelColor: '#F0ECF9',
      rating: 4.8,
      time: '24h 30m',
      lectures: '18 Lectures',
      category: 'development'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'UI/UX Fundamentals',
      desc: 'Learn the principles of great user interface design',
      level: 'Beginner',
      levelColor: '#E6F9F0',
      rating: 4.5,
      time: '15h 45m',
      lectures: '12 Lectures',
      category: 'design'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Digital Marketing',
      desc: 'Grow your business with modern marketing techniques',
      level: 'Intermediate',
      levelColor: '#F9F0E6',
      rating: 4.7,
      time: '20h 15m',
      lectures: '15 Lectures',
      category: 'marketing'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
      title: 'Amazon Course',
      desc: 'Learn how to sell on Amazon and grow your business',
      level: 'Beginner',
      levelColor: '#E6F9F0',
      rating: 4.9,
      time: '18h 30m',
      lectures: '14 Lectures',
      category: 'business'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Cyber Security',
      desc: 'Protect your data and systems from cyber threats',
      level: 'Intermediate',
      levelColor: '#F9F0E6',
      rating: 4.6,
      time: '22h 00m',
      lectures: '16 Lectures',
      category: 'development'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Business Analytics',
      desc: 'Analyze data to make informed business decisions',
      level: 'Beginner',
      levelColor: '#E6F9F0',
      rating: 4.4,
      time: '12h 45m',
      lectures: '10 Lectures',
      category: 'business'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Full-Stack Web Development',
      desc: 'Become a full-stack developer with MERN stack skills',
      level: 'Advanced',
      levelColor: '#F0ECF9',
      rating: 4.9,
      time: '30h 20m',
      lectures: '25 Lectures',
      category: 'development'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Branding and Identity Design',
      desc: 'Create compelling brand identities and design systems',
      level: 'Intermediate',
      levelColor: '#F9F0E6',
      rating: 4.6,
      time: '17h 10m',
      lectures: '13 Lectures',
      category: 'design'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'SEO Masterclass',
      desc: 'Boost website traffic with expert SEO strategies',
      level: 'Beginner',
      levelColor: '#E6F9F0',
      rating: 4.5,
      time: '14h 00m',
      lectures: '11 Lectures',
      category: 'marketing'
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'E-commerce Essentials',
      desc: 'Learn to build and grow online stores successfully',
      level: 'Intermediate',
      levelColor: '#F9F0E6',
      rating: 4.7,
      time: '19h 25m',
      lectures: '16 Lectures',
      category: 'business'
    },
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1138&q=80',
      title: 'Photography Mastery',
      desc: 'Master the art of photography from beginner to pro',
      level: 'Advanced',
      levelColor: '#F0ECF9',
      rating: 4.8,
      time: '21h 50m',
      lectures: '18 Lectures',
      category: 'photography'
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1076&q=80',
      title: 'Introduction to Machine Learning',
      desc: 'Explore ML concepts and build your first ML models',
      level: 'Intermediate',
      levelColor: '#F9F0E6',
      rating: 4.7,
      time: '23h 15m',
      lectures: '20 Lectures',
      category: 'development'
    }
  ];

  const paragraphRef = useRef(null);
  useEffect(() => {
    if (!paragraphRef.current) return;
  
    // Wrap each character for individual control
    const text = paragraphRef.current.innerText;
    paragraphRef.current.innerHTML = text.split('').map(char => 
      `<span class="char" style="
        display: inline-block;
        color: inherit;
        transition: color 0.3s ease;
      ">
        ${char === ' ' ? '&nbsp;' : char}
      </span>`
    ).join('');
  
    // Animate with a single color wave
    gsap.to(paragraphRef.current.querySelectorAll('.char'), {
      color: "#0D9488", // Bright blue (change to your brand color)
      duration: 0.6,
      repeat: -1,
      yoyo: true,   
      stagger: {
        each: 0.03,
        from: "start", // Flows left-to-right
        ease: "sine.inOut" // Smooth sine wave timing
      },
      onComplete: () => {
        // Reset to original color after a delay
        gsap.to(paragraphRef.current.querySelectorAll('.char'), {
          color: "inherit",
          duration: 0.4,
          delay: 0.2
        });
      }
    });
  
  }, []);

  
  const toggleLike = (id) => {
    setLikedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filterCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || course.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStar key={i} className="text-yellow-400 opacity-50" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    
    return stars;
  };

  return (
   <>
   <NavBar/>
   
   
   <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
      >
        Explore Our <span className="text-[#0D9488]">Courses</span>
      </motion.h1>
      <p
        ref={paragraphRef}
        className="text-xl text-gray-600 max-w-2xl mx-auto "
      >
        Learn new skills with our expert instructors. Choose from hundreds of courses in various categories.
      </p>
    </div>
        
        {/* Search and Filter */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="relative w-full sm:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-2 bg-white rounded-lg shadow-sm p-1">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-md text-sm cursor-pointer font-medium ${activeFilter === 'all' ? 'bg-green-500 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter('development')}
              className={`px-4 py-2 rounded-md text-sm cursor-pointer font-medium ${activeFilter === 'development' ? 'bg-green-500 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              Development
            </button>
            <button
              onClick={() => setActiveFilter('design')}
              className={`px-4 py-2 rounded-md text-sm cursor-pointer font-medium ${activeFilter === 'design' ? 'bg-green-500 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              Design
            </button>

            <button
              onClick={() => setActiveFilter('business')}
              className={`px-4 py-2 rounded-md text-sm cursor-pointer font-medium ${activeFilter === 'business' ? 'bg-green-500 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              Business
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 rounded-md">
              <RiFilter3Line />
            </button>
          </div>
        </div>
        
        {/* Courses Grid */}
        {filterCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filterCourses.map((course) => (
              <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
                key={course.id} 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer  duration-300 transform hover:-translate-y-1"
              >
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <button
                      onClick={() => toggleLike(course.id)}
                      className="p-2 bg-white rounded-full cursor-pointer shadow-md hover:bg-gray-100 transition-colors"
                    >
                      {likedItems[course.id] ? (
                        <FaHeart className="text-red-500" />
                      ) : (
                        <FiHeart className="text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <span 
                      className={`px-2 py-1 text-xs font-semibold rounded-md ${
                        course.levelColor === "#F0ECF9" 
                          ? "bg-purple-100 text-purple-800" 
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {course.level}
                    </span>
                    
                    <div className="flex items-center">
                      {renderStars(course.rating)}
                      <span className="ml-1 text-sm text-gray-600">{course.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-green-600 transition-colors cursor-pointer">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.desc}</p>
                  
                  <div className="border-t border-gray-200 pt-4 flex justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <FiClock className="mr-1" />
                      <span>{course.time}</span>
                    </div>
                    <div className="flex items-center">
                      <FiCalendar className="mr-1" />
                      <span>{course.lectures}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-700">No courses found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
          </div>
        )}
        
        {/* Pagination */}
        {filterCourses.length > 0 && (
          <div className="mt-12 flex justify-center">
            <nav className="inline-flex  items-center justify-center gap-1 rounded-lg shadow-lg p-2 bg-white">
  <button className="px-4 py-2 rounded-l-lg  cursor-pointer border border-gray-300 text-sm font-semibold text-green-600 bg-white hover:bg-green-100 transition">
    Previous
  </button>
  <button className="px-4 py-2 border cursor-pointer rounded-md border-gray-300 text-sm font-semibold text-green-600 bg-white hover:bg-green-100 transition">
    1
  </button>
  <button className="px-4 py-2 border cursor-pointer rounded-md border-green-500 text-sm font-semibold text-white bg-green-500 hover:bg-green-600 transition">
    2
  </button>
  <button className="px-4 py-2 border cursor-pointer rounded-md border-green-500 text-sm font-semibold text-white bg-green-500 hover:bg-green-600 transition">
    3
  </button>
  <button className="px-4 py-2 cursor-pointer rounded-r-lg border border-gray-300 text-sm font-semibold text-green-600 bg-white hover:bg-green-100 transition">
    Next
  </button>
</nav>

          </div>
        )}
      </div>
    </div>
   </>
  );
};

export default CoursesPage;