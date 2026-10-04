"use client";

import { m, useReducedMotion, type Variants } from "framer-motion";
import {
  Children,
  cloneElement,
  isValidElement,
  type ReactNode,
} from "react";

/* Fade + rise on scroll into view */
export function Reveal({
  children,
  delay = 0,
  className,
  y = 24,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  const reduced = reduce === true;

  return (
    <m.div
      className={`motion-reveal ${className ?? ""}`.trim()}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -10% 0px" }}
      transition={{
        duration: reduced ? 0 : 0.6,
        delay: reduced ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </m.div>
  );
}

/* Stagger container — children use .stagger-item */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const reducedStaggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0, delayChildren: 0 },
  },
};

export const staggerItem: Variants = {
  hidden: (prefersReducedMotion = false) =>
    prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
  show: (prefersReducedMotion = false) => ({
    opacity: 1,
    y: 0,
    transition: prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

type StaggerChildProps = {
  custom?: boolean;
};

export function StaggerGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const reduced = reduce === true;
  const staggeredChildren = reduced
    ? Children.map(children, (child) =>
        isValidElement<StaggerChildProps>(child)
          ? cloneElement(child, { custom: true })
          : child
      )
    : children;

  return (
    <m.div
      className={`stagger-group ${className ?? ""}`.trim()}
      variants={reduced ? reducedStaggerContainer : staggerContainer}
      initial={reduced ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -10% 0px" }}
    >
      {staggeredChildren}
    </m.div>
  );
}

/* Section shell with id + consistent spacing */
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
    <section
      id={id}
      className={`section-shell relative mx-auto w-full max-w-6xl ${className}`.trim()}
    >
      {children}
    </section>
  );
}

/* Section header: eyebrow + big title */
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
      <p className="eyebrow text-pink-400">{eyebrow}</p>
      <h2 className="section-title mt-3 font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="section-subtitle mt-4 text-[var(--muted)]">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
