import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Project } from "@/types";
import projectsData from "@/data/projects.json";
import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/ui/tracked-link";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = projectsData as Project[];
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const project = (projectsData as Project[]).find((p) => p.slug === resolvedParams.slug);
  
  if (!project) return { title: "Not Found" };
  
  return {
    title: `${project.title} | AURA`,
    description: project.tagline,
  };
}

import * as React from "react";

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h1 className="text-4xl font-display font-bold text-[var(--brand-primary)] mt-12 mb-6" {...props} />,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className="text-2xl font-display font-bold text-[var(--text-primary)] mt-10 mb-4 border-b border-[var(--border-color)] pb-2" {...props} />,
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h3 className="text-xl font-display font-bold text-[var(--brand-secondary)] mt-8 mb-4" {...props} />,
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-6" {...props} />,
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul className="list-disc pl-6 mb-6 space-y-2 text-[var(--text-muted)]" {...props} />,
  li: (props: React.HTMLAttributes<HTMLLIElement>) => <li className="text-[var(--text-muted)] leading-relaxed" {...props} />,
  blockquote: (props: React.HTMLAttributes<HTMLElement>) => (
    <blockquote className="border-l-4 border-[var(--brand-primary)] pl-6 py-2 my-8 bg-[var(--bg-surface)] rounded-r-xl italic text-[var(--text-secondary)]" {...props} />
  ),
};

export default async function ProjectCaseStudy({ params }: PageProps) {
  const resolvedParams = await params;
  const project = (projectsData as Project[]).find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const filePath = path.join(process.cwd(), "src", "content", "products", `${resolvedParams.slug}.mdx`);
  let source = "";

  try {
    source = fs.readFileSync(filePath, "utf-8");
  } catch {
    // If the MDX file doesn't exist yet, we show a fallback
    source = `\n\n> Case study content for **${project.title}** is currently in development. This project is marked as DATA_REQUIRED.\n\n`;
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <header className="mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="px-3 py-1 bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-secondary)] text-sm font-semibold rounded-full uppercase tracking-wider">
            {project.category}
          </span>
          <span className="px-3 py-1 bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] text-sm font-semibold rounded-full uppercase tracking-wider">
            {project.status === "DATA_REQUIRED" ? "In Development" : project.status}
          </span>
        </div>
        <h1 className="font-display text-5xl sm:text-6xl font-bold text-[var(--text-primary)] mb-6">
          {project.title}
        </h1>
        <p className="text-2xl text-[var(--text-secondary)] leading-relaxed font-light mb-8">
          {project.tagline}
        </p>

        <div className="flex flex-wrap gap-4 pt-4 border-t border-[var(--border-color)]">
          {project.githubUrl && (
            <TrackedLink 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              eventName="github_clicked"
              eventMetadata={{ projectId: project.id, url: project.githubUrl }}
            >
              <Button variant="secondary">View on GitHub</Button>
            </TrackedLink>
          )}
          {project.liveUrl && (
            <TrackedLink 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              eventName="github_clicked"
              eventMetadata={{ projectId: project.id, url: project.liveUrl, type: "live_url" }}
            >
              <Button>View Live Project</Button>
            </TrackedLink>
          )}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="glass-panel p-8 rounded-2xl">
          <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--brand-secondary)] mb-4">Role</h3>
          <p className="text-[var(--text-primary)] text-lg font-medium">{project.role}</p>
        </div>
        <div className="glass-panel p-8 rounded-2xl">
          <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--brand-secondary)] mb-4">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-md text-sm font-medium text-[var(--text-primary)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <article className="prose prose-invert max-w-none prose-img:rounded-2xl">
        <MDXRemote source={source} components={components} options={{ parseFrontmatter: true }} />
      </article>
    </div>
  );
}
