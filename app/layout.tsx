// app/layout.tsx or app/layout.js

import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "../components/Navbar";
import CookieConsentWrapper from "@/components/CookieConsentWrapper";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Intellium",
  description: "AI Solutions for the Future",
  keywords: ["AI", "artificial intelligence", "machine learning", "technology"],
  authors: [{ name: "Intellium" }],
  openGraph: {
    title: "Intellium",
    description: "AI Solutions for the Future",
    type: "website",
    images: ["/about_us_logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Intellium",
    description: "AI Solutions for the Future",
    images: ["/about_us_logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.className} inter-var bg-default-900 from:left to-right `}
      >
        {/* Gradients */}
        <div className="bg-gradient-overlay top-0">
          <div className="blur-circle" />
        </div>
        <div className="bg-gradient-overlay top-0 right-0">
          <div className="blur-circle" />
        </div>
        <div className="bg-gradient-overlay inset-0 flex items-center justify-center">
          <div className="blur-circle" />
        </div>
        <div className="bg-gradient-overlay bottom-0 left-0">
          <div className="blur-circle" />
        </div>
        <div className="bg-gradient-overlay bottom-0 right-0">
          <div className="blur-circle" />
        </div>
        <Navigation />


        {children}

        <footer className="bg-default-950/40 backdrop-blur-3xl ">
          <div className="border-t border-white/10 py-6">
            <div className="container lg:px-20 flex flex-wrap justify-center items-center gap-4 h-full md:justify-between text-center md:text-start">
              <p className="text-xs font-medium text-gray-400">
                {new Date().getFullYear()} © Intellium - <a href="#">All Rights Reserved</a>
              </p>
              <p className="text-xs font-medium text-gray-400">
                <a href="#">Terms Conditions & Policy</a>
              </p>
            </div>
          </div>

        </footer>
         <CookieConsentWrapper />
      </body>
    </html>
  );
}