"use client"
import Link from "next/link";
import Image from "next/image";
import { Transition } from '@headlessui/react'
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const About: React.FC = () => {
    const [isShowing, setIsShowing] = useState(false);

    useEffect(() => {
        setIsShowing(true);
    }, []);

    return (
        <Transition
        show={isShowing}
        enter="transform transition ease-in-out duration-1000"
        enterFrom="translate-y-10 opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transform transition ease-in-out duration-1000"
        leaveFrom="translate-y-10 opacity-100"
        leaveTo="translate-y-4 opacity-0"
        >
        <div className="flex flex-1 flex-wrap flex-grow flex-col justify-around gap-y-5 md:flex-row py-[3%] text-slate-900 dark:text-slate-200 pb-20">
            <Link
                href="https://github.com/FH-DEV1/BeFake"
                target="_blank"
                rel="noopener noreferrer"
                className="relative cursor-pointer group flex flex-col md:w-[45%] xl:w-[30%] h-[50svh] transition-colors md:hover:border-gray-300 md:border-transparent md:dark:border-transparent border-gray-300 md:hover:bg-gray-300/50 bg-gray-300/50 border-transparent md:bg-transparent dark:md:bg-transparent rounded-xl md:hover:border border md:hover:dark:border-slate-700 dark:border-slate-700 md:hover:dark:bg-slate-800/30 dark:bg-slate-800/30"
            >
                <Image
                    src="/BeFake.png"
                    width={2000}
                    height={1361}
                    alt="img1"
                    className="object-bottom w-full h-[73.5%] rounded-t-xl md:rounded-b-xl rounded-b-none md:group-hover:rounded-b-none object-cover"
                />
                <FaStar className="text-yellow-500 text-2xl absolute top-3 right-3" />
                <h2 className="mt-2 mx-2 text-2xl font-semibold">Befake</h2>
                <p className="mx-2 text-sm opacity-50">
                    A third-party client for BeReal app which allows you to view others bereal without posting.
                </p>
            </Link>

            <Link href="https://github.com/FH-DEV1/Daily-SFTP-server-backup" target="_blank" rel="noopener noreferrer" className="cursor-pointer group flex flex-col md:w-[45%] xl:w-[30%] h-[50svh] transition-colors md:hover:border-gray-300 md:border-transparent md:dark:border-transparent border-gray-300 md:hover:bg-gray-300/50 bg-gray-300/50 border-transparent md:bg-transparent dark:md:bg-transparent rounded-xl md:hover:border border md:hover:dark:border-slate-700 dark:border-slate-700 md:hover:dark:bg-slate-800/30 dark:bg-slate-800/30">
                <Image
                src="/Minestrator.png"
                width={3126}
                height={1042}
                alt="img1"
                className="object-bottom w-full h-[73.5%] rounded-t-xl md:rounded-b-xl rounded-b-none md:group-hover:rounded-b-none object-cover" 
                />
                <h2 className="mt-2 mx-2 text-2xl font-semibold">Minestrator - SFTP Daily Backup BOT</h2>
                <p className="mx-2 text-sm opacity-50">
                    A BOT that downloads the full server using SFTP and sends it by mail compressed in a .zip.
                </p>
            </Link>
            <Link href="https://github.com/FH-DEV1/minestrator-airdrop-bot" target="_blank" rel="noopener noreferrer" className="cursor-pointer group flex flex-col md:w-[45%] xl:w-[30%] h-[50svh] transition-colors md:hover:border-gray-300 md:border-transparent md:dark:border-transparent border-gray-300 md:hover:bg-gray-300/50 bg-gray-300/50 border-transparent md:bg-transparent dark:md:bg-transparent rounded-xl md:hover:border border md:hover:dark:border-slate-700 dark:border-slate-700 md:hover:dark:bg-slate-800/30 dark:bg-slate-800/30">
                <Image
                src="/Minestrator.png"
                width={3126}
                height={1042}
                alt="img1"
                className="object-bottom w-full h-[73.5%] rounded-t-xl md:rounded-b-xl rounded-b-none md:group-hover:rounded-b-none object-cover" 
                />
                <h2 className="mt-2 mx-2 text-2xl font-semibold">Minestrator - AirDrop BOT</h2>
                <p className="mx-2 text-sm opacity-50">
                    A BOT that wins every AirDrop without any user interaction (maybe you'll need to refresh php token every once in a while).
                </p>
            </Link>
            <Link href="https://github.com/FH-DEV1/Facebook-OSINT" target="_blank" rel="noopener noreferrer" className="cursor-pointer group flex flex-col md:w-[45%] xl:w-[30%] h-[50svh] transition-colors md:hover:border-gray-300 md:border-transparent md:dark:border-transparent border-gray-300 md:hover:bg-gray-300/50 bg-gray-300/50 border-transparent md:bg-transparent dark:md:bg-transparent rounded-xl md:hover:border border md:hover:dark:border-slate-700 dark:border-slate-700 md:hover:dark:bg-slate-800/30 dark:bg-slate-800/30 relative">
                <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-tl-xl rounded-br-xl z-10">
                    Deprecated
                </div>
                <Image
                    src="/facebook.jpg"
                    width={600}
                    height={390}
                    alt="img1"
                    className="object-bottom w-full h-[73.5%] rounded-t-xl md:rounded-b-xl rounded-b-none md:group-hover:rounded-b-none object-cover" 
                />
                <h2 className="mt-2 mx-2 text-2xl font-semibold">Facebook - OSINT Tool</h2>
                <p className="mx-2 text-sm opacity-50">
                    A python program that could create a db full of phone numbers linked with usernames using bruteforce ⚠️depracated⚠️.
                </p>
            </Link>

        </div>
        </Transition>
    )
};

export default About;