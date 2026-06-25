import { motion } from "framer-motion";
import { NeonRing } from "./NeonRing";
import { Download, ChevronDown, MapPin, Mail, Phone, GraduationCap } from "lucide-react";
import profileImg from "/profile.png";

export function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1 flex flex-col items-start text-left space-y-6"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 font-mono text-sm text-primary box-glow-primary">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>SYSTEM_ONLINE // INIT_SEQUENCE</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="block text-foreground">Hasini</span>
            <span className="block text-primary text-glow-primary mt-2">Nikesala</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-mono text-secondary text-glow-secondary">
            &gt; Information Systems Undergraduate
            <br />
            &gt; Software Engineer Intern
          </h2>
          
          <p className="text-muted-foreground max-w-lg text-lg leading-relaxed border-l-2 border-primary/50 pl-4">
            Highly motivated Information Systems Undergraduate with hands-on experience in full-stack software development, architectural design patterns, and database optimization. Experienced with MERN stack, PHP, Spring Boot, and cloud ecosystems.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="/Hasini_Nikesala_CV.pdf" 
              download
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 box-glow-primary"
            >
              <Download className="mr-2 h-5 w-5" />
              DOWNLOAD_CV
            </a>
            <div className="flex space-x-4 items-center">
              <a href="#" className="p-3 rounded-md bg-card/50 border border-white/10 hover:border-secondary hover:text-secondary transition-colors group">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="p-3 rounded-md bg-card/50 border border-white/10 hover:border-secondary hover:text-secondary transition-colors group">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <NeonRing className="w-full h-full p-[4px]">
              <img 
                src={profileImg} 
                alt="Hasini Nikesala" 
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700" 
              />
            </NeonRing>
            
            {/* Floating stats */}
            <div className="absolute -right-4 top-10 bg-card/80 backdrop-blur-md border border-secondary/30 p-3 rounded-lg shadow-xl font-mono text-sm transform rotate-3">
              <div className="text-secondary font-bold">GPA</div>
              <div className="text-foreground">3.49 / 4.00</div>
            </div>
            
            <div className="absolute -left-8 bottom-20 bg-card/80 backdrop-blur-md border border-primary/30 p-3 rounded-lg shadow-xl font-mono text-sm transform -rotate-6">
              <div className="text-primary font-bold">EXPECTED</div>
              <div className="text-foreground">2027</div>
            </div>
          </div>
        </motion.div>
      </div>

      <a 
        href="#about" 
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
