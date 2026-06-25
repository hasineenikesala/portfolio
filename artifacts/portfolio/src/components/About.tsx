import { motion } from "framer-motion";
import { Download } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-primary mr-2">&gt;</span>
            <span className="text-glow-primary border-b-2 border-primary pb-1 inline-block">SYS.INFO</span>
          </h2>
        </motion.div>

        {/* White/light card floating over dark background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 p-10 relative overflow-hidden"
          style={{ boxShadow: "0 8px 60px rgba(0,0,0,0.4), 0 0 40px rgba(56,189,248,0.06)" }}
        >
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />

          {/* About Me header */}
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">About Me</h3>

          {/* Summary */}
          <p className="text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto mb-10 text-sm md:text-base">
            Enthusiastic Information Systems undergraduate with practical experience in full-stack web development, software design, and database management. Skilled in modern web technologies including React.js, Node.js, Express.js, Spring Boot, PHP, MySQL, and MongoDB. Developed multiple academic and personal projects demonstrating strong problem-solving, teamwork, and software development skills.
          </p>

          {/* 3-column data blocks */}
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {[
              {
                label: "EDUCATION",
                title: "BSc in Information Systems",
                sub: "Rajarata University of Sri Lanka"
              },
              {
                label: "ACADEMIC STATUS",
                title: "Year 3 of 4",
                sub: "GPA: 3.49/4.0 · Exp. 2027"
              },
              {
                label: "EXPERIENCE",
                title: "Web Developer Intern",
                sub: "Devora (Pvt) Ltd. (Nov 2025 – Feb 2026)"
              }
            ].map((block, i) => (
              <motion.div
                key={block.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-white/10 bg-black/20 p-5 text-center hover:border-primary/40 transition-colors"
              >
                <div className="text-primary text-[10px] font-mono font-bold tracking-widest mb-3 uppercase">{block.label}</div>
                <div className="text-foreground font-bold text-sm mb-1">{block.title}</div>
                <div className="text-muted-foreground text-xs">{block.sub}</div>
              </motion.div>
            ))}
          </div>

          {/* Get My CV CTA */}
          <div className="flex justify-center">
            <a
              href="/Hasini_Nikesala_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-foreground text-background font-bold text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 active:scale-95"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
            >
              <Download className="w-4 h-4" />
              Get My CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
