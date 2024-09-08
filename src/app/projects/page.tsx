"use client"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const Projects: React.FC = () => {
    const [isShowing, setIsShowing] = useState(false);

    useEffect(() => {
        setIsShowing(true);
    }, []);

    const cards = [
        {
            href: "https://github.com/FH-DEV1/BeFake",
            imageSrc: "/BeFake.png",
            alt: "Befake illustration image",
            title: "BeReal. - Befake",
            description: "A third-party client for BeReal app which allows you to view others bereal without posting.",
            star: true,
        },
        {
            href: "https://github.com/FH-DEV1/OnlineCV-SourceCode",
            imageSrc: "/cv.png",
            alt: "CV image",
            title: "FH.Dev - Personal CV",
            description: "This is a personal CV website built using Next.js, Tailwind CSS, and TypeScript.",
        },
        {
            href: "https://github.com/FH-DEV1/Daily-SFTP-server-backup",
            imageSrc: "/Minestrator.png",
            alt: "Minestrator illustration image",
            title: "Minestrator - SFTP Daily Backup BOT",
            description: "A BOT that downloads the full server using SFTP and sends it by mail compressed in a .zip.",
        },
        {
            href: "https://github.com/FH-DEV1/minestrator-airdrop-bot",
            imageSrc: "/Minestrator.png",
            alt: "Minestrator illustration image",
            title: "Minestrator - AirDrop BOT",
            description: "A BOT that wins every AirDrop without any user interaction.",
        },
        {
            href: "https://github.com/FH-DEV1/Facebook-OSINT",
            imageSrc: "/facebook.jpg",
            alt: "Facebook OSINT image",
            title: "Facebook - OSINT Tool",
            description: "A python program that could create a db full of phone numbers linked with usernames using bruteforce ⚠️deprecated⚠️.",
            deprecated: true,
        },
        {
            href: "https://github.com/FH-DEV1/Vinted-Hunter-Bot",
            imageSrc: "/vinted.webp",
            alt: "vintedpy image",
            title: "Vinted - Hunter Bot",
            description: "A Discord bot that monitors Vinted searches and sends real-time alerts to dedicated discord channels.",
        },
        {
            href: "https://github.com/FH-DEV1/Facebook-OSINT",
            imageSrc: "/python.jpeg",
            alt: "Python CheatSheet image",
            title: "Python - CheatSheet",
            description: "A Python cheat sheet created using HTML, CSS, and JavaScript for a school homework project.",
        }
    ];

    return (
        <div className="flex flex-1 flex-wrap flex-grow flex-col justify-around gap-y-5 md:flex-row py-[3%] text-slate-900 dark:text-slate-200 pb-20">
            {cards.map((card, index) => (
                <Link
                    key={index}
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative cursor-pointer group flex flex-col md:w-[45%] xl:w-[30%] h-[50svh] transition-opacity duration-1000 ease-in-out ${
                        isShowing ? 'opacity-100' : 'opacity-0'
                    } md:hover:border-gray-300 md:border-transparent md:dark:border-transparent border-gray-300 md:hover:bg-gray-300/50 bg-gray-300/50 border-transparent md:bg-transparent dark:md:bg-transparent rounded-xl md:hover:border border md:hover:dark:border-slate-700 dark:border-slate-700 md:hover:dark:bg-slate-800/30 dark:bg-slate-800/30`}
                    style={{ transitionDelay: `${index * 200}ms` }} // 200ms delay between cards
                >
                    <Image
                        src={card.imageSrc}
                        width={2000}
                        height={1361}
                        alt={card.alt}
                        className="object-bottom w-full h-[73.5%] rounded-t-xl md:rounded-b-xl rounded-b-none md:group-hover:rounded-b-none object-cover"
                    />
                    {card.star && <FaStar className="text-yellow-500 text-2xl absolute top-3 right-3" />}
                    {card.deprecated && (
                        <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-tl-xl rounded-br-xl z-10">
                            Deprecated
                        </div>
                    )}
                    <h2 className="mt-2 mx-2 text-2xl font-semibold">{card.title}</h2>
                    <p className="mx-2 text-sm opacity-50">{card.description}</p>
                </Link>
            ))}
        </div>
    );
};

export default Projects;
