"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function AuraLoadingSequence() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only show loading sequence once per session
    const hasLoaded = sessionStorage.getItem("aura_loaded");
    
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    // Sequence duration
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("aura_loaded", "true");
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="aura-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bg-primary)] backdrop-blur-3xl overflow-hidden"
        >
          {/* Ambient Glow */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(circle_at_center,var(--brand-primary)_0%,transparent_70%)] mix-blend-screen blur-[100px]"
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Branding */}
            <motion.div className="relative overflow-hidden mb-8">
              <motion.h1 
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-display-xl tracking-[0.2em] text-[var(--text-primary)]"
              >
                AURA
              </motion.h1>
            </motion.div>

            {/* Loading Bar */}
            <div className="w-64 h-1 bg-[var(--border-color)] rounded-full overflow-hidden relative">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute top-0 left-0 bottom-0 w-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)]"
              />
            </div>

            {/* Boot Sequence Text */}
            <div className="mt-6 flex flex-col items-center gap-1 h-12 overflow-hidden w-64 text-center">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
                transition={{ duration: 0.8, times: [0, 0.2, 0.8, 1], delay: 0 }}
                className="text-xs font-mono text-[var(--brand-secondary)] uppercase tracking-widest absolute"
              >
                Initializing Core Engine...
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
                transition={{ duration: 0.8, times: [0, 0.2, 0.8, 1], delay: 0.8 }}
                className="text-xs font-mono text-[var(--brand-secondary)] uppercase tracking-widest absolute"
              >
                Loading Neural Weights...
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
                transition={{ duration: 0.8, times: [0, 0.2, 0.8, 1], delay: 1.6 }}
                className="text-xs font-mono text-[var(--brand-secondary)] uppercase tracking-widest absolute"
              >
                Establishing Connections...
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: [0, 1], y: [10, 0] }}
                transition={{ duration: 0.4, delay: 2.4 }}
                className="text-xs font-mono text-[var(--brand-primary)] font-bold uppercase tracking-widest absolute"
              >
                System Ready.
              </motion.span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
