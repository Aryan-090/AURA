export type ProjectCategory = "Flagship" | "Production" | "Learning";

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  coverImage?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface JourneyMilestone {
  id: string;
  year: string;
  title: string;
  description: string;
  category: "Education" | "Career" | "Achievement";
}

export interface Capability {
  id: string;
  category: "Frontend" | "Backend" | "Cloud" | "Tools";
  skills: string[];
}
