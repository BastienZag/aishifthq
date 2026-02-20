import { getAllPosts, getPostBySlug } from "@/lib/blog";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found — OpenClaw Labs",
    };
  }

  return {
    title: `${post.title} — OpenClaw Labs`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Organization",
      "name": "OpenClaw Labs"
    },
    "publisher": {
      "@type": "Organization",
      "name": "OpenClaw Labs",
      "logo": {
        "@type": "ImageObject",
        "url": "https://openclawlabs.ai/images/logo.png"
      }
    },
    "datePublished": post.date,
    "url": `https://openclawlabs.ai/blog/${slug}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://openclawlabs.ai/blog/${slug}`
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://openclawlabs.ai"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://openclawlabs.ai/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://openclawlabs.ai/blog/${slug}`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-noise">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Nav active="Blog" />

      {/* ── Article Header ── */}
      <article className="relative pt-28 md:pt-36">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative max-w-4xl mx-auto px-6 pb-16">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted hover:text-white transition-colors mb-8">
            <span>←</span> Back to blog
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <time className="mono text-sm" style={{ color: "var(--c)" }}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="text-muted">•</span>
            <span className="mono text-sm text-muted">{post.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            {post.title}
          </h1>

          <p className="mt-6 text-xl text-muted leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </article>

      {/* ── Article Content ── */}
      <section className="py-8">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-invert prose-lg max-w-none">
            <ReactMarkdown
              components={{
                h2: ({ node, ...props }) => (
                  <h2 className="text-3xl font-semibold mt-12 mb-4 tracking-tight" {...props} />
                ),
                h3: ({ node, ...props }) => (
                  <h3 className="text-2xl font-semibold mt-8 mb-3 tracking-tight" {...props} />
                ),
                h4: ({ node, ...props }) => (
                  <h4 className="text-xl font-semibold mt-6 mb-2" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="text-lg text-muted leading-relaxed my-6" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="my-6 space-y-3 list-none" {...props} />
                ),
                ol: ({ node, ...props }) => (
                  <ol className="my-6 space-y-3 list-none counter-reset-item" {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li className="text-lg text-muted leading-relaxed pl-7 relative before:content-['→'] before:absolute before:left-0" style={{ color: "var(--c)" }} {...props} />
                ),
                a: ({ node, ...props }) => (
                  <a className="text-white underline decoration-1 underline-offset-4 hover:decoration-2 transition-all" style={{ textDecorationColor: "var(--c)" }} {...props} />
                ),
                blockquote: ({ node, ...props }) => (
                  <blockquote className="my-8 pl-6 border-l-2 italic text-muted" style={{ borderColor: "var(--c)" }} {...props} />
                ),
                code: ({ node, className, children, ...props }) => {
                  const isBlock = className?.includes("language-");
                  if (isBlock) {
                    return (
                      <code className="block bg-black/40 rounded-xl p-6 my-6 overflow-x-auto text-sm mono" {...props}>
                        {children}
                      </code>
                    );
                  }
                  return (
                    <code className="mono text-sm px-2 py-1 rounded" style={{ background: "rgba(180,255,57,0.1)", color: "var(--a)" }} {...props}>
                      {children}
                    </code>
                  );
                },
                pre: ({ node, ...props }) => (
                  <pre className="bg-black/40 rounded-xl p-6 my-6 overflow-x-auto" {...props} />
                ),
                strong: ({ node, ...props }) => (
                  <strong className="font-semibold text-white" {...props} />
                ),
                hr: ({ node, ...props }) => (
                  <hr className="my-12 border-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" {...props} />
                ),
                table: ({ node, ...props }) => (
                  <div className="my-8 overflow-x-auto">
                    <table className="w-full border-collapse" {...props} />
                  </div>
                ),
                thead: ({ node, ...props }) => (
                  <thead className="border-b border-white/10" {...props} />
                ),
                th: ({ node, ...props }) => (
                  <th className="text-left py-3 px-4 font-semibold text-sm" style={{ color: "var(--c)" }} {...props} />
                ),
                td: ({ node, ...props }) => (
                  <td className="py-3 px-4 text-muted border-b border-white/5" {...props} />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glow-border rounded-[28px] p-10 md:p-14 text-center" style={{ background: "linear-gradient(135deg, rgba(180,255,57,0.05), rgba(0,210,255,0.03), rgba(124,92,255,0.04))" }}>
            <div className="relative z-10">
              <div className="mono text-sm" style={{ color: "var(--a)" }}>Get started</div>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
                Want help with AI adoption?
              </h2>
              <p className="mt-5 text-lg text-muted leading-relaxed max-w-xl mx-auto">
                We run hands-on workshops and ship workflow automations for engineering and ops teams.
              </p>
              <a href="/#contact" className="mt-8 inline-flex items-center justify-center btn-primary px-7 py-4 rounded-full font-semibold text-[15px] transition-all hover:scale-[1.03]">
                Book a 30-min discovery call →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
