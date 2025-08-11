"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiHome, FiMail } from "react-icons/fi";
import { MdTimeline } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { FaFolderOpen } from "react-icons/fa";

export default function Sidebar({ isExpanded, setIsExpanded }: { isExpanded: boolean, setIsExpanded: (val: boolean) => void
})
{

    const [isMobile, setIsMobile] = useState(false);

    const pathname = usePathname();
    const [mounted, setMounted] = useState(false)

    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, []);

    useEffect(() => {
        setMounted(true)
    }, [])

    const menuItems = [
        { name: "HOME", path: "/portfolio", icon: <FiHome /> },
        { name: "MY JOURNEY", path: "/portfolio/experience", icon: <MdTimeline /> },
        { name: "EXPERTISE", path: "/portfolio/skills", icon: <GiSkills /> },
        { name: "WORKS", path: "/portfolio/work", icon: <FaFolderOpen /> },
        { name: "CONTACT", path: "/portfolio/contacts", icon: <FiMail /> },
    ]

    const handleToggle = () => setIsExpanded(!isExpanded)

    const handleMouseEnter = () => {
        if(!isMobile){
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
            setIsExpanded(true)
        }
    }

    const handleMouseLeave = () => {
        if(!isMobile){
            timeoutRef.current = setTimeout(() => {
                setIsExpanded(false)
            }, 150)
        }
    }

    if (!mounted) return null

    return (
        <>
            {isMobile && (
                <button
                    className="fixed top-4 left-4 z-50 p-2 text-white bg-gray-900 rounded-md shadow-md cursor-pointer"
                    onClick={handleToggle}
                    aria-label="Toggle Sidebar"
                    aria-expanded={isExpanded}
                >
                    <div className="space-y-1">
                        <span className="block w-6 h-0.5 bg-white"></span>
                        <span className="block w-6 h-0.5 bg-white"></span>
                        <span className="block w-6 h-0.5 bg-white"></span>
                    </div>
                </button>
            )}

            {isMobile && isExpanded && (
                <div
                    className="fixed inset-0 bg-black/20 z-50"
                    onClick={() => setIsExpanded(false)}
                />
            )}
        <motion.aside
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{ x: -240 }}
            aria-expanded={isExpanded}
            animate={{ x: isMobile && !isExpanded ? -240 : 0 }}
            className={`fixed top-0 left-0 min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 shadow-xl text-white flex flex-col overflow-hidden z-50 ${
                isMobile
                ? "w-60" : ""
            }`}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
        >
            <div className="p-6 text-3xl font-extrabold font-serif mb-6 select-none cursor-default flex items-center justify-center">
                <Link href="/">
                    <span>YD</span>
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
        </>
    )
}
