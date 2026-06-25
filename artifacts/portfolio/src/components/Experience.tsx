import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { Briefcase, Award, Trophy } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-primary mr-2">&gt;</span>
            <span className="text-glow-primary border-b-2 border-primary pb-1 inline-block">RUNTIME_LOGS</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Experience */}
          <GlassCard delay={0.1}>
            <h3 className="text-xl font-bold mb-6 text-secondary flex items-center">
              <span className="bg-secondary/20 p-2 rounded-md mr-3">
                <Briefcase className="w-5 h-5" />
              </span>
              Experience
            </h3>
            
            <div className="relative pl-6 border-l border-white/10 space-y-8">
              <div className="relative">
                <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-primary box-glow-primary" />
                <h4 className="text-lg font-bold text-foreground">Web Developer Intern</h4>
                <p className="text-secondary font-mono text-sm mb-2">Devora (Pvt) Ltd | Nov 2025 – Feb 2026</p>
                <p className="text-sm text-muted-foreground">
                  Responsive web modules, database schema optimization, cross-browser testing.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Hackathons & Leadership */}
          <GlassCard delay={0.2}>
            <h3 className="text-xl font-bold mb-6 text-secondary flex items-center">
              <span className="bg-secondary/20 p-2 rounded-md mr-3">
                <Trophy className="w-5 h-5" />
              </span>
              Leadership & Events
            </h3>
            
            <ul className="space-y-4 font-mono text-sm text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">✓</span>
                <span>Code Sprint 11 Participant (IIT University) — Team ApexForge, TenderAI project</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">✓</span>
                <span>Bitcode V5.0 Competitor (RUSL) — Advanced algorithmic problem solving</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">✓</span>
                <span>Event Coordinator — BITCODE (RUSL)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">✓</span>
                <span>Committee Member — BITSA (Computer Science & Information Systems Association)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">✓</span>
                <span>Active Committee Member — Gavel Club (RUSL)</span>
              </li>
            </ul>
          </GlassCard>
        </div>

        {/* Certifications */}
        <GlassCard delay={0.3} className="w-full">
          <h3 className="text-xl font-bold mb-6 text-secondary flex items-center">
            <span className="bg-secondary/20 p-2 rounded-md mr-3">
              <Award className="w-5 h-5" />
            </span>
            Certifications Modules
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded border border-white/5 bg-black/20 font-mono text-sm">
              <div className="text-primary mb-1">MERN Stack Development</div>
              <div className="text-xs text-muted-foreground">Institute of Digital Engineering Technology</div>
            </div>
            <div className="p-4 rounded border border-white/5 bg-black/20 font-mono text-sm">
              <div className="text-primary mb-1">Web Dev & Python Engineering</div>
              <div className="text-xs text-muted-foreground">University of Moratuwa (2025)</div>
            </div>
            <div className="p-4 rounded border border-white/5 bg-black/20 font-mono text-sm">
              <div className="text-primary mb-1">AI/ML Engineer (Stage 1 & 2)</div>
              <div className="text-xs text-muted-foreground">SLIIT (2025)</div>
            </div>
            <div className="p-4 rounded border border-white/5 bg-black/20 font-mono text-sm">
              <div className="text-primary mb-1">Cybersecurity & Ethical Hacking</div>
              <div className="text-xs text-muted-foreground">E-Nenasala Peradeniya</div>
            </div>
            <div className="p-4 rounded border border-secondary/30 bg-secondary/5 font-mono text-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-secondary text-[10px] text-secondary-foreground px-2 py-0.5 rounded-bl font-bold">IN PROGRESS</div>
              <div className="text-secondary mb-1">Cloud Operations & AWS</div>
              <div className="text-xs text-muted-foreground">Institute of Digital Engineering Technology</div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
