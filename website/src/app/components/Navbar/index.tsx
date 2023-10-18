"use client"
import MenuButton from "./MenuButton";
import TextButtons from "./TextButtons";
import ThemeSwitch from "./ThemeSwitch"

const Navbar: React.FC = () => {
    return (
        <div className="flex flex-row border-slate-300 dark:border-gray-700 border-b pb-3">
            <div className="md:flex hidden flex-grow flex-1">
                <TextButtons />
            </div>
            <h1 className="flex flex-1 flex-grow pl-2 md:pl-0 md:justify-center text-slate-900 dark:text-slate-200 font-bold text-3xl">FH.Dev</h1>
            <div className="md:flex flex-1 justify-end flex-grow pr-2 hidden">
                <ThemeSwitch />
            </div>
            <div className="md:hidden flex">
                <MenuButton />
            </div>
        </div>
    )
};

export default Navbar;