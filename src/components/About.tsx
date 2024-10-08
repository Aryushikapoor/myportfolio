"use client";
import React from 'react';
import Image from 'next/image';
import book from "../assets/starter-files-nextjs-animated/assets/book.png";
import pc from "../assets/starter-files-nextjs-animated/assets/pc.png";
import card from "../assets/starter-files-nextjs-animated/assets/card.png";
import finance from "../assets/starter-files-nextjs-animated/assets/finance.png";

const About = () => {
  return (
    <div className="max-w-[1300px] mx-auto py-10 relative z-10" id="about">
      <h1 className='text-orange-400 text-5xl max-w-[320px] mx-auto font-semibold p-4 mb-8 text-center'>
        About <span className='text-orange-400'>Me</span>
      </h1>

      <div className='px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-stretch'>
        
        {/* Education Section */}
        <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-yellow-400 via-blue-500 to-green-500 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6 pr-1 relative z-10'>
            <Image src={book} alt="book" className='w-auto h-[120px]' />
            <div className='flex flex-col ml-4 w-full'>
              <h2 className='text-2xl font-bold text-black/80'>Education</h2>
              <ul className='text-lg text-gray-700 mt-2 list-none'>
                <li className='relative pl-6'>
                  <span className='absolute left-0'>❖</span>
                  Bachelor of Technology<br /> 
                  Robotics and Automation<br />
                  Guru Gobind Singh Indraprastha University, New Delhi, India<br />
                  CGPA: 9.095/10.0
                </li>
                <li className='relative pl-6 mt-2'>
                  <span className='absolute left-0'>❖</span>
                  High School<br />
                  Physics, Chemistry, Mathematics, Computer Science (C++)<br />
                  C.R.P.F Public School, New Delhi<br />
                  Percentage: 92%
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Problem Solving Section */}
        <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-yellow-400 via-blue-500 to-green-500 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6 relative z-10'>
            <Image src={pc} alt="Problem Solving" className='w-auto h-[120px]' />
            <div className='flex flex-col ml-4'>
              <h2 className='text-2xl font-bold text-black/80'>Problem Solving</h2>
              <p className='text-lg text-gray-700 mt-2'>
                I have expertise in developing web applications using React, Next.js, and Node.js. My skills include data structures and algorithms for efficient problem-solving, as well as a solid understanding of operating systems and databases for scalable solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-yellow-400 via-blue-500 to-green-500 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6 relative z-10'>
            <Image src={card} alt="Experience" className='w-auto h-[120px]' />
            <div className='flex flex-col ml-4'>
              <h2 className='text-2xl font-bold text-black/80'>Experience</h2>
              <ul className='text-lg text-gray-700 mt-2 list-none'>
                <li className='relative pl-6'>
                  <span className='absolute left-0'>❖</span>
                  Asgrv Solutions, Full Stack Developer Intern <br />(June 2024, Remote)
                </li>
                <li className='relative pl-6 mt-2'>
                  <span className='absolute left-0'>❖</span>
                  IBM SkillsBuild Internship <br />(July 2024 - August 2024, Remote)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-yellow-400 via-blue-500 to-green-500 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6 relative z-10'>
            <Image src={finance} alt="Achievements" className='w-auto h-[120px]' />
            <div className='flex flex-col ml-4'>
              <h2 className='text-2xl font-bold text-black/80'>Achievements</h2>
              <ul className='text-lg text-gray-700 mt-2 list-none'>
              <li className='relative pl-6'>
                <span className='absolute left-0'>❖</span>
                    Team Backup! Success: Secured 5th place in the IBM SkillsBuild Internship Program 2024 for the project &quot;Her Cycle,&quot; competing against 29,347 students from 6,123 teams across 1,230 colleges in India.
                </li>
                <li className='relative pl-6 mt-2'>
                  <span className='absolute left-0'>❖</span>
                  Postman API Fundamentals Student Expert: Earned a badge from Postman, demonstrating proficiency in API fundamentals.
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
