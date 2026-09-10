import { Capability } from "@/types";
import capabilitiesData from "@/data/capabilities.json";

export const metadata = {
  title: "Engineering Lab | AURA",
  description: "Technical capabilities and stack.",
};

export default function EngineeringLab() {
  const capabilities = capabilitiesData as Capability[];

  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mb-16 text-center">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[var(--brand-primary)] mb-4">
          Engineering Lab
        </h1>
        <p className="text-xl text-[var(--text-secondary)]">
          The technical foundation supporting the digital experience.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {capabilities.map((cap) => (
          <div key={cap.id} className="glass-panel p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6 border-b border-[var(--border-color)] pb-4">
              {cap.category}
            </h2>
            <div className="flex flex-wrap gap-3">
              {cap.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg text-sm font-medium text-[var(--text-secondary)] shadow-sm hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
