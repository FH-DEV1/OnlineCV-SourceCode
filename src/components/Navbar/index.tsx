"use client"
import Link from "next/link";
import MenuButton from "./MenuButton";
import ThemeSwitch from "./ThemeSwitch"
import { usePathname } from 'next/navigation'

const Navbar: React.FC = () => {
    const pathname = usePathname();
    const TabLink: React.FC<{href?: any, title?: string}> = ({href, title}) => {
        return (
            <Link href={href} className="mr-5 group">
                <h1 className="text-center text-slate-900 dark:text-slate-200 text-xl font-normal cursor-pointer">{title}</h1>
                <span className={`block h-[2px] bg-slate-900 dark:bg-slate-200 group-hover:w-full transition-all ease duration-200 ${pathname === href ? "w-full" : "w-0"}`} />
            </Link>
        )
    }
    return (
        <div className="flex flex-row border-slate-300 dark:border-gray-700 border-b pb-3">
            <div className="md:flex hidden flex-grow flex-1 pl-2">
                <TabLink href={"/about"} title={"About"} />
                <TabLink href={"/projects"} title={"Projects"} />
                <TabLink href={"/socials"} title={"Socials"} />
            </div>
            <Link href={"/"} className="flex flex-1 flex-grow pl-2 md:pl-0 md:justify-center">
                <h1 className="text-slate-900 dark:text-slate-200 font-bold text-3xl">FH.Dev</h1>
            </Link>
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