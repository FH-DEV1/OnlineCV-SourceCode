"use client"
import ThemeSwitch from "../ThemeSwitch"

const Navbar: React.FC = () => {
    const buttonClass = "text-slate-900 dark:text-slate-200 text-xl font-thin p-2 cursor-pointer hover:bg-gray-300 rounded-md dark:hover:bg-gray-700"
    return (
        <div className="flex flex-row flex-stretch justify-between pb-1 border-b border-slate-900 dark:border-slate-200">
            <h1 className="text-slate-900 dark:text-slate-200 font-black text-3xl pt-4 pl-2">FH.Dev</h1>
            <div className="flex flex-row justify-between">
                <div className="flex flex-row pt-4 pr-4">
                    <h1 className={buttonClass}>Contact</h1>
                    <h1 className={buttonClass}>Projects</h1>
                    <h1 className={buttonClass}>About me</h1>
                </div>
                <div className="pt-5 pr-2">
                    <ThemeSwitch />
                </div>
            </div>
        </div>
    )
};

export default Navbar;