import { Project } from "@/types";
import projectsData from "@/data/projects.json";
import { ProductFilter } from "@/components/features/product-filter";

export const metadata = {
  title: "Product Lab | AURA",
  description: "A portfolio of engineering products and case studies.",
};

export default function ProductLab() {
  const projects = projectsData as Project[];

  return (
    <div className="relative w-full min-h-screen py-24 md:py-32 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(circle_at_center,var(--brand-primary)_0%,transparent_50%)] opacity-5 mix-blend-screen blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <header className="mb-24 text-center max-w-4xl mx-auto">
          <span className="text-label text-[var(--brand-primary)] mb-4 block tracking-widest">06 / PRODUCT LAB</span>
          <h1 className="text-display-l text-[var(--text-primary)] mb-6">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)]">Excellence</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
            A curated selection of my practical engineering products, open-source tools, and architectural case studies.
          </p>
        </header>

        <ProductFilter projects={projects} />
      </div>
    </div>
  );
}
