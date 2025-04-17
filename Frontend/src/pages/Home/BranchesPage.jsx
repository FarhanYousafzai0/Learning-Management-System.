import { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import NavBar from '../../Components/Home/NavBar';

// Updated Magnetic Button with glow effect
const MagneticButton = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="magnetic-wrapper inline-block"
      onMouseMove={(e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        setPosition({ 
          x: (e.clientX - left - width / 2) * 0.3,
          y: (e.clientY - top - height / 2) * 0.3
        });
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setPosition({ x: 0, y: 0 });
        setIsHovered(false);
      }}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.2s ease-out'
      }}
    >
      <div className="relative">
        {children}
        {isHovered && (
          <motion.div 
            className="absolute inset-0 bg-white opacity-20 rounded-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 0.2 }}
            transition={{ duration: 0.4 }}
          />
        )}
      </div>
    </div>
  );
};

const BranchesPage = () => {
  const [activeBranch, setActiveBranch] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Updated branch data with amazing placeholder images
  const branches = [
    { 
      id: 1, 
      city: 'Arfa Tower (Head Office)', 
      students: 2500, 
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      courses: 18 
    },
    { 
      id: 2, 
      city: 'Iqbal Town', 
      students: 1800, 
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      courses: 15 
    },
    { 
      id: 3, 
      city: 'Johar Town', 
      students: 3200, 
      image: 'https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      courses: 22 
    },
    { 
      id: 4, 
      city: 'Shahdara Branch', 
      students: 500, 
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      courses: 12 
    },
    { 
      id: 5, 
      city: 'Rawalpindi', 
      students: 120, 
      image: 'https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      courses: 12 
    },
    { 
      id: 6, 
      city: 'Multan', 
      students: 400, 
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      courses: 12 
    },
    { 
      id: 7, 
      city: 'Sargodha Branch', 
      students: 100, 
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      courses: 12 
    },
    { 
      id: 8, 
      city: 'Saudi Arabia', 
      students: 400, 
      image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      courses: 12 
    },
  ];

  // Filter branches based on search
  const filteredBranches = branches.filter(branch =>
    branch.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>

    <NavBar/>
    <div className="branches-page bg-gray-50 min-h-screen">
      {/* Hero Section with Gradient Background */}
      <section className="hero-section py-20 px-4 text-center bg-gradient-to-br from-indigo-900 to-purple-800">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-6 text-white"
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse">Global</span> Campuses
        </motion.h1>
        
        {/* Animated search bar with glass morphism */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-md mx-auto"
        >
          <div className="relative">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Find your nearest branch..."
              className="w-full p-4 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all shadow-lg"
            />
            <button className="absolute right-2 top-2 bg-gradient-to-br from-cyan-400 to-blue-500 text-white p-2 rounded-lg transition-all transform hover:scale-110 hover:shadow-lg">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Stats Section with Floating Animation */}
      <section className="stats-section py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <motion.div 
              whileHover={{ y: -5 }}
              className="stat-item p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-white shadow-md"
            >
              <CountUp end={25} duration={3} className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600" />
              <p className="text-gray-600 mt-2">Global Branches</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="stat-item p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-white shadow-md"
            >
              <CountUp end={120} duration={3} className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600" />
              <p className="text-gray-600 mt-2">Courses Offered</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="stat-item p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-white shadow-md"
            >
              <CountUp end={50000} duration={3} separator="," className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600" />
              <p className="text-gray-600 mt-2">Students Enrolled</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="stat-item p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-white shadow-md"
            >
              <CountUp end={15} duration={3} className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600" />
              <p className="text-gray-600 mt-2">Countries</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Branches Grid with Modern Cards */}
      <section className="branches-grid py-20 px-4 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
          >
            Explore Our Campuses
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredBranches.map((branch) => (
              <Tilt 
                key={branch.id} 
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#ffffff"
                glarePosition="all"
                scale={1.03}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="branch-card bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col border border-white/20"
                >
                  <div className="relative h-48 overflow-hidden group">
                    <img 
                      src={branch.image} 
                      alt={branch.city} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 w-full p-4">
                      <h3 className="text-white text-2xl font-bold drop-shadow-lg">{branch.city}</h3>
                    </div>
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      Featured
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-center mb-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                      <p className="text-gray-600">{branch.courses}+ Courses Available</p>
                    </div>
                    <div className="flex items-center mb-6">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                      <p className="text-gray-600">{branch.students}+ Students</p>
                    </div>
                    
                    <MagneticButton>
                      <button className="mt-auto w-full py-3 px-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                        <span>Explore</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </MagneticButton>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Floating Elements */}
      <section className="cta-section py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 opacity-95"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/10 rounded-full"
              style={{
                width: Math.random() * 200 + 50,
                height: Math.random() * 200 + 50,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6 text-white"
          >
            Ready to Join Our Global Community?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto text-white/90"
          >
            Find the perfect campus for your educational journey.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <MagneticButton>
              <button className="px-12 py-4 bg-white text-indigo-600 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:shadow-xl flex items-center mx-auto gap-2">
                Apply Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </div>
    
    
    </>
  );
};

export default BranchesPage;