"use client";

import { Section, SectionHeader, Reveal, StaggerGroup, staggerItem } from "./Primitives";
import { m } from "framer-motion";
import { interests, hobbies, languages } from "@/data/portfolio";

export default function Interests() {
  return (
    <Section id="interests">
      <SectionHeader
        eyebrow="05 — Beyond Code"
        title={
          <>
            What <span className="text-gradient">fuels</span> me
          </>
        }
        subtitle="The pursuits, passions, and people-skills that round out the picture."
      />

      {/* Interests chips */}
      <Reveal className="mb-8">
        <div className="flex flex-wrap gap-2.5">
          {interests.map((interest, i) => (
            <m.span
              key={interest}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              whileHover={{ scale: 1.06 }}
              className="cursor-default rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/85"
            >
              {interest}
            </m.span>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Hobbies */}
        <Reveal>
          <div className="glass h-full rounded-3xl p-7 sm:p-8">
            <h3 className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
              <span className="text-lg">🎨</span> Hobbies
            </h3>
            <StaggerGroup className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {hobbies.map((h) => (
                <m.div
                  key={h.label}
                  variants={staggerItem}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5"
                >
                  <span className="text-2xl" aria-hidden>
                    {h.icon}
                  </span>
                  <span className="text-sm font-medium text-white/90">
                    {h.label}
                  </span>
                </m.div>
              ))}
            </StaggerGroup>
          </div>
        </Reveal>

        {/* Languages spoken */}
        <Reveal delay={0.1}>
          <div className="glass h-full rounded-3xl p-7 sm:p-8">
            <h3 className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
              <span className="text-lg">🗣️</span> Languages spoken
            </h3>
            <StaggerGroup className="flex flex-col gap-3">
              {languages.map((lang) => (
                <m.div
                  key={lang.label}
                  variants={staggerItem}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-3.5"
                >
                  <span className="text-sm font-medium text-white/90">
                    {lang.label}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide ${
                      lang.level === "Fluent"
                        ? "bg-emerald-400/15 text-emerald-300"
                        : "bg-amber-400/15 text-amber-300"
                    }`}
                  >
                    {lang.level}
                  </span>
                </m.div>
              ))}
            </StaggerGroup>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
