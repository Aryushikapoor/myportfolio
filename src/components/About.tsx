"use client";
import React from 'react';
import Image from 'next/image';
import book from "../assets/starter-files-nextjs-animated/assets/book.png";
import pc from "../assets/starter-files-nextjs-animated/assets/pc.png";
import card from "../assets/starter-files-nextjs-animated/assets/card.png";
import finance from "../assets/starter-files-nextjs-animated/assets/finance.png";

const About = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-10 relative z-10" id="about">

      <h1 className='text-white text-5xl max-w-[320px] mx-auto font-semibold p-4 mb-8'>
        About <span className='text-orange-400'>Me</span></h1>

      <div className='px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-center'>
        {/* Education Section */}
        <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6 relative z-10'>
            <Image src={book} alt="book" className='w-auto h-[130px]' />
            <div className='flex flex-col ml-4'>
              <h2 className='text-2xl font-bold text-white/80'>Education</h2>
              <p className='text-lg text-white/70 mt-2'>Details about your education...</p>
            </div>
          </div>
        </div>

        {/* Problem Solving Section */}
        <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6 relative z-10'>
            <Image src={pc} alt="Problem Solving" className='w-auto h-[130px]' />
            <div className='flex flex-col ml-4'>
              <h2 className='text-2xl font-bold text-white/80'>Problem Solving</h2>
              <p className='text-lg text-white/70 mt-2'>Details about your problem-solving skills...</p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6 relative z-10'>
            <Image src={card} alt="Experience" className='w-auto h-[130px]' />
            <div className='flex flex-col ml-4'>
              <h2 className='text-2xl font-bold text-white/80'>Experience</h2>
              <p className='text-lg text-white/70 mt-2'>Details about your experience...</p>
            </div>
          </div>
        </div>

        {/* Additional Section */}
        <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6 relative z-10'>
            <Image src={finance} alt="Additional" className='w-auto h-[130px]' />
            <div className='flex flex-col ml-4'>
              <h2 className='text-2xl font-bold text-white/80'>Finance</h2>
              <p className='text-lg text-white/70 mt-2'>Details about finance-related information...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
