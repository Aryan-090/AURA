"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { TrackedLink } from "@/components/ui/tracked-link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
  { href: "/identity", label: "Identity" },
  { href: "/journey", label: "Journey" },
  { href: "/engineering", label: "Engineering" },
  { href: "/products", label: "Products" },
  { href: "/ai", label: "AI Lab" },
  { href: "/innovation", label: "Innovation" },
];

export function AuraNavigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isHidden, setIsHidden] = React.useState(false);
  const { scrollY } = useScroll();

  // Hide nav on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* --- DESKTOP FLOATING NAVIGATION --- */}
      <motion.header 
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-150%", opacity: 0 }
        }}
        animate={isHidden && !isMobileMenuOpen ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 rounded-2xl glass-02 shadow-lg"
      >
        <div className="px-4 lg:px-6 flex h-16 items-center justify-between gap-4">
          <Link href="/" className="font-display font-bold text-2xl text-[var(--text-primary)] tracking-tight hover:glow-text transition-all shrink-0 mr-4 xl:mr-8">
            AURA
          </Link>
          
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname?.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-sm font-bold tracking-widest uppercase transition-colors group",
                    isActive ? "text-[var(--brand-primary)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.div 
                      layoutId="nav-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)]"
                    />
                  )}
                  <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[var(--brand-secondary)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left opacity-50" />
                </Link>
              );
            })}
          </nav>
          
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-4">
              <TrackedLink
                href="https://1drv.ms/b/c/c1791387c2824c17/IQAKYRYsebmURYPiZLWgP0GrAZqiMVHtu3aJTz1KribaJt4?e=4Ib0pM"
                target="_blank"
                rel="noopener noreferrer"
                eventName="resume_clicked"
                eventMetadata={{ source: "navbar" }}
                className="text-xs font-bold uppercase tracking-widest text-[var(--brand-secondary)] hover:text-white transition-colors px-4 py-2 border border-[var(--brand-secondary)]/30 hover:border-[var(--brand-secondary)] hover:bg-[var(--brand-secondary)]/20 rounded-lg flex items-center gap-2"
              >
                <Download size={14} /> Resume
              </TrackedLink>
              <Link 
                href="/connect" 
                className="text-xs font-bold uppercase tracking-widest text-[var(--text-primary)] hover:text-[var(--brand-primary)] transition-colors px-4 py-2 glass-03 rounded-lg"
              >
                Connect
              </Link>
              <ThemeToggle />
            </div>
            
            <button
              className="lg:hidden p-2 text-[var(--text-primary)] z-[60] relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <motion.div animate={isMobileMenuOpen ? "open" : "closed"}>
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* --- FULL SCREEN MOBILE GLASS NAVIGATION --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[var(--bg-primary)]/90 flex flex-col justify-center px-6"
          >
            {/* Atmospheric light inside mobile menu */}
            <div className="absolute top-1/4 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_center,var(--brand-primary)_0%,transparent_70%)] opacity-20 transform-gpu pointer-events-none"></div>

            <nav className="flex flex-col gap-6 relative z-10">
              {navLinks.map((link, index) => {
                const isActive = pathname?.startsWith(link.href);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block text-3xl font-display font-bold tracking-tight transition-colors",
                        isActive ? "text-[var(--brand-primary)]" : "text-[var(--text-primary)]"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex flex-col gap-4"
              >
                <TrackedLink
                  href="https://1drv.ms/b/c/c1791387c2824c17/IQAKYRYsebmURYPiZLWgP0GrAZqiMVHtu3aJTz1KribaJt4?e=4Ib0pM"
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="resume_clicked"
                  eventMetadata={{ source: "mobile_nav" }}
                  className="p-4 rounded-xl text-sm tracking-widest uppercase font-bold glass-03 text-[var(--brand-secondary)] text-center flex items-center justify-center gap-2"
                >
                  <Download size={18} /> Download Resume
                </TrackedLink>
                <Link
                  href="/connect"
                  className="p-4 rounded-xl text-sm tracking-widest uppercase font-bold bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] text-white text-center shadow-[0_0_20px_rgba(112,0,255,0.4)]"
                >
                  Connect
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
