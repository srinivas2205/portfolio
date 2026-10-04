"use client";

import { Section, SectionHeader, Reveal, StaggerGroup, staggerItem } from "./Primitives";
import { m } from "framer-motion";
import { currentlyLearning } from "@/data/portfolio";

export default function Learning() {
  return (
    <Section id="learning">
      <SectionHeader
        eyebrow="03 — Currently Learning"
        title={
          <>
            Always <span className="text-gradient-warm">leveling up</span>
          </>
        }
        subtitle="I learn in public. Here's what's on my desk right now."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="glass h-full rounded-3xl p-7 sm:p-8">
            <h3 className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
              <span className="text-lg">🚧</span> In progress
            </h3>
            <StaggerGroup className="grid gap-3 sm:grid-cols-2">
              {currentlyLearning.map((item, i) => (
                <m.div
                  key={item}
                  variants={staggerItem}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5"
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-fuchsia-500/30 to-indigo-500/30 text-xs font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-white/90">{item}</span>
                </m.div>
              ))}
            </StaggerGroup>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass flex h-full flex-col justify-center rounded-3xl p-7 sm:p-8">
            <div className="mb-4 text-5xl">🌱</div>
            <blockquote className="text-pretty text-xl font-medium leading-relaxed text-white/90">
              &ldquo;Stay curious, build often, and ship what scares you a little.&rdquo;
            </blockquote>
            <p className="mt-4 text-sm text-[var(--muted)]">
              Currently in my {`2nd semester`} of BCA, balancing coursework with
              hands-on projects in full-stack development and machine learning.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
