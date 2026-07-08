"use client";

import Image from "next/image";
import { profile, navLinks } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-10 border-t border-white/5 px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-2.5">
          <span className="relative block h-9 w-9 overflow-hidden rounded-xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-500">
            <Image
              src="/IMG_20260422_142319422.jpg"
              alt={profile.name}
              fill
              sizes="36px"
              className="object-cover"
            />
          </span>
          <span className="text-sm font-semibold">{profile.name}</span>
        </a>

        {/* Quick links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--muted)] transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex items-center gap-5 text-sm">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--muted)] transition-colors hover:text-white"
          >
            GitHub ↗
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-[var(--muted)] transition-colors hover:text-white"
          >
            Email ↗
          </a>
        </div>

        {/* Back to top */}
        <a
          href="#top"
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-[var(--muted)] transition-colors hover:text-white"
        >
          Back to top ↑
        </a>

        {/* Copyright */}
        <p className="text-xs text-[var(--muted)]">
          © {year} {profile.name}. Designed & built with care.
        </p>
      </div>
    </footer>
  );
}
