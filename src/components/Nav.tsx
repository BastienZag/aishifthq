"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/roi-calculator", label: "ROI Calculator" },
  { href: "/blog", label: "Blog" },
  { href: "/#pricing", label: "Pricing" },
];

export default function Nav({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 w-full z-50"
      style={{
        background: "rgba(7,7,10,0.68)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="OpenClaw Labs"
            width={34}
            height={34}
            className="rounded-lg"
          />
          <div className="leading-tight">
            <div className="text-[15px] font-semibold">OpenClaw Labs</div>
            <div
              className="text-[11px] tracking-wide uppercase"
              style={{ color: "var(--c)" }}
            >
              training + automation
            </div>
          </div>
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-muted hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={
                active === l.label
                  ? "text-white"
                  : "text-muted hover:text-white transition-colors"
              }
            >
              {l.label}
            </Link>
          ))}
          <a
            href="/#contact"
            className="px-5 py-2 rounded-full font-semibold transition-all hover:scale-[1.03] btn-primary text-sm"
          >
            Book a call
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 space-y-4 text-sm"
          style={{ background: "rgba(7,7,10,0.95)" }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`block ${active === l.label ? "text-white" : "text-muted hover:text-white transition-colors"}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="/#contact"
            className="block text-center px-5 py-2 rounded-full font-semibold transition-all hover:scale-[1.03] btn-primary text-sm"
            onClick={() => setOpen(false)}
          >
            Book a call
          </a>
        </div>
      )}
    </nav>
  );
}
