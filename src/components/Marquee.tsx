"use client";

const WORDS = [
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "AI / ML",
  "Node.js",
  "Tailwind",
  "MongoDB",
  "Framer Motion",
  "UI / UX",
  "Open Source",
];

export default function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <div className="relative overflow-hidden border-y border-white/5 py-5">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--background)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--background)] to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-8">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap">
            <span className="text-lg font-medium text-white/40 sm:text-xl">
              {w}
            </span>
            <span className="text-fuchsia-500">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
