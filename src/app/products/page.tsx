import { Project } from "@/types";
import projectsData from "@/data/projects.json";
import { ProjectCard } from "@/components/projects/project-card";

export const metadata = {
  title: "Product Lab | AURA",
  description: "A portfolio of engineering products and case studies.",
};

export default function ProductLab() {
  const projects = projectsData as Project[];

  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mb-16 text-center">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[var(--brand-primary)] mb-4">
          Product Lab
        </h1>
        <p className="text-xl text-[var(--text-secondary)]">
          Engineering products, open-source tools, and architectural case studies.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
