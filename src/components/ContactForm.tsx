"use client";

import { useState } from "react";

export default function ContactForm({ useCaseTitle }: { useCaseTitle?: string }) {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, ...(useCaseTitle ? { useCaseTitle } : {}) }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div
        className="rounded-2xl p-8 text-center"
        style={{
          background: "rgba(180,255,57,0.06)",
          border: "1px solid rgba(180,255,57,0.18)",
        }}
      >
        <div className="text-3xl mb-3">✅</div>
        <h3 className="text-xl font-semibold mb-2">Message sent!</h3>
        <p className="text-sm text-muted">We'll get back to you within 24 hours.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm underline text-muted hover:text-white transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm text-muted mb-1">Name *</label>
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-3 rounded-xl text-sm bg-transparent transition-colors focus:outline-none"
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            color: "white",
          }}
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block text-sm text-muted mb-1">Email *</label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-4 py-3 rounded-xl text-sm bg-transparent transition-colors focus:outline-none"
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            color: "white",
          }}
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label className="block text-sm text-muted mb-1">Company</label>
        <input
          type="text"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          className="w-full px-4 py-3 rounded-xl text-sm bg-transparent transition-colors focus:outline-none"
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            color: "white",
          }}
          placeholder="Company name"
        />
      </div>
      <div>
        <label className="block text-sm text-muted mb-1">How can we help?</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={3}
          className="w-full px-4 py-3 rounded-xl text-sm bg-transparent transition-colors focus:outline-none resize-none"
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            color: "white",
          }}
          placeholder="Tell us about your workflow or automation needs..."
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-[1.03] disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send message →"}
      </button>
      {status === "error" && (
        <p className="text-sm text-center" style={{ color: "var(--b)" }}>
          Something went wrong. Please try again or email hello@openclawlabs.ai
        </p>
      )}
    </form>
  );
}
