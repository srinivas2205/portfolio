import GlassCard from "./GlassCard";
import { Section, SectionHeader, Reveal } from "./Primitives";
import { hobbies, interests, languages } from "@/data/portfolio";
import Image from "next/image";

const collageItems: Array<{
  label: string;
  src?: string;
  className: string;
  tone: string;
}> = [
  {
    label: hobbies[0].label,
    src: "/interests/bike-riding.webp",
    className: "min-h-[16rem] sm:row-span-2",
    tone: "border-[var(--ember)]/45 bg-[var(--ember)]/[0.08]",
  },
  {
    label: hobbies[1].label,
    src: "/interests/photography.webp",
    className: "min-h-[8rem]",
    tone: "border-[var(--amber)]/40 bg-[var(--amber)]/[0.07]",
  },
  {
    label: hobbies[2].label,
    src: "/interests/video-editing.webp",
    className: "min-h-[8rem]",
    tone: "border-[var(--rose)]/40 bg-[var(--rose)]/[0.07]",
  },
  {
    label: hobbies[3].label,
    src: "/interests/traveling.webp",
    className: "min-h-[8rem]",
    tone: "border-white/20 bg-white/[0.03]",
  },
  {
    label: hobbies[4].label,
    src: "/interests/exploring-technology.webp",
    className: "min-h-[8rem]",
    tone: "border-white/20 bg-white/[0.03]",
  },
];

export default function Interests() {
  return (
    <Section id="interests">
      <SectionHeader
        eyebrow="04 / Beyond code"
        title={
          <>
            Time away from the <em>screen</em>
          </>
        }
        subtitle="Bike riding, photography, video editing, travel, and the other interests that shape how I notice things."
      />

      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <Reveal>
          <GlassCard className="rounded-[1.75rem] p-4 sm:p-6">
            <div className="grid gap-3 sm:grid-cols-2 sm:grid-rows-3">
              {collageItems.map((item, index) => (
                <PhotoPlaceholder
                  key={item.label}
                  label={item.label}
                  index={index}
                  src={item.src}
                  className={`${item.className} ${item.tone}`}
                />
              ))}
            </div>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.1} className="lg:pt-12">
          <GlassCard className="rounded-[1.75rem] p-7 sm:p-9">
            <p className="eyebrow text-[var(--ember)]">Languages</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Languages I speak</h3>
            <dl className="mt-7 divide-y divide-white/10">
              {languages.map((language) => (
                <div
                  key={language.label}
                  className="flex items-center justify-between gap-4 py-3.5 first:pt-0 last:pb-0"
                >
                  <dt className="text-sm font-medium text-white/85">{language.label}</dt>
                  <dd className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                    {language.level}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="eyebrow text-[var(--muted)]">Interests</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/75"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}

function PhotoPlaceholder({
  label,
  index,
  className,
  src,
}: {
  label: string;
  index: number;
  className: string;
  src?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border ${className}`}>
      {src && (
        <Image
          src={src}
          alt={label}
          fill
          sizes="(min-width: 1024px) 34vw, 50vw"
          className="object-cover saturate-[0.8]"
        />
      )}
      {src && <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />}
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgb(244_236_225_/_0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgb(244_236_225_/_0.16)_1px,transparent_1px)] [background-size:1.5rem_1.5rem]" />
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full border border-white/15" />
      <div className="absolute bottom-5 left-5 right-5">
        <span className="inline-flex rounded-full border border-dashed border-white/25 bg-black/20 px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-[var(--muted)]">
          CSS photo placeholder
        </span>
        <div className="mt-3 flex items-end justify-between gap-3">
          <h3 className="text-xl font-semibold text-white">{label}</h3>
          <span className="font-mono text-xs text-white/45">0{index + 1}</span>
        </div>
      </div>
    </div>
  );
}
