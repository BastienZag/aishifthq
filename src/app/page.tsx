import Image from "next/image";

const featureBento = [
  {
    title: "Cursor + Claude Code",
    desc: "Workshops that turn " +
      "\"I tried it once\" into daily muscle memory.",
    tag: "Training",
  },
  {
    title: "OpenClaw agents",
    desc: "Automate the boring parts of work: reporting, ops, triage, follow-ups.",
    tag: "Automation",
  },
  {
    title: "Your stack",
    desc: "Slack, Gmail/O365, Notion, Jira, GitHub, CRMs — we wire it to your workflows.",
    tag: "Integrations",
  },
  {
    title: "Adoption that sticks",
    desc: "Enablement + guardrails: templates, playbooks, and measurable outcomes.",
    tag: "Change",
  },
];

const outcomes = [
  {
    k: "Time back",
    v: "5–10 hrs/week",
    d: "Typical reclaimed time per knowledge worker after automations ship.",
  },
  {
    k: "Faster shipping",
    v: "1.3–2.0×",
    d: "Dev throughput improvement once AI workflows are standardised.",
  },
  {
    k: "Less chaos",
    v: "Fewer handoffs",
    d: "Agents handle routing, summaries, and next-steps across tools.",
  },
];

const automationExamples = [
  {
    title: "Meeting → actions → tickets",
    desc: "Turn calls into structured actions, Jira tickets, and owner follow-ups automatically.",
    chips: ["Calendar", "Docs", "Jira"],
  },
  {
    title: "Sales ops autopilot",
    desc: "Lead enrichment, personalised first email drafts, and CRM updates — with human approval.",
    chips: ["CRM", "Email", "Approval"],
  },
  {
    title: "Weekly status without suffering",
    desc: "Pull metrics, generate updates, post to Slack, and keep a decision log.",
    chips: ["GitHub", "Notion", "Slack"],
  },
  {
    title: "Inbox triage for teams",
    desc: "Route, summarise, and respond to common requests (support, internal ops, HR).",
    chips: ["O365", "Gmail", "Policies"],
  },
];

const faqs = [
  {
    q: "Do you replace people with agents?",
    a: "No. We remove repetitive work. Humans keep judgment, approvals, and relationships.",
  },
  {
    q: "Is this only for developers?",
    a: "We start with dev productivity (fast ROI), then expand to ops, support, sales, and finance workflows.",
  },
  {
    q: "Can you work with security / governance constraints?",
    a: "Yes — we design for access control, auditability, and safe-by-default approvals. We can operate within your existing policies.",
  },
  {
    q: "What do you need from us?",
    a: "A small pilot group (5–15 people), a sponsor, and access to the tools you want to improve. We do the heavy lifting.",
  },
];

function Chip({ text }: { text: string }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-xs"
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.12)",
        color: "rgba(255,255,255,0.78)",
      }}
    >
      {text}
    </span>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-noise">
      {/* Top nav */}
      <nav
        className="fixed top-0 w-full z-50"
        style={{
          background: "rgba(7,7,10,0.68)",
          backdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="AI Shift HQ"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <div className="leading-tight">
              <div
                className="text-[15px] font-semibold"
                style={{ fontFamily: "Space Grotesk, ui-sans-serif" }}
              >
                AI Shift HQ
              </div>
              <div className="text-[12px] text-muted">
                training + automation
              </div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="text-muted hover:text-white transition-colors">
              Services
            </a>
            <a href="#work" className="text-muted hover:text-white transition-colors">
              What you get
            </a>
            <a href="#examples" className="text-muted hover:text-white transition-colors">
              Automations
            </a>
            <a
              href="#contact"
              className="px-5 py-2 rounded-full font-semibold transition-transform hover:scale-[1.03]"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              Book a call
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="top" className="relative pt-28 md:pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid" />

        <div className="relative max-w-7xl mx-auto px-6 pb-20 md:pb-24">
          <div className="grid lg:grid-cols-[1.25fr_1fr] gap-10 items-start">
            <div>
              <div
                className="inline-flex items-center gap-3 rounded-full px-4 py-2 mb-7"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                <span className="kbd">Sydney</span>
                <span className="kbd">Workshops</span>
                <span className="kbd">Agents</span>
                <span className="text-muted text-sm">
                  Practical AI adoption for modern teams
                </span>
              </div>

              <h1
                className="text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tight"
                style={{ fontFamily: "Space Grotesk, ui-sans-serif" }}
              >
                Make AI
                <br />
                <span className="text-gradient">useful</span>
                <br />
                on Monday.
              </h1>

              <p className="mt-6 text-lg md:text-xl text-muted max-w-xl leading-relaxed">
                Most teams have AI tools. Few have AI habits.
                <br />
                We train your people and ship automations so adoption becomes a system — not a vibe.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="btn-primary px-7 py-4 rounded-full font-semibold text-[15px] transition-transform hover:scale-[1.03]"
                >
                  Book a free 30‑min discovery
                </a>
                <a
                  href="#examples"
                  className="btn-secondary px-7 py-4 rounded-full font-semibold text-[15px] transition-transform hover:scale-[1.03]"
                >
                  See automation examples
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3 text-sm text-muted">
                <span>
                  <span className="text-white">Format:</span> 1–2h workshops + 2–4 week pilot
                </span>
                <span>•</span>
                <span>
                  <span className="text-white">Outcome:</span> shipped workflows + playbooks
                </span>
              </div>
            </div>

            {/* Bento */}
            <div className="grid sm:grid-cols-2 gap-4">
              {featureBento.map((f) => (
                <div
                  key={f.title}
                  className="panel rounded-2xl p-5 transition-transform hover:scale-[1.02]"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        fontFamily:
                          "IBM Plex Mono, ui-monospace, SFMono-Regular",
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.10)",
                        color: "rgba(255,255,255,0.72)",
                      }}
                    >
                      {f.tag}
                    </span>
                    <span className="text-muted text-xs">/hq</span>
                  </div>
                  <div
                    className="text-lg font-semibold"
                    style={{ fontFamily: "Space Grotesk, ui-sans-serif" }}
                  >
                    {f.title}
                  </div>
                  <p className="text-sm text-muted mt-2 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}

              <div className="panel-soft rounded-2xl p-5 sm:col-span-2">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div
                      className="text-sm text-muted"
                      style={{ fontFamily: "IBM Plex Mono, ui-monospace" }}
                    >
                      what teams want
                    </div>
                    <div
                      className="text-xl font-semibold mt-2"
                      style={{ fontFamily: "Space Grotesk, ui-sans-serif" }}
                    >
                      Fewer meetings. More shipping.
                    </div>
                    <p className="text-sm text-muted mt-2 leading-relaxed">
                      We focus on workflows that remove friction: summarisation, routing, drafting, data pulls,
                      and next-steps.
                    </p>
                  </div>
                  <div className="hidden sm:block">
                    <div className="kbd">pilot → scale</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Outcome strip */}
          <div className="mt-14 grid md:grid-cols-3 gap-4">
            {outcomes.map((o) => (
              <div key={o.k} className="panel rounded-2xl p-6">
                <div
                  className="text-sm text-muted"
                  style={{ fontFamily: "IBM Plex Mono, ui-monospace" }}
                >
                  {o.k}
                </div>
                <div
                  className="mt-2 text-3xl font-semibold"
                  style={{ fontFamily: "Space Grotesk, ui-sans-serif" }}
                >
                  {o.v}
                </div>
                <div className="mt-3 text-sm text-muted leading-relaxed">
                  {o.d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <div>
              <div
                className="text-sm text-muted"
                style={{ fontFamily: "IBM Plex Mono, ui-monospace" }}
              >
                services
              </div>
              <h2
                className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight"
                style={{ fontFamily: "Space Grotesk, ui-sans-serif" }}
              >
                Two levers: people + systems.
              </h2>
              <p className="mt-5 text-lg text-muted leading-relaxed max-w-xl">
                Training builds confidence. Automations remove friction. Together they turn AI from an experiment
                into a dependable operating layer.
              </p>
            </div>
            <div className="text-muted leading-relaxed">
              We run short, intense workshops, then ship a pilot.
              <br />
              You get playbooks, templates, and a clear rollout plan.
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="panel rounded-3xl p-8">
              <div className="flex items-center justify-between gap-4">
                <h3
                  className="text-2xl font-semibold"
                  style={{ fontFamily: "Space Grotesk, ui-sans-serif" }}
                >
                  AI Developer Training
                </h3>
                <span className="kbd">1–2h</span>
              </div>
              <p className="mt-4 text-muted leading-relaxed">
                Cursor + Claude Code (or your preferred stack). Real repo. Real PRs. Real patterns your team can
                repeat.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Prompting for codebase context", "AI-assisted debugging", "Refactors & migrations", "PR review workflows"].map(
                  (t) => (
                    <Chip key={t} text={t} />
                  )
                )}
              </div>
              <div className="mt-8 panel-soft rounded-2xl p-5">
                <div
                  className="text-sm"
                  style={{ fontFamily: "IBM Plex Mono, ui-monospace" }}
                >
                  Deliverables
                </div>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  <li>• Team playbook (do/don’t patterns)</li>
                  <li>• Repo-specific prompt library</li>
                  <li>• Pilot plan + success metrics</li>
                </ul>
              </div>
            </div>

            <div className="panel rounded-3xl p-8">
              <div className="flex items-center justify-between gap-4">
                <h3
                  className="text-2xl font-semibold"
                  style={{ fontFamily: "Space Grotesk, ui-sans-serif" }}
                >
                  AI Workflow Automation
                </h3>
                <span className="kbd">2–4 weeks</span>
              </div>
              <p className="mt-4 text-muted leading-relaxed">
                We deploy OpenClaw agents that move information between your tools, draft responses, and keep work
                unblocked — with approvals and audit trails.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Slack agents", "Email triage", "Notion ops", "Jira automation", "Executive summaries"].map((t) => (
                  <Chip key={t} text={t} />
                ))}
              </div>
              <div className="mt-8 panel-soft rounded-2xl p-5">
                <div
                  className="text-sm"
                  style={{ fontFamily: "IBM Plex Mono, ui-monospace" }}
                >
                  Deliverables
                </div>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  <li>• 1–3 shipped automations</li>
                  <li>• Runbooks + handover</li>
                  <li>• Governance model (approvals, access, logs)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section id="work" className="py-24" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
            <div>
              <div
                className="text-sm text-muted"
                style={{ fontFamily: "IBM Plex Mono, ui-monospace" }}
              >
                what you get
              </div>
              <h2
                className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight"
                style={{ fontFamily: "Space Grotesk, ui-sans-serif" }}
              >
                A repeatable adoption system.
              </h2>
              <p className="mt-5 text-lg text-muted leading-relaxed">
                Not a generic training day. You’ll walk away with working routines, templates, and the first set of
                automations live.
              </p>
              <div className="mt-8 panel rounded-2xl p-6">
                <div
                  className="text-sm"
                  style={{ fontFamily: "IBM Plex Mono, ui-monospace" }}
                >
                  Typical engagement
                </div>
                <ol className="mt-4 space-y-3 text-sm text-muted">
                  <li>
                    <span className="text-white">1.</span> Discovery + workflow map
                  </li>
                  <li>
                    <span className="text-white">2.</span> Workshop (hands-on)
                  </li>
                  <li>
                    <span className="text-white">3.</span> Build a pilot (agents + templates)
                  </li>
                  <li>
                    <span className="text-white">4.</span> Measure + rollout plan
                  </li>
                </ol>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  t: "Templates",
                  d: "Prompt libraries, checklists, and reusable patterns for your team.",
                },
                {
                  t: "Guardrails",
                  d: "Approvals, access controls, and logging designed for sane governance.",
                },
                {
                  t: "Metrics",
                  d: "Adoption and impact tracked with simple, defensible measures.",
                },
                {
                  t: "Enablement",
                  d: "Office hours, async support, and internal champions setup.",
                },
              ].map((c) => (
                <div key={c.t} className="panel rounded-2xl p-6">
                  <div
                    className="text-lg font-semibold"
                    style={{ fontFamily: "Space Grotesk, ui-sans-serif" }}
                  >
                    {c.t}
                  </div>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{c.d}</p>
                </div>
              ))}
              <div className="panel-soft rounded-2xl p-6 md:col-span-2">
                <div className="flex flex-wrap gap-2">
                  {[
                    "Cursor",
                    "Claude Code",
                    "OpenClaw",
                    "Slack",
                    "Notion",
                    "Jira",
                    "GitHub",
                    "Google / Microsoft",
                  ].map((t) => (
                    <Chip key={t} text={t} />
                  ))}
                </div>
                <p className="mt-3 text-sm text-muted">
                  We’ll meet you where you are. The goal is less tool sprawl — more consistent outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section id="examples" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <div>
              <div
                className="text-sm text-muted"
                style={{ fontFamily: "IBM Plex Mono, ui-monospace" }}
              >
                automation examples
              </div>
              <h2
                className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight"
                style={{ fontFamily: "Space Grotesk, ui-sans-serif" }}
              >
                Agents that actually help.
              </h2>
              <p className="mt-5 text-lg text-muted leading-relaxed max-w-xl">
                We focus on workflows with clear inputs/outputs, approvals where needed, and measurable impact.
              </p>
            </div>
            <div className="panel-soft rounded-2xl p-6 text-sm text-muted leading-relaxed">
              <span className="text-white">Rule:</span> If an automation can’t be explained in one sentence, it’s not ready.
              <br />
              Simple → reliable → scalable.
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {automationExamples.map((ex) => (
              <div key={ex.title} className="panel rounded-3xl p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div
                      className="text-xl font-semibold"
                      style={{ fontFamily: "Space Grotesk, ui-sans-serif" }}
                    >
                      {ex.title}
                    </div>
                    <p className="mt-3 text-sm text-muted leading-relaxed">
                      {ex.desc}
                    </p>
                  </div>
                  <div className="hidden sm:flex flex-col gap-2 items-end">
                    {ex.chips.map((c) => (
                      <Chip key={c} text={c} />
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2 sm:hidden">
                  {ex.chips.map((c) => (
                    <Chip key={c} text={c} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="panel rounded-[28px] p-10 md:p-14">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
              <div>
                <div
                  className="text-sm text-muted"
                  style={{ fontFamily: "IBM Plex Mono, ui-monospace" }}
                >
                  contact
                </div>
                <h2
                  className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight"
                  style={{ fontFamily: "Space Grotesk, ui-sans-serif" }}
                >
                  Want a pilot in 30 days?
                </h2>
                <p className="mt-5 text-lg text-muted leading-relaxed max-w-xl">
                  Tell us what’s slowing your team down. We’ll propose a short workshop + a pilot automation roadmap.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:hello@aishifthq.com"
                    className="btn-primary inline-flex items-center justify-center px-7 py-4 rounded-full font-semibold text-[15px] transition-transform hover:scale-[1.03]"
                  >
                    hello@aishifthq.com
                  </a>
                  <a
                    href="#services"
                    className="btn-secondary inline-flex items-center justify-center px-7 py-4 rounded-full font-semibold text-[15px] transition-transform hover:scale-[1.03]"
                  >
                    What we do
                  </a>
                </div>

                <p className="mt-6 text-sm text-muted">
                  Based in Sydney — working with teams globally.
                </p>
              </div>

              <div className="panel-soft rounded-2xl p-6">
                <div
                  className="text-sm text-muted"
                  style={{ fontFamily: "IBM Plex Mono, ui-monospace" }}
                >
                  FAQ
                </div>
                <div className="mt-4 space-y-4">
                  {faqs.map((f) => (
                    <div key={f.q}>
                      <div
                        className="text-sm font-semibold"
                        style={{ fontFamily: "Space Grotesk, ui-sans-serif" }}
                      >
                        {f.q}
                      </div>
                      <div className="mt-1 text-sm text-muted leading-relaxed">
                        {f.a}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="AI Shift HQ"
              width={26}
              height={26}
              className="rounded-md"
            />
            <div className="text-sm text-muted">© {new Date().getFullYear()} AI Shift HQ</div>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a
              href="mailto:hello@aishifthq.com"
              className="text-muted hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="#top"
              className="text-muted hover:text-white transition-colors"
            >
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
