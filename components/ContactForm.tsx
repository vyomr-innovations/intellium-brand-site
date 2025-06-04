/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import type React from "react"
import { useState, useEffect } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import PhoneInput from "react-phone-number-input"
import "react-phone-number-input/style.css"
import { Boxes } from "../components/ui/background-boxes"

interface CountryInfo {
    country_code: string
    country_name: string
}

export function ContactForm() {
    const [phone, setPhone] = useState<string>("")
    const [defaultCountry, setDefaultCountry] = useState<string>("US")

    useEffect(() => {
        // Detect user's country based on IP
        const detectCountry = async () => {
            try {
                const response = await fetch("https://ipapi.co/json/")
                const data: CountryInfo = await response.json()
                if (data.country_code) {
                    setDefaultCountry(data.country_code)
                }
            } catch (error) {
                console.log("Could not detect country, using default")
            }
        }

        detectCountry()
    }, [])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = {
            firstName: formData.get("firstname"),
            lastName: formData.get("lastname"),
            email: formData.get("email"),
            phone: phone,
            message: formData.get("message"),
        }
        console.log("Contact form submitted:", data)
        // Here you would typically send the data to your backend
    }

    return (
        <div className="min-h-screen bg-slate-900 relative w-full overflow-hidden flex items-center justify-center py-20 pt-25">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <Boxes />

            <div className="relative z-20 w-full max-w-2xl mx-auto px-4">
                <div className="shadow-input rounded-none md:rounded-2xl p-6 md:p-8 bg-slate-900/80 backdrop-blur-sm border border-slate-700/50">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
                        <p className="text-slate-400 text-sm">
                            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                        <div className="mt-4 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 backdrop-blur-sm">
                            <p className="text-slate-300 text-sm">
                                Or reach us directly at:{" "}
                                <a
                                    href="mailto:shahnaz@intelliumtech.ai"
                                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                                >
                                    shahnaz@intelliumtech.ai
                                </a>
                            </p>
                        </div>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <LabelInputContainer>
                                <Label htmlFor="firstname" className="text-slate-200">
                                    First name
                                </Label>
                                <Input
                                    id="firstname"
                                    name="firstname"
                                    placeholder="John"
                                    type="text"
                                    required
                                    style={{
                                        backgroundColor: "rgb(30 41 59 / 0.5) !important",
                                    }}
                                    className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-cyan-500 backdrop-blur-sm"
                                />
                            </LabelInputContainer>
                            <LabelInputContainer>
                                <Label htmlFor="lastname" className="text-slate-200">
                                    Last name
                                </Label>
                                <Input
                                    id="lastname"
                                    name="lastname"
                                    placeholder="Doe"
                                    type="text"
                                    required
                                    style={{
                                        backgroundColor: "rgb(30 41 59 / 0.5) !important",
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
                                placeholder="john.doe@example.com"
                                type="email"
                                required
                                style={{
                                    backgroundColor: "rgb(30 41 59 / 0.5) !important",
                                }}
                                className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-cyan-500 backdrop-blur-sm"
                            />
                        </LabelInputContainer>

                        <LabelInputContainer>
                            <Label htmlFor="phone" className="text-slate-200">
                                Phone Number
                            </Label>
                            <div className="phone-input-container">
                                <PhoneInput
                                    international
                                    defaultCountry={defaultCountry as any}
                                    value={phone}
                                    onChange={(value) => setPhone(value || "")}
                                    className="phone-input-dark"
                                    placeholder="Enter phone number"
                                />
                            </div>
                        </LabelInputContainer>

                        <LabelInputContainer>
                            <Label htmlFor="message" className="text-slate-200">
                                Message
                            </Label>
                            <Textarea
                                id="message"
                                name="message"
                                placeholder="Tell us about your project or inquiry..."
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

                    <div className="mt-8 text-center">
                        <p className="text-slate-500 text-xs">We respect your privacy and will never share your information.</p>
                    </div>
                </div>
            </div>

            <style jsx global>{`
        .phone-input-dark .PhoneInputInput {
          background-color: rgb(30 41 59 / 0.5);
          border: 1px solid rgb(71 85 105);
          color: white;
          border-radius: 0.375rem;
          padding: 0.5rem 0.75rem;
          font-size: 0.875rem;
          transition: border-color 0.2s;
          backdrop-filter: blur(4px);
        }
        
        .phone-input-dark .PhoneInputInput:focus {
          outline: none;
          border-color: rgb(6 182 212);
          box-shadow: 0 0 0 1px rgb(6 182 212);
        }
        
        .phone-input-dark .PhoneInputInput::placeholder {
          color: rgb(100 116 139);
        }
        
        .phone-input-dark .PhoneInputCountrySelect {
          background-color: rgb(30 41 59 / 0.5);
          border: 1px solid rgb(71 85 105);
          border-right: none;
          color: white;
          border-radius: 0.375rem 0 0 0.375rem;
          backdrop-filter: blur(4px);
        }
        
        .phone-input-dark .PhoneInputCountrySelect:focus {
          outline: none;
          border-color: rgb(6 182 212);
        }
        
        .phone-input-dark .PhoneInputCountrySelectArrow {
          color: rgb(100 116 139);
        }
        
        .phone-input-dark {
          display: flex;
        }
        
        .phone-input-dark .PhoneInputInput {
          border-radius: 0 0.375rem 0.375rem 0;
          border-left: none;
          flex: 1;
        }
      `}</style>
        </div>
    )
}

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
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
