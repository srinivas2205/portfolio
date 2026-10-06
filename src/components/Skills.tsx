import GlassCard from "./GlassCard";
import { Section, SectionHeader, Reveal } from "./Primitives";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        eyebrow="02 / Skills"
        title={
          <>
            The tools on my <em>desk</em>
          </>
        }
        subtitle="A single working list. The small learning tag shows where I am spending time right now."
      />

      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
        <Reveal>
          <GlassCard className="rounded-[1.75rem] p-6 sm:p-9">
            <div className="divide-y divide-white/10">
              {skills.map((group) => (
                <div
                  key={group.category}
                  className="grid gap-4 py-6 first:pt-0 last:pb-0 sm:grid-cols-[9rem_1fr] sm:gap-8"
                >
                  <p className="eyebrow pt-1 text-[var(--muted)]">{group.category}</p>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white/85">
                          {item.name}
                          {item.learning && <LearningTag />}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.1} className="lg:pt-16">
          <aside className="border-l border-[var(--ember)]/45 pl-6 sm:pl-8">
            <p className="eyebrow text-[var(--ember)]">Current focus</p>
            <h3 className="mt-4 text-3xl font-semibold leading-tight text-white">
              Learning by making small things.
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--muted)]">
              I am working through Next.js, backend development, data structures,
              machine learning, and the details that make a useful interface feel clear.
            </p>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
              Tag = learning
            </p>
          </aside>
        </Reveal>
      </div>
    </Section>
  );
}

function LearningTag() {
  return (
    <span className="rounded border border-[var(--ember)]/40 px-1.5 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-[var(--amber)]">
      learning
    </span>
  );
}
