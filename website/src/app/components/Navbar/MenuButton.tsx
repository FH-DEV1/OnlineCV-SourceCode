"use client"
import { useState } from "react";
import ThemeSwitch from "./ThemeSwitch"
import TextButtons from "./TextButtons";

const MenuButton: React.FC = () => {
    const [Menu, setMenu] = useState(false);
    return (
        <>
        <div className="flex flex-col items-center cursor-pointer" onClick={() => setMenu(!Menu)}>
            <div className={`w-9 h-0.5 mt-2 bg-slate-900 dark:bg-slate-200 transition-transform duration-500 ${Menu ? 'transform translate-y-2 rotate-45' : ''}`}></div>
            <div className={`w-9 h-0.5 mt-2 bg-slate-900 dark:bg-slate-200 transition-opacity duration-500 ${Menu ? 'opacity-0' : ''}`}></div>
            <div className={`w-9 h-0.5 mt-2 bg-slate-900 dark:bg-slate-200 transition-transform duration-500 ${Menu ? 'transform -translate-y-3 -rotate-45' : ''}`}></div>
        </div>
        <div className={`${Menu ? 'block' : 'hidden'}`}>
            {/* <div className="flex flex-col">
                <TextButtons />
                <ThemeSwitch />
            </div> */}
        </div>
        </>
    )
};

export default MenuButton;