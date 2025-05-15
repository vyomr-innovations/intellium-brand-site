"use client"

import { InfiniteMovingCards } from "./ui/infinite-moving-cards"

export function TechPartner() {
    const partners = [
        {
            name: "Open AI",
            logo: "https://upload.wikimedia.org/wikipedia/commons/1/13/ChatGPT-Logo.png",
        },
        {
            name: "Roga AI",
            logo: "https://raw.githubusercontent.com/raga-ai-hub/raga-llm-hub/main/docs/assets/logo-lg_black.png",
        },
        {
            name: "DeepSeek",
            logo: "./deepseeklogo.png"
        },
        {
            name: "Loveble Ai",
            logo: "https://mintlify.s3.us-west-1.amazonaws.com/lovable-f9060f1e/logo/light.svg"
        },
        {
            name: "Anthropic AI",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Anthropic_logo.svg/1200px-Anthropic_logo.svg.png"
        }
    ]

    return (
        <section className="bg-[rgba(0,0,0,0.7)] backdrop-blur-md py-12 overflow-hidden flex flex-col items-center justify-center">
            <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <h1 className="text-center text-2xl md:text-3xl font-medium text-white">
                    Our Experties
                </h1>
            </div>

            <InfiniteMovingCards items={partners} speed="slow" />
        </section>
    )
}
