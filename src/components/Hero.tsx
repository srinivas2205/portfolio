"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Reveal } from "./Primitives";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="hero-editorial">
      <div className="hero-editorial__topline">
        <Reveal>
          <LocalTimeChip />
        </Reveal>
        <Reveal delay={0.08}>
          <p className="hero-editorial__greeting">
            👋, my name is <strong>{profile.name}</strong> and I am a
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.12}>
        <h1 className="hero-editorial__title">
          <span className="hero-editorial__title-line">Developer</span>
          <span className="hero-editorial__title-line hero-editorial__title-line--outline">
            &amp; Builder
          </span>
        </h1>
      </Reveal>

      <div className="hero-editorial__stage">
        <p className="hero-editorial__location">based in {profile.location}.</p>
        <span className="hero-editorial__stage-rule" aria-hidden="true" />

        <Reveal className="hero-editorial__portrait-reveal" delay={0.18}>
          <figure className="hero-editorial__portrait">
            <div className="hero-editorial__portrait-frame">
              <Image
                src="/profile-cutout.png"
                alt={`${profile.name}, ${profile.roles[0]}`}
                fill
                priority
                sizes="(min-width: 1024px) 480px, 82vw"
                className="hero-editorial__portrait-image"
              />
            </div>
            <figcaption className="hero-editorial__portrait-caption">
              <span>Profile photo</span>
              <span>01 / 01</span>
            </figcaption>
          </figure>
        </Reveal>

        <aside className="hero-editorial__side-note">
          <span className="eyebrow text-[var(--accent-orange)]">Currently exploring</span>
          <p>{profile.roles.join(" · ")}</p>
        </aside>
      </div>

      <Reveal delay={0.24}>
        <div className="hero-editorial__content">
          <p className="hero-editorial__headline">{profile.headline}</p>

          <label className="hero-editorial__focus">
            <span className="shrink-0 font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent-orange)]">
              now:
            </span>
            <input
              aria-label="Current focus"
              defaultValue="Learning Next.js, backend development, and machine learning."
              className="min-w-0 flex-1 border-0 bg-transparent text-white/80 outline-none placeholder:text-white/40"
            />
          </label>

          <div className="hero-editorial__actions">
            <div className="flex flex-wrap items-center gap-3">
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
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--muted)]">
              <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white">
                GitHub ↗
              </a>
              <a href="#contact" className="hover:text-white">
                Email
              </a>
            </div>
          </div>
        </div>
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
