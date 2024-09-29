"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import project1 from "../assets/starter-files-nextjs-animated/assets/PR1.png";
import project2 from "../assets/starter-files-nextjs-animated/assets/PR2.png";
import project3 from "../assets/starter-files-nextjs-animated/assets/PR3.png";
import project4 from "../assets/starter-files-nextjs-animated/assets/PR4.png";
import project5 from "../assets/starter-files-nextjs-animated/assets/PR5.png";
import project6 from "../assets/starter-files-nextjs-animated/assets/PR6.png";

const projects = [
    {
        title: "Amazon Clone",
        desc: "Developed Amazon 2.0, a full-stack Amazon clone using modern web technologies to replicate core functionalities of the e-commerce giant.",
        devStack: "[Next.js, React.js, Webhooks, Stripe Checkout, Tailwind.CSS, Firestore, NextAuth]",
        link: "https://amazon-starter-template-nextjs-pink.vercel.app/",
        git: "https://github.com/Aryushikapoor/Amazon-starter-template-nextjs",
        src: project2
    },
    {
        title: "Her Cycle",
        desc: "A platform focusing on menstrual health and well-being, providing information and resources for women throughout their menstrual cycle..",
        devStack: "[React.js, Node.js, IBM Watson Assistant, TailwindCSS]",
        link: "https://her-cycle.vercel.app/",
        git: "https://github.com/Aryushikapoor/her-cycle",
        src: project1
    },
    {
        title: "Artzon Interior",
        desc: "A full-stack website showcasing interior design solutions and portfolio, helping clients transform their spaces .",
        devStack: "[HTML, TailwindCSS, JavaScript, Mailchimp, Reach.js, Bootstrap, Node.js]",
        link: "https://artzoninteriors.vercel.app/",
        git: "https://github.com/adityagaur0/Artzon-Interiors",
        src: project3
    },
    {
        title: "ASGRV Solutions",
        desc: "A full-stack solution aimed at improving business engagements through modern web technologies.",
        devStack: "[Next.js, React.js, Node.js, Tailwind.CSS]",
        link: "https://www.asgrvsolutions.in/",
        git: "https://github.com/Asgrv/asgrv-web",
        src: project4
    },
   
    {
        title: "Shortly",
        desc: "A URL shortening service that simplifies sharing links, manage and distribute concise, trackable URLs.",
        devStack: "[Bootstrap, MongoDB, Google Autentication, Express.js, Chart.js, Node.js]",
        link: "https://shortly-url-five.vercel.app/",
        git: "https://github.com/Aryushikapoor/shortly-nodejs",
        src: project6
    },
    {
        title: "Weather App",
        desc: "An application providing real-time weather updates, current conditions and forecasts..",
        devStack: "[OpenWeatherMap API, React.js, HTML, JavaScript, CSS, Node.js]",
        link: "https://react-weather-app-eight-psi.vercel.app/",
        git: "https://github.com/Aryushikapoor/react-weather-app",
        src: project5
    },
];

const Portfolio = () => {
  return (
      <div className='bg-gradient-to-b from-yellow-100 to-blue-200 py-18 mt-10 ' id="portfolio">
          <div className="flex justify-center">
              <h1 className='text-5xl max-w-[400px] font-semibold pt-14 mb-8 text-orange-400 text-center'>
                  My Projects
              </h1>
          </div>
          <div className='px-6 md:px-0 max-w-[1000px] mx-auto mt-31 space-y-24'>
              {projects.map((project, index) => (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 75 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.25 }}
                      className={`mt-12 flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse gap-12" : "gap-12"}`}
                  >
                      <div className='space-y-2 max-w-[550px] flex-1'>
                          <h2 className='text-7xl my-4 text-[#80a3c4]'>{`0${index + 1}`}</h2>
                          <h2 className='text-4xl font-bold text-black'>{project.title}</h2>
                          <p className='text-lg text-black/70 break-words'>{project.desc}</p>
                          <p className='text-xl text-orange-400 font-semibold'>{project.devStack}</p>
                          <div className='flex space-x-4 my-4'>
                              <a href={project.git} className='text-blue-500 hover:underline text-lg'>Git </a>
                          </div>
                      </div>
                      <a href={project.link} className='flex-1'>
                          <div className='relative h-[300px] w-full'>
                              <Image 
                                  src={project.src} 
                                  alt={project.title} 
                                  layout="fill" 
                                  objectFit="cover" 
                                  className='rounded border border-gray-700'
                              />
                          </div>
                      </a>
                  </motion.div>
              ))}
          </div>
      </div>
  );
}

export default Portfolio;
