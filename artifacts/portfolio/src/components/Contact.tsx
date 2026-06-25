import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { Send, Terminal } from "lucide-react";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate network request
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative min-h-[80vh] flex items-center">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono justify-center flex items-center">
            <span className="text-primary mr-2">&gt;</span>
            <span className="text-glow-primary border-b-2 border-primary pb-1 inline-block">INIT_COMMS</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto font-mono text-sm mt-4">
            Awaiting input. Connect the endpoints to establish a secure connection.
          </p>
        </motion.div>

        <div className="max-w-xl mx-auto relative">
          <GlassCard className="!p-8">
            <div className="flex items-center mb-6 font-mono text-sm text-secondary pb-4 border-b border-white/10">
              <Terminal className="w-4 h-4 mr-2" />
              <span>TERMINAL // ROOT</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-mono text-muted-foreground">
                  $ NAME_ID
                </label>
                <input 
                  id="name"
                  type="text"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded p-3 font-mono text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="Enter designation..."
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-mono text-muted-foreground">
                  $ RETURN_ADDRESS
                </label>
                <input 
                  id="email"
                  type="email"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded p-3 font-mono text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="Enter network path..."
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-mono text-muted-foreground">
                  $ PAYLOAD_DATA
                </label>
                <textarea 
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-black/50 border border-white/10 rounded p-3 font-mono text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Enter message body..."
                />
              </div>

              <button 
                type="submit"
                disabled={loading || success}
                className="w-full py-4 bg-primary/10 border border-primary text-primary font-mono font-bold rounded hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {loading ? (
                  <span className="flex items-center">
                    <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                    TRANSMITTING...
                  </span>
                ) : success ? (
                  <span className="flex items-center">
                    TRANSMISSION_COMPLETE
                  </span>
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
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                className="absolute inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm rounded-xl border border-primary box-glow-primary"
              >
                <div className="text-center font-mono space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mb-6">
                    <Send className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary text-glow-primary">
                    Message sent successfully!
                  </h3>
                  <p className="text-muted-foreground">
                    Connection established. Returning to standard operations.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
