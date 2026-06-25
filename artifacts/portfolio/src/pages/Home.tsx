import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      <AnimatedBackground />
      <NavBar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="relative z-10 border-t border-white/5 bg-black/40 py-8 text-center font-mono text-sm text-muted-foreground">
        <p>SYSTEM_ID: HASINI_NIKESALA // VERSION: 1.0.0</p>
        <p className="mt-2 text-xs opacity-50">&copy; {new Date().getFullYear()} All rights reserved. End of line.</p>
      </footer>
    </div>
  );
}
