import { Project } from "@/types";
import { TrackedLink } from "@/components/ui/tracked-link";
import { TiltCard } from "@/components/motion/tilt-card";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <TrackedLink 
      href={`/products/${project.slug}`} 
      eventName="project_opened"
      eventMetadata={{ projectId: project.id, category: project.category }}
      className="group block h-full"
    >
      <TiltCard className="h-full">
        <div className="glass-panel h-full p-6 rounded-2xl border border-[var(--border-color)] transition-all duration-300 hover:border-[var(--brand-primary)] hover:shadow-[0_0_30px_-10px_rgba(112,0,255,0.3)] flex flex-col relative z-10 bg-[var(--bg-surface)]/40 dark:bg-black/20">
          <div className="flex justify-between items-start mb-4">
            <div className="flex gap-2">
              <span className="inline-block px-3 py-1 bg-[var(--bg-surface)] text-[var(--text-secondary)] text-xs font-semibold rounded-full uppercase tracking-wider border border-[var(--border-color)]">
                {project.category}
              </span>
              <span className="inline-block px-3 py-1 bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] text-xs font-semibold rounded-full uppercase tracking-wider border border-[var(--border-color)]">
                {project.status === 'DATA_REQUIRED' ? 'In Development' : project.status}
              </span>
            </div>
            {project.featured && (
              <span className="text-[var(--brand-primary)] text-xs font-bold uppercase tracking-widest mt-1">
                Featured
              </span>
            )}
          </div>
          
          <h3 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--brand-primary)] transition-colors">
            {project.title}
          </h3>
          
          <p className="text-[var(--text-muted)] mb-6 line-clamp-2">
            {project.tagline}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded text-xs font-medium text-[var(--text-secondary)]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded text-xs font-medium text-[var(--text-secondary)]">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </TiltCard>
    </TrackedLink>
  );
}
