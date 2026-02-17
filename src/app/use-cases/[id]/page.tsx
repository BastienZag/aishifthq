import { supabase } from '@/lib/supabase';
import type { UseCase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';

async function getUseCase(id: string): Promise<any | null> {
  const { data, error } = await supabase
    .from('use_cases')
    .select('*')
    .eq('id', id)
    .eq('published', true)
    .single();

  if (error || !data) return null;
  return data;
}

async function getRelatedUseCases(useCase: UseCase): Promise<UseCase[]> {
  // NOTE: Keep related cards lightweight (title/desc)
  const { data } = await supabase
    .from('use_cases')
    .select('*')
    .eq('published', true)
    .neq('id', useCase.id)
    .or(`industry.eq.${useCase.industry},department.eq.${useCase.department}`)
    .limit(3);

  return data || [];
}

export async function generateStaticParams() {
  const { data } = await supabase
    .from('use_cases')
    .select('id')
    .eq('published', true);

  return (data || []).map((uc) => ({ id: uc.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const useCase = await getUseCase(id);
  if (!useCase) return { title: 'Use Case Not Found' };

  return {
    title: `${useCase.title} — AI Automation Use Case | AI Shift HQ`,
    description: useCase.detailed_description || useCase.description,
    keywords: `${useCase.title}, AI automation, OpenClaw, ${useCase.industry}, ${useCase.department}, workflow automation`,
    openGraph: {
      title: `${useCase.title} — OpenClaw Automation`,
      description: useCase.description,
      type: 'article',
      url: `https://aishifthq.com/use-cases/${id}`,
      siteName: 'AI Shift HQ',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${useCase.title} — OpenClaw Automation`,
      description: useCase.description,
    },
  };
}

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

function defaultWorkflowSteps(useCase: UseCase) {
  const tools = (useCase.tools || []).slice(0, 3);
  return [
    {
      step: 1,
      title: 'Trigger',
      description: `A request comes in (form, email, system event) and gets captured automatically${tools.length ? ` via ${tools[0]}` : ''}.`,
    },
    {
      step: 2,
      title: 'Understand',
      description: 'AI extracts the important fields, applies rules, and adds context from your systems.',
    },
    {
      step: 3,
      title: 'Act',
      description: `Updates the right tools${tools.length ? ` (${tools.join(', ')})` : ''}, routes work to the right person, and generates a draft if needed.`,
    },
    {
      step: 4,
      title: 'Track',
      description: 'Logs outcomes, sends status updates, and creates an audit trail for reporting.',
    },
  ];
}

function defaultBenefits(useCase: UseCase) {
  return [
    `Save ${useCase.time_saved} on repetitive ${useCase.department.toLowerCase()} work`,
    'Fewer handoffs and less context-switching',
    'More consistent outcomes (same rules every time)',
    'Clear visibility: logs, status updates, and ownership',
    'Humans stay in control with approvals where needed',
  ];
}

function defaultBeforeAfter(useCase: UseCase) {
  return {
    before: [
      'Requests scattered across inboxes and spreadsheets',
      'Manual copy/paste between tools',
      'Slow follow-ups and unclear ownership',
      'Errors from repetitive steps',
    ],
    after: [
      'One consistent workflow from intake to completion',
      'Automatic routing + draft generation',
      'Fast turnaround with clear status',
      `Measured impact (≈ ${useCase.time_saved} saved)`,
    ],
  };
}

function defaultImplementation(useCase: UseCase) {
  const t = useCase.complexity === 'Simple' ? '1–2 weeks' : useCase.complexity === 'Moderate' ? '2–4 weeks' : '4–6 weeks';
  const roi = useCase.complexity === 'Simple'
    ? 'Quick win: improves speed and consistency immediately'
    : useCase.complexity === 'Moderate'
      ? 'Strong ROI: removes recurring manual work and reduces errors'
      : 'High leverage: combines multiple systems + approvals for real impact';
  return { time: t, roi };
}

export default async function UseCaseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const useCase = await getUseCase(id);
  if (!useCase) notFound();

  const accentColor = getAccentColor(useCase.accent_color);
  const complexityColor = getComplexityColor(useCase.complexity);
  const related = await getRelatedUseCases(useCase);

  const workflow = useCase.workflow_steps && Array.isArray(useCase.workflow_steps) ? useCase.workflow_steps : defaultWorkflowSteps(useCase);
  const benefits: string[] = useCase.benefits && Array.isArray(useCase.benefits) ? useCase.benefits : defaultBenefits(useCase);
  const beforeAfter = useCase.before_after && typeof useCase.before_after === 'object' ? useCase.before_after : defaultBeforeAfter(useCase);
  const impl = {
    time: useCase.implementation_time || defaultImplementation(useCase).time,
    roi: useCase.roi_highlight || defaultImplementation(useCase).roi,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://aishifthq.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Use Cases",
        "item": "https://aishifthq.com/use-cases"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": useCase.title,
        "item": `https://aishifthq.com/use-cases/${id}`
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": useCase.title,
    "description": useCase.description,
    "applicationCategory": "AI Automation",
    "keywords": `${useCase.industry}, ${useCase.department}, AI automation, OpenClaw`,
    "author": {
      "@type": "Organization",
      "name": "AI Shift HQ"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AI Shift HQ",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aishifthq.com/images/logo.png"
      }
    },
    "datePublished": useCase.created_at,
    "url": `https://aishifthq.com/use-cases/${id}`
  };

  return (
    <div className="min-h-screen bg-noise">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* ── Nav ── */}
      <nav className="fixed top-0 w-full z-50" style={{ background: "rgba(7,7,10,0.68)", backdropFilter: "blur(18px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="leading-tight">
              <div className="text-[15px] font-semibold">AI Shift HQ</div>
              <div className="text-[11px] tracking-wide uppercase" style={{ color: "var(--c)" }}>Use Cases</div>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm">
            <a href="/#services" className="text-muted hover:text-white transition-colors">Services</a>
            <a href="/#examples" className="text-muted hover:text-white transition-colors">Automations</a>
            <a href="/use-cases" className="text-white">Use Cases</a>
            <a href="/#pricing" className="text-muted hover:text-white transition-colors">Pricing</a>
            <a href="/#faq" className="text-muted hover:text-white transition-colors">FAQ</a>
            <a href="/blog" className="text-muted hover:text-white transition-colors">Blog</a>
            <a href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-full font-semibold transition-all hover:scale-[1.03] btn-primary text-sm">Get OpenClaw</a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-28 md:pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted mb-8">
            <Link href="/use-cases" className="hover:text-white transition-colors">← All use cases</Link>
          </div>

          {/* Icon + Tags */}
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
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-xs"
                style={{
                  background: `color-mix(in srgb, var(--c) 12%, transparent)`,
                  border: `1px solid color-mix(in srgb, var(--c) 25%, transparent)`,
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                {useCase.industry}
              </span>
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-xs"
                style={{
                  background: `color-mix(in srgb, var(--b) 12%, transparent)`,
                  border: `1px solid color-mix(in srgb, var(--b) 25%, transparent)`,
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                {useCase.department}
              </span>
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                style={{
                  background: `color-mix(in srgb, ${complexityColor} 12%, transparent)`,
                  border: `1px solid color-mix(in srgb, ${complexityColor} 25%, transparent)`,
                  color: "rgba(255,255,255,0.8)",
                }}
              >
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

      {/* ── Detail Content ── */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* ROI highlight */}
              <div
                className="rounded-3xl p-8"
                style={{
                  background: `linear-gradient(135deg, color-mix(in srgb, ${accentColor} 10%, transparent), transparent)`,
                  border: `1px solid color-mix(in srgb, ${accentColor} 18%, transparent)`,
                }}
              >
                <div className="mono text-xs text-muted mb-2">IMPACT</div>
                <div className="text-2xl font-semibold leading-tight">{impl.roi}</div>
              </div>

              {/* Workflow */}
              <div
                className="rounded-3xl p-8"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Workflow</h2>
                  <a 
                    href="https://openclaw.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-full transition-all hover:scale-105"
                    style={{
                      background: `color-mix(in srgb, ${accentColor} 12%, transparent)`,
                      border: `1px solid color-mix(in srgb, ${accentColor} 25%, transparent)`,
                      color: "rgba(255,255,255,0.8)",
                    }}
                  >
                    Powered by OpenClaw
                  </a>
                </div>
                <div className="space-y-4">
                  {workflow.map((s: any) => (
                    <div key={s.step} className="flex gap-4">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-semibold flex-shrink-0"
                        style={{
                          background: `color-mix(in srgb, ${accentColor} 10%, transparent)`,
                          border: `1px solid color-mix(in srgb, ${accentColor} 18%, transparent)`,
                          color: "rgba(255,255,255,0.9)",
                        }}
                      >
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
                <div
                  className="rounded-3xl p-8"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="mono text-xs text-muted mb-3">BEFORE</div>
                  <ul className="space-y-2 text-sm text-muted">
                    {(beforeAfter.before || []).slice(0, 5).map((t: string, i: number) => (
                      <li key={i}>• {t}</li>
                    ))}
                  </ul>
                </div>
                <div
                  className="rounded-3xl p-8"
                  style={{
                    background: `linear-gradient(135deg, color-mix(in srgb, ${accentColor} 6%, transparent), transparent)`,
                    border: `1px solid color-mix(in srgb, ${accentColor} 14%, transparent)`,
                  }}
                >
                  <div className="mono text-xs text-muted mb-3">AFTER</div>
                  <ul className="space-y-2 text-sm text-muted">
                    {(beforeAfter.after || []).slice(0, 5).map((t: string, i: number) => (
                      <li key={i}>• {t}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Benefits */}
              <div
                className="rounded-3xl p-8"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <h2 className="text-xl font-semibold mb-5">What you get</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {benefits.slice(0, 6).map((b: string, i: number) => (
                    <div
                      key={i}
                      className="rounded-2xl p-4 text-sm"
                      style={{
                        background: `color-mix(in srgb, ${accentColor} 6%, transparent)`,
                        border: `1px solid color-mix(in srgb, ${accentColor} 12%, transparent)`,
                        color: "rgba(255,255,255,0.82)",
                      }}
                    >
                      {b}
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Description (optional) */}
              {useCase.detailed_description && (
                <div
                  className="rounded-3xl p-8"
                  style={{
                    background: `linear-gradient(135deg, color-mix(in srgb, ${accentColor} 6%, transparent), transparent)`,
                    border: `1px solid color-mix(in srgb, ${accentColor} 12%, transparent)`,
                  }}
                >
                  <h2 className="text-xl font-semibold mb-4">More detail</h2>
                  <p className="text-muted leading-relaxed">{useCase.detailed_description}</p>
                </div>
              )}

              {/* Tools Used */}
              {useCase.tools && useCase.tools.length > 0 && (
                <div
                  className="rounded-3xl p-8"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <h2 className="text-xl font-semibold mb-4">Tools & integrations</h2>
                  <div className="flex flex-wrap gap-3">
                    {useCase.tools.map((tool: string) => (
                      <span
                        key={tool}
                        className="inline-flex items-center rounded-full px-4 py-2 text-sm"
                        style={{
                          background: `color-mix(in srgb, ${accentColor} 8%, transparent)`,
                          border: `1px solid color-mix(in srgb, ${accentColor} 15%, transparent)`,
                          color: "rgba(255,255,255,0.8)",
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Stats Card */}
              <div
                className="rounded-3xl p-6"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted mb-5">Details</h3>
                <div className="space-y-5">
                  <div>
                    <div className="text-xs text-muted mb-1">Time saved</div>
                    <div className="text-lg font-semibold" style={{ color: accentColor }}>
                      ⏱️ {useCase.time_saved}
                    </div>
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

              {/* CTA Card */}
              <div
                className="rounded-3xl p-6"
                style={{
                  background: `linear-gradient(135deg, color-mix(in srgb, ${accentColor} 8%, transparent), transparent)`,
                  border: `1px solid color-mix(in srgb, ${accentColor} 18%, transparent)`,
                }}
              >
                <h3 className="font-semibold mb-2">Build this with OpenClaw</h3>
                <p className="text-sm text-muted mb-4">Open-source AI agent platform. Run agents locally with full control.</p>
                <div className="space-y-2">
                  <a
                    href="https://github.com/openclaw/openclaw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center justify-center w-full px-5 py-3 rounded-full font-semibold text-sm transition-all hover:scale-[1.03]"
                  >
                    Get started →
                  </a>
                  <a
                    href="https://openclaw.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center justify-center w-full px-5 py-3 rounded-full font-semibold text-sm transition-all hover:scale-[1.03]"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Use Cases ── */}
      {related.length > 0 && (
        <section className="pb-24">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-semibold mb-8">Related use cases</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((uc) => {
                const relAccent = getAccentColor(uc.accent_color);
                return (
                  <Link
                    key={uc.id}
                    href={`/use-cases/${uc.id}/`}
                    className="rounded-3xl p-6 transition-all hover:scale-[1.02] flex flex-col"
                    style={{
                      background: `linear-gradient(135deg, color-mix(in srgb, ${relAccent} 6%, transparent), transparent)`,
                      border: `1px solid color-mix(in srgb, ${relAccent} 15%, transparent)`,
                    }}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-lg">{getIcon(uc.icon)}</span>
                      <h3 className="text-sm font-semibold leading-tight">{uc.title}</h3>
                    </div>
                    <p className="text-xs text-muted leading-relaxed flex-1">{uc.description}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-xs text-muted">⏱️ {uc.time_saved}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Footer ── */}
      <footer className="py-10" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted">© {new Date().getFullYear()} AI Shift HQ</div>
          <div className="flex items-center gap-6 text-sm">
            <a href="mailto:hello@aishifthq.com" className="text-muted hover:text-white transition-colors">Contact</a>
            <a href="/" className="text-muted hover:text-white transition-colors">Home</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
