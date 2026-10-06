import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] items-center justify-center px-[var(--page-gutter)] py-16">
      <div className="glass w-full max-w-xl rounded-3xl p-8 sm:p-12">
        <p className="eyebrow text-[var(--accent-orange)]">404 / Page not found</p>
        <h1 className="mt-5 text-[clamp(2.5rem,8vw,5rem)] font-semibold leading-[0.95] tracking-tight">
          This path wandered off.
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--muted)] sm:text-lg">
          The page you requested is not here. Return to the portfolio and keep
          exploring.
        </p>
        <Link
          href="/"
          className="gradient-button mt-8 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-[var(--background)] transition-transform hover:scale-[1.02]"
        >
          Return home <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  );
}
