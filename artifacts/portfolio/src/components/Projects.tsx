import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Watch Sale E-Commerce",
    subtitle: "Full-Stack Developer · Individual Project",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    desc: "End-to-end e-commerce platform with modern storefront flows, secure backend microservices, reusable React components, and an optimised MongoDB document schema for high-traffic performance.",
    github: "https://github.com/hasineenikesala/watch-sale-system",
    period: "Apr – May 2026",
    gradient: "from-[#1e3a5f] via-[#0f2a45] to-[#0f172a]",
    accent: "#38bdf8",
    emoji: "⌚"
  },
  {
    title: "Blood Bank & Donor Management",
    subtitle: "Full-Stack Developer · Individual Project",
    tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
    desc: "Real-time blood bank inventory dashboard tracking clinical profiles, donation metrics, and urgent center updates. Optimised MySQL relational schema with secondary indices.",
    github: "https://github.com/hasineenikesala/blood-bank---donor-management-system",
    period: "Apr – May 2025",
    gradient: "from-[#3b1a1a] via-[#2a0f0f] to-[#0f172a]",
    accent: "#f87171",
    emoji: "🩸"
  },
  {
    title: "Study Buddy App",
    subtitle: "Full-Stack Developer · Individual Project",
    tech: ["TypeScript", "CSS3", "Layout Design"],
    desc: "Lightweight modular task organisation environment for real-time student group task allocation and milestone tracking. TypeScript structural typing eliminates compilation errors.",
    github: "https://github.com/hasineenikesala/studybuddy-sri-lanka",
    period: "Dec 2025 – Jan 2026",
    gradient: "from-[#1a2f1a] via-[#0f200f] to-[#0f172a]",
    accent: "#4ade80",
    emoji: "📚"
  },
  {
    title: "IoT Environment Control System",
    subtitle: "IoT & Integration Specialist · Group Project",
    tech: ["Python", "Embedded Scripting", "Hardware Telemetry", "Testing"],
    desc: "Integrated embedded monitoring pipeline with network sensor arrays, wireless telemetry parsing, and custom Python scripts maintaining zero data packet drop rates.",
    github: "https://github.com/hasineenikesala/environment_control_system",
    period: "Jan – Mar 2026",
    gradient: "from-[#1a2a1a] via-[#0f1f0f] to-[#0f172a]",
    accent: "#86efac",
    emoji: "🌡️"
  },
  {
    title: "Game Lobby System",
    subtitle: "Individual Project",
    tech: ["Web Technologies", "Backend Architecture", "Real-time"],
    desc: "Dynamic game lobby manager enabling real-time player session coordination, matchmaking flows, and competitive room management for multiplayer gaming environments.",
    github: "https://github.com/hasineenikesala/game_lobby",
    period: "2025",
    gradient: "from-[#1a1a3b] via-[#0f0f2a] to-[#0f172a]",
    accent: "#a78bfa",
    emoji: "🎮"
  },
  {
    title: "Private University Web App",
    subtitle: "Individual Project",
    tech: ["Full Stack", "Web Development", "UI/UX"],
    desc: "Comprehensive private university web application featuring academic management portals, student course enrollment, and administrative dashboards with responsive design.",
    github: "https://github.com/hasineenikesala/privateuniproject",
    period: "2025",
    gradient: "from-[#1f1a0f] via-[#140f0a] to-[#0f172a]",
    accent: "#fb923c",
    emoji: "🏛️"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_30%_50%,rgba(56,189,248,0.04),transparent_60%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-primary mr-2">&gt;</span>
            <span className="text-glow-primary border-b-2 border-primary pb-1 inline-block">EXECUTABLES</span>
          </h2>
          <p className="text-muted-foreground font-mono text-sm mt-2 ml-6">// 6 deployed projects · click GitHub to view source</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="tilt-card glass-panel rounded-xl overflow-hidden flex flex-col group"
              style={{ borderColor: `${project.accent}20` }}
            >
              {/* Card image header */}
              <div className={`relative h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                <div
                  className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 50% 50%, ${project.accent}, transparent 70%)` }}
                />
                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `linear-gradient(${project.accent}30 1px, transparent 1px), linear-gradient(90deg, ${project.accent}30 1px, transparent 1px)`,
                    backgroundSize: "24px 24px"
                  }}
                />
                <span className="text-5xl relative z-10 drop-shadow-lg">{project.emoji}</span>
                <span className="absolute bottom-2 right-3 font-mono text-[10px] opacity-40" style={{ color: project.accent }}>
                  {project.period}
                </span>
              </div>

              {/* Card body */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                    <h4 className="text-[11px] font-mono text-muted-foreground mt-0.5">{project.subtitle}</h4>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 flex items-center gap-1 ml-2 text-[10px] font-mono border px-2 py-1 rounded hover:bg-primary/10 transition-all"
                    style={{ color: project.accent, borderColor: `${project.accent}40` }}
                  >
                    <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>

                <p className="text-xs text-foreground/70 mb-4 flex-1 leading-relaxed">{project.desc}</p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-black/30 border"
                      style={{ borderColor: `${project.accent}25`, color: `${project.accent}cc` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
