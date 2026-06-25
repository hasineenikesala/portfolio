import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { Send, Terminal } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/hasineenikesala",
    color: "#f8fafc",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    )
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/hasini-nikesala",
    color: "#0a66c2",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    )
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/94762994193",
    color: "#25d366",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    )
  },
  {
    name: "Facebook",
    url: "https://facebook.com",
    color: "#1877f2",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
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
      <section id="contact" className="py-24 relative">
        <div className="container mx-auto px-6">
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
            <p className="text-muted-foreground font-mono text-sm mt-2 ml-6">// Awaiting input. Establish a secure connection.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left: Social links */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="font-mono text-lg text-secondary font-bold mb-6">// SOCIAL_VECTORS</h3>
              <div className="grid grid-cols-2 gap-4">
                {socials.map((social, i) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl border border-white/10 bg-card/40 backdrop-blur-sm hover:border-white/20 transition-all group"
                    style={{ "--social-color": social.color } as React.CSSProperties}
                  >
                    <div
                      className="p-3 rounded-full transition-all duration-300 group-hover:scale-110"
                      style={{ color: social.color, backgroundColor: `${social.color}15` }}
                    >
                      {social.icon}
                    </div>
                    <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-lg border border-white/5 bg-black/20 font-mono text-sm space-y-2">
                <div className="text-primary text-xs mb-3">// DIRECT_LINKS</div>
                <div className="text-muted-foreground"><span className="text-secondary">email</span> → hasineenikesala@gmail.com</div>
                <div className="text-muted-foreground"><span className="text-secondary">phone</span> → +94 76 299 4193</div>
                <div className="text-muted-foreground"><span className="text-secondary">location</span> → Anuradhapura, Sri Lanka</div>
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
                <div className="flex items-center mb-6 font-mono text-sm text-secondary pb-4 border-b border-white/10">
                  <Terminal className="w-4 h-4 mr-2" />
                  <span>TERMINAL // ROOT@hasini</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-mono text-muted-foreground">$ NAME_ID</label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full bg-black/50 border border-white/10 rounded p-3 font-mono text-sm text-foreground focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                      placeholder="Enter designation..."
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-mono text-muted-foreground">$ RETURN_ADDRESS</label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full bg-black/50 border border-white/10 rounded p-3 font-mono text-sm text-foreground focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                      placeholder="Enter network path..."
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-mono text-muted-foreground">$ PAYLOAD_DATA</label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      className="w-full bg-black/50 border border-white/10 rounded p-3 font-mono text-sm text-foreground focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all resize-none"
                      placeholder="Enter message body..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading || success}
                    className="w-full py-4 bg-primary/10 border border-primary text-primary font-mono font-bold rounded hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed group text-sm"
                  >
                    {loading ? (
                      <span className="flex items-center">
                        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                        TRANSMITTING...
                      </span>
                    ) : success ? (
                      <span>TRANSMISSION_COMPLETE</span>
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
                    className="absolute inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm rounded-xl border border-primary"
                    style={{ boxShadow: "0 0 40px rgba(0,223,154,0.3)" }}
                  >
                    <div className="text-center font-mono space-y-4 p-8">
                      <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mb-4">
                        <Send className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary" style={{ textShadow: "0 0 20px rgba(0,223,154,0.8)" }}>
                        Message sent successfully!
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Connection established. Returning to standard operations.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-[#080f1e] border-t border-white/5 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(0,223,154,0.06),transparent_70%)] pointer-events-none" />

        {/* Floating robot/avatar animation */}
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-8"
          >
            <div className="relative w-24 h-24 mx-auto">
              {/* Robot avatar SVG */}
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                {/* Glow ring */}
                <circle cx="50" cy="50" r="45" stroke="url(#robotGlow)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
                {/* Head */}
                <rect x="25" y="20" width="50" height="40" rx="8" fill="#1e293b" stroke="#00df9a" strokeWidth="1.5"/>
                {/* Eyes */}
                <circle cx="37" cy="38" r="5" fill="#00df9a" opacity="0.9">
                  <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="63" cy="38" r="5" fill="#38bdf8" opacity="0.9">
                  <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" begin="0.3s" repeatCount="indefinite"/>
                </circle>
                {/* Mouth */}
                <path d="M37 50 Q50 58 63 50" stroke="#00df9a" strokeWidth="2" strokeLinecap="round" fill="none"/>
                {/* Antenna */}
                <line x1="50" y1="20" x2="50" y2="10" stroke="#00df9a" strokeWidth="1.5"/>
                <circle cx="50" cy="8" r="3" fill="#00df9a">
                  <animate attributeName="r" values="3;5;3" dur="1.5s" repeatCount="indefinite"/>
                </circle>
                {/* Body */}
                <rect x="30" y="62" width="40" height="25" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1"/>
                {/* Body details */}
                <rect x="38" y="68" width="24" height="6" rx="3" fill="#00df9a" opacity="0.3"/>
                <circle cx="50" cy="80" r="4" fill="#38bdf8" opacity="0.6"/>
                <defs>
                  <linearGradient id="robotGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00df9a"/>
                    <stop offset="100%" stopColor="#38bdf8"/>
                  </linearGradient>
                </defs>
              </svg>
              {/* Neon cursive callout */}
              <div className="absolute -right-24 top-0 whitespace-nowrap">
                <span
                  className="text-xs font-mono text-primary italic"
                  style={{ textShadow: "0 0 10px rgba(0,223,154,0.8)" }}
                >
                  Let's work together
                </span>
                <div className="w-8 h-px bg-primary mt-1 ml-auto" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black font-mono text-white/90 tracking-widest uppercase mb-3">
              THANKS FOR SCROLLING!
            </h2>
            <p className="text-secondary font-mono text-sm md:text-base tracking-wider mb-8">
              CONNECT WITH ME TO CREATE SOMETHING AMAZING
            </p>

            <div className="flex justify-center gap-4 mb-10">
              <a
                href="https://github.com/hasineenikesala"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-primary/40 text-primary font-mono text-xs rounded hover:bg-primary/10 transition-all hover:border-primary"
              >
                GitHub →
              </a>
              <a
                href="https://linkedin.com/in/hasini-nikesala"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-secondary/40 text-secondary font-mono text-xs rounded hover:bg-secondary/10 transition-all hover:border-secondary"
              >
                LinkedIn →
              </a>
              <a
                href="/Hasini_Nikesala_CV.pdf"
                download
                className="px-5 py-2.5 bg-primary/10 border border-primary text-primary font-mono text-xs rounded hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Get CV
              </a>
            </div>

            <div className="border-t border-white/5 pt-6 font-mono text-xs text-muted-foreground">
              <p>© 2026 Hasini Nikesala · <a href="https://hasini-nikesala.vercel.app" className="text-primary/60 hover:text-primary transition-colors">hasini-nikesala.vercel.app</a></p>
              <p className="mt-1 text-white/20">// Rajarata University of Sri Lanka · Information Systems</p>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
}
