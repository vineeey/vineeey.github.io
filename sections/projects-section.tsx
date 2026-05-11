"use client";

import { motion } from "framer-motion";

import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24" id="projects">
      <SectionHeading title="Projects" subtitle="3D-inspired showcase cards with premium neon treatment." />
      <div className="grid gap-5 lg:grid-cols-2" data-reveal>
        {projects.map((project) => (
          <motion.div key={project.title} whileHover={{ y: -6, rotateX: 3, rotateY: -3 }} transition={{ type: "spring", stiffness: 220 }}>
            <GlassCard className="h-full border-cyan-200/30 bg-gradient-to-b from-cyan-300/10 via-transparent to-fuchsia-300/10">
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-cyan-300/30 px-3 py-1 text-xs text-cyan-100/90">
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-cyan-100/80">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
