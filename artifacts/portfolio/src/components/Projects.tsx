import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Watch Sale E-Commerce",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    desc: "End-to-end e-commerce platform with modern storefront flows, secure backend microservices, and an optimised MongoDB schema for high-traffic performance.",
    github: "https://github.com/hasineenikesala/watch-sale-system",
    emoji: "⌚",
    gradient: "from-[#0d2a4a] to-[#0f172a]",
    accent: "#38bdf8"
  },
  {
    title: "Blood Bank & Donor Management",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    desc: "Real-time blood bank dashboard tracking inventory metrics, clinical profiles, and urgent donation updates with optimised relational schemas.",
    github: "https://github.com/hasineenikesala/blood-bank---donor-management-system",
    emoji: "🩸",
    gradient: "from-[#2a0d0d] to-[#0f172a]",
    accent: "#f87171"
  },
  {
    title: "Study Buddy App",
    tech: ["TypeScript", "CSS"],
    desc: "Modular task organisation tool for student group task allocation and milestone tracking using TypeScript structural typing.",
    github: "https://github.com/hasineenikesala/studybuddy-sri-lanka",
    emoji: "📚",
    gradient: "from-[#0d2a1a] to-[#0f172a]",
    accent: "#60a5fa"
  },
  {
    title: "IoT Environment Control System",
    tech: ["IoT Integration", "System Testing", "Hardware Scripts"],
    desc: "Embedded monitoring pipeline with wireless telemetry sensor arrays and custom Python scripts — zero data packet drop rate.",
    github: "https://github.com/hasineenikesala/environment_control_system",
    emoji: "🌡️",
    gradient: "from-[#0d2a15] to-[#0f172a]",
    accent: "#34d399"
  },
  {
    title: "Game Lobby System",
    tech: ["React.js", "Tailwind CSS", "Context State"],
    desc: "Dynamic game lobby manager enabling real-time player session coordination, matchmaking, and competitive room management.",
    github: "https://github.com/hasineenikesala/game_lobby",
    emoji: "🎮",
    gradient: "from-[#1a0d2a] to-[#0f172a]",
    accent: "#a78bfa"
  },
  {
    title: "Private University Web App",
    tech: ["HTML5", "CSS3", "PHP", "MySQL"],
    desc: "Comprehensive university web application with academic management portals, student enrollment, and admin dashboards.",
    github: "https://github.com/hasineenikesala/privateuniproject",
    emoji: "🏛️",
    gradient: "from-[#2a1d0d] to-[#0f172a]",
    accent: "#fb923c"
  }
];

export function Projects() {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const prev = () => setCurrent(c => Math.max(0, c - 1));
  const next = () => setCurrent(c => Math.min(projects.length - 1, c + 1));

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_30%_50%,rgba(56,189,248,0.04),transparent_60%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 font-mono">
              <span className="text-primary mr-2">&gt;</span>
              <span className="text-glow-primary border-b-2 border-primary pb-1 inline-block">EXECUTABLES</span>
            </h2>
            <p className="text-muted-foreground font-mono text-xs ml-6">// slide to explore · {current + 1} of {projects.length}</p>
          </div>

          {/* Arrow controls */}
          <div className="flex gap-2">
            <button
              onClick={prev}
              disabled={current === 0}
              className="p-2 rounded-full border border-white/10 hover:border-primary/60 disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:bg-primary/10"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            <button
              onClick={next}
              disabled={current === projects.length - 1}
              className="p-2 rounded-full border border-white/10 hover:border-primary/60 disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:bg-primary/10"
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </div>
        </motion.div>

        {/* Carousel track */}
        <div className="overflow-hidden" ref={trackRef}>
          <motion.div
            className="flex gap-6"
            animate={{ x: `calc(-${current} * (min(340px, 85vw) + 24px))` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="flex-shrink-0 w-[85vw] sm:w-[340px] flex flex-col rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm"
                style={{ borderColor: `${project.accent}25` }}
              >
                {/* Card image header */}
                <div className={`relative h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `linear-gradient(${project.accent}30 1px, transparent 1px), linear-gradient(90deg, ${project.accent}30 1px, transparent 1px)`,
                      backgroundSize: "28px 28px"
                    }}
                  />
                  <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 50% 50%, ${project.accent}15, transparent 70%)` }} />
                  <span className="text-6xl relative z-10">{project.emoji}</span>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-6 bg-[#111827]">
                  <h3 className="text-lg font-bold text-foreground mb-1">{project.title}</h3>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 text-[10px] font-mono rounded-full border"
                        style={{ borderColor: `${project.accent}35`, color: `${project.accent}cc`, background: `${project.accent}08` }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">{project.desc}</p>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full font-mono font-bold text-sm text-background transition-all hover:scale-105 active:scale-95"
                    style={{ background: "white", color: "#0f172a", boxShadow: "0 4px 15px rgba(255,255,255,0.1)" }}
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    View Project
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                background: i === current ? "#38bdf8" : "rgba(56,189,248,0.25)",
                boxShadow: i === current ? "0 0 8px rgba(56,189,248,0.6)" : "none"
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
