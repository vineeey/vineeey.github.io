import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { education } from "@/lib/data";

export function EducationSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24" id="education">
      <SectionHeading title="Education" subtitle="Futuristic learning timeline with AI-first focus." />
      <div className="relative pl-8" data-reveal>
        <div className="absolute bottom-0 left-2 top-0 w-px bg-gradient-to-b from-cyan-300/30 via-fuchsia-300/40 to-transparent" />
        <div className="absolute left-0 top-8 size-4 rounded-full bg-cyan-300 shadow-[0_0_20px_2px_rgba(34,211,238,0.9)]" />
        <GlassCard>
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">{education.graduation}</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{education.college}</h3>
          <p className="mt-2 text-cyan-100/80">{education.degree}</p>
        </GlassCard>
      </div>
    </section>
  );
}
