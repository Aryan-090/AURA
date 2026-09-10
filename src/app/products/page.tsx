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
    <div className="container mx-auto px-4 py-16">
      <header className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[var(--brand-primary)] mb-4">
          Product Lab
        </h1>
        <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
          Engineering products, open-source tools, and architectural case studies.
        </p>
      </header>

      <ProductFilter projects={projects} />
    </div>
  );
}
