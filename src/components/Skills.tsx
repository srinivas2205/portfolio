"use client";

import { Section, SectionHeader, StaggerGroup, staggerItem } from "./Primitives";
import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        eyebrow="02 — Skills"
        title={
          <>
            My <span className="text-gradient">toolbox</span>
          </>
        }
        subtitle="The languages, frameworks, and tools I work with — and the ones I'm actively leveling up."
      />

      <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <motion.div
            key={group.category}
            variants={staggerItem}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass group relative overflow-hidden rounded-3xl p-6"
          >
            {/* gradient glow on hover */}
            <div
              className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${group.accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40`}
            />

            <div className="mb-5 flex items-center gap-3">
              <span
                className={`h-2.5 w-2.5 rounded-full bg-gradient-to-br ${group.accent}`}
              />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
                {group.category}
              </h3>
            </div>

            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item.name}>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/85 transition-colors hover:border-white/25 hover:bg-white/10`}
                  >
                    {item.name}
                    {item.learning && (
                      <span className="rounded bg-amber-400/20 px-1.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide text-amber-300">
                        learning
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </StaggerGroup>
    </Section>
  );
}
