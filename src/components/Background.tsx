/**
 * Fixed full-page background.
 * Uses lightweight gradients instead of large blurred layers so scrolling stays smooth.
 */
export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base radial wash */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(168,85,247,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_100%_100%,rgba(236,72,153,0.14),transparent_60%)]" />

      {/* Lightweight decorative orbs. They are hidden on small screens. */}
      <div className="background-orb background-orb-fuchsia absolute -left-24 -top-24 h-[26rem] w-[26rem] rounded-full" />
      <div className="background-orb background-orb-indigo absolute -right-32 top-1/3 h-[28rem] w-[28rem] rounded-full" />

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
