import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AuraCanvas } from "@/components/3d/aura-canvas";

export default function ArrivalPage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4 text-center overflow-hidden">
      
      {/* 3D Background Element */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 pointer-events-none">
        <div className="w-full h-full max-w-4xl max-h-4xl">
          <AuraCanvas />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl space-y-8 animate-fade-in-up bg-[var(--bg-primary)]/40 p-8 rounded-3xl backdrop-blur-sm border border-[var(--border-color)]/50">
        <h1 className="font-display text-5xl sm:text-7xl font-bold tracking-tight text-[var(--brand-primary)]">
          Engineering Better Digital Experiences.
        </h1>
        
        <p className="text-xl sm:text-2xl text-[var(--text-secondary)] font-light max-w-2xl mx-auto">
          Welcome to AURA. A digital engineering experience platform blending product mindset, 
          architectural rigor, and modern aesthetics.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-8">
          <Link href="/products">
            <Button size="lg" className="text-lg">Explore Products</Button>
          </Link>
          <Link href="/identity">
            <Button variant="secondary" size="lg" className="text-lg">Read Philosophy</Button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-12 animate-bounce hidden sm:block text-[var(--text-muted)] z-10">
        <span className="text-sm tracking-widest uppercase">Scroll or Select a Lab</span>
      </div>
    </div>
  );
}
