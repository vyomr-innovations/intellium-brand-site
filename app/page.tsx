import Navigation from "../components/Navbar";
import Hero from "../components/Hero";
import Tools from "../components/Tools";
import { PlaceholdersAndVanishInputDemo } from "@/components/QSection";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <PlaceholdersAndVanishInputDemo />
      <Tools />
    </main>
  );
}