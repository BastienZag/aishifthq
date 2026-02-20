import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How It Works — OpenClaw Labs",
  description:
    "From discovery to scale: how we deploy OpenClaw AI agents on your infrastructure in weeks, not months.",
  openGraph: {
    title: "How It Works — OpenClaw Labs",
    description: "From discovery to scale: how we deploy OpenClaw AI agents on your infrastructure.",
    type: "website",
    url: "https://openclawlabs.ai/how-it-works",
    siteName: "OpenClaw Labs",
  },
};

const steps = [
  {
    num: 1,
    title: "Discovery",
    desc: "We map your workflows, identify bottlenecks, and find the highest-ROI automations. You'll get a clear picture of where AI agents can save the most time.",
    color: "var(--a)",
    detail: "30-min call + workflow audit",
  },
  {
    num: 2,
    title: "Design",
    desc: "We pick the best automations for ROI and design the agent architecture. Every workflow is scoped with clear inputs, outputs, and approval gates.",
    color: "var(--c)",
    detail: "Architecture doc + automation roadmap",
  },
  {
    num: 3,
    title: "Deploy",
    desc: "We build and ship with OpenClaw on your infrastructure. 3 workflows deployed in 4 weeks — with runbooks, governance, and handover documentation.",
    color: "var(--b)",
    detail: "3 workflows live in 4 weeks",
  },
  {
    num: 4,
    title: "Train",
    desc: "Your team learns to extend and customize agents. We provide playbooks, templates, prompt libraries, and hands-on office hours.",
    color: "var(--a)",
    detail: "Playbooks + office hours",
  },
  {
    num: 5,
    title: "Scale",
    desc: "Monthly retainer for new automations. Unlimited requests, quarterly reviews, and continuous optimization as your needs evolve.",
    color: "var(--c)",
    detail: "Ongoing retainer",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-noise">
      <Nav active="How It Works" />

      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="mono text-sm tracking-wide" style={{ color: "var(--c)" }}>
            how it works
          </div>
          <h1 className="mt-3 text-5xl md:text-[4rem] font-semibold leading-[0.95] tracking-tight">
            From discovery<br />
            to <span className="text-gradient">running agents</span>.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-3xl leading-relaxed">
            A proven 5-step process to deploy AI automations on your infrastructure.
            Most teams have their first workflow live within 2 weeks.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
              style={{ background: "rgba(255,255,255,0.08)" }}
            />

            <div className="space-y-12">
              {steps.map((step, i) => (
                <div key={step.num} className="relative flex gap-8 items-start">
                  {/* Circle */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold flex-shrink-0 relative z-10"
                    style={{
                      background: `color-mix(in srgb, ${step.color} 15%, transparent)`,
                      border: `2px solid color-mix(in srgb, ${step.color} 40%, transparent)`,
                      color: "rgba(255,255,255,0.95)",
                    }}
                  >
                    {step.num}
                  </div>

                  {/* Content */}
                  <div
                    className="rounded-3xl p-8 flex-1"
                    style={{
                      background: `linear-gradient(135deg, color-mix(in srgb, ${step.color} 6%, transparent), transparent)`,
                      border: `1px solid color-mix(in srgb, ${step.color} 15%, transparent)`,
                    }}
                  >
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <h3 className="text-2xl font-semibold">{step.title}</h3>
                      <span
                        className="mono text-xs px-3 py-1 rounded-full hidden sm:inline-flex"
                        style={{
                          background: `color-mix(in srgb, ${step.color} 10%, transparent)`,
                          border: `1px solid color-mix(in srgb, ${step.color} 20%, transparent)`,
                          color: "rgba(255,255,255,0.6)",
                        }}
                      >
                        {step.detail}
                      </span>
                    </div>
                    <p className="text-muted leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="glow-border rounded-[28px] p-10 md:p-14 text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(180,255,57,0.05), rgba(0,210,255,0.03), rgba(124,92,255,0.04))",
            }}
          >
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="mono text-sm" style={{ color: "var(--a)" }}>
                get started
              </div>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
                Ready to automate your workflows?
              </h2>
              <p className="mt-5 text-lg text-muted leading-relaxed">
                Book a free 30-minute discovery call. We&apos;ll map your workflows and
                propose the highest-ROI automations.
              </p>
              <a
                href="/#contact"
                className="mt-8 inline-flex items-center justify-center btn-primary px-7 py-4 rounded-full font-semibold text-[15px] transition-all hover:scale-[1.03]"
              >
                Book a free discovery call →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
