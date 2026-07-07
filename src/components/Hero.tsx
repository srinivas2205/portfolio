"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { profile } from "@/data/portfolio";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-5 pt-28 pb-16 text-center sm:px-8"
    >
      {/* Availability pill */}
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-[var(--muted)]"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        Open to opportunities · {profile.location}
      </motion.div>

      {/* Portrait */}
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease }}
        className="ring-spin relative mb-8 grid h-28 w-28 place-items-center rounded-full sm:h-32 sm:w-32"
      >
        <div className="grid h-full w-full place-items-center rounded-full bg-[var(--background)]">
          <span className="bg-gradient-to-br from-fuchsia-400 via-purple-400 to-indigo-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            {profile.initials}
          </span>
        </div>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease }}
        className="text-balance text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl"
      >
        <span className="text-gradient">{profile.name}</span>
      </motion.h1>

      {/* Rotating roles */}
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease }}
        className="mt-5 h-8 overflow-hidden"
      >
        <RoleRotator roles={profile.roles} />
      </motion.div>

      {/* Headline */}
      <motion.p
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease }}
        className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-[var(--muted)] sm:text-lg"
      >
        {profile.headline}
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease }}
        className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
      >
        <a
          href="#projects"
          className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition-transform hover:scale-105"
        >
          View my work
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
        >
          Contact me
        </a>
      </motion.div>

      {/* Social row */}
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease }}
        className="mt-12 flex items-center gap-6 text-sm text-[var(--muted)]"
      >
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-white"
        >
          GitHub ↗
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="transition-colors hover:text-white"
        >
          Email ↗
        </a>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={reduce ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1"
        >
          <span className="h-2 w-1 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* Cycles through role strings with a vertical slide */
function RoleRotator({ roles }: { roles: string[] }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % roles.length), 2800);
    return () => clearInterval(t);
  }, [roles.length]);

  return (
    <div className="relative flex h-8 items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease }}
          className="text-lg font-semibold text-white/90 sm:text-xl"
        >
          {roles[idx]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
