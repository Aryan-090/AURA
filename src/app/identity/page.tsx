import profileData from "@/data/profile.json";
import { TiltCard } from "@/components/motion/tilt-card";

export const metadata = {
  title: "Identity Lab | AURA",
  description: "Who is Aryan Dhandhukiya? Engineering philosophy and values.",
};

export default function IdentityLab() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden py-24 md:py-32">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[radial-gradient(ellipse_at_center,var(--brand-primary)_0%,transparent_60%)] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <header className="mb-32">
          <span className="text-label text-[var(--brand-secondary)] mb-4 block">01 / IDENTITY LAB</span>
          <h1 className="text-display-xl text-[var(--text-primary)] max-w-4xl">
            Who is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)]">Aryan?</span>
          </h1>
        </header>

        {/* Editorial Statement */}
        <section className="relative mb-40">
          <div className="max-w-4xl">
            <h2 className="text-display-l text-[var(--text-primary)] leading-tight mb-8">
              {profileData.philosophy}
            </h2>
            <p className="text-body-lg text-[var(--text-secondary)] max-w-2xl border-l-2 border-[var(--brand-primary)] pl-6">
              {profileData.introduction}
            </p>
          </div>
          
          {/* Floating Metadata (Desktop Spatial Layout) */}
          <div className="hidden lg:flex flex-col absolute top-0 right-0 gap-4 w-64">
            <div className="glass-02 p-6 rounded-2xl border-l-2 border-[var(--brand-primary)] shadow-2xl">
              <span className="text-label text-[var(--brand-primary)] mb-2 block">ROLE</span>
              <span className="text-[var(--text-primary)] font-medium">Flutter Developer</span>
            </div>
            <div className="glass-02 p-6 rounded-2xl border-l-2 border-[var(--brand-secondary)] shadow-2xl translate-x-8">
              <span className="text-label text-[var(--brand-secondary)] mb-2 block">FOCUS</span>
              <span className="text-[var(--text-primary)] font-medium">Product Builder</span>
            </div>
            <div className="glass-02 p-6 rounded-2xl border-l-2 border-[var(--brand-accent)] shadow-2xl translate-x-16">
              <span className="text-label text-[var(--brand-accent)] mb-2 block">EXPLORING</span>
              <span className="text-[var(--text-primary)] font-medium">AI & Architecture</span>
            </div>
          </div>
        </section>

        {/* Beliefs & Work Ethic */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-32">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-label text-[var(--text-muted)] mb-4 block">CORE BELIEF</span>
            <p className="text-display-m text-[var(--text-primary)]">
              {profileData.belief}
            </p>
          </div>
          
          <div className="lg:col-span-7">
            <TiltCard>
              <div className="glass-03 p-8 md:p-12 rounded-3xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="text-label text-[var(--brand-secondary)] mb-4 block relative z-10">WORK ETHIC</span>
                <p className="text-2xl md:text-3xl font-light text-[var(--text-primary)] leading-relaxed italic relative z-10">
                  &quot;{profileData.workEthic}&quot;
                </p>
              </div>
            </TiltCard>
          </div>
        </section>

        {/* Engineering Strengths */}
        <section>
          <span className="text-label text-[var(--brand-primary)] mb-8 block">ENGINEERING STRENGTHS</span>
          <div className="flex flex-wrap gap-4">
            {profileData.strengths.map((strength, index) => (
              <div key={index} className="glass-01 px-6 py-4 rounded-full border border-[var(--border-color)] hover:border-[var(--brand-primary)] transition-colors flex items-center gap-3 group">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)] group-hover:bg-[var(--brand-primary)] transition-colors"></span>
                <span className="text-[var(--text-primary)] font-medium tracking-wide">{strength}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
