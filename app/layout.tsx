"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { useEffect } from "react";
import AOS from "aos";
import "@/public/assets/css/style.css";
import "@/public/assets/libs/aos/aos.css";
import "@/public/assets/css/icons.min.css";


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
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
    });
  }, []);

  return (
    <html lang="en">
      <head>
        <Script src="@/public/assets/libs/preline/preline.js" strategy="afterInteractive" />
        <Script src="@/public/assets/libs/gumshoejs/gumshoe.polyfills.min.js" strategy="afterInteractive" />
        <Script src="@/public/assets/libs/lucide/umd/lucide.min.js" strategy="afterInteractive" />
        <Script src="@/public/assets/js/theme.js" strategy="afterInteractive"/>
        <Script src="@/public/assets/index.js" strategy="afterInteractive"/>
      </head>
      <body className={`${inter.className} bg-default-900 from:left to-right`}>
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