"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/moving-border"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        try {
            // Replace with your actual form submission logic
            await new Promise((resolve) => setTimeout(resolve, 1500))
            setIsSuccess(true)
            setFormData({ name: "", email: "", message: "" })

            // Reset success message after 3 seconds
            setTimeout(() => {
                setIsSuccess(false)
            }, 3000)
        } catch (error) {
            console.error("Error submitting form:", error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="w-full">
            {isSuccess ? (
                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-md text-green-800 dark:text-green-300 text-center mb-4">
                    Thank you for your message! We&apos;ll get back to you soon.
                </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                        Name
                    </label>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full py-2 outline-none"

                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                        Email
                    </label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="w-full"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                        Phone No
                    </label>
                    <PhoneInput
                        placeholder="Enter phone number"
                        value={formData.email}
                        required
                        autoComplete="on"
                        // inputComponent={() => <Input />}
                        className="bg-transparent w-full"
                        name="phone"
                        onChange={(value) => setFormData(prev => ({ ...prev, phone: value }))} />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
                        Message
                    </label>
                    <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                        className="w-full min-h-[120px]"
                    />
                </div>

                <Button borderRadius="10rem" containerClassName="
                
                w-full my-3" type="submit" className="bg-[#000000]   text-white border-1 border-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300 ease-in-out flex w-full font-semibold" disabled={isSubmitting}>
                    {isSubmitting ? (
                        <span className="flex items-center justify-center">
                            <svg
                                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                            Sending...
                        </span>
                    ) : (
                        <span className="flex items-center justify-center">
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                        </span>
                    )}
                </Button>
            </form>
        </div>
    )
}
