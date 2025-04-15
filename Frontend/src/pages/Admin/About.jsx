import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaChalkboardTeacher, FaAward, FaUserTie } from 'react-icons/fa';
import { RiLightbulbFlashLine } from 'react-icons/ri';
import { FiTrendingUp } from 'react-icons/fi';
import NavBar from '../../Components/Home/NavBar';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const stats = [
    { value: '15+', label: 'Years Experience', icon: <FaAward className="text-3xl" /> },
    { value: '50K+', label: 'Students Trained', icon: <FaGraduationCap className="text-3xl" /> },
    { value: '200+', label: 'Certified Instructors', icon: <FaChalkboardTeacher className="text-3xl" /> },
    { value: '95%', label: 'Satisfaction Rate', icon: <FaUserTie className="text-3xl" /> }
  ];

  return (
   <>
   <NavBar/>
   <div className="bg-gradient-to-br overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 text-white "></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/pny-campus.mp4" type="video/mp4" />
        </video>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            <span className="text-white">About PNY</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl  max-w-3xl mx-auto text-white"
          >
            Empowering minds and transforming futures through innovative education since 2008
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section ref={ref} className="py-24 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -50 }
            }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Our <span className="text-blue-400">Story</span>
            </h2>
            <p className="text-lg  mb-6">
              Founded in 2008, PNY began as a small training center with a vision to bridge the gap between academia and industry. 
              Today, we stand as Pakistan's premier IT training institute, recognized for our cutting-edge curriculum and 
              industry-aligned programs.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <RiLightbulbFlashLine className="text-blue-400 text-2xl mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-white">Vision</h4>
                  <p className="text-gray-400">
                    To become the global benchmark for technology education and professional development.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FiTrendingUp className="text-blue-400 text-2xl mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-white">Mission</h4>
                  <p className="text-gray-400">
                    Empower individuals with future-ready skills through innovative learning experiences and industry partnerships.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 relative"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 }
            }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-800">
              <img 
                src="https://rwu.edu.pk/wp-content/uploads/2023/09/IMG_4286-1024x683.jpg" 
                alt="PNY Campus" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">Our Lahore Campus</h3>
                  <p className="text-blue-300">State-of-the-art learning facilities</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500 rounded-full opacity-20"></div>
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-blue-400 rounded-full opacity-20"></div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { 
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              },
              hidden: { opacity: 0 }
            }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center p-6  rounded-xl transition-all duration-300 cursor-pointer"
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 20 }
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex justify-center mb-4 text-white">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold mb-2 ">{stat.value}</h3>
                <p className="">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 text-white"
          >
            Our <span className="text-blue-400">Core Values</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            The principles that guide everything we do at PNY
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {[
    { 
      title: "Innovation", 
      desc: "We embrace change and continuously evolve our teaching methodologies",
    },
    { 
      title: "Excellence", 
      desc: "We set high standards and push boundaries in education quality",
    },
    { 
      title: "Integrity", 
      desc: "We maintain transparency and ethical practices in all operations",
    },
    { 
      title: "Community", 
      desc: "We foster collaborative learning environments that uplift everyone",
    },
    { 
      title: "Impact", 
      desc: "We measure success by our students' career transformations",
    },
    { 
      title: "Passion", 
      desc: "We teach with enthusiasm that inspires lifelong learning",
    }
  ].map((value, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`
        p-8 rounded-2xl shadow-lg hover:shadow-xl 
        transition-all duration-300 cursor-pointer 
        bg-white hover:bg-gray-200 text-black
      `}
      whileHover={{ y: -5 }}
    >
      <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
      <p>{value.desc}</p>
    </motion.div>
  ))}
</div>

      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-500 to-black text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6 text-white"
          >
            Ready to <span className="text-blue-400">Transform</span> Your Future?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white mb-8 max-w-2xl mx-auto"
          >
            Join thousands of successful PNY alumni who've launched rewarding tech careers
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
          

<motion.a 
  href="https://www.pnytrainings.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 cursor-pointer inline-block text-center"
  whileHover={{ 
    scale: 1.05,
    boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
  }}
  whileTap={{ scale: 0.98 }}
>
  Explore Programs
</motion.a>

          </motion.div>
        </div>
      </section>
    </div>
   
   </>
  );
};

export default About;