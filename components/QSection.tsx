"use client";

import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

export function PlaceholdersAndVanishInputDemo() {
    const placeholders = [
        "Where’s the ROI of LLM Integration?",
        "How do I get started with LLMs?",
        "What are the best practices for LLMs?",
        "How to choose the right LLM for my business?",   
        "Too much spend, too little benefit?",
        "Where all I can use LLM?",
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Input changed:", e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("Form submitted")
    }
    return (
        <div className="h-[20rem] bg-default-950/40 backdrop-blur-md flex flex-col justify-center  items-center px-4">
            <h2 className="mb-10 sm:mb-20 text-5xl text-center sm:text-xl text-white">
                Ask Intellium About LLMs
            </h2>
            <div className="w-full max-w-xl">
                <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={handleSubmit} />
            </div>
        </div>

    );
}
