"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Reveal } from "./Primitives";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto grid min-h-screen w-full max-w-6xl items-center gap-12 px-5 pt-28 pb-16 sm:px-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:gap-16"
    >
      <div className="order-2 max-w-2xl lg:order-1">
        <Reveal>
          <LocalTimeChip />
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-7 eyebrow text-[var(--accent-orange)]">BCA student / developer in progress</p>
          <h1 className="mt-4 max-w-3xl text-balance text-[clamp(3.25rem,10vw,6.75rem)] font-bold leading-[0.9] tracking-tight">
            <span className="inline-block">
              {profile.name}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            {profile.headline}
          </p>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/75">
            {profile.roles.join(" · ")}
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <label className="mt-8 flex max-w-xl items-center gap-3 rounded-xl border border-dashed border-[var(--accent-orange)]/45 bg-white/[0.035] px-4 py-3 text-sm shadow-inner shadow-black/10">
            <span className="shrink-0 font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent-orange)]">
              now:
            </span>
            <input
              aria-label="Current focus"
              defaultValue="Learning Next.js, backend development, and machine learning."
              className="min-w-0 flex-1 border-0 bg-transparent text-white/80 outline-none placeholder:text-white/40"
            />
          </label>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="primary-button inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white/85 hover:border-[var(--accent-orange)]/60 hover:text-white"
            >
              Contact me
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--muted)]">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              GitHub ↗
            </a>
            <a href="#contact" className="hover:text-white">
              Email
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal className="order-1 flex justify-center lg:order-2 lg:justify-end" delay={0.12}>
        <figure className="relative w-[min(70vw,22rem)]">
          <div className="relative overflow-hidden rounded-2xl border border-[var(--border-strong)] bg-[var(--surface)] p-2 shadow-xl shadow-black/20">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[var(--background)]">
              <Image
                src="/profile.webp"
                alt={`${profile.name}, ${profile.roles[0]}`}
                fill
                priority
                sizes="(min-width: 1024px) 352px, 70vw"
                className="object-cover grayscale contrast-125 saturate-50"
              />
            </div>
          </div>
          <figcaption className="mt-5 flex items-center justify-between px-1 text-[0.68rem] font-mono uppercase tracking-[0.18em] text-[var(--muted)]">
            <span>Profile photo</span>
            <span>01 / 01</span>
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}

function LocalTimeChip() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    const updateTime = () => setTime(formatter.format(new Date()));
    updateTime();
    const interval = window.setInterval(updateTime, 60_000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-[var(--muted)]"
      aria-label={`${profile.location}, local time`}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[var(--accent-orange)]" />
      <span>Bangalore, {time || "local time"}</span>
    </div>
  );
}
