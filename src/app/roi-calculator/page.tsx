"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useState, useMemo } from "react";

function InputField({
  label,
  value,
  onChange,
  prefix,
  suffix,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <div>
      <label className="block text-sm text-muted mb-2">{label}</label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted text-sm">
            {prefix}
          </span>
        )}
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value) || 0)}
          className="w-full px-4 py-3 rounded-2xl text-[15px] outline-none focus:ring-2 transition-all"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "rgba(255,255,255,0.92)",
            caretColor: "var(--a)",
            paddingLeft: prefix ? "2rem" : undefined,
          }}
        />
        {suffix && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted text-sm">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

function ResultCard({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div
      className="rounded-2xl p-6"
      style={{
        background: `color-mix(in srgb, ${color} 6%, transparent)`,
        border: `1px solid color-mix(in srgb, ${color} 15%, transparent)`,
      }}
    >
      <div className="text-sm text-muted mb-1">{label}</div>
      <div className="text-3xl font-semibold" style={{ color }}>
        {value}
      </div>
    </div>
  );
}

export default function ROICalculatorPage() {
  const [teamSize, setTeamSize] = useState(10);
  const [hourlyCost, setHourlyCost] = useState(75);
  const [hoursPerWeek, setHoursPerWeek] = useState(20);
  const [workflows, setWorkflows] = useState(3);

  const results = useMemo(() => {
    const automationRate = 0.6;
    const monthlyHoursSaved = hoursPerWeek * automationRate * 4.33;
    const annualSavings = monthlyHoursSaved * 12 * hourlyCost;
    const pilotCost = 8000;
    const roi = pilotCost > 0 ? ((annualSavings - pilotCost) / pilotCost) * 100 : 0;
    const monthlyPayback =
      annualSavings > 0 ? pilotCost / (annualSavings / 12) : Infinity;

    return {
      monthlyHoursSaved: Math.round(monthlyHoursSaved),
      annualSavings: Math.round(annualSavings),
      roi: Math.round(roi),
      paybackMonths: monthlyPayback === Infinity ? "N/A" : monthlyPayback.toFixed(1),
    };
  }, [teamSize, hourlyCost, hoursPerWeek, workflows]);

  return (
    <div className="min-h-screen bg-noise">
      <Nav active="ROI Calculator" />

      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="mono text-sm tracking-wide" style={{ color: "var(--a)" }}>
            roi calculator
          </div>
          <h1 className="mt-3 text-5xl md:text-[4rem] font-semibold leading-[0.95] tracking-tight">
            Calculate your<br />
            <span className="text-gradient">automation ROI</span>.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-3xl leading-relaxed">
            See how much time and money your team could save with AI-powered
            workflow automation.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Inputs */}
            <div
              className="rounded-3xl p-8 space-y-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h2 className="text-xl font-semibold mb-2">Your team</h2>
              <InputField
                label="Team size"
                value={teamSize}
                onChange={setTeamSize}
                suffix="people"
              />
              <InputField
                label="Average hourly cost"
                value={hourlyCost}
                onChange={setHourlyCost}
                prefix="$"
              />
              <InputField
                label="Hours spent on manual tasks per week"
                value={hoursPerWeek}
                onChange={setHoursPerWeek}
                suffix="hrs/week"
              />
              <InputField
                label="Number of workflows to automate"
                value={workflows}
                onChange={setWorkflows}
              />
              <p className="text-xs text-muted">
                Assumes 60% automation rate — conservative estimate based on
                typical deployments.
              </p>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <div
                className="rounded-3xl p-8"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(180,255,57,0.06), rgba(0,210,255,0.03))",
                  border: "1px solid rgba(180,255,57,0.15)",
                }}
              >
                <h2 className="text-xl font-semibold mb-6">Your savings</h2>
                <div className="grid grid-cols-2 gap-4">
                  <ResultCard
                    label="Monthly hours saved"
                    value={`${results.monthlyHoursSaved} hrs`}
                    color="var(--a)"
                  />
                  <ResultCard
                    label="Annual cost savings"
                    value={`$${results.annualSavings.toLocaleString()}`}
                    color="var(--c)"
                  />
                  <ResultCard
                    label="ROI (first year)"
                    value={`${results.roi}%`}
                    color="var(--b)"
                  />
                  <ResultCard
                    label="Payback period"
                    value={
                      results.paybackMonths === "N/A"
                        ? "N/A"
                        : `${results.paybackMonths} mo`
                    }
                    color="var(--a)"
                  />
                </div>
              </div>

              <div
                className="rounded-3xl p-8 text-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,92,255,0.06), rgba(0,210,255,0.03))",
                  border: "1px solid rgba(124,92,255,0.15)",
                }}
              >
                <h3 className="text-lg font-semibold mb-2">
                  See these savings in action
                </h3>
                <p className="text-sm text-muted mb-6">
                  Book an Automation Pilot — 3 workflows deployed in 4 weeks for
                  $8,000.
                </p>
                <a
                  href="/#contact"
                  className="btn-primary inline-flex items-center justify-center px-7 py-4 rounded-full font-semibold text-[15px] transition-all hover:scale-[1.03]"
                >
                  Book a pilot →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
