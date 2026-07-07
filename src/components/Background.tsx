"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Fixed full-page animated background.
 * Soft gradient blobs + a faint grid overlay. Sits behind all content.
 */
export default function Background() {
  const reduce = useReducedMotion();
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base radial wash */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(168,85,247,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_100%_100%,rgba(236,72,153,0.14),transparent_60%)]" />

      {/* Floating blobs */}
      {!reduce && (
        <>
          <motion.div
            className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-fuchsia-600/25 blur-3xl animate-float"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
          <motion.div
            className="absolute top-1/3 -right-32 h-[32rem] w-[32rem] rounded-full bg-indigo-600/25 blur-3xl animate-float-slow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          />
          <motion.div
            className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-cyan-500/20 blur-3xl animate-float"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
          />
        </>
      )}

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}
