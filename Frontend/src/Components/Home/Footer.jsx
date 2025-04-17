import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  const [language, setLanguage] = useState('English');
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Company',
      items: ['About us', 'Contact us', 'News and Blogs', 'Library', 'Career']
    },
    {
      title: 'Community',
      items: ['Documentation', 'FAQ', 'Forum', 'Sitemap']
    },
    {
      title: 'Teaching',
      items: ['Become a teacher', 'How to guide', 'Terms & Conditions']
    },
    {
      title: 'Contact',
      items: ['Email: coderwithferry@gmail.com', 'Phone: +123 456 7890', 'Address: Lahore, Pakistan']
    }
  ];

  const socialIcons = [
    { icon: FaFacebookF, color: '#1877F2', name: 'Facebook' },
    { icon: FaInstagram, color: '#E1306C', name: 'Instagram' },
    { icon: FaLinkedinIn, color: '#0A66C2', name: 'LinkedIn' },
    { icon: FaTwitter, color: '#1DA1F2', name: 'Twitter' }
  ];

  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-6">
              <img 
                src="https://vectorjungal.com/files/preview/1280x405/117222840473b5i1fifzdt6ggfancin8phyitwa9batprdmtuhcazzbvlyyfqybsxwaa1hpebaeaojntubnixwm4nxhgg4xpg9rmam8ilny2gle.png"
                className="w-40"
                alt="PNY Trainings Logo"
              />
              <p className="text-gray-600 leading-relaxed">
                Pakistan's No.1 IT Training Institute. Providing quality education and training since 2008.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                {socialIcons.map(({ icon: Icon, color, name }, index) => (
                  <a
                    key={index}
                    href="#"
                    aria-label={name}
                    className="flex items-center justify-center p-2 rounded-full text-white transition-all hover:opacity-90"
                    style={{ backgroundColor: color }}
                  >
                    <Icon className="text-lg" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Menu Sections */}
          {sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <a 
                      href="#" 
                      className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="my-8 border-gray-200" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} PNY Trainings. All rights reserved. Build by Farhan Yousafzai
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Terms of use</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Privacy policy</a>
            
            {/* Language Selector */}
            <div className="relative flex items-center gap-2">
              <FaGlobe className="text-gray-500" />
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent text-gray-600 text-sm appearance-none focus:outline-none cursor-pointer"
              >
                <option value="English">English</option>
                <option value="Urdu">Urdu</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;