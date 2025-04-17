import { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt'; 
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

// Magnetic Button Component (simplified implementation)
const MagneticButton = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.3;
    const y = (e.clientY - top - height / 2) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div 
      className="magnetic-wrapper inline-block"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.2s ease-out'
      }}
    >
      {children}
    </div>
  );
};

const BranchesPage = () => {
  const [activeBranch, setActiveBranch] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Sample branch data
  const branches = [
    { id: 1, city: 'Arfa Tower (Head Office)', students: 2500, image: '/ny-campus.jpg', courses: 18 },
    { id: 2, city: 'Iqbal Town', students: 1800, image: '/london-campus.jpg', courses: 15 },
    { id: 3, city: 'Johar Town', students: 3200, image: '/tokyo-campus.jpg', courses: 22 },
    { id: 4, city: 'Shahdara Branch', students: 500, image: '', courses: 12 },
    { id: 5, city: 'Rawalpindi', students: 120, image: '', courses: 12 },
    { id: 6, city: 'Multan', students: 400, image: '', courses: 12 },
    { id: 7, city: 'Sargodha Branch', students: 100, image: '', courses: 12 },
    { id: 8, city: 'Saudi Arabia', students: 400, image: '', courses: 12 },

  ];

  // Filter branches based on search
  const filteredBranches = branches.filter(branch =>
    branch.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="branches-page bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="hero-section py-20 px-4 text-center ">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-6"
        >
          Our <span className="text-blue-600 animate-pulse">Global</span> Campuses
        </motion.h1>
        
        {/* Animated search bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-md mx-auto"
        >
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Find your nearest branch..."
            className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-all shadow-sm"
          />
          <button className="absolute right-2 top-2 bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-2 rounded-lg transition-all transform hover:scale-110">
            <MagnifyingGlassIcon className="h-6 w-6" />
          </button>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="stat-item p-6 bg-gray-50 rounded-xl"
            >
              <CountUp end={25} duration={3} className="text-5xl font-bold text-blue-600" />
              <p className="text-gray-500 mt-2">Global Branches</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="stat-item p-6 bg-gray-50 rounded-xl"
            >
              <CountUp end={120} duration={3} className="text-5xl font-bold text-blue-600" />
              <p className="text-gray-500 mt-2">Courses Offered</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="stat-item p-6 bg-gray-50 rounded-xl"
            >
              <CountUp end={50000} duration={3} separator="," className="text-5xl font-bold text-blue-600" />
              <p className="text-gray-500 mt-2">Students Enrolled</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="stat-item p-6 bg-gray-50 rounded-xl"
            >
              <CountUp end={15} duration={3} className="text-5xl font-bold text-blue-600" />
              <p className="text-gray-500 mt-2">Countries</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Branches Grid */}
      <section className="branches-grid py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Explore Our Campuses</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredBranches.map((branch) => (
              <Tilt key={branch.id} options={{ max: 15, scale: 1.05 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="branch-card bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={branch.image} 
                      alt={branch.city} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full p-4">
                      <h3 className="text-white text-2xl font-bold">{branch.city}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow">
                    <p className="text-gray-600 mb-4">📍 {branch.courses}+ Courses Available</p>
                    <p className="text-gray-600">👨‍🎓 {branch.students}+ Students</p>
                    
                    <MagneticButton>
                      <button className="mt-6 w-full py-3 px-5 cursor-pointer bg-gradient-to-r curp from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all transform hover:-translate-y-1">
                        Explore Campus
                      </button>
                    </MagneticButton>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
     

      {/* CTA Section */}
      <section className="cta-section py-20 px-4 bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Global Community?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Find the perfect campus for your educational journey.</p>
          
          <MagneticButton>
            <button className="px-12 py-4 bg-white text-blue-600 rounded-xl cursor-pointer text-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:shadow-xl">
              Apply Now
             
            </button>
          </MagneticButton>
        </div>
      </section>
    </div>
  );
};

export default BranchesPage;