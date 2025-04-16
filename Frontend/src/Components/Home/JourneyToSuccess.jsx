import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { FaAward, FaMapMarkerAlt, FaUniversity, FaUsers, FaBookOpen } from "react-icons/fa";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const JourneyToSuccess = () => {
    const statsData = [
        {
            icon: <FaAward className="text-3xl text-indigo-600" />,
            label: "Awarded by USA Education 2.0",
        },
        {
            icon: <FaMapMarkerAlt className="text-3xl text-indigo-600" />,
            label: "Multiple Branches in Pakistan",
        },
        {
            icon: <FaUniversity className="text-3xl text-indigo-600" />,
            label: "Affiliated with Govt. (PSDA & PBTE)",
        },
        {
            icon: <FaUsers className="text-3xl text-indigo-600" />,
            label: "100K Alumni",
        },
        {
            icon: <FaBookOpen className="text-3xl text-indigo-600" />,
            label: "100+ Professional Programs",
        },
    ];

    const scrollContainerRef = useRef(null);
    const journeyImages = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVtTkIZyIgmGW6ulZDWQ1O1mTmaYh7isze-g&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRngk66BU0OlK8z9VbRXMEFQQ3aQoOMRKjRHYIRvBBAD6WQ_KLflUIT6wPa5FnOXAecg&usqp=CAU',
        'https://pnygroup.co/wp-content/uploads/2024/02/2299f7b9-57bc-4a56-b4fc-3a21bd11cde0.jpg',
        'https://media.licdn.com/dms/image/v2/D4D22AQELTsY3VmTRbw/feedshare-shrink_800/B4DZUZadE5G4Ak-/0/1739888121175?e=2147483647&v=beta&t=1A-QEjgFeMfDVsDASb-RIfErDxq0pN5m9ZvuYCIs_J0',
        'https://www.pnytrainings.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbannerhome.bfd09960.png&w=3840&q=75',
    ];

    useEffect(() => {
        const container = scrollContainerRef.current;
        const images = gsap.utils.toArray('.journey-image');

        // Calculate total width of all images
        const totalWidth = images.length * images[0].offsetWidth;

        // Create horizontal scroll animation with proper boundaries
        gsap.to(images, {
            xPercent: -100 * (images.length - 1),
            ease: 'none',
            scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: 1,
                end: () => `+=${totalWidth}`,
                invalidateOnRefresh: true
            }
        });

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className="relative w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Text Section */}
            <div className="container mx-auto px-6 py-24 md:py-32 flex flex-col justify-center min-h-[60vh]">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Our <span className='text-green-500'>Journey</span> to Success
                    </h2>
                    <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
                        The journey shows the entrepreneurial growth of each individual student, with current goals to achieve victory. Through our success, we raise you up to be unstoppable in the world of opportunities.
                    </p>

                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {statsData.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"
                            >
                                {stat.icon}
                                <p className="mt-4 text-gray-700 font-semibold">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Horizontal Scrolling Gallery */}
            <div
                ref={scrollContainerRef}
                className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden"
            >
                <div className="absolute inset-0 flex items-center">
                    <div className="flex whitespace-nowrap">
                        {journeyImages.map((img, index) => (
                            <div
                                key={index}
                                className="journey-image relative inline-block w-[80vw] md:w-[50vw] h-[30vh] md:h-[40vh] mx-4 rounded-2xl overflow-hidden"
                            >
                                <img
                                    src={img}
                                    alt={`Journey moment ${index}`}
                                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out transform hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Floating Scroll Indicator */}
           
        </section>
    );
};

export default JourneyToSuccess;