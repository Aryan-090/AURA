import profileData from "@/data/profile.json";
import { TiltCard } from "@/components/motion/tilt-card";

export const metadata = {
  title: "Identity Lab | AURA",
  description: "Who is Aryan Dhandhukiya? Engineering philosophy and values.",
};

export default function IdentityLab() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mb-16 max-w-3xl">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[var(--brand-primary)] mb-6">
          Identity Lab
        </h1>
        <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
          {profileData.identity.positioning}
        </p>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-[var(--text-primary)]">Who is Aryan?</h2>
        <TiltCard>
          <div className="glass-panel p-8 rounded-2xl">
            <p className="text-[var(--text-muted)] text-lg leading-relaxed">
              {profileData.introduction}
            </p>
          </div>
        </TiltCard>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <TiltCard className="h-full">
          <div className="glass-panel p-8 rounded-2xl border-t-4 border-[var(--brand-primary)] h-full">
            <h2 className="text-2xl font-semibold mb-4 text-[var(--text-primary)]">Philosophy</h2>
            <p className="text-[var(--brand-secondary)] text-xl font-medium mb-4">
              {profileData.philosophy}
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed">
              {profileData.belief}
            </p>
          </div>
        </TiltCard>
        
        <TiltCard className="h-full">
          <div className="glass-panel p-8 rounded-2xl border-t-4 border-[var(--brand-secondary)] h-full">
            <h2 className="text-2xl font-semibold mb-4 text-[var(--text-primary)]">Work Ethic</h2>
            <p className="text-[var(--text-muted)] leading-relaxed italic border-l-2 border-[var(--text-muted)] pl-4">
              &quot;{profileData.workEthic}&quot;
            </p>
          </div>
        </TiltCard>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-[var(--text-primary)]">Engineering Strengths</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {profileData.strengths.map((strength, index) => (
            <TiltCard key={index}>
              <div className="glass-panel p-6 rounded-xl flex items-center space-x-4 h-full">
                <div className="w-2 h-2 rounded-full bg-[var(--brand-primary)] shrink-0"></div>
                <span className="text-[var(--text-secondary)] font-medium">{strength}</span>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>
    </div>
  );
}
