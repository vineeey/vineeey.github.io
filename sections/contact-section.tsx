import { BriefcaseBusiness, Code2, Mail, MapPin, Phone } from "lucide-react";

import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/lib/data";

export function ContactSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24" id="contact">
      <SectionHeading title="Contact" subtitle="Let us build meaningful AI-powered products together." />
      <div className="grid gap-6 lg:grid-cols-2" data-reveal>
        <GlassCard>
          <form className="space-y-4">
            <input placeholder="Your Name" className="input-glow" />
            <input placeholder="Email" className="input-glow" type="email" />
            <textarea placeholder="Tell me about your project" className="input-glow min-h-32" />
            <button className="w-full rounded-xl border border-cyan-300/50 bg-cyan-300/20 px-4 py-3 font-semibold text-cyan-100 shadow-[0_0_20px_-6px_rgba(34,211,238,1)] transition hover:bg-cyan-300/35" type="button">
              Send Message
            </button>
          </form>
        </GlassCard>
        <GlassCard className="space-y-4">
          <a href={`mailto:${profile.email}`} className="contact-link">
            <Mail className="size-4" /> {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="contact-link">
            <Phone className="size-4" /> {profile.phone}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-link">
            <BriefcaseBusiness className="size-4" /> LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="contact-link">
            <Code2 className="size-4" /> GitHub
          </a>
          <p className="contact-link">
            <MapPin className="size-4" /> Kannur, Kerala, India
          </p>
        </GlassCard>
      </div>
    </section>
  );
}
