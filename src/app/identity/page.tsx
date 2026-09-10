export const metadata = {
  title: "Identity Lab | AURA",
  description: "Engineering philosophy and values.",
};

export default function IdentityLab() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mb-12">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[var(--brand-primary)] mb-4">
          Identity Lab
        </h1>
        <p className="text-xl text-[var(--text-secondary)]">
          My core engineering philosophy: Build. Learn. Evolve. Repeat.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-panel p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">Product-Minded Engineering</h2>
          <p className="text-[var(--text-muted)] leading-relaxed">
            Code is a means to an end. The ultimate goal is delivering business value 
            and exceptional user experiences. I bridge the gap between technical architecture 
            and product strategy.
          </p>
        </div>
        
        <div className="glass-panel p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">Continuous Evolution</h2>
          <p className="text-[var(--text-muted)] leading-relaxed">
            Technology moves fast. Stagnation is the enemy. I embrace new paradigms, 
            frameworks, and languages, constantly refining my toolset to build better, 
            faster, and more resilient systems.
          </p>
        </div>
      </section>
    </div>
  );
}
