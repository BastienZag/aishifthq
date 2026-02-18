'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import type { UseCase } from '@/lib/supabase';
import UseCasesClient from './UseCasesClient';
import UseCaseDetail from './UseCaseDetail';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function UseCasesRouter() {
  const [slug, setSlug] = useState<string | null>(null);
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    const match = path.match(/^\/use-cases\/([^/]+)\/?$/);
    setSlug(match ? match[1] : null);
    setResolved(true);
  }, []);

  if (!resolved) {
    return (
      <div className="min-h-screen bg-noise flex items-center justify-center">
        <div className="text-muted">Loading…</div>
      </div>
    );
  }

  if (slug) {
    return <UseCaseDetail id={slug} />;
  }

  return <UseCasesListing />;
}

function UseCasesListing() {
  const [useCases, setUseCases] = useState<UseCase[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from('use_cases')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        setUseCases(data || []);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-noise">
      <Nav active="Use Cases" />

      {/* Hero */}
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
          {!loading && (
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted">
              <span><span style={{ color: "var(--c)" }}>{useCases.length}</span> use cases</span>
              <span>•</span>
              <span><span style={{ color: "var(--b)" }}>{new Set(useCases.map(uc => uc.industry)).size}</span> industries</span>
              <span>•</span>
              <span><span style={{ color: "var(--a)" }}>{new Set(useCases.map(uc => uc.department)).size}</span> departments</span>
            </div>
          )}
        </div>
      </section>

      {loading ? (
        <div className="text-center py-20 text-muted">Loading use cases…</div>
      ) : (
        <UseCasesClient useCases={useCases} />
      )}

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glow-border rounded-[28px] p-10 md:p-14" style={{ background: "linear-gradient(135deg, rgba(180,255,57,0.05), rgba(0,210,255,0.03), rgba(124,92,255,0.04))" }}>
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Want this automation running in 30 days?</h2>
              <p className="mt-5 text-lg text-muted leading-relaxed">
                We deploy these automations on your infrastructure with OpenClaw. Book a free discovery call and get a custom automation roadmap.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/#contact" className="btn-primary inline-flex items-center justify-center px-7 py-4 rounded-full font-semibold text-[15px] transition-all hover:scale-[1.03]">Get this built for your team → Book a call</a>
                <a href="https://openclaw.ai" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center justify-center px-7 py-4 rounded-full font-semibold text-[15px] transition-all hover:scale-[1.03]">Powered by OpenClaw — Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
