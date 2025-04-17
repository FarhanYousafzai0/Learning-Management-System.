import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaUserGraduate, FaChalkboardTeacher, FaHandsHelping, FaLaptopCode, FaRegSmileBeam } from 'react-icons/fa';
import { GiProgression } from 'react-icons/gi';
import MagneticButton from './MagneticButton';

const WhyChooseUs = () => {
  // Feature cards data
  const features = [
    {
      icon: <FaAward className="text-4xl" />,
      title: "Proven Excellence",
      description: "10+ years of delivering top-tier education with 95% satisfaction rate",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <FaUserGraduate className="text-4xl" />,
      title: "Career Transformation",
      description: "82% of our students report significant career advancement within 6 months",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl" />,
      title: "Expert Instructors",
      description: "Learn from industry practitioners with 5+ years of real-world experience",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: <FaLaptopCode className="text-4xl" />,
      title: "Cutting-Edge Curriculum",
      description: "Courses updated quarterly to reflect latest industry trends",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <FaHandsHelping className="text-4xl" />,
      title: "1:1 Mentorship",
      description: "Personalized guidance from enrollment to employment",
      color: "from-rose-500 to-pink-500"
    },
    {
      icon: <GiProgression className="text-4xl" />,
      title: "Lifetime Access",
      description: "Continuing education resources even after graduation",
      color: "from-violet-500 to-fuchsia-500"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "This program completely changed my career trajectory. I doubled my salary in 8 months!",
      author: "Sarah K., Software Engineer",
      role: "Alumni 2022"
    },
    {
      quote: "The hands-on projects gave me the portfolio I needed to land my dream job.",
      author: "Michael T., UX Designer",
      role: "Alumni 2023"
    },
    {
      quote: "Never experienced such supportive learning environment anywhere else.",
      author: "Priya M., Data Scientist",
      role: "Alumni 2021"
    }
  ];

  // Stats data
  const stats = [
    { value: "10K+", label: "Students Trained" },
    { value: "94%", label: "Completion Rate" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "500+", label: "Hiring Partners" }
  ];

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Floating background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-20 w-72 h-72 bg-blue-300 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 w-80 h-80 bg-teal-300 rounded-full filter blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full">
            Why We're Different
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Competitive Edge</span> You Deserve
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just teach skills - we cultivate market-ready professionals through immersive, career-focused education.
          </p>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="relative py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${feature.color} p-0.5 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300`}
            >
              <div className="h-full bg-white rounded-2xl p-8 flex flex-col items-start">
                <div className={`mb-6 p-3 rounded-lg bg-gradient-to-br ${feature.color} text-white`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <div className="mt-auto w-full">
                  <div className="h-1 w-16 bg-gradient-to-r from-gray-200 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <motion.p 
                  className="text-5xl font-bold text-gray-900 mb-2"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-gray-600 uppercase text-sm tracking-wider">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories That <span className="text-indigo-600">Inspire</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from those who've transformed their careers
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <FaRegSmileBeam className="text-4xl text-amber-400 mb-6" />
              <blockquote className="text-lg text-gray-700 italic mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-500 to-purple-600"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of successful graduates who took the leap with us
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <MagneticButton>Explore Programs</MagneticButton>
                <MagneticButton>Speak to Advisor</MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;