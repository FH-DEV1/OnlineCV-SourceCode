"use client"
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";

const About: React.FC = () => {
    const spanClass = "pl-1 animate-spin-words text-blue-500 text-2xl font-thin"
    const [isShowing, setIsShowing] = useState(false);

    useEffect(() => {
        setIsShowing(true);
    }, []);

    return (
        <div></div>
    )
};

export default About;