"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiGithub, FiHome, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import { MdTimeline } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { FaFolderOpen } from "react-icons/fa";

export default function Sidebar({ isExpanded, setIsExpanded }: { isExpanded: boolean, setIsExpanded: (val: boolean) => void }) {

    const pathname = usePathname();
    const [mounted, setMounted] = useState(false)

    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        setMounted(true)
    }, [])

    const menuItems = [
        { name: "HOME", path: "/portfolio", icon: <FiHome /> },
        { name: "MY JOURNEY", path: "/portfolio/experience", icon: <MdTimeline /> },
        { name: "EXPERTISE", path: "/portfolio/skills", icon: <GiSkills /> },
        { name: "WORKS", path: "/works", icon: <FaFolderOpen /> },
        { name: "CONTACT", path: "/portfolio/contacts", icon: <FiMail /> },
    ]

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        setIsExpanded(true)
    }

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsExpanded(false)
        }, 150)
    }

    if (!mounted) return null

    return (
        <motion.aside
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{ width: 64 }}
            aria-expanded={isExpanded}
            animate={{ width: isExpanded ? 240 : 83 }}
            className="fixed top-0 left-0 min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 shadow-xl text-white flex flex-col overflow-hidden"
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
        >
            <div className="p-6 text-3xl font-extrabold font-serif mb-6 select-none cursor-default flex items-center justify-center">
                <Link href="/">
                    <span className={`${isExpanded ? "block" : "hidden"}`}>YD</span>
                    <span className={`${isExpanded ? "hidden" : "block"}`}>Y</span>
                </Link>
            </div>

            <nav className="flex-1 p-4">
                <ul className="space-y-2">
                    {menuItems.map(({ name, path, icon }) => {
                        const isSelected = pathname === path

                        return (
                            <li
                                key={path}
                                className={`relative cursor-pointer px-4 py-2 rounded transition-colors duration-300 flex items-center gap-4 
                                ${isSelected
                                        ? "bg-gray-700"
                                        : "hover:bg-gray-800 hover:text-white"
                                    }`}
                            >
                                <Link
                                    href={path}
                                    aria-current={isSelected ? "page" : undefined}
                                    className="flex items-center gap-4 w-full"
                                >
                                    <div className="text-white text-xl">{icon}</div>

                                    <motion.span
                                        initial={{ opacity: 0, width: 0 }}
                                        animate={{ opacity: isExpanded ? 1 : 0, width: isExpanded ? "auto" : 0 }}
                                        className="whitespace-nowrap overflow-hidden"
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        {name}
                                    </motion.span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </motion.aside>
    )
}