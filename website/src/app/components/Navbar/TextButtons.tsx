"use client"

const TextButtons: React.FC = () => {
    const buttonClass = "hover:transition hover:ease-in-out hover:duration-300 text-slate-900 dark:text-slate-200 text-xl font-normal mr-5 cursor-pointer border-transparent border-b hover:text-sky-500 hover:border-sky-500 dark:hover:border-sky-300 dark:hover:text-sky-300 hover:scale-105"
    return (
        <div className="flex flex-col md:flex-row">
            <h1 className={buttonClass}>Home</h1>
            <h1 className={buttonClass}>About</h1>
            <h1 className={buttonClass}>Projects</h1>
        </div>
    )
};

export default TextButtons;