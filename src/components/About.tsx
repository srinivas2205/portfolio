import GlassCard from "./GlassCard";
import { Section, SectionHeader, Reveal } from "./Primitives";
import { about, education, profile, goals } from "@/data/portfolio";

export default function About() {
  return (
    <Section id="about">
      <SectionHeader
        eyebrow="01 / About"
        title={
          <>
            A short <em>introduction</em>
          </>
        }
        subtitle="I am keeping this page as a simple record of what I study and what I am working toward."
      />

      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
        <Reveal>
          <GlassCard className="h-full rounded-[1.75rem] p-7 sm:p-9">
            <p className="max-w-2xl text-pretty text-xl leading-relaxed text-white/90 sm:text-2xl">
              {about.text}
            </p>

            <dl className="mt-10 grid gap-x-8 gap-y-6 border-t border-white/10 pt-6 sm:grid-cols-2">
              <InfoRow label="Location" value={profile.location} />
              <InfoRow label="Degree" value={education.degree} />
              <InfoRow label="College" value={education.college} />
              <InfoRow label="Graduation" value={education.graduationYear} />
            </dl>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.1}>
          <GlassCard className="h-full rounded-[1.75rem] p-7 sm:p-9 lg:translate-y-10">
            <p className="eyebrow text-[var(--accent-orange)]">Goals</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">What I am working toward</h3>
            <ul className="mt-7 divide-y divide-white/10">
              {goals.map((goal, index) => (
                <li key={goal} className="flex gap-4 py-3.5 first:pt-0 last:pb-0">
                  <span className="font-mono text-xs text-[var(--accent-orange)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-6 text-white/80">{goal}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="eyebrow text-[var(--muted)]">{label}</dt>
      <dd className="mt-2 text-sm leading-6 text-white/85">{value}</dd>
    </div>
  );
}
