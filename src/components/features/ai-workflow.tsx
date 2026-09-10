"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import aiData from "@/data/ai-workflow.json";

export function AIWorkflow() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Sidebar Selector */}
      <div className="w-full md:w-1/3 space-y-2">
        {aiData.workflow.map((item, index) => (
          <button
            key={item.step}
            onClick={() => setActiveStep(index)}
            className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 ${
              activeStep === index
                ? "bg-[var(--brand-primary)]/10 border-l-4 border-[var(--brand-primary)] text-[var(--text-primary)] font-medium"
                : "bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] text-[var(--text-secondary)] border-l-4 border-transparent"
            }`}
          >
            <span className="text-sm text-[var(--brand-secondary)] mr-3 font-mono">
              0{index + 1}
            </span>
            {item.step}
          </button>
        ))}
      </div>

      {/* Interactive Display Area */}
      <div className="w-full md:w-2/3">
        <div className="glass-panel p-8 md:p-12 rounded-3xl min-h-[300px] flex flex-col justify-center relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--brand-primary)]/20 text-[var(--brand-primary)] text-xl font-bold font-mono mr-4">
                  {activeStep + 1}
                </span>
                <h3 className="text-3xl font-display font-bold text-[var(--text-primary)]">
                  {aiData.workflow[activeStep].step}
                </h3>
              </div>
              <p className="text-xl text-[var(--text-muted)] leading-relaxed border-l-2 border-[var(--brand-secondary)] pl-6">
                {aiData.workflow[activeStep].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
