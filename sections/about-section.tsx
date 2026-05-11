"use client";

import { motion } from "framer-motion";

import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { useCounter } from "@/hooks/use-counter";
import { aboutText } from "@/lib/data";

function Stat({ label, value }: { label: string; value: number }) {
  const count = useCounter(value);

  return (
    <GlassCard className="text-center">
      <p className="text-3xl font-bold text-cyan-100">{count}+</p>
      <p className="mt-1 text-sm text-cyan-100/70">{label}</p>
    </GlassCard>
  );
}

export function AboutSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24" id="about">
      <SectionHeading title="About Me" subtitle="Driven by intelligent systems, clean architecture, and scalable software." />
      <div className="grid gap-6 lg:grid-cols-3">
        <GlassCard className="lg:col-span-2" data-reveal>
          <p className="leading-8 text-cyan-100/90">{aboutText}</p>
        </GlassCard>
        <GlassCard className="relative flex items-center justify-center overflow-hidden" data-reveal>
          <motion.div
            className="cube"
            animate={{ rotateX: 360, rotateY: 360 }}
            transition={{ duration: 14, ease: "linear", repeat: Infinity }}
          >
            <div>Python</div>
            <div>Django</div>
            <div>AI</div>
            <div>ML</div>
            <div>SQL</div>
            <div>Web</div>
          </motion.div>
        </GlassCard>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-3" data-reveal>
        <Stat label="Projects Built" value={12} />
        <Stat label="AI Integrations" value={8} />
        <Stat label="Hackathon Hours" value={300} />
      </div>
    </section>
  );
}
