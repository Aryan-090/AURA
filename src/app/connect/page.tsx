"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { useAnalytics } from "@/hooks/use-analytics";
import { TrackedLink } from "@/components/ui/tracked-link";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ConnectLab() {
  const { trackEvent } = useAnalytics();
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = React.useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrors([]);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        if (json.errors) {
          setErrors(json.errors.map((err: { message: string }) => err.message));
        } else {
          setErrors([json.message || "Signal interruption detected."]);
        }
        setStatus("error");
      } else {
        setStatus("success");
        trackEvent("resume_clicked", { source: "contact_form_success" }); 
      }
    } catch {
      setErrors(["Network error. Signal lost. Please try again later."]);
      setStatus("error");
    }
  };

  return (
    <div className="relative w-full min-h-screen py-24 md:py-32 overflow-hidden flex items-center justify-center">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-[radial-gradient(circle_at_center,var(--brand-primary)_0%,transparent_60%)] opacity-10 transform-gpu"></div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10 flex flex-col items-center">
        
        {/* Form Container */}
        <div className="w-full max-w-xl relative">
          
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="glass-04 p-12 rounded-3xl text-center border-t-2 border-[var(--success)] shadow-[0_0_50px_rgba(16,185,129,0.1)] relative overflow-hidden"
              >
                {/* Success Radar Ping */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--success)_0%,transparent_70%)] opacity-10 pointer-events-none blur-xl"></div>
                
                <div className="w-16 h-16 rounded-full glass-01 border border-[var(--success)]/30 text-[var(--success)] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} />
                </div>
                <h2 className="text-display-m font-bold text-[var(--success)] mb-4 tracking-tight">TRANSMISSION COMPLETE</h2>
                <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-md mx-auto">
                  Your message has been securely received. I will review the payload and establish a return connection shortly.
                </p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="px-6 py-3 glass-01 rounded-xl text-sm font-bold uppercase tracking-widest text-[var(--text-primary)] hover:border-[var(--brand-primary)] transition-all"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <motion.div 
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="glass-03 p-8 md:p-12 rounded-3xl relative"
              >
                {/* Signal Decoration */}
                <div className="absolute top-0 right-12 w-px h-12 bg-gradient-to-b from-transparent to-[var(--brand-primary)]"></div>
                
                <header className="mb-10 text-center">
                  <span className="text-label text-[var(--brand-primary)] mb-4 flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-primary)] animate-pulse"></span>
                    ESTABLISH CONNECTION
                  </span>
                  <h1 className="text-display-m text-[var(--text-primary)] mb-2">
                    Ready to build something?
                  </h1>
                </header>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="relative group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-5 py-4 bg-[var(--bg-primary)]/50 backdrop-blur-sm border border-[var(--border-color)] rounded-xl focus:outline-none focus:border-[var(--brand-primary)] focus:ring-1 focus:ring-[var(--brand-primary)] text-[var(--text-primary)] placeholder-[var(--text-muted)] transition-all peer"
                        placeholder="Name or Identifier"
                      />
                      <div className="absolute top-0 left-4 -translate-y-1/2 px-1 bg-[var(--bg-surface)] text-[10px] font-bold tracking-widest uppercase text-[var(--text-muted)] peer-focus:text-[var(--brand-primary)] transition-colors">
                        Origin
                      </div>
                    </div>
                    
                    <div className="relative group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-5 py-4 bg-[var(--bg-primary)]/50 backdrop-blur-sm border border-[var(--border-color)] rounded-xl focus:outline-none focus:border-[var(--brand-secondary)] focus:ring-1 focus:ring-[var(--brand-secondary)] text-[var(--text-primary)] placeholder-[var(--text-muted)] transition-all peer"
                        placeholder="Email Address"
                      />
                      <div className="absolute top-0 left-4 -translate-y-1/2 px-1 bg-[var(--bg-surface)] text-[10px] font-bold tracking-widest uppercase text-[var(--text-muted)] peer-focus:text-[var(--brand-secondary)] transition-colors">
                        Routing Address
                      </div>
                    </div>

                    <div className="relative group">
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-5 py-4 bg-[var(--bg-primary)]/50 backdrop-blur-sm border border-[var(--border-color)] rounded-xl focus:outline-none focus:border-[var(--brand-accent)] focus:ring-1 focus:ring-[var(--brand-accent)] text-[var(--text-primary)] placeholder-[var(--text-muted)] transition-all resize-none peer"
                        placeholder="Describe your engineering needs..."
                      />
                      <div className="absolute top-0 left-4 -translate-y-1/2 px-1 bg-[var(--bg-surface)] text-[10px] font-bold tracking-widest uppercase text-[var(--text-muted)] peer-focus:text-[var(--brand-accent)] transition-colors">
                        Payload
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {errors.length > 0 && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-4 glass-01 border border-[var(--error)]/30 rounded-xl text-[var(--error)] text-sm flex items-start gap-3"
                      >
                        <AlertCircle size={18} className="shrink-0 mt-0.5" />
                        <ul className="list-disc pl-4 space-y-1">
                          {errors.map((error, i) => (
                            <li key={i}>{error}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button 
                    type="submit" 
                    disabled={status === "loading"}
                    className="w-full relative group overflow-hidden rounded-xl bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] p-[1px] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <div className="relative w-full px-6 py-4 bg-[var(--bg-surface)] rounded-[11px] group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center gap-3">
                      {status === "loading" ? (
                        <>
                          <span className="w-4 h-4 rounded-full border-2 border-[var(--brand-primary)] border-t-transparent animate-spin"></span>
                          <span className="text-sm font-bold tracking-widest uppercase text-[var(--text-primary)] group-hover:text-white transition-colors">Transmitting...</span>
                        </>
                      ) : (
                        <>
                          <span className="text-sm font-bold tracking-widest uppercase text-[var(--text-primary)] group-hover:text-white transition-colors">Transmit</span>
                          <Send size={16} className="text-[var(--brand-secondary)] group-hover:text-white transition-colors group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </>
                      )}
                    </div>
                  </button>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
                    Or route directly to <a href="mailto:aryandhandhukiya09@gmail.com" className="text-[var(--brand-primary)] hover:underline ml-1">aryandhandhukiya09@gmail.com</a>
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
