"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { CheckCircle, XCircle } from 'lucide-react'
import { cn } from "@/lib/utils"
import { MapPin, Mail } from 'lucide-react'
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern"
import emailjs from '@emailjs/browser'

interface FormData {
    firstName: string
    lastName: string
    email: string
    message: string
}

export function ContactForm() {
    const [loading, setLoading] = useState(false)
    const [modalState, setModalState] = useState<{
        isOpen: boolean
        type: "success" | "error"
        title: string
        message: string
    }>({
        isOpen: false,
        type: "success",
        title: "",
        message: ""
    })

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid }
    } = useForm<FormData>({
        mode: "onChange"
    })

    const onSubmit = async (data: FormData) => {
        setLoading(true)

        try {
            await emailjs.send(
                'service_0swg0vc',
                'template_zdo1umw',
                {
                    name: `${data.firstName} ${data.lastName}`,
                    email: data.email,
                    message: data.message,
                },
                'jVhLHkBy-NXYg4ONK'
            )

            // Reset form on success
            reset()

            setModalState({
                isOpen: true,
                type: "success",
                title: "Message Sent Successfully!",
                message: "Thank you for reaching out. We'll get back to you soon."
            })
        } catch (error) {
            console.error("Error:", error)
            setModalState({
                isOpen: true,
                type: "error",
                title: "Failed to Send Message",
                message: "Something went wrong. Please try again later or contact us directly."
            })
        } finally {
            setLoading(false)
        }
    }

    const closeModal = () => {
        setModalState(prev => ({ ...prev, isOpen: false }))
    }

    return (
        <div className="min-h-screen bg-slate-900 w-full overflow-hidden py-16">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-0 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <div className="container mx-auto px-4 relative z-10">
                <div className="relative mb-16">
                    <AnimatedGridPattern
                        numSquares={30}
                        maxOpacity={0.1}
                        duration={3}
                        repeatDelay={1}
                        className={cn(
                            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
                        )}
                    />
                    <h1 className="text-5xl w-full text-center mt-10 text-white font-normal max-w-5xl mx-auto">
                        Let&apos;s Work Together
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="shadow-input rounded-none md:rounded-2xl p-6 md:p-8 bg-slate-900/80 backdrop-blur-sm border border-slate-700/50">
                        <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>

                        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <LabelInputContainer>
                                    <Label htmlFor="firstName" className="text-slate-200">
                                        First Name
                                    </Label>
                                    <Input
                                        id="firstName"
                                        placeholder="John"
                                        type="text"
                                        style={{ backgroundColor: "rgba(128, 128, 128, 0.05)" }}
                                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-cyan-500 backdrop-blur-sm"
                                        {...register("firstName", {
                                            required: "First name is required",
                                            minLength: { value: 2, message: "First name must be at least 2 characters" }
                                        })}
                                    />
                                    {errors.firstName && (
                                        <span className="text-red-400 text-sm">{errors.firstName.message}</span>
                                    )}
                                </LabelInputContainer>

                                <LabelInputContainer>
                                    <Label htmlFor="lastName" className="text-slate-200">
                                        Last Name
                                    </Label>
                                    <Input
                                        id="lastName"
                                        placeholder="Doe"
                                        type="text"
                                        style={{ backgroundColor: "rgba(128, 128, 128, 0.05)" }}
                                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-cyan-500 backdrop-blur-sm"
                                        {...register("lastName", {
                                            required: "Last name is required",
                                            minLength: { value: 2, message: "Last name must be at least 2 characters" }
                                        })}
                                    />
                                    {errors.lastName && (
                                        <span className="text-red-400 text-sm">{errors.lastName.message}</span>
                                    )}
                                </LabelInputContainer>
                            </div>

                            <LabelInputContainer>
                                <Label htmlFor="email" className="text-slate-200">
                                    Email Address
                                </Label>
                                <Input
                                    id="email"
                                    placeholder="john@example.com"
                                    type="email"
                                    style={{ backgroundColor: "rgba(128, 128, 128, 0.05)" }}
                                    className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-cyan-500 backdrop-blur-sm"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                />
                                {errors.email && (
                                    <span className="text-red-400 text-sm">{errors.email.message}</span>
                                )}
                            </LabelInputContainer>

                            <LabelInputContainer>
                                <Label htmlFor="message" className="text-slate-200">
                                    Message
                                </Label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell us about your project..."
                                    rows={5}
                                    className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-cyan-500 resize-none backdrop-blur-sm"
                                    {...register("message", {
                                        required: "Message is required",
                                        minLength: { value: 10, message: "Message must be at least 10 characters" }
                                    })}
                                />
                                {errors.message && (
                                    <span className="text-red-400 text-sm">{errors.message.message}</span>
                                )}
                            </LabelInputContainer>

                            <button
                                className="group/btn relative flex items-center justify-center gap-2 h-12 w-full rounded-md bg-gradient-to-br font-medium text-white bg-slate-800 from-slate-900 to-slate-900 shadow-[0px_1px_0px_0px_#475569_inset,0px_-1px_0px_0px_#475569_inset] hover:shadow-lg transition-all duration-300 border border-slate-700/50 disabled:opacity-50"
                                type="submit"
                                disabled={loading || !isValid}
                            >
                                {loading ? (
                                    <>
                                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message &rarr;
                                        <BottomGradient />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    <div className="space-y-8">
                        <div className="shadow-input rounded-none md:rounded-2xl p-6 md:p-8 bg-slate-900/80 backdrop-blur-sm border border-slate-700/50">
                            <h2 className="text-2xl font-bold text-white mb-6">Contact Info</h2>
                            <div className="flex gap-2 items-center justify-between">
                                <div className="space-y-6">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="h-5 w-5 text-cyan-400 mt-1" />
                                        <div>
                                            <h3 className="text-white font-medium">Our Location</h3>
                                            <p className="text-slate-400 mt-1 text-left leading-relaxed">
                                                A 1208,<br />
                                                Kanakia Silicon Valley,<br />
                                                Powai, Mumbai - 400076,<br />
                                                Maharashtra, India.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Mail className="h-5 w-5 text-cyan-400" />
                                        <div>
                                            <h3 className="text-white font-medium">Email Us</h3>
                                            <a
                                                href="mailto:contact@intelliumtech.ai"
                                                className="text-cyan-400 hover:text-cyan-300 transition-colors"
                                            >
                                                contact@intelliumtech.ai
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.757462162052!2d72.91588767387617!3d19.118293150646007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7e72ead5b7d%3A0x19c579c8a3f32a1!2sKanakia%20Silicon%20Valley!5e0!3m2!1sen!2sin!4v1749211744447!5m2!1sen!2sin"
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

            <AlertModal
                isOpen={modalState.isOpen}
                onClose={closeModal}
                type={modalState.type}
                title={modalState.title}
                message={modalState.message}
            />
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

interface AlertModalProps {
    isOpen: boolean
    onClose: () => void
    type: "success" | "error"
    title: string
    message: string
}

export function AlertModal({ isOpen, onClose, type, title, message }: AlertModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-slate-900 border-slate-700 text-white max-w-md">
                <DialogHeader>
                    <div className="flex items-center gap-3 mb-2">
                        {type === "success" ? (
                            <CheckCircle className="h-6 w-6 text-green-400" />
                        ) : (
                            <XCircle className="h-6 w-6 text-red-400" />
                        )}
                        <DialogTitle className={`text-lg font-semibold ${type === "success" ? "text-green-400" : "text-red-400"
                            }`}>
                            {title}
                        </DialogTitle>
                    </div>
                    <DialogDescription className="text-slate-300 text-left">
                        {message}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
