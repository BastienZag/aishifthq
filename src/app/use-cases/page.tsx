import { supabase } from '@/lib/supabase';
import type { UseCase } from '@/lib/supabase';
import UseCasesClient from './UseCasesClient';

export const metadata = {
  title: 'AI Automation Use Cases — Real-World OpenClaw Examples | AI Shift HQ',
  description: 'Explore 100+ real-world AI automation use cases powered by OpenClaw. Discover how teams across 20+ industries use AI agents to automate workflows, from simple routing to complex multi-step processes.',
  keywords: 'AI automation use cases, OpenClaw automation examples, workflow automation, AI agents, automation examples, real-world AI use cases, OpenClaw use cases',
  openGraph: {
    title: 'AI Automation Use Cases — OpenClaw Examples',
    description: '100+ real-world AI automation use cases across industries.',
    type: 'website',
    url: 'https://aishifthq.com/use-cases',
    siteName: 'AI Shift HQ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Use Cases — OpenClaw Examples',
    description: '100+ real-world AI automation use cases across industries.',
  },
};

async function getUseCases(): Promise<UseCase[]> {
  const { data, error } = await supabase
    .from('use_cases')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching use cases:', error);
    return [];
  }

  return data || [];
}

export default async function UseCasesPage() {
  const useCases = await getUseCases();

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
            <a href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-full font-semibold transition-all hover:scale-[1.03] btn-primary text-sm">Get OpenClaw</a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-28 md:pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="mono text-sm tracking-wide" style={{ color: "var(--a)" }}>use cases</div>
          <h1 className="mt-3 text-5xl md:text-[4rem] font-semibold leading-[0.95] tracking-tight">
            Real-world AI<br />
            <span className="text-gradient">automation</span> examples.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-3xl leading-relaxed">
            Explore how teams across industries use <strong className="text-white">OpenClaw agents</strong> to automate repetitive work, route information, and keep operations flowing — without replacing people.
          </p>
          <div className="mt-5 flex items-center gap-3 text-sm">
            <span className="text-muted">Powered by</span>
            <a href="https://openclaw.ai" target="_blank" rel="noopener noreferrer" className="text-gradient font-semibold hover:opacity-80 transition-opacity">
              OpenClaw
            </a>
            <span className="text-muted">— open-source AI agent platform</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted">
            <span><span style={{ color: "var(--c)" }}>{useCases.length}</span> use cases</span>
            <span>•</span>
            <span><span style={{ color: "var(--b)" }}>{new Set(useCases.map(uc => uc.industry)).size}</span> industries</span>
            <span>•</span>
            <span><span style={{ color: "var(--a)" }}>{new Set(useCases.map(uc => uc.department)).size}</span> departments</span>
          </div>
        </div>
      </section>

      {/* ── Use Cases Grid (Client Component) ── */}
      <UseCasesClient useCases={useCases} />

      {/* ── CTA ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glow-border rounded-[28px] p-10 md:p-14" style={{ background: "linear-gradient(135deg, rgba(180,255,57,0.05), rgba(0,210,255,0.03), rgba(124,92,255,0.04))" }}>
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Ready to build your own AI agents?</h2>
              <p className="mt-5 text-lg text-muted leading-relaxed">
                OpenClaw is an open-source platform that lets you run AI agents locally with access to Slack, email, browser, file system, APIs, and more.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center justify-center px-7 py-4 rounded-full font-semibold text-[15px] transition-all hover:scale-[1.03]">Get started with OpenClaw →</a>
                <a href="https://openclaw.ai" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center justify-center px-7 py-4 rounded-full font-semibold text-[15px] transition-all hover:scale-[1.03]">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
