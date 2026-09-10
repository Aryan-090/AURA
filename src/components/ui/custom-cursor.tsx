"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    // Only run on desktop devices
    if (window.matchMedia("(hover: none)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (isHidden) setIsHidden(false);

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      
      const textElement = target.closest('[data-cursor-text]') as HTMLElement;
      if (textElement) {
        setIsHovering(true);
        setCursorText(textElement.getAttribute("data-cursor-text") || "");
        return;
      }

      const interactiveElement = target.closest('a, button, input, select, textarea, [role="button"], [data-cursor-interactive]');
      if (interactiveElement) {
        setIsHovering(true);
        setCursorText("");
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isHidden]);

  if (isHidden) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[100] flex items-center justify-center mix-blend-difference"
      animate={{
        x: position.x - (isHovering && cursorText ? 32 : isHovering ? 16 : 8),
        y: position.y - (isHovering && cursorText ? 32 : isHovering ? 16 : 8),
        width: isHovering && cursorText ? 64 : isHovering ? 32 : 16,
        height: isHovering && cursorText ? 64 : isHovering ? 32 : 16,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    >
      <div 
        className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-300 ${
          isHovering ? "bg-white/90" : "bg-white"
        }`}
      >
        {cursorText && (
          <span className="text-[10px] font-bold text-black tracking-widest">{cursorText}</span>
        )}
      </div>
    </motion.div>
  );
}
