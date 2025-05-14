import Navigation from "../components/Navbar";
import Hero from "../components/Hero";
import Tools from "../components/Tools";
import { PlaceholdersAndVanishInputDemo } from "@/components/QSection";
import About from "@/components/About";
import { TechPartner } from "@/components/TechPartners";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <TechPartner />
      <PlaceholdersAndVanishInputDemo />
      <Tools />
      <About />
    </main>
  );
}