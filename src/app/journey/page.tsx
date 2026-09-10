"use client";

import { JourneyMilestone } from "@/types";
import journeyData from "@/data/journey.json";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function JourneyLab() {
  const milestones = journeyData as JourneyMilestone[];
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Calculate SVG line path progress based on scroll
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="relative w-full min-h-screen py-24 md:py-32 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,var(--brand-primary)_0%,transparent_50%)] opacity-10 transform-gpu"></div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <header className="mb-24 text-center">
          <span className="text-label text-[var(--brand-secondary)] mb-4 block tracking-widest">02 / JOURNEY LAB</span>
          <h1 className="text-display-l text-[var(--text-primary)]">
            The Path of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)]">Evolution</span>
          </h1>
        </header>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative w-full pb-32">
          
          {/* Animated SVG Path (Desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px h-full z-0">
            {/* Background dashed line */}
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_bottom,var(--border-color)_50%,transparent_50%)] bg-[length:1px_8px]"></div>
            {/* Scroll animated solid line */}
            <motion.div 
              className="absolute top-0 w-full bg-gradient-to-b from-[var(--brand-primary)] to-[var(--brand-secondary)] origin-top shadow-[0_0_15px_var(--brand-primary)]"
              style={{ scaleY: pathLength, height: "100%" }}
            />
          </div>

          {/* Animated SVG Path (Mobile) */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-px h-full z-0">
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_bottom,var(--border-color)_50%,transparent_50%)] bg-[length:1px_8px]"></div>
            <motion.div 
              className="absolute top-0 w-full bg-gradient-to-b from-[var(--brand-primary)] to-[var(--brand-secondary)] origin-top shadow-[0_0_15px_var(--brand-primary)]"
              style={{ scaleY: pathLength, height: "100%" }}
            />
          </div>

          {/* Milestones */}
          <div className="relative z-10 space-y-16 md:space-y-32">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={milestone.id} className={`relative flex items-center md:justify-between w-full ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                  
                  {/* Central Node Indicator */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--border-color)] z-20 flex items-center justify-center">
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-[var(--brand-primary)]"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: false, margin: "-20%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: false, margin: "-10%" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`w-full ml-16 md:ml-0 md:w-[42%] ${isEven ? 'md:pl-0 md:text-left' : 'md:pr-0 md:text-right'}`}
                  >
                    <div className={`glass-02 p-8 rounded-2xl border transition-all duration-300 hover:glass-03 hover:-translate-y-2 relative group overflow-hidden ${isEven ? 'border-l-[var(--brand-primary)] hover:border-[var(--brand-primary)]' : 'border-r-[var(--brand-secondary)] hover:border-[var(--brand-secondary)] border-l-[var(--brand-secondary)] md:border-l-[var(--border-color)] md:hover:border-l-[var(--border-color)]'}`}>
                      
                      {/* Ambient hover glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className={`flex flex-col mb-4 ${isEven ? 'md:items-start' : 'md:items-end'}`}>
                        <span className="inline-block px-3 py-1 bg-[var(--bg-primary)] text-[var(--text-primary)] text-sm font-bold tracking-widest uppercase border border-[var(--border-color)] rounded-full mb-4">
                          {milestone.year}
                        </span>
                        <h3 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--brand-primary)] transition-colors">{milestone.title}</h3>
                        <p className="text-xs font-bold tracking-widest text-[var(--text-muted)] uppercase">
                          {milestone.category}
                        </p>
                      </div>
                      
                      <p className="text-body text-[var(--text-secondary)]">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
