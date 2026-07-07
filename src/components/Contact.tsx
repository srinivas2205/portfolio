"use client";

import { useState } from "react";
import { Section, SectionHeader, Reveal } from "./Primitives";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const subject = encodeURIComponent(
    name ? `Portfolio message from ${name}` : "Portfolio message"
  );
  const body = encodeURIComponent(message);
  const mailto = `mailto:${profile.email}?subject=${subject}&body=${body}`;

  return (
    <Section id="contact">
      <SectionHeader
        eyebrow="06 — Contact"
        title={
          <>
            Let&apos;s build <span className="text-gradient">something</span>
          </>
        }
        subtitle="Got a project, opportunity, or just want to say hi? My inbox is always open."
      />

      <div className="grid gap-6 lg:grid-cols-5">
        {/* Quick contact details */}
        <Reveal className="lg:col-span-2">
          <div className="glass flex h-full flex-col justify-between gap-6 rounded-3xl p-7 sm:p-8">
            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
                Reach me directly
              </h3>
              <div className="flex flex-col gap-4">
                <ContactRow
                  icon="✉️"
                  label="Email"
                  value={profile.email}
                  href={`mailto:${profile.email}`}
                />
                <ContactRow
                  icon="📱"
                  label="Phone"
                  value={profile.phone}
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                />
                <ContactRow
                  icon="📍"
                  label="Location"
                  value={profile.location}
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/10"
              >
                GitHub ↗
              </a>
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/10"
                >
                  LinkedIn ↗
                </a>
              )}
              {profile.resume && (
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-4 py-2.5 text-sm font-semibold text-white"
                >
                  Resume ↓
                </a>
              )}
            </div>
          </div>
        </Reveal>

        {/* Message form (mailto-based) */}
        <Reveal delay={0.1} className="lg:col-span-3">
          <form
            action={mailto}
            method="post"
            encType="text/plain"
            className="glass flex h-full flex-col gap-4 rounded-3xl p-7 sm:p-8"
          >
            <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
              Send a message
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Your name"
                name="name"
                value={name}
                onChange={setName}
                placeholder="Jane Doe"
              />
              <Field
                label="Email (optional)"
                name="email"
                type="email"
                placeholder="jane@email.com"
              />
            </div>
            <div className="flex flex-1 flex-col">
              <label className="mb-1.5 block text-xs font-medium text-[var(--muted)]">
                Message
              </label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi Srinivas, I'd love to talk about…"
                rows={5}
                className="w-full flex-1 resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-fuchsia-400/50 focus:bg-white/[0.07]"
              />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition-transform hover:scale-[1.02]"
            >
              Send message
              <span>→</span>
            </button>
            <p className="text-center text-xs text-[var(--muted)]">
              Opens your email client pre-filled.
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: string;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-3.5">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-lg">
        {icon}
      </span>
      <div className="min-w-0">
        <div className="text-xs text-[var(--muted)]">{label}</div>
        <div className="truncate text-sm font-medium text-white/90">
          {value}
        </div>
      </div>
    </div>
  );
  return href ? (
    <a
      href={href}
      className="transition-opacity hover:opacity-80"
    >
      {content}
    </a>
  ) : (
    content
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  value?: string;
  onChange?: (v: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-[var(--muted)]">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-fuchsia-400/50 focus:bg-white/[0.07]"
      />
    </div>
  );
}
