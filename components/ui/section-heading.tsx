import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-8", className)} data-reveal>
      <p className="mb-2 text-xs uppercase tracking-[0.3em] text-cyan-300">Portfolio</p>
      <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-3xl text-cyan-100/75">{subtitle}</p> : null}
    </div>
  );
}
