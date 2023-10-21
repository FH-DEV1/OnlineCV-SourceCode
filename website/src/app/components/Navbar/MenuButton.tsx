"use client"
import { useState } from "react";
import ThemeSwitch from "./ThemeSwitch"
import Link from "next/link";

const MenuButton: React.FC = () => {
    const [Menu, setMenu] = useState(false);
    const buttonClass = "text-center text-slate-900 dark:text-slate-200 text-xl font-normal cursor-pointer"
    return (
        <>
        <div className="flex flex-col items-center cursor-pointer" onClick={() => setMenu(!Menu)}>
            <div className={`w-9 h-0.5 mt-2 bg-slate-900 dark:bg-slate-200 transition-transform duration-500 ${Menu ? 'transform translate-y-2 rotate-45' : ''}`}></div>
            <div className={`w-9 h-0.5 mt-2 bg-slate-900 dark:bg-slate-200 transition-opacity duration-500 ${Menu ? 'opacity-0' : ''}`}></div>
            <div className={`w-9 h-0.5 mt-2 bg-slate-900 dark:bg-slate-200 transition-transform duration-500 ${Menu ? 'transform -translate-y-3 -rotate-45' : ''}`}></div>
        </div>
        <div className={`border border-white dark:bg-opacity-50 bg-opacity-50 backdrop-blur-md absolute flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-300 dark:bg-gray-400 p-10 rounded-xl transition-opacity duration-300 ${Menu ? '' : 'opacity-0'}`}>
            <div className="flex flex-col flex-1 flex-grow" onClick={() => setMenu(false)}>
                <Link href="/">
                    <h1 className={buttonClass}>Home</h1>
                </Link>
                <Link href="/about">
                    <h1 className={buttonClass}>About</h1>
                </Link>
                <Link href="/projects">
                    <h1 className={buttonClass}>Projects</h1>
                </Link>
            </div>
            <div className="self-center mt-3">
                <ThemeSwitch />
            </div>
        </div>
        </>
    )
};

export default MenuButton;