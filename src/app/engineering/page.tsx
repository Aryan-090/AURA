"use client";

import { Capability } from "@/types";
import capabilitiesData from "@/data/capabilities.json";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EngineeringLab() {
  const capabilities = capabilitiesData as Capability[];
  const [activeNode, setActiveNode] = useState<string | null>(null);

  // Desktop spatial positions for 6 nodes around a center
  const spatialPositions = [
    { top: "10%", left: "50%", transform: "translateX(-50%)" },
    { top: "30%", left: "85%", transform: "translateY(-50%)" },
    { top: "70%", left: "85%", transform: "translateY(-50%)" },
    { bottom: "10%", left: "50%", transform: "translateX(-50%)" },
    { top: "70%", left: "15%", transform: "translateY(-50%)" },
    { top: "30%", left: "15%", transform: "translateY(-50%)" },
  ];

  return (
    <div className="relative w-full min-h-screen py-24 md:py-32 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(circle_at_center,var(--brand-primary)_0%,transparent_60%)] opacity-5 transform-gpu"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <header className="mb-16 md:mb-24 text-center lg:text-left">
          <span className="text-label text-[var(--brand-secondary)] mb-4 block">03 / ENGINEERING LAB</span>
          <h1 className="text-display-l text-[var(--text-primary)]">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)]">Constellation</span>
          </h1>
        </header>

        {/* --- DESKTOP CONSTELLATION --- */}
        <div className="hidden lg:flex relative w-full max-w-[900px] h-[700px] mx-auto items-center justify-center">
          
          {/* Central Node */}
          <div className="absolute z-20 w-48 h-48 rounded-full glass-04 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(112,0,255,0.2)] border-[var(--brand-primary)] border-2">
            <span className="text-label text-[var(--brand-primary)]">CORE</span>
            <span className="text-xl font-display font-bold text-[var(--text-primary)] mt-1">ARYAN</span>
            <span className="text-sm font-medium text-[var(--text-secondary)]">ENGINEERING</span>
          </div>

          {/* Connection Lines (Simplified SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ opacity: 0.15 }}>
            <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="currentColor" strokeWidth="1" className="text-[var(--brand-primary)]" strokeDasharray="4 4" />
            <line x1="50%" y1="50%" x2="85%" y2="30%" stroke="currentColor" strokeWidth="1" className="text-[var(--brand-primary)]" strokeDasharray="4 4" />
            <line x1="50%" y1="50%" x2="85%" y2="70%" stroke="currentColor" strokeWidth="1" className="text-[var(--brand-primary)]" strokeDasharray="4 4" />
            <line x1="50%" y1="50%" x2="50%" y2="85%" stroke="currentColor" strokeWidth="1" className="text-[var(--brand-primary)]" strokeDasharray="4 4" />
            <line x1="50%" y1="50%" x2="15%" y2="70%" stroke="currentColor" strokeWidth="1" className="text-[var(--brand-primary)]" strokeDasharray="4 4" />
            <line x1="50%" y1="50%" x2="15%" y2="30%" stroke="currentColor" strokeWidth="1" className="text-[var(--brand-primary)]" strokeDasharray="4 4" />
          </svg>

          {/* Orbiting Nodes */}
          {capabilities.map((cap, index) => {
            const isActive = activeNode === cap.id;
            return (
              <div 
                key={cap.id}
                className="absolute z-10 transition-all duration-300"
                style={spatialPositions[index % spatialPositions.length]}
                onMouseEnter={() => setActiveNode(cap.id)}
                onMouseLeave={() => setActiveNode(null)}
              >
                <div className={`relative flex items-center justify-center w-40 h-40 rounded-full cursor-pointer transition-all duration-500 ${isActive ? 'glass-03 scale-110 shadow-[0_0_30px_rgba(112,0,255,0.3)]' : 'glass-01 scale-100 hover:glass-02'}`}>
                  <span className="text-center font-display font-bold text-[var(--text-primary)] text-sm px-4">
                    {cap.category}
                  </span>
                  
                  {/* Expanded Skills Tooltip */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-full mt-4 w-64 glass-02 p-4 rounded-xl border border-[var(--border-color)] pointer-events-none z-50 shadow-2xl"
                      >
                        <div className="flex flex-wrap gap-2">
                          {cap.skills.map(skill => (
                            <span key={skill} className="text-[10px] uppercase tracking-wider font-bold bg-[var(--bg-primary)] px-2 py-1 rounded text-[var(--text-secondary)]">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- MOBILE STACKED LIST --- */}
        <div className="lg:hidden flex flex-col gap-6 relative z-10">
          {capabilities.map((cap) => (
            <div key={cap.id} className="glass-02 p-6 rounded-2xl border-l-4 border-l-[var(--brand-primary)]">
              <h2 className="text-xl font-display font-bold text-[var(--text-primary)] mb-4">
                {cap.category}
              </h2>
              <div className="flex flex-wrap gap-2">
                {cap.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 glass-01 rounded-md text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
