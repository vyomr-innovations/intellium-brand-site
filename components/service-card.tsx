 
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React from "react"
import { AnimatePresence, motion } from "motion/react"
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision"

const ConsultingDescription = () => {
  return (
    <>
      <p className="text-lg font-medium mb-3 text-center">
        Strategic guidance for LLM implementation and optimization.
      </p>
      <ul className="space-y-2 text-sm text-center flex flex-col items-center justify-center w-full">
        <li className="flex items-center justify-center space-x-2 w-full text-center">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <p className="transition-colors text-center">LLM Strategy & Planning</p>
        </li>
        <li className="flex items-center justify-center space-x-2 w-full text-center">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <p className="transition-colors text-center">Performance Optimization</p>
        </li>
        <li className="flex items-center justify-center space-x-2 w-full text-center">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <p className="transition-colors text-center">Cost Analysis & ROI</p>
        </li>
        <li className="flex items-center justify-center space-x-2 w-full text-center">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <p className="transition-colors text-center">Technology Assessment</p>
        </li>
      </ul>
    </>
  )
}

const EngineeringDescription = () => {
  return (
    <>
      <p className="text-lg font-medium mb-3 text-center">Custom LLM-powered applications and platforms.</p>
      <ul className="space-y-2 text-sm text-center flex flex-col items-center justify-center w-full">
        <li className="flex items-center justify-center space-x-2 w-full text-center">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
          <p className="transition-colors text-center">Custom Application Development</p>
        </li>
        <li className="flex items-center justify-center space-x-2 w-full text-center">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
          <p className="transition-colors text-center">API & Interface Development</p>
        </li>
        <li className="flex items-center justify-center space-x-2 w-full text-center">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
          <p className="transition-colors text-center">Scalable Infrastructure</p>
        </li>
        <li className="flex items-center justify-center space-x-2 w-full text-center">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
          <p className="transition-colors text-center">Tool & Framework Creation</p>
        </li>
      </ul>
    </>
  )
}

const IntegrationDescription = () => {
  return (
    <>
      <p className="text-lg font-medium mb-3 text-center">Seamlessly integrate LLMs into your existing systems.</p>
      <ul className="space-y-2 text-sm text-center flex flex-col items-center justify-center w-full">
        <li className="flex items-center justify-center space-x-2 w-full text-center">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
          <p className="transition-colors text-center">System Integration (CRM, ERP)</p>
        </li>
        <li className="flex items-center justify-center space-x-2 w-full text-center">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
          <p className="transition-colors text-center">Data Connectivity</p>
        </li>
        <li className="flex items-center justify-center space-x-2 w-full text-center">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
          <p className="transition-colors text-center">Connector & Adapter Development</p>
        </li>
        <li className="flex items-center justify-center space-x-2 w-full text-center">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
          <p className="transition-colors text-center">Data Migration & Transformation</p>
        </li>
      </ul>
    </>
  )
}

export function CanvasRevealEffectDemo() {
  return (
    <div
      id="services"
      className="py-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8 min-h-screen"
    >
      <Card title="LLM Consulting" description={<ConsultingDescription />}>
        <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-emerald-900" />
      </Card>
      <Card title="LLM Engineering" description={<EngineeringDescription />}>
        <CanvasRevealEffect animationSpeed={5.1} colors={[[125, 211, 252]]} containerClassName="bg-red-600" />
      </Card>
      <Card title="LLM Integration" description={<IntegrationDescription />}>
        <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-sky-600" />
      </Card>
    </div>
  )
}

const Card = ({
  title,
  description,
  children,
}: {
  title: string
  description: React.ReactNode
  children?: React.ReactNode
}) => {
  const [hovered, setHovered] = React.useState(false)
  return (
    <div className="relative shadow-[0_5px_55px_rgba(8,_112,_184,_0.7)] border border-white group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto h-[18rem] sm:h-[20rem] rounded-lg">
      <Icon className="absolute z-50 h-6 w-6 -top-3 -left-3 text-white" />
      <Icon className="absolute z-50 h-6 w-6 -bottom-3 -left-3 text-white" />
      <Icon className="absolute z-50 h-6 w-6 -top-3 -right-3 text-white" />
      <Icon className="absolute z-50 h-6 w-6 -bottom-3 -right-3 text-white" />

      <BackgroundBeamsWithCollision className="bg-transparent">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{ background: "rgba(0,0,0,0.8)" }}
          className="flex items-center justify-center max-w-sm w-full mx-auto h-[17.7rem] sm:h-[19.6rem]"
        >
          <AnimatePresence>
            {hovered && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full w-full absolute inset-0">
                {children}
              </motion.div>
            )}
          </AnimatePresence>
          <div
            tabIndex={0}
            className="relative group w-[300px] sm:h-[200px] sm:w-[200px] h-[300px] overflow-hidden mx-auto rounded-xl focus:outline-none flex items-center justify-center"
          >
            {/* Title visible by default, hidden on hover/focus */}
            <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-4 group-focus-within:opacity-0 group-focus-within:translate-y-4 bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
              <span className="text-white text-xl font-semibold">{title}</span>
            </div>

            {/* Content shown on hover or focus */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 px-4 text-center w-full">
              <h2 className="text-base sm:text-xl font-bold mb-2 text-center w-full">{title}</h2>
              <div className="text-sm sm:text-base leading-relaxed">{description}</div>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  )
}

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
  )
}
