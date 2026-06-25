import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "TenderAI",
    subtitle: "AI-Powered Government Tender Intelligence Platform",
    tech: ["React", "Next.js", "FastAPI", "PostgreSQL", "AWS", "Generative AI"],
    desc: "Co-architected AI-driven B2B SaaS for automated public tender discovery and regulatory compliance for local SMEs."
  },
  {
    title: "Watch Sale E-Commerce",
    subtitle: "Full-stack e-commerce platform",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    desc: "Asynchronous end-to-end e-commerce linking storefront to secure backend tracking microservices."
  },
  {
    title: "Blood Bank & Donor Management",
    subtitle: "Public health dashboard",
    tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
    desc: "Real-time blood bank inventory metrics, clinical profiles, and urgent donation center updates."
  },
  {
    title: "IoT Environment Control System",
    subtitle: "Embedded monitoring pipeline",
    tech: ["Python", "Hardware Telemetry"],
    desc: "Network sensor arrays and wireless telemetry parsing with zero packet-drop rates."
  },
  {
    title: "Study Buddy App",
    subtitle: "Student task organization tool",
    tech: ["TypeScript", "CSS3"],
    desc: "Modular environment for student group task allocations and milestone tracking."
  },
  {
    title: "Techzone Gadget Store",
    subtitle: "Premium electronic e-commerce interface",
    tech: ["Frontend UI", "Filtering Algorithms"],
    desc: "Premium electronic e-commerce interface with complex product filter views."
  },
  {
    title: "Home Budget Buddy",
    subtitle: "Personal finance tracking",
    tech: ["Algorithms", "Data Tracking"],
    desc: "Algorithmic personal finance balance tracking tool."
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
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
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <GlassCard key={i} delay={i * 0.1} className="flex flex-col h-full">
              <div className="mb-4">
                <FolderGit2 className="w-10 h-10 text-secondary mb-4 opacity-70 group-hover:opacity-100 group-hover:text-glow-secondary transition-all" />
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                <h4 className="text-sm font-mono text-muted-foreground mt-1">{project.subtitle}</h4>
              </div>
              
              <p className="text-sm text-foreground/80 mb-6 flex-grow leading-relaxed">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, idx) => (
                  <span 
                    key={idx} 
                    className="px-2 py-1 text-xs font-mono rounded bg-black/30 border border-white/5 text-secondary"
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
