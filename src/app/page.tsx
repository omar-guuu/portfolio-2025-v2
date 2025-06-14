import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { CVPreview } from "@/components/CVPreview";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <main className="relative">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <CVPreview />
        <Contact />
      </main>
    </div>
  );
}
