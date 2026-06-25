import { motion } from "framer-motion";
import { NeonRing } from "./NeonRing";
import {
  Code2, Database, Globe, Server, Terminal, GitBranch,
  Cloud, Layers, Cpu, FileCode, Braces, Box,
  Coffee, Webhook, Triangle, Circle, Pentagon, Hash
} from "lucide-react";

const skills = [
  { name: "Java", icon: Coffee, color: "#f89820" },
  { name: "PHP", icon: FileCode, color: "#777bb4" },
  { name: "Python", icon: Terminal, color: "#3776ab" },
  { name: "TypeScript", icon: Braces, color: "#3178c6" },
  { name: "JavaScript", icon: Code2, color: "#f7df1e" },
  { name: "SQL", icon: Database, color: "#00df9a" },
  { name: "HTML5", icon: Globe, color: "#e34f26" },
  { name: "CSS3", icon: Layers, color: "#1572b6" },
  { name: "React.js", icon: Circle, color: "#61dafb" },
  { name: "Angular", icon: Triangle, color: "#dd0031" },
  { name: "Tailwind CSS", icon: Webhook, color: "#38bdf8" },
  { name: "Node.js", icon: Server, color: "#339933" },
  { name: "Express.js", icon: Box, color: "#f8fafc" },
  { name: "Spring Boot", icon: Cpu, color: "#6db33f" },
  { name: "MySQL", icon: Database, color: "#4479a1" },
  { name: "MongoDB", icon: Hash, color: "#47a248" },
  { name: "Git", icon: GitBranch, color: "#f05032" },
  { name: "GitHub", icon: Pentagon, color: "#f8fafc" },
  { name: "AWS", icon: Cloud, color: "#ff9900" },
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

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col items-center group"
              >
                <NeonRing className="w-16 h-16 md:w-20 md:h-20 mb-4 transition-transform group-hover:scale-110">
                  <Icon
                    className="w-8 h-8 md:w-10 md:h-10 transition-colors"
                    style={{ color: skill.color }}
                  />
                </NeonRing>
                <span className="font-mono text-xs md:text-sm text-muted-foreground group-hover:text-primary transition-colors text-center">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
