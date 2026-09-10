"use client";

import React from "react";

export function Atmosphere() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[var(--bg-primary)]">
      {/* Grid Pattern (Optimized mask) */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
      
      {/* Primary Radial Light (Purple) - Optimized */}
      <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full light-radial-purple opacity-10 dark:opacity-10 transform-gpu"></div>
      
      {/* Secondary Radial Light (Cyan) - Optimized */}
      <div className="absolute top-[40%] -right-[20%] w-[60vw] h-[60vw] rounded-full light-radial-cyan opacity-10 dark:opacity-5 transform-gpu"></div>
      
      {/* Soft Bottom Ambient - Optimized */}
      <div className="absolute -bottom-[20%] left-[20%] w-[80vw] h-[50vw] rounded-full bg-[radial-gradient(ellipse_at_center,var(--brand-secondary)_0%,transparent_60%)] opacity-5 transform-gpu"></div>
    </div>
  );
}
