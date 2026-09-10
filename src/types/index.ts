export type ProjectCategory = "Professional" | "Personal" | "Additional";
export type ProjectStatus = "Ongoing" | "Completed" | "DATA_REQUIRED";

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  status: ProjectStatus;
  role: string;
  year?: string;
  technologies: string[];
  coverImage?: string;
  gallery?: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  overview?: string;
  problem?: string;
  objective?: string;
  solution?: string;
  architecture?: string;
  keyFeatures?: string[];
  challenges?: string[];
  decisions?: string[];
  learnings?: string[];
  impact?: string;
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
  category: string;
  skills: string[];
}
