"use client";

import { Inter } from "next/font/google";
import "./globals.css";



const inter = Inter({ subsets: ["latin"] });

export const Metadata = {
  title: "WebAI - AI Startup & Technology Landing Page",
  description: "Smart AI for Safer Systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 

  return (
    <html lang="en">
    
      <body className={`${inter.className} inter-var bg-default-900 from:left to-right`}>
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
      </body>
    </html>
  );
}