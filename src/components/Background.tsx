/**
 * Fixed full-page background.
 * Uses static layered gradients and a grid so scrolling stays smooth.
 */
export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-[1] overflow-hidden"
    >
      <div className="background-wash absolute inset-0" />
      <div className="background-glow absolute inset-0" />
      <div className="background-blob background-blob-orange" />
      <div className="background-blob background-blob-pink" />
      <div className="background-blob background-blob-purple" />
      <div className="background-grid absolute inset-0" />
      <div className="background-vignette absolute inset-0" />
    </div>
  );
}
