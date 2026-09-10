"use client";

import React from "react";

export function Atmosphere() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Base Noise */}
      <div className="absolute inset-0 bg-noise mix-blend-overlay"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
      
      {/* Primary Radial Light (Purple) */}
      <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full light-radial-purple opacity-30 dark:opacity-20 blur-[100px] mix-blend-screen"></div>
      
      {/* Secondary Radial Light (Cyan) */}
      <div className="absolute top-[40%] -right-[20%] w-[60vw] h-[60vw] rounded-full light-radial-cyan opacity-20 dark:opacity-10 blur-[120px] mix-blend-screen"></div>
      
      {/* Soft Bottom Ambient */}
      <div className="absolute -bottom-[20%] left-[20%] w-[80vw] h-[50vw] rounded-full bg-[radial-gradient(ellipse_at_center,var(--brand-secondary)_0%,transparent_60%)] opacity-10 dark:opacity-5 blur-[100px] mix-blend-screen"></div>
    </div>
  );
}
