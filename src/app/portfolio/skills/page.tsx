"use client";

import {
    SiDocker,
    SiGithub,
    SiJavascript,
    SiPostgresql,
    SiReact, SiRender,
    SiSupabase,
    SiTailwindcss,
    SiVercel
} from "react-icons/si";
import {FaJava} from "react-icons/fa6";
import { motion } from "framer-motion";

const skillsByCategory = {
    "Front End": [
        {name: "JavaScript / TypeScript", icon: SiJavascript},
        {name: "React / Next.js", icon: SiReact},
        {name: "Tailwind CSS / CSS 3", icon: SiTailwindcss}
    ],
    "Back End": [
        {name: "Java / Spring Boot", icon: FaJava},
        {name: "Supabase", icon: SiSupabase}
    ],
    "SQL": [
        {name: "PostgreSQL", icon: SiPostgresql}
    ],
    "DevOps & Containerization": [
        {name: "Git/GitHub", icon: SiGithub},
        {name: "Docker", icon: SiDocker},
    ],
    "Cloud Hosting & Deployment": [
        {name: "Vercel", icon: SiVercel},
        {name: "Render", icon: SiRender},
    ]
}

export default function SkillsPage(){
    return(
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-10 space-y-10">

                <motion.p
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ duration: 0.5}}
                    className="text-center text-gray max-w-xl text-lg"
                >
                    Currently learning and improving skills in frontend, backend, DevOps, and deployment.
                </motion.p>

                {Object.entries(skillsByCategory).map(([category, skills]) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1}}
                        className="w-full max-w-xl"
                    >
                        <h2 className="text-3xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-amber-400 via-rose-400 to-violet-400 text-transparent bg-clip-text animate-gradient">{category}</h2>
                        <div className="grid grid-cols-2 gap-6">
                            {skills.map(({name, icon: IconComponent}) => (
                                <div key={name} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-md transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-xl">
                                    <IconComponent size={24} style={{ fill: "url(#gradient)"}} />
                                    <span className="text-base font-semibold text-gray-800">{name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            <svg width="0" height="0" className="absolute">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop stopColor="#FFB147" offset="0%" />
                        <stop stopColor="#FF6C63" offset="50%" />
                        <stop stopColor="#B86ADF" offset="100%" />
                    </linearGradient>
                </defs>
            </svg>
        </>
    )
}