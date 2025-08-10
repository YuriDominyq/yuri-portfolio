"use client"

import { motion } from "framer-motion";
import { ArrowBigDownIcon } from "lucide-react";

export default function JourneyPage() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-r  from-amber-400 via-rose-400 to-violet-400 bg-fixed flex justify-center items-center p-6">
            <div className="max-w-4xl space-y-8 text-white">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col space-y-6 flex-1"
                    >
                        <h1 className="text-4xl font-extrabold">My Journey & Experience</h1>

                        <p className="mb-6 text-xl font-semibold text-justify">
                            I am currently working on my capstone project, a Smart Jeepney Routing System designed to modernize and optimize jeep transportation routes in Bacolod City. My role involves developing frontend in React and Tailwind CSS, integrating Google Maps APIs, and
                            connecting the backend with Supabase for real-time tracking. This project aims to improve commuting efficiency for drivers and passengers.
                        </p>

                        <motion.a
                            href="/resume.pdf"
                            download
                            className="w-72 inline-flex items-center justify-center gap-2 px-6 py-4 text-lg bg-black rounded-lg hover:bg-gray-800 group cursor-pointer"
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0 8px 15px rgba(0,0,0,0.3)",
                                backgroundColor: "#374151"
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            Download my resume
                            <ArrowBigDownIcon
                                className="w-5 h-5"
                                style={{
                                    stroke: "url(#gradient)"
                                }}
                            />

                            <svg width="0" height="0">
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop stopColor="#FFB147" offset="0%" />
                                        <stop stopColor="#FF6C63" offset="50%" />
                                        <stop stopColor="#B86ADF" offset="100%" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </motion.a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col space-y-4 flex-1 border-b border-gray-100"
                    >
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-semibold">2025 - Present</h2>
                            <h2 className="text-md font-medium">STI West Negros University</h2>
                        </div>

                        <h1 className="text-2xl font-extrabold mb-4">Student Full Stack Developer</h1>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}