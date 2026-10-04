"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  m,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { profile, navLinks } from "@/data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

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

  // Keep the page in place while the mobile menu is open.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  // Move focus into the menu, keep it contained, and return it to the toggle.
  useEffect(() => {
    if (!open) return;

    const previouslyFocused =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const menuToggle = toggleRef.current;
    const focusFrame = window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const menu = menuRef.current;
      if (!menu) return;

      const focusableElements = Array.from(
        menu.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey && (activeElement === firstElement || !menu.contains(activeElement))) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && (activeElement === lastElement || !menu.contains(activeElement))) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      const focusTarget = previouslyFocused?.isConnected ? previouslyFocused : menuToggle;
      focusTarget?.focus();
    };
  }, [open]);

  // Do not leave the page scroll-locked if the viewport changes to desktop.
  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const handleViewportChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };

    desktopQuery.addEventListener("change", handleViewportChange);
    return () => desktopQuery.removeEventListener("change", handleViewportChange);
  }, []);

  return (
    <m.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4"
    >
      <nav
        aria-hidden={open}
        className={`flex w-full max-w-5xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5 ${
          scrolled
            ? "glass glass-blur shadow-lg shadow-black/30"
            : "border border-transparent bg-transparent"
        }`}
      >
        {/* Brand */}
        <a
          href="#top"
          className="group flex items-center gap-2.5 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fuchsia-300"
          onClick={() => setOpen(false)}
        >
          <span className="relative block h-9 w-9 overflow-hidden rounded-xl shadow-lg shadow-fuchsia-500/30 transition-transform group-hover:scale-110">
            <Image
              src="/profile.webp"
              alt={profile.name}
              fill
              sizes="36px"
              className="object-cover"
            />
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">
            {profile.name}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? "location" : undefined}
                className={`relative rounded-lg px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-300 ${
                  active === link.href
                    ? "text-white"
                    : "text-[var(--muted)] hover:text-white"
                }`}
              >
                {active === link.href && (
                   <m.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-lg bg-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-300 sm:inline-flex"
          >
            Get in touch
          </a>
          <button
            ref={toggleRef}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-controls="mobile-navigation"
            aria-expanded={open}
            aria-haspopup="dialog"
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-xl glass focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-300 md:hidden"
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
      </nav>

      {/* Mobile menu */}
      <AnimatePresence initial={false}>
        {open && (
          <m.div
            ref={menuRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            onClick={(event) => {
              if (event.target === event.currentTarget) setOpen(false);
            }}
            className="fixed inset-0 z-40 overflow-y-auto bg-[var(--background)]/98 px-3 pb-4 pt-3 sm:px-4 md:hidden"
          >
            <m.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -12 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto flex min-h-[100dvh] w-full max-w-md flex-col"
            >
              <div className="flex justify-end">
                <button
                  ref={closeButtonRef}
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-xl glass focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-300"
                >
                  <span aria-hidden="true" className="relative block h-5 w-5">
                    <span className="absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 rotate-45 rounded bg-white" />
                    <span className="absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 -rotate-45 rounded bg-white" />
                  </span>
                </button>
              </div>

              <ul className="flex flex-1 flex-col justify-center gap-2 py-6">
                {navLinks.map((link, i) => (
                  <m.li
                    key={link.href}
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: prefersReducedMotion ? 0 : 0.05 * i,
                      duration: prefersReducedMotion ? 0 : 0.2,
                    }}
                    className="w-full"
                  >
                    <a
                      href={link.href}
                      aria-current={active === link.href ? "location" : undefined}
                      onClick={() => setOpen(false)}
                      className={`block w-full rounded-2xl glass px-5 py-3.5 text-center text-base font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-300 sm:px-6 sm:py-4 sm:text-lg ${
                        active === link.href ? "text-white" : "text-[var(--muted)] hover:text-white"
                      }`}
                    >
                      {link.label}
                    </a>
                  </m.li>
                ))}
                <m.li
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: prefersReducedMotion ? 0 : 0.05 * navLinks.length,
                    duration: prefersReducedMotion ? 0 : 0.2,
                  }}
                  className="mt-3 w-full"
                >
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="block w-full rounded-2xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-3.5 text-center text-base font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-300 sm:px-6 sm:py-4 sm:text-lg"
                  >
                    Get in touch
                  </a>
                </m.li>
              </ul>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </m.header>
  );
}
