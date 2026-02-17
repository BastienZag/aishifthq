import { supabase } from '@/lib/supabase';
import type { UseCase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';

async function getUseCase(id: string): Promise<UseCase | null> {
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
    title: `${useCase.title} | AI Shift HQ`,
    description: useCase.detailed_description || useCase.description,
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

export default async function UseCaseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const useCase = await getUseCase(id);
  if (!useCase) notFound();

  const accentColor = getAccentColor(useCase.accent_color);
  const complexityColor = getComplexityColor(useCase.complexity);
  const related = await getRelatedUseCases(useCase);

  return (
    <div className="min-h-screen bg-noise">
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
            <a href="/#contact" className="px-5 py-2 rounded-full font-semibold transition-all hover:scale-[1.03] btn-primary text-sm">Book a call</a>
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
              {/* Detailed Description */}
              {useCase.detailed_description && (
                <div
                  className="rounded-3xl p-8"
                  style={{
                    background: `linear-gradient(135deg, color-mix(in srgb, ${accentColor} 6%, transparent), transparent)`,
                    border: `1px solid color-mix(in srgb, ${accentColor} 12%, transparent)`,
                  }}
                >
                  <h2 className="text-xl font-semibold mb-4">How it works</h2>
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
                    {useCase.tools.map(tool => (
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
                <h3 className="font-semibold mb-2">Want this automation?</h3>
                <p className="text-sm text-muted mb-4">We can build this for your team in 2–4 weeks.</p>
                <a
                  href="/#contact"
                  className="btn-primary inline-flex items-center justify-center w-full px-5 py-3 rounded-full font-semibold text-sm transition-all hover:scale-[1.03]"
                >
                  Book a call →
                </a>
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
