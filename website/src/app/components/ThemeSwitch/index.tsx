"use client"
import { PiSunDimFill } from 'react-icons/pi'
import { BiSolidMoon } from 'react-icons/bi'
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react'

const ThemeSwitch: React.FC = () => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
      }, [])
    
    const { theme, setTheme } = useTheme();
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    const isActive = theme === "light";
    const switchClasses = `flex items-center justify-center w-6 h-6 text-dark bg-white rounded-full transform ${
    isActive ? 'translate-x-0' : 'translate-x-6'
    } transition-transform duration-500 ease-in-out`;

    if (isClient) {
        return (
            <div className="relative w-14 h-8 rounded-full p-1 cursor-pointer bg-[#ccc] dark:bg-[#444]" onClick={toggleTheme}>
                <button className={switchClasses}>
                    {isActive ? <PiSunDimFill size={16} color={"rgba(255, 162, 0, 1)"} /> : <BiSolidMoon color={"black"} />}
                </button>
            </div>
        )
    }
    else {
        return (
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                </span>
            </div>
        )
    }
};

export default ThemeSwitch;