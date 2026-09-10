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
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h1 className="text-display-l text-[var(--text-primary)] mt-16 mb-8" {...props} />,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className="text-display-m text-[var(--text-primary)] mt-12 mb-6" {...props} />,
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h3 className="text-xl font-display font-bold text-[var(--brand-secondary)] mt-10 mb-4" {...props} />,
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p className="text-body-lg text-[var(--text-secondary)] mb-6" {...props} />,
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul className="list-disc pl-6 mb-8 space-y-3 text-[var(--text-secondary)] text-lg" {...props} />,
  li: (props: React.HTMLAttributes<HTMLLIElement>) => <li className="text-body text-[var(--text-secondary)]" {...props} />,
  blockquote: (props: React.HTMLAttributes<HTMLElement>) => (
    <blockquote className="border-l-4 border-[var(--brand-primary)] pl-8 py-4 my-10 glass-01 rounded-r-2xl italic text-xl font-light text-[var(--text-primary)]" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <a className="text-[var(--brand-primary)] hover:text-[var(--brand-secondary)] underline decoration-transparent hover:decoration-[var(--brand-secondary)] transition-all" {...props} />
};

export default async function ProjectCaseStudy({ params }: PageProps) {
  const resolvedParams = await params;
  const project = (projectsData as Project[]).find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const filePath = path.join(process.cwd(), "src", "content", "products", `${resolvedParams.slug}.mdx`);
  let source = "";
  let isDataRequired = false;

  try {
    source = fs.readFileSync(filePath, "utf-8");
  } catch {
    isDataRequired = true;
  }

  return (
    <div className="relative w-full min-h-screen pb-32">
      
      {/* Full-Bleed Cinematic Hero */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-end pb-16 pt-32 overflow-hidden border-b border-[var(--border-color)]">
        {/* Cinematic Background */}
        <div className="absolute inset-0 bg-[var(--bg-primary)] z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/20 to-[var(--bg-primary)] mix-blend-screen"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--brand-secondary)_0%,transparent_60%)] opacity-20"></div>
          {/* Scanlines / Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          {/* Deep Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 glass-02 text-[var(--text-primary)] text-xs font-bold rounded-md uppercase tracking-widest border border-[var(--border-color)]">
              {project.category}
            </span>
            <span className={`px-3 py-1 glass-02 text-xs font-bold rounded-md uppercase tracking-widest border ${project.status === "DATA_REQUIRED" ? "text-[var(--brand-accent)] border-[var(--brand-accent)]/50" : "text-[var(--brand-primary)] border-[var(--brand-primary)]/50"}`}>
              {project.status === "DATA_REQUIRED" ? "In Development" : project.status}
            </span>
          </div>
          
          <h1 className="text-display-xl text-[var(--text-primary)] mb-6 drop-shadow-2xl max-w-4xl">
            {project.title}
          </h1>
          
          <p className="text-2xl text-[var(--text-secondary)] leading-relaxed font-light mb-10 max-w-3xl">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            {project.githubUrl && (
              <TrackedLink 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                eventName="github_clicked"
                eventMetadata={{ projectId: project.id, url: project.githubUrl }}
              >
                <button className="px-6 py-3 glass-02 rounded-xl text-sm font-bold uppercase tracking-widest text-[var(--text-primary)] hover:border-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/10 transition-all shadow-lg border border-[var(--border-color)]">
                  Source Code
                </button>
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
                <button className="px-6 py-3 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] rounded-xl text-sm font-bold uppercase tracking-widest text-white hover:opacity-90 transition-all shadow-[0_0_20px_rgba(112,0,255,0.3)]">
                  Live System
                </button>
              </TrackedLink>
            )}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-5xl mt-16">
        {/* Core Metadata */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
          <div className="md:col-span-4 glass-02 p-8 rounded-3xl border-l-2 border-[var(--brand-primary)] h-full">
            <span className="text-label text-[var(--brand-primary)] mb-4 block">ARCHITECTURE ROLE</span>
            <p className="text-[var(--text-primary)] text-xl font-medium">{project.role}</p>
          </div>
          <div className="md:col-span-8 glass-02 p-8 rounded-3xl border-l-2 border-[var(--brand-secondary)] h-full">
            <span className="text-label text-[var(--brand-secondary)] mb-4 block">TECHNICAL STACK</span>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 glass-01 border border-[var(--border-color)] rounded-lg text-sm font-bold uppercase tracking-wider text-[var(--text-primary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <article className="prose prose-invert max-w-4xl mx-auto prose-img:rounded-3xl prose-img:border prose-img:border-[var(--border-color)] prose-img:shadow-2xl">
          {isDataRequired ? (
            <div className="glass-04 p-12 rounded-[2.5rem] text-center border border-[var(--border-color)] relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--brand-accent)_0%,transparent_50%)] opacity-5"></div>
              <span className="inline-block w-3 h-3 rounded-full bg-[var(--brand-accent)] animate-pulse mb-6 shadow-[0_0_15px_var(--brand-accent)]"></span>
              <h2 className="text-display-m text-[var(--text-primary)] mb-4">Classified Payload</h2>
              <p className="text-xl text-[var(--text-secondary)] font-light max-w-xl mx-auto">
                Detailed architectural documentation and case study metrics for <strong className="text-[var(--brand-accent)]">{project.title}</strong> are currently under development. Please query again later.
              </p>
            </div>
          ) : (
            <MDXRemote source={source} components={components} options={{ parseFrontmatter: true }} />
          )}
        </article>
      </div>
    </div>
  );
}
