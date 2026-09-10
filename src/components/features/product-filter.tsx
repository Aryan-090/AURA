"use client";

import { useState } from "react";
import { Project } from "@/types";
import { ProjectCard } from "@/components/projects/project-card";
import { motion, AnimatePresence } from "framer-motion";

interface ProductFilterProps {
  projects: Project[];
}

export function ProductFilter({ projects }: ProductFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Professional", "Personal", "Additional"];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeCategory === cat
                ? "bg-[var(--brand-primary)] text-white shadow-lg"
                : "bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--brand-primary)] border border-[var(--border-color)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-24 text-[var(--text-muted)]">
          No projects found in this category.
        </div>
      )}
    </div>
  );
}
