import innovationData from "@/data/innovation.json";
import { TiltCard } from "@/components/motion/tilt-card";

export const metadata = {
  title: "Innovation Lab | AURA",
  description: "Future ideas and engineering explorations.",
};

export default function InnovationLab() {
  const horizons = [
    {
      title: "Now",
      subtitle: "Current Focus",
      items: innovationData.now,
      color: "var(--brand-primary)"
    },
    {
      title: "Next",
      subtitle: "Exploration",
      items: innovationData.next,
      color: "var(--brand-secondary)"
    },
    {
      title: "Future",
      subtitle: "Long-term Ambitions",
      items: innovationData.future,
      color: "var(--text-primary)"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[var(--brand-primary)] mb-4">
          Innovation Lab
        </h1>
        <p className="text-xl text-[var(--text-secondary)]">
          What I am learning. What I want to build. Where I am going.
        </p>
      </header>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {horizons.map((horizon) => (
          <TiltCard key={horizon.title} className="h-full">
            <div className="glass-panel p-8 rounded-2xl border-t-4 h-full" style={{ borderTopColor: horizon.color }}>
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-1">{horizon.title}</h2>
                <p className="text-sm uppercase tracking-widest font-medium text-[var(--text-secondary)]">{horizon.subtitle}</p>
              </div>
              <ul className="space-y-4">
                {horizon.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-3 text-lg font-black" style={{ color: horizon.color }}>+</span>
                    <span className="text-[var(--text-muted)] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TiltCard>
        ))}
      </div>

      <section className="max-w-3xl mx-auto text-center">
        <TiltCard>
          <div className="glass-panel p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)]">
            <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">The Vision</h2>
            <p className="text-lg text-[var(--text-muted)] leading-relaxed italic">
              &quot;{innovationData.vision}&quot;
            </p>
          </div>
        </TiltCard>
      </section>
    </div>
  );
}
