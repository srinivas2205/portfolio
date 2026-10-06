import type { CSSProperties, ReactNode } from "react";

/* MotionEffects observes these blocks and reveals each one once. */
export function Reveal({
  children,
  delay = 0,
  className,
  y = 18,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <div
      data-reveal
      className={`reveal-block ${className ?? ""}`.trim()}
      style={{ "--reveal-delay": `${delay}s`, "--reveal-y": `${y}px` } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`section-shell relative mx-auto w-full max-w-6xl ${className}`.trim()}>
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <Reveal className="section-header max-w-2xl">
      <p className="eyebrow text-[var(--accent-orange)]">{eyebrow}</p>
      <h2 className="section-title mt-3 font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="section-subtitle mt-4 text-[var(--muted)]">{subtitle}</p>}
    </Reveal>
  );
}
