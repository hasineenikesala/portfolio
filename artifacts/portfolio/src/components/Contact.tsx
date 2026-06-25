import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { Send } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/hasineenikesala",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    )
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/hasini-nikesala",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    )
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/94762994193",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    )
  }
];

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <>
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(56,189,248,0.05),transparent_60%)]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 font-mono">
              <span className="text-primary mr-2">&gt;</span>
              <span className="text-glow-primary border-b-2 border-primary pb-1 inline-block">INIT_COMMS</span>
            </h2>
            <p className="text-muted-foreground font-mono text-xs ml-6">// Establish a secure connection</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* LEFT: info + social */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-mono text-sm text-primary mb-5 tracking-widest">// CONNECT WITH ME</h3>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span className="text-primary text-base">@</span>
                    <span>hasineenikesala@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span className="text-primary text-base">📍</span>
                    <span>Anuradhapura, Sri Lanka</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="font-mono text-xs text-primary/60 mb-4 tracking-widest">// SECURE CHANNELS</div>
                <div className="flex flex-col gap-3">
                  {socials.map((s, i) => (
                    <motion.a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      whileHover={{ x: 6 }}
                      className="flex items-center gap-4 px-5 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] hover:border-primary/50 hover:bg-primary/5 transition-all group"
                    >
                      <span className="text-primary group-hover:scale-110 transition-transform">{s.icon}</span>
                      <span className="font-mono text-sm text-foreground/80 group-hover:text-primary transition-colors">{s.name}</span>
                      <span className="ml-auto text-primary/30 group-hover:text-primary transition-colors">→</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT: form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <GlassCard className="!p-8">
                <AnimatePresence mode="wait">
                  {!success ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      <div className="font-mono text-xs text-primary border-b border-white/10 pb-4 mb-5 tracking-widest">
                        // TRANSMISSION_PIPELINE
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-mono text-muted-foreground tracking-wider">$ IDENTIFICATION</label>
                        <input
                          type="text"
                          required
                          className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 font-mono text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                          placeholder="Your name..."
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-mono text-muted-foreground tracking-wider">$ RETURN_COORDINATE</label>
                        <input
                          type="email"
                          required
                          className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 font-mono text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                          placeholder="Your email address..."
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-mono text-muted-foreground tracking-wider">$ PAYLOAD</label>
                        <textarea
                          required
                          rows={4}
                          className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 font-mono text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                          placeholder="Your message..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 rounded-lg font-mono font-bold text-sm text-primary-foreground transition-all duration-300 flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
                        style={{ background: "#38bdf8", boxShadow: "0 0 20px rgba(56,189,248,0.35)" }}
                      >
                        {loading ? (
                          <span className="flex items-center">
                            <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                            TRANSMITTING...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            TRANSMIT DATA <Send className="w-4 h-4" />
                          </span>
                        )}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mb-6"
                        style={{ boxShadow: "0 0 30px rgba(56,189,248,0.4)" }}>
                        <Send className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-primary font-mono mb-2"
                        style={{ textShadow: "0 0 15px rgba(56,189,248,0.7)" }}>
                        Message sent successfully!
                      </h3>
                      <p className="text-muted-foreground text-sm font-mono">Will respond shortly.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-[#060d1a] border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(56,189,248,0.07),transparent_60%)] pointer-events-none" />

        <div className="container mx-auto px-6 pt-16 pb-8 relative z-10">
          {/* Top section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 mb-12">
            {/* Left: "Let's work together" label */}
            <div className="flex flex-col items-center lg:items-start gap-3 max-w-xs text-center lg:text-left">
              <span className="font-mono text-sm italic text-primary"
                style={{ textShadow: "0 0 12px rgba(56,189,248,0.7)" }}>
                Let's work together
              </span>
              <div className="flex items-center gap-2">
                <div className="h-px w-10 bg-gradient-to-r from-primary to-transparent" />
                <div className="w-2 h-2 rotate-45 border border-primary bg-primary/30" />
              </div>
            </div>

            {/* Center: title block */}
            <div className="text-center flex-1">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-black font-mono uppercase tracking-widest text-white/90 mb-3"
              >
                THANK'S FOR SCROLLING!
              </motion.h2>
              <p className="text-primary font-mono text-sm tracking-widest"
                style={{ textShadow: "0 0 10px rgba(56,189,248,0.5)" }}>
                CONNECT WITH ME TO CREATE SOMETHING AMAZING
              </p>

              <div className="flex justify-center gap-4 mt-8">
                <a href="https://github.com/hasineenikesala" target="_blank" rel="noopener noreferrer"
                  className="px-5 py-2.5 border border-primary/40 text-primary font-mono text-xs rounded hover:bg-primary/10 transition-all hover:border-primary">
                  GitHub →
                </a>
                <a href="https://linkedin.com/in/hasini-nikesala" target="_blank" rel="noopener noreferrer"
                  className="px-5 py-2.5 border border-primary/40 text-primary font-mono text-xs rounded hover:bg-primary/10 transition-all hover:border-primary">
                  LinkedIn →
                </a>
                <a href="/Hasini_Nikesala_CV.pdf" download
                  className="px-5 py-2.5 bg-primary/10 border border-primary text-primary font-mono text-xs rounded hover:bg-primary hover:text-primary-foreground transition-all">
                  Download CV
                </a>
              </div>
            </div>

            {/* Right: Robot mascot — waving + bobbing */}
            <div className="flex items-end">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* Robot body SVG */}
                <svg viewBox="0 0 100 120" width="90" height="108" fill="none">
                  {/* Shadow ellipse */}
                  <ellipse cx="50" cy="116" rx="28" ry="4" fill="#38bdf8" opacity="0.15"/>
                  {/* Head */}
                  <rect x="20" y="16" width="60" height="46" rx="12" fill="#0d1f38" stroke="#38bdf8" strokeWidth="1.5"/>
                  {/* Head top accent */}
                  <rect x="20" y="16" width="60" height="5" rx="12" fill="#38bdf8" opacity="0.25"/>
                  {/* Eyes */}
                  <rect x="28" y="28" width="16" height="12" rx="4" fill="#38bdf8" opacity="0.95">
                    <animate attributeName="opacity" values="0.95;0.2;0.95" dur="2.8s" repeatCount="indefinite"/>
                  </rect>
                  <rect x="56" y="28" width="16" height="12" rx="4" fill="#38bdf8" opacity="0.95">
                    <animate attributeName="opacity" values="0.95;0.2;0.95" dur="2.8s" begin="0.5s" repeatCount="indefinite"/>
                  </rect>
                  {/* Pupils */}
                  <circle cx="36" cy="34" r="4" fill="#0d1f38"/>
                  <circle cx="64" cy="34" r="4" fill="#0d1f38"/>
                  {/* Mouth / smile */}
                  <path d="M33 50 Q50 60 67 50" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                  {/* Antenna */}
                  <line x1="50" y1="16" x2="50" y2="4" stroke="#38bdf8" strokeWidth="2"/>
                  <circle cx="50" cy="3" r="3.5" fill="#38bdf8">
                    <animate attributeName="r" values="3.5;5;3.5" dur="1.3s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="1;0.3;1" dur="1.3s" repeatCount="indefinite"/>
                  </circle>
                  {/* Body */}
                  <rect x="24" y="64" width="52" height="38" rx="10" fill="#0d1f38" stroke="#38bdf8" strokeWidth="1.2"/>
                  {/* Body panel */}
                  <rect x="34" y="72" width="32" height="10" rx="5" fill="#38bdf8" opacity="0.12"/>
                  <rect x="34" y="72" width="10" height="10" rx="5" fill="#38bdf8" opacity="0.3"/>
                  {/* Body dots */}
                  <circle cx="38" cy="90" r="4" fill="#38bdf8" opacity="0.5"/>
                  <circle cx="50" cy="90" r="4" fill="#38bdf8" opacity="0.3"/>
                  <circle cx="62" cy="90" r="4" fill="#38bdf8" opacity="0.5"/>

                  {/* LEFT arm waving */}
                  <motion.g
                    style={{ transformOrigin: "24px 72px" }}
                    animate={{ rotate: [0, -25, 0, -20, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <rect x="8" y="67" width="16" height="10" rx="5" fill="#0d1f38" stroke="#38bdf8" strokeWidth="1"/>
                    <rect x="2" y="74" width="10" height="8" rx="4" fill="#0d1f38" stroke="#38bdf8" strokeWidth="1"/>
                  </motion.g>

                  {/* RIGHT arm */}
                  <rect x="76" y="67" width="16" height="10" rx="5" fill="#0d1f38" stroke="#38bdf8" strokeWidth="1"/>
                  <rect x="88" y="74" width="10" height="8" rx="4" fill="#0d1f38" stroke="#38bdf8" strokeWidth="1"/>

                  {/* Light traces */}
                  <line x1="24" y1="82" x2="10" y2="82" stroke="#38bdf8" strokeWidth="1" opacity="0.3" strokeDasharray="2 2"/>
                  <line x1="76" y1="82" x2="90" y2="82" stroke="#38bdf8" strokeWidth="1" opacity="0.3" strokeDasharray="2 2"/>
                </svg>
              </motion.div>
            </div>
          </div>

          {/* Copyright bottom */}
          <div className="border-t border-white/5 pt-6 text-center">
            <p className="font-mono text-xs text-muted-foreground">
              © 2026 Hasini Nikesala. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
