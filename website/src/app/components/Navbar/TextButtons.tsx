"use client"
import Link from "next/link"
const TextButtons: React.FC = () => {
    const buttonClass = "text-center hover:transition hover:ease-in-out hover:duration-300 text-slate-900 dark:text-slate-200 text-xl font-normal md:mr-5 cursor-pointer border-transparent border-b hover:text-sky-500 hover:border-sky-500 dark:hover:border-sky-300 dark:hover:text-sky-300 hover:scale-105"
    return (
        <div className="flex flex-col md:flex-row">
            <Link href="/"><h1 className={buttonClass}>Home</h1></Link>
            <Link href="/about"><h1 className={buttonClass}>About</h1></Link>
            <Link href="/projects"><h1 className={buttonClass}>Projects</h1></Link>
        </div>
    )
};

export default TextButtons;