import aiData from "@/data/ai-workflow.json";
import { AIWorkflow } from "@/components/features/ai-workflow";

export const metadata = {
  title: "AI Lab | AURA",
  description: "My AI-assisted engineering workflow.",
};

export default function AILab() {
  return (
    <div className="relative w-full min-h-screen py-24 md:py-32 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,var(--brand-accent)_0%,transparent_50%)] opacity-10 mix-blend-screen blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <header className="mb-24 text-center max-w-4xl mx-auto">
          <span className="text-label text-[var(--brand-accent)] mb-4 block tracking-widest">04 / AI LAB</span>
          <h1 className="text-display-l text-[var(--text-primary)] mb-8">
            Intelligence <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-secondary)]">Multiplied</span>
          </h1>
          <div className="glass-02 p-8 md:p-12 rounded-3xl border-l-4 border-l-[var(--brand-accent)] relative overflow-hidden text-left">
            <span className="text-display-xl absolute -top-8 -left-4 text-[var(--brand-accent)] opacity-10 font-serif">"</span>
            <p className="text-2xl font-medium text-[var(--text-primary)] italic mb-6 relative z-10">
              {aiData.philosophy}
            </p>
            <p className="text-body-lg text-[var(--text-secondary)]">
              AI accelerates engineering, but it does not replace engineering judgment. 
              I use AI as a high-velocity partner to explore architectures, rapidly scaffold logic, 
              and debug complex issues, while keeping full control over the final product.
            </p>
          </div>
        </header>

        {/* Interactive Graph Section */}
        <section className="mb-32">
          <div className="mb-12 flex flex-col items-center justify-center text-center">
            <span className="text-label text-[var(--text-muted)] mb-2 block">SYSTEM ARCHITECTURE</span>
            <h2 className="text-3xl font-display font-bold text-[var(--text-primary)]">The Engineering Loop</h2>
          </div>
          <div className="glass-01 rounded-[2.5rem] p-4 md:p-8 border border-[var(--border-color)]">
            <AIWorkflow />
          </div>
        </section>

        {/* Accelerator Stack */}
        <section className="max-w-4xl mx-auto text-center">
          <span className="text-label text-[var(--brand-secondary)] mb-8 block">THE ACCELERATOR STACK</span>
          <div className="flex flex-wrap justify-center gap-4">
            {aiData.tools.map((tool) => (
              <div 
                key={tool} 
                className="px-6 py-3 glass-02 rounded-xl text-sm font-bold tracking-widest uppercase text-[var(--text-primary)] hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)] transition-all cursor-default shadow-lg"
              >
                {tool}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
