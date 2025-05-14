"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface BackgroundBeamsProps extends React.HTMLAttributes<HTMLDivElement> { }

export function BackgroundBeams({ className, ...props }: BackgroundBeamsProps) {
    const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
    const beamRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (beamRef.current) {
                const rect = beamRef.current.getBoundingClientRect()
                setMousePosition({
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top,
                })
            }
        }

        document.addEventListener("mousemove", handleMouseMove)
        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    return (
        <div
            ref={beamRef}
            className={cn("h-full w-full bg-black bg-grid-white/[0.2] relative flex items-center justify-center", className)}
            {...props}
        >
            {/* Radial gradient to show the beams effect */}
            <div
                className="absolute pointer-events-none inset-0 flex items-center justify-center"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(120, 0, 255, 0.15), transparent 40%)`,
                }}
            />
            {/* Grid overlay */}
            <div className="absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
    )
}
