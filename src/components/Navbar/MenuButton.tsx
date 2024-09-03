"use client";
import { useEffect, useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";
import { FaBookOpen, FaHardHat } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

const MenuButton: React.FC = () => {
    const [Menu, setMenu] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);

    const buttonClass = "text-center flex items-center text-slate-900 dark:text-slate-200 text-xl font-normal cursor-pointer py-1 px-3";

    useEffect(() => {
        if (Menu) {
            setMenuVisible(true);
        } else {
            const timer = setTimeout(() => setMenuVisible(false), 300);
            return () => clearTimeout(timer);
        }
    }, [Menu]);

    return (
        <>
            <div className="flex flex-col items-center cursor-pointer" onClick={() => setMenu(!Menu)}>
                <div className={`w-9 h-0.5 mt-2 bg-slate-900 dark:bg-slate-200 transition-transform duration-500 ${Menu ? 'transform translate-y-2 rotate-45' : ''}`}></div>
                <div className={`w-9 h-0.5 mt-2 bg-slate-900 dark:bg-slate-200 transition-opacity duration-500 ${Menu ? 'opacity-0' : ''}`}></div>
                <div className={`w-9 h-0.5 mt-2 bg-slate-900 dark:bg-slate-200 transition-transform duration-500 ${Menu ? 'transform -translate-y-3 -rotate-45' : ''}`}></div>
            </div>
            {menuVisible && (
                <div
                    className={`absolute w-full mt-[35px] h-[calc(100svh-70px)] z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${Menu ? '' : 'pointer-events-none'}`}
                    onClick={() => setMenu(false)}
                >
                </div>
            )}
            <div
                className={`border border-white dark:bg-opacity-50 bg-opacity-50 backdrop-blur-md z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col bg-gray-300 dark:bg-gray-400 px-7 py-8 rounded-xl transition-opacity duration-300 ${Menu ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                style={{ visibility: menuVisible ? 'visible' : 'hidden' }}
            >
                <div className="flex flex-col flex-1 flex-grow">
                    <Link href="/about" onClick={() => setMenu(false)}>
                        <h1 className={buttonClass}><FaBookOpen className="mr-1" />About</h1>
                    </Link>
                    <Link href="/projects" onClick={() => setMenu(false)}>
                        <h1 className={buttonClass}><FaHardHat className="mr-1" />Projects</h1>
                    </Link>
                    <Link href="/socials" onClick={() => setMenu(false)}>
                        <h1 className={buttonClass}><FaLink className="mr-1" />Socials</h1>
                    </Link>
                </div>
                <div className="self-center mt-3">
                    <ThemeSwitch />
                </div>
            </div>
        </>
    );
};

export default MenuButton;
