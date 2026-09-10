"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import aiData from "@/data/ai-workflow.json";

export function AIWorkflow() {
  const [activeStep, setActiveStep] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-play sequence when not hovering
  useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % aiData.workflow.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <div 
      className="w-full relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Node Graph (Desktop) */}
      <div className="hidden md:flex relative justify-between items-center mb-16 pt-8 px-4">
        
        {/* Background Line */}
        <div className="absolute top-1/2 left-[5%] right-[5%] h-1 -translate-y-1/2 bg-[var(--border-color)] rounded-full z-0"></div>
        
        {/* Animated Progress Line */}
        <div className="absolute top-1/2 left-[5%] right-[5%] h-1 -translate-y-1/2 bg-[var(--border-color)] rounded-full z-0 overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)]"
            initial={{ width: "0%" }}
            animate={{ width: `${(activeStep / (aiData.workflow.length - 1)) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>

        {aiData.workflow.map((item, index) => {
          const isActive = index === activeStep;
          const isPast = index < activeStep;
          
          return (
            <div 
              key={item.step} 
              className="relative z-10 flex flex-col items-center group cursor-pointer"
              onClick={() => setActiveStep(index)}
            >
              {/* Node Point */}
              <div 
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 border-2 ${
                  isActive 
                    ? 'bg-[var(--brand-accent)] border-[var(--brand-accent)] text-[var(--bg-primary)] shadow-[0_0_30px_var(--brand-accent)] scale-125' 
                    : isPast
                    ? 'bg-[var(--bg-surface)] border-[var(--brand-primary)] text-[var(--brand-primary)]'
                    : 'bg-[var(--bg-primary)] border-[var(--border-color)] text-[var(--text-muted)] group-hover:border-[var(--brand-accent)]/50'
                }`}
              >
                <span className="font-mono text-sm font-bold">{index + 1}</span>
              </div>
              
              {/* Node Label */}
              <div 
                className={`absolute top-16 text-center w-32 -ml-10 transition-colors duration-300 ${
                  isActive ? 'text-[var(--brand-accent)] font-bold' : 'text-[var(--text-secondary)] font-medium group-hover:text-[var(--text-primary)]'
                }`}
              >
                <span className="text-xs uppercase tracking-widest">{item.step}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Display Area */}
      <div className="w-full mt-8 md:mt-24">
        <div className="glass-02 p-8 md:p-12 rounded-3xl min-h-[250px] flex flex-col justify-center relative overflow-hidden border border-[var(--brand-accent)]/20 shadow-2xl">
          
          {/* Subtle Background Glow based on active step */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--brand-accent)] opacity-5 blur-[80px] pointer-events-none transition-all duration-1000"></div>

          {/* Mobile Step Indicator */}
          <div className="md:hidden flex items-center justify-between mb-6 border-b border-[var(--border-color)] pb-4">
            <div className="flex gap-2">
              {aiData.workflow.map((_, i) => (
                <div 
                  key={i} 
                  onClick={() => setActiveStep(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeStep ? 'w-8 bg-[var(--brand-accent)]' : 'w-2 bg-[var(--border-color)]'
                  }`}
                />
              ))}
            </div>
            <span className="text-[10px] font-mono tracking-widest text-[var(--text-muted)]">
              STEP {activeStep + 1} OF {aiData.workflow.length}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <h3 className="text-3xl font-display font-bold text-[var(--text-primary)]">
                  {aiData.workflow[activeStep].step}
                </h3>
              </div>
              <p className="text-xl md:text-2xl font-light text-[var(--text-secondary)] leading-relaxed border-l-2 border-[var(--brand-accent)] pl-6">
                {aiData.workflow[activeStep].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
