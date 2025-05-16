"use client";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Intellium - AI Solutions for the Future" />
        <meta name="keywords" content="AI, artificial intelligence, machine learning, technology" />
        <meta name="author" content="Intellium" />
        <meta property="og:title" content="Intellium" />
        <meta property="og:description" content="AI Solutions for the Future" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Intellium" />
        <meta name="twitter:description" content="AI Solutions for the Future" />
      </head>

      <body suppressHydrationWarning className={`${inter.className} inter-var bg-default-900 from:left to-right`}>
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
        {children}
        <footer className="bg-default-950/40 backdrop-blur-3xl">
          <div className="border-t border-white/10 py-6">
            <div className="container lg:px-20 flex flex-wrap justify-center items-center gap-4 h-full md:justify-between text-center md:text-start">
              <p className="text-xs font-medium text-gray-400">
                {new Date().getFullYear()} {" "} © Intellium - <a href="#">All Rights Reserved</a>
              </p>
              <p className="text-xs font-medium text-gray-400">
                <a href="#">Terms Conditions & Policy</a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}