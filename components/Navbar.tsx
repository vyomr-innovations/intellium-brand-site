"use client";

import Link from "next/link";
// import Link from "next/link";
// import { Menu } from "lucide-react";
import "../public/assets/css/style.min.css"



export default function Navbar() {
    return (
        <header id="navbar-sticky" className="navbar">
            <div className="container">
                <nav>
                    <Link href="/" className="logo">
                        <h1 className="h2">Intellium</h1>
                    </Link>
                    <div className="lg:hidden flex items-center ms-auto px-2.5">
                        <button
                            className="hs-collapse-toggle inline-flex items-center justify-center h-9 w-12 rounded-md border border-white/20 bg-default-100/5"
                            type="button" id="hs-unstyled-collapse" data-hs-collapse="#mobileMenu" data-hs-type="collapse">
                            <i data-lucide="menu" className="h-5 w-5 stroke-white"></i>
                        </button>
                    </div>
                    <div id="mobileMenu"
                        className="hs-collapse transition-all duration-300 lg:basis-auto basis-full grow hidden lg:flex items-center justify-center mx-auto mt-2 lg:mt-0">
                        <ul id="navbar-navlist" className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link fw-200" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#features">Contact</a>
                            </li>
                        </ul>

                    </div>

                </nav>
            </div>
        </header>
    );
}