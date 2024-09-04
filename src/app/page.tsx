"use client"
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Transition } from '@headlessui/react'
import { useEffect, useState } from "react";

const Home: React.FC = () => {
    const spanClass = "pl-1 animate-spin-words text-blue-500 text-2xl font-thin"
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
        <div className="flex flex-1 flex-grow justify-center items-center flex-col">
            <div>
                <h1 className="ml-5 text-3xl font-bold pb-2 text-slate-900 dark:text-slate-200 -mt-7">Hey I'm FH.dev</h1>
                <div className="ml-5 flex flex-row h-9 overflow-hidden">
                    <h1 className="text-2xl font-thin text-slate-900 dark:text-slate-200">I'm comfortable with </h1>
                    <div className="flex flex-col">
                        <span className={spanClass}>React</span>
                        <span className={spanClass}>Expo</span>
                        <span className={spanClass}>Typescript</span>
                        <span className={spanClass}>Next.js</span>
                        <span className={spanClass}>Tailwind</span>
                        <span className={spanClass}>npm</span>
                        <span className={spanClass}>React</span>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between mt-10">
                    <Link
                    href="/about"
                    className="text-slate-900 dark:text-slate-200 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-300/50 hover:dark:border-slate-700 hover:dark:bg-slate-800/30"
                    >   
                        <div className="flex">
                            <h2 className="mb-3 mr-2 text-2xl font-semibold">
                                About
                            </h2>
                            <span className="inline-block mt-2 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                <FaArrowRight size={20}/>
                            </span>
                        </div>
                        <p className="m-0 max-w-[30ch] text-sm opacity-50">
                            Learn about who I am, my skills and what I like to do in my free time.
                        </p>
                    </Link>
                    <Link
                    href="/projects"
                    className="text-slate-900 dark:text-slate-200 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-300/50 hover:dark:border-slate-700 hover:dark:bg-slate-800/30"
                    >   
                        <div className="flex">
                            <h2 className="mb-3 mr-2 text-2xl font-semibold">
                                Projects
                            </h2>
                            <span className="inline-block mt-2 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                <FaArrowRight size={20}/>
                            </span>
                        </div>
                        <p className="m-0 max-w-[30ch] text-sm opacity-50">
                            Showcase of all my biggest projects (usually open sourced on my Github).
                        </p>
                    </Link>
                    <Link
                    href="/socials"
                    className="text-slate-900 dark:text-slate-200 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-300/50 hover:dark:border-slate-700 hover:dark:bg-slate-800/30"
                    >   
                        <div className="flex">
                            <h2 className="mb-3 mr-2 text-2xl font-semibold">
                                Socials
                            </h2>
                            <span className="inline-block mt-2 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                <FaArrowRight size={20}/>
                            </span>
                        </div>
                        <p className="m-0 max-w-[30ch] text-sm opacity-50">
                            Ways to contact me and see my work from closer.
                        </p>
                    </Link>
                </div>
            </div>
        </div>
        </Transition>
    )
};

export default Home;