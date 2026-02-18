import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/roi-calculator", label: "ROI Calculator" },
  { href: "/blog", label: "Blog" },
  { href: "mailto:hello@aishifthq.com", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      className="py-10"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="AI Shift HQ"
            width={24}
            height={24}
            className="rounded-md"
          />
          <div className="text-sm text-muted">
            © {new Date().getFullYear()} AI Shift HQ
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-sm">
          {footerLinks.map((l) =>
            l.href.startsWith("mailto:") ? (
              <a
                key={l.href}
                href={l.href}
                className="text-muted hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="text-muted hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            )
          )}
        </div>
      </div>
    </footer>
  );
}
