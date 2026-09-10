"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import innovationData from "@/data/innovation.json";
import { TiltCard } from "@/components/motion/tilt-card";

export default function InnovationLab() {
  const [activeHorizon, setActiveHorizon] = useState<string | null>(null);

  const horizons = [
    {
      id: "now",
      title: "NOW",
      subtitle: "Current Focus",
      items: innovationData.now,
      color: "var(--brand-primary)",
      position: { top: "20%", left: "15%" }
    },
    {
      id: "next",
      title: "NEXT",
      subtitle: "Exploration",
      items: innovationData.next,
      color: "var(--brand-secondary)",
      position: { top: "50%", left: "50%", transform: "translate(-50%, -50%)" }
    },
    {
      id: "future",
      title: "FUTURE",
      subtitle: "Long-term Ambitions",
      items: innovationData.future,
      color: "var(--text-primary)",
      position: { bottom: "20%", right: "15%" }
    }
  ];

  return (
    <div className="relative w-full min-h-screen py-24 md:py-32 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[50vw] h-[50vw] bg-[radial-gradient(circle_at_center,var(--brand-primary)_0%,transparent_50%)] opacity-10 transform-gpu"></div>
        <div className="absolute bottom-[20%] left-[10%] w-[50vw] h-[50vw] bg-[radial-gradient(circle_at_center,var(--brand-secondary)_0%,transparent_50%)] opacity-10 transform-gpu"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <header className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <span className="text-label text-[var(--brand-secondary)] mb-4 block tracking-widest">05 / INNOVATION LAB</span>
          <h1 className="text-display-l text-[var(--text-primary)] mb-6">
            The Spatial <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)]">Roadmap</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            What I am learning. What I want to build. Where I am going.
          </p>
        </header>

        {/* --- DESKTOP SPATIAL ROADMAP --- */}
        <div className="hidden lg:block relative w-full h-[600px] mb-32 border border-[var(--border-color)]/30 rounded-[3rem] glass-01">
          
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ opacity: 0.3 }}>
            {/* Now to Next */}
            <line x1="15%" y1="20%" x2="50%" y2="50%" stroke="var(--border-color)" strokeWidth="2" strokeDasharray="8 8" />
            <circle cx="15%" cy="20%" r="4" fill="var(--brand-primary)" />
            {/* Next to Future */}
            <line x1="50%" y1="50%" x2="85%" y2="80%" stroke="var(--border-color)" strokeWidth="2" strokeDasharray="8 8" />
            <circle cx="85%" cy="80%" r="4" fill="var(--text-primary)" />
          </svg>

          {/* Nodes */}
          {horizons.map((horizon) => {
            const isActive = activeHorizon === horizon.id;
            return (
              <div 
                key={horizon.id}
                className={`absolute transition-all duration-500 ${isActive ? 'z-50' : 'z-10'}`}
                style={horizon.position}
                onMouseEnter={() => setActiveHorizon(horizon.id)}
                onMouseLeave={() => setActiveHorizon(null)}
              >
                <motion.div 
                  layout
                  className={`relative glass-03 rounded-3xl p-8 border-t-4 transition-all duration-300 shadow-2xl cursor-pointer ${isActive ? 'w-96 glass-04 scale-105 z-50' : 'w-64 glass-02 scale-100 z-10'}`}
                  style={{ borderTopColor: horizon.color }}
                >
                  <motion.h2 layout="position" className="text-3xl font-display font-bold text-[var(--text-primary)] mb-1">
                    {horizon.title}
                  </motion.h2>
                  <motion.p layout="position" className="text-xs uppercase tracking-widest font-bold text-[var(--text-secondary)] mb-6">
                    {horizon.subtitle}
                  </motion.p>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <ul className="space-y-4 pt-4 border-t border-[var(--border-color)]">
                          {horizon.items.map((item, i) => (
                            <motion.li 
                              key={i} 
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start text-sm"
                            >
                              <span className="mr-3 font-black text-lg" style={{ color: horizon.color }}>+</span>
                              <span className="text-[var(--text-primary)] leading-relaxed font-medium">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* --- MOBILE STACKED ROADMAP --- */}
        <div className="lg:hidden flex flex-col gap-8 mb-24 relative pl-4">
          <div className="absolute left-[27px] top-4 bottom-4 w-px bg-[var(--border-color)] border-dashed border-l z-0"></div>
          
          {horizons.map((horizon) => (
            <div key={horizon.id} className="relative z-10 flex">
              <div className="mt-6 mr-6 shrink-0 w-3 h-3 rounded-full border-2 bg-[var(--bg-primary)] z-10" style={{ borderColor: horizon.color }}></div>
              <div className="glass-02 p-6 rounded-2xl border-t-2 w-full" style={{ borderTopColor: horizon.color }}>
                <h2 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-1">{horizon.title}</h2>
                <p className="text-xs uppercase tracking-widest font-bold text-[var(--text-secondary)] mb-6">{horizon.subtitle}</p>
                <ul className="space-y-3">
                  {horizon.items.map((item, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <span className="mr-3 font-black" style={{ color: horizon.color }}>+</span>
                      <span className="text-[var(--text-muted)] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* The Vision */}
        <section className="max-w-4xl mx-auto text-center mt-16">
          <TiltCard>
            <div className="glass-04 p-12 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <span className="text-label text-[var(--brand-primary)] mb-6 block relative z-10">THE ULTIMATE VISION</span>
              <p className="text-2xl md:text-3xl font-light text-[var(--text-primary)] leading-relaxed italic relative z-10">
                &quot;{innovationData.vision}&quot;
              </p>
            </div>
          </TiltCard>
        </section>

      </div>
    </div>
  );
}
