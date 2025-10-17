import type { Metadata } from "next";
import Hero from "../components/Hero";
import Tools from "../components/Tools";
import { PlaceholdersAndVanishInputDemo } from "@/components/QSection";
import About from "@/components/About";
import { TechPartner } from "@/components/TechPartners";
import Navigation from "../components/Navbar";

export const metadata: Metadata = {
  title: "Enterprise LLM Consulting & Engineering Services",
  description:
    "Discover Intellium’s end-to-end LLM consulting, engineering, and integration offerings, crafted for enterprise-grade generative AI delivery.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <PlaceholdersAndVanishInputDemo />
      <Tools />
      <TechPartner />
      <About />
    </main>
  );
}
