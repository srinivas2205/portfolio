import Image from "next/image";
import { profile, navLinks } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-10 border-t border-white/5 px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="relative block h-9 w-9 overflow-hidden rounded-xl border border-white/15">
            <Image
              src="/profile.webp"
              alt={profile.name}
              fill
              sizes="36px"
              className="object-cover grayscale"
            />
          </span>
          <span className="text-sm font-semibold">{profile.name}</span>
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--muted)] hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5 text-sm">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--muted)] hover:text-white"
          >
            GitHub ↗
          </a>
          <a href="#contact" className="text-[var(--muted)] hover:text-white">
            Email
          </a>
        </div>

        <a
          href="#top"
          className="inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-[var(--muted)] hover:border-[var(--accent-orange)]/50 hover:text-white"
        >
          Back to top ↑
        </a>

        <p className="text-xs text-[var(--muted)]">
          © {year} {profile.name}. Based in {profile.location}.
        </p>
      </div>
    </footer>
  );
}
