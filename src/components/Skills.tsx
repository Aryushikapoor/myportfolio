import React from 'react';
import { 
    FaHtml5, 
    FaCss3Alt, 
    FaReact, 
    FaJsSquare, 
    FaNodeJs, 
    FaPhp, 
    FaGithub 
} from 'react-icons/fa';
import { 
    SiTailwindcss, 
    SiNextdotjs, 
    SiBootstrap, 
    SiExpress, 
    SiMongodb, 
    SiPostgresql, 
    SiMysql, 
    SiPostman, 
    SiCplusplus 
} from 'react-icons/si';

const skillIcons = [
    { icon: <FaHtml5 size={140} />, label: "HTML" },
    { icon: <FaCss3Alt size={140} />, label: "CSS" },
    { icon: <FaJsSquare size={140} />, label: "JavaScript" },
    { icon: <FaReact size={140} />, label: "React" },
    { icon: <SiTailwindcss size={140} />, label: "Tailwind CSS" },
    { icon: <SiNextdotjs size={140} />, label: "Next.js" },
    { icon: <SiBootstrap size={140} />, label: "Bootstrap" },
    { icon: <FaNodeJs size={140} />, label: "Node.js" },
    { icon: <SiExpress size={140} />, label: "Express.js" },
    { icon: <FaPhp size={140} />, label: "PHP" },
    { icon: <SiMongodb size={140} />, label: "MongoDB" },
    { icon: <SiPostgresql size={140} />, label: "PostgreSQL" },
    { icon: <SiMysql size={140} />, label: "MySQL" },
    { icon: <FaGithub size={140} />, label: "GitHub" },
    { icon: <SiPostman size={140} />, label: "Postman API" },
    { icon: <SiCplusplus size={140} />, label: "C++ (DSA)" },
];

const Skills = () => {
    return (
        <div className='bg-gradient-to-b  from-blue-200 to to-yellow-100 py-32' id="skills">
            <div className='text-zinc-900 w-[400px] md:min-w-[950px] mx-auto p-8 text-center'>
                <h2 className='text-5xl text-orange-400 font-bold mb-4 pb-8 '>What I Do</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                    {skillIcons.map((skill, index) => (
                        <div
                            key={index}
                            className='h-[160px] w-[160px] md:h-[220px] md:w-[220px] flex flex-col justify-between
                            items-center bg-white/50 p-4 rounded-xl'
                        >
                            {skill.icon}
                            <p className='mt-2'>{skill.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
