import { Project } from "@/types";
import { TrackedLink } from "@/components/ui/tracked-link";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <TrackedLink 
      href={`/products/${project.slug}`} 
      eventName="project_opened"
      eventMetadata={{ projectId: project.id, category: project.category }}
      className="group block relative w-full aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9] rounded-3xl overflow-hidden glass-01 border border-[var(--border-color)] hover:border-[var(--brand-primary)]/50 transition-colors duration-500"
      data-cursor-text="EXPLORE"
    >
      {/* Background / Simulated Video Trailer Layer */}
      <div className="absolute inset-0 bg-[var(--bg-surface)] z-0 overflow-hidden">
        {/* Placeholder gradient background simulating a product cover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-surface)] opacity-100 group-hover:opacity-0 transition-opacity duration-700 z-10"></div>
        
        {/* "Trailer" layer that reveals and scales deeply on hover */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--brand-primary)_0%,var(--bg-primary)_100%)] opacity-0 group-hover:opacity-20 scale-100 group-hover:scale-150 transition-all duration-1000 ease-out z-0"></div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 z-0"></div>
      </div>

      {/* Deep Shadow Overlay (Always present at bottom, darkens on hover) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 group-hover:from-black group-hover:via-black/60 transition-all duration-500"></div>

      {/* Content Layer */}
      <div className="absolute inset-0 z-20 p-6 sm:p-8 flex flex-col justify-end transform group-hover:-translate-y-2 transition-transform duration-500">
        
        <div className="flex justify-between items-end w-full mb-4 opacity-100 sm:opacity-0 sm:-translate-y-4 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-500">
          <div className="flex gap-2">
            <span className="inline-block px-3 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-bold rounded-md uppercase tracking-widest border border-white/10">
              {project.category}
            </span>
            <span className={`inline-block px-3 py-1 bg-black/50 backdrop-blur-md text-xs font-bold rounded-md uppercase tracking-widest border border-white/10 ${project.status === 'DATA_REQUIRED' ? 'text-[var(--brand-accent)]' : 'text-[var(--brand-primary)]'}`}>
              {project.status === 'DATA_REQUIRED' ? 'In Development' : project.status}
            </span>
          </div>
          {project.featured && (
            <span className="text-[var(--brand-secondary)] text-xs font-bold uppercase tracking-widest bg-black/50 px-2 py-1 rounded-md border border-[var(--brand-secondary)]/30 backdrop-blur-md">
              Featured
            </span>
          )}
        </div>
        
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-2 drop-shadow-2xl">
          {project.title}
        </h3>
        
        <p className="text-gray-300 mb-6 max-w-2xl line-clamp-2 md:line-clamp-3 text-sm md:text-base font-medium opacity-100 sm:opacity-0 sm:translate-y-4 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-500 delay-100 drop-shadow-md">
          {project.tagline}
        </p>
        
        <div className="flex flex-wrap gap-2 opacity-100 sm:opacity-0 sm:translate-y-4 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-500 delay-200">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded text-xs font-bold text-white tracking-wider uppercase"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded text-xs font-bold text-white tracking-wider uppercase">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>
    </TrackedLink>
  );
}
