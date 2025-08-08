"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function Sidebar() {

    const pathname = usePathname();
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const menuItems = [
        { name: "HOME", path: "/portfolio" },
        { name: "ABOUT", path: "/portfolio/about" },
        { name: "SERVICES", path: "/services" },
        { name: "WORKS", path: "/works" },
        { name: "BLOGS", path: "/blogs" },
        { name: "CONTACT", path: "/contact" },
    ]

    if (!mounted) return null

    return (
        <aside className="w-64 h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 shadow-xl text-white flex flex-col">
            <div className="p-6 text-3xl font-extrabold font-serif mb-6 select-none cursor-default">
                <Link href="/">
                    YD
                </Link>
            </div>
            <nav className="p-4">
                <ul className="space-y-2">
                    {menuItems.map(({ name, path }) => {
                        const isSelected = pathname === path

                        return (
                            <li
                                key={path}
                                className={`relative cursor-pointer px-3 py-2 rounded transition-colors duration-300 ${isSelected
                                    ? ""
                                    : "hover:bg-gray-800 hover:text-white"
                                    }`}
                            >
                                <Link
                                    href={path}
                                    aria-current={isSelected ? "page" : undefined}
                                    className={`relative inline-block ${isSelected ? "font-bold" : ""}`}

                                >
                                    {name}


                                    {isSelected && (
                                        <motion.span
                                            aria-hidden="true"
                                            className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 pointer-events-none"
                                            style={{
                                                transform: "translateY(-50%)"
                                            }}
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                        />
                                    )}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>

            {/* Social Media */}
            <div className="flex justify-center gap-6 p-6 border-t border-gray-700">
                <a
                    href="https://github.com/YuriDominyq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    aria-label="Github"
                >
                    <FiGithub size={24} />
                </a>

                <a
                    href="https://www.linkedin.com/in/yuri-santos-00264a379/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                    aria-label="LinkedIn"
                >
                    <FiLinkedin size={24} />
                </a>

                <a
                    href="https://www.instagram.com/yurrdominyq/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-600 transition-colors duration-300"
                    aria-label="Instagram"
                >
                    <FiInstagram size={24} />
                </a>
            </div>

            <div className="p-4 text-center">
                <h4 className="text-sm text-gray-400">
                    Copyright ©2025 Yuri Dominyq Santos. All right reserved.
                </h4>
            </div>
        </aside>
    )
}