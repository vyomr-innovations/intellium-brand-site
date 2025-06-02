/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { ContactModal } from "./ContactModal"
import "@/public/assets/css/style.min.css"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    return (
        <>
            <header id="navbar-sticky" className="navbar">
                <div className="container">
                    <nav className="flex items-center justify-content-center w-full relative z-50">
                        <Link href="#hero" className="logo flex flex-row">
                            <img className="h-auto w-30" style={{ objectFit: "scale-down" }} src="/intellium.png" alt="logo" />
                            {/* <h1 className="h2 text-white">Intellium</h1> */}
                        </Link>

                        <div className="lg:hidden flex items-center ms-auto px-2.5">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center h-9 w-12 rounded-md border border-white/20 bg-default-100/5 focus:outline-none"
                                aria-label={isOpen ? "Close menu" : "Open menu"}
                                aria-expanded={isOpen}
                            >
                                {isOpen ? <X className="h-5 w-5 stroke-white" /> : <Menu className="h-5 w-5 stroke-white" />}
                            </button>
                        </div>

                        <div
                            id="mobileMenu"
                            className={`transition-all w-50 duration-300 lg:basis-auto basis-full grow ${isOpen ? "flex" : "hidden"
                                } lg:flex items-center justify-center mx-auto mt-2 lg:mt-0`}
                        >
                            <ul id="navbar-navlist" className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link fw-200" href="#services">
                                        Services
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">
                                        About Us
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" onClick={openModal} type="button">
                                        Contact
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <Link href="#hero" className="logo flex flex-row ">
                            <img className="h-auto w-30 opacity-0" style={{ objectFit: "scale-down" }} src="/intellium.png" alt="logo" />
                            {/* <h1 className="h2 text-white">Intellium</h1> */}
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Modal is rendered directly with createPortal */}
            <ContactModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    )
}
