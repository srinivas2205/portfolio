import GlassCard from "./GlassCard";
import { Section, SectionHeader, Reveal } from "./Primitives";
import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <Section id="contact">
      <SectionHeader
        eyebrow="05 / Contact"
        title={
          <>
            Send me a <em>note</em>
          </>
        }
        subtitle="I am open to messages about projects, opportunities, and work I can learn from."
      />

      <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-stretch">
        <Reveal>
          <GlassCard className="flex h-full flex-col justify-between gap-10 rounded-[1.75rem] p-7 sm:p-9">
            <div>
              <p className="eyebrow text-[var(--accent-orange)]">Contact details</p>
              <div className="mt-7 flex flex-col gap-6">
                <ContactRow label="Email" value={profile.email} />
                <ContactRow
                  label="Phone"
                  value={profile.phone}
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                />
                <ContactRow label="Location" value={profile.location} />
              </div>
            </div>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center rounded-lg border border-white/15 px-4 py-2.5 text-sm font-medium text-white/85 hover:border-[var(--accent-orange)]/60 hover:text-white"
            >
              GitHub ↗
            </a>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.1}>
          <GlassCard className="h-full rounded-[1.75rem] p-7 sm:p-9">
            <form
              action={`https://formsubmit.co/${profile.email}`}
              method="POST"
              className="flex h-full flex-col gap-5"
            >
            <input type="hidden" name="_subject" value={`Portfolio message for ${profile.name}`} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://srinivasm.vercel.app/#contact" />

            <div>
              <p className="eyebrow text-[var(--accent-orange)]">Message form</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Tell me what you are working on</h3>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your name" name="name" placeholder="Jane Doe" required />
              <Field label="Email" name="email" type="email" placeholder="jane@email.com" required />
            </div>

            <div className="flex flex-1 flex-col">
              <label htmlFor="message" className="mb-2 block text-xs font-medium text-[var(--muted)]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Hi Srinivas, I would like to talk about..."
                rows={7}
                required
                 className="min-h-40 w-full flex-1 resize-y rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-[var(--accent-orange)]/60 focus:bg-white/[0.07]"
              />
            </div>

            <button
              type="submit"
              className="gradient-button inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold text-[var(--background)] transition-transform hover:-translate-y-0.5"
            >
              Send message
            </button>
            <p className="text-xs leading-5 text-[var(--muted)]">
              This form sends through FormSubmit to {profile.email}.
            </p>
            </form>
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="border-l border-[var(--accent-orange)]/35 pl-4">
      <div className="eyebrow text-[var(--muted)]">{label}</div>
      <div className="mt-2 break-words text-sm font-medium text-white/90">{value}</div>
    </div>
  );

  return href ? (
    <a href={href} className="transition-opacity hover:opacity-75">
      {content}
    </a>
  ) : (
    content
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs font-medium text-[var(--muted)]">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-[var(--accent-orange)]/60 focus:bg-white/[0.07]"
      />
    </div>
  );
}
