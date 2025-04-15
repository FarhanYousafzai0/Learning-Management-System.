import React, { useState } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
const menuItems = ['About us', 'Contact us', 'News and Blogs', 'Library', 'Career'];
const community = ['Documentation', 'FAQ', 'Forum', 'Sitemap'];
const teaching = ['Become a teacher', 'How to guide', 'Terms & Conditions'];
const contact = ['Email: coderwithferry@gmail.com'];


const Footer = () => {
   const [language, setLanguage] = useState('Language');

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };
  return (
    <div className='w-full bg-[#FFFFFF] mx-auto px-10 md:px-20 py-15 border-t border-gray-300'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-content-center lg:grid-cols-5 gap-10'>
        
        {/* Logo & Description */}
        <div className='flex flex-col gap-4'>
          <img 
            src="https://vectorjungal.com/files/preview/1280x405/117222840473b5i1fifzdt6ggfancin8phyitwa9batprdmtuhcazzbvlyyfqybsxwaa1hpebaeaojntubnixwm4nxhgg4xpg9rmam8ilny2gle.png"
            className="w-32"
            alt="Logo"
          />
          <p className='text-sm text-gray-600 leading-relaxed'>
          PNY Trainings
          Pakistan's No.1 IT Training Institute.
          </p>

          {/* Social Icons */}
          <div className='flex items-center gap-3'>
            {[
              { icon: FaFacebookF, color: '#1877F2' },
              { icon: FaInstagram, color: 'linear-gradient(to bottom right, #FCAF45, #E1306C, #833AB4)' },
              { icon: FaLinkedin, color: '#0A66C2' },
              { icon: FaTwitter, color: '#1DA1F2' }
            ].map(({ icon: Icon, color }, index) => (
              <span
                key={index}
                className='flex items-center justify-center p-2 rounded-lg text-white'
                style={{ background: color }}
              >
                <Icon className='cursor-pointer text-lg' />
              </span>
            ))}
          </div>
        </div>

        {/* Menu Sections */}
        {[{ title: 'Company', items: menuItems },
          { title: 'Community', items: community },
          { title: 'Teaching', items: teaching },
          { title: 'Contact', items: contact }].map((section, index) => (
          <div key={index}>
            <h3 className='font-bold text-xl text-black mb-3'>{section.title}</h3>
            <ul className='list-none'>
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  className='py-1 text-sm transition-all duration-300 cursor-pointer hover:text-blue-500'
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>


<hr className='mt-4 text-gray-300'/>
     <div className='flex items-center mt-4   justify-between'>

      <p className=''>Copyrights ©2025 PNY. Build by Farhan Yousafzai</p>

<div className='flex items-center gap-6'>

  <p>Terms of use </p>
  <p>Privacy policy</p>
</div>
     </div>
    </div>
  );
};

export default Footer;
