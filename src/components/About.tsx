"use client";

import { Section, SectionHeader, Reveal, StaggerGroup, staggerItem } from "./Primitives";
import { motion } from "framer-motion";
import { about, education, profile, goals } from "@/data/portfolio";

export default function About() {
  return (
    <Section id="about">
      <SectionHeader
        eyebrow="01 — About"
        title={
          <>
            A bit about <span className="text-gradient">me</span>
          </>
        }
      />

      <div className="grid gap-6 lg:grid-cols-5">
        {/* Bio + education */}
        <Reveal className="lg:col-span-3">
          <div className="glass h-full rounded-3xl p-7 sm:p-9">
            <p className="text-pretty text-lg leading-relaxed text-white/85 sm:text-xl">
              {about.text}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <InfoChip label="📍" value={profile.location} />
              <InfoChip label="🎓" value={education.degree} />
              <InfoChip label="📘" value={education.semester} />
            </div>
          </div>
        </Reveal>

        {/* Goals card */}
        <Reveal delay={0.1} className="lg:col-span-2">
          <div className="glass h-full rounded-3xl p-7 sm:p-9">
            <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
              <span className="text-lg">🎯</span> Goals
            </h3>
            <StaggerGroup className="flex flex-col gap-3">
              {goals.map((g) => (
                <motion.li
                  key={g}
                  variants={staggerItem}
                  className="flex items-start gap-3 text-sm text-white/80"
                >
                  <span className="mt-1 text-fuchsia-400">▹</span>
                  {g}
                </motion.li>
              ))}
            </StaggerGroup>
          </div>
        </Reveal>
      </div>

      {/* Stats row */}
      <Reveal delay={0.15}>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Stat value="5+" label="Languages coded" />
          <Stat value="7+" label="Tech stacks" />
          <Stat value="6" label="Languages spoken" />
          <Stat value="∞" label="Curiosity" />
        </div>
      </Reveal>
    </Section>
  );
}

function InfoChip({ label, value }: { label: string; value: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80">
      <span aria-hidden>{label}</span>
      {value}
    </span>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="glass rounded-2xl p-5 text-center">
      <div className="text-3xl font-bold text-gradient sm:text-4xl">{value}</div>
      <div className="mt-1 text-xs text-[var(--muted)]">{label}</div>
    </div>
  );
}
