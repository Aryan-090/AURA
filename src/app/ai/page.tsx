import aiData from "@/data/ai-workflow.json";
import { AIWorkflow } from "@/components/features/ai-workflow";

export const metadata = {
  title: "AI Lab | AURA",
  description: "My AI-assisted engineering workflow.",
};

export default function AILab() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[var(--brand-primary)] mb-6">
          AI Lab
        </h1>
        <p className="text-2xl font-medium text-[var(--brand-secondary)] italic mb-4">
          &quot;{aiData.philosophy}&quot;
        </p>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          AI accelerates engineering, but it does not replace engineering judgment. 
          I use AI as a high-velocity partner to explore architectures, rapidly scaffold logic, 
          and debug complex issues, while keeping full control over the final product.
        </p>
      </header>

      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl font-bold mb-8 text-[var(--text-primary)] text-center">Interactive Engineering Workflow</h2>
        <AIWorkflow />
      </section>

      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8 text-[var(--text-primary)]">The Accelerator Stack</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {aiData.tools.map((tool) => (
            <div 
              key={tool} 
              className="px-6 py-3 glass-panel rounded-full text-[var(--text-secondary)] font-medium hover:text-[var(--brand-primary)] hover:border-[var(--brand-primary)] transition-colors cursor-default"
            >
              {tool}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
