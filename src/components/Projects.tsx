"use client";

import { Section, SectionHeader, Reveal, StaggerGroup, staggerItem } from "./Primitives";
import { motion } from "framer-motion";
import { projects, projectPipeline, type Project } from "@/data/portfolio";

const STATUS_STYLES: Record<string, string> = {
  shipped: "bg-emerald-400/15 text-emerald-300 border-emerald-400/30",
  "in-progress": "bg-amber-400/15 text-amber-300 border-amber-400/30",
  planned: "bg-sky-400/15 text-sky-300 border-sky-400/30",
};

export default function Projects() {
  const hasProjects = projects.length > 0;

  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="04 — Projects"
        title={
          <>
            Things I&apos;m <span className="text-gradient">building</span>
          </>
        }
        subtitle={
          hasProjects
            ? "A selection of projects I've designed, built, and shipped."
            : "Real projects are coming soon — here's what's on my roadmap."
        }
      />

      {hasProjects ? (
        <StaggerGroup className="grid gap-5 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </StaggerGroup>
      ) : (
        /* Pipeline / placeholder state */
        <Reveal>
          <div className="glass rounded-3xl p-7 sm:p-9">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-2xl">🛠️</span>
              <h3 className="text-lg font-semibold">Project pipeline</h3>
            </div>
            <StaggerGroup className="grid gap-3 sm:grid-cols-2">
              {projectPipeline.map((p) => (
                <motion.div
                  key={p.title}
                  variants={staggerItem}
                  className="group flex items-center justify-between rounded-2xl border border-dashed border-white/15 bg-white/[0.03] p-4 transition-colors hover:border-fuchsia-400/40 hover:bg-white/[0.06]"
                >
                  <span className="text-sm font-medium text-white/85">
                    {p.title}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-[var(--muted)]">
                    {p.status}
                  </span>
                </motion.div>
              ))}
            </StaggerGroup>

            <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 to-indigo-500/10 p-5">
              <p className="text-sm text-white/70">
                <span className="font-semibold text-white">Heads up:</span> This
                section will fill up as I ship projects. Check back soon — or
                follow along on{" "}
                <a
                  href="https://github.com/srinivas2205"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-fuchsia-300 underline-offset-4 hover:underline"
                >
                  GitHub
                </a>
                .
              </p>
            </div>
          </div>
        </Reveal>
      )}
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="glass group relative flex flex-col overflow-hidden rounded-3xl p-6"
    >
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        {project.status && (
          <span
            className={`rounded-full border px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide ${
              STATUS_STYLES[project.status]
            }`}
          >
            {project.status.replace("-", " ")}
          </span>
        )}
      </div>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--muted)]">
        {project.description}
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/70"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-sm">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-fuchsia-300 transition-colors hover:text-fuchsia-200"
          >
            Live ↗
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-white/70 transition-colors hover:text-white"
          >
            Code ↗
          </a>
        )}
      </div>
    </motion.article>
  );
}
