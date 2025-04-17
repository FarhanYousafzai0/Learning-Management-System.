import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaMapMarkerAlt, FaUniversity, FaUsers, FaBookOpen } from "react-icons/fa";
import MagneticButton from './MagneticButton';

const JourneyToSuccess = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [activeIndex, setActiveIndex] = useState(0);
    const timelineRef = useRef(null);

    const statsData = [
        {
            icon: <FaAward className="text-3xl text-indigo-600" />,
            label: "Awarded by USA Education 2.0",
            value: "Excellence Award",
        },
        {
            icon: <FaMapMarkerAlt className="text-3xl text-indigo-600" />,
            label: "Multiple Branches",
            value: "Across Pakistan",
        },
        {
            icon: <FaUniversity className="text-3xl text-indigo-600" />,
            label: "Government Affiliations",
            value: "PSDA & PBTE",
        },
        {
            icon: <FaUsers className="text-3xl text-indigo-600" />,
            label: "Successful Alumni",
            value: "100K+",
        },
        {
            icon: <FaBookOpen className="text-3xl text-indigo-600" />,
            label: "Professional Programs",
            value: "100+",
        },
    ];

    const milestones = [
        {
            year: "2005",
            title: "Humble Beginnings",
            description: "Founded with just 2 classrooms and a vision to transform education",
            icon: "🏛️"
        },
        {
            year: "2010",
            title: "First Accreditation",
            description: "Received our first government recognition and accreditation",
            icon: "📜"
        },
        {
            year: "2015",
            title: "National Expansion",
            description: "Opened 5 new campuses across major cities in Pakistan",
            icon: "📍"
        },
        {
            year: "2020",
            title: "Digital Transformation",
            description: "Launched our online learning platform serving 10,000+ students",
            icon: "💻"
        },
        {
            year: "2023",
            title: "International Recognition",
            description: "Awarded as Top Education Provider by Global EdTech Awards",
            icon: "🌎"
        }
    ];

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
            
            if (timelineRef.current) {
                const { left, width } = timelineRef.current.getBoundingClientRect();
                const percent = Math.min(1, Math.max(0, (e.clientX - left) / width));
                const newIndex = Math.floor(percent * (milestones.length - 1));
                setActiveIndex(newIndex);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="relative w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
            {/* Floating decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                <div className="absolute top-1/4 right-20 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            </div>

            {/* Text Section */}
            <div className="container mx-auto px-6 py-24 md:py-32 flex flex-col justify-center min-h-[60vh] relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <div className="inline-block mb-4 px-4 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold">
                        Our Evolution
                    </div>
                    <h2 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-green-500">Growth Story</span>
                    </h2>
                    <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Trace our journey from modest beginnings to becoming a leader in innovative education through this interactive timeline.
                    </p>

                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {statsData.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-xl bg-indigo-50">
                                    {stat.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">{stat.value}</h3>
                                <p className="mt-2 text-gray-600 text-sm">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Interactive Timeline Section */}
            <div className="relative w-full py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div 
                        ref={timelineRef}
                        className="relative h-2 bg-gray-200 rounded-full max-w-4xl mx-auto mb-20 cursor-pointer"
                        onMouseMove={(e) => {
                            const { left, width } = e.currentTarget.getBoundingClientRect();
                            const percent = Math.min(1, Math.max(0, (e.clientX - left) / width));
                            const newIndex = Math.floor(percent * (milestones.length - 1));
                            setActiveIndex(newIndex);
                        }}
                    >
                        {/* Timeline progress */}
                        <motion.div 
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-green-500 rounded-full"
                            style={{ 
                                width: `${(activeIndex / (milestones.length - 1)) * 100}%` 
                            }}
                            transition={{ type: 'spring', damping: 20 }}
                        />
                        
                        {/* Timeline markers */}
                        <div className="absolute inset-0 flex justify-between items-center">
                            {milestones.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-6 h-6 rounded-full ${index <= activeIndex ? 'bg-indigo-600 scale-125' : 'bg-gray-300'} transition-all duration-300 transform -translate-y-1/2`}
                                    onClick={() => setActiveIndex(index)}
                                    aria-label={`Go to ${milestones[index].year}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Active milestone content */}
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
                    >
                        <div className="text-center md:text-right">
                            <span className="inline-block text-8xl mb-4">{milestones[activeIndex].icon}</span>
                            <h3 className="text-5xl font-bold text-gray-900">{milestones[activeIndex].year}</h3>
                        </div>
                        
                        <div className="md:col-span-2 text-center md:text-left">
                            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{milestones[activeIndex].title}</h4>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto md:mx-0">{milestones[activeIndex].description}</p>
                        </div>
                    </motion.div>

                    {/* Cursor follower */}
                    <motion.div
                        className="fixed w-64 h-64 rounded-full bg-indigo-100 pointer-events-none z-0"
                        style={{
                            left: cursorPosition.x - 128,
                            top: cursorPosition.y - 128,
                            opacity: 0.2
                        }}
                        transition={{ type: 'spring', mass: 0.1 }}
                    />
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Be Part of Our Next Chapter
                        </h3>
                        <p className="text-xl text-indigo-100 mb-8">
                            Join thousands of students writing their success stories with us.
                        </p>
                        <MagneticButton 
                           
                        >
                            Start Your Journey
                        </MagneticButton>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default JourneyToSuccess;