import Image from "next/image";

/* ── data ── */

const featureBento = [
  { title: "Cursor + Claude Code", desc: "Workshops that turn \"I tried it once\" into daily muscle memory.", tag: "Training" },
  { title: "OpenClaw agents", desc: "Automate the boring parts of work: reporting, ops, triage, follow-ups.", tag: "Automation" },
  { title: "Your stack", desc: "Slack, Gmail/O365, Notion, Jira, GitHub, CRMs — we wire it to your workflows.", tag: "Integrations" },
  { title: "Adoption that sticks", desc: "Enablement + guardrails: templates, playbooks, and measurable outcomes.", tag: "Change" },
];

const outcomes = [
  { k: "Time back", v: "5–10 hrs/week", d: "Typical reclaimed time per knowledge worker after automations ship." },
  { k: "Faster shipping", v: "1.3–2.0×", d: "Dev throughput improvement once AI workflows are standardised." },
  { k: "Less chaos", v: "Fewer handoffs", d: "Agents handle routing, summaries, and next-steps across tools." },
];

const automationExamples = [
  { title: "Meeting → actions → tickets", desc: "Turn calls into structured actions, Jira tickets, and owner follow-ups automatically.", chips: ["Calendar", "Docs", "Jira"] },
  { title: "Sales ops autopilot", desc: "Lead enrichment, personalised first email drafts, and CRM updates — with human approval.", chips: ["CRM", "Email", "Approval"] },
  { title: "Weekly status without suffering", desc: "Pull metrics, generate updates, post to Slack, and keep a decision log.", chips: ["GitHub", "Notion", "Slack"] },
  { title: "Inbox triage for teams", desc: "Route, summarise, and respond to common requests (support, internal ops, HR).", chips: ["O365", "Gmail", "Policies"] },
];

const pricing = [
  {
    name: "Workshop",
    price: "$2,500",
    unit: "per session",
    desc: "Hands-on AI developer training for your team.",
    features: ["1–2 hour session", "Up to 15 devs", "Real-repo exercises", "Team playbook", "Prompt library"],
    cta: "Book a workshop",
    highlight: false,
  },
  {
    name: "Pilot",
    price: "$8,000",
    unit: "2–4 week engagement",
    desc: "Workshop + shipped automations + adoption plan.",
    features: ["Everything in Workshop", "1–3 automations live", "Runbooks & handover", "Governance setup", "2 weeks async support"],
    cta: "Start a pilot",
    highlight: true,
  },
  {
    name: "Retainer",
    price: "$4,000",
    unit: "per month",
    desc: "Ongoing automation, enablement, and optimisation.",
    features: ["Continuous automation builds", "New workflow rollouts", "Office hours", "Quarterly reviews", "Priority support"],
    cta: "Let's talk",
    highlight: false,
  },
];

const faqs = [
  { q: "Do you replace people with agents?", a: "No. We remove repetitive work. Humans keep judgment, approvals, and relationships." },
  { q: "Is this only for developers?", a: "We start with dev productivity (fast ROI), then expand to ops, support, sales, and finance workflows." },
  { q: "Can you work with security / governance constraints?", a: "Yes — we design for access control, auditability, and safe-by-default approvals." },
  { q: "What do you need from us?", a: "A small pilot group (5–15 people), a sponsor, and access to the tools you want to improve." },
];

const marqueeItems = [
  "Cursor", "Claude Code", "OpenClaw", "Slack", "Notion", "Jira", "GitHub",
  "Google Workspace", "Microsoft 365", "HubSpot", "Linear", "Confluence",
];

/* ── components ── */

function Chip({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.72)" }}>
      {text}
    </span>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="mono text-sm text-muted tracking-wide">{text}</div>
  );
}

/* ── page ── */

export default function Home() {
  return (
    <div className="min-h-screen bg-noise">
      {/* ── Nav ── */}
      <nav className="fixed top-0 w-full z-50" style={{ background: "rgba(7,7,10,0.68)", backdropFilter: "blur(18px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="AI Shift HQ" width={34} height={34} className="rounded-lg" />
            <div className="leading-tight">
              <div className="text-[15px] font-semibold">AI Shift HQ</div>
              <div className="text-[11px] text-muted tracking-wide uppercase">training + automation</div>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm">
            <a href="#services" className="text-muted hover:text-white transition-colors">Services</a>
            <a href="#examples" className="text-muted hover:text-white transition-colors">Automations</a>
            <a href="#pricing" className="text-muted hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="text-muted hover:text-white transition-colors">FAQ</a>
            <a href="#contact" className="px-5 py-2 rounded-full font-semibold transition-all hover:scale-[1.03] btn-primary text-sm">
              Book a call
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section id="top" className="relative pt-28 md:pt-36 overflow-hidden">
        <div className="absolute inset-0 bg-grid" />

        <div className="relative max-w-7xl mx-auto px-6 pb-16 md:pb-20">
          {/* chips row */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="kbd">Sydney-based</span>
            <span className="kbd">Hands-on workshops</span>
            <span className="kbd">AI agents shipped</span>
          </div>

          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-14 items-start">
            {/* left */}
            <div>
              <h1 className="text-5xl md:text-[4.5rem] font-semibold leading-[0.95] tracking-tight">
                Make AI
                <br />
                <span className="text-gradient">useful</span>
                <br />
                on Monday.
              </h1>

              <p className="mt-7 text-lg md:text-xl text-muted max-w-xl leading-relaxed">
                Most teams have AI tools. Few have AI habits. We train your people and ship automations so adoption becomes a system — not a vibe.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-primary px-7 py-4 rounded-full text-[15px] transition-all hover:scale-[1.03]">
                  Book a free 30‑min discovery →
                </a>
                <a href="#examples" className="btn-secondary px-7 py-4 rounded-full font-semibold text-[15px] transition-all hover:scale-[1.03]">
                  See automation examples
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
                <span><span className="text-white font-medium">Format:</span> 1–2h workshops + 2–4 week pilot</span>
                <span className="hidden sm:inline">•</span>
                <span><span className="text-white font-medium">Outcome:</span> shipped workflows + playbooks</span>
              </div>
            </div>

            {/* right: terminal */}
            <div className="terminal">
              <div className="terminal-bar">
                <div className="terminal-dot" style={{ background: "#FF5F57" }} />
                <div className="terminal-dot" style={{ background: "#FEBC2E" }} />
                <div className="terminal-dot" style={{ background: "#28C840" }} />
                <span className="ml-3 text-[11px] text-muted">ai-shift-hq — workflow</span>
              </div>
              <div className="p-5 space-y-3 text-[13px]">
                <div>
                  <span style={{ color: "var(--muted)" }}>$</span>{" "}
                  <span style={{ color: "var(--a)" }}>openclaw</span> deploy --agent sales-ops
                </div>
                <div className="text-muted">
                  ✓ Connected to Slack, HubSpot, Gmail<br />
                  ✓ Lead enrichment pipeline live<br />
                  ✓ Draft email queue → #sales-review<br />
                  ✓ CRM auto-update on approval
                </div>
                <div className="divider my-3" />
                <div>
                  <span style={{ color: "var(--muted)" }}>$</span>{" "}
                  <span style={{ color: "var(--c)" }}>cursor</span> train --team backend --repo main
                </div>
                <div className="text-muted">
                  ✓ Context rules generated from codebase<br />
                  ✓ 12 prompt templates → .cursor/prompts/<br />
                  ✓ Team playbook exported
                </div>
                <div className="divider my-3" />
                <div>
                  <span style={{ color: "var(--muted)" }}>$</span>{" "}
                  <span style={{ color: "var(--b)" }}>status</span>
                </div>
                <div className="text-muted">
                  agents: <span style={{ color: "var(--a)" }}>3 active</span> · automations: <span style={{ color: "var(--a)" }}>7 running</span><br />
                  time saved this week: <span className="text-white">~38 hrs across team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className="py-6 overflow-hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex-shrink-0 px-8 text-sm text-muted whitespace-nowrap">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── Outcomes strip ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-4">
            {outcomes.map((o) => (
              <div key={o.k} className="panel rounded-2xl p-6">
                <div className="mono text-sm text-muted">{o.k}</div>
                <div className="mt-2 text-3xl font-semibold">{o.v}</div>
                <div className="mt-3 text-sm text-muted leading-relaxed">{o.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-end mb-14">
            <div>
              <SectionLabel text="services" />
              <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
                Two levers: people&nbsp;+&nbsp;systems.
              </h2>
              <p className="mt-5 text-lg text-muted leading-relaxed max-w-xl">
                Training builds confidence. Automations remove friction. Together they turn AI from an experiment into a dependable operating layer.
              </p>
            </div>
            <div className="text-muted leading-relaxed">
              We run short, intense workshops, then ship a pilot. You get playbooks, templates, and a clear rollout plan — not a slide deck.
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Training card */}
            <div className="glow-border panel rounded-3xl p-8">
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold">AI Developer Training</h3>
                  <span className="kbd">1–2h</span>
                </div>
                <p className="mt-4 text-muted leading-relaxed">
                  Cursor + Claude Code (or your preferred stack). Real repo. Real PRs. Real patterns your team can repeat.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Prompting for codebase context", "AI-assisted debugging", "Refactors & migrations", "PR review workflows"].map((t) => <Chip key={t} text={t} />)}
                </div>
                <div className="mt-8 panel-soft rounded-2xl p-5">
                  <div className="mono text-sm">Deliverables</div>
                  <ul className="mt-3 space-y-2 text-sm text-muted">
                    <li>• Team playbook (do/don't patterns)</li>
                    <li>• Repo-specific prompt library</li>
                    <li>• Pilot plan + success metrics</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Automation card */}
            <div className="glow-border panel rounded-3xl p-8">
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold">AI Workflow Automation</h3>
                  <span className="kbd">2–4 weeks</span>
                </div>
                <p className="mt-4 text-muted leading-relaxed">
                  We deploy OpenClaw agents that move information between your tools, draft responses, and keep work unblocked — with approvals and audit trails.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Slack agents", "Email triage", "Notion ops", "Jira automation", "Executive summaries"].map((t) => <Chip key={t} text={t} />)}
                </div>
                <div className="mt-8 panel-soft rounded-2xl p-5">
                  <div className="mono text-sm">Deliverables</div>
                  <ul className="mt-3 space-y-2 text-sm text-muted">
                    <li>• 1–3 shipped automations</li>
                    <li>• Runbooks + handover</li>
                    <li>• Governance model (approvals, access, logs)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* bento grid */}
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featureBento.map((f) => (
              <div key={f.title} className="panel rounded-2xl p-5 transition-transform hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-3">
                  <span className="mono text-xs px-3 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.66)" }}>{f.tag}</span>
                </div>
                <div className="text-lg font-semibold">{f.title}</div>
                <p className="text-sm text-muted mt-2 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Automation examples ── */}
      <section id="examples" className="py-24" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-end mb-14">
            <div>
              <SectionLabel text="automation examples" />
              <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
                Agents that actually help.
              </h2>
              <p className="mt-5 text-lg text-muted leading-relaxed max-w-xl">
                We focus on workflows with clear inputs/outputs, approvals where needed, and measurable impact.
              </p>
            </div>
            <div className="panel-soft rounded-2xl p-6 text-sm text-muted leading-relaxed">
              <span className="text-white font-medium">Rule:</span> If an automation can&apos;t be explained in one sentence, it&apos;s not ready.<br />
              Simple → reliable → scalable.
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {automationExamples.map((ex) => (
              <div key={ex.title} className="panel rounded-3xl p-8 transition-transform hover:scale-[1.01]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xl font-semibold">{ex.title}</div>
                    <p className="mt-3 text-sm text-muted leading-relaxed">{ex.desc}</p>
                  </div>
                  <div className="hidden sm:flex flex-col gap-2 items-end flex-shrink-0">
                    {ex.chips.map((c) => <Chip key={c} text={c} />)}
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 sm:hidden">
                  {ex.chips.map((c) => <Chip key={c} text={c} />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <SectionLabel text="pricing" />
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              Transparent pricing. No surprises.
            </h2>
            <p className="mt-5 text-lg text-muted leading-relaxed max-w-2xl mx-auto">
              All prices in AUD. Start with a workshop, upgrade to a pilot, then scale with a retainer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((tier) => (
              <div key={tier.name} className={`rounded-3xl p-8 flex flex-col ${tier.highlight ? "glow-border panel" : "panel"}`}>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mono text-sm text-muted">{tier.name}</div>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-4xl font-semibold">{tier.price}</span>
                    <span className="text-sm text-muted">{tier.unit}</span>
                  </div>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{tier.desc}</p>
                  <ul className="mt-6 space-y-3 text-sm flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span style={{ color: "var(--a)" }} className="mt-0.5">✓</span>
                        <span className="text-muted">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`mt-8 text-center px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-[1.03] ${tier.highlight ? "btn-primary" : "btn-secondary"}`}
                  >
                    {tier.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-14">
            <div>
              <SectionLabel text="frequently asked" />
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">
                Questions we get.
              </h2>
              <p className="mt-5 text-muted leading-relaxed">
                If your question isn&apos;t here, book a call. We&apos;d rather talk than let assumptions stall a decision.
              </p>
            </div>
            <div className="space-y-0">
              {faqs.map((f, i) => (
                <div key={f.q} className="py-6" style={i > 0 ? { borderTop: "1px solid rgba(255,255,255,0.06)" } : {}}>
                  <div className="text-[15px] font-semibold">{f.q}</div>
                  <div className="mt-2 text-sm text-muted leading-relaxed">{f.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glow-border panel rounded-[28px] p-10 md:p-14">
            <div className="relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
              <div>
                <SectionLabel text="get started" />
                <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
                  Want a pilot in 30&nbsp;days?
                </h2>
                <p className="mt-5 text-lg text-muted leading-relaxed max-w-xl">
                  Tell us what&apos;s slowing your team down. We&apos;ll propose a short workshop + a pilot automation roadmap — no commitment.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a href="mailto:hello@aishifthq.com" className="btn-primary inline-flex items-center justify-center px-7 py-4 rounded-full font-semibold text-[15px] transition-all hover:scale-[1.03]">
                    hello@aishifthq.com →
                  </a>
                </div>

                <p className="mt-6 text-sm text-muted">Based in Sydney — working with teams globally.</p>
              </div>

              <div className="panel-soft rounded-2xl p-6">
                <div className="mono text-sm text-muted">What to expect</div>
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  <li className="flex items-start gap-2"><span style={{ color: "var(--a)" }}>1.</span> 30-min discovery call (free)</li>
                  <li className="flex items-start gap-2"><span style={{ color: "var(--a)" }}>2.</span> Workflow map + recommendation</li>
                  <li className="flex items-start gap-2"><span style={{ color: "var(--a)" }}>3.</span> Workshop within 2 weeks</li>
                  <li className="flex items-start gap-2"><span style={{ color: "var(--a)" }}>4.</span> First automations live in 30 days</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-10" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="AI Shift HQ" width={24} height={24} className="rounded-md" />
            <div className="text-sm text-muted">© {new Date().getFullYear()} AI Shift HQ</div>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="mailto:hello@aishifthq.com" className="text-muted hover:text-white transition-colors">Contact</a>
            <a href="#top" className="text-muted hover:text-white transition-colors">↑ Top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
