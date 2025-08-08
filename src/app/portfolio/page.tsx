"use client"

import { Download, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsPerson } from "react-icons/bs";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

export default function HomePage() {

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-10">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 px-4 md:px-0">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-start md:items-start bg-white bg-opacity-70 backdrop-blur-md rounded-3xl p-10 shadow-lg space-y-6"
                >
                    {/* Left Side */}
                    <div className="space-y-1 text-center md:text-left">
                        <h4 className="text-lg font-light text-gray-600">Nice to meet you!</h4>
                        <h4 className="text-2xl font-bold text-gray-900 tracking-wide">WELCOME TO...</h4>
                    </div>

                    <Image
                        src="/picture.jpg"
                        alt="Portrait of Yuri Dominyq Santos"
                        width={250}
                        height={250}
                        className="rounded-full shadow-xl w-48 h-48 md:w-64 md:h-64 object-cover"
                    />

                    <h1
                        className="text-3xl md:text-4xl font-extrabold leading-tight bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-transparent bg-clip-text animate-gradient"
                    >
                        Yuri Dominyq Santos
                    </h1>

                    <h3
                        className="text-lg md:text-xl font-semibold text-indigo-700 tracking-wide"
                    >
                        Full Stack Developer based in Philippines
                    </h3>

                    <Link
                        href="/"
                        className="items-center inline-flex gap-2 text-black rounded-xl font-semibold hover:underline transition duration-300 cursor-pointer"
                    >
                        Download CV
                        <Download className="w-5 h-5" />
                    </Link>
                </motion.div>


                {/* Right Side */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="flex flex-col max-w-md space-y-10 overflow-auto md:overflow-visible scroll-smooth"
                >
                    <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                        {[
                            { icon: <Phone className="w-6 h-6 text-indigo-600" />, text: "+63 929 105 1576" },
                            { icon: <Mail className="w-6 h-6 text-indigo-600" />, text: "yuri90378@gmail.com" },
                            { icon: <BsPerson className="w-6 h-6 text-indigo-600" />, text: "23 yrs" },
                            { icon: <MapPin className="w-6 h-6 text-indigo-600" />, text: "Bacolod City, Negros Occ., Philippines" },
                        ].map(({ icon, text }, i) =>
                            <div
                                key={i}
                                className="flex items-center gap-4 border-b border-gray-300 pb-3 cursor-pointer"
                            >
                                <div className="transition-transform group-hover:scale-110">
                                    {icon}
                                </div>
                                <p className="text-gray-700 font-medium">{text}</p>
                            </div>
                        )}
                    </div>

                    <section className="hover:text-indigo-600 transition-colors cursor-pointer">
                        <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-transparent bg-clip-text">Student Experience</h2>

                        <p className="text-gray-700">
                            Hello there! My name is Yuri Dominyq Santos, I&apos;m a full stack developer, and I&apos;m very passionate and dedicated to my work.
                        </p>
                    </section>

                    <section className="hover:text-indigo-600 transition-colors cursor-pointer">
                        <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-transparent bg-clip-text">Good Insights</h2>
                        <p className="text-gray-700">I acquired the skills and knowledge necessary to make your project a success</p>
                    </section>

                    <div className="flex item-start gap-4 rounded-xl p-6 mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg text-white border border-transparent animate-gradient">
                        <FaQuoteLeft className="text-3xl opacity-50" />
                        <p className="italic text-lg font-serif">Life is a game, play to win - Wise Man</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
