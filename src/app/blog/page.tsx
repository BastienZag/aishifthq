import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "AI Adoption Blog — Practical Guides on AI Training & Automation | OpenClaw Labs",
  description: "Practical guides on AI adoption, developer training, and workflow automation for teams. Learn how to implement Cursor, Claude Code, and OpenClaw agents in your organization.",
  keywords: "AI adoption, AI training, workflow automation, developer productivity, AI agents, Cursor training, Claude Code, OpenClaw automation",
  openGraph: {
    title: "AI Adoption Blog — OpenClaw Labs",
    description: "Practical guides on AI training, workflow automation, and making adoption stick.",
    type: "website",
    url: "https://openclawlabs.ai/blog",
    siteName: "OpenClaw Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Adoption Blog — OpenClaw Labs",
    description: "Practical guides on AI training and automation.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-noise">
      <Nav active="Blog" />

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
            Practical guides on AI training, workflow automation, and making adoption stick—learned from real-world experience with engineering and ops teams.
          </p>
        </div>
      </section>

      {/* ── Blog Grid ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => {
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
              <a href="/#contact" className="mt-8 inline-flex items-center justify-center btn-primary px-7 py-4 rounded-full font-semibold text-[15px] transition-all hover:scale-[1.03]">
                Book a 30-min call →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
