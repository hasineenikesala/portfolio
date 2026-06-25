import { motion } from "framer-motion";
import { NeonRing } from "./NeonRing";
import {
  Code2, Database, Globe, Server, Terminal, GitBranch,
  Cloud, Layers, Cpu, FileCode, Braces, Box,
  Coffee, Webhook, Circle, Hash, Monitor, Settings,
  Wrench, Network, Shield
} from "lucide-react";

const categories = [
  {
    label: "Programming Languages",
    skills: [
      { name: "Java", icon: Coffee, color: "#f89820" },
      { name: "PHP", icon: FileCode, color: "#777bb4" },
      { name: "Python", icon: Terminal, color: "#3776ab" },
      { name: "TypeScript", icon: Braces, color: "#3178c6" },
      { name: "JavaScript", icon: Code2, color: "#f7df1e" },
      { name: "SQL", icon: Database, color: "#00df9a" },
      { name: "HTML5", icon: Globe, color: "#e34f26" },
      { name: "CSS3", icon: Layers, color: "#1572b6" },
    ]
  },
  {
    label: "Frontend Engineering",
    skills: [
      { name: "React.js", icon: Circle, color: "#61dafb" },
      { name: "Angular", icon: Circle, color: "#dd0031" },
      { name: "Tailwind CSS", icon: Webhook, color: "#38bdf8" },
      { name: "Bootstrap", icon: Layers, color: "#7952b3" },
      { name: "JavaScript ES6+", icon: Code2, color: "#f7df1e" },
      { name: "DOM", icon: Monitor, color: "#00df9a" },
    ]
  },
  {
    label: "Backend & API Engineering",
    skills: [
      { name: "Node.js", icon: Server, color: "#339933" },
      { name: "Express.js", icon: Box, color: "#f8fafc" },
      { name: "Spring Boot", icon: Cpu, color: "#6db33f" },
      { name: "REST API", icon: Network, color: "#38bdf8" },
      { name: "MVC", icon: Settings, color: "#00df9a" },
    ]
  },
  {
    label: "Databases & ORM",
    skills: [
      { name: "MySQL", icon: Database, color: "#4479a1" },
      { name: "MongoDB", icon: Hash, color: "#47a248" },
      { name: "Hibernate", icon: Database, color: "#59666c" },
      { name: "JPA", icon: Database, color: "#00df9a" },
      { name: "NoSQL", icon: Hash, color: "#38bdf8" },
    ]
  },
  {
    label: "Tools & Platforms",
    skills: [
      { name: "Git", icon: GitBranch, color: "#f05032" },
      { name: "GitHub", icon: GitBranch, color: "#f8fafc" },
      { name: "Postman", icon: Network, color: "#ff6c37" },
      { name: "VS Code", icon: Monitor, color: "#007acc" },
      { name: "IntelliJ", icon: Wrench, color: "#fe315d" },
      { name: "AWS", icon: Cloud, color: "#ff9900" },
      { name: "Linux OS", icon: Terminal, color: "#fcc624" },
      { name: "Maltego", icon: Shield, color: "#00df9a" },
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-primary mr-2">&gt;</span>
            <span className="text-glow-primary border-b-2 border-primary pb-1 inline-block">TECH.STACK</span>
          </h2>
        </motion.div>

        <div className="space-y-16">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-xs font-mono text-secondary border border-secondary/30 px-3 py-1 rounded-full bg-secondary/5">
                  {String(catIdx + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base md:text-lg font-mono font-bold text-foreground/80">{cat.label}</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
              </div>

              <div className="flex flex-wrap gap-6 md:gap-10">
                {cat.skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ duration: 0.35, delay: index * 0.04 }}
                      className="flex flex-col items-center group"
                    >
                      <NeonRing className="w-14 h-14 md:w-18 md:h-18 mb-3 transition-transform group-hover:scale-110">
                        <Icon
                          className="w-7 h-7 md:w-8 md:h-8 transition-all duration-300 group-hover:scale-110"
                          style={{ color: skill.color }}
                        />
                      </NeonRing>
                      <span className="font-mono text-[10px] md:text-xs text-muted-foreground group-hover:text-primary transition-colors text-center max-w-[70px]">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
