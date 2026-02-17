import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "AI Adoption Blog — Practical Guides on AI Training & Automation | AI Shift HQ",
  description: "Practical guides on AI adoption, developer training, and workflow automation for teams. Learn how to implement Cursor, Claude Code, and OpenClaw agents in your organization.",
  keywords: "AI adoption, AI training, workflow automation, developer productivity, AI agents, Cursor training, Claude Code, OpenClaw automation",
  openGraph: {
    title: "AI Adoption Blog — AI Shift HQ",
    description: "Practical guides on AI training, workflow automation, and making adoption stick.",
    type: "website",
    url: "https://aishifthq.com/blog",
    siteName: "AI Shift HQ",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Adoption Blog — AI Shift HQ",
    description: "Practical guides on AI training and automation.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-noise">
      {/* ── Nav ── */}
      <nav className="fixed top-0 w-full z-50" style={{ background: "rgba(7,7,10,0.68)", backdropFilter: "blur(18px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="AI Shift HQ" width={34} height={34} className="rounded-lg" />
            <div className="leading-tight">
              <div className="text-[15px] font-semibold">AI Shift HQ</div>
              <div className="text-[11px] tracking-wide uppercase" style={{ color: "var(--c)" }}>training + automation</div>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-7 text-sm">
            <Link href="/#services" className="text-muted hover:text-white transition-colors">Services</Link>
            <Link href="/#examples" className="text-muted hover:text-white transition-colors">Automations</Link>
            <Link href="/use-cases" className="text-muted hover:text-white transition-colors">Use Cases</Link>
            <Link href="/#pricing" className="text-muted hover:text-white transition-colors">Pricing</Link>
            <Link href="/#faq" className="text-muted hover:text-white transition-colors">FAQ</Link>
            <Link href="/blog" className="text-white">Blog</Link>
            <a href="/#contact" className="px-5 py-2 rounded-full font-semibold transition-all hover:scale-[1.03] btn-primary text-sm">Book a call</a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-28 md:pt-36 pb-16">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="mono text-sm tracking-wide mb-4" style={{ color: "var(--c)" }}>Blog</div>
          <h1 className="text-5xl md:text-6xl font-semibold leading-[0.95] tracking-tight">
            AI adoption,<br />
            <span className="text-gradient">real talk</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
            Practical guides on AI training, workflow automation, and making adoption stick—learned from 30+ pilots with engineering and ops teams.
          </p>
        </div>
      </section>

      {/* ── Blog Grid ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => {
              // Assign colors based on index
              const colors = ["var(--a)", "var(--c)", "var(--b)"];
              const color = colors[posts.indexOf(post) % 3];

              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-3xl p-8 transition-all hover:scale-[1.02]"
                  style={{
                    background: `linear-gradient(135deg, color-mix(in srgb, ${color} 6%, transparent), transparent)`,
                    border: `1px solid color-mix(in srgb, ${color} 15%, transparent)`,
                  }}
                >
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <time className="mono text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                    <span className="mono text-xs px-3 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid color-mix(in srgb, ${color} 12%, transparent)`, color: "rgba(255,255,255,0.5)" }}>
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-semibold leading-tight group-hover:text-gradient transition-colors">
                    {post.title}
                  </h2>

                  <p className="mt-4 text-sm text-muted leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-medium" style={{ color }}>
                    Read more
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glow-border rounded-[28px] p-10 md:p-14 text-center" style={{ background: "linear-gradient(135deg, rgba(180,255,57,0.05), rgba(0,210,255,0.03), rgba(124,92,255,0.04))" }}>
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="mono text-sm" style={{ color: "var(--a)" }}>Get started</div>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
                Want to run a pilot for your team?
              </h2>
              <p className="mt-5 text-lg text-muted leading-relaxed">
                We run hands-on AI workshops + ship workflow automations. 4 weeks, real outcomes.
              </p>
              <a href="mailto:hello@aishifthq.com" className="mt-8 inline-flex items-center justify-center btn-primary px-7 py-4 rounded-full font-semibold text-[15px] transition-all hover:scale-[1.03]">
                Book a 30-min call →
              </a>
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
            <Link href="/blog" className="text-muted hover:text-white transition-colors">Blog</Link>
            <a href="mailto:hello@aishifthq.com" className="text-muted hover:text-white transition-colors">Contact</a>
            <Link href="/" className="text-muted hover:text-white transition-colors">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
