"use client"

import Link from "next/link";

const Home: React.FC = () => {
    return (
        <div className="flex flex-1 flex-grow items-center justify-center flex-col">
            <Link href="mailto:FHDEV@proton.me?subject=Job offer" className="cursor-pointer absolute left-[8vw] bottom-[8vw] md:left-[3vw] md:bottom-[3vw] backdrop-blur-md dark:bg-opacity-20 bg-opacity-20 bg-gray-300 dark:bg-gray-400 w-20 h-8 flex justify-center items-center border border-emerald-500 rounded-md">
                <span className="absolute -right-1 -top-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <h1 className="text-emerald-500">Hire Me</h1>
            </Link>
            <h1>Home</h1>
        </div>
    )
};

export default Home;