"use client"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Socials: React.FC = () => {
    const [isShowing, setIsShowing] = useState(false);

    useEffect(() => {
        setIsShowing(true);
    }, []);

    return (
        <div className="flex flex-1 flex-grow justify-center items-center flex-col gap-4 text-slate-900 dark:text-slate-200">
            <div className={`w-full flex justify-center transition transform duration-1000 ${isShowing ? 'opacity-100 translate-y-0 delay-[200ms]' : 'opacity-0 translate-y-10'}`}>
                <Link href="https://github.com/FH-DEV1" target="_blank" rel="noopener noreferrer" className="flex items-center transition-colors bg-gray-300/50 dark:bg-slate-800/30 h-20 w-11/12 max-w-96 p-2 rounded-xl border border-transparent hover:border-gray-300 hover:dark:border-slate-700">
                    <Image
                        src="/github.webp"
                        width={500}
                        height={500}
                        alt="github icon"
                        className="w-16 h-16 rounded-lg dark:border-slate-700"
                    />
                    <div className="ml-3 flex flex-col">
                        <h2 className="text-xl font-semibold">Github</h2>
                        <p className="m-0 text-md opacity-50">Username : FH-DEV1</p>
                    </div>
                </Link>
            </div>

            <div className={`w-full flex justify-center transition transform duration-1000 ${isShowing ? 'opacity-100 translate-y-0 delay-[400ms]' : 'opacity-0 translate-y-10'}`}>
                <Link href="https://discordapp.com/users/854022397035020338" target="_blank" rel="noopener noreferrer" className="flex items-center transition-colors bg-gray-300/50 dark:bg-slate-800/30 h-20 w-11/12 max-w-96 p-2 rounded-xl border border-transparent hover:border-gray-300 hover:dark:border-slate-700">
                    <Image
                        src="/discord.jpg"
                        width={500}
                        height={500}
                        alt="discord icon"
                        className="w-16 h-16 rounded-lg dark:border-slate-700"
                    />
                    <div className="ml-3 flex flex-col">
                        <h2 className="text-xl font-semibold">Discord</h2>
                        <p className="m-0 text-md opacity-50">Username : fh.dev</p>
                    </div>
                </Link>
            </div>

            <div className={`w-full flex justify-center transition transform duration-1000 ${isShowing ? 'opacity-100 translate-y-0 delay-[600ms]' : 'opacity-0 translate-y-10'}`}>
                <Link href="https://www.root-me.org/FH-Dev" target="_blank" rel="noopener noreferrer" className="flex items-center transition-colors bg-gray-300/50 dark:bg-slate-800/30 h-20 w-11/12 max-w-96 p-2 rounded-xl border border-transparent hover:border-gray-300 hover:dark:border-slate-700">
                    <Image
                        src="/root-me.jpg"
                        width={500}
                        height={500}
                        alt="root-me icon"
                        className="w-16 h-16 rounded-lg dark:border-slate-700"
                    />
                    <div className="ml-3 flex flex-col">
                        <h2 className="text-xl font-semibold">Root-me</h2>
                        <p className="m-0 text-md opacity-50">Username : FH.Dev</p>
                    </div>
                </Link>
            </div>

            <div className={`w-full flex justify-center transition transform duration-1000 ${isShowing ? 'opacity-100 translate-y-0 delay-[800ms]' : 'opacity-0 translate-y-10'}`}>
                <Link href="mailto:FHDEV@proton.me" target="_blank" rel="noopener noreferrer" className="flex items-center transition-colors bg-gray-300/50 dark:bg-slate-800/30 h-20 w-11/12 max-w-96 p-2 rounded-xl border border-transparent hover:border-gray-300 hover:dark:border-slate-700">
                    <Image
                        src="/proton-mail.jpeg"
                        width={500}
                        height={500}
                        alt="mail icon"
                        className="w-16 h-16 rounded-lg dark:border-slate-700"
                    />
                    <div className="ml-3 flex flex-col">
                        <h2 className="text-xl font-semibold">Email</h2>
                        <p className="m-0 text-md opacity-50">FHDEV@proton.me</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Socials;
