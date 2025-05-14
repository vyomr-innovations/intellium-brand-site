"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface AnimatedTextProps {
    text: string
    className?: string
}

export const AnimatedText = ({ text, className = "" }: AnimatedTextProps) => {
    const controls = useAnimation()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }
    }, [controls, isInView])

    const words = text.split(" ")

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
    }

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    }

    return (
        <motion.div
            ref={ref}
            className={`overflow-hidden flex flex-wrap text-center ${className}`}
            variants={container}
            initial="hidden"
            animate={controls}
        >
            {words.map((word, index) => (
                <motion.span key={index} className="mr-2 inline-block" variants={child}>
                    {word}
                </motion.span>
            ))}
        </motion.div>
    )
}
