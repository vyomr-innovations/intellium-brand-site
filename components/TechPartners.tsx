"use client"

import { InfiniteMovingCards } from "./ui/infinite-moving-cards"

export function TechPartner() {
    const partners = [
        {
            name: "BEEM",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3KIGsgAawUIz7j9_kP_nWRFndes7zDMk1jA&s",
        },
        {
            name: "Finsense",
            logo: "/placeholder.svg?height=40&width=120",
        },
    ]

    return (
        <section className="bg-[rgba(0,0,0,0.7)] backdrop-blur-md py-12 overflow-hidden flex flex-col items-center justify-center">
            <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <h1 className="text-center text-2xl md:text-3xl font-medium text-white">
                    Trusted by{" "}
                    <span className="bg-clip-text  bg-gradient-to-r from-purple-600 to-violet-500  ">
                        innovation-obsessed
                    </span>{" "}
                    industry leaders
                </h1>
            </div>

            <InfiniteMovingCards items={partners}  speed="slow" />
        </section>
    )
}
