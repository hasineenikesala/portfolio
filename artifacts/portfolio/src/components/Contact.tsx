import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { Send, Terminal } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    handle: "@hasineenikesala",
    url: "https://github.com/hasineenikesala",
    color: "#f8fafc",
    bg: "rgba(248,250,252,0.08)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    )
  },
  {
    name: "LinkedIn",
    handle: "hasini-nikesala",
    url: "https://linkedin.com/in/hasini-nikesala",
    color: "#0a66c2",
    bg: "rgba(10,102,194,0.12)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    )
  },
  {
    name: "WhatsApp",
    handle: "+94 76 299 4193",
    url: "https://wa.me/94762994193",
    color: "#25d366",
    bg: "rgba(37,211,102,0.1)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    )
  },
  {
    name: "Facebook",
    handle: "Hasini Nikesala",
    url: "https://facebook.com",
    color: "#1877f2",
    bg: "rgba(24,119,242,0.1)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
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
        {/* Paper-texture-like background overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(56,189,248,0.06),transparent_60%)]" />
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2338bdf8' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
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
              <span className="text-glow-primary border-b-2 border-primary pb-1 inline-block">INIT_COMMS</span>
            </h2>
            <p className="text-muted-foreground font-mono text-sm mt-2 ml-6">// Connect With Me</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Social cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-mono text-sm text-primary mb-6">// SOCIAL_VECTORS</h3>
              <div className="grid grid-cols-2 gap-4">
                {socials.map((s, i) => (
                  <motion.a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ y: -5, scale: 1.03 }}
                    className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl border border-white/10 backdrop-blur-sm transition-all group"
                    style={{ background: s.bg }}
                  >
                    <div style={{ color: s.color }} className="transition-transform duration-300 group-hover:scale-110">
                      {s.icon}
                    </div>
                    <div className="text-center">
                      <div className="font-mono font-bold text-sm text-foreground">{s.name}</div>
                      <div className="font-mono text-[10px] text-muted-foreground mt-0.5">{s.handle}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-lg border border-white/5 bg-black/20 font-mono text-xs space-y-1.5">
                <div className="text-primary mb-2">// DIRECT_CONTACT</div>
                <div className="text-muted-foreground"><span className="text-primary">email</span> → hasineenikesala@gmail.com</div>
                <div className="text-muted-foreground"><span className="text-primary">phone</span> → +94 76 299 4193</div>
                <div className="text-muted-foreground"><span className="text-primary">location</span> → Anuradhapura, Sri Lanka</div>
              </div>
            </motion.div>

            {/* Right: Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <GlassCard className="!p-8">
                <div className="flex items-center mb-6 font-mono text-sm text-primary pb-4 border-b border-white/10">
                  <Terminal className="w-4 h-4 mr-2" />
                  <span>SEND_MESSAGE // ROOT@hasini</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-mono text-muted-foreground">$ YOUR_NAME</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-black/50 border border-white/10 rounded p-2.5 font-mono text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-mono text-muted-foreground">$ YOUR_EMAIL</label>
                      <input
                        type="email"
                        required
                        className="w-full bg-black/50 border border-white/10 rounded p-2.5 font-mono text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono text-muted-foreground">$ SUBJECT</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-black/50 border border-white/10 rounded p-2.5 font-mono text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="Project collaboration..."
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono text-muted-foreground">$ YOUR_MESSAGE</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full bg-black/50 border border-white/10 rounded p-2.5 font-mono text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading || success}
                    className="w-full py-3.5 bg-primary/10 border border-primary text-primary font-mono font-bold rounded hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed group text-sm"
                    style={{ boxShadow: "0 0 15px rgba(56,189,248,0.15)" }}
                  >
                    {loading ? (
                      <span className="flex items-center">
                        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                        TRANSMITTING...
                      </span>
                    ) : success ? (
                      <span>TRANSMISSION_COMPLETE ✓</span>
                    ) : (
                      <span className="flex items-center">
                        EXECUTE_SEND <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </button>
                </form>
              </GlassCard>

              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm rounded-xl border border-secondary"
                    style={{ boxShadow: "0 0 40px rgba(0,223,154,0.3)" }}
                  >
                    <div className="text-center font-mono space-y-4 p-8">
                      <div className="w-16 h-16 mx-auto rounded-full bg-secondary/20 border-2 border-secondary flex items-center justify-center mb-4">
                        <Send className="w-8 h-8 text-secondary" />
                      </div>
                      <h3 className="text-2xl font-bold text-secondary" style={{ textShadow: "0 0 20px rgba(0,223,154,0.8)" }}>
                        Message sent successfully!
                      </h3>
                      <p className="text-muted-foreground text-sm">Connection established. Will respond shortly.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-[#060d1a] border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(56,189,248,0.08),transparent_60%)] pointer-events-none" />

        <div className="container mx-auto px-6 pt-16 pb-10 relative z-10">
          {/* Top row: "Let's work together" label + title */}
          <div className="text-center relative mb-10">
            {/* Neon cursive left label */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-3">
              <div className="flex flex-col items-start">
                <span
                  className="font-mono text-sm italic text-primary"
                  style={{ textShadow: "0 0 12px rgba(56,189,248,0.8)", fontStyle: "italic" }}
                >
                  Let's work together
                </span>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-16 h-px bg-gradient-to-r from-primary to-transparent" />
                  <svg width="10" height="10" viewBox="0 0 10 10" className="text-primary fill-current">
                    <polygon points="0,5 5,0 10,5 5,10" />
                  </svg>
                </div>
              </div>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black font-mono uppercase tracking-widest text-white/90 mb-3"
            >
              THANK'S FOR SCROLLING!
            </motion.h2>
            <p className="text-primary font-mono text-sm md:text-base tracking-widest" style={{ textShadow: "0 0 10px rgba(56,189,248,0.5)" }}>
              CONNECT WITH ME TO CREATE SOMETHING AMAZING
            </p>
          </div>

          {/* CTA links */}
          <div className="flex justify-center gap-4 mb-12">
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

          {/* Bottom row: copyright + robot */}
          <div className="flex items-end justify-between border-t border-white/5 pt-6">
            <p className="font-mono text-xs text-muted-foreground">
              © 2026 Hasini Nikesala. All Rights Reserved.
            </p>

            {/* Robot mascot — bottom right corner */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <svg viewBox="0 0 90 100" width="72" height="80" fill="none">
                {/* Orbit ring */}
                <ellipse cx="45" cy="95" rx="30" ry="5" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                {/* Head */}
                <rect x="18" y="14" width="54" height="42" rx="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5"/>
                {/* Top accent */}
                <rect x="18" y="14" width="54" height="4" rx="10" fill="#38bdf8" opacity="0.3"/>
                {/* Eyes */}
                <rect x="26" y="26" width="14" height="10" rx="3" fill="#38bdf8" opacity="0.9">
                  <animate attributeName="opacity" values="0.9;0.2;0.9" dur="2.5s" repeatCount="indefinite"/>
                </rect>
                <rect x="50" y="26" width="14" height="10" rx="3" fill="#38bdf8" opacity="0.9">
                  <animate attributeName="opacity" values="0.9;0.2;0.9" dur="2.5s" begin="0.4s" repeatCount="indefinite"/>
                </rect>
                {/* Pupils */}
                <circle cx="33" cy="31" r="3" fill="#0f172a"/>
                <circle cx="57" cy="31" r="3" fill="#0f172a"/>
                {/* Mouth */}
                <path d="M30 46 Q45 54 60 46" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" fill="none"/>
                {/* Antenna */}
                <line x1="45" y1="14" x2="45" y2="4" stroke="#38bdf8" strokeWidth="1.5"/>
                <circle cx="45" cy="3" r="3" fill="#38bdf8">
                  <animate attributeName="r" values="3;4.5;3" dur="1.2s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="1;0.4;1" dur="1.2s" repeatCount="indefinite"/>
                </circle>
                {/* Body */}
                <rect x="22" y="58" width="46" height="30" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1"/>
                {/* Body panel */}
                <rect x="30" y="64" width="30" height="8" rx="4" fill="#38bdf8" opacity="0.15"/>
                <circle cx="35" cy="79" r="4" fill="#38bdf8" opacity="0.5"/>
                <circle cx="45" cy="79" r="4" fill="#38bdf8" opacity="0.3"/>
                <circle cx="55" cy="79" r="4" fill="#38bdf8" opacity="0.5"/>
                {/* Light traces */}
                <line x1="22" y1="72" x2="10" y2="72" stroke="#38bdf8" strokeWidth="1" opacity="0.4" strokeDasharray="2 2"/>
                <line x1="68" y1="72" x2="80" y2="72" stroke="#38bdf8" strokeWidth="1" opacity="0.4" strokeDasharray="2 2"/>
              </svg>
            </motion.div>
          </div>
        </div>
      </footer>
    </>
  );
}
