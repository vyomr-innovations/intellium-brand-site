"use client";

// import Link from "next/link";
// import { Menu } from "lucide-react";
import "@/public/assets/css/style.css"



export default function Navbar() {
    return (
        <header id="navbar-sticky" className="navbar">
            <div className="container">
                <nav>
                    <a href="index-1.html" className="logo">
                        <h1 className="h-10 fs-4">Smart Ai</h1>
                    </a>
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
                                <a className="nav-link" href="#home">Consulting</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#tools">Engineering</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#features">Ai Integrations</a>
                            </li>
                        </ul>
                        <div
                            className="lg:hidden flex items-center pt-4 mt-4 lg:pt-0 lg:mt-0 border-t border-white/10 lg:border-none">
                            <a href="#"
                                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-6 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300"><i
                                    data-lucide="arrow-big-down-dash"
                                    className="h-5 w-5 me-2"></i> Download</a>
                        </div>
                    </div>

                </nav>
            </div>
        </header>
    );
}