/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

const RenderDescription = () => {
    return (
        <>
            <p>Strategic guidence to travel LLMs for your business needs.</p>
            <ul className="fs-2">
                <li>
                    <p>
                        Use Case Indentification
                    </p>
                </li>
                <li>
                    <p>
                        Model Selection
                    </p>
                </li>
                <li>
                    <p>
                        Prompt Engineering
                    </p>
                </li>
                <li>
                    <p>
                        Evaluation & Benchmarking
                    </p>
                </li>
            </ul>
        </>
    )
}
export function CanvasRevealEffectDemo() {
    return (
        <>
            <div className="py-20 flex flex-col lg:flex-row items-center justify-center  w-full gap-4 mx-auto px-8">
                <Card title="LLM Consulting" descption={<RenderDescription />} >
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-emerald-900"
                    />
                </Card>
                <Card title="LLM Consulting" descption={<RenderDescription />}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-red-600"
                        colors={[
                            [236, 72, 153],
                            [232, 121, 249],
                        ]}
                        dotSize={2}
                    />
                    {/* Radial gradient for the cute fade */}
                    <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/90" />
                </Card>
                <Card title="LLM Consulting" descption={<RenderDescription />} >
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-sky-600"
                        colors={[[125, 211, 252]]}
                    />
                </Card>
            </div>
        </>
    );
}

const Card = ({
    title,
    descption,
    children,
}: {
    title: string;
    descption: React.ReactNode;
    children?: React.ReactNode;
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ background: " rgba(0,0,0,0.8)" }}
            className="border border-white group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-4 h-[20rem] relative"
        >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3  text-white" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3  text-white" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3  text-white" />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative group w-[300px] h-[300px] overflow-hidden mx-auto rounded-xl">

                {/* Default view: Title */}
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-4">
                    <h2 className="text-white text-xl font-semibold">{title}</h2>
                </div>

                {/* Hover view: Full content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 px-4 text-center">
                    <h2 className="text-xl font-bold mb-2">{title}</h2>
                    <p className="text-sm leading-relaxed">
                        Strategic guidance to travel LLMs <br /> for your business needs.<br />
                        <br />
                        <li>Use Case Identification</li>
                        <li>Model Selection</li>
                        <li>Prompt Engineering</li>
                        <li>Evaluation & Benchmarking</li>
                    </p>
                </div>

            </div>

        </div>
    );
};

// const AceternityIcon = () => {
//     return (
//         <svg
//             width="66"
//             height="65"
//             viewBox="0 0 66 65"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-10 w-10 text-black text-white group-hover/canvas-card:text-white "
//         >
//             <path
//                 d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
//                 stroke="currentColor"
//                 strokeWidth="15"
//                 strokeMiterlimit="3.86874"
//                 strokeLinecap="round"
//                 style={{ mixBlendMode: "darken" }}
//             />
//         </svg>
//     );
// };

export const Icon = ({ className, ...rest }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};