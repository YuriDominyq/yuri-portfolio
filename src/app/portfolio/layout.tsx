"use client"

import Sidebar from "../../../components/Sidebar";
import {ReactNode, useState} from "react";
import {ToastContainer} from "react-toastify";

export default function LayoutPage({
    children,
}: {
    children: ReactNode;
}) {
    const [isExpanded, setIsExpanded] = useState(false)
    return (
        <div className="flex min-h-screen">
            <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
            <main
                className="flex-1 bg-gray-100 overflow-y-auto transition-margin duration-300"
            >
                {children}
                <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                    toastStyle={{
                        background: "linear-gradient(to right, #FFB147, #FF6C63, #B86ADF)",
                        color: "#fff",
                        borderRadius: "8px",
                        fontWeight: "bold"
                    }}
                />
            </main>
        </div>
    );
}