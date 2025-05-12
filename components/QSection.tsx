"use client";

import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

export function PlaceholdersAndVanishInputDemo() {
    const placeholders = [
        "Where’s the ROI of LLM Integration?",
        "Too much spend, too little benefit?",
        "Where all I can use LLM?",
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
    };
    return (
        <div className="h-[30rem] bg-default-950/40 backdrop-blur-md flex flex-col justify-center  items-center px-4">
            <h2 className="mb-10 sm:mb-20 text-5xl text-center sm:text-xl text-white">
                Ask Aceternity UI Anything
            </h2>
            <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
            />
        </div>
    );
}
