'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import type { UseCase } from '@/lib/supabase';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import {
  generateWorkflowSteps,
  generateBenefits,
  generateBeforeAfter,
  generateWhoItsFor,
  generatePrerequisites,
  generateFAQ,
  generateExampleOutput,
  generateKeyMetrics,
} from '@/lib/useCaseDefaults';

function getAccentColor(accent: 'a' | 'b' | 'c'): string {
  return accent === 'a' ? 'var(--a)' : accent === 'b' ? 'var(--b)' : 'var(--c)';
}

function getComplexityColor(complexity: string): string {
  return complexity === 'Simple' ? 'var(--a)' : complexity === 'Moderate' ? 'var(--c)' : 'var(--b)';
}

function getIcon(icon: string): string {
  const icons: Record<string, string> = {
    clipboard: '📋', shield: '🛡️', rocket: '🚀', chart: '📊', document: '📄',
    search: '🔍', star: '⭐', calendar: '📅', wrench: '🔧', link: '🔗',
    code: '💻', alert: '🚨', ticket: '🎫', users: '👥', target: '🎯',
  };
  return icons[icon] || '⚡';
}

export default function UseCaseDetail({ id }: { id: string }) {
  const [useCase, setUseCase] = useState<UseCase | null>(null);
  const [related, setRelated] = useState<UseCase[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function load() {
      const { data, error } = await supabase
        .from('use_cases')
        .select('*')
        .eq('id', id)
        .eq('published', true)
        .single();

      if (error || !data) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      setUseCase(data);

      // Update page title
      document.title = `${data.title} — AI Automation Use Case | AI Shift HQ`;

      // Fetch related
      const { data: relData } = await supabase
        .from('use_cases')
        .select('*')
        .eq('published', true)
        .neq('id', data.id)
        .or(`industry.eq.${data.industry},department.eq.${data.department}`)
        .limit(3);

      setRelated(relData || []);
      setLoading(false);
    }
    load();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-noise flex items-center justify-center">
        <div className="text-muted">Loading use case…</div>
      </div>
    );
  }

  if (notFound || !useCase) {
    return (
      <div className="min-h-screen bg-noise flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-semibold">Use case not found</h1>
        <Link href="/use-cases" className="text-muted hover:text-white transition-colors">← Back to all use cases</Link>
      </div>
    );
  }

  const accentColor = getAccentColor(useCase.accent_color);
  const complexityColor = getComplexityColor(useCase.complexity);
  const workflow = useCase.workflow_steps || generateWorkflowSteps(useCase);
  const benefits = useCase.benefits || generateBenefits(useCase);
  const beforeAfter = useCase.before_after || generateBeforeAfter(useCase);
  const whoItsFor = useCase.who_its_for || generateWhoItsFor(useCase);
  const prerequisites = useCase.prerequisites || generatePrerequisites(useCase);
  const faq = useCase.faq || generateFAQ(useCase);
  const exampleOutput = useCase.example_output || generateExampleOutput(useCase);
  const keyMetrics = useCase.key_metrics || generateKeyMetrics(useCase);
  const implementationTime = useCase.complexity === 'Simple' ? '1–2 weeks' : useCase.complexity === 'Moderate' ? '2–4 weeks' : '4–6 weeks';

  return (
    <div className="min-h-screen bg-noise">
      <Nav active="Use Cases" />

      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-muted mb-8">
            <Link href="/use-cases" className="hover:text-white transition-colors">← All use cases</Link>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
              style={{
                background: `color-mix(in srgb, ${accentColor} 10%, transparent)`,
                border: `1px solid color-mix(in srgb, ${accentColor} 20%, transparent)`,
              }}
            >
              {getIcon(useCase.icon)}
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-xs" style={{ background: `color-mix(in srgb, var(--c) 12%, transparent)`, border: `1px solid color-mix(in srgb, var(--c) 25%, transparent)`, color: "rgba(255,255,255,0.8)" }}>
                {useCase.industry}
              </span>
              <span className="inline-flex items-center rounded-full px-3 py-1 text-xs" style={{ background: `color-mix(in srgb, var(--b) 12%, transparent)`, border: `1px solid color-mix(in srgb, var(--b) 25%, transparent)`, color: "rgba(255,255,255,0.8)" }}>
                {useCase.department}
              </span>
              <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium" style={{ background: `color-mix(in srgb, ${complexityColor} 12%, transparent)`, border: `1px solid color-mix(in srgb, ${complexityColor} 25%, transparent)`, color: "rgba(255,255,255,0.8)" }}>
                {useCase.complexity}
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            {useCase.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-3xl">
            {useCase.description}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 mb-8">
        <div className="rounded-2xl p-5 text-center" style={{ background: "rgba(180,255,57,0.04)", border: "1px solid rgba(180,255,57,0.12)" }}>
          <span className="text-sm text-muted">Want this automation running in 30 days? </span>
          <a href="/#contact" className="text-sm font-semibold hover:opacity-80 transition-opacity" style={{ color: "var(--a)" }}>Book a free discovery call →</a>
        </div>
      </div>

      {/* Detail Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Key Metrics */}
              <div className="rounded-3xl p-8" style={{ background: `linear-gradient(135deg, color-mix(in srgb, ${accentColor} 10%, transparent), transparent)`, border: `1px solid color-mix(in srgb, ${accentColor} 18%, transparent)` }}>
                <div className="mono text-xs text-muted mb-4">KEY METRICS</div>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(keyMetrics).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-sm text-muted mb-1">{key}</div>
                      <div className="text-2xl font-semibold">{String(value)}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workflow */}
              <div className="rounded-3xl p-8" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Workflow</h2>
                  <a href="https://openclaw.ai" target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1.5 rounded-full transition-all hover:scale-105" style={{ background: `color-mix(in srgb, ${accentColor} 12%, transparent)`, border: `1px solid color-mix(in srgb, ${accentColor} 25%, transparent)`, color: "rgba(255,255,255,0.8)" }}>
                    Powered by OpenClaw
                  </a>
                </div>
                <div className="space-y-4">
                  {workflow.map((s: any) => (
                    <div key={s.step} className="flex gap-4">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-semibold flex-shrink-0" style={{ background: `color-mix(in srgb, ${accentColor} 10%, transparent)`, border: `1px solid color-mix(in srgb, ${accentColor} 18%, transparent)`, color: "rgba(255,255,255,0.9)" }}>
                        {s.step}
                      </div>
                      <div>
                        <div className="font-semibold">{s.title}</div>
                        <div className="text-sm text-muted leading-relaxed">{s.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <p className="text-sm text-muted leading-relaxed">
                    <strong className="text-white">OpenClaw</strong> orchestrates this entire workflow using its built-in integrations (Slack, email, browser, database, APIs) and executes everything end-to-end without manual intervention.
                  </p>
                </div>
              </div>

              {/* Before / After */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-3xl p-8" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="mono text-xs text-muted mb-3">BEFORE</div>
                  <ul className="space-y-2 text-sm text-muted">
                    {(beforeAfter.before || []).slice(0, 5).map((t: string, i: number) => (
                      <li key={i}>• {t}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl p-8" style={{ background: `linear-gradient(135deg, color-mix(in srgb, ${accentColor} 6%, transparent), transparent)`, border: `1px solid color-mix(in srgb, ${accentColor} 14%, transparent)` }}>
                  <div className="mono text-xs text-muted mb-3">AFTER</div>
                  <ul className="space-y-2 text-sm text-muted">
                    {(beforeAfter.after || []).slice(0, 5).map((t: string, i: number) => (
                      <li key={i}>• {t}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Example Output */}
              <div className="rounded-3xl p-8" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <h2 className="text-xl font-semibold mb-5">Example Output</h2>
                <div className="example-output-container" dangerouslySetInnerHTML={{ __html: exampleOutput }} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "24px" }} />
              </div>

              {/* Benefits */}
              <div className="rounded-3xl p-8" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <h2 className="text-xl font-semibold mb-5">What you get</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {benefits.slice(0, 6).map((b: string, i: number) => (
                    <div key={i} className="rounded-2xl p-4 text-sm" style={{ background: `color-mix(in srgb, ${accentColor} 6%, transparent)`, border: `1px solid color-mix(in srgb, ${accentColor} 12%, transparent)`, color: "rgba(255,255,255,0.82)" }}>
                      {b}
                    </div>
                  ))}
                </div>
              </div>

              {/* Who It's For */}
              <div className="rounded-3xl p-8" style={{ background: `linear-gradient(135deg, color-mix(in srgb, ${accentColor} 6%, transparent), transparent)`, border: `1px solid color-mix(in srgb, ${accentColor} 12%, transparent)` }}>
                <h2 className="text-xl font-semibold mb-4">Who it&apos;s for</h2>
                <p className="text-muted leading-relaxed">{whoItsFor}</p>
              </div>

              {/* Prerequisites */}
              <div className="rounded-3xl p-8" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <h2 className="text-xl font-semibold mb-5">What you need</h2>
                <ul className="space-y-3">
                  {prerequisites.map((prereq: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted">
                      <span className="mt-1 flex-shrink-0" style={{ color: accentColor }}>✓</span>
                      <span>{prereq}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ */}
              <div className="rounded-3xl p-8" style={{ background: `linear-gradient(135deg, color-mix(in srgb, ${accentColor} 6%, transparent), transparent)`, border: `1px solid color-mix(in srgb, ${accentColor} 12%, transparent)` }}>
                <h2 className="text-xl font-semibold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {faq.map((item: { question: string; answer: string }, i: number) => (
                    <div key={i}>
                      <div className="font-semibold mb-2">{item.question}</div>
                      <div className="text-sm text-muted leading-relaxed">{item.answer}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Description */}
              {useCase.detailed_description && (
                <div className="rounded-3xl p-8" style={{ background: `linear-gradient(135deg, color-mix(in srgb, ${accentColor} 6%, transparent), transparent)`, border: `1px solid color-mix(in srgb, ${accentColor} 12%, transparent)` }}>
                  <h2 className="text-xl font-semibold mb-4">More detail</h2>
                  <p className="text-muted leading-relaxed">{useCase.detailed_description}</p>
                </div>
              )}

              {/* Tools Used */}
              {useCase.tools && useCase.tools.length > 0 && (
                <div className="rounded-3xl p-8" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <h2 className="text-xl font-semibold mb-4">Tools & integrations</h2>
                  <div className="flex flex-wrap gap-3">
                    {useCase.tools.map((tool: string) => (
                      <span key={tool} className="inline-flex items-center rounded-full px-4 py-2 text-sm" style={{ background: `color-mix(in srgb, ${accentColor} 8%, transparent)`, border: `1px solid color-mix(in srgb, ${accentColor} 15%, transparent)`, color: "rgba(255,255,255,0.8)" }}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="rounded-3xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted mb-5">Details</h3>
                <div className="space-y-5">
                  <div>
                    <div className="text-xs text-muted mb-1">Time saved</div>
                    <div className="text-lg font-semibold" style={{ color: accentColor }}>⏱️ {useCase.time_saved}</div>
                  </div>
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} className="pt-4">
                    <div className="text-xs text-muted mb-1">Implementation time</div>
                    <div className="text-lg font-semibold">{implementationTime}</div>
                  </div>
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} className="pt-4">
                    <div className="text-xs text-muted mb-1">Complexity</div>
                    <div className="text-lg font-semibold">{useCase.complexity}</div>
                  </div>
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} className="pt-4">
                    <div className="text-xs text-muted mb-1">Industry</div>
                    <div className="font-medium">{useCase.industry}</div>
                  </div>
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} className="pt-4">
                    <div className="text-xs text-muted mb-1">Department</div>
                    <div className="font-medium">{useCase.department}</div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl p-6" style={{ background: `linear-gradient(135deg, color-mix(in srgb, ${accentColor} 8%, transparent), transparent)`, border: `1px solid color-mix(in srgb, ${accentColor} 18%, transparent)` }}>
                <h3 className="font-semibold mb-2">Get this built for your team</h3>
                <p className="text-sm text-muted mb-4">We deploy this automation on your infrastructure in 2–4 weeks. Powered by OpenClaw.</p>
                <div className="space-y-2">
                  <a href="/#contact" className="btn-primary inline-flex items-center justify-center w-full px-5 py-3 rounded-full font-semibold text-sm transition-all hover:scale-[1.03]">
                    Book a call →
                  </a>
                  <a href="https://openclaw.ai" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center justify-center w-full px-5 py-3 rounded-full font-semibold text-sm transition-all hover:scale-[1.03]">
                    Powered by OpenClaw
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Use Cases */}
      {related.length > 0 && (
        <section className="pb-24">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-semibold mb-8">Related use cases</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((uc) => {
                const relAccent = getAccentColor(uc.accent_color);
                return (
                  <a
                    key={uc.id}
                    href={`/use-cases/${uc.id}/`}
                    className="rounded-3xl p-6 transition-all hover:scale-[1.02] flex flex-col"
                    style={{ background: `linear-gradient(135deg, color-mix(in srgb, ${relAccent} 6%, transparent), transparent)`, border: `1px solid color-mix(in srgb, ${relAccent} 15%, transparent)` }}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-lg">{getIcon(uc.icon)}</span>
                      <h3 className="text-sm font-semibold leading-tight">{uc.title}</h3>
                    </div>
                    <p className="text-xs text-muted leading-relaxed flex-1">{uc.description}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-xs text-muted">⏱️ {uc.time_saved}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
