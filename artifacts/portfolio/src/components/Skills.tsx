import { motion } from "framer-motion";
import { NeonRing } from "./NeonRing";
import {
  Code2, Database, Globe, Server, Terminal, GitBranch,
  Cloud, Layers, Cpu, FileCode, Braces, Box,
  Coffee, Webhook, Circle, Hash, Monitor, Settings,
  Wrench, Network, Shield, Palette, Layout, Figma
} from "lucide-react";

const categories = [
  {
    label: "Programming Languages",
    color: "#38bdf8",
    skills: [
      { name: "Java", icon: Coffee, color: "#f89820" },
      { name: "PHP", icon: FileCode, color: "#777bb4" },
      { name: "Python", icon: Terminal, color: "#3776ab" },
      { name: "TypeScript", icon: Braces, color: "#3178c6" },
      { name: "JavaScript", icon: Code2, color: "#f7df1e" },
      { name: "SQL", icon: Database, color: "#38bdf8" },
      { name: "HTML5", icon: Globe, color: "#e34f26" },
      { name: "CSS3", icon: Layers, color: "#1572b6" },
    ]
  },
  {
    label: "Web Development",
    color: "#60d9ff",
    skills: [
      { name: "React.js", icon: Circle, color: "#61dafb" },
      { name: "Angular", icon: Circle, color: "#dd0031" },
      { name: "HTML5", icon: Globe, color: "#e34f26" },
      { name: "CSS3", icon: Layers, color: "#1572b6" },
      { name: "Tailwind", icon: Webhook, color: "#38bdf8" },
      { name: "JavaScript", icon: Code2, color: "#f7df1e" },
      { name: "Bootstrap", icon: Layers, color: "#7952b3" },
    ]
  },
  {
    label: "Backend & Frameworks",
    color: "#38bdf8",
    skills: [
      { name: "Node.js", icon: Server, color: "#339933" },
      { name: "Express.js", icon: Box, color: "#f8fafc" },
      { name: "Spring Boot", icon: Cpu, color: "#6db33f" },
      { name: "REST APIs", icon: Network, color: "#38bdf8" },
      { name: "MVC", icon: Settings, color: "#60d9ff" },
      { name: "Hibernate", icon: Database, color: "#59666c" },
      { name: "JPA", icon: Database, color: "#38bdf8" },
    ]
  },
  {
    label: "Databases",
    color: "#60d9ff",
    skills: [
      { name: "MySQL", icon: Database, color: "#4479a1" },
      { name: "MongoDB", icon: Hash, color: "#47a248" },
    ]
  },
  {
    label: "UI/UX & Design",
    color: "#38bdf8",
    skills: [
      { name: "Figma", icon: Figma, color: "#f24e1e" },
      { name: "Illustrator", icon: Palette, color: "#ff9a00" },
      { name: "Photoshop", icon: Layout, color: "#31a8ff" },
    ]
  },
  {
    label: "IDEs & Tools",
    color: "#60d9ff",
    skills: [
      { name: "Git", icon: GitBranch, color: "#f05032" },
      { name: "GitHub", icon: GitBranch, color: "#f8fafc" },
      { name: "VS Code", icon: Monitor, color: "#007acc" },
      { name: "Postman", icon: Network, color: "#ff6c37" },
      { name: "IntelliJ", icon: Wrench, color: "#fe315d" },
      { name: ".NET", icon: Box, color: "#512bd4" },
      { name: "Linux OS", icon: Terminal, color: "#fcc624" },
      { name: "Maltego", icon: Shield, color: "#38bdf8" },
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-black/20 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-primary mr-2">&gt;</span>
            <span className="text-glow-primary border-b-2 border-primary pb-1 inline-block">TECH.ARSENAL</span>
          </h2>
          <p className="text-muted-foreground font-mono text-sm mt-2 ml-6">// 6 categories · {categories.reduce((a, c) => a + c.skills.length, 0)} technologies</p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
              className="glass-panel rounded-xl p-6 relative overflow-hidden"
              style={{ borderColor: `${cat.color}20` }}
            >
              {/* Card top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg, transparent, ${cat.color}, transparent)` }} />

              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-mono border px-2 py-0.5 rounded-full" style={{ color: cat.color, borderColor: `${cat.color}40`, backgroundColor: `${cat.color}10` }}>
                  {String(catIdx + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-mono font-bold text-foreground/80">{cat.label}</h3>
              </div>

              <div className="flex flex-wrap gap-5">
                {cat.skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.04 }}
                      className="flex flex-col items-center group cursor-default"
                    >
                      <NeonRing className="w-12 h-12 mb-2 transition-transform group-hover:scale-110">
                        <Icon
                          className="w-6 h-6 transition-all duration-300"
                          style={{ color: skill.color }}
                        />
                      </NeonRing>
                      <span className="font-mono text-[9px] text-muted-foreground group-hover:text-primary transition-colors text-center max-w-[56px] leading-tight">
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
