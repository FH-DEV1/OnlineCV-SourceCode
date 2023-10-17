"use client"
import ThemeSwitch from "../ThemeSwitch"

const Navbar: React.FC = () => {
    const buttonClass = "transition ease-in-out delay-100 text-slate-900 dark:text-slate-200 text-xl font-normal mr-5 cursor-pointer border-transparent border-b hover:text-sky-500 hover:border-sky-500 dark:hover:border-sky-300 dark:hover:text-sky-300"
    return (
        <div className="flex flex-row border-slate-300 dark:border-gray-700 border-b pb-3">
            <div className="flex flex-row flex-1 flex-grow pt-1 pl-3">
                <h1 className={buttonClass}>Home</h1>
                <h1 className={buttonClass}>About</h1>
                <h1 className={buttonClass}>Projects</h1>
            </div>
            <h1 className="transition ease-in-out delay-100 flex flex-1 flex-grow justify-center text-slate-900 dark:text-slate-200 font-bold text-3xl">FH.Dev</h1>
            <div className="flex flex-1 justify-end flex-grow pr-3">
                <ThemeSwitch />
            </div>
        </div>
    )
};

export default Navbar;