import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Project } from "@/types";
import projectsData from "@/data/projects.json";

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
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h1 className="text-4xl font-display font-bold text-[var(--brand-primary)] mt-8 mb-4" {...props} />,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className="text-2xl font-display font-bold text-[var(--text-primary)] mt-8 mb-4 border-b border-[var(--border-color)] pb-2" {...props} />,
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p className="text-[var(--text-muted)] leading-relaxed mb-6" {...props} />,
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
    source = `\n\n> Case study content for **${project.title}** is currently being formulated.\n\n`;
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] text-sm font-semibold rounded-full uppercase tracking-wider">
            {project.category}
          </span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-4">
          {project.title}
        </h1>
        <p className="text-xl text-[var(--text-secondary)]">
          {project.tagline}
        </p>
      </header>

      <div className="glass-panel p-8 rounded-2xl mb-12">
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

      <article className="prose prose-invert max-w-none">
        <MDXRemote source={source} components={components} options={{ parseFrontmatter: true }} />
      </article>
    </div>
  );
}
