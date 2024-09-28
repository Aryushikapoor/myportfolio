import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='bg-[#FDFCDC] px-6 md:px-0 mt-10  text-black/70 py-8 w-full mx-auto border-t border-gray-700 flex flex-col'>
      <div className='flex justify-between items-start'>
        <div className='flex flex-col text-left'>
          <h1 className='text-orange-400 text-2xl font-bold pl-20'>Aryushi Kapoor</h1>
          <p className='mt-2 text-sm pl-20'>
            Didn&apos;t like the way it looks? Let me know your views through the contact form or drop me a message on my socials mentioned below.
          </p>
          <p className='mt-1 text-sm italic pl-20'>
            In the realm of self-improvement, constructive criticism is the compass guiding me towards the shores of wisdom.
          </p>
        </div>
      </div>

      <div className='flex justify-between items-center mt-4 pr-40'>
        <div className='flex space-x-6 pl-20'>
          <a href="#" className='hover:text-orange-400'>
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/Aryushikapoor" className='hover:text-orange-400'>
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/aryushi-kapoor/" className='hover:text-orange-400'>
            <FaInstagram size={24} />
          </a>
        </div>

        <p className='text-sm mt-4 text-center pl-90'>
          Copyright © 2024 by Aryushi Kapoor | All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
