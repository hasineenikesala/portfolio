import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Watch Sale E-Commerce",
    subtitle: "Full-Stack Developer (Individual Project)",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    desc: "Asynchronous end-to-end e-commerce platform linking modern customer storefront flows to secure backend tracking microservices. Built responsive reusable components with state-driven RESTful endpoints.",
    github: "https://github.com/hasineenikesala/watch-sale-system",
    period: "Apr 2026 – May 2026"
  },
  {
    title: "Blood Bank & Donor Management",
    subtitle: "Full-Stack Developer (Individual Project)",
    tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
    desc: "Comprehensive web dashboard tracking real-time blood bank inventory metrics, clinical profiles, and urgent donation center updates with relational schema optimization.",
    github: "https://github.com/hasineenikesala/blood-bank---donor-management-system",
    period: "Apr 2025 – May 2025"
  },
  {
    title: "Study Buddy App",
    subtitle: "Full-Stack Developer (Individual Project)",
    tech: ["TypeScript", "CSS3", "Software Layout Design"],
    desc: "Lightweight modular task organization environment engineered to foster real-time student group task allocations and milestone tracking with TypeScript structural typing.",
    github: "https://github.com/hasineenikesala/studybuddy-sri-lanka",
    period: "Dec 2025 – Jan 2026"
  },
  {
    title: "IoT Environment Control System",
    subtitle: "IoT & Integration Specialist (Group Project)",
    tech: ["Python", "Embedded Scripting", "Hardware Telemetry", "System Testing"],
    desc: "Integrated embedded monitoring pipeline utilizing network sensor arrays and wireless telemetry parsing layers with zero data packet drop rates.",
    github: "https://github.com/hasineenikesala/environment_control_system",
    period: "Jan 2026 – Mar 2026"
  },
  {
    title: "Game Lobby System",
    subtitle: "Individual Project",
    tech: ["Web Technologies", "Backend Architecture"],
    desc: "Dynamic game lobby management system enabling real-time player session coordination, matchmaking flows, and competitive room management.",
    github: "https://github.com/hasineenikesala/game_lobby",
    period: "2025"
  },
  {
    title: "Private University Web App",
    subtitle: "Individual Project",
    tech: ["Web Development", "UI/UX", "Full Stack"],
    desc: "Comprehensive private university web application featuring academic management, student portals, course enrollment systems, and administrative dashboards.",
    github: "https://github.com/hasineenikesala/privateuniproject",
    period: "2025"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Asymmetric background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-br from-[#0f172a] via-[#0d1f3c] to-[#0f172a]" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-bl from-[#1e293b]/60 to-[#0f172a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(56,189,248,0.05),transparent_70%)]" />
      </div>

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
          <p className="text-muted-foreground font-mono text-sm mt-2 ml-6">// 6 deployed projects · click to view source</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <GlassCard key={i} delay={i * 0.08} className="flex flex-col h-full group">
              <div className="mb-3">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-mono text-muted-foreground border border-white/10 px-2 py-0.5 rounded">{project.period}</span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-mono text-secondary hover:text-primary transition-colors border border-secondary/30 hover:border-primary/50 px-2 py-0.5 rounded hover:bg-primary/5"
                  >
                    <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    GitHub
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                <h4 className="text-xs font-mono text-muted-foreground mt-1">{project.subtitle}</h4>
              </div>

              <p className="text-sm text-foreground/75 mb-5 flex-grow leading-relaxed">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 text-xs font-mono rounded-full bg-secondary/10 border border-secondary/20 text-secondary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
