"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import cursor from "../assets/starter-files-nextjs-animated/assets/icon1.png";
import { FaLinkedin, FaGithub, FaRegLightbulb } from 'react-icons/fa'; 
import { motion } from "framer-motion";
import profilepic from "../assets/starter-files-nextjs-animated/assets/profilepic.png";
import icon2 from "../assets/starter-files-nextjs-animated/assets/icon2.png";

const phrases = [
  "Software Developer",
  "Web Developer",
  "Tech Enthusiast",
  "Passionate Coder",
  "Web Designer"
];

const colors = [
  "#E48A57", // Color for software developer
  "#A2D2FF", // Color for web developer
  "#98B4CE", // Color for tech enthusiast
  "#D9ED92", // Color for passionate coder
  "#AED9E0"  // Color for web designer
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 relative overflow-hidden bg-[#FDFCDC]">
      <div
        className="absolute rounded-[50%] w-[2500px] h-[1000px] top-[500px] left-[50%] -translate-x-1/2
        bg-[radial-gradient(closest-side,#AED9E0_30%,#A2D2FF_50%,#D9ED92)]"
      ></div>

      <div className="relative">
        <div className="text-6xl font-bold text-center">
          <h1 className="text-[#98B4CE]">Hi, I am</h1>
          <h1 className="text-[#E48A57]">Aryushi Kapoor</h1>
        </div>

        {/* Added continuous vertical motion */}
        <motion.div
          className="hidden md:block absolute left-[200px] top-[130px]"
          drag
          animate={{ y: [0, -20, 0] }} // Moves up and down
          transition={{
            duration: 2, // Duration for one complete cycle (up and down)
            repeat: Infinity, // Repeats the animation indefinitely
            repeatType: "loop", // Keeps looping
            ease: "easeInOut" // Smooth easing
          }}
        >
          <Image src={cursor} height="150" width="150" alt="cursor" draggable="false" />
        </motion.div>

        <motion.div
          className="hidden md:block absolute right-[180px] top-[20px]"
          drag
          animate={{ y: [0, 20, 0] }} // Moves up and down in the opposite direction
          transition={{
            duration: 2, // Duration for one complete cycle (up and down)
            repeat: Infinity, // Repeats the animation indefinitely
            repeatType: "loop", // Keeps looping
            ease: "easeInOut" // Smooth easing
          }}
        >
          <Image src={icon2} height="100" width="100" alt="message" draggable="false" />
        </motion.div>

        <p className="text-center text-3xl max-w-[400px] mx-auto mt-6 text-gray-800">
          I am a <span style={{ color: colors[index] }}>{phrases[index]}</span>
        </p>
        <div className="flex justify-center space-x-6 mt-6">
          <a href="https://www.linkedin.com/in/aryushi-kapoor/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-black/60 text-3xl hover:text-blue-600 transition duration-200" />
          </a>
          <a href="https://github.com/Aryushikapoor" target="_blank" rel="noopener noreferrer">
            <FaGithub className=" text-black/60 text-3xl hover:text-gray-700 transition duration-200" />
          </a>
          <a href="https://leetcode.com/u/Aryushikapoor/" target="_blank" rel="noopener noreferrer">
            <FaRegLightbulb className="text-black/60 text-3xl hover:text-yellow-500 transition duration-200" />
          </a>
        </div>

        <Image src={profilepic} alt="pp" className="h-auto w-[500px] mx-auto mt-5" />
      </div>
    </div>
  );
};

export default Hero;
