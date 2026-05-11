import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";

import { cn } from "@/lib/utils";

const glowButtonVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300",
  {
    variants: {
      variant: {
        primary:
          "border-cyan-300/60 bg-cyan-400/20 text-cyan-100 shadow-[0_0_28px_-10px_rgba(34,211,238,1)] hover:scale-[1.03] hover:bg-cyan-300/30",
        ghost:
          "border-purple-300/40 bg-purple-400/10 text-purple-100 hover:bg-purple-300/25",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type GlowButtonProps = VariantProps<typeof glowButtonVariants> & {
  href: string;
  children: React.ReactNode;
  external?: boolean;
};

export function GlowButton({
  className,
  href,
  children,
  variant,
  external,
}: GlowButtonProps & { className?: string }) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(glowButtonVariants({ variant }), className)}
    >
      {children}
    </Link>
  );
}
