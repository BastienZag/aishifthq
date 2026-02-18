import Image from "next/image";
import {
  IconKeyboard, IconAgent, IconLink, IconChart,
  IconClipboard, IconRocket, IconBarChart, IconTarget,
  IconShield, IconTemplate,
  LogoCursor, LogoClaude, LogoOpenClaw, LogoSlack, LogoNotion,
  LogoJira, LogoGitHub, LogoGoogle, LogoMicrosoft,
  LogoHubSpot, LogoLinear, LogoConfluence,
} from "@/components/icons";
import ContactForm from "@/components/ContactForm";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

/* ── data ── */

const featureBento = [
  { title: "OpenClaw Agents", desc: "Deploy AI agents that handle reporting, triage, ops, and follow-ups on your infrastructure.", tag: "Core", Icon: IconAgent, color: "var(--c)" },
  { title: "Your Stack", desc: "Slack, Gmail/O365, Notion, Jira, GitHub, CRMs — connected out of the box.", tag: "Integrations", Icon: IconLink, color: "var(--b)" },
  { title: "AI Training", desc: "Cursor + Claude Code workshops to level up your team's AI skills.", tag: "Training", Icon: IconKeyboard, color: "var(--a)" },
  { title: "Adoption System", desc: "Templates, playbooks, guardrails, and measurable outcomes.", tag: "Change", Icon: IconChart, color: "var(--a)" },
];

const outcomes = [
  { k: "Time back", v: "5–10 hrs/week", d: "Typical reclaimed time per knowledge worker after automations ship.", color: "var(--a)" },
  { k: "Faster shipping", v: "1.3–2.0×", d: "Throughput improvement once AI workflows are standardised.", color: "var(--c)" },
  { k: "Less chaos", v: "Fewer handoffs", d: "Agents handle routing, summaries, and next-steps across tools.", color: "var(--b)" },
];

const differentiators = [
  { title: "Open Source", desc: "Your agents run on YOUR infrastructure. No vendor lock-in. Full source code access.", Icon: IconRocket, color: "var(--a)" },
  { title: "Governed", desc: "Built-in approvals, audit trails, and access controls. Enterprise-ready from day one.", Icon: IconShield, color: "var(--c)" },
  { title: "Integrated", desc: "Connects to Slack, email, Jira, Notion, GitHub, CRMs — out of the box.", Icon: IconLink, color: "var(--b)" },
  { title: "Human-in-the-loop", desc: "Agents draft, humans approve. No black boxes. Full transparency and control.", Icon: IconTarget, color: "var(--a)" },
];

const automationExamples = [
  { title: "Meeting → actions → tickets", desc: "Turn calls into structured actions, Jira tickets, and owner follow-ups automatically.", chips: ["Calendar", "Docs", "Jira"], Icon: IconClipboard, accent: "var(--a)" },
  { title: "Sales ops autopilot", desc: "Lead enrichment, personalised first email drafts, and CRM updates — with human approval.", chips: ["CRM", "Email", "Approval"], Icon: IconRocket, accent: "var(--c)" },
  { title: "Weekly status without suffering", desc: "Pull metrics, generate updates, post to Slack, and keep a decision log.", chips: ["GitHub", "Notion", "Slack"], Icon: IconBarChart, accent: "var(--b)" },
  { title: "Inbox triage for teams", desc: "Route, summarise, and respond to common requests (support, internal ops, HR).", chips: ["O365", "Gmail", "Policies"], Icon: IconAgent, accent: "var(--a)" },
];

const pricing = [
  {
    name: "AI Readiness Assessment", price: "Free", unit: "",
    desc: "30-min call + automation roadmap for your team.",
    features: ["30-min discovery call", "Workflow audit", "Automation roadmap", "ROI estimate", "No commitment"],
    cta: "Book a free call", highlight: false, accent: "var(--c)",
  },
  {
    name: "OpenClaw Training", price: "$2,500", unit: "per session",
    desc: "Hands-on AI training for your team.",
    features: ["1–2 hour session", "Up to 15 team members", "Hands-on exercises", "Team playbook", "Prompt library"],
    cta: "Book training", highlight: false, accent: "var(--b)",
  },
  {
    name: "Automation Pilot", price: "$8,000", unit: "4-week engagement",
    desc: "3 workflows deployed in 4 weeks.",
    features: ["Everything in Training", "3 automations deployed", "Runbooks & handover", "Governance setup", "2 weeks async support"],
    cta: "Start a pilot", highlight: true, accent: "var(--a)",
  },
  {
    name: "Retainer", price: "$4,000", unit: "per month",
    desc: "Ongoing automation and optimisation.",
    features: ["Unlimited automation requests", "New workflow rollouts", "Office hours", "Quarterly reviews", "Priority support"],
    cta: "Let's talk", highlight: false, accent: "var(--c)",
  },
];

const comparisonFeatures = [
  { feature: "Discovery call", free: true, training: true, pilot: true, retainer: true },
  { feature: "Workflow audit", free: true, training: true, pilot: true, retainer: true },
  { feature: "Automation roadmap", free: true, training: true, pilot: true, retainer: true },
  { feature: "Hands-on training session", free: false, training: true, pilot: true, retainer: true },
  { feature: "Team playbook & prompts", free: false, training: true, pilot: true, retainer: true },
  { feature: "Deployed automations", free: false, training: false, pilot: true, retainer: true },
  { feature: "Governance & access controls", free: false, training: false, pilot: true, retainer: true },
  { feature: "Async support", free: false, training: false, pilot: true, retainer: true },
  { feature: "Unlimited automation requests", free: false, training: false, pilot: false, retainer: true },
  { feature: "Quarterly reviews", free: false, training: false, pilot: false, retainer: true },
];

const faqs = [
  { q: "Do you replace people with agents?", a: "No. We remove repetitive work. Humans keep judgment, approvals, and relationships." },
  { q: "What is OpenClaw?", a: "OpenClaw is an open-source AI agent platform. Your agents run on your infrastructure with full control, audit trails, and no vendor lock-in." },
  { q: "Can you work with security / governance constraints?", a: "Yes — OpenClaw has built-in approvals, audit trails, and access controls. We design for safe-by-default governance." },
  { q: "What do you need from us?", a: "A small pilot group (5–15 people), a sponsor, and access to the tools you want to improve." },
  { q: "How long until we see results?", a: "Most teams have their first automation live within 2 weeks. A full pilot with 3 workflows takes about 4 weeks." },
];

const integrations = [
  { name: "OpenClaw", Logo: LogoOpenClaw },
  { name: "Slack", Logo: LogoSlack },
  { name: "Notion", Logo: LogoNotion },
  { name: "Jira", Logo: LogoJira },
  { name: "GitHub", Logo: LogoGitHub },
  { name: "Google", Logo: LogoGoogle },
  { name: "Microsoft", Logo: LogoMicrosoft },
  { name: "HubSpot", Logo: LogoHubSpot },
  { name: "Linear", Logo: LogoLinear },
  { name: "Confluence", Logo: LogoConfluence },
  { name: "Cursor", Logo: LogoCursor },
  { name: "Claude Code", Logo: LogoClaude },
];

/* ── components ── */

function Chip({ text, color }: { text: string; color?: string }) {
  return (
    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs" style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${color ? `color-mix(in srgb, ${color} 15%, transparent)` : "rgba(255,255,255,0.08)"}`, color: "rgba(255,255,255,0.6)" }}>
      {text}
    </span>
  );
}

function SectionLabel({ text, color }: { text: string; color?: string }) {
  return <div className="mono text-sm tracking-wide" style={{ color: color || "var(--muted)" }}>{text}</div>;
}

/* ── metadata ── */

export const metadata = {
  title: "AI Shift HQ — Deploy AI Agents That Actually Do the Work",
  description: "We deploy open-source AI agents on your infrastructure. Reporting, triage, ops, and follow-ups — automated with approvals and audit trails. No vendor lock-in.",
  keywords: "OpenClaw, AI agents, workflow automation, AI automation, open source AI, AI deployment, AI training",
  openGraph: {
    title: "AI Shift HQ — Deploy AI Agents That Actually Do the Work",
    description: "Open-source AI agents on your infrastructure. Automated workflows with approvals and audit trails.",
    type: "website",
    url: "https://aishifthq.com",
    siteName: "AI Shift HQ",
    images: [{ url: "https://aishifthq.com/images/og-image.png", width: 1200, height: 630, alt: "AI Shift HQ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Shift HQ — Deploy AI Agents That Actually Do the Work",
    description: "Open-source AI agents on your infrastructure. Automated workflows with approvals and audit trails.",
    images: ["https://aishifthq.com/images/og-image.png"],
  },
};

/* ── page ── */

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI Shift HQ",
    "url": "https://aishifthq.com",
    "logo": "https://aishifthq.com/images/logo.png",
    "description": "AI agent deployment and workflow automation",
    "email": "hello@aishifthq.com",
    "address": { "@type": "PostalAddress", "addressLocality": "Sydney", "addressCountry": "AU" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a },
    })),
  };

  return (
    <div className="min-h-screen bg-noise">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Nav active="Home" />

      {/* ── Hero ── */}
      <section id="top" className="relative pt-28 md:pt-36 overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative max-w-7xl mx-auto px-6 pb-16 md:pb-20">
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <Chip text="Sydney-based" color="var(--c)" />
            <Chip text="Open-source agents" color="var(--a)" />
            <Chip text="Your infrastructure" color="var(--b)" />
          </div>

          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-14 items-start">
            <div>
              <h1 className="text-5xl md:text-[4.5rem] font-semibold leading-[0.95] tracking-tight">
                Deploy AI agents<br />that actually<br /><span className="text-gradient">do the work</span>.
              </h1>
              <p className="mt-7 text-lg md:text-xl text-muted max-w-xl leading-relaxed">
                We deploy open-source AI agents on your infrastructure. They handle reporting, triage, ops, and follow-ups — with approvals and audit trails. No vendor lock-in.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-primary px-7 py-4 rounded-full text-[15px] transition-all hover:scale-[1.03]">Book a free discovery call →</a>
                <a href="#examples" className="btn-secondary px-7 py-4 rounded-full font-semibold text-[15px] transition-all hover:scale-[1.03]">See automation examples</a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
                <span><span style={{ color: "var(--a)" }}>Powered by:</span> OpenClaw (open source)</span>
                <span className="hidden sm:inline">•</span>
                <span><span style={{ color: "var(--c)" }}>Timeline:</span> first automation in 2 weeks</span>
              </div>
            </div>

            {/* terminal */}
            <div className="terminal">
              <div className="terminal-bar">
                <div className="terminal-dot" style={{ background: "#FF5F57" }} />
                <div className="terminal-dot" style={{ background: "#FEBC2E" }} />
                <div className="terminal-dot" style={{ background: "#28C840" }} />
                <span className="ml-3 text-[11px] text-muted">openclaw — agent deployment</span>
              </div>
              <div className="p-5 space-y-3 text-[13px]">
                <div><span className="text-muted">$</span> <span style={{ color: "var(--a)" }}>openclaw</span> deploy --agent ops-triage</div>
                <div className="text-muted">
                  <span style={{ color: "var(--a)" }}>✓</span> Connected to Slack, Gmail, Jira<br />
                  <span style={{ color: "var(--a)" }}>✓</span> Inbox triage rules applied<br />
                  <span style={{ color: "var(--a)" }}>✓</span> Auto-routing to #ops-review<br />
                  <span style={{ color: "var(--a)" }}>✓</span> Approval gates enabled
                </div>
                <div className="divider my-3" />
                <div><span className="text-muted">$</span> <span style={{ color: "var(--c)" }}>openclaw</span> deploy --agent weekly-report</div>
                <div className="text-muted">
                  <span style={{ color: "var(--c)" }}>✓</span> Pulling metrics from GitHub, Linear<br />
                  <span style={{ color: "var(--c)" }}>✓</span> Status draft → #leadership-review<br />
                  <span style={{ color: "var(--c)" }}>✓</span> Scheduled: every Friday 4pm
                </div>
                <div className="divider my-3" />
                <div><span className="text-muted">$</span> <span style={{ color: "var(--b)" }}>openclaw</span> status</div>
                <div className="text-muted">
                  agents: <span style={{ color: "var(--a)" }}>4 active</span> · workflows: <span style={{ color: "var(--c)" }}>9 running</span><br />
                  time saved this week: <span className="text-white">~42 hrs across team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Integrations marquee ── */}
      <div className="py-8 overflow-hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="marquee-track">
          {[...integrations, ...integrations].map((int, i) => (
            <span key={i} className="flex-shrink-0 px-8 flex items-center gap-2 whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity">
              <int.Logo size={18} />
              <span className="text-sm text-muted">{int.name}</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Why AI Shift HQ ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <SectionLabel text="why ai shift hq" color="var(--c)" />
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">Not another AI vendor.</h2>
            <p className="mt-5 text-lg text-muted leading-relaxed max-w-2xl mx-auto">We deploy open-source agents on your infrastructure. You own the code, the data, and the process.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((d) => (
              <div key={d.title} className="rounded-3xl p-8 transition-transform hover:scale-[1.02]" style={{ background: `linear-gradient(135deg, color-mix(in srgb, ${d.color} 6%, transparent), transparent)`, border: `1px solid color-mix(in srgb, ${d.color} 15%, transparent)` }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: `color-mix(in srgb, ${d.color} 10%, transparent)`, border: `1px solid color-mix(in srgb, ${d.color} 18%, transparent)` }}>
                  <d.Icon size={24} color={d.color === "var(--a)" ? "#B4FF39" : d.color === "var(--c)" ? "#00D2FF" : "#7C5CFF"} />
                </div>
                <h3 className="text-lg font-semibold">{d.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Outcomes strip ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-4">
            {outcomes.map((o) => (
              <div key={o.k} className="panel rounded-2xl p-6" style={{ borderColor: `color-mix(in srgb, ${o.color} 20%, transparent)` }}>
                <div className="mono text-sm" style={{ color: o.color }}>{o.k}</div>
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
              <SectionLabel text="services" color="var(--c)" />
              <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">Deploy. Train. Scale.</h2>
              <p className="mt-5 text-lg text-muted leading-relaxed max-w-xl">
                We build your automations, train your team to extend them, and scale with you as needs grow.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Deploy */}
            <div className="rounded-3xl p-8" style={{ background: "linear-gradient(135deg, rgba(0,210,255,0.06), rgba(124,92,255,0.03))", border: "1px solid rgba(0,210,255,0.15)" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,210,255,0.1)", border: "1px solid rgba(0,210,255,0.2)" }}>
                  <IconAgent size={22} color="#00D2FF" />
                </div>
                <h3 className="text-2xl font-semibold">Deploy</h3>
              </div>
              <p className="text-muted leading-relaxed mb-4">We build and ship your automations with OpenClaw. 3 workflows deployed in 4 weeks on your infrastructure.</p>
              <div className="flex flex-wrap gap-2">
                {["Slack agents", "Email triage", "Ops automation", "Reporting"].map((t) => <Chip key={t} text={t} color="var(--c)" />)}
              </div>
            </div>

            {/* Train */}
            <div className="rounded-3xl p-8" style={{ background: "linear-gradient(135deg, rgba(180,255,57,0.06), rgba(0,210,255,0.03))", border: "1px solid rgba(180,255,57,0.15)" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(180,255,57,0.1)", border: "1px solid rgba(180,255,57,0.2)" }}>
                  <IconKeyboard size={22} color="#B4FF39" />
                </div>
                <h3 className="text-2xl font-semibold">Train</h3>
              </div>
              <p className="text-muted leading-relaxed mb-4">We teach your team to build their own automations. Hands-on workshops with real workflows and playbooks.</p>
              <div className="flex flex-wrap gap-2">
                {["OpenClaw", "Cursor", "Claude Code", "Playbooks"].map((t) => <Chip key={t} text={t} color="var(--a)" />)}
              </div>
            </div>

            {/* Scale */}
            <div className="rounded-3xl p-8" style={{ background: "linear-gradient(135deg, rgba(124,92,255,0.06), rgba(0,210,255,0.03))", border: "1px solid rgba(124,92,255,0.15)" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(124,92,255,0.1)", border: "1px solid rgba(124,92,255,0.2)" }}>
                  <IconBarChart size={22} color="#7C5CFF" />
                </div>
                <h3 className="text-2xl font-semibold">Scale</h3>
              </div>
              <p className="text-muted leading-relaxed mb-4">Ongoing retainer for new automations. Unlimited requests, quarterly reviews, and continuous optimisation.</p>
              <div className="flex flex-wrap gap-2">
                {["Monthly retainer", "Unlimited requests", "Reviews"].map((t) => <Chip key={t} text={t} color="var(--b)" />)}
              </div>
            </div>
          </div>

          {/* bento grid */}
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featureBento.map((f) => (
              <div key={f.title} className="rounded-2xl p-5 transition-transform hover:scale-[1.02]" style={{ background: `linear-gradient(135deg, color-mix(in srgb, ${f.color} 8%, transparent), transparent)`, border: `1px solid color-mix(in srgb, ${f.color} 15%, transparent)` }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `color-mix(in srgb, ${f.color} 10%, transparent)`, border: `1px solid color-mix(in srgb, ${f.color} 18%, transparent)` }}>
                    <f.Icon size={20} color={f.color === "var(--a)" ? "#B4FF39" : f.color === "var(--c)" ? "#00D2FF" : "#7C5CFF"} />
                  </div>
                  <span className="mono text-xs px-3 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid color-mix(in srgb, ${f.color} 12%, transparent)`, color: "rgba(255,255,255,0.5)" }}>{f.tag}</span>
                </div>
                <div className="text-lg font-semibold">{f.title}</div>
                <p className="text-sm text-muted mt-2 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Automation examples ── */}
      <section id="examples" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-end mb-14">
            <div>
              <SectionLabel text="automation examples" color="var(--a)" />
              <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">Agents that actually help.</h2>
              <p className="mt-5 text-lg text-muted leading-relaxed max-w-xl">Workflows with clear inputs/outputs, approvals where needed, and measurable impact.</p>
            </div>
            <div className="rounded-2xl p-6 text-sm text-muted leading-relaxed" style={{ background: "rgba(180,255,57,0.04)", border: "1px solid rgba(180,255,57,0.12)" }}>
              <span style={{ color: "var(--a)" }}>Powered by OpenClaw:</span> open-source agents running on your infrastructure with full audit trails.
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {automationExamples.map((ex) => (
              <div key={ex.title} className="rounded-3xl p-8 transition-transform hover:scale-[1.01]" style={{ background: `linear-gradient(135deg, color-mix(in srgb, ${ex.accent} 6%, transparent), transparent)`, border: `1px solid color-mix(in srgb, ${ex.accent} 15%, transparent)` }}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `color-mix(in srgb, ${ex.accent} 10%, transparent)`, border: `1px solid color-mix(in srgb, ${ex.accent} 18%, transparent)` }}>
                        <ex.Icon size={20} color={ex.accent === "var(--a)" ? "#B4FF39" : ex.accent === "var(--c)" ? "#00D2FF" : "#7C5CFF"} />
                      </div>
                      <span className="text-xl font-semibold">{ex.title}</span>
                    </div>
                    <p className="mt-3 text-sm text-muted leading-relaxed">{ex.desc}</p>
                  </div>
                  <div className="hidden sm:flex flex-col gap-2 items-end flex-shrink-0">
                    {ex.chips.map((c) => <Chip key={c} text={c} color={ex.accent} />)}
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 sm:hidden">
                  {ex.chips.map((c) => <Chip key={c} text={c} color={ex.accent} />)}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a href="/use-cases" className="btn-secondary inline-flex items-center justify-center px-7 py-4 rounded-full font-semibold text-[15px] transition-all hover:scale-[1.03]">
              Browse all use cases →
            </a>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="py-24" style={{ background: "linear-gradient(180deg, transparent, rgba(180,255,57,0.03), transparent)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <SectionLabel text="pricing" color="var(--a)" />
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">Transparent pricing. No surprises.</h2>
            <p className="mt-5 text-lg text-muted leading-relaxed max-w-2xl mx-auto">All prices in AUD. Start free, then scale as you see results.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pricing.map((tier) => (
              <div key={tier.name} className={`rounded-3xl p-8 flex flex-col ${tier.highlight ? "glow-border" : ""}`} style={{ background: tier.highlight ? "linear-gradient(135deg, rgba(180,255,57,0.08), rgba(0,210,255,0.04))" : `linear-gradient(135deg, color-mix(in srgb, ${tier.accent} 5%, transparent), transparent)`, border: tier.highlight ? "none" : `1px solid color-mix(in srgb, ${tier.accent} 15%, transparent)` }}>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mono text-sm" style={{ color: tier.accent }}>{tier.name}</div>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-4xl font-semibold">{tier.price}</span>
                    {tier.unit && <span className="text-sm text-muted">{tier.unit}</span>}
                  </div>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{tier.desc}</p>
                  <ul className="mt-6 space-y-3 text-sm flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span style={{ color: tier.accent }} className="mt-0.5">✓</span>
                        <span className="text-muted">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className={`mt-8 text-center px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-[1.03] ${tier.highlight ? "btn-primary" : "btn-secondary"}`}>{tier.cta}</a>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div className="mt-16 max-w-5xl mx-auto overflow-x-auto">
            <h3 className="text-2xl font-semibold mb-8 text-center">What&apos;s included</h3>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <th className="text-left py-3 px-4 text-muted font-medium">Feature</th>
                  <th className="text-center py-3 px-4 font-medium" style={{ color: "var(--c)" }}>Free</th>
                  <th className="text-center py-3 px-4 font-medium" style={{ color: "var(--b)" }}>Training</th>
                  <th className="text-center py-3 px-4 font-medium" style={{ color: "var(--a)" }}>Pilot</th>
                  <th className="text-center py-3 px-4 font-medium" style={{ color: "var(--c)" }}>Retainer</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row) => (
                  <tr key={row.feature} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <td className="py-3 px-4 text-muted">{row.feature}</td>
                    <td className="text-center py-3 px-4">{row.free ? <span style={{ color: "var(--a)" }}>✓</span> : <span className="text-muted">—</span>}</td>
                    <td className="text-center py-3 px-4">{row.training ? <span style={{ color: "var(--a)" }}>✓</span> : <span className="text-muted">—</span>}</td>
                    <td className="text-center py-3 px-4">{row.pilot ? <span style={{ color: "var(--a)" }}>✓</span> : <span className="text-muted">—</span>}</td>
                    <td className="text-center py-3 px-4">{row.retainer ? <span style={{ color: "var(--a)" }}>✓</span> : <span className="text-muted">—</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-14">
            <div>
              <SectionLabel text="frequently asked" color="var(--c)" />
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">Questions we get.</h2>
              <p className="mt-5 text-muted leading-relaxed">If your question isn&apos;t here, book a call. We&apos;d rather talk than let assumptions stall a decision.</p>
            </div>
            <div className="space-y-0">
              {faqs.map((f, i) => (
                <div key={f.q} className="py-6" style={i > 0 ? { borderTop: "1px solid rgba(255,255,255,0.06)" } : {}}>
                  <div className="text-[15px] font-semibold flex items-center gap-2">
                    <span style={{ color: "var(--c)" }}>→</span> {f.q}
                  </div>
                  <div className="mt-2 text-sm text-muted leading-relaxed pl-5">{f.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glow-border rounded-[28px] p-10 md:p-14" style={{ background: "linear-gradient(135deg, rgba(180,255,57,0.05), rgba(0,210,255,0.03), rgba(124,92,255,0.04))" }}>
            <div className="relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
              <div>
                <SectionLabel text="get started" color="var(--a)" />
                <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">Want automations running in 30&nbsp;days?</h2>
                <p className="mt-5 text-lg text-muted leading-relaxed max-w-xl">Tell us what&apos;s slowing your team down. We&apos;ll propose a pilot automation roadmap — no commitment.</p>
                <div className="mt-8 rounded-2xl p-6" style={{ background: "rgba(180,255,57,0.04)", border: "1px solid rgba(180,255,57,0.12)" }}>
                  <div className="mono text-sm mb-4" style={{ color: "var(--a)" }}>What to expect</div>
                  <ul className="space-y-3 text-sm text-muted">
                    <li className="flex items-start gap-2"><span style={{ color: "var(--a)" }}>1.</span> 30-min discovery call (free)</li>
                    <li className="flex items-start gap-2"><span style={{ color: "var(--c)" }}>2.</span> Workflow audit + automation roadmap</li>
                    <li className="flex items-start gap-2"><span style={{ color: "var(--b)" }}>3.</span> Pilot: 3 workflows in 4 weeks</li>
                    <li className="flex items-start gap-2"><span style={{ color: "var(--a)" }}>4.</span> Train your team to extend</li>
                  </ul>
                </div>
                <p className="mt-6 text-sm text-muted">Based in Sydney — working with teams globally.</p>
              </div>
              <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <h3 className="text-lg font-semibold mb-5">Get in touch</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
