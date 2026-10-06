"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  m,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { profile, navLinks } from "@/data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>(navLinks[0]?.href ?? "");
  const scrolledRef = useRef(false);
  const linksRef = useRef<HTMLUListElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [lens, setLens] = useState({ left: 0, width: 0 });
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  // Keep the SVG displacement filter opt-in. The plain blur declaration below
  // must remain valid in every browser, including Safari and Firefox.
  useEffect(() => {
    const browser = navigator as Navigator & {
      userAgentData?: { brands?: Array<{ brand: string }> };
    };
    const brands = browser.userAgentData?.brands ?? [];
    const isChromium = brands.length
      ? brands.some(({ brand }) => /Chromium|Chrome|Edg|OPR|Brave/i.test(brand))
      : /Chrome|Chromium|Edg\/|OPR\//i.test(navigator.userAgent);

    document.documentElement.classList.toggle("chromium", isChromium);

    return () => document.documentElement.classList.remove("chromium");
  }, []);

  // Keep the active lens aligned with the rendered link after scroll, font
  // loading, and viewport changes. The glass itself remains untouched.
  useEffect(() => {
    let disposed = false;
    let frame: number | null = null;

    const updateLens = () => {
      if (disposed) return;

      const activeLink = linksRef.current?.querySelector<HTMLAnchorElement>(
        '[aria-current="page"]'
      );

      if (!activeLink) {
        setLens({ left: 0, width: 0 });
        return;
      }

      setLens({ left: activeLink.offsetLeft, width: activeLink.offsetWidth });
    };

    const scheduleUpdate = () => {
      if (disposed) return;
      if (frame !== null) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        frame = null;
        updateLens();
      });
    };

    const handleResize = () => {
      if (disposed) return;
      if (toggleRef.current && window.getComputedStyle(toggleRef.current).display === "none") {
        setOpen(false);
      }
      scheduleUpdate();
    };

    const resizeObserver =
      typeof ResizeObserver === "undefined" ? null : new ResizeObserver(handleResize);

    scheduleUpdate();
    window.addEventListener("resize", handleResize);
    if (linksRef.current) resizeObserver?.observe(linksRef.current);
    if (toggleRef.current) resizeObserver?.observe(toggleRef.current);
    document.fonts?.ready.then(scheduleUpdate);

    return () => {
      disposed = true;
      if (frame !== null) window.cancelAnimationFrame(frame);
      resizeObserver?.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [active]);

  useMotionValueEvent(scrollY, "change", (v) => {
    const nextScrolled = v > 24;
    if (nextScrolled === scrolledRef.current) return;

    scrolledRef.current = nextScrolled;
    setScrolled(nextScrolled);
  });

  // Track which section is in view
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // The mobile menu is part of the same glass pill, so Escape only needs to
  // close it and return focus to the hamburger.
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        window.requestAnimationFrame(() => toggleRef.current?.focus());
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <svg aria-hidden="true" className="lg-filter-defs" focusable="false">
        <defs>
          <filter id="liquid-glass" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012"
              numOctaves={2}
              seed={7}
              result="liquid-noise"
            />
            <feGaussianBlur in="liquid-noise" stdDeviation="2" result="liquid-blur" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="liquid-blur"
              scale={48}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      <header
        role="navigation"
        aria-label="Primary navigation"
        data-open={open ? "true" : "false"}
        data-scrolled={scrolled ? "true" : "false"}
        className="lg-nav navbar-header"
      >
        <span aria-hidden="true" className="lg-glass" />
        <span aria-hidden="true" className="lg-sheen" />
        <div className="lg-bar">
          <a
            href="#top"
            className="lg-brand group flex items-center gap-2.5 rounded-lg"
            onClick={() => setOpen(false)}
          >
            <span className="lg-avatar relative block h-9 w-9 overflow-hidden rounded-full transition-transform group-hover:scale-110">
              <Image
                src="/profile.webp"
                alt={profile.name}
                fill
                sizes="36px"
                className="object-cover"
              />
            </span>
            <span className="lg-brand-name text-sm font-semibold tracking-tight">
              {profile.name}
            </span>
          </a>

          <ul ref={linksRef} id="desktop-navigation" className="lg-links">
            <m.li
              aria-hidden="true"
              className="navbar-active-lens lg-active-lens"
              style={{ left: lens.left, width: lens.width }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { type: "tween", duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }
              }
            />
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={active === link.href ? "page" : undefined}
                  onClick={() => {
                    setActive(link.href);
                    setOpen(false);
                  }}
                  className={`navbar-link ${
                    active === link.href ? "text-white" : "text-[#d4d4d4] hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="navbar-control lg-cta rounded-xl px-4 py-2 text-sm font-semibold"
            onClick={() => setOpen(false)}
          >
            Get in touch
          </a>
          <button
            ref={toggleRef}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-controls="lg-panel"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="navbar-control lg-menu-button lg-burger h-10 w-10 place-items-center rounded-xl"
          >
            <div aria-hidden="true" className="space-y-1.5">
              <m.span
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
                className="block h-0.5 w-5 rounded bg-white"
              />
              <m.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.15 }}
                className="block h-0.5 w-5 rounded bg-white"
              />
              <m.span
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
                className="block h-0.5 w-5 rounded bg-white"
              />
            </div>
          </button>
        </div>
        <div className="lg-panel" id="lg-panel" aria-hidden={!open} inert={!open}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={active === link.href ? "page" : undefined}
                  onClick={() => {
                    setActive(link.href);
                    setOpen(false);
                  }}
                  className="navbar-menu-link lg-panel-link"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}
