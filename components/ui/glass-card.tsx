import { cn } from "@/lib/utils";

type GlassCardProps = React.HTMLAttributes<HTMLDivElement>;

export function GlassCard({ className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-cyan-300/20 bg-white/5 p-6 shadow-[0_0_40px_-18px_rgba(45,212,191,0.8)] backdrop-blur-xl",
        className,
      )}
      {...props}
    />
  );
}
