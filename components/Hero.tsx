import { Button } from "../components/ui/moving-border";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
export default function Hero() {
    return (
        <WavyBackground className="max-w-4xl mx-auto pb-40" backgroundImageUrl="/assets/images/wavy.png">
            <h1 className="text-5xl mt-50 md:text-7xl font-bold text-white text-center">
                Unlock the Power of LLMs with Intellium
            </h1>
            <p className="text-2xl  mt-4 text-white  inter-var text-center">
                Your Partner for Large Language Model Solutions
            </p>

            <div className="flex justify-center mt-8">
                <Button borderRadius="10rem"
                    className="bg-[#4e66ea]  text-white border-3 border-[#4e66ea]">
                    Talk to Us
                </Button>
            </div>
        </WavyBackground>
    );
}