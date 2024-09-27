"use client";
import React from 'react'
import Image from 'next/image';
import { motion } from "framer-motion";
import project from "../assets/starter-files-nextjs-animated/assets/project.jpg"
import project1 from "../assets/starter-files-nextjs-animated/assets/proj1.jpg"

const projects =[
 
    {
        title: " Amazon clone",
        desc:"Developed Amazon 2.0,a full-stack Amazon clone using modern web technologies to replicate core functionalities of the e-commerce giant.",
        devStack:" [Next.js, React.js, Webhooks, Stripe Checkout, Tailwind.CSS, Firestore, NextAuth",
        link:"#https://amazon-starter-template-nextjs-pink.vercel.app/",
        git:"#https://github.com/Aryushikapoor",
        src: project
    },
    {
        title: " Her cycle",
        desc:"Developed Amazon 2.0,a full-stack Amazon clone using modern web technologies to replicate core functionalities of the e-commerce giant.",
        devStack:" [Next.js, React.js, Webhooks, Stripe Checkout, Tailwind.CSS, Firestore, NextAuth",
        link:"#https://amazon-starter-template-nextjs-pink.vercel.app/",
        git:"#https://github.com/Aryushikapoor",
        src: project1
    },
    {
        title: " ASGRV",
        desc:"Developed Amazon 2.0,a full-stack Amazon clone using modern web technologies to replicate core functionalities of the e-commerce giant.",
        devStack:" [Next.js, React.js, Webhooks, Stripe Checkout, Tailwind.CSS, Firestore, NextAuth",
        link:"#https://amazon-starter-template-nextjs-pink.vercel.app/",
        git:"#https://github.com/Aryushikapoor",
        src: project1
    },

];


const Portfolio = () => {
  return (
    <div className='text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52' id="portfolio">
        <h1 className='text-white text-5xl max-w-[320px] mx-auto font-semibold p-4 mb-8'>
        Projects <span className='text-orange-400'>Mine</span></h1>
      
      <div className='px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24'>
        {projects.map((project, index)=>(
          <motion.div
          key={index}
          initial={{opacity: 0, y: 75}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5, delay: 0.25}}
          className={`mt-12 flex flex-col ${index % 2 === 1 ? " md:flex-row-reverse gap-12" : " md:flex-row"}`}
          >
            <div className='spce-y-2 max-w-[550px]'>
                <h2 className='text-7xl my-4 text-white/70'>{`0 ${index +1}`}</h2>
                <h2 className='text-4xl'>{project.title}</h2>
                <p className='text-lg text-white/70 break-words p-4'>{project.desc}</p>
                <p className='text-xl text-orange-400 font-semibold'>{project.devStack}</p>
                <div className='w-64 h-[1px] bg-gray-400 my-4'>
                    <a href={project.link} className='mr-6'>Link </a>
                    <a href={project.git} >Git</a>
                </div>

            </div>
            <div>
                <Image src={project.src} alt={project.title} className='h-[350px] w-[500px] object-cover border
                                   rounded border-gray-700'/>
            </div>

          </motion.div>  
        ))}

      </div>
    </div>
  )
}

export default Portfolio
