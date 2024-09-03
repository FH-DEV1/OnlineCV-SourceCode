"use client"
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Transition } from '@headlessui/react'
import { useEffect, useState } from "react";

const About: React.FC = () => {
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
                
            </div>
        </div>
        </Transition>
    )
};

export default About;