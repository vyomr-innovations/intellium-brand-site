"use client"
import React from "react";
import { Button } from "../components/ui/moving-border";
import { WavyBackground } from "./ui/wavy-background";
// import { ContactModal } from "./ContactModal";
import { WordRotate } from "@/components/magicui/word-rotate";
import { useRouter } from "next/navigation";
export default function Hero() {
    // const [isModalOpen, setIsModalOpen] = useState(false)
    const navigate = useRouter()
    // const openModal = () => setIsModalOpen(true)
    // const closeModal = () => setIsModalOpen(false)
    return (
        <WavyBackground id="hero" className="max-w-4xl mx-auto pb-40" backgroundImageUrl="/assets/images/wavy.png">
            <h1 style={{ fontSize: 68, lineHeight:1.1}} className="md:px-0 px-5 mt-50 md:text-7xl font-bold text-white text-center">
                Unlock the <WordRotate words={["Power", "Value", "Intelligence"]} /> of LLMs with <span style={{ fontWeight: "500", fontStyle: "italic" }}>Intellium</span>
            </h1>

            {/* <h1 style={{ fontSize: 68, lineHeight: 1.1 }} className="md:px-0 flex  px-5 mt-50 md:text-7xl font-bold text-white text-center">
                Unlock the <WordRotate className="px-2" words={["Power", "Value", "Intelligence"]} /> of
            </h1>
            <h1 style={{ fontSize: 68, lineHeight: 1.1 }} className="md:px-0 px-5 md:text-7xl font-bold text-white text-center">
                LLMs with <span style={{ fontWeight: "500", fontStyle: "italic" }}>Intellium</span>
            </h1> */}
            <p className="md:text-2xl text-xl mt-4 text-white  inter-var text-center">
                Your Partner for Large Language Model Solutions
            </p>

            <div className="flex justify-center mt-8">
                <Button onClick={()=>navigate.push("/contact")} borderRadius="10rem"
                    className="bg-[#000000]  text-white border-1 border-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300 ease-in-out px-8 py-4 text-lg font-semibold">
                    Talk to Us
                </Button>
            </div>
            {/* <ContactModal isOpen={isModalOpen} onClose={closeModal} /> */}
        </WavyBackground>
    );
}