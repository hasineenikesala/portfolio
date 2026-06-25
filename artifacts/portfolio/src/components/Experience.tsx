import { motion } from "framer-motion";

const certs = [
  { title: "MERN Stack Development", org: "IDET" },
  { title: "Web Dev & Python", org: "University of Moratuwa (2025)" },
  { title: "Cybersecurity & Ethical Hacking", org: "E-Nenasala" },
  { title: "AI/ML Engineer (Stage 1 & 2)", org: "SLIIT (2025)" },
  { title: "Cloud Operations & AWS", org: "IDET", inProgress: true },
];

const hackathons = [
  { title: "Code Sprint 11", org: "IIT University", detail: "Team ApexForge — TenderAI" },
  { title: "Bitcode V5.0", org: "RUSL", detail: "Advanced algorithmic problem-solving" },
];

const leadership = [
  { title: "Coordinator", org: "BITCODE Event", detail: "Rajarata University of Sri Lanka" },
  { title: "Committee Member", org: "BITSA", detail: "Computer Science & IS Association" },
  { title: "Committee Member", org: "Gavel Club", detail: "Rajarata University of Sri Lanka" },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_70%_30%,rgba(56,189,248,0.04),transparent_60%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-mono">
            <span className="text-primary mr-2">&gt;</span>
            <span className="text-glow-primary border-b-2 border-primary pb-1 inline-block">HIGHLIGHTS</span>
          </h2>
          <p className="text-muted-foreground font-mono text-xs mt-2 ml-6">// certifications · hackathons · leadership</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* CERTIFICATIONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-7 relative overflow-hidden"
            style={{ boxShadow: "0 4px 40px rgba(0,0,0,0.3)" }}
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />

            <div className="flex items-center gap-3 mb-7">
              <div className="w-9 h-9 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-primary" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 15l-2 5-4-2 5-12 5 12-4 2z"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <h3 className="font-mono font-bold text-sm text-foreground/90 tracking-widest uppercase">Certifications</h3>
            </div>

            <ul className="space-y-4">
              {certs.map((c, i) => (
                <motion.li
                  key={c.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"
                    style={{ boxShadow: "0 0 6px rgba(56,189,248,0.8)" }} />
                  <div>
                    <div className="text-sm text-foreground/80 leading-snug">{c.title}</div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] font-mono text-primary/60">{c.org}</span>
                      {c.inProgress && (
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded border border-primary/40 text-primary bg-primary/10">IN PROGRESS</span>
                      )}
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* HACKATHONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-7 relative overflow-hidden"
            style={{ boxShadow: "0 4px 40px rgba(0,0,0,0.3)" }}
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />

            <div className="flex items-center gap-3 mb-7">
              <div className="w-9 h-9 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-primary" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <h3 className="font-mono font-bold text-sm text-foreground/90 tracking-widest uppercase">Hackathons</h3>
            </div>

            <ul className="space-y-6">
              {hackathons.map((h, i) => (
                <motion.li
                  key={h.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"
                    style={{ boxShadow: "0 0 6px rgba(56,189,248,0.8)" }} />
                  <div>
                    <div className="text-sm font-bold text-foreground/90">{h.title}</div>
                    <div className="text-[11px] font-mono text-primary/70 mt-0.5">{h.org}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">{h.detail}</div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* LEADERSHIP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-7 relative overflow-hidden"
            style={{ boxShadow: "0 4px 40px rgba(0,0,0,0.3)" }}
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />

            <div className="flex items-center gap-3 mb-7">
              <div className="w-9 h-9 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-primary" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="font-mono font-bold text-sm text-foreground/90 tracking-widest uppercase">Leadership</h3>
            </div>

            <ul className="space-y-6">
              {leadership.map((l, i) => (
                <motion.li
                  key={l.title + l.org}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"
                    style={{ boxShadow: "0 0 6px rgba(56,189,248,0.8)" }} />
                  <div>
                    <div className="text-sm font-bold text-foreground/90">{l.title}</div>
                    <div className="text-[11px] font-mono text-primary/70 mt-0.5">{l.org}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">{l.detail}</div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
