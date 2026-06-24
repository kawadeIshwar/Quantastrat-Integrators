"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "submitting" | "ok" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Something went wrong. Please try again.");
      setStatus("ok");
      e.currentTarget.reset();
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Unexpected error");
    }
  }

  return (
    <section className="relative py-16">
      <div className="container-x grid gap-10 lg:grid-cols-12">
        {/* Info cards */}
        <div className="space-y-5 lg:col-span-5">
          <InfoCard Icon={Mail} title="Email" value="hello@quantastrat.com" hint="Replies within 1 business day" href="mailto:hello@quantastrat.com" />
          <InfoCard Icon={Phone} title="Phone" value="+91 80000 00000" hint="Mon—Fri, 10:00 to 19:00 IST" href="tel:+918000000000" />
          <InfoCard Icon={MapPin} title="HQ" value="Bengaluru, India" hint="PAN India delivery centres" />

          <div className="overflow-hidden rounded-3xl border border-orange-100/60 shadow-card">
            <iframe
              title="Quantastrat location"
              src="https://www.google.com/maps?q=Bengaluru%2C%20India&output=embed"
              className="block h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={onSubmit}
            className="overflow-hidden rounded-3xl border border-orange-100/60 bg-white p-8 shadow-card md:p-10"
          >
            <h2 className="font-display text-2xl font-bold text-brand-ink">Send us a message</h2>
            <p className="mt-2 text-sm text-gray-500">We&apos;ll get back within one business day.</p>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <Field label="Full name" name="name" type="text" required />
              <Field label="Work email" name="email" type="email" required />
              <Field label="Company" name="company" type="text" />
              <Field label="Phone" name="phone" type="tel" />
              <div className="md:col-span-2">
                <SelectField label="I'm interested in" name="interest" options={["Hiring talent", "Career opportunity", "Partnership", "Other"]} />
              </div>
              <div className="md:col-span-2">
                <Field label="Tell us about your need" name="message" textarea required />
              </div>
            </div>

            <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-gray-400">
                By submitting, you agree to our privacy policy. We never share your data.
              </p>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn-primary disabled:opacity-60"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send message <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>

            {status === "ok" && (
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4" />
                <span>Thanks — your message is in. We&apos;ll be in touch shortly.</span>
              </div>
            )}
            {status === "error" && (
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                <AlertCircle className="mt-0.5 h-4 w-4" />
                <span>{error || "Couldn't send. Please try again."}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  Icon, title, value, hint, href
}: { Icon: any; title: string; value: string; hint?: string; href?: string }) {
  const content = (
    <div className="group flex items-start gap-4 rounded-3xl border border-orange-100/60 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-orange to-brand-deep shadow-glow-sm">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.25em] text-gray-400">{title}</div>
        <div className="mt-1 font-display text-lg font-medium text-brand-ink">{value}</div>
        {hint && <div className="mt-0.5 text-xs text-gray-500">{hint}</div>}
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}

function Field({
  label, name, type = "text", required, textarea
}: { label: string; name: string; type?: string; required?: boolean; textarea?: boolean }) {
  const [val, setVal] = useState("");
  const filled = val.length > 0;
  const common =
    "peer w-full rounded-2xl border border-orange-100 bg-white px-4 pb-3 pt-6 text-sm text-gray-900 outline-none transition-all duration-300 focus:border-brand-orange/60 focus:ring-2 focus:ring-brand-orange/30";
  return (
    <label className="relative block">
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={5}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className={`${common} resize-none`}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className={common}
        />
      )}
      <span
        className={`pointer-events-none absolute left-4 text-xs uppercase tracking-[0.18em] text-gray-400 transition-all duration-200 ${
          filled ? "top-2" : "top-4 text-sm normal-case tracking-normal text-gray-500 peer-focus:top-2 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-[0.18em] peer-focus:text-brand-orange"
        }`}
      >
        {label}{required ? " *" : ""}
      </span>
    </label>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-gray-400">{label}</span>
      <div className="relative">
        <select
          name={name}
          defaultValue={options[0]}
          className="w-full appearance-none rounded-2xl border border-orange-100 bg-white px-4 py-3.5 pr-10 text-sm text-gray-700 outline-none focus:border-brand-orange/60 focus:ring-2 focus:ring-brand-orange/30"
        >
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">▾</span>
      </div>
    </label>
  );
}
