"use client"

import {FiGithub, FiInstagram, FiLinkedin} from "react-icons/fi";
import {ArrowBigDownDashIcon} from "lucide-react";
import { motion } from "framer-motion";
import React, {useRef, useState} from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormState {
    name: string
    email: string
    message: string
    file: File | null
}

export default function ContactsPage() {

    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        message: "",
        file: null
    })

    const fileInputRef = useRef<HTMLInputElement | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target as HTMLInputElement | HTMLTextAreaElement
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null
        setForm(prev => ({
            ...prev,
            file
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData()
        formData.append("name", form.name)
        formData.append("email", form.email)
        formData.append("message", form.message)
        if(form.file){
            formData.append("file", form.file)
        }

        try{
            const response = await fetch("https://backend-portfolio-sxtz.onrender.com/api/contacts", {
                method: "POST",
                body: formData,
            })

            if(!response.ok){
                throw new Error("Failed to send contact");
            }

            toast.success("Your message has been sent")

            setForm({name: "", email: "", message: "", file: null});
            if(fileInputRef.current){
                fileInputRef.current.value = "";
            }
        }catch (error) {
            console.error("Error Submitting the form", error);
            toast.error("Failed to send message. Please try again.")
        }
    }

    const handleEmailBlur = () => {
        if(form.email.trim() === "") return
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!emailRegex.test(form.email)){
            toast.error("Please enter  a valid email address")
        }
    }
    return(
        <div className="flex min-h-screen items-center justify-center  bg-gradient-to-br from-gray-50 to-gray-100 p-3 sm:p-6 md:p-10">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col md:flex-row w-full max-w-6xl gap-8 md:gap-12"
            >

            {/* Contacts */}
                <div className="md:w-1/2 space-y-4 text-gray-800 text-center md:text-left mb-8 md:mb-0">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Contact</h2>
                    <h2 className="text-lg sm:text-xl">REACH OUT TO ME</h2>

                    <p className="text-xs sm:text-sm md:text-base text-gray-600">Brgy. Estefania, Bacolod City, Negros Occidental, Philippines</p>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mt-4 break-words">+63 929 105 1576</h2>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-10 break-words">yuri90378@gmail.com</h2>

                    <div className="flex gap-4 justify-center md:justify-start mt-4">
                        <a
                            href="https://github.com/YuriDominyq"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-black transition-colors duration-300"
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

                    <h4 className="text-sm text-gray-500">
                        Copyright ©2025 Yuri Dominyq Santos. All right reserved.
                    </h4>
                </div>

            {/* FORM */}
                <div className="md:w-1/2 space-y-6 mb-8 md:mb-0">
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        onSubmit={handleSubmit}
                        className="p-6 rounded-lg bg-gradient-to-r from-amber-400 via-rose-400 to-violet-400 shadow-lg space-y-8"
                    >
                        <h2 className="text-3xl font-bold text-white">Any Project?</h2>

                        {/* Name */}
                        <div className="relative">
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Name"
                                aria-label="Name"
                                className="peer w-full p-3 pt-5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-transparent outline-none backdrop-blur-sm focus:border-transparent focus:ring-2 focus:ring-offset-2 focus:ring-white/70 transition-all duration-300"
                                required
                            />
                            <label className={`absolute left-3 text-sm transition-all duration-300 ${
                                form.name
                                ? "top-2 -translate-y-0 text-xs text-white" 
                                    : "top-1/2 -translate-y-1/2 text-white/60"
                            }`}>
                                Name
                            </label>
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                onBlur={handleEmailBlur}
                                placeholder="Email"
                                aria-label="Email"
                                className="peer w-full p-3 pt-5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-transparent outline-none backdrop-blur-sm focus:border-transparent focus:ring-2 focus:ring-offset-2 focus:ring-white/70 transition-all duration-300"
                            />
                            <label
                                className={`absolute left-3 text-sm transition-all duration-300 ${
                                    form.email
                                        ? "top-2 -translate-y-0 text-xs text-white"
                                        : "top-1/2 -translate-y-1/2 text-white/60"
                                }`}>
                                Email
                            </label>
                        </div>

                        {/* Message */}
                        <div className="relative">
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Message"
                                rows={4}
                                aria-label="Message"
                                className="peer w-full p-3 pt-5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-transparent outline-none backdrop-blur-sm focus:border-transparent focus:ring-2 focus:ring-offset-2 focus:ring-white/70 transition-all duration-300 resize-none"
                                required
                            />
                            <label
                                className={`absolute left-3 text-sm transition-all duration-300 ${
                                    form.message
                                        ? "top-2 -translate-y-0 text-xs text-white"
                                        : "top-1/2 -translate-y-1/2 text-white/60"
                                }`}>
                                Message
                            </label>
                        </div>

                        {/* FILE UPLOAD*/}
                        <div className="relative">
                            <input
                                type="file"
                                name="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-black/70 file:text-white hover:file:bg-black file:cursor-pointer file:duration-200 file:transition"
                            />
                        </div>

                        <button
                            type="submit"
                            className="flex items-center gap-2 px-4 py-2 bg-black/70 hover:bg-black rounded transition text-white cursor-pointer transform hover:scale-105 active:scale-95 duration-300 ease-in-out hover:shadow-lg"
                        >
                            Submit now
                            <ArrowBigDownDashIcon
                                className="w-4 h-4"
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
                        </button>
                    </motion.form>
                </div>
            </motion.div>
        </div>
    )
}