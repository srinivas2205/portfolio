"use client";

import { useEffect } from "react";

/**
 * One small client runtime for one-shot reveals and card sheens.
 * Pointer coordinates never enter React state and are written once per frame.
 */
export default function MotionEffects() {
  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    revealElements.forEach((element) => element.classList.add("reveal-enabled"));

    if (reduced) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!pointerQuery.matches || reduced) return;

    let activeCard: HTMLElement | null = null;
    let frame: number | null = null;
    let pointer = { x: 50, y: 50, clientX: 0, clientY: 0 };

    const writeSheen = () => {
      frame = null;
      if (!activeCard) return;
      const bounds = activeCard.getBoundingClientRect();
      pointer = {
        ...pointer,
        x: Math.max(0, Math.min(100, ((pointer.clientX - bounds.left) / bounds.width) * 100)),
        y: Math.max(0, Math.min(100, ((pointer.clientY - bounds.top) / bounds.height) * 100)),
      };
      activeCard.style.setProperty("--card-pointer-x", `${pointer.x}%`);
      activeCard.style.setProperty("--card-pointer-y", `${pointer.y}%`);
    };

    const scheduleSheen = () => {
      if (frame === null) frame = window.requestAnimationFrame(writeSheen);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>(".glass-card") : null;
      if (!target) return;
      activeCard = target;
      pointer = { ...pointer, clientX: event.clientX, clientY: event.clientY };
      scheduleSheen();
    };

    const handlePointerOut = (event: PointerEvent) => {
      if (!activeCard) return;
      const next = event.relatedTarget;
      if (next instanceof Node && activeCard.contains(next)) return;
      activeCard = null;
    };

    document.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerout", handlePointerOut, { passive: true });

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerout", handlePointerOut);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
