export const metadata = {
  title: "AI Lab | AURA",
  description: "AI-assisted engineering workflows.",
};

export default function AILab() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mb-16 text-center">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[var(--brand-primary)] mb-4">
          AI Lab
        </h1>
        <p className="text-xl text-[var(--text-secondary)]">
          Exploring the frontier of AI-augmented software engineering.
        </p>
      </header>

      <section className="max-w-4xl mx-auto space-y-12">
        <div className="glass-panel p-8 md:p-12 rounded-3xl">
          <h2 className="text-3xl font-display font-bold mb-6 text-[var(--brand-secondary)]">
            Human Intelligence + Artificial Intelligence
          </h2>
          <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
            The modern engineer is an orchestrator. By leveraging AI coding assistants, 
            I accelerate the translation of architectural intent into production-ready code. 
            This paradigm shift elevates the role from writing boilerplate to designing systems, 
            optimizing performance, and ensuring product quality.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[var(--border-color)]">
            <div>
              <h3 className="font-bold text-[var(--text-primary)] mb-2">Ideation</h3>
              <p className="text-sm text-[var(--text-secondary)]">Rapid prototyping and architectural validation.</p>
            </div>
            <div>
              <h3 className="font-bold text-[var(--text-primary)] mb-2">Generation</h3>
              <p className="text-sm text-[var(--text-secondary)]">Boilerplate scaffolding and deterministic logic generation.</p>
            </div>
            <div>
              <h3 className="font-bold text-[var(--text-primary)] mb-2">Refinement</h3>
              <p className="text-sm text-[var(--text-secondary)]">Static analysis, testing, and performance optimization.</p>
            </div>
          </div>
        </div>

        <div className="text-center p-8 border border-[var(--border-color)] rounded-2xl bg-[var(--bg-surface)]">
          <p className="text-[var(--text-secondary)] italic">
            * Interactive AI Assistant capabilities are currently under development in the experimental branch.
          </p>
        </div>
      </section>
    </div>
  );
}
