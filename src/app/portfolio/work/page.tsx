"use client"

import { motion } from "framer-motion"
import {FiArrowRight} from "react-icons/fi";

const projects = [
    {title: "Smart Jeepney Routing", description: "Routing System with map tracking", link:"#"},
]

export default function WorkPage() {
    return(
        <div className="flex flex-col items-center p-6 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="flex flex-col items-start p-6 w-full max-w-6xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-light italic mb-2"
                >
                    Work
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl mb-6 font-extrabold text-gray-600"
                >
                    Recent Projects
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 , y: 20}}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
                        className="p-6 border border-gray-100 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.03] hover:bg-gradient-to-r hover:from-blue-50 hover:to-white transition-transform duration-300 bg-white"
                    >
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                        <p className="text-gray-700">{project.description}</p>

                        <a
                            href={project.link}
                            className="text-blue-600 mt-4 inline-flex items-center font-medium group cursor-pointer"
                        >
                            View Project
                            <FiArrowRight
                                className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-800"
                                size={24}
                            />
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}