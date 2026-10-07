import GlassCard from "./GlassCard";
import { Section, SectionHeader, Reveal } from "./Primitives";
import { projectPlaceholders, type ProjectPlaceholder } from "@/data/portfolio";

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="03 / Projects"
        title={
          <>
            A place for <em>real work</em>
          </>
        }
        subtitle="These three spaces are ready for screenshots, summaries, stacks, and links as I finish projects worth sharing."
      />

      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:grid-rows-[1fr_1fr]">
        {projectPlaceholders.map((project, index) => (
          <Reveal
            key={project.id}
            delay={index * 0.08}
            className={index === 0 ? "lg:row-span-2" : ""}
          >
            <ProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: ProjectPlaceholder;
  index: number;
}) {
  return (
    <GlassCard className="flex h-full min-h-[24rem] flex-col rounded-[1.75rem] p-4 sm:p-6">
      <div className="project-screenshot relative flex min-h-44 items-end overflow-hidden rounded-xl border border-[var(--border-strong)] bg-[var(--surface-muted)] p-4 sm:min-h-52">
        <div className="relative flex w-full items-end justify-between gap-4">
          <span className="rounded-md border border-dashed border-[var(--border-strong)] bg-[var(--surface)] px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-[var(--muted)]">
            {project.screenshotLabel}
          </span>
          <span className="font-mono text-xs text-white/45">0{index + 1}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-2 pb-2 pt-7">
        <p className="eyebrow text-[var(--ember)]">TODO / project details</p>
        <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">{project.title}</h3>
        <p className="mt-3 max-w-md text-sm leading-6 text-[var(--muted)]">{project.summary}</p>

        <div className="mt-auto border-t border-white/10 pt-5">
          <p className="eyebrow text-[var(--muted)]">Stack</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <li
                key={item}
                className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-white/75"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
            <span className="font-medium text-white/70" aria-label="GitHub link placeholder">
              GitHub link TODO
            </span>
            <span className="font-medium text-[var(--muted)]" aria-label="Live link placeholder">
              Live link TODO
            </span>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
