import type { HTMLAttributes, ReactNode } from "react";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

/**
 * Server-rendered card surface shared by the content sections.
 */
export default function GlassCard({ className, children, ...props }: GlassCardProps) {
  return (
    <div className={`glass-card ${className ?? ""}`.trim()} {...props}>
      {children}
    </div>
  );
}
