import type { Metadata } from "next";
// import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { ContactForm } from "../../components/ContactForm";

export const metadata: Metadata = {
    title: "Talk to Intellium’s LLM Consultants",
    description:
        "Share your LLM goals to schedule a strategy session with Intellium’s consulting and engineering team. We co-design production-ready generative AI programmes.",
    alternates: {
        canonical: "/contact",
    },
};

export default function ContactPage() {
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
