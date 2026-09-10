import { JourneyMilestone } from "@/types";
import journeyData from "@/data/journey.json";

export const metadata = {
  title: "Journey Lab | AURA",
  description: "Chronological timeline of growth, milestones, and evolution.",
};

export default function JourneyLab() {
  const milestones = journeyData as JourneyMilestone[];

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <header className="mb-16 text-center">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[var(--brand-primary)] mb-4">
          Journey Lab
        </h1>
        <p className="text-xl text-[var(--text-secondary)]">
          The path of continuous evolution and architectural growth.
        </p>
      </header>

      <div className="relative border-l border-[var(--border-color)] ml-4 md:ml-8 space-y-12">
        {milestones.map((milestone) => (
          <div key={milestone.id} className="relative pl-8 md:pl-12">
            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-[var(--brand-primary)] border-4 border-[var(--bg-primary)]" />
            <div className="glass-panel p-6 rounded-xl hover:border-[var(--brand-secondary)] transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-[var(--text-primary)]">{milestone.title}</h3>
                <span className="inline-block px-3 py-1 bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] text-sm font-medium rounded-full mt-2 md:mt-0">
                  {milestone.year}
                </span>
              </div>
              <p className="text-sm text-[var(--brand-secondary)] font-medium mb-3 uppercase tracking-wider">
                {milestone.category}
              </p>
              <p className="text-[var(--text-muted)] leading-relaxed">
                {milestone.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
