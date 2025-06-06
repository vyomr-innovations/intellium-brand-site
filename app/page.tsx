import Hero from "../components/Hero";
import Tools from "../components/Tools";
import { PlaceholdersAndVanishInputDemo } from "@/components/QSection";
import About from "@/components/About";
import { TechPartner } from "@/components/TechPartners";
import Navigation from "../components/Navbar";

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