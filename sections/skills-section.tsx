"use client";

import { motion } from "framer-motion";

import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { skills } from "@/lib/data";

function SkillOrbit({ items }: { items: string[] }) {
  return (
    <div className="relative mx-auto mt-8 flex size-72 items-center justify-center rounded-full border border-cyan-300/30">
      {items.map((skill, index) => {
        const angle = (index / items.length) * Math.PI * 2;
        const x = Math.cos(angle) * 120;
        const y = Math.sin(angle) * 120;
        return (
          <motion.div
            key={skill}
            className="absolute rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100"
            animate={{ x, y }}
            transition={{ duration: 5 + index * 0.4, repeat: Infinity, repeatType: "mirror" }}
          >
            {skill}
          </motion.div>
        );
      })}
      <div className="rounded-full border border-fuchsia-300/30 bg-fuchsia-300/10 px-4 py-2 text-sm text-fuchsia-100">Core Skills</div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24" id="skills">
      <SectionHeading title="Skills" subtitle="Interactive skill clusters with floating neon orbit." />
      <div className="grid gap-6 lg:grid-cols-3" data-reveal>
        <GlassCard>
          <h3 className="text-lg font-semibold text-cyan-100">Programming</h3>
          <ul className="mt-3 space-y-2 text-cyan-100/80">
            {skills.programming.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </GlassCard>
        <GlassCard>
          <h3 className="text-lg font-semibold text-cyan-100">Frameworks</h3>
          <ul className="mt-3 space-y-2 text-cyan-100/80">
            {skills.frameworks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </GlassCard>
        <GlassCard>
          <h3 className="text-lg font-semibold text-cyan-100">AI Tools</h3>
          <ul className="mt-3 space-y-2 text-cyan-100/80">
            {skills.aiTools.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </GlassCard>
      </div>
      <SkillOrbit
        items={[
          "Artificial Intelligence",
          "Machine Learning",
          "Backend Development",
          "Full Stack Development",
          "Data Science",
        ]}
      />
    </section>
  );
}
