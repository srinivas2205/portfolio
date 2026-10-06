import type { HTMLAttributes, ReactNode } from "react";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

/**
 * Server-rendered signature card. MotionEffects owns the single delegated
 * pointer listener so every card stays cheap to render and hydrate.
 */
export default function GlassCard({ className, children, ...props }: GlassCardProps) {
  return (
    <div className={`glass-card ${className ?? ""}`.trim()} {...props}>
      {children}
    </div>
  );
}
