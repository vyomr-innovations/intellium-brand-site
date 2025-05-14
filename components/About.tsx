import React from 'react'
import { BackgroundBeams } from './ui/background-beams'
const About = () => {
    return (
        <section id="about" className="bg-[rgba(0,0,0,0.8)] backdrop-blur-md relative h-[25rem] flex flex-col items-center justify-center overflow-hidden px-4">
            <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
            <div className="relative z-10 text-center">
                <h1 className="text-4xl md:text-7xl font-bold  text-white mb-8">
                    About Our Company
                </h1>
                <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
                    We&apos;re a team of passionate individuals dedicated to creating exceptional digital experiences that make a
                    difference.
                </p>
            </div>
        </section>
    )
}

export default About