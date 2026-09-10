import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AuraCanvas } from "@/components/3d/aura-canvas";
import profileData from "@/data/profile.json";
import projectsData from "@/data/projects.json";

export default function ArrivalPage() {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* 1. ARRIVAL / HERO */}
      <section className="relative flex flex-col items-center justify-center min-h-screen p-4 text-center overflow-hidden">
        
        {/* AURA CORE 3D SCENE */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <AuraCanvas />
        </div>

        {/* HERO UI LAYER */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[80vh] mt-16 lg:mt-0">
          
          {/* System Status Indicator */}
          <div className="mb-8 flex items-center gap-3 px-4 py-2 glass-01 rounded-full border border-[var(--brand-primary)]/30 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-secondary)] animate-pulse shadow-[0_0_10px_var(--brand-secondary)]"></span>
            <span className="text-label text-[var(--text-secondary)]">SYSTEM ONLINE</span>
            <span className="mx-2 text-[var(--border-color)]">|</span>
            <span className="text-label text-[var(--brand-primary)]">AURA v2.0</span>
          </div>

          {/* Massive Typography */}
          <div className="space-y-2 mb-8 animate-fade-in-up [animation-delay:100ms]">
            <h1 className="text-display-xl text-[var(--text-primary)]">
              Engineering Better
            </h1>
            <h1 className="text-display-xl bg-clip-text text-transparent bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] pb-2 glow-text">
              Digital Experiences.
            </h1>
          </div>

          {/* Concise Messaging */}
          <div className="mb-12 max-w-2xl mx-auto space-y-6 animate-fade-in-up [animation-delay:200ms]">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-body-lg font-medium text-[var(--text-primary)]">
              <span>Flutter Developer</span>
              <span className="text-[var(--brand-primary)]">•</span>
              <span>Product Builder</span>
              <span className="text-[var(--brand-primary)]">•</span>
              <span>AI Explorer</span>
            </div>
            <p className="text-body text-[var(--text-secondary)]">
              Building practical digital products while continuously evolving across mobile, web, backend, and AI.
            </p>
          </div>

          {/* Premium Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4 animate-fade-in-up [animation-delay:300ms]">
            <Link href="/products">
              <Button size="lg" className="text-lg px-8 py-6 rounded-xl bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] hover:opacity-90 shadow-[0_0_30px_rgba(112,0,255,0.3)] transition-all">
                Explore My Work
              </Button>
            </Link>
            <Link href="/identity">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-xl glass-01 border-[var(--border-color)] hover:border-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/10 transition-all text-[var(--text-primary)]">
                Enter AURA
              </Button>
            </Link>
          </div>
        </div>

        {/* FLOATING MICRO-PANELS (Desktop Only) */}
        <div className="hidden lg:block absolute z-10 pointer-events-none w-full h-full inset-0 max-w-7xl mx-auto">
          {/* Panel 1 */}
          <div className="absolute top-[20%] left-[5%] glass-03 p-4 rounded-xl border-l-2 border-l-[var(--brand-primary)] w-48 animate-float shadow-2xl backdrop-blur-md">
            <span className="text-label text-[var(--brand-primary)] mb-1 block">01 / MOBILE</span>
            <span className="text-sm font-medium text-[var(--text-primary)]">Flutter & Dart</span>
          </div>
          {/* Panel 2 */}
          <div className="absolute bottom-[25%] left-[10%] glass-03 p-4 rounded-xl border-l-2 border-l-[var(--brand-secondary)] w-48 animate-float [animation-delay:1s] shadow-2xl backdrop-blur-md">
            <span className="text-label text-[var(--brand-secondary)] mb-1 block">02 / PRODUCT</span>
            <span className="text-sm font-medium text-[var(--text-primary)]">Real-world systems</span>
          </div>
          {/* Panel 3 */}
          <div className="absolute top-[30%] right-[5%] glass-03 p-4 rounded-xl border-l-2 border-l-[var(--brand-accent)] w-48 animate-float [animation-delay:0.5s] shadow-2xl backdrop-blur-md">
            <span className="text-label text-[var(--brand-accent)] mb-1 block">03 / AI</span>
            <span className="text-sm font-medium text-[var(--text-primary)]">AI-assisted engineering</span>
          </div>
          {/* Panel 4 */}
          <div className="absolute bottom-[20%] right-[10%] glass-03 p-4 rounded-xl border-l-2 border-l-[var(--text-primary)] w-48 animate-float [animation-delay:1.5s] shadow-2xl backdrop-blur-md">
            <span className="text-label text-[var(--text-primary)] mb-1 block">04 / EXPLORING</span>
            <span className="text-sm font-medium text-[var(--text-secondary)]">Backend & Cloud</span>
          </div>
        </div>

        {/* MOBILE MICRO-PANELS STRIP */}
        <div className="lg:hidden relative z-10 w-full px-4 mt-12 mb-8">
          <div className="flex overflow-x-auto pb-4 gap-4 snap-x hide-scrollbar">
            {['MOBILE: Flutter', 'PRODUCT: Systems', 'AI: Engineering', 'EXPLORE: Backend'].map((text, i) => (
              <div key={i} className="shrink-0 snap-center glass-02 px-4 py-3 rounded-lg border border-[var(--border-color)] text-xs font-bold tracking-wider text-[var(--text-primary)]">
                0{i+1} / {text}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce text-[var(--text-muted)] z-10 hidden md:flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-widest uppercase font-bold text-[var(--brand-primary)]">Scroll Sequence</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[var(--brand-primary)] to-transparent"></div>
        </div>
      </section>

      {/* 2. WHO I AM */}
      <section className="py-24 px-4 bg-[var(--bg-surface)]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-sm tracking-widest uppercase font-bold text-[var(--brand-secondary)] mb-4">Identity</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-8">
            {profileData.philosophy}
          </h3>
          <p className="text-xl text-[var(--text-muted)] leading-relaxed mb-12">
            {profileData.introduction}
          </p>
          <Link href="/identity">
            <Button variant="secondary">Read Full Philosophy</Button>
          </Link>
        </div>
      </section>

      {/* 3. ENGINEERING CAPABILITIES */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-sm tracking-widest uppercase font-bold text-[var(--brand-primary)] mb-4">Capabilities</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-12">
            What I Build With
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 text-left">
            <div className="glass-panel p-6 rounded-2xl">
              <h4 className="font-bold text-[var(--text-primary)] mb-2">Mobile</h4>
              <p className="text-[var(--text-muted)] text-sm">Flutter, Dart, Firebase, Real-time integrations.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl">
              <h4 className="font-bold text-[var(--text-primary)] mb-2">Web</h4>
              <p className="text-[var(--text-muted)] text-sm">React, Next.js, TypeScript, Tailwind CSS.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl">
              <h4 className="font-bold text-[var(--text-primary)] mb-2">AI Workflow</h4>
              <p className="text-[var(--text-muted)] text-sm">Antigravity, Claude, Copilot, Cursor.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl">
              <h4 className="font-bold text-[var(--text-primary)] mb-2">Exploring</h4>
              <p className="text-[var(--text-muted)] text-sm">Backend architecture, System Design, Cloud.</p>
            </div>
          </div>
          <Link href="/engineering">
            <Button variant="secondary">Explore Engineering Stack</Button>
          </Link>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS */}
      <section className="py-24 px-4 bg-[var(--bg-surface)]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-sm tracking-widest uppercase font-bold text-[var(--brand-secondary)] mb-4">Products</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
              What I Have Built
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <Link key={project.id} href={`/products/${project.slug}`} className="block group">
                <div className="glass-panel h-full p-8 rounded-2xl border-t-4 border-transparent group-hover:border-[var(--brand-primary)] transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-2xl font-bold text-[var(--text-primary)]">{project.title}</h4>
                    <span className="text-xs font-medium uppercase tracking-wider px-2 py-1 bg-[var(--bg-primary)] rounded text-[var(--text-secondary)]">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-[var(--text-muted)] mb-6">{project.tagline}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs font-medium text-[var(--brand-secondary)] bg-[var(--brand-secondary)]/10 px-2 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/products">
              <Button variant="secondary">View All Products</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. JOURNEY & INNOVATION */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-sm tracking-widest uppercase font-bold text-[var(--brand-primary)] mb-4">Evolution</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-8">
            Curiosity → Learning → Building
          </h3>
          <p className="text-xl text-[var(--text-muted)] leading-relaxed mb-12">
            My journey began with simple programming curiosity and has evolved into 
            professional product development and AI-assisted software engineering. 
            The goal is to keep evolving.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/journey">
              <Button variant="secondary">View Journey</Button>
            </Link>
            <Link href="/innovation">
              <Button variant="secondary">View Future Roadmap</Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
