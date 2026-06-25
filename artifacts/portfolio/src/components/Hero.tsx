import { motion } from "framer-motion";
import { NeonRing } from "./NeonRing";
import { ChevronDown } from "lucide-react";
import profileImg from "/profile.png";

export function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex flex-col items-center justify-center pt-20 pb-10 overflow-hidden">
      {/* Giant watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[9vw] font-black uppercase text-white/[0.035] font-sans whitespace-nowrap tracking-[0.25em]">
          HASINI NIKESALA
        </span>
      </div>

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)" }} />
      </div>

      {/* Central portrait + side callout pointers */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative flex items-center justify-center z-10"
      >
        {/* LEFT callout: Software Development */}
        <div className="hidden md:flex absolute right-full top-1/2 -translate-y-1/2 items-center pr-3 pointer-events-none whitespace-nowrap">
          <span
            className="font-mono text-xs text-primary border border-primary/40 px-3 py-1 rounded bg-[#0a1628]/90"
            style={{ textShadow: "0 0 10px rgba(56,189,248,0.7)" }}
          >
            Software Development
          </span>
          <div className="flex items-center ml-1.5">
            <div className="w-14 h-px bg-primary/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0"
              style={{ boxShadow: "0 0 10px rgba(56,189,248,1), 0 0 20px rgba(56,189,248,0.5)" }} />
          </div>
        </div>

        {/* Portrait */}
        <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
          <NeonRing className="w-full h-full p-[5px]">
            <img
              src={profileImg}
              alt="Hasini Nikesala"
              className="w-full h-full object-cover rounded-full transition-all duration-500 hover:brightness-110"
            />
          </NeonRing>
        </div>

        {/* RIGHT callout: IT Undergraduate */}
        <div className="hidden md:flex absolute left-full top-1/2 -translate-y-1/2 items-center pl-3 pointer-events-none whitespace-nowrap">
          <div className="flex items-center mr-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0"
              style={{ boxShadow: "0 0 10px rgba(56,189,248,1), 0 0 20px rgba(56,189,248,0.5)" }} />
            <div className="w-14 h-px bg-primary/50" />
          </div>
          <span
            className="font-mono text-xs text-primary border border-primary/40 px-3 py-1 rounded bg-[#0a1628]/90"
            style={{ textShadow: "0 0 10px rgba(56,189,248,0.7)" }}
          >
            IT Undergraduate
          </span>
        </div>
      </motion.div>

      {/* Name + subtitle below portrait */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-10 text-center z-10"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-3">
          Hasini Nikesala
        </h1>
        <p
          className="font-mono text-base md:text-lg text-primary"
          style={{ textShadow: "0 0 14px rgba(56,189,248,0.7)" }}
        >
          Intern Software Engineer | Full Stack Developer
        </p>
      </motion.div>

      {/* SCROLL indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10"
      >
        <a
          href="#about"
          onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}
          className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="font-mono text-[9px] tracking-[0.35em] text-primary/60 group-hover:text-primary transition-colors">SCROLL</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
