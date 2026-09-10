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
      <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4 text-center">
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 pointer-events-none">
          <div className="w-full h-full max-w-4xl max-h-4xl">
            <AuraCanvas />
          </div>
        </div>
        <div className="relative z-10 max-w-5xl space-y-8 animate-fade-in-up bg-[var(--bg-primary)]/40 p-8 md:p-12 rounded-3xl backdrop-blur-sm border border-[var(--border-color)]/50">
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[var(--brand-primary)]">
            Engineering Better Digital Experiences.
          </h1>
          <p className="text-xl sm:text-2xl text-[var(--text-secondary)] font-light max-w-3xl mx-auto leading-relaxed">
            I am a Flutter developer and product-oriented software engineer. I build practical products, 
            continuously learn new paradigms, and explore web, AI, and backend engineering.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <Link href="/products">
              <Button size="lg" className="text-lg px-8">View Products</Button>
            </Link>
            <Link href="/connect">
              <Button variant="secondary" size="lg" className="text-lg px-8">Connect</Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-12 animate-bounce hidden sm:block text-[var(--text-muted)] z-10">
          <span className="text-sm tracking-widest uppercase font-medium">Scroll to Explore</span>
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
