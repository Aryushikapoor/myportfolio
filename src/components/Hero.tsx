"use client";
import Image from "next/image";
import cursor from "../assets/starter-files-nextjs-animated/assets/icon1.png"
import message from "../assets/starter-files-nextjs-animated/assets/icon2.png"
import { motion } from "framer-motion";
import profilepic from "../assets/starter-files-nextjs-animated/assets/profilepic.png"
import icon2 from "../assets/starter-files-nextjs-animated/assets/icon2.png";
import { ImConfused2 } from "react-icons/im";



const Hero = () => {
  return (
    <div className="py-16 relative overeflow-hidden bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]">
       <div
        className="absolute rounded-[50%] w-[2500px] h-[1000px] top-[500px] left-[50%] -translate-x-1/2
        bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"
      ></div>
    
    <div className="relative">
      <div className="text-6xl font-bold text-center">
        <h1 className="text-[#98B4CE]">Hi, I am</h1>
        <h1 className="text-[#E48A57]">Aryushi Kapoor</h1>
    </div>
    
    <motion.div
    className=" hidden md:block absolute left-[200px] top-[130px]"
     drag
     >
      <Image
      src={cursor}
      height="150"
      width="150"
      alt="cursor"
      className=""
      draggable="false"
      />
             

    </motion.div>
    <motion.div
    className=" hidden md:block absolute right-[180px] top-[20px]"
     drag
     >
      <Image
      src={icon2}
      height="100"
      width="100"
      alt="message"
      className=""
      draggable="false"
      />
             

    </motion.div>

<p className="text-center text-lg max-w-[400px] mx-auto mt-6 text-white/80">
 I am a full stack developer and software enthusiast
</p>
<Image
      src={profilepic}
      alt="pp"
      className=" h-auto w-[500px] mx-auto mt-6"
    
      />
 </div>

    
    
    </div>



  )
}

export default Hero
