"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";

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

  // Close mobile menu on route change
  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[var(--bg-primary)]/80 backdrop-blur-md">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-display font-bold text-xl text-[var(--brand-primary)] tracking-tight">
            AURA
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-[var(--brand-secondary)]",
                  pathname?.startsWith(link.href)
                    ? "text-[var(--brand-primary)]"
                    : "text-[var(--text-secondary)]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Link 
              href="/connect" 
              className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--brand-primary)] transition-colors px-4 py-2 border border-[var(--border-color)] rounded-md"
            >
              Connect
            </Link>
          </div>
          <ThemeToggle />
          
          <button
            className="md:hidden p-2 text-[var(--text-primary)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--border-color)] bg-[var(--bg-primary)] h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "p-4 rounded-lg text-lg font-medium transition-colors",
                  pathname?.startsWith(link.href)
                    ? "bg-[var(--bg-surface)] text-[var(--brand-primary)]"
                    : "text-[var(--text-primary)] hover:bg-[var(--bg-surface)]"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/connect"
              className="mt-4 p-4 rounded-lg text-lg font-medium bg-[var(--brand-primary)] text-white text-center"
            >
              Connect
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
