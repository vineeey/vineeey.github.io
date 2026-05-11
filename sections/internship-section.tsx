import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { internship } from "@/lib/data";

export function InternshipSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24" id="internship">
      <SectionHeading title="Internship" subtitle="Hands-on product engineering experience." />
      <GlassCard className="transition-transform duration-300 hover:-translate-y-1 hover:rotate-[0.4deg]" data-reveal>
        <h3 className="text-2xl font-semibold text-white">{internship.company}</h3>
        <p className="mt-2 text-cyan-100/80">{internship.role}</p>
        <p className="mt-1 text-sm uppercase tracking-[0.22em] text-cyan-300">{internship.duration}</p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-cyan-100/75">
          <li>Frontend and backend development</li>
          <li>Responsive UI development</li>
          <li>Debugging and testing</li>
          <li>Feature implementation</li>
          <li>Full-stack workflow exposure</li>
        </ul>
      </GlassCard>
    </section>
  );
}
