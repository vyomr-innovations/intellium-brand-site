"use client";
import React from "react";
// import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { ContactForm } from "../../components/ContactForm";
export default function page() {
    return (
        <main className="relative">
            <ContactForm />
        </main>
    );
}

{/* <div className="h-screen overflow-hidden w-full items-center justify-center bg-default-950/40 backdrop-blur-3xl ">
        <AnimatedGridPattern
            numSquares={120}
            maxOpacity={0.5}
            duration={3}
            repeatDelay={1}
            className={cn(
                "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
            )}
        />
        {/* <div className="absolute h-screen inset-0 z-10 flex items-center justify-center"> */}
{/* <ContactForm /> */ }
{/* </div> */ }
{/* <AnimatedGridPattern
            numSquares={120}
            maxOpacity={0.5}
            duration={3}
            repeatDelay={1}
            className={cn(
                "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
            )}
        /> */}
{/* </div>  */ }