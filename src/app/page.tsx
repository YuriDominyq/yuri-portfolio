"use client"

import { ArrowBigDownDash, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function IntroductionPage() {

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-6xl w-full gap-8 md:gap-16">

                {/* Left Side */}
                <motion.div
                    className="flex flex-col gap-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >

                    <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
                        My name is {" "}
                        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                            Yuri Dominyq
                        </span>
                        ...
                    </h1>


                    <Link
                        href="/portfolio"
                        passHref
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 rounded-lg bg-[#141313] px-6 py-3 text-white text-base font-semibold hover:bg-[#272727] transition-colors w-fit whitespace-nowrap"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Ready and Discover
                            <ArrowBigDownDash
                                className="w-6 h-6 ml-1"
                                style={{
                                    stroke: "url(#gradient)"
                                }}
                            />

                            <svg width="0" height="0">
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop stopColor="#ec4899" offset="0%" />
                                        <stop stopColor="#8b5cf6" offset="50%" />
                                        <stop stopColor="#3b82f6" offset="100%" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </motion.div>
                    </Link>

                    {/* Subtitle */}
                    <p className="text-lg text-gray-600 max-w-md text-justify">
                        Student Full Stack Developer based in {""}
                        <span className="font-medium text-gray-800">Philippines</span>.
                        Passionate about creating interactive and modern web experiences
                    </p>

                    {/* Contact Information */}
                    <div className="flex flex-row items-center justify-between gap-6 w-full max-w-md">
                        <div className="flex items-center gap-2">
                            <Phone className="w-5 h-5 text-pink-500" />
                            <p className="text-gray-700 font-medium">+63 929 105 1576</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <Mail className="w-5 h-5 text-blue-500" />
                            <p className="text-gray-700 font-medium">yuri90378@gmail.com</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side */}
                <motion.div
                    className="flex justify-center md:justify-start md:pl-8"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <motion.div whileHover={{ scale: 1.05 }}>
                        <Image
                            src="/picture.jpg"
                            alt="Portrait of Yuri Dominyq Santos"
                            width={300}
                            height={300}
                            className="rounded-full border-4 border-white shadow-2xl sm:w-[350px] sm:h-[350px] hover:scale-105 transition-transform duration-300"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
