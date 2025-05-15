"use client";
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { BackgroundBeams } from './ui/background-beams'
import { motion } from "motion/react"
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const About = () => {
    return (
        <section id="about" className="bg-[rgba(0,0,0,0.5)] backdrop-blur-md relative min-h-[35rem] flex items-center justify-center overflow-hidden px-4 py-10">
            <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    {/* Left side - Image */}
                    <CardContainer className="inter-var">
                        <CardBody className="bg-gray-900 relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1]  border-white max-w-sm h-auto rounded-xl p-6">
                            <CardItem
                                translateZ="100"
                                className="w-full mt-4"
                            >
                                <img
                                    src="https://img.freepik.com/premium-vector/llm-logo-llm-letter-llm-letter-logo-design-initials-llm-logo-linked-with-circle-uppercase-monogram-logo-llm-typography-technology-business-real-estate-brand_229120-65361.jpg" // Replace with your image path
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="About Us"
                                />
                            </CardItem>
                        </CardBody>
                    </CardContainer>

                    {/* Right side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            About US
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl">
                            We&apos;re a team of passionate individuals dedicated to creating exceptional digital experiences that make a
                            difference.
                        </p>
                      
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About