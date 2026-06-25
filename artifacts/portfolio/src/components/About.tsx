import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { Mail, Phone, MapPin, GraduationCap, Building } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-primary mr-2">&gt;</span>
            <span className="text-glow-primary border-b-2 border-primary pb-1 inline-block">SYS.INFO</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <GlassCard delay={0.1}>
            <h3 className="text-xl font-bold mb-6 text-secondary flex items-center">
              <span className="bg-secondary/20 p-2 rounded-md mr-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </span>
              Contact Nodes
            </h3>
            
            <ul className="space-y-4 font-mono text-sm md:text-base">
              <li className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors group">
                <Mail className="w-5 h-5 text-primary group-hover:text-glow-primary" />
                <span>mgt2022267@mgt.rjt.ac.lk</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors group">
                <Mail className="w-5 h-5 text-primary group-hover:text-glow-primary" />
                <span>hasineenikesala@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors group">
                <Phone className="w-5 h-5 text-primary group-hover:text-glow-primary" />
                <span>+94 76 299 4193</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors group">
                <Building className="w-5 h-5 text-primary group-hover:text-glow-primary" />
                <span>Rajarata University of Sri Lanka (RUSL)</span>
              </li>
            </ul>
          </GlassCard>

          <GlassCard delay={0.2}>
            <h3 className="text-xl font-bold mb-6 text-secondary flex items-center">
              <span className="bg-secondary/20 p-2 rounded-md mr-3">
                <GraduationCap className="w-5 h-5" />
              </span>
              Education Core
            </h3>
            
            <div className="relative pl-6 border-l border-white/10 space-y-8">
              <div className="relative">
                <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-primary box-glow-primary" />
                <h4 className="text-lg font-bold text-foreground">BSc Honours in Information Systems</h4>
                <p className="text-secondary font-mono text-sm mb-2">Rajarata University of Sri Lanka | Feb 2023 – Present</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-2 py-1 text-xs rounded bg-card border border-white/5 font-mono">GPA: 3.49/4.00</span>
                  <span className="px-2 py-1 text-xs rounded bg-card border border-white/5 font-mono text-primary">Expected 2027</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Relevant coursework: Software Engineering, OOP, DBMS, DSA, Web Development, System Analysis
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
