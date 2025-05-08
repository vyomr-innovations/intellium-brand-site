import "../public/assets/css/style.min.css"

import { Button } from "../components/ui/moving-border";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
export default function Hero() {
    return (
        <WavyBackground className="max-w-4xl mx-auto pb-40" backgroundImageUrl="/assets/images/wavy.png">
            <h1 className="text-5xl md:text-7xl font-bold text-white text-center">
                Unlock the Power of LLMs with Intellium
            </h1>
            <p className="text-2xl  mt-4 text-white  inter-var text-center">
                Your Partner for Large Language Model Solutions
            </p>

            <div className="flex justify-center mt-8">
                <Button borderRadius="1.75rem"
                    className="bg-white dark:bg-slate-900 text-black border-neutral-200 dark:border-slate-800">
                    Talk to Us
                </Button>
            </div>
        </WavyBackground>
    );
}