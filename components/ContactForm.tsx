"use client"
import type React from "react"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import "react-phone-number-input/style.css"
import { MapPin, Mail } from "lucide-react"
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern"

export function ContactForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = {
            firstName: formData.get("firstname"),
            lastName: formData.get("lastname"),
            email: formData.get("email"),
            company: formData.get("company"),
            message: formData.get("message"),
        }
        console.log("Contact form submitted:", data)
        // Here you would typically send the data to your backend
    }

    return (
        <div className="min-h-screen bg-slate-900 w-full overflow-hidden py-16">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-0 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Hero Section with Animated Grid */}
                <div className="relative mb-16">
                    <AnimatedGridPattern
                        numSquares={30}
                        maxOpacity={0.1}
                        duration={3}
                        repeatDelay={1}
                        className={cn(
                            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                        )}
                    />
                    <h1
                        className="text-5xl w-full text-center mt-10 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight sm:leading-tight md:leading-tight lg:leading-tight text-white break-words hyphens-auto max-w-5xl mx-auto relative z-10"
                        style={{ opacity: 1, transform: "none" }}
                    >
                        Let&apos;s Work Together
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Form Column */}
                    <div className="shadow-input rounded-none md:rounded-2xl p-6 md:p-8 bg-slate-900/80 backdrop-blur-sm border border-slate-700/50">
                        <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <LabelInputContainer>
                                    <Label htmlFor="firstname" className="text-slate-200">
                                        First Name
                                    </Label>
                                    <Input
                                        id="firstname"
                                        name="firstname"
                                        placeholder="John"
                                        type="text"
                                        required
                                        style={{
                                            backgroundColor: "rgb(30 41 59 / 0.5)!important",
                                        }}
                                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-cyan-500 backdrop-blur-sm"
                                    />
                                </LabelInputContainer>
                                <LabelInputContainer>
                                    <Label htmlFor="lastname" className="text-slate-200">
                                        Last Name
                                    </Label>
                                    <Input
                                        id="lastname"
                                        name="lastname"
                                        placeholder="Doe"
                                        type="text"
                                        required
                                        style={{
                                            backgroundColor: "rgb(30 41 59 / 0.5)!important",
                                        }}
                                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-cyan-500 backdrop-blur-sm"
                                    />
                                </LabelInputContainer>
                            </div>

                            <LabelInputContainer>
                                <Label htmlFor="email" className="text-slate-200">
                                    Email Address
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    type="email"
                                    required
                                    style={{
                                        backgroundColor: "rgb(30 41 59 / 0.5)!important",
                                    }}
                                    className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-cyan-500 backdrop-blur-sm"
                                />
                            </LabelInputContainer>
                            <LabelInputContainer>
                                <Label htmlFor="message" className="text-slate-200">
                                    Message
                                </Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your project..."
                                    required
                                    rows={5}
                                    className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-cyan-500 resize-none backdrop-blur-sm"
                                />
                            </LabelInputContainer>

                            <button
                                className="group/btn relative block h-12 w-full rounded-md bg-gradient-to-br font-medium text-white bg-slate-800 from-slate-900 to-slate-900 shadow-[0px_1px_0px_0px_#475569_inset,0px_-1px_0px_0px_#475569_inset] hover:shadow-lg transition-all duration-300 border border-slate-700/50"
                                type="submit"
                            >
                                Send Message &rarr;
                                <BottomGradient />
                            </button>
                        </form>
                    </div>

                    {/* Contact Info Column */}
                    <div className="space-y-8">
                        <div className="shadow-input rounded-none md:rounded-2xl p-6 md:p-8 bg-slate-900/80 backdrop-blur-sm border border-slate-700/50">
                            <h2 className="text-2xl font-bold text-white mb-6">Contact Info</h2>
                            <div className="flex gap-2 items-center justify-between">
                                <div className="space-y-6">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="h-5 w-5 text-cyan-400 mt-1" />
                                        <div>
                                            <h3 className="text-white font-medium">Our Location</h3>
                                            <p className="text-slate-400 mt-1">
                                                123, New york city
                                                <br />
                                                Lane 1, Nyc
                                                <br />
                                                United States
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Mail className="h-5 w-5 text-cyan-400" />
                                        <div>
                                            <h3 className="text-white font-medium">Email Us</h3>
                                            <a
                                                href="mailto:contact@echortech.com"
                                                className="text-cyan-400 hover:text-cyan-300 transition-colors"
                                            >
                                                contact@intellium.in
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482632.15259832365!2d72.54926045262282!3d19.082911487440562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1749201954716!5m2!1sen!2sin"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="w-full h-48 rounded-lg border border-slate-700/50"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    )
}

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) => {
    return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>
}
