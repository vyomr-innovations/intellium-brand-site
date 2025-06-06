/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string
    logo: string
  }[]
  direction?: "left" | "right"
  speed?: "fast" | "normal" | "slow"
  pauseOnHover?: boolean
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLUListElement>(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    addAnimation()
    // Add resize listener to handle window resizing
    window.addEventListener('resize', addAnimation)
    return () => {
      window.removeEventListener('resize', addAnimation)
    }
  }, [])

  const getSpeed = () => {
    switch (speed) {
      case "fast":
        return 30
      case "normal":
        return 50
      case "slow":
        return 200
    }
  }

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      // Reset the scroller content
      scrollerRef.current.innerHTML = ''
      
      // Create a wrapper for the original items
      const originalList = document.createElement('div')
      originalList.className = 'flex'
      
      // Add the original items first
      items.forEach((item) => {
        const li = document.createElement('li')
        li.className = "w-[150px] md:w-[180px] flex items-center justify-center relative flex-shrink-0 px-4"
        li.innerHTML = `
          <div class="relative h-12 w-full">
            <img
              src="${item.logo}"
              alt="${item.name}"
              class="object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300 absolute inset-0 w-full h-full"
            />
          </div>
        `
        originalList.appendChild(li)
      })

      // Add multiple sets of the original content
      for (let i = 0; i < 4; i++) {
        const clonedList = originalList.cloneNode(true)
        scrollerRef.current.appendChild(clonedList)
      }

      setStart(true)
    }
  }

  const speedValue = getSpeed()

  return (
    <div ref={containerRef} className={cn("scroller relative z-10 max-w-7xl overflow-hidden", className)}>
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-12 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
          direction === "right" ? "justify-end" : "justify-start",
        )}
        style={{
          animationDuration: `${speedValue}s`,
          animationDirection: direction === "right" ? "reverse" : "normal",
          animationIterationCount: "infinite",
          animationTimingFunction: "linear"
        }}
      >
        {items.map((item, idx) => (
          <li className="w-[150px] md:w-[180px] flex items-center justify-center relative flex-shrink-0 px-4" key={idx}>
            <div className="relative h-12 w-full">
              <Image
                src={item.logo}
                alt={item.name}
                fill
                unoptimized
                className="object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
