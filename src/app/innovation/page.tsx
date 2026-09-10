export const metadata = {
  title: "Innovation Lab | AURA",
  description: "Future ideas and experiments.",
};

export default function InnovationLab() {
  const horizons = [
    {
      title: "Now (0-6 Months)",
      items: [
        "Interactive AI Chatbot Integration",
        "Real-time GitHub Pipeline via Webhooks",
        "Performance optimization to 100/100 Lighthouse score"
      ],
      color: "var(--brand-primary)"
    },
    {
      title: "Next (6-12 Months)",
      items: [
        "WebAssembly module processing for local datasets",
        "Spatial UI with React Three Fiber",
        "Headless CMS decoupling for Case Studies"
      ],
      color: "var(--brand-secondary)"
    },
    {
      title: "Future (12+ Months)",
      items: [
        "Personalized visitor experiences using Edge Middleware",
        "AURA SDK for generic portfolio generation",
        "Integration with autonomous agent swarms"
      ],
      color: "var(--text-primary)"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mb-16 text-center">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[var(--brand-primary)] mb-4">
          Innovation Lab
        </h1>
        <p className="text-xl text-[var(--text-secondary)]">
          The roadmap. Where AURA goes next.
        </p>
      </header>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {horizons.map((horizon) => (
          <div key={horizon.title} className="glass-panel p-8 rounded-2xl border-t-4" style={{ borderTopColor: horizon.color }}>
            <h2 className="text-2xl font-bold mb-6 text-[var(--text-primary)]">{horizon.title}</h2>
            <ul className="space-y-4">
              {horizon.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-3 text-lg font-black" style={{ color: horizon.color }}>+</span>
                  <span className="text-[var(--text-muted)] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
